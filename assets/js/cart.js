/**
 * GADGET GALAXY — Shopping Cart Logic (assets/js/cart.js)
 * Manages cart rendering, quantity updates, item removal, move-to-wishlist,
 * promo voucher calculation (GALAXY10, FREESHIP), shipping rules, and total.
 */

const CartPage = {
  appliedPromo: null,

  init() {
    this.loadSavedPromo();
    this.renderCart();
    this.bindEvents();

    window.addEventListener('cartUpdated', () => {
      this.renderCart();
    });
  },

  loadSavedPromo() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROMO);
      if (saved) this.appliedPromo = JSON.parse(saved);
    } catch (e) {
      this.appliedPromo = null;
    }
  },

  bindEvents() {
    // Promo code apply form
    const promoForm = document.getElementById('cartPromoForm');
    if (promoForm) {
      promoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('promoCodeInput');
        const code = input ? input.value.trim().toUpperCase() : '';

        if (!code) return;

        if (code === 'GALAXY10') {
          this.appliedPromo = { code: 'GALAXY10', discountPercent: 10, freeShipping: false };
          localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(this.appliedPromo));
          GadgetGalaxy.showToast('Promo code <strong>GALAXY10</strong> applied! 10% discount deducted.', 'success', 'bi-tag-fill');
        } else if (code === 'FREESHIP') {
          this.appliedPromo = { code: 'FREESHIP', discountPercent: 0, freeShipping: true };
          localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(this.appliedPromo));
          GadgetGalaxy.showToast('Promo code <strong>FREESHIP</strong> applied! Free shipping activated.', 'success', 'bi-truck');
        } else {
          GadgetGalaxy.showToast(`Coupon code "<strong>${code}</strong>" is invalid or expired. Try demo code <strong>GALAXY10</strong>.`, 'danger', 'bi-exclamation-circle');
          return;
        }

        if (input) input.value = '';
        this.renderCart();
      });
    }

    // Remove promo code
    document.addEventListener('click', (e) => {
      if (e.target.id === 'removePromoBtn' || e.target.closest('#removePromoBtn')) {
        this.appliedPromo = null;
        localStorage.removeItem(STORAGE_KEYS.PROMO);
        GadgetGalaxy.showToast('Promo code removed.', 'info', 'bi-x-circle');
        this.renderCart();
      }
    });

    // Clear entire cart
    document.getElementById('clearCartBtn')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to empty your shopping cart?')) {
        GadgetGalaxy.clearCart();
        this.appliedPromo = null;
        localStorage.removeItem(STORAGE_KEYS.PROMO);
        this.renderCart();
      }
    });
  },

  renderCart() {
    const cart = GadgetGalaxy.getCart();
    const itemsListEl = document.getElementById('cartItemsList');
    const emptyStateEl = document.getElementById('cartEmptyState');
    const layoutEl = document.getElementById('cartMainLayout');
    const totalCountEl = document.getElementById('cartTotalItemsCount');

    if (!itemsListEl) return;

    if (totalCountEl) totalCountEl.textContent = GadgetGalaxy.getCartCount();

    if (cart.length === 0) {
      if (layoutEl) layoutEl.style.display = 'none';
      if (emptyStateEl) emptyStateEl.style.display = 'block';
      return;
    }

    if (emptyStateEl) emptyStateEl.style.display = 'none';
    if (layoutEl) layoutEl.style.display = 'flex';

    // Render items
    itemsListEl.innerHTML = cart.map((item, index) => {
      const lineTotal = item.price * item.quantity;
      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          
          <div class="flex-grow-1 overflow-hidden">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <div>
                <span class="small text-muted text-uppercase fw-bold">${item.brand || 'Gadget'}</span>
                <h5 class="fw-bold mb-0 fs-6">
                  <a href="product-details.html?id=${item.id}" class="text-dark text-decoration-none">${item.name}</a>
                </h5>
              </div>
              <div class="text-end ps-3">
                <div class="fw-bold font-heading fs-6 text-midnight">$${lineTotal.toLocaleString()}</div>
                <div class="text-muted small" style="font-size: 0.75rem;">$${item.price.toLocaleString()} each</div>
              </div>
            </div>

            <div class="small text-secondary mb-2">
              ${item.color ? `<span class="me-2"><strong class="text-dark">Color:</strong> ${item.color}</span>` : ''}
              ${item.storage ? `<span><strong class="text-dark">Spec:</strong> ${item.storage}</span>` : ''}
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 pt-1">
              <!-- Quantity Stepper -->
              <div class="quantity-stepper" style="transform: scale(0.9); transform-origin: left center;">
                <button type="button" onclick="CartPage.changeQuantity(${index}, ${item.quantity - 1})">-</button>
                <input type="text" value="${item.quantity}" readonly>
                <button type="button" onclick="CartPage.changeQuantity(${index}, ${item.quantity + 1})">+</button>
              </div>

              <!-- Item Actions -->
              <div class="d-flex align-items-center gap-3">
                <button type="button" class="btn btn-sm btn-link text-secondary text-decoration-none p-0 small" onclick="CartPage.moveToWishlist(${index}, '${item.id}')">
                  <i class="bi bi-heart me-1"></i> Save to Wishlist
                </button>
                <button type="button" class="btn btn-sm btn-link text-danger text-decoration-none p-0 small" onclick="GadgetGalaxy.removeFromCart(${index})">
                  <i class="bi bi-trash3 me-1"></i> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Calculate Summary Values
    const subtotal = GadgetGalaxy.getCartSubtotal();
    let shipping = subtotal > 100 ? 0 : 15;
    let discount = 0;

    if (this.appliedPromo) {
      if (this.appliedPromo.discountPercent > 0) {
        discount = Math.round((subtotal * this.appliedPromo.discountPercent) / 100);
      }
      if (this.appliedPromo.freeShipping) {
        shipping = 0;
      }
    }

    const estimatedTax = Math.round((subtotal - discount) * 0.07); // 7% sample tax
    const grandTotal = Math.max(0, subtotal - discount + shipping + estimatedTax);

    // Update Summary Elements in DOM
    document.getElementById('summarySubtotal').textContent = `$${subtotal.toLocaleString()}`;
    
    const shippingEl = document.getElementById('summaryShipping');
    if (shippingEl) {
      shippingEl.innerHTML = shipping === 0 
        ? '<span class="text-success fw-bold">FREE</span>' 
        : `$${shipping.toLocaleString()}`;
    }

    const discountRow = document.getElementById('summaryDiscountRow');
    if (discountRow) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('summaryDiscountAmount').textContent = `-$${discount.toLocaleString()}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    const appliedPromoChip = document.getElementById('appliedPromoChip');
    if (appliedPromoChip) {
      if (this.appliedPromo) {
        appliedPromoChip.style.display = 'flex';
        appliedPromoChip.innerHTML = `
          <span><i class="bi bi-tag-fill me-1"></i> Applied: <strong>${this.appliedPromo.code}</strong></span>
          <button type="button" id="removePromoBtn" class="btn-close ms-2" style="font-size: 0.65rem;" title="Remove code"></button>
        `;
      } else {
        appliedPromoChip.style.display = 'none';
      }
    }

    document.getElementById('summaryTax').textContent = `$${estimatedTax.toLocaleString()}`;
    document.getElementById('summaryGrandTotal').textContent = `$${grandTotal.toLocaleString()}`;
  },

  changeQuantity(index, newQty) {
    GadgetGalaxy.updateCartQuantity(index, newQty);
    this.renderCart();
  },

  moveToWishlist(index, productId) {
    if (!GadgetGalaxy.isInWishlist(productId)) {
      GadgetGalaxy.toggleWishlist(productId);
    }
    GadgetGalaxy.removeFromCart(index);
    this.renderCart();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CartPage.init();
});
