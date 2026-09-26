// UP Purreins - Shopping Cart & Order Inquiry Engine (INR)

class CartManager {
  constructor() {
    this.items = this.loadCart();
    this.coupon = this.loadCoupon();
    this.customer = this.loadCustomer();
    this.freeDeliveryThreshold = 1500;
    this.initUI();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('purreins_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Could not load cart", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('purreins_cart', JSON.stringify(this.items));
      this.updateBadges();
      this.renderDrawer();
    } catch (e) {
      console.error("Could not save cart", e);
    }
  }

  loadCoupon() {
    try {
      return localStorage.getItem('purreins_coupon') || '';
    } catch (e) {
      return '';
    }
  }

  saveCoupon(code) {
    try {
      this.coupon = code;
      localStorage.setItem('purreins_coupon', code);
    } catch (e) {}
  }

  loadCustomer() {
    try {
      const saved = localStorage.getItem('purreins_customer');
      return saved ? JSON.parse(saved) : { name: '', phone: '', address: '', notes: '' };
    } catch (e) {
      return { name: '', phone: '', address: '', notes: '' };
    }
  }

  saveCustomer(customerData) {
    try {
      this.customer = { ...this.customer, ...customerData };
      localStorage.setItem('purreins_customer', JSON.stringify(this.customer));
    } catch (e) {}
  }

  addItem(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.items.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`✨ Added "${product.name}" to your basket`);
    this.openDrawer();
  }

  removeItem(productId) {
    const item = this.items.find(i => i.id === productId);
    this.items = this.items.filter(i => i.id !== productId);
    this.saveCart();
    if (item) {
      this.showToast(`Removed "${item.name}" from basket`);
    }
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(productId);
    } else {
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getDiscountAmount() {
    const subtotal = this.getSubtotal();
    if (this.coupon && this.coupon.toUpperCase() === 'HARVEST10') {
      return Math.round(subtotal * 0.10);
    }
    return 0;
  }

  getFinalTotal() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    return Math.max(0, subtotal - discount);
  }

  applyCouponCode(code) {
    const clean = code.trim().toUpperCase();
    if (clean === 'HARVEST10') {
      this.saveCoupon('HARVEST10');
      this.showToast('🎉 Code HARVEST10 applied! 10% discount added.');
      this.renderDrawer();
    } else if (clean === '') {
      this.saveCoupon('');
      this.renderDrawer();
    } else {
      this.showToast('⚠️ Invalid coupon code. Try HARVEST10 for 10% off.');
    }
  }

  removeCoupon() {
    this.saveCoupon('');
    this.showToast('Coupon removed.');
    this.renderDrawer();
  }

  updateBadges() {
    const count = this.getTotalCount();
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <i data-lucide="check-circle" class="w-5 h-5 text-brand-mossLight"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.remove('hidden');
      setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
        drawer.classList.remove('translate-x-full');
      }, 10);
      this.renderDrawer();
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      drawer.classList.add('translate-x-full');
      setTimeout(() => {
        backdrop.classList.add('hidden');
      }, 300);
    }
  }

  collectCustomerFromForm() {
    const name = document.getElementById('cart-cust-name')?.value || '';
    const phone = document.getElementById('cart-cust-phone')?.value || '';
    const address = document.getElementById('cart-cust-address')?.value || '';
    const notes = document.getElementById('cart-cust-notes')?.value || '';
    this.saveCustomer({ name, phone, address, notes });
  }

  renderDrawer() {
    const list = document.getElementById('cart-items-list');
    const emptyState = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-footer');
    const subtotalEl = document.getElementById('cart-subtotal-amount');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount-amount');
    const totalEl = document.getElementById('cart-final-total-amount');
    const freeDeliveryBanner = document.getElementById('cart-free-delivery-banner');

    if (!list) return;

    if (this.items.length === 0) {
      if (list) list.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (footer) footer.classList.add('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (footer) footer.classList.remove('hidden');

    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const finalTotal = this.getFinalTotal();

    if (subtotalEl) subtotalEl.textContent = `INR ${subtotal.toLocaleString('en-IN')}`;
    
    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.classList.remove('hidden');
        discountEl.textContent = `-INR ${discount.toLocaleString('en-IN')} (${this.coupon})`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (totalEl) totalEl.textContent = `INR ${finalTotal.toLocaleString('en-IN')}`;

    // Free delivery progress
    if (freeDeliveryBanner) {
      if (subtotal >= this.freeDeliveryThreshold) {
        freeDeliveryBanner.innerHTML = `
          <div class="bg-brand-forest/30 border border-brand-mossLight/30 px-3 py-2 rounded-sm text-xs text-[#e2c9a5] flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-brand-gold flex-shrink-0"></i>
            <span><strong>Qualified!</strong> Free Farmstead Delivery unlocked across Tamil Nadu & Kerala.</span>
          </div>
        `;
      } else {
        const remaining = (this.freeDeliveryThreshold - subtotal).toLocaleString('en-IN');
        freeDeliveryBanner.innerHTML = `
          <div class="bg-white/5 border border-white/10 px-3 py-2 rounded-sm text-xs text-[#cbb89d] flex items-center justify-between gap-2">
            <span>Add <strong class="text-brand-gold">INR ${remaining}</strong> more for Free Delivery</span>
            <span class="text-[10px] text-brand-mossLight font-semibold uppercase tracking-wider">Threshold INR 1,500</span>
          </div>
        `;
      }
    }

    list.innerHTML = this.items.map(item => `
      <div class="flex items-center gap-3 py-3 border-b border-white/10">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-sm border border-white/15" />
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-sm text-[#e2c9a5] truncate">${item.name}</h4>
          <p class="text-xs text-[#cbb89d]/70">${item.unit} • INR ${item.price.toLocaleString('en-IN')}</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center border border-white/15 rounded-sm bg-black/60 overflow-hidden">
              <button onclick="window.cart.updateQuantity('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-white/10 text-[#e2c9a5] font-bold transition text-xs">-</button>
              <span class="px-2 text-xs font-semibold text-[#e2c9a5]">${item.quantity}</span>
              <button onclick="window.cart.updateQuantity('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-white/10 text-[#e2c9a5] font-bold transition text-xs">+</button>
            </div>
            <button onclick="window.cart.removeItem('${item.id}')" class="text-xs text-rose-400 hover:text-rose-300 transition underline ml-2">Remove</button>
          </div>
        </div>
        <div class="text-right">
          <span class="font-semibold text-brand-gold text-sm">INR ${(item.price * item.quantity).toLocaleString('en-IN')}</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  checkoutWhatsApp() {
    if (this.items.length === 0) return;
    this.collectCustomerFromForm();

    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const finalTotal = this.getFinalTotal();
    const cust = this.customer;

    let message = `🌿 *New Order Dispatch - ${BRAND_CONFIG.companyName}*\n`;
    message += `----------------------------------------\n`;
    this.items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.unit})\n`;
      message += `   Qty: ${item.quantity} × INR ${item.price.toLocaleString('en-IN')} = INR ${(item.quantity * item.price).toLocaleString('en-IN')}\n`;
    });
    message += `----------------------------------------\n`;
    message += `*Subtotal:* INR ${subtotal.toLocaleString('en-IN')}\n`;
    if (discount > 0) {
      message += `*Discount (${this.coupon}):* -INR ${discount.toLocaleString('en-IN')}\n`;
    }
    message += `*Total Order Value:* INR ${finalTotal.toLocaleString('en-IN')}\n`;
    message += `----------------------------------------\n`;
    message += `📦 *Delivery & Customer Details:*\n`;
    message += `• *Name:* ${cust.name || 'Not specified'}\n`;
    message += `• *Phone / WhatsApp:* ${cust.phone || 'Not specified'}\n`;
    message += `• *Delivery Address:* ${cust.address || 'Standard Farmstead Collection / To Confirm'}\n`;
    if (cust.notes) {
      message += `• *Special Instructions:* ${cust.notes}\n`;
    }
    message += `\nHello! I would like to confirm this order in INR with ${BRAND_CONFIG.companyName}. Please let me know the harvest schedule & UPI/Payment details. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  }

  checkoutEmail() {
    if (this.items.length === 0) return;
    this.collectCustomerFromForm();

    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const finalTotal = this.getFinalTotal();
    const cust = this.customer;

    let subject = `Order Inquiry from ${BRAND_CONFIG.brandName} Website (${cust.name || 'New Customer'})`;
    let body = `Hello ${BRAND_CONFIG.companyName} Farm Team,\n\nI would like to place the following order in INR:\n\n`;
    this.items.forEach((item, index) => {
      body += `${index + 1}. ${item.name} (${item.unit}) - Qty: ${item.quantity} - INR ${(item.quantity * item.price).toLocaleString('en-IN')}\n`;
    });
    body += `\nSubtotal: INR ${subtotal.toLocaleString('en-IN')}\n`;
    if (discount > 0) {
      body += `Discount (${this.coupon}): -INR ${discount.toLocaleString('en-IN')}\n`;
    }
    body += `Total Order Value: INR ${finalTotal.toLocaleString('en-IN')}\n\n`;
    body += `Customer Details:\n`;
    body += `Name: ${cust.name || 'N/A'}\n`;
    body += `Phone: ${cust.phone || 'N/A'}\n`;
    body += `Address: ${cust.address || 'N/A'}\n`;
    if (cust.notes) body += `Notes: ${cust.notes}\n`;
    body += `\nPlease confirm availability and dispatch schedule. Thank you!`;

    const mailtoUrl = `mailto:${BRAND_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  initUI() {
    this.injectDrawer();
    this.updateBadges();
    this.renderDrawer();
  }

  injectDrawer() {
    if (!document.getElementById('cart-drawer')) {
      const cust = this.customer;
      const drawerHTML = `
        <div id="cart-backdrop" class="fixed inset-0 cart-drawer-backdrop z-50 hidden opacity-0 transition-opacity bg-black/80 backdrop-blur-sm" onclick="window.cart.closeDrawer()"></div>
        <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-50 transform translate-x-full cart-drawer flex flex-col">
          <!-- Header -->
          <div class="p-4 sm:p-5 bg-black text-[#e2c9a5] flex items-center justify-between border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <i data-lucide="shopping-bag" class="w-5 h-5 text-brand-mossLight"></i>
              <h3 class="font-serif text-xl font-bold tracking-wide text-[#e2c9a5]">Your Farm Basket</h3>
            </div>
            <button onclick="window.cart.closeDrawer()" class="text-[#cbb89d]/60 hover:text-[#e2c9a5] p-1 rounded-sm hover:bg-white/5 transition">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>

          <!-- Free Delivery Banner -->
          <div id="cart-free-delivery-banner" class="p-3 bg-black/40 border-b border-white/10"></div>

          <!-- Cart Items Container -->
          <div class="flex-1 overflow-y-auto p-4 sm:p-5" id="cart-items-container">
            <div id="cart-empty-state" class="py-16 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-brand-forest/20 text-brand-mossLight rounded-full flex items-center justify-center border border-brand-forest/40">
                <i data-lucide="sprout" class="w-8 h-8"></i>
              </div>
              <h4 class="font-serif text-lg font-bold text-[#e2c9a5] mb-1">Your basket is resting</h4>
              <p class="text-[#cbb89d]/70 text-sm max-w-xs mx-auto mb-6 font-light">Explore our handcrafted soaps, whole herbs, fresh duck eggs, and quilts to fill your basket.</p>
              <a href="shop.html" class="inline-flex items-center gap-2 bg-brand-forest text-[#e2c9a5] px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-brand-sage transition border border-brand-mossLight/30">
                <span>Browse Farm Shop</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
            
            <div id="cart-items-list"></div>

            <!-- Customer & Delivery Form (Shown when items exist) -->
            <div id="cart-customer-section" class="mt-6 pt-4 border-t border-white/10">
              <h4 class="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3 flex items-center gap-1.5">
                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                <span>Delivery & Contact Details</span>
              </h4>
              <div class="space-y-2.5 text-xs">
                <input type="text" id="cart-cust-name" value="${cust.name || ''}" placeholder="Your Full Name" class="w-full px-3 py-2 bg-black/60 border border-white/15 rounded-sm text-[#e2c9a5] placeholder-[#cbb89d]/40 focus:outline-none focus:border-brand-mossLight transition" oninput="window.cart.collectCustomerFromForm()" />
                <input type="tel" id="cart-cust-phone" value="${cust.phone || ''}" placeholder="WhatsApp / Phone Number" class="w-full px-3 py-2 bg-black/60 border border-white/15 rounded-sm text-[#e2c9a5] placeholder-[#cbb89d]/40 focus:outline-none focus:border-brand-mossLight transition" oninput="window.cart.collectCustomerFromForm()" />
                <input type="text" id="cart-cust-address" value="${cust.address || ''}" placeholder="Delivery Address / City / Pin Code" class="w-full px-3 py-2 bg-black/60 border border-white/15 rounded-sm text-[#e2c9a5] placeholder-[#cbb89d]/40 focus:outline-none focus:border-brand-mossLight transition" oninput="window.cart.collectCustomerFromForm()" />
                <input type="text" id="cart-cust-notes" value="${cust.notes || ''}" placeholder="Delivery notes (optional)" class="w-full px-3 py-2 bg-black/60 border border-white/15 rounded-sm text-[#e2c9a5] placeholder-[#cbb89d]/40 focus:outline-none focus:border-brand-mossLight transition" oninput="window.cart.collectCustomerFromForm()" />
              </div>
            </div>

            <!-- Coupon Code Section -->
            <div class="mt-4 pt-3 border-t border-white/10">
              <div class="flex gap-2">
                <input type="text" id="cart-coupon-input" value="${this.coupon || ''}" placeholder="Promo Code (e.g. HARVEST10)" class="flex-1 px-3 py-1.5 bg-black/60 border border-white/15 rounded-sm text-xs text-[#e2c9a5] placeholder-[#cbb89d]/40 uppercase focus:outline-none focus:border-brand-gold transition" />
                <button onclick="window.cart.applyCouponCode(document.getElementById('cart-coupon-input').value)" class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-[#e2c9a5] text-xs font-semibold rounded-sm transition">Apply</button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div id="cart-footer" class="p-4 sm:p-5 bg-black border-t border-white/10 hidden">
            <div class="space-y-1.5 mb-3 text-xs">
              <div class="flex items-center justify-between text-[#cbb89d]">
                <span>Items Subtotal</span>
                <span id="cart-subtotal-amount" class="font-semibold text-[#e2c9a5]">INR 0</span>
              </div>
              <div id="cart-discount-row" class="flex items-center justify-between text-brand-mossLight hidden">
                <span>Promotional Savings</span>
                <span id="cart-discount-amount" class="font-semibold">-INR 0</span>
              </div>
              <div class="flex items-center justify-between text-sm pt-2 border-t border-white/10">
                <span class="text-[#e2c9a5] font-semibold">Total</span>
                <span id="cart-final-total-amount" class="text-xl font-bold text-brand-gold font-serif">INR 0</span>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <button onclick="window.cart.checkoutWhatsApp()" class="w-full bg-brand-forest hover:bg-brand-sage text-[#e2c9a5] py-3 px-4 rounded-sm font-medium flex items-center justify-center gap-2 shadow-lg transition border border-brand-mossLight/30 text-xs sm:text-sm">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                <span>Complete Order via WhatsApp (INR)</span>
              </button>
              <button onclick="window.cart.checkoutEmail()" class="w-full bg-white/5 hover:bg-white/10 text-[#cbb89d] hover:text-[#e2c9a5] py-2.5 px-4 rounded-sm font-medium flex items-center justify-center gap-2 transition text-xs border border-white/10">
                <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                <span>Inquire via Email</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', drawerHTML);
    }
  }
}

// Global instance
document.addEventListener('DOMContentLoaded', () => {
  window.cart = new CartManager();
});
