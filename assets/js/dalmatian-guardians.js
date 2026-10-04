/**
 * UP Purreins — Real Dalmatian Guardians Engine
 * 
 * Interactive Scroll Velocity & Dual Stop Pose System:
 * - Dynamic Speed: Runs faster the faster you scroll, slows down the slower you scroll
 * - Gentle Deceleration: Smoothly coasts to a complete stop when scrolling stops
 * - Dual Stopping Poses:
 *   - Pose 1: Alert Stand (watching forward ahead, chest out, four paws planted)
 *   - Pose 2: Curious Look (inquisitive head tilt, ears perked, watchful pause)
 *   - Naturally shifts between poses while resting
 * - True 6-frame running leg articulation (far apart reach & drive, close by gathered suspension)
 * - Cute small sizes (Cocoa: 158px, Patch: 140px, Sandy: 124px)
 * - Direction locked to physical movement vector (never moonwalks or runs backwards)
 */

(function() {
  class DalmatianGuardians {
    constructor() {
      this.canvas = document.getElementById('dalmatian-canvas');
      if (!this.canvas) {
        this.createCanvas();
      }
      this.ctx = this.canvas.getContext('2d');
      this.dpr = window.devicePixelRatio || 1;

      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.resize();

      // Scroll physics & velocity tracking
      this.lastScrollY = window.scrollY || window.pageYOffset;
      this.lastScrollTime = performance.now();
      this.scrollVelocity = 0.6; // Welcoming initial trot
      this.isScrolling = true;
      this.time = 0;
      this.lastTimestamp = 0;

      // Cache buster for ultra-clear high-DPI assets
      const v = 'v=crystal_clear_sandy_color_belt_v17';

      // Load 6-frame running sequences
      // Patch has anatomically separate sequences: right-facing (right eye patch) and left-facing (no eye patch)
      this.runningFrames = {
        patch_right: this.loadSequence('assets/images/patch_right_f', 6, v),
        patch_left: this.loadSequence('assets/images/patch_left_f', 6, v),
        cocoa: this.loadSequence('assets/images/cocoa_f', 6, v),
        sandy: this.loadSequence('assets/images/sandy_f', 6, v)
      };

      // Load dual stopping poses (Pose 0 = Alert Stand, Pose 1 = Curious Head Tilt)
      this.stopPoses = {
        patch_right: [
          this.loadImage(`assets/images/patch_right_stop_0.png?${v}`),
          this.loadImage(`assets/images/patch_right_stop_1.png?${v}`)
        ],
        patch_left: [
          this.loadImage(`assets/images/patch_left_stop_0.png?${v}`),
          this.loadImage(`assets/images/patch_left_stop_1.png?${v}`)
        ],
        cocoa: [
          this.loadImage(`assets/images/cocoa_stop_0.png?${v}`),
          this.loadImage(`assets/images/cocoa_stop_1.png?${v}`),
        ],
        sandy: [
          this.loadImage(`assets/images/sandy_stop_0.png?${v}`),
          this.loadImage(`assets/images/sandy_stop_1.png?${v}`)
        ]
      };

      // Dog specifications matching real dogs & crystal clear presence
      this.dogs = [
        // 1. PATCH (Center: Black spots, right eye patch, BOTH ears 100% solid velvety black)
        {
          id: 'patch',
          name: 'Patch',
          key: 'patch',
          drawWidth: 150,
          drawHeight: 100,
          x: this.width * 0.25,
          y: this.height * 0.70,
          prevX: this.width * 0.25,
          facing: 1, // 1 = right, -1 = left
          baseSpeed: 2.2,
          cadenceRate: 0.082,
          frameProgress: 0,
          currentFrame: 0,
          heading: 0,
          state: 'RUNNING', // 'RUNNING', 'STOPPED'
          target: { x: this.width * 0.75, y: this.height * 0.65 },
          circleCenter: { x: 0, y: 0 },
          circleRadius: 90,
          circleAngle: 0,
          circleSpeed: 0.026,
          circleLoopsLeft: 0,
          stopPoseIndex: 0,
          stopTimer: 0,
          bobOffset: 0
        },

        // 2. COCOA (Left: Dark liver brown spots, tallest guardian, stately stride)
        {
          id: 'cocoa',
          name: 'Cocoa',
          key: 'cocoa',
          drawWidth: 168,
          drawHeight: 112,
          x: this.width * 0.15,
          y: this.height * 0.76,
          prevX: this.width * 0.15,
          facing: 1,
          baseSpeed: 2.4,
          cadenceRate: 0.072,
          frameProgress: 1.5,
          currentFrame: 1,
          heading: 0,
          state: 'RUNNING',
          target: { x: this.width * 0.85, y: this.height * 0.75 },
          circleCenter: { x: 0, y: 0 },
          circleRadius: 110,
          circleAngle: 0,
          circleSpeed: 0.022,
          circleLoopsLeft: 0,
          stopPoseIndex: 0,
          stopTimer: 0,
          bobOffset: 1.5
        },

        // 3. SANDY (Right: Natural amber-liver spots, shortest legs, compact, playful)
        {
          id: 'sandy',
          name: 'Sandy',
          key: 'sandy',
          drawWidth: 136,
          drawHeight: 91,
          x: this.width * 0.10,
          y: this.height * 0.82,
          prevX: this.width * 0.10,
          facing: 1,
          baseSpeed: 2.1,
          cadenceRate: 0.076,
          frameProgress: 3.0,
          currentFrame: 3,
          heading: 0,
          state: 'RUNNING',
          target: { x: this.width * 0.68, y: this.height * 0.80 },
          circleCenter: { x: 0, y: 0 },
          circleRadius: 80,
          circleAngle: 0,
          circleSpeed: 0.032,
          circleLoopsLeft: 0,
          stopPoseIndex: 1,
          stopTimer: 0,
          bobOffset: 3.0
        }
      ];

      this.dogs.forEach(d => this.pickNewDestination(d));
      this.bindEvents();
      requestAnimationFrame(this.loop.bind(this));
    }

    createCanvas() {
      this.canvas = document.createElement('canvas');
      this.canvas.id = 'dalmatian-canvas';
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100vw';
      this.canvas.style.height = '100vh';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '5';
      this.canvas.style.opacity = '0.95';
      document.body.appendChild(this.canvas);
    }

    loadSequence(basePath, count, version) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        const img = new Image();
        img.src = `${basePath}${i}.png?${version}`;
        img.loaded = false;
        img.onload = () => { img.loaded = true; };
        arr.push(img);
      }
      return arr;
    }

    loadImage(src) {
      const img = new Image();
      img.src = src;
      img.loaded = false;
      img.onload = () => { img.loaded = true; };
      return img;
    }

    resize() {
      const oldWidth = this.width || window.innerWidth;
      const oldHeight = this.height || window.innerHeight;

      const vv = window.visualViewport;
      if (vv) {
        this.width = vv.width;
        this.height = vv.height;
        this.scale = vv.scale || 1;
        this.dpr = (window.devicePixelRatio || 1) * this.scale;
        this.canvas.style.position = 'fixed';
        this.canvas.style.left = `${vv.offsetLeft}px`;
        this.canvas.style.top = `${vv.offsetTop}px`;
        this.canvas.style.width = `${vv.width}px`;
        this.canvas.style.height = `${vv.height}px`;
      } else {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.scale = 1;
        this.dpr = window.devicePixelRatio || 1;
        this.canvas.style.position = 'fixed';
        this.canvas.style.left = '0px';
        this.canvas.style.top = '0px';
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
      }

      this.canvas.width = Math.round(this.width * this.dpr);
      this.canvas.height = Math.round(this.height * this.dpr);
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpr, this.dpr);
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';

      // Proportional dog re-mapping: Dogs NEVER get stranded off-screen when zooming in
      if (this.dogs && oldWidth > 0 && oldHeight > 0) {
        for (const dog of this.dogs) {
          dog.x = (dog.x / oldWidth) * this.width;
          dog.y = (dog.y / oldHeight) * this.height;
          this.clampDogInside(dog);
        }
      }
    }

    clampDogInside(dog) {
      const padX = dog.drawWidth * 0.55;
      const padY = dog.drawHeight * 0.55;
      const minX = padX;
      const maxX = Math.max(padX, this.width - padX);
      const minY = padY + 30;
      const maxY = Math.max(padY + 30, this.height - padY - 20);

      if (dog.x < minX) dog.x = minX;
      if (dog.x > maxX) dog.x = maxX;
      if (dog.y < minY) dog.y = minY;
      if (dog.y > maxY) dog.y = maxY;
    }

    pickNewDestination(dog) {
      const padX = dog.drawWidth * 0.6;
      const padY = dog.drawHeight * 0.6;
      const minX = padX;
      const maxX = Math.max(padX + 50, this.width - padX);
      const minY = padY + 40;
      const maxY = Math.max(minY + 30, this.height - padY - 20);

      const roll = Math.random();
      if (roll < 0.28) {
        // Playful circular turn inside the visible screen
        dog.isCircling = true;
        dog.circleRadius = Math.min(80, Math.max(30, (maxX - minX) * 0.20));
        dog.circleCenter = {
          x: Math.max(minX + dog.circleRadius, Math.min(maxX - dog.circleRadius, dog.x + (Math.random() - 0.5) * 140)),
          y: Math.max(minY + dog.circleRadius, Math.min(maxY - dog.circleRadius, dog.y + (Math.random() - 0.5) * 100))
        };
        dog.circleAngle = Math.atan2(dog.y - dog.circleCenter.y, dog.x - dog.circleCenter.x);
        dog.circleLoopsLeft = 1.0 + Math.random() * 1.2;
      } else {
        // Traverse back and forth across visible screen (never off-screen)
        dog.isCircling = false;
        const toRight = dog.x < this.width * 0.5;
        const destX = toRight
          ? minX + (maxX - minX) * (0.55 + Math.random() * 0.42)
          : minX + (maxX - minX) * (0.03 + Math.random() * 0.42);
        const destY = minY + Math.random() * (maxY - minY);
        dog.target = { x: destX, y: destY };
      }
    }

    bindEvents() {
      window.addEventListener('resize', () => this.resize());
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => this.resize());
        window.visualViewport.addEventListener('scroll', () => this.resize());
      }

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY || window.pageYOffset;
        const deltaY = Math.abs(currentScrollY - this.lastScrollY);
        const now = performance.now();
        const dt = Math.max(1, now - this.lastScrollTime);
        this.lastScrollY = currentScrollY;
        this.lastScrollTime = now;

        // Dynamic scroll speed: Faster scrolling produces higher velocity
        const rawSpeed = deltaY / dt; // px per ms (typically 0.1 to 3.0+)
        const speedImpulse = Math.min(1.4, rawSpeed * 0.6);

        // Smoothly boost velocity
        this.scrollVelocity = Math.min(3.0, this.scrollVelocity + speedImpulse + 0.15);
        this.isScrolling = true;
      }, { passive: true });
    }

    update(delta) {
      const now = performance.now();
      const timeSinceScroll = now - this.lastScrollTime;

      // DECELERATION TO STOP:
      // When scrolling stops, velocity smoothly coasts down to 0
      if (timeSinceScroll > 75) {
        this.scrollVelocity *= 0.91; // Smooth friction decay
        if (this.scrollVelocity < 0.04) {
          this.scrollVelocity = 0;
          this.isScrolling = false;
        }
      }

      // SPEED MULTIPLIER:
      // Slower scrolling = slower run; Faster scrolling = faster run
      const isRunning = this.scrollVelocity > 0.05;
      const speedMult = isRunning ? Math.min(2.8, 0.40 + this.scrollVelocity * 0.85) : 0;

      for (const dog of this.dogs) {
        dog.prevX = dog.x;

        if (isRunning) {
          // Transition immediately to RUNNING
          if (dog.state !== 'RUNNING') {
            dog.state = 'RUNNING';
            dog.stopTimer = 0;
          }

          // Leg stride cadence advances dynamically with scroll speed:
          // Faster scrolling -> legs cycle faster! Slower scrolling -> legs cycle slower!
          dog.frameProgress += dog.cadenceRate * speedMult;
          dog.currentFrame = Math.floor(dog.frameProgress) % 6;

          // Spatial navigation
          if (dog.isCircling) {
            dog.circleAngle += dog.circleSpeed * speedMult;
            dog.circleLoopsLeft -= Math.abs(dog.circleSpeed * speedMult) / (Math.PI * 2);

            const targetX = dog.circleCenter.x + Math.cos(dog.circleAngle) * dog.circleRadius;
            const targetY = dog.circleCenter.y + Math.sin(dog.circleAngle) * dog.circleRadius;

            const nextAngle = dog.circleAngle + 0.1;
            const futureX = dog.circleCenter.x + Math.cos(nextAngle) * dog.circleRadius;
            const futureY = dog.circleCenter.y + Math.sin(nextAngle) * dog.circleRadius;
            dog.heading = Math.atan2(futureY - targetY, futureX - targetX);

            dog.x += (targetX - dog.x) * 0.10;
            dog.y += (targetY - dog.y) * 0.10;

            if (dog.circleLoopsLeft <= 0) {
              this.pickNewDestination(dog);
            }
          } else {
            const dx = dog.target.x - dog.x;
            const dy = dog.target.y - dog.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 40) {
              this.pickNewDestination(dog);
            } else {
              const targetHeading = Math.atan2(dy, dx);
              const angleDiff = Math.atan2(Math.sin(targetHeading - dog.heading), Math.cos(targetHeading - dog.heading));
              dog.heading += angleDiff * 0.08;

              // Actual ground speed scales with scroll velocity
              const moveSpeed = dog.baseSpeed * speedMult;
              dog.x += Math.cos(dog.heading) * moveSpeed;
              dog.y += Math.sin(dog.heading) * moveSpeed;
            }
          }

          // PHYSICAL DISPLACEMENT DIRECTION LOCK:
          // Always face exact physical direction of travel (prevents any backwards motion)
          const moveDeltaX = dog.x - dog.prevX;
          if (moveDeltaX > 0.04) {
            dog.facing = 1;  // Moving right -> Face right
          } else if (moveDeltaX < -0.04) {
            dog.facing = -1; // Moving left -> Face left
          }

        } else {
          // DOG IS STOPPED (User stopped scrolling)
          if (dog.state !== 'STOPPED') {
            dog.state = 'STOPPED';
            dog.stopTimer = 0;
            // Pick an initial stop pose:
            // 55% Pose 0 (Alert Stand), 45% Pose 1 (Curious Look)
            dog.stopPoseIndex = Math.random() > 0.45 ? 0 : 1;
          }

          // While stopped, naturally shift between the two poses after a resting interval (2.5–3.5s)
          dog.stopTimer += 0.016;
          if (dog.stopTimer > 2.8 + (dog.bobOffset * 0.4)) {
            dog.stopTimer = 0;
            // Alternates to the other pose
            dog.stopPoseIndex = 1 - dog.stopPoseIndex;
          }
        }

        // Clamp dog strictly inside visible viewport (guarantees zero disappearance on zoom)
        this.clampDogInside(dog);
      }
    }

    draw() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (const dog of this.dogs) {
        let sprite = null;
        let verticalBob = 0;

        if (dog.state === 'RUNNING') {
          // 6-Frame running animation
          let seq;
          if (dog.id === 'patch') {
            seq = dog.facing >= 0 ? this.runningFrames.patch_right : this.runningFrames.patch_left;
          } else {
            seq = this.runningFrames[dog.key];
          }
          if (!seq) continue;
          sprite = seq[dog.currentFrame];
          if (!sprite || !sprite.loaded) continue;

          // Subtle running trot vertical bob corresponding to paw strike
          verticalBob = Math.sin(dog.frameProgress * Math.PI) * 2.0;

        } else {
          // STOPPED: Render one of the two stopping poses
          let poses;
          if (dog.id === 'patch') {
            poses = dog.facing >= 0 ? this.stopPoses.patch_right : this.stopPoses.patch_left;
          } else {
            poses = this.stopPoses[dog.key];
          }
          if (!poses) continue;
          sprite = poses[dog.stopPoseIndex];
          if (!sprite || !sprite.loaded) continue;

          // Micro-subtle idle breathing bob (0.7px) while standing still
          verticalBob = Math.sin(this.time * 2.2 + dog.bobOffset) * 0.7;
        }

        this.ctx.save();
        this.ctx.translate(dog.x, dog.y + verticalBob);

        // Facing / orientation:
        // Patch has anatomically distinct sprites for right-facing (with eye patch on right eye)
        // and left-facing (showing left side with clean white fur, NO eye patch).
        // These sprites are pre-oriented, so Patch always renders with scale(1, 1).
        // Cocoa and Sandy have symmetrical coats, so they flip with scale(dog.facing, 1).
        const scaleX = dog.id === 'patch' ? 1 : dog.facing;
        this.ctx.scale(scaleX, 1);

        // Soft, grounded shadow beneath paws
        const shadowScale = dog.state === 'RUNNING' ? 1.0 : 0.95;
        this.ctx.beginPath();
        this.ctx.ellipse(0, dog.drawHeight * 0.40 - verticalBob, (dog.drawWidth * 0.35) * shadowScale, 6, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = dog.state === 'RUNNING' ? 'rgba(0, 0, 0, 0.40)' : 'rgba(0, 0, 0, 0.48)';
        this.ctx.fill();

        // Draw dog (running frame or stopping pose)
        this.ctx.drawImage(
          sprite,
          -dog.drawWidth / 2,
          -dog.drawHeight / 2,
          dog.drawWidth,
          dog.drawHeight
        );

        this.ctx.restore();
      }
    }

    loop(timestamp) {
      if (!this.lastTimestamp) this.lastTimestamp = timestamp;
      const delta = timestamp - this.lastTimestamp;
      this.lastTimestamp = timestamp;
      this.time += 0.016;

      const vv = window.visualViewport;
      const currentWidth = vv ? vv.width : window.innerWidth;
      const currentHeight = vv ? vv.height : window.innerHeight;
      const currentDpr = (window.devicePixelRatio || 1) * (vv ? (vv.scale || 1) : 1);
      if (currentDpr !== this.dpr || currentWidth !== this.width || currentHeight !== this.height) {
        this.resize();
      }

      this.update(delta);
      this.draw();

      requestAnimationFrame(this.loop.bind(this));
    }
  }

  // Auto-init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DalmatianGuardians());
  } else {
    new DalmatianGuardians();
  }
})();
