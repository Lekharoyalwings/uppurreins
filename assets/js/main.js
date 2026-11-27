// UP Purreins - Main Application Script

// Navigation & Layout Components
function setupNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Highlight active links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-[#e2c9a5]', 'font-semibold', 'border-b-2', 'border-brand-mossLight');
    } else {
      link.classList.add('text-[#cbb89d]', 'hover:text-[#e2c9a5]');
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const mobileClose = document.getElementById('mobile-menu-close');
  const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
  const drawerContent = mobileMenu ? mobileMenu.querySelector('.drawer-content') : null;

  function openMobileNav() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    void mobileMenu.offsetWidth;
    if (mobileBackdrop) {
      mobileBackdrop.classList.add('open');
      mobileBackdrop.classList.remove('opacity-0');
    }
    if (drawerContent) {
      drawerContent.classList.add('open');
      drawerContent.classList.remove('opacity-0', '-translate-y-2');
    }
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-expanded', 'true');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'x');
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      }
    }
  }

  function closeMobileNav() {
    if (!mobileMenu) return;
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('open');
      mobileBackdrop.classList.add('opacity-0');
    }
    if (drawerContent) {
      drawerContent.classList.remove('open');
      drawerContent.classList.add('opacity-0', '-translate-y-2');
    }
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-expanded', 'false');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      }
    }
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isClosed = mobileMenu.classList.contains('hidden') || (drawerContent && !drawerContent.classList.contains('open'));
      if (isClosed) {
        openMobileNav();
      } else {
        closeMobileNav();
      }
    });
  }

  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMobileNav();
    }
  });
}

// Tactile WebGL Fabric-Flow Engine for Product Modal (Quilts, Throws & Offerings)
window._modalFabricCleanup = null;

function initModalFabricTouch(mode) {
  if (typeof window._modalFabricCleanup === 'function') {
    window._modalFabricCleanup();
    window._modalFabricCleanup = null;
  }

  // Only apply tactile fabric movement to quilts and throws
  if (mode !== 'quilt' && mode !== 'throw') return;

  const stage = document.getElementById('modal-product-stage');
  const img = document.getElementById('modal-product-img');
  const canvas = document.getElementById('modal-product-canvas');
  if (!stage || !img || !canvas) return;

  const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
  if (!gl) return;

  // Tuned specifically to the physical flow of a plush quilt vs lighter reversible throw
  const isThrow = (mode === 'throw');
  const isQuilt = (mode === 'quilt');
  const radiusVal = isThrow ? 0.34 : (isQuilt ? 0.30 : 0.24);
  const brushMul = isThrow ? 1.55 : (isQuilt ? 1.15 : 0.65);
  const foldAmp = isThrow ? 0.022 : (isQuilt ? 0.017 : 0.008);
  const sheenAmp = isThrow ? 0.045 : (isQuilt ? 0.038 : 0.018);
  const followLerp = isThrow ? 0.14 : 0.11; // Weightier, slower plush settle for quilts

  const vsSrc = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      v_uv.y = 1.0 - v_uv.y;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  const fsSrc = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_tex;
    uniform vec2 u_res;
    uniform vec2 u_imgRes;
    uniform vec2 u_ptr;
    uniform vec2 u_vel;
    uniform float u_strength;
    uniform float u_rad;
    uniform float u_brushMul;
    uniform float u_foldAmp;
    uniform float u_sheenAmp;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
      );
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p *= 1.9;
        a *= 0.5;
      }
      return v;
    }

    vec2 coverUV(vec2 uv) {
      float boxA = u_res.x / u_res.y;
      float imgA = u_imgRes.x / u_imgRes.y;
      vec2 scale = vec2(1.0);
      if (imgA > boxA) {
        scale.x = boxA / imgA;
      } else {
        scale.y = imgA / boxA;
      }
      return (uv - 0.5) * scale + 0.5;
    }

    void main() {
      float aspect = u_res.x / u_res.y;
      vec2 disp = vec2(0.0);
      float sheen = 0.0;

      if (u_strength > 0.001) {
        vec2 d = v_uv - u_ptr;
        vec2 dA = vec2(d.x * aspect, d.y);

        // Smooth, seamless organic drape gliding across the whole picture
        float drapeNoise = fbm(v_uv * 4.5 + vec2(2.3, 5.1));
        float dist = length(dA) + (drapeNoise - 0.5) * 0.10;

        if (dist < u_rad) {
          float w = smoothstep(u_rad, 0.0, dist);
          float wSoft = w * w;

          float foldAngle = fbm(v_uv * 5.2 + vec2(1.4, 7.2)) * 6.283185;
          vec2 clothFold = vec2(cos(foldAngle), sin(foldAngle)) * (0.45 + drapeNoise * 0.55);

          vec2 glide = -u_vel * (u_brushMul * (0.75 + drapeNoise * 0.5));
          disp = (glide + clothFold * u_foldAmp) * wSoft * u_strength;

          float lightDot = dot(normalize(dA + vec2(0.0001)), normalize(vec2(-0.6, -0.8)));
          sheen = lightDot * wSoft * u_sheenAmp * u_strength;
        }
      }

      vec2 uv = clamp(coverUV(v_uv + disp), 0.002, 0.998);
      vec4 col = texture2D(u_tex, uv);
      col.rgb += vec3(sheen);
      gl_FragColor = col;
    }
  `;

  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsSrc));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsSrc));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const locPos = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(locPos);
  gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, 'u_res');
  const uImgRes = gl.getUniformLocation(prog, 'u_imgRes');
  const uPtr = gl.getUniformLocation(prog, 'u_ptr');
  const uVel = gl.getUniformLocation(prog, 'u_vel');
  const uStrength = gl.getUniformLocation(prog, 'u_strength');
  gl.uniform1f(gl.getUniformLocation(prog, 'u_rad'), radiusVal);
  gl.uniform1f(gl.getUniformLocation(prog, 'u_brushMul'), brushMul);
  gl.uniform1f(gl.getUniformLocation(prog, 'u_foldAmp'), foldAmp);
  gl.uniform1f(gl.getUniformLocation(prog, 'u_sheenAmp'), sheenAmp);

  const tex = gl.createTexture();
  let ready = false;
  let rafId = null;
  let destroyed = false;

  let targetU = 0.5, targetV = 0.5;
  let curU = 0.5, curV = 0.5;
  let velU = 0, velV = 0;
  let strength = 0, targetStrength = 0;

  function resize() {
    if (destroyed) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = stage.clientWidth || 500;
    const h = stage.clientHeight || 500;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, w, h);
    if (ready) render();
  }

  function uploadTexture() {
    if (destroyed || !img.naturalWidth) return;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.uniform2f(uImgRes, img.naturalWidth, img.naturalHeight);
    ready = true;
    img.style.opacity = '0';
    resize();
  }

  function render() {
    if (!ready || destroyed) return;
    gl.uniform2f(uPtr, curU, curV);
    gl.uniform2f(uVel, velU, velV);
    gl.uniform1f(uStrength, strength);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function tick() {
    if (destroyed) return;
    const prevU = curU, prevV = curV;
    curU += (targetU - curU) * followLerp;
    curV += (targetV - curV) * followLerp;
    velU = Math.max(-0.09, Math.min(0.09, (curU - prevU) * 1.9));
    velV = Math.max(-0.09, Math.min(0.09, (curV - prevV) * 1.9));
    strength += (targetStrength - strength) * 0.09;

    render();

    const moving = Math.abs(targetU - curU) > 0.0005 || Math.abs(targetV - curV) > 0.0005 || Math.abs(targetStrength - strength) > 0.002 || strength > 0.002;
    if (moving) {
      rafId = requestAnimationFrame(tick);
    } else {
      strength = 0;
      render();
      rafId = null;
    }
  }

  function wake() {
    if (!rafId && ready && !destroyed) rafId = requestAnimationFrame(tick);
  }

  const onMove = (e) => {
    const w = stage.clientWidth || 1;
    const h = stage.clientHeight || 1;
    targetU = Math.max(0, Math.min(1, e.offsetX / w));
    targetV = Math.max(0, Math.min(1, e.offsetY / h));
    targetStrength = 1.0;
    wake();
  };
  const onEnter = (e) => {
    const w = stage.clientWidth || 1;
    const h = stage.clientHeight || 1;
    curU = targetU = Math.max(0, Math.min(1, e.offsetX / w));
    curV = targetV = Math.max(0, Math.min(1, e.offsetY / h));
    targetStrength = 1.0;
    wake();
  };
  const onLeave = () => {
    targetStrength = 0.0;
    wake();
  };

  stage.addEventListener('pointermove', onMove);
  stage.addEventListener('pointerenter', onEnter);
  stage.addEventListener('pointerleave', onLeave);
  window.addEventListener('resize', resize);
  img.addEventListener('load', uploadTexture);

  if (img.complete && img.naturalWidth) {
    uploadTexture();
  }

  window._modalFabricReload = uploadTexture;
  window._modalFabricCleanup = () => {
    destroyed = true;
    if (rafId) cancelAnimationFrame(rafId);
    stage.removeEventListener('pointermove', onMove);
    stage.removeEventListener('pointerenter', onEnter);
    stage.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('resize', resize);
    img.removeEventListener('load', uploadTexture);
    window._modalFabricReload = null;
  };
}

// Quick View Product Modal
function openProductModal(productId) {
  window.currentOpenProductId = productId;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('product-detail-modal');
  if (!modal) {
    const modalHTML = `
      <div id="product-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md hidden opacity-0 transition-opacity">
        <div class="bg-[#0e0e0e] border border-brand-gold/25 rounded-2xl max-w-6xl w-full max-h-[94vh] overflow-y-auto shadow-2xl relative p-5 sm:p-8 lg:p-10 transform scale-95 transition-transform" id="product-modal-card">
          <button onclick="closeProductModal()" class="absolute top-4 left-4 sm:top-5 sm:left-5 z-30 p-2.5 rounded-full bg-black/85 hover:bg-black text-[#e2c9a5] border border-white/25 transition shadow-xl backdrop-blur-md flex items-center justify-center group" title="Close" aria-label="Close modal">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          <div id="product-modal-body"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modal = document.getElementById('product-detail-modal');
  } else {
    const cardEl = document.getElementById('product-modal-card');
    if (cardEl) {
      cardEl.classList.remove('max-w-2xl');
      cardEl.classList.add('max-w-6xl');
    }
  }

  const isDe = (window.currentLang === 'de');
  const isThrow = product.id.includes('throw');
  const isQuilt = product.id.includes('quilt') && !isThrow;
  const fabricMode = isThrow ? 'throw' : (isQuilt ? 'quilt' : 'gentle');
  const initialColorway = product.colorways ? (product.colorways.find(c => c.id === product.activeColorwayId) || product.colorways[0]) : null;

  const name = (typeof window.getLocalized === 'function') ? window.getLocalized(product, 'name') : product.name;
  const badge = (typeof window.getLocalized === 'function') ? window.getLocalized(product, 'badge') : product.badge;
  const unit = (typeof window.getLocalized === 'function') ? window.getLocalized(product, 'unit') : product.unit;
  const desc = (typeof window.getLocalized === 'function') ? window.getLocalized(product, 'description') : product.description;
  const ingredients = (typeof window.getLocalized === 'function') ? window.getLocalized(product, 'ingredients') : product.ingredients;
  const priceFormatted = (typeof window.formatPrice === 'function') ? window.formatPrice(product.price, product) : `INR ${product.price.toLocaleString('en-IN')}`;

  const chooseShadeHeader = isThrow
    ? (isDe ? 'Pastellton & Naturmuster wählen:' : 'Choose Pastel Shade & Motif:')
    : (isDe ? 'Pastellton wählen:' : 'Choose Pastel Shade:');
  const cwDisplayName = initialColorway ? (isDe && initialColorway.name_de ? initialColorway.name_de : initialColorway.name) : (isDe ? 'Farbton wählen' : 'Select a Shade');
  const cwMotifName = (isThrow && initialColorway) ? (isDe && initialColorway.motif_de ? initialColorway.motif_de : initialColorway.motif) : '';
  const touchHint = (isQuilt || isThrow)
    ? (isDe ? '✦ Zum Fühlen über den Stoff streichen' : '✦ Glide over fabric to feel the drape')
    : '';

  let specNote = '';
  if (product.colorways) {
    if (isThrow) {
      specNote = isDe 
        ? 'Wendbar: Köpergewebe (Twill Weave) aus natürlich gefärbten Bio-Baumwollgarnen. Angeraute einfarbige Pastellseite und ungebleichtes Reinweiß mit feinem Naturmuster-Druck auf der Wendeseite.'
        : 'Reversible: crafted with a refined twill weave using naturally dyed organic cotton yarns. Brushed solid pastel on one side, crisp unbleached white with signature motif print on the other.';
    } else {
      specNote = isDe
        ? 'Köpergewebe (Twill Weave) aus natürlich gefärbten Bio-Baumwollgarnen, 100% einfarbig angeraut auf beiden Seiten, mit 3 prallen Kammern gefüllt mit Tamizhnad Ilavam Panju (Seidenbaumwolle).'
        : 'Crafted with a refined twill weave using naturally dyed organic cotton yarns, 100% solid pastel brushed cotton on both sides, 3 plump channels filled with Tamizhnad Ilavam Panju.';
    }
  }

  const pureIngHeader = isDe ? 'Reine Zutaten & Herkunft' : 'Pure Ingredients & Sourcing';
  const preOrderNotice = isDe ? '<strong>Vorbestellung:</strong> Handgefertigte Kleinserie. Versand im nächsten Monat.' : '<strong>Pre-Order Item:</strong> Handcrafted small batch. Releases next month.';
  const preOrderBtnText = isDe ? 'Vorbestellen (Versand nächsten Monat)' : 'Pre-Order (Ships Next Month)';
  const askBtnTitle = isDe ? 'Frage per WhatsApp stellen' : 'Ask a question via WhatsApp';

  const isAdultQuilt = (product.id === 'quilt-heirloom-individual');
  const isInitialPurpleAdult = isAdultQuilt && initialColorway && initialColorway.id === 'lavender';
  const initialModalImg = isInitialPurpleAdult ? 'assets/images/adult-quilt-lavender-rolled.jpg?v=1' : product.image;

  // Purple slow-mo video & solid lavender photos ONLY appear when Pastel Lavender is selected on the Adult Quilt (no clouds!)
  const adultGalleryHTML = isAdultQuilt ? `
    <div class="grid grid-cols-3 gap-2.5 mt-3 ${isInitialPurpleAdult ? '' : 'hidden'}" id="modal-media-strip">
      <button type="button" onclick="setModalMedia('video', 'assets/videos/adult-quilt-lavender-slomo.mp4?v=1', this, 'assets/images/adult-quilt-lavender-poster.jpg')" class="modal-media-thumb relative rounded-xl overflow-hidden border-2 border-brand-gold h-16 sm:h-20 bg-black transition">
        <img src="assets/images/adult-quilt-lavender-poster.jpg" alt="Pastel lavender adult quilt slow-mo video" class="w-full h-full object-cover">
        <span class="absolute inset-0 flex items-center justify-center bg-black/35">
          <span class="w-6 h-6 rounded-full bg-brand-gold/90 text-black flex items-center justify-center text-[10px] font-bold shadow">▶</span>
        </span>
        <span class="absolute inset-x-0 bottom-0 bg-black/75 text-[9px] font-mono text-brand-gold text-center py-0.5 uppercase">Slow-Mo</span>
      </button>
      <button type="button" onclick="setModalMedia('photo', 'assets/images/adult-quilt-lavender-rolled.jpg?v=1', this)" class="modal-media-thumb relative rounded-xl overflow-hidden border border-white/15 hover:border-brand-gold/60 h-16 sm:h-20 bg-black transition">
        <img src="assets/images/adult-quilt-lavender-rolled.jpg?v=1" alt="Solid pastel lavender adult quilt rolled" class="w-full h-full object-cover">
        <span class="absolute inset-x-0 bottom-0 bg-black/75 text-[9px] font-mono text-brand-cream text-center py-0.5 uppercase">Rolled</span>
      </button>
      <button type="button" onclick="setModalMedia('photo', 'assets/images/adult-quilt-lavender-label.jpg?v=1', this)" class="modal-media-thumb relative rounded-xl overflow-hidden border border-white/15 hover:border-brand-gold/60 h-16 sm:h-20 bg-black transition">
        <img src="assets/images/adult-quilt-lavender-label.jpg?v=1" alt="Solid pastel lavender adult quilt woven label" class="w-full h-full object-cover">
        <span class="absolute inset-x-0 bottom-0 bg-black/75 text-[9px] font-mono text-brand-cream text-center py-0.5 uppercase">Detail</span>
      </button>
    </div>
  ` : '';

  const body = document.getElementById('product-modal-body');
  body.innerHTML = `
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7">
        <div id="modal-product-stage" class="relative rounded-2xl overflow-hidden border border-brand-gold/25 shadow-2xl bg-black h-[380px] sm:h-[480px] lg:h-[600px] cursor-grab active:cursor-grabbing">
          <img id="modal-product-img" src="${initialModalImg}" alt="${name}" class="w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-200" />
          <canvas id="modal-product-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
          <video id="modal-product-video" autoplay muted loop playsinline class="hidden absolute inset-0 w-full h-full object-cover object-center"></video>
          ${touchHint ? `
            <span id="modal-touch-hint" class="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/75 border border-brand-gold/35 text-[11px] font-mono text-brand-gold backdrop-blur-md pointer-events-none shadow-lg">
              ${touchHint}
            </span>
          ` : ''}
        </div>
        ${adultGalleryHTML}
      </div>
      <div class="lg:col-span-5">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span id="modal-product-badge" class="text-xs px-2.5 py-0.5 rounded-full font-medium ${product.badgeType === 'organic' ? 'bg-brand-forest/40 text-brand-mossLight border border-brand-mossLight/30' : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'}">
            ${badge}
          </span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[11px] font-mono font-semibold">
            <i data-lucide="map-pin" class="w-3 h-3 text-brand-gold"></i>
            <span>${isDe ? 'Wurzeln aus Südindien' : 'Roots from Southern India'}</span>
          </span>
          <span class="text-xs text-[#cbb89d]/75 font-mono">• ${unit}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-serif font-bold text-[#e2c9a5] mb-2 leading-tight">${name}</h3>
        <p class="text-2xl sm:text-3xl font-bold text-brand-gold mb-4">${priceFormatted}</p>
        
        ${product.colorways ? `
          <!-- Pastel Colorway & Signature Motif Selector inside Modal -->
          <div class="mb-4 p-3.5 rounded-xl bg-black/40 border border-white/10">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-brand-gold">${chooseShadeHeader}</span>
              <span id="modal-selected-cw-label" class="text-xs text-brand-cream font-medium">${cwDisplayName}${cwMotifName ? ' (' + cwMotifName + ')' : ''}</span>
            </div>
            <div class="grid grid-cols-3 gap-2" id="modal-colorway-buttons">
              ${product.colorways.map(cw => {
                const buttonCwName = isDe && cw.name_de ? cw.name_de.replace('Pastell-', '') : cw.name.replace('Pastel ', '');
                return `
                <button type="button" 
                  onclick="selectModalColorway('${product.id}', '${cw.id}')" 
                  class="modal-cw-btn px-2.5 py-2 rounded-lg text-left text-xs bg-white/5 hover:bg-white/15 border border-white/10 flex items-center gap-2 transition">
                  <span class="w-3.5 h-3.5 rounded-full flex-shrink-0 border border-black/40" style="background-color: ${cw.hex};"></span>
                  <span class="text-[11px] text-[#e2c9a5] truncate">${buttonCwName}</span>
                </button>
              `;
              }).join('')}
            </div>
            <p id="modal-cw-spec-note" class="text-[11px] text-[#cbb89d]/80 mt-2.5 leading-relaxed">
              ${specNote}
            </p>
          </div>
        ` : ''}

        <p class="text-[#cbb89d] text-sm leading-relaxed mb-4">${desc}</p>
        
        <div class="bg-white/5 p-4 rounded-xl mb-4 border border-white/10">
          <h4 class="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">${pureIngHeader}</h4>
          <p class="text-xs text-[#e2c9a5]/90 leading-relaxed">${ingredients}</p>
        </div>

        <div class="mb-5 p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/25 flex items-center gap-2.5 text-xs text-brand-gold">
          <i data-lucide="clock" class="w-4 h-4 flex-shrink-0"></i>
          <span>${preOrderNotice}</span>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.cart.addItem('${product.id}'); closeProductModal();" class="flex-1 bg-brand-forest hover:bg-brand-sage text-[#e2c9a5] py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg transition">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>${preOrderBtnText}</span>
          </button>
          <button onclick="inquireProduct('${name}')" class="p-3.5 border border-white/20 hover:border-brand-mossLight rounded-xl text-[#e2c9a5] hover:bg-white/5 transition" title="${askBtnTitle}">
            <i data-lucide="help-circle" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    document.getElementById('product-modal-card').classList.remove('scale-95');
    document.getElementById('product-modal-card').classList.add('scale-100');
    initModalFabricTouch(fabricMode);
    // If Adult Quilt opens directly on Pastel Lavender, play its pastel slow-mo video right away
    if (isInitialPurpleAdult) {
      const firstThumb = document.querySelector('#modal-media-strip .modal-media-thumb');
      setModalMedia('video', 'assets/videos/adult-quilt-lavender-slomo.mp4?v=1', firstThumb, 'assets/images/adult-quilt-lavender-poster.jpg');
    }
  }, 20);

  if (window.lucide) lucide.createIcons();
}

function setModalMedia(type, src, btnEl, posterSrc) {
  const imgEl = document.getElementById('modal-product-img');
  const canvasEl = document.getElementById('modal-product-canvas');
  const videoEl = document.getElementById('modal-product-video');
  const hintEl = document.getElementById('modal-touch-hint');

  document.querySelectorAll('.modal-media-thumb').forEach(b => {
    b.classList.remove('border-2', 'border-brand-gold');
    b.classList.add('border', 'border-white/15');
  });
  if (btnEl) {
    btnEl.classList.remove('border', 'border-white/15');
    btnEl.classList.add('border-2', 'border-brand-gold');
  }

  if (type === 'video' && videoEl) {
    if (posterSrc) videoEl.poster = posterSrc;
    if (videoEl.src !== src) videoEl.src = src;
    videoEl.classList.remove('hidden');
    if (canvasEl) canvasEl.classList.add('hidden');
    if (hintEl) hintEl.classList.add('hidden');
    videoEl.play().catch(() => {});
  } else {
    if (videoEl) {
      videoEl.pause();
      videoEl.classList.add('hidden');
    }
    if (canvasEl) canvasEl.classList.remove('hidden');
    if (hintEl) hintEl.classList.remove('hidden');
    if (imgEl) {
      imgEl.src = src;
      if (imgEl.complete && imgEl.naturalWidth && typeof window._modalFabricReload === 'function') {
        window._modalFabricReload();
      }
    }
  }
}

function selectModalColorway(productId, colorwayId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.colorways) return;
  const cw = product.colorways.find(c => c.id === colorwayId);
  if (!cw) return;

  const isDe = (window.currentLang === 'de');
  const isThrow = product.id.includes('throw');
  const isAdultQuilt = (product.id === 'quilt-heirloom-individual');
  const isPurpleAdult = (isAdultQuilt && cw.id === 'lavender');
  const cwName = (isDe && cw.name_de) ? cw.name_de : cw.name;
  const cwMotif = (isDe && cw.motif_de) ? cw.motif_de : cw.motif;

  product.image = isPurpleAdult ? 'assets/images/adult-quilt-lavender-rolled.jpg?v=1' : `${cw.image}?v=1`;
  product.badge = isThrow ? `${cw.name} • ${cw.motif} Print` : `${cw.name} • Solid Quilt`;
  if (isDe) {
    product.badge_de = isThrow ? `${cwName} • ${cwMotif}-Druck` : `${cwName} • Steppdecke`;
  }
  product.activeColorwayId = cw.id;

  const imgEl = document.getElementById('modal-product-img');
  const badgeEl = document.getElementById('modal-product-badge');
  const labelEl = document.getElementById('modal-selected-cw-label');
  const noteEl = document.getElementById('modal-cw-spec-note');
  const mediaStrip = document.getElementById('modal-media-strip');

  if (mediaStrip) {
    if (isPurpleAdult) {
      mediaStrip.classList.remove('hidden');
      const firstThumb = mediaStrip.querySelector('.modal-media-thumb');
      setModalMedia('video', 'assets/videos/adult-quilt-lavender-slomo.mp4?v=1', firstThumb, 'assets/images/adult-quilt-lavender-poster.jpg');
    } else {
      mediaStrip.classList.add('hidden');
      if (imgEl) {
        const videoEl = document.getElementById('modal-product-video');
        const canvasEl = document.getElementById('modal-product-canvas');
        const hintEl = document.getElementById('modal-touch-hint');
        if (videoEl) { videoEl.pause(); videoEl.classList.add('hidden'); }
        if (canvasEl) canvasEl.classList.remove('hidden');
        if (hintEl) hintEl.classList.remove('hidden');
        imgEl.src = product.image;
        if (imgEl.complete && imgEl.naturalWidth && typeof window._modalFabricReload === 'function') {
          window._modalFabricReload();
        }
      }
    }
  } else if (imgEl) {
    imgEl.src = product.image;
    if (imgEl.complete && imgEl.naturalWidth && typeof window._modalFabricReload === 'function') {
      window._modalFabricReload();
    }
  }
  if (badgeEl) {
    badgeEl.textContent = (isDe && product.badge_de) ? product.badge_de : product.badge;
  }
  if (labelEl) {
    labelEl.textContent = isThrow ? `${cwName} (${cwMotif})` : cwName;
  }
  if (noteEl) {
    noteEl.textContent = isThrow
      ? (isDe ? `Wendbar: Einfarbig ${cwName} auf einer Seite, ungebleichtes Reinweiß mit ${cwMotif}-Druck auf der anderen Seite.` : `Reversible: solid ${cw.name} on one side, crisp unbleached white with ${cw.motif} print on the other.`)
      : (isDe ? `100% einfarbig ${cwName} auf beiden Seiten (schlichtes Pastell), gefüllt mit Tamizhnad Ilavam Panju.` : `100% solid ${cw.name} on both sides (unadorned solid pastel), filled with Tamizhnad Ilavam Panju.`);
  }

  // Also sync the card on the shop page if present
  if (typeof swapProductCardColor === 'function') {
    swapProductCardColor(productId, colorwayId);
  }
}

function closeProductModal() {
  window.currentOpenProductId = null;
  if (typeof window._modalFabricCleanup === 'function') {
    window._modalFabricCleanup();
    window._modalFabricCleanup = null;
  }
  const modal = document.getElementById('product-detail-modal');
  if (modal) {
    modal.classList.add('opacity-0');
    document.getElementById('product-modal-card').classList.remove('scale-100');
    document.getElementById('product-modal-card').classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 250);
  }
}

function inquireProduct(productName) {
  const text = encodeURIComponent(`Hello ${BRAND_CONFIG.brandName}! I have a question regarding your product "${productName}".`);
  window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${text}`, '_blank');
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  if (window.lucide) lucide.createIcons();
});
