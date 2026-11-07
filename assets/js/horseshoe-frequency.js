/**
 * UP Purreins — Horseshoe Frequency Logo Motion Engine
 * 
 * Ethereal resonance motion:
 * - 10 hollow holes emerge simultaneously from the 10 nail holes of the horseshoe logo
 * - Each hole matches the exact shape and size of the horseshoe nail holes
 * - Each hole travels outwards along its radial vector at a serene, slow speed
 * - Travels for ~2 inches (~192px) with clear visibility
 * - Gracefully fades away across the 3rd inch (~192px to ~280px)
 * - Keeps continuously moving in a calm, hypnotic, luxurious rhythm
 * - Runs exclusively on all non-About pages (About page features the Dalmatian puppies)
 */

(function() {
  'use strict';

  // Strictly check route: This motion runs on ALL pages EXCEPT the About Us page
  const pathname = window.location.pathname.toLowerCase();
  const isAboutPage = pathname.endsWith('about.html') || 
                      pathname.endsWith('/about') || 
                      pathname.endsWith('/about/') ||
                      document.title.toLowerCase().includes('about us') ||
                      document.title.toLowerCase().includes('our story') ||
                      (document.body && document.body.classList.contains('page-about'));

  if (isAboutPage && !window.forceHorseshoeMotion) {
    // Puppies are exclusive to the About Us page
    return;
  }

  // Exact normalized coordinates (0..1) of the 10 horseshoe nail holes in logo.png (450x343)
  // and their outward radial travel vectors & tangent angles
  const HOLE_DEFINITIONS = [
    // Left branch (from top to bottom)
    { id: 'L1', normX: 0.3133, normY: 0.1399, ux: -0.576, uy: -0.817, angle: -125.2 },
    { id: 'L2', normX: 0.2222, normY: 0.3265, ux: -0.910, uy: -0.415, angle: -155.5 },
    { id: 'L3', normX: 0.2133, normY: 0.5306, ux: -0.996, uy:  0.091, angle:  174.8 },
    { id: 'L4', normX: 0.2489, normY: 0.7172, ux: -0.834, uy:  0.551, angle:  146.5 },
    { id: 'L5', normX: 0.3444, normY: 0.8630, ux: -0.496, uy:  0.868, angle:  119.7 },

    // Right branch (from top to bottom)
    { id: 'R1', normX: 0.6867, normY: 0.1399, ux:  0.558, uy: -0.830, angle:  -56.1 },
    { id: 'R2', normX: 0.7867, normY: 0.3324, ux:  0.915, uy: -0.403, angle:  -23.8 },
    { id: 'R3', normX: 0.7978, normY: 0.5306, ux:  0.996, uy:  0.091, angle:    5.2 },
    { id: 'R4', normX: 0.7578, normY: 0.7143, ux:  0.835, uy:  0.550, angle:   33.3 },
    { id: 'R5', normX: 0.6556, normY: 0.8630, ux:  0.475, uy:  0.880, angle:   61.6 }
  ];

  class HorseshoeFrequencyMotion {
    constructor() {
      this.logoImg = null;
      this.canvas = null;
      this.ctx = null;
      this.dpr = window.devicePixelRatio || 1;
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Motion parameters (1 inch ≈ 96 CSS pixels)
      this.speed = 58; // pixels per second (serene, slow luxury speed)
      this.twoInchesPx = 192; // 2.0 inches
      this.maxDistancePx = 288; // 3.0 inches (fade away completely across the 3rd inch)
      this.spawnIntervalSec = 2.2; // seconds between successive waves

      this.waves = [];
      this.lastSpawnTime = -this.spawnIntervalSec; // spawn immediately on start
      this.lastTimestamp = 0;
      this.running = false;

      this.init();
    }

    init() {
      // Find logo image in header
      this.logoImg = document.getElementById('header-logo-img') || 
                     document.querySelector('.header-logo-link img') ||
                     document.querySelector('header img[src*="logo.png"]');

      if (!this.logoImg) {
        // Retry if DOM is still settling
        setTimeout(() => this.init(), 100);
        return;
      }

      this.createCanvas();
      this.bindEvents();

      // Start animation loop
      this.running = true;
      requestAnimationFrame(this.loop.bind(this));
    }

    createCanvas() {
      this.canvas = document.getElementById('horseshoe-frequency-canvas');
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'horseshoe-frequency-canvas';
        this.canvas.setAttribute('aria-hidden', 'true');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100vw';
        this.canvas.style.height = '100vh';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '45'; // Floating right above localized fades, under modals
        document.body.appendChild(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      this.dpr = window.devicePixelRatio || 1;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = Math.round(this.width * this.dpr);
      this.canvas.height = Math.round(this.height * this.dpr);
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';
    }

    bindEvents() {
      window.addEventListener('resize', () => this.resize(), { passive: true });
    }

    spawnWave(currentTimeSec) {
      if (!this.logoImg) return;
      const rect = this.logoImg.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      // Scale hole dimensions proportionally with rendered logo size
      const holeW = Math.max(3.2, Math.min(5.5, rect.width * 0.026));
      const holeH = Math.max(3.8, Math.min(6.5, rect.height * 0.035));
      const cornerRadius = Math.max(1.0, holeW * 0.35);

      // Create 10 hollow holes for this wave
      const holes = HOLE_DEFINITIONS.map(def => {
        const originX = rect.left + rect.width * def.normX;
        const originY = rect.top + rect.height * def.normY;
        return {
          id: def.id,
          originX: originX,
          originY: originY,
          ux: def.ux,
          uy: def.uy,
          angle: def.angle,
          holeW: holeW,
          holeH: holeH,
          cornerRadius: cornerRadius
        };
      });

      this.waves.push({
        birthTime: currentTimeSec,
        distance: 0,
        holes: holes
      });

      this.lastSpawnTime = currentTimeSec;
    }

    drawRoundedHollowHole(x, y, w, h, radius, angleDeg, alpha) {
      if (alpha <= 0.005) return;

      this.ctx.save();
      this.ctx.translate(x * this.dpr, y * this.dpr);

      // Rotate hole along tangent of the horseshoe curve
      const tangentRad = (angleDeg + 90) * Math.PI / 180;
      this.ctx.rotate(tangentRad);

      const scaledW = w * this.dpr;
      const scaledH = h * this.dpr;
      const scaledR = radius * this.dpr;

      this.ctx.beginPath();
      if (typeof this.ctx.roundRect === 'function') {
        this.ctx.roundRect(-scaledW / 2, -scaledH / 2, scaledW, scaledH, scaledR);
      } else {
        // Fallback for older browsers
        const hw = scaledW / 2;
        const hh = scaledH / 2;
        const r = Math.min(scaledR, hw, hh);
        this.ctx.moveTo(-hw + r, -hh);
        this.ctx.lineTo(hw - r, -hh);
        this.ctx.quadraticCurveTo(hw, -hh, hw, -hh + r);
        this.ctx.lineTo(hw, hh - r);
        this.ctx.quadraticCurveTo(hw, hh, hw - r, hh);
        this.ctx.lineTo(-hw + r, hh);
        this.ctx.quadraticCurveTo(-hw, hh, -hw, hh - r);
        this.ctx.lineTo(-hw, -hh + r);
        this.ctx.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
      }

      // Hollow hole styling:
      // Crisp harvest-gold stroke with soft luminous frequency halo, hollow transparent center
      this.ctx.strokeStyle = `rgba(200, 153, 90, ${alpha * 0.95})`; // #C8995A harvest gold
      this.ctx.lineWidth = Math.max(1.1, 1.25 * this.dpr);
      this.ctx.shadowColor = `rgba(226, 201, 165, ${alpha * 0.55})`; // #e2c9a5 warm cream frequency glow
      this.ctx.shadowBlur = 4 * this.dpr;

      // Pure stroke, NO fill (100% hollow hole)
      this.ctx.stroke();

      this.ctx.restore();
    }

    loop(timestamp) {
      if (!this.running) return;

      if (!this.lastTimestamp) this.lastTimestamp = timestamp;
      const deltaSec = Math.min(0.1, (timestamp - this.lastTimestamp) / 1000);
      this.lastTimestamp = timestamp;
      const currentTimeSec = timestamp / 1000;

      // Spawn a new wave if interval has elapsed
      if (currentTimeSec - this.lastSpawnTime >= this.spawnIntervalSec) {
        this.spawnWave(currentTimeSec);
      }

      // Clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Re-anchor origins to logo position in case user resized or scrolled
      const rect = this.logoImg ? this.logoImg.getBoundingClientRect() : null;

      // Update and draw each wave
      for (let i = this.waves.length - 1; i >= 0; i--) {
        const wave = this.waves[i];
        wave.distance += this.speed * deltaSec;

        // If wave has traveled past 3 inches, remove it
        if (wave.distance >= this.maxDistancePx) {
          this.waves.splice(i, 1);
          continue;
        }

        // Calculate opacity according to user's exact specification:
        // - Slowly emerge from holes (0 to 18px): fade in 0 -> 0.95
        // - Travels for like 2 inches (18px to 192px): maintains clear visibility (~0.95 -> 0.88)
        // - Fades away in the 3rd inch (192px to 288px): gracefully fades from 0.88 -> 0.0
        let alpha = 0.92;
        if (wave.distance < 18) {
          alpha = (wave.distance / 18) * 0.92;
        } else if (wave.distance <= this.twoInchesPx) {
          // In the first 2 inches: steady, clear, slow speed
          alpha = 0.92 - (wave.distance / this.twoInchesPx) * 0.06;
        } else {
          // In the 3rd inch: fade away completely
          const fadeProgress = (wave.distance - this.twoInchesPx) / (this.maxDistancePx - this.twoInchesPx);
          alpha = 0.86 * (1 - Math.min(1, Math.max(0, fadeProgress)));
        }

        // Draw each of the 10 hollow holes in this wave
        for (let j = 0; j < wave.holes.length; j++) {
          const hole = wave.holes[j];
          let originX = hole.originX;
          let originY = hole.originY;

          // Dynamically track logo position if available
          if (rect && rect.width > 0) {
            originX = rect.left + rect.width * HOLE_DEFINITIONS[j].normX;
            originY = rect.top + rect.height * HOLE_DEFINITIONS[j].normY;
          }

          // Outward position: moves outwards along unit vector (ux, uy)
          const posX = originX + hole.ux * wave.distance;
          const posY = originY + hole.uy * wave.distance;

          this.drawRoundedHollowHole(
            posX,
            posY,
            hole.holeW,
            hole.holeH,
            hole.cornerRadius,
            hole.angle,
            alpha
          );
        }
      }

      requestAnimationFrame(this.loop.bind(this));
    }
  }

  // Auto-initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.horseshoeFrequencyMotion = new HorseshoeFrequencyMotion();
    });
  } else {
    window.horseshoeFrequencyMotion = new HorseshoeFrequencyMotion();
  }

})();
