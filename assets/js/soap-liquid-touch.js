/**
 * ═══════════════════════════════════════════════════════════════════════
 * PURREINS FREQUENCY — TACTILE SOAP LIQUID STIMULATION ENGINE
 * ═══════════════════════════════════════════════════════════════════════
 * Localized water ripple stimulation for Curd Soaps.
 * In multi-product scenes (e.g. Hero Atelier composition), non-soap products
 * (quilts, duck eggs, earthen pot) remain completely still and solid.
 * Only touching the curd soap creates a calm, whisper-quiet liquid wake
 * harmonically synced to the horseshoe logo frequency speed.
 */

(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Config synced to horseshoe logo motion
  var SOAP_CONFIG = {
    strength: 0.008,   // Delicate micro-touch
    speed: 0.65,       // Slow, calm pace matching logo outward motion
    frequency: 8.0     // Wide, gentle wave (1-2 ripples max)
  };

  var VERT_SRC = [
    'attribute vec2 aPosition;',
    'attribute vec2 aTexCoord;',
    'varying vec2 vUv;',
    'void main() {',
    '  vUv = aTexCoord;',
    '  gl_Position = vec4(aPosition, 0.0, 1.0);',
    '}'
  ].join('\n');

  var FRAG_SRC = [
    'precision highp float;',
    'varying vec2 vUv;',
    'uniform sampler2D uTexture;',
    'uniform vec2 uMouse;',
    'uniform float uTime;',
    'uniform float uHover;',
    'uniform float uStrength;',
    'uniform float uSpeed;',
    'uniform float uFrequency;',
    'uniform vec2 uResolution;',
    'uniform int uMode;', // 0 = Hero Composite, 1 = Pure Soap, 2 = Egg & Soap Nest

    'float getSoapMask(vec2 uv) {',
    '  if (uMode == 0) {',
    '    // Hero Composite: Soap bars in lower-right foreground',
    '    vec2 soapCenter = vec2(0.70, 0.82);',
    '    vec2 soapRadius = vec2(0.20, 0.13);',
    '    vec2 d = abs(uv - soapCenter) / soapRadius;',
    '    float dist = length(d);',
    '    return 1.0 - smoothstep(0.70, 1.15, dist);',
    '  } else if (uMode == 1) {',
    '    // Pure Soap: Handcrafted curd soap blocks in center',
    '    vec2 soapCenter = vec2(0.50, 0.50);',
    '    vec2 soapRadius = vec2(0.38, 0.35);',
    '    vec2 d = abs(uv - soapCenter) / soapRadius;',
    '    float dist = length(d);',
    '    return 1.0 - smoothstep(0.75, 1.20, dist);',
    '  } else if (uMode == 2) {',
    '    // Egg & Soap Nest: Soap bar is resting on the left',
    '    vec2 soapCenter = vec2(0.32, 0.54);',
    '    vec2 soapRadius = vec2(0.20, 0.22);',
    '    vec2 d = abs(uv - soapCenter) / soapRadius;',
    '    float dist = length(d);',
    '    return 1.0 - smoothstep(0.70, 1.15, dist);',
    '  }',
    '  return 0.0;',
    '}',

    'void main() {',
    '  vec2 uv = vUv;',
    '  float soapMask = getSoapMask(uv);',
    '  float cursorOnSoap = getSoapMask(uMouse);',

    '  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);',
    '  vec2 m = uMouse * aspect;',
    '  vec2 p = uv * aspect;',

    '  float dist = distance(p, m);',
    '  float wave = sin(dist * uFrequency - uTime * uSpeed);',
    '  float decay = exp(-dist * 2.8);',
    '  vec2 dir = normalize(p - m + 0.0001);',

    '  // Ripple is STRICTLY enabled when touching soap and confined to soap area',
    '  float activeTouch = uHover * soapMask * smoothstep(0.05, 0.40, cursorOnSoap);',
    '  vec2 displacement = dir * wave * decay * uStrength * activeTouch;',

    '  vec4 color = texture2D(uTexture, uv + displacement);',
    '  float highlight = max(0.0, wave * decay * activeTouch) * 0.045;',
    '  color.rgb += vec3(highlight);',

    '  gl_FragColor = color;',
    '}'
  ].join('\n');

  function compileShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function SoapTouchEffect(wrapper, img, mode) {
    this.wrapper = wrapper;
    this.img = img;
    this.mode = mode; // 0: hero composite, 1: pure soap, 2: nest

    this.canvas = document.createElement('canvas');
    this.canvas.className = 'soap-liquid-canvas';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '2';
    this.canvas.style.opacity = '0';
    this.canvas.style.transition = 'opacity 0.3s ease';

    // Mask inheritance for hero vertical oval egg blend
    if (wrapper.style.webkitMaskImage) {
      this.canvas.style.webkitMaskImage = wrapper.style.webkitMaskImage;
      this.canvas.style.maskImage = wrapper.style.maskImage;
      this.canvas.style.webkitMaskSize = wrapper.style.webkitMaskSize;
      this.canvas.style.maskSize = wrapper.style.maskSize;
    }

    // Ensure wrapper has relative positioning
    var curPos = window.getComputedStyle(wrapper).position;
    if (curPos === 'static') wrapper.style.position = 'relative';

    wrapper.appendChild(this.canvas);

    try {
      this.gl = this.canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    } catch (e) {
      this.gl = null;
    }

    if (!this.gl) return;

    this.hover = 0.0;
    this.targetHover = 0.0;
    this.mouse = { x: 0.5, y: 0.5 };
    this.targetMouse = { x: 0.5, y: 0.5 };
    this.animating = false;
    this.startTime = performance.now();

    this.initGL();
    this.loadTexture();
    this.bindEvents();
  }

  SoapTouchEffect.prototype.initGL = function () {
    var gl = this.gl;
    var vert = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
    var frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vert || !frag) return;

    this.program = gl.createProgram();
    gl.attachShader(this.program, vert);
    gl.attachShader(this.program, frag);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) return;
    gl.useProgram(this.program);

    var vertices = new Float32Array([
      -1, -1, 0, 1,
       1, -1, 1, 1,
      -1,  1, 0, 0,
      -1,  1, 0, 0,
       1, -1, 1, 1,
       1,  1, 1, 0
    ]);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var aPos = gl.getAttribLocation(this.program, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);

    var aTex = gl.getAttribLocation(this.program, 'aTexCoord');
    gl.enableVertexAttribArray(aTex);
    gl.vertexAttribPointer(aTex, 2, gl.FLOAT, false, 16, 8);

    this.uMouse = gl.getUniformLocation(this.program, 'uMouse');
    this.uTime = gl.getUniformLocation(this.program, 'uTime');
    this.uHover = gl.getUniformLocation(this.program, 'uHover');
    this.uStrength = gl.getUniformLocation(this.program, 'uStrength');
    this.uSpeed = gl.getUniformLocation(this.program, 'uSpeed');
    this.uFrequency = gl.getUniformLocation(this.program, 'uFrequency');
    this.uResolution = gl.getUniformLocation(this.program, 'uResolution');
    this.uMode = gl.getUniformLocation(this.program, 'uMode');

    this.resize();
  };

  SoapTouchEffect.prototype.resize = function () {
    var rect = this.wrapper.getBoundingClientRect();
    this.width = rect.width || 300;
    this.height = rect.height || 300;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    if (this.gl) {
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  SoapTouchEffect.prototype.loadTexture = function () {
    var self = this;
    var gl = this.gl;
    if (!gl) return;

    var tex = gl.createTexture();
    var tempImg = new Image();
    tempImg.crossOrigin = 'anonymous';
    tempImg.src = this.img.currentSrc || this.img.src;

    function applyTexture() {
      try {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tempImg);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        self.texture = tex;
        self.canvas.style.opacity = '1';
        self.renderFrame((performance.now() - self.startTime) / 1000);
      } catch (e) {
        // Fallback silently to static img
      }
    }

    if (tempImg.complete && tempImg.naturalWidth > 0) {
      applyTexture();
    } else {
      tempImg.onload = applyTexture;
    }
  };

  SoapTouchEffect.prototype.bindEvents = function () {
    var self = this;

    this.wrapper.addEventListener('mouseenter', function (e) {
      self.targetHover = 1.0;
      self.updateMouse(e);
      self.startLoop();
    });

    this.wrapper.addEventListener('mousemove', function (e) {
      self.updateMouse(e);
      if (!self.animating) self.startLoop();
    });

    this.wrapper.addEventListener('mouseleave', function () {
      self.targetHover = 0.0;
    });

    window.addEventListener('resize', function () {
      self.resize();
    }, { passive: true });
  };

  SoapTouchEffect.prototype.updateMouse = function (e) {
    var rect = this.wrapper.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.targetMouse.x = (e.clientX - rect.left) / rect.width;
      this.targetMouse.y = (e.clientY - rect.top) / rect.height;
    }
  };

  SoapTouchEffect.prototype.startLoop = function () {
    if (this.animating) return;
    this.animating = true;
    var self = this;

    function tick() {
      var elapsed = (performance.now() - self.startTime) / 1000;
      self.renderFrame(elapsed);

      // Keep looping while hovering or while hover transition is settling
      if (self.animating) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  };

  SoapTouchEffect.prototype.renderFrame = function (time) {
    if (!this.gl || !this.program || !this.texture) return;

    this.hover += (this.targetHover - this.hover) * 0.06;
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.08;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.08;

    // Sleep when hover is fully back to 0
    if (this.targetHover === 0.0 && this.hover < 0.002) {
      this.hover = 0.0;
      this.animating = false;
    }

    var gl = this.gl;
    gl.useProgram(this.program);

    gl.uniform2f(this.uMouse, this.mouse.x, this.mouse.y);
    gl.uniform1f(this.uTime, time);
    gl.uniform1f(this.uHover, this.hover);
    gl.uniform1f(this.uStrength, SOAP_CONFIG.strength);
    gl.uniform1f(this.uSpeed, SOAP_CONFIG.speed);
    gl.uniform1f(this.uFrequency, SOAP_CONFIG.frequency);
    gl.uniform2f(this.uResolution, this.width, this.height);
    gl.uniform1i(this.uMode, this.mode);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  // Auto-init scanner
  function attachSoapEffects() {
    // 1. Homepage Hero Visual (hero-vertical.jpg)
    var heroContainers = document.querySelectorAll('.hero-vertical-blend');
    heroContainers.forEach(function (container) {
      if (container.getAttribute('data-soap-attached')) return;
      var img = container.querySelector('img');
      if (img && img.src && img.src.indexOf('hero-vertical.jpg') !== -1) {
        container.setAttribute('data-soap-attached', 'true');
        new SoapTouchEffect(container, img, 0); // mode 0: Hero composite
      }
    });

    // 2. Shop page Chapter 02 Sculptural Soaps (#carousel-soaps)
    var soapCarousel = document.getElementById('carousel-soaps');
    if (soapCarousel) {
      var soapCards = soapCarousel.querySelectorAll('.img-zoom-wrapper');
      soapCards.forEach(function (wrapper) {
        if (wrapper.getAttribute('data-soap-attached')) return;
        var img = wrapper.querySelector('img');
        if (img && img.src) {
          wrapper.setAttribute('data-soap-attached', 'true');
          // Pure soap cube cards
          new SoapTouchEffect(wrapper, img, 1);
        }
      });
    }

    // 3. Any featured product card or bundle containing soaps
    var productWrappers = document.querySelectorAll('.img-zoom-wrapper');
    productWrappers.forEach(function (wrapper) {
      if (wrapper.getAttribute('data-soap-attached')) return;
      var img = wrapper.querySelector('img');
      if (img && img.src) {
        if (img.src.indexOf('bubble-cube') !== -1 || img.src.indexOf('artisan-soaps') !== -1) {
          wrapper.setAttribute('data-soap-attached', 'true');
          new SoapTouchEffect(wrapper, img, 1); // Pure soap
        } else if (img.src.indexOf('egg-soap-nest') !== -1) {
          wrapper.setAttribute('data-soap-attached', 'true');
          new SoapTouchEffect(wrapper, img, 2); // Egg & soap nest
        }
      }
    });
  }

  // Run on DOM ready and after carousel populations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(attachSoapEffects, 100);
      setTimeout(attachSoapEffects, 600);
    });
  } else {
    setTimeout(attachSoapEffects, 100);
    setTimeout(attachSoapEffects, 600);
  }

  // Periodic scan to catch dynamic shop/featured renders
  var observer = new MutationObserver(function () {
    attachSoapEffects();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  window.PurreinsSoapTouch = {
    attach: attachSoapEffects,
    config: SOAP_CONFIG
  };

})();
