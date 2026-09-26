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

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        if (mobileBackdrop) mobileBackdrop.classList.remove('opacity-0');
        mobileMenu.querySelector('.drawer-content')?.classList.remove('translate-x-full');
      }, 10);
    });
  }

  const closeMobileNav = () => {
    if (mobileMenu) {
      if (mobileBackdrop) mobileBackdrop.classList.add('opacity-0');
      mobileMenu.querySelector('.drawer-content')?.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  };

  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);
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

  const body = document.getElementById('product-modal-body');
  body.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6 items-start">
      <div class="rounded-xl overflow-hidden border border-white/10 shadow-lg">
        <img src="${product.image}" alt="${product.name}" class="w-full h-72 object-cover" />
      </div>
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs px-2.5 py-0.5 rounded-full font-medium ${product.badgeType === 'organic' ? 'bg-brand-forest/40 text-brand-mossLight border border-brand-mossLight/30' : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'}">
            ${product.badge}
          </span>
          <span class="text-xs text-[#cbb89d]/70">• ${product.unit}</span>
        </div>
        <h3 class="text-2xl font-serif font-bold text-[#e2c9a5] mb-2">${product.name}</h3>
        <p class="text-2xl font-bold text-brand-gold mb-4">INR ${product.price.toLocaleString('en-IN')}</p>
        
        <p class="text-[#cbb89d] text-sm leading-relaxed mb-4">${product.description}</p>
        
        <div class="bg-white/5 p-4 rounded-xl mb-6 border border-white/10">
          <h4 class="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Pure Ingredients & Sourcing</h4>
          <p class="text-xs text-[#e2c9a5]/90 leading-relaxed">${product.ingredients}</p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.cart.addItem('${product.id}'); closeProductModal();" class="flex-1 bg-brand-forest hover:bg-brand-sage text-[#e2c9a5] py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg transition">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Add to Basket</span>
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
