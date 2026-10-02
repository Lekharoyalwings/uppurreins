/**
 * UP Purreins — Farm World Interactive Canvas Engine
 * Features:
 * - 3 Custom Dalmatians (Patch, Cocoa, Sandy) at 1.10 years old with distinct spots & scales
 * - Dynamic 2D roaming: straight across, diagonal cuts, and playful circles
 * - Scroll-driven velocity & lifelike idle transitions
 * - Cursor-reactive meadow tension strings (filaments that gather & bend with cursor)
 * - Wetland White Geese flock with water ripples
 */

class FarmWorldCanvas {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.warn(`Canvas with id ${canvasId} not found.`);
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    this.options = Object.assign({
      enableStrings: true,
      enableGeese: true,
      enableDogs: true,
      dogSpeedMultiplier: 1.0,
      interactiveCursor: true,
      debugWaypoints: false
    }, options);

    this.width = 0;
    this.height = 0;
    this.dpr = window.devicePixelRatio || 1;

    // Mouse coordinates & interaction
    this.mouse = { x: -1000, y: -1000, active: false, radius: 180 };
    this.lastScrollY = window.scrollY || window.pageYOffset;
    this.scrollVelocity = 0;
    this.scrollEnergy = 0.5; // Starts with a welcoming patrol
    this.scrollDecayTimer = null;

    // Time & animation
    this.time = 0;
    this.lastTimestamp = 0;

    // Geese pond bounds
    this.geeseZone = { yStart: 1800, yEnd: 2600, active: false };

    this.initCanvasSize();
    this.initStrings();
    this.initDogs();
    this.initGeese();
    this.bindEvents();

    this.running = true;
    requestAnimationFrame(this.loop.bind(this));
  }

  initCanvasSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  // ─────────────────────────────────────────────────────────────
  // 1. CURSOR-REACTIVE STRINGS (Meadow Breeze Filaments)
  // ─────────────────────────────────────────────────────────────
  initStrings() {
    this.strings = [];
    const count = Math.min(32, Math.floor(this.width / 45));
    for (let i = 0; i < count; i++) {
      const baseX = (this.width / (count + 1)) * (i + 1);
      this.strings.push({
        baseX: baseX,
        currentX: baseX,
        currentY: this.height * (0.3 + 0.4 * Math.sin(i * 1.5)),
        targetY: this.height * 0.5,
        length: 220 + Math.random() * 140,
        angle: (Math.random() - 0.5) * 0.2,
        tension: 0.05 + Math.random() * 0.03,
        damping: 0.88 + Math.random() * 0.04,
        vx: 0,
        hue: 38 + Math.random() * 8, // Warm gold/straw
        alpha: 0.18 + Math.random() * 0.16
      });
    }
  }

  updateStrings() {
    if (!this.options.enableStrings) return;

    for (const str of this.strings) {
      // Wind breeze sway
      const ambientSway = Math.sin(this.time * 1.8 + str.baseX * 0.01) * 12;

      // Mouse attraction / deflection
      let forceX = 0;
      if (this.mouse.active) {
        const dx = this.mouse.x - str.currentX;
        const dy = this.mouse.y - str.currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const influence = (1 - dist / this.mouse.radius);
          // Strings bend toward cursor like magnetic threads
          forceX = dx * influence * 0.25;
        }
      }

      // Spring physics back to base + ambient
      const targetX = str.baseX + ambientSway + forceX;
      const ax = (targetX - str.currentX) * str.tension;
      str.vx = (str.vx + ax) * str.damping;
      str.currentX += str.vx;
    }
  }

  drawStrings() {
    if (!this.options.enableStrings) return;
    const ctx = this.ctx;

    ctx.save();
    for (const str of this.strings) {
      ctx.beginPath();
      // Draw smooth curving filament anchored from bottom toward mid-screen
      const startX = str.baseX;
      const startY = this.height + 40;
      const tipX = str.currentX;
      const tipY = str.currentY;
      const ctrlX = (startX + tipX) / 2 + (str.vx * 4);
      const ctrlY = (startY + tipY) / 2;

      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);

      ctx.strokeStyle = `hsla(${str.hue}, 45%, 65%, ${str.alpha})`;
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Delicate seed tuft at the tip of the string
      ctx.beginPath();
      ctx.arc(tipX, tipY, 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${str.hue}, 60%, 75%, ${str.alpha * 1.4})`;
      ctx.fill();
    }
    ctx.restore();
  }

  // ─────────────────────────────────────────────────────────────
  // 2. THE THREE DALMATIANS (Patch, Cocoa, Sandy)
  // ─────────────────────────────────────────────────────────────
  initDogs() {
    this.dogs = [
      // 1. PATCH: Black spotted, black eye patch, athletic point dog
      {
        id: 'patch',
        name: 'Patch',
        colorName: 'Black Spotted',
        scale: 1.0,           // Medium athletic build
        spotColor: '#141414', // Deep ink black
        hasEyePatch: true,
        eyePatchSide: 'left',
        baseSpeed: 2.7,
        x: this.width * 0.2,
        y: this.height * 0.65,
        vx: 2.2,
        vy: 0.3,
        heading: 0,
        runCycle: 0,
        state: 'RUNNING',     // 'RUNNING', 'CIRCLING', 'IDLE'
        circleCenter: { x: 0, y: 0 },
        circleRadius: 90,
        circleAngle: 0,
        circleSpeed: 0.04,
        target: { x: this.width * 0.8, y: this.height * 0.5 },
        pathType: 'DIAGONAL',
        idleAction: 'sniff',
        idleTimer: 0,
        personality: 'Scout & Point Leader',
        spots: [
          { x: -14, y: -4, r: 4.2 }, { x: -8, y: 5, r: 3.5 },
          { x: 3, y: -6, r: 4.8 },  { x: 12, y: 4, r: 3.8 },
          { x: 22, y: -3, r: 4.0 }, { x: -22, y: 3, r: 3.0 },
          { x: 16, y: -9, r: 2.8 }, { x: -2, y: 8, r: 3.2 },
          { x: 28, y: 6, r: 3.6 },  { x: -18, y: -7, r: 2.5 }
        ]
      },

      // 2. COCOA: Dark brown / liver spotted, taller, stately guardian
      {
        id: 'cocoa',
        name: 'Cocoa',
        colorName: 'Dark Brown (Liver) Spotted',
        scale: 1.16,          // Taller & broader
        spotColor: '#4A2A14', // Rich dark roasted liver brown
        hasEyePatch: false,
        noseColor: '#3D200E',
        baseSpeed: 2.5,
        x: this.width * 0.1,
        y: this.height * 0.72,
        vx: 2.0,
        vy: -0.2,
        heading: 0,
        runCycle: 1.8,
        state: 'RUNNING',
        circleCenter: { x: 0, y: 0 },
        circleRadius: 110,
        circleAngle: 0,
        circleSpeed: 0.035,
        target: { x: this.width * 0.85, y: this.height * 0.75 },
        pathType: 'STRAIGHT',
        idleAction: 'sit',
        idleTimer: 0,
        personality: 'Watchful Farm Guardian',
        spots: [
          { x: -16, y: -6, r: 5.2 }, { x: -6, y: 7, r: 4.4 },
          { x: 5, y: -7, r: 5.0 },   { x: 14, y: 6, r: 4.6 },
          { x: 25, y: -4, r: 4.2 },  { x: -24, y: 2, r: 3.8 },
          { x: 18, y: -8, r: 3.2 },  { x: 0, y: 9, r: 4.0 },
          { x: 30, y: 7, r: 4.2 },   { x: -10, y: -9, r: 3.0 },
          { x: 8, y: 2, r: 3.5 }
        ]
      },

      // 3. SANDY: Light brown / amber spotted, shortest, compact, playful
      {
        id: 'sandy',
        name: 'Sandy',
        colorName: 'Light Amber Brown Spotted',
        scale: 0.88,          // Shortest & compact
        spotColor: '#B88248', // Soft warm honey / amber brown
        hasEyePatch: false,
        noseColor: '#8C5A2B',
        baseSpeed: 2.9,       // Energetic quick trot
        x: this.width * 0.05,
        y: this.height * 0.80,
        vx: 2.4,
        vy: 0.4,
        heading: 0,
        runCycle: 3.2,
        state: 'RUNNING',
        circleCenter: { x: 0, y: 0 },
        circleRadius: 75,
        circleAngle: 0,
        circleSpeed: 0.055,   // Tighter, faster playful loops
        target: { x: this.width * 0.75, y: this.height * 0.82 },
        pathType: 'CIRCLE',
        idleAction: 'wag',
        idleTimer: 0,
        personality: 'Playful Zoomies & Scout',
        spots: [
          { x: -12, y: -4, r: 3.4 }, { x: -5, y: 4, r: 3.0 },
          { x: 4, y: -5, r: 3.6 },   { x: 11, y: 3, r: 3.2 },
          { x: 18, y: -2, r: 3.0 },  { x: -17, y: 2, r: 2.8 },
          { x: 13, y: -7, r: 2.4 },  { x: -1, y: 6, r: 2.6 },
          { x: 21, y: 5, r: 2.8 }
        ]
      }
    ];

    this.dogs.forEach(dog => this.pickNewDestination(dog));
  }

  pickNewDestination(dog) {
    const margin = 80;
    const pathRoll = Math.random();

    // Dynamic mix: 40% Diagonals, 35% Straight across, 25% Playful circles
    if (pathRoll < 0.25) {
      dog.pathType = 'CIRCLE';
      dog.state = 'CIRCLING';
      dog.circleCenter = {
        x: Math.max(margin * 1.5, Math.min(this.width - margin * 1.5, dog.x + (Math.random() - 0.5) * 200)),
        y: Math.max(margin * 1.5, Math.min(this.height - margin * 1.5, dog.y + (Math.random() - 0.5) * 160))
      };
      dog.circleAngle = Math.atan2(dog.y - dog.circleCenter.y, dog.x - dog.circleCenter.x);
      dog.circleLoopsLeft = 1.2 + Math.random() * 1.3;
    } else if (pathRoll < 0.65) {
      dog.pathType = 'DIAGONAL';
      dog.state = 'RUNNING';
      const toRight = dog.x < this.width * 0.5;
      dog.target = {
        x: toRight ? this.width + 100 : -100,
        y: Math.random() > 0.5 ? Math.random() * (this.height * 0.4) + margin : this.height * 0.6 + Math.random() * (this.height * 0.3)
      };
    } else {
      dog.pathType = 'STRAIGHT';
      dog.state = 'RUNNING';
      const toRight = dog.x < this.width * 0.5;
      dog.target = {
        x: toRight ? this.width + 120 : -120,
        y: Math.max(margin, Math.min(this.height - margin, dog.y + (Math.random() - 0.5) * 80))
      };
    }
  }

  updateDogs(delta) {
    if (!this.options.enableDogs) return;

    const isScrolling = this.scrollEnergy > 0.15;
    const speedMult = this.options.dogSpeedMultiplier * (isScrolling ? (0.9 + this.scrollEnergy * 0.8) : 0.4);

    for (const dog of this.dogs) {
      if (!isScrolling && this.scrollEnergy <= 0.05) {
        dog.state = 'IDLE';
        dog.idleTimer += delta * 0.002;
        if (this.mouse.active) {
          const angleToMouse = Math.atan2(this.mouse.y - dog.y, this.mouse.x - dog.x);
          const angleDiff = angleToMouse - dog.heading;
          dog.heading += Math.sin(angleDiff) * 0.04;
        }
        continue;
      }

      if (dog.state === 'CIRCLING') {
        dog.circleAngle += dog.circleSpeed * speedMult;
        dog.circleLoopsLeft -= Math.abs(dog.circleSpeed * speedMult) / (Math.PI * 2);

        const targetX = dog.circleCenter.x + Math.cos(dog.circleAngle) * dog.circleRadius;
        const targetY = dog.circleCenter.y + Math.sin(dog.circleAngle) * dog.circleRadius;

        const nextAngle = dog.circleAngle + 0.1;
        const futureX = dog.circleCenter.x + Math.cos(nextAngle) * dog.circleRadius;
        const futureY = dog.circleCenter.y + Math.sin(nextAngle) * dog.circleRadius;
        const targetHeading = Math.atan2(futureY - targetY, futureX - targetX);

        dog.x += (targetX - dog.x) * 0.2;
        dog.y += (targetY - dog.y) * 0.2;
        dog.heading = targetHeading;
        dog.runCycle += 0.22 * speedMult;

        if (dog.circleLoopsLeft <= 0) {
          this.pickNewDestination(dog);
        }
      } else {
        dog.state = 'RUNNING';
        const dx = dog.target.x - dog.x;
        const dy = dog.target.y - dog.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 40) {
          if (dog.x > this.width + 80) dog.x = -80;
          else if (dog.x < -80) dog.x = this.width + 80;
          this.pickNewDestination(dog);
        } else {
          const targetHeading = Math.atan2(dy, dx);
          const angleDiff = Math.atan2(Math.sin(targetHeading - dog.heading), Math.cos(targetHeading - dog.heading));
          dog.heading += angleDiff * 0.08;

          const moveSpeed = dog.baseSpeed * speedMult;
          dog.x += Math.cos(dog.heading) * moveSpeed;
          dog.y += Math.sin(dog.heading) * moveSpeed;
          dog.runCycle += 0.20 * speedMult;
        }
      }

      if (dog.y < 80) { dog.y = 80; dog.heading = Math.abs(dog.heading); }
      if (dog.y > this.height - 70) { dog.y = this.height - 70; dog.heading = -Math.abs(dog.heading); }
    }
  }

  drawDog(dog) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(dog.x, dog.y);

    const facingLeft = Math.cos(dog.heading) < 0;
    ctx.rotate(dog.heading);
    if (facingLeft) {
      ctx.scale(1, -1);
    }
    ctx.scale(dog.scale, dog.scale);

    const isIdle = dog.state === 'IDLE';
    const cycle = dog.runCycle;

    // Trot offsets
    const frontLegOffset = isIdle ? 0 : Math.sin(cycle) * 12;
    const backLegOffset  = isIdle ? 0 : Math.sin(cycle + Math.PI * 0.7) * 12;
    const bodyBob        = isIdle ? Math.sin(this.time * 2 + dog.scale) * 1.5 : Math.abs(Math.sin(cycle)) * 3;

    // 1. TAIL
    const tailWag = isIdle ? Math.sin(this.time * 6) * 0.25 : Math.sin(cycle * 1.5) * 0.3;
    ctx.save();
    ctx.translate(-26, -2 + bodyBob);
    ctx.rotate(-0.4 + tailWag);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-14, -12, -22, -8);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(-12, -7, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = dog.spotColor;
    ctx.fill();
    ctx.restore();

    // 2. FAR LEGS
    ctx.strokeStyle = '#E2DDD3';
    ctx.lineWidth = 3.6;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(-18, 5 + bodyBob);
    ctx.quadraticCurveTo(-20 + backLegOffset * 0.6, 15, -16 + backLegOffset, 24);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(16, 6 + bodyBob);
    ctx.quadraticCurveTo(18 - frontLegOffset * 0.6, 16, 17 - frontLegOffset, 25);
    ctx.stroke();

    // 3. TORSO
    ctx.save();
    ctx.translate(0, bodyBob);
    ctx.beginPath();
    ctx.ellipse(0, 0, 26, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#E8E4DA';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Spots on Torso
    ctx.fillStyle = dog.spotColor;
    for (const spot of dog.spots) {
      ctx.beginPath();
      ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. NEAR LEGS
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3.8;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(-14, 5 + bodyBob);
    ctx.quadraticCurveTo(-12 - backLegOffset * 0.7, 15, -10 - backLegOffset, 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 6 + bodyBob);
    ctx.quadraticCurveTo(22 + frontLegOffset * 0.7, 16, 21 + frontLegOffset, 25);
    ctx.stroke();

    // 5. HEAD & NECK
    ctx.save();
    ctx.translate(22, -6 + bodyBob);
    const headTilt = isIdle && dog.idleAction === 'sniff' ? 0.35 : -0.15;
    ctx.rotate(headTilt);

    ctx.beginPath();
    ctx.moveTo(-4, 6);
    ctx.lineTo(6, -8);
    ctx.lineTo(14, -4);
    ctx.lineTo(6, 10);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(12, -8, 10, 7, 0.1, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(16, -10);
    ctx.lineTo(24, -8);
    ctx.lineTo(23, -4);
    ctx.lineTo(16, -3);
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Nose
    ctx.beginPath();
    ctx.arc(24, -6.5, 2, 0, Math.PI * 2);
    ctx.fillStyle = dog.noseColor || dog.spotColor;
    ctx.fill();

    // Eye
    ctx.beginPath();
    ctx.arc(14, -9, 1.6, 0, Math.PI * 2);
    ctx.fillStyle = '#1A1108';
    ctx.fill();

    // PATCH EYE PATCH
    if (dog.hasEyePatch) {
      ctx.beginPath();
      ctx.ellipse(14, -9, 5.5, 4.2, 0.2, 0, Math.PI * 2);
      ctx.fillStyle = dog.spotColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(14.5, -9, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = '#C8995A';
      ctx.fill();
    }

    // Ear
    const earBounce = isIdle ? 0 : Math.sin(cycle * 1.2) * 0.2;
    ctx.save();
    ctx.translate(8, -12);
    ctx.rotate(0.3 + earBounce);
    ctx.beginPath();
    ctx.ellipse(0, 5, 4, 8, 0.2, 0, Math.PI * 2);
    ctx.fillStyle = dog.hasEyePatch ? dog.spotColor : '#FFFFFF';
    ctx.fill();
    if (!dog.hasEyePatch) {
      ctx.beginPath();
      ctx.arc(0, 4, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = dog.spotColor;
      ctx.fill();
    }
    ctx.restore();

    ctx.restore(); // end head
    ctx.restore(); // end dog
  }

  // ─────────────────────────────────────────────────────────────
  // 3. WETLAND WHITE GEESE
  // ─────────────────────────────────────────────────────────────
  initGeese() {
    this.geese = [
      { x: this.width * 0.18, y: this.height * 0.85, baseSpeed: 0.6, dir: 1,  bobPhase: 0,   peckTimer: 0, scale: 0.95 },
      { x: this.width * 0.28, y: this.height * 0.88, baseSpeed: 0.5, dir: 1,  bobPhase: 1.4, peckTimer: 2, scale: 1.05 },
      { x: this.width * 0.38, y: this.height * 0.84, baseSpeed: 0.7, dir: -1, bobPhase: 2.8, peckTimer: 4, scale: 0.90 }
    ];
    this.ripples = [];
  }

  updateGeese(delta) {
    if (!this.options.enableGeese) return;

    for (const goose of this.geese) {
      goose.bobPhase += 0.04;
      goose.peckTimer += 0.02;

      goose.x += goose.baseSpeed * goose.dir * 0.6;
      if (goose.x < this.width * 0.08) goose.dir = 1;
      if (goose.x > this.width * 0.55) goose.dir = -1;

      if (Math.sin(goose.bobPhase) > 0.98 && Math.random() < 0.25) {
        this.ripples.push({
          x: goose.x,
          y: goose.y + 12,
          radius: 4,
          maxRadius: 36,
          alpha: 0.35
        });
      }
    }

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.radius += 0.4;
      r.alpha *= 0.96;
      if (r.alpha < 0.02 || r.radius >= r.maxRadius) {
        this.ripples.splice(i, 1);
      }
    }
  }

  drawGeese() {
    if (!this.options.enableGeese) return;
    const ctx = this.ctx;

    ctx.save();
    for (const r of this.ripples) {
      ctx.beginPath();
      ctx.ellipse(r.x, r.y, r.radius * 1.5, r.radius * 0.6, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(142, 178, 100, ${r.alpha})`;
      ctx.lineWidth = 1.0;
      ctx.stroke();
    }
    ctx.restore();

    for (const goose of this.geese) {
      ctx.save();
      ctx.translate(goose.x, goose.y + Math.sin(goose.bobPhase) * 2.5);
      ctx.scale(goose.dir * goose.scale, goose.scale);

      ctx.beginPath();
      ctx.ellipse(0, 0, 18, 10, -0.1, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = '#E2DDD2';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-6, -4);
      ctx.quadraticCurveTo(4, -7, 12, -2);
      ctx.strokeStyle = '#C9C3B4';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, -2);
      ctx.quadraticCurveTo(18, -14, 16, -24);
      ctx.quadraticCurveTo(12, -24, 8, -10);
      ctx.closePath();
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(17, -24, 5, 4, 0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(20, -26);
      ctx.lineTo(27, -23);
      ctx.lineTo(20, -21);
      ctx.closePath();
      ctx.fillStyle = '#E87A24';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(17, -25, 0.9, 0, Math.PI * 2);
      ctx.fillStyle = '#1A1A1A';
      ctx.fill();

      ctx.restore();
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 4. EVENT LISTENERS
  // ─────────────────────────────────────────────────────────────
  bindEvents() {
    window.addEventListener('resize', () => {
      this.initCanvasSize();
      this.initStrings();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const delta = Math.abs(currentScrollY - this.lastScrollY);
      this.lastScrollY = currentScrollY;

      this.scrollVelocity = Math.min(delta / 12, 2.5);
      this.scrollEnergy = Math.min(1.0, this.scrollEnergy + this.scrollVelocity * 0.4 + 0.2);

      clearTimeout(this.scrollDecayTimer);
      this.scrollDecayTimer = setTimeout(() => {
        const decay = () => {
          this.scrollEnergy *= 0.88;
          if (this.scrollEnergy > 0.02) {
            requestAnimationFrame(decay);
          } else {
            this.scrollEnergy = 0;
          }
        };
        decay();
      }, 350);
    }, { passive: true });
  }

  // ─────────────────────────────────────────────────────────────
  // 5. MAIN LOOP
  // ─────────────────────────────────────────────────────────────
  loop(timestamp) {
    if (!this.running) return;
    if (!this.lastTimestamp) this.lastTimestamp = timestamp;
    const delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;
    this.time += 0.016;

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.updateStrings();
    this.drawStrings();

    this.updateGeese(delta);
    this.drawGeese();

    this.updateDogs(delta);
    for (const dog of this.dogs) {
      this.drawDog(dog);
    }

    requestAnimationFrame(this.loop.bind(this));
  }

  // Prototype test API
  simulateScroll(velocity = 1.0) {
    this.scrollEnergy = Math.min(1.0, this.scrollEnergy + velocity);
  }

  setDogSpeed(mult) {
    this.options.dogSpeedMultiplier = mult;
  }

  triggerAllCircles() {
    this.dogs.forEach(d => {
      d.state = 'CIRCLING';
      d.circleCenter = { x: d.x + (Math.random() - 0.5) * 80, y: d.y + (Math.random() - 0.5) * 60 };
      d.circleAngle = 0;
      d.circleLoopsLeft = 2.0;
    });
  }

  triggerAllDiagonals() {
    this.dogs.forEach(d => {
      d.pathType = 'DIAGONAL';
      d.state = 'RUNNING';
      d.target = {
        x: d.x < this.width * 0.5 ? this.width + 100 : -100,
        y: Math.random() * this.height
      };
    });
  }

  triggerAllStraight() {
    this.dogs.forEach(d => {
      d.pathType = 'STRAIGHT';
      d.state = 'RUNNING';
      d.target = {
        x: d.x < this.width * 0.5 ? this.width + 100 : -100,
        y: d.y
      };
    });
  }
}

window.FarmWorldCanvas = FarmWorldCanvas;
