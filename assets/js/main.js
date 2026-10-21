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

// Quick View Product Modal
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('product-detail-modal');
  if (!modal) {
    const modalHTML = `
      <div id="product-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity">
        <div class="bg-[#0e0e0e] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 md:p-8 transform scale-95 transition-transform" id="product-modal-card">
          <button onclick="closeProductModal()" class="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#e2c9a5] transition">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          <div id="product-modal-body"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modal = document.getElementById('product-detail-modal');
  }

  const isThrow = product.id.includes('throw');
  const initialColorway = product.colorways ? (product.colorways.find(c => c.id === product.activeColorwayId) || product.colorways[0]) : null;

  const body = document.getElementById('product-modal-body');
  body.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6 items-start">
      <div class="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/60">
        <img id="modal-product-img" src="${product.image}" alt="${product.name}" class="w-full h-72 sm:h-84 object-cover transition-opacity duration-300" />
      </div>
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span id="modal-product-badge" class="text-xs px-2.5 py-0.5 rounded-full font-medium ${product.badgeType === 'organic' ? 'bg-brand-forest/40 text-brand-mossLight border border-brand-mossLight/30' : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'}">
            ${product.badge}
          </span>
          <span class="text-xs text-[#cbb89d]/70">• ${product.unit}</span>
        </div>
        <h3 class="text-2xl font-serif font-bold text-[#e2c9a5] mb-2">${product.name}</h3>
        <p class="text-2xl font-bold text-brand-gold mb-3">INR ${product.price.toLocaleString('en-IN')}</p>
        
        ${product.colorways ? `
          <!-- Pastel Colorway & Signature Motif Selector inside Modal -->
          <div class="mb-4 p-3 rounded-lg bg-black/35 border border-white/10">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-brand-gold">Choose Pastel Shade &amp; Motif:</span>
              <span id="modal-selected-cw-label" class="text-xs text-brand-cream font-medium">${initialColorway ? initialColorway.name : 'Select a Shade'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5" id="modal-colorway-buttons">
              ${product.colorways.map(cw => `
                <button type="button" 
                  onclick="selectModalColorway('${product.id}', '${cw.id}')" 
                  class="modal-cw-btn px-2 py-1.5 rounded text-left text-xs bg-white/5 hover:bg-white/15 border border-white/10 flex items-center gap-1.5 transition">
                  <span class="w-3 h-3 rounded-full flex-shrink-0 border border-black/40" style="background-color: ${cw.hex};"></span>
                  <span class="text-[11px] text-[#e2c9a5] truncate">${cw.name.replace('Pastel ', '')}</span>
                </button>
              `).join('')}
            </div>
            <p id="modal-cw-spec-note" class="text-[11px] text-[#cbb89d]/80 mt-2 leading-relaxed">
              ${isThrow ? `Reversible: solid pastel on one side, crisp unbleached white with signature motif print on the other.` : `100% solid pastel brushed cotton on both sides (zero prints), 3 plump channels filled with Tamizhnad Ilavam Panju.`}
            </p>
          </div>
        ` : ''}

        <p class="text-[#cbb89d] text-sm leading-relaxed mb-4">${product.description}</p>
        
        <div class="bg-white/5 p-4 rounded-xl mb-4 border border-white/10">
          <h4 class="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Pure Ingredients &amp; Sourcing</h4>
          <p class="text-xs text-[#e2c9a5]/90 leading-relaxed">${product.ingredients}</p>
        </div>

        <div class="mb-5 p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/25 flex items-center gap-2.5 text-xs text-brand-gold">
          <i data-lucide="clock" class="w-4 h-4 flex-shrink-0"></i>
          <span><strong>Pre-Order Item:</strong> Handcrafted small batch. Releases next month.</span>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.cart.addItem('${product.id}'); closeProductModal();" class="flex-1 bg-brand-forest hover:bg-brand-sage text-[#e2c9a5] py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg transition">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Pre-Order (Ships Next Month)</span>
          </button>
          <button onclick="inquireProduct('${product.name}')" class="p-3.5 border border-white/20 hover:border-brand-mossLight rounded-xl text-[#e2c9a5] hover:bg-white/5 transition" title="Ask a question via WhatsApp">
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
  }, 10);

  if (window.lucide) lucide.createIcons();
}

function selectModalColorway(productId, colorwayId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.colorways) return;
  const cw = product.colorways.find(c => c.id === colorwayId);
  if (!cw) return;

  const isThrow = product.id.includes('throw');
  product.image = `${cw.image}?v=1`;
  product.badge = isThrow ? `${cw.name} • ${cw.motif} Print` : `${cw.name} • Solid Quilt`;
  product.activeColorwayId = cw.id;

  const imgEl = document.getElementById('modal-product-img');
  const badgeEl = document.getElementById('modal-product-badge');
  const labelEl = document.getElementById('modal-selected-cw-label');
  const noteEl = document.getElementById('modal-cw-spec-note');

  if (imgEl) {
    imgEl.style.opacity = '0.5';
    setTimeout(() => {
      imgEl.src = product.image;
      imgEl.style.opacity = '1';
    }, 100);
  }
  if (badgeEl) badgeEl.textContent = product.badge;
  if (labelEl) labelEl.textContent = `${cw.name} (${cw.motif})`;
  if (noteEl) {
    noteEl.textContent = isThrow
      ? `Reversible: solid ${cw.name} on one side, crisp unbleached white with ${cw.motif} print on the other.`
      : `100% solid ${cw.name} on both sides (zero prints), filled with Tamizhnad Ilavam Panju.`;
  }

  // Also sync the card on the shop page if present
  if (typeof swapProductCardColor === 'function') {
    swapProductCardColor(productId, colorwayId);
  }
}

function closeProductModal() {
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
