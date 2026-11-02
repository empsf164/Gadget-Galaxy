/**
 * GADGET GALAXY — Core Interactive Engine (assets/js/main.js)
 * Manages Cart, Wishlist, Compare, Quick View, Search, Toasts, and Global UI
 */

const STORAGE_KEYS = {
  CART: 'gadgetGalaxy_cart',
  WISHLIST: 'gadgetGalaxy_wishlist',
  COMPARE: 'gadgetGalaxy_compare',
  PROMO: 'gadgetGalaxy_appliedPromo'
};

const GadgetGalaxy = {
  // -------------------------------------------------------------
  // Cart State Management
  // -------------------------------------------------------------
  getCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CART);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Cart parse error:', e);
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    this.updateCounters();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
  },

  addToCart(productId, quantity = 1, selectedColor = null, selectedStorage = null) {
    const product = GadgetData.getById(productId);
    if (!product) return false;

    const cart = this.getCart();
    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const storage = selectedStorage || (product.storageOptions && product.storageOptions[0] ? product.storageOptions[0] : 'Standard');

    const existingIndex = cart.findIndex(item => item.id === productId && item.color === color && item.storage === storage);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += parseInt(quantity);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        color: color,
        storage: storage,
        quantity: parseInt(quantity)
      });
    }

    this.saveCart(cart);
    this.showToast(`Added <strong>${product.name}</strong> to your shopping cart!`, 'success', 'bi-bag-check-fill');
    return true;
  },

  removeFromCart(index) {
    const cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      const item = cart[index];
      cart.splice(index, 1);
      this.saveCart(cart);
      this.showToast(`Removed <strong>${item.name}</strong> from cart.`, 'danger', 'bi-trash3-fill');
    }
  },

  updateCartQuantity(index, quantity) {
    const cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      const newQty = parseInt(quantity);
      if (newQty <= 0) {
        this.removeFromCart(index);
      } else {
        cart[index].quantity = newQty;
        this.saveCart(cart);
      }
    }
  },

  clearCart() {
    localStorage.removeItem(STORAGE_KEYS.CART);
    this.updateCounters();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: [] }));
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  },

  getCartSubtotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // -------------------------------------------------------------
  // Wishlist State Management
  // -------------------------------------------------------------
  getWishlist() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const product = GadgetData.getById(productId);
    const name = product ? product.name : 'Product';

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
      this.showToast(`Removed <strong>${name}</strong> from wishlist.`, 'info', 'bi-heart');
    } else {
      wishlist.push(productId);
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
      this.showToast(`Saved <strong>${name}</strong> to your wishlist!`, 'success', 'bi-heart-fill');
    }

    this.updateCounters();
    this.syncWishlistButtons();
    return this.isInWishlist(productId);
  },

  // -------------------------------------------------------------
  // Compare State Management (Max 4 products)
  // -------------------------------------------------------------
  getCompareList() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPARE);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isInCompare(productId) {
    return this.getCompareList().includes(productId);
  },

  toggleCompare(productId) {
    let compareList = this.getCompareList();
    const product = GadgetData.getById(productId);
    const name = product ? product.name : 'Product';

    if (compareList.includes(productId)) {
      compareList = compareList.filter(id => id !== productId);
      localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareList));
      this.showToast(`Removed <strong>${name}</strong> from comparison.`, 'info', 'bi-arrow-left-right');
    } else {
      if (compareList.length >= 4) {
        this.showToast(`Comparison list full! Maximum 4 products allowed.`, 'danger', 'bi-exclamation-triangle');
        return false;
      }
      compareList.push(productId);
      localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareList));
      this.showToast(`Added <strong>${name}</strong> to comparison. <a href="compare.html" class="text-white text-decoration-underline ms-1">View Compare</a>`, 'success', 'bi-arrow-left-right');
    }

    this.updateCounters();
    this.syncCompareButtons();
    window.dispatchEvent(new CustomEvent('compareUpdated', { detail: compareList }));
    return this.isInCompare(productId);
  },

  // -------------------------------------------------------------
  // UI Badge Synchronizer
  // -------------------------------------------------------------
  updateCounters() {
    const cartCount = this.getCartCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? 'flex' : 'none';
    });

    const wishlistCount = this.getWishlist().length;
    document.querySelectorAll('.wishlist-count').forEach(el => {
      el.textContent = wishlistCount;
      el.style.display = wishlistCount > 0 ? 'flex' : 'none';
    });

    const compareCount = this.getCompareList().length;
    document.querySelectorAll('.compare-count').forEach(el => {
      el.textContent = compareCount;
      el.style.display = compareCount > 0 ? 'inline-flex' : 'none';
    });
  },

  syncWishlistButtons() {
    const wishlist = this.getWishlist();
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      if (wishlist.includes(id)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="bi bi-heart"></i>';
      }
    });
  },

  syncCompareButtons() {
    const compareList = this.getCompareList();
    document.querySelectorAll('[data-compare-id]').forEach(btn => {
      const id = btn.getAttribute('data-compare-id');
      if (compareList.includes(id)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },

  // -------------------------------------------------------------
  // Global Toast Notifications
  // -------------------------------------------------------------
  showToast(message, type = 'info', icon = 'bi-info-circle') {
    let container = document.getElementById('galaxyToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'galaxyToastContainer';
      container.className = 'galaxy-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `galaxy-toast toast-${type}`;
    toast.innerHTML = `
      <i class="bi ${icon} fs-5"></i>
      <div class="flex-grow-1">${message}</div>
      <button type="button" class="btn-close btn-close-white ms-2" style="font-size: 0.65rem;" onclick="this.parentElement.remove()"></button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  },

  // -------------------------------------------------------------
  // Product Card HTML Generator
  // -------------------------------------------------------------
  renderProductCard(p) {
    const isWishlist = this.isInWishlist(p.id);
    const isCompare = this.isInCompare(p.id);

    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
        <div class="product-card" data-product-id="${p.id}">
          <div class="product-thumb-container">
            ${p.badge ? `<span class="product-badge ${p.badgeType || 'deal'}">${p.badge}</span>` : ''}
            
            <div class="product-actions-overlay">
              <button class="action-btn-circle ${isWishlist ? 'active' : ''}" data-wishlist-id="${p.id}" onclick="GadgetGalaxy.toggleWishlist('${p.id}')" title="Save to Wishlist">
                <i class="bi ${isWishlist ? 'bi-heart-fill' : 'bi-heart'}"></i>
              </button>
              <button class="action-btn-circle ${isCompare ? 'active' : ''}" data-compare-id="${p.id}" onclick="GadgetGalaxy.toggleCompare('${p.id}')" title="Compare Product">
                <i class="bi bi-arrow-left-right"></i>
              </button>
              <button class="action-btn-circle" onclick="GadgetGalaxy.openQuickView('${p.id}')" title="Quick View">
                <i class="bi bi-eye"></i>
              </button>
            </div>

            <a href="product-details.html?id=${p.id}" class="d-block w-100 h-100">
              <img src="${p.image}" alt="${p.name}" loading="lazy">
            </a>
          </div>

          <div class="product-brand">${p.brand} &bull; ${p.category}</div>
          <h3 class="product-title">
            <a href="product-details.html?id=${p.id}">${p.name}</a>
          </h3>

          <div class="product-rating">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <span class="fw-bold text-dark">${p.rating}</span>
            <span class="rating-count">(${p.reviewCount})</span>
          </div>

          <div class="product-price-row">
            <span class="current-price">$${p.price.toLocaleString()}</span>
            ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toLocaleString()}</span>` : ''}
            ${p.discountPercentage ? `<span class="discount-chip">-${p.discountPercentage}%</span>` : ''}
          </div>

          <button class="btn btn-card-cart mt-auto" onclick="GadgetGalaxy.addToCart('${p.id}')">
            <i class="bi bi-bag-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Quick View Modal
  // -------------------------------------------------------------
  openQuickView(productId) {
    const p = GadgetData.getById(productId);
    if (!p) return;

    let modalEl = document.getElementById('galaxyQuickViewModal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'galaxyQuickViewModal';
      modalEl.className = 'modal fade';
      modalEl.tabIndex = -1;
      modalEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(modalEl);
    }

    const colorsHtml = (p.colors || []).map((c, i) => `
      <button type="button" class="color-swatch-btn ${i === 0 ? 'active' : ''}" 
        style="background-color: ${c.hex}" title="${c.name}" data-color-name="${c.name}"
        onclick="this.parentElement.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');">
      </button>
    `).join('');

    const storageHtml = (p.storageOptions || []).map((s, i) => `
      <button type="button" class="storage-option-btn ${i === 0 ? 'active' : ''}" data-storage="${s}"
        onclick="this.parentElement.querySelectorAll('.storage-option-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');">
        ${s}
      </button>
    `).join('');

    modalEl.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 pb-0 pe-4 pt-3">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 pt-0">
            <div class="row g-4 align-items-center">
              <div class="col-md-6">
                <div class="p-3 bg-light rounded-4 text-center">
                  <img src="${p.image}" id="qvProductImage" alt="${p.name}" class="img-fluid rounded-3" style="max-height: 320px; object-fit: contain;">
                </div>
              </div>
              <div class="col-md-6">
                <span class="badge bg-primary-subtle text-primary fw-bold text-uppercase mb-2">${p.brand}</span>
                <h3 class="fw-bold mb-2 text-midnight">${p.name}</h3>
                
                <div class="d-flex align-items-center gap-2 mb-3">
                  <div class="stars text-warning small">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <span class="fw-bold small">${p.rating}</span>
                  <span class="text-muted small">(${p.reviewCount} customer reviews)</span>
                </div>

                <div class="d-flex align-items-baseline gap-2 mb-3">
                  <span class="fs-3 fw-bold text-dark font-heading">$${p.price.toLocaleString()}</span>
                  ${p.originalPrice ? `<span class="text-muted text-decoration-line-through">$${p.originalPrice.toLocaleString()}</span>` : ''}
                  ${p.discountPercentage ? `<span class="badge bg-success-subtle text-success">Save ${p.discountPercentage}%</span>` : ''}
                </div>

                <p class="text-secondary small mb-3">${p.shortDescription}</p>

                ${colorsHtml ? `
                  <div class="mb-3">
                    <div class="small fw-bold text-dark mb-2">Color Variant:</div>
                    <div class="variant-swatch-group" id="qvColors">${colorsHtml}</div>
                  </div>
                ` : ''}

                ${storageHtml ? `
                  <div class="mb-3">
                    <div class="small fw-bold text-dark mb-2">Storage / Configuration:</div>
                    <div class="d-flex flex-wrap gap-2" id="qvStorage">${storageHtml}</div>
                  </div>
                ` : ''}

                <div class="d-flex align-items-center gap-3 pt-2">
                  <div class="quantity-stepper">
                    <button type="button" onclick="const i = this.nextElementSibling; if(i.value > 1) i.value--;">-</button>
                    <input type="text" id="qvQuantity" value="1" readonly>
                    <button type="button" onclick="const i = this.previousElementSibling; i.value++;">+</button>
                  </div>
                  <button type="button" class="btn btn-primary-galaxy flex-grow-1" id="qvAddToCartBtn">
                    <i class="bi bi-bag-plus"></i> Add to Cart
                  </button>
                </div>

                <div class="mt-3 text-center">
                  <a href="product-details.html?id=${p.id}" class="small text-primary text-decoration-none fw-semibold">
                    View Full Specifications & Gallery <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    // Attach Add to Cart listener
    document.getElementById('qvAddToCartBtn').onclick = () => {
      const activeColor = modalEl.querySelector('#qvColors .color-swatch-btn.active');
      const activeStorage = modalEl.querySelector('#qvStorage .storage-option-btn.active');
      const qty = parseInt(document.getElementById('qvQuantity').value) || 1;

      const colorVal = activeColor ? activeColor.getAttribute('data-color-name') : null;
      const storageVal = activeStorage ? activeStorage.getAttribute('data-storage') : null;

      this.addToCart(p.id, qty, colorVal, storageVal);
      bsModal.hide();
    };
  },

  // -------------------------------------------------------------
  // Live Global Search Bar
  // -------------------------------------------------------------
  setupGlobalSearch() {
    const searchInputs = document.querySelectorAll('.nav-search-input');
    searchInputs.forEach(input => {
      const container = input.closest('.nav-search-wrapper');
      if (!container) return;

      let dropdown = container.querySelector('.search-results-dropdown');
      if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        container.appendChild(dropdown);
      }

      input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          dropdown.classList.remove('show');
          dropdown.innerHTML = '';
          return;
        }

        const results = GadgetData.getAll().filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
        ).slice(0, 5);

        if (results.length === 0) {
          dropdown.innerHTML = `
            <div class="p-3 text-center text-muted small">
              No gadgets found for "<strong>${e.target.value}</strong>".
            </div>
          `;
        } else {
          dropdown.innerHTML = results.map(p => `
            <a href="product-details.html?id=${p.id}" class="search-result-item">
              <img src="${p.image}" class="search-result-img" alt="${p.name}">
              <div class="flex-grow-1 overflow-hidden">
                <div class="fw-semibold text-truncate small">${p.name}</div>
                <div class="text-muted" style="font-size: 0.72rem;">${p.brand} &bull; ${p.category}</div>
              </div>
              <span class="fw-bold small text-primary">$${p.price}</span>
            </a>
          `).join('') + `
            <div class="p-2 text-center bg-light border-top">
              <a href="shop.html?search=${encodeURIComponent(query)}" class="small fw-semibold text-primary">
                View all results (${results.length}+) <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          `;
        }
        dropdown.classList.add('show');
      });

      // Submit search on Enter
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = input.value.trim();
          if (query) {
            window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
          }
        }
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    });
  },

  // -------------------------------------------------------------
  // Newsletter Form Handler
  // -------------------------------------------------------------
  setupNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value || !input.checkValidity()) {
          this.showToast('Please enter a valid email address.', 'danger', 'bi-exclamation-circle');
          return;
        }

        this.showToast(`Thank you! <strong>${input.value}</strong> is now subscribed to Gadget Galaxy VIP tech drops.`, 'success', 'bi-check-circle-fill');
        input.value = '';
      });
    });
  },

  // -------------------------------------------------------------
  // Bootstrap & DOM Initialization
  // -------------------------------------------------------------
  init() {
    this.updateCounters();
    this.syncWishlistButtons();
    this.syncCompareButtons();
    this.setupGlobalSearch();
    this.setupNewsletter();

    // Sticky navbar shadow
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.site-navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  GadgetGalaxy.init();
});
