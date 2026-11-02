/**
 * GADGET GALAXY — Checkout Flow & Simulated Order Processing (assets/js/checkout.js)
 * Handles customer & delivery address validation, shipping methods,
 * payment tab switches, demo order confirmation with generated receipt, and cart clearing.
 */

const CheckoutPage = {
  appliedPromo: null,
  selectedShippingCost: 0,
  shippingMethodName: 'Standard Insured Delivery',

  init() {
    this.loadCartData();
    this.loadSavedPromo();
    this.renderOrderSummary();
    this.bindEvents();
  },

  loadCartData() {
    const cart = GadgetGalaxy.getCart();
    if (cart.length === 0) {
      // If user navigated directly with empty cart, seed a flagship device for seamless demo testing
      GadgetGalaxy.addToCart('gg-phone-01', 1);
    }
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
    // Shipping method radio changes
    document.querySelectorAll('input[name="shippingMethod"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.selectedShippingCost = parseFloat(e.target.value) || 0;
        this.shippingMethodName = e.target.getAttribute('data-name') || 'Standard Shipping';
        this.renderOrderSummary();
      });
    });

    // Payment method tabs
    document.querySelectorAll('.payment-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.payment-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target-pane');
        document.querySelectorAll('.payment-method-pane').forEach(pane => {
          pane.style.display = pane.id === target ? 'block' : 'none';
        });
      });
    });

    // Checkout form submission
    const form = document.getElementById('checkoutOrderForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          GadgetGalaxy.showToast('Please fill in all required shipping fields.', 'danger', 'bi-exclamation-triangle');
          return;
        }

        this.processDemoOrder();
      });
    }
  },

  renderOrderSummary() {
    const cart = GadgetGalaxy.getCart();
    const container = document.getElementById('checkoutItemsPreview');
    if (!container) return;

    container.innerHTML = cart.map(item => `
      <div class="d-flex align-items-center gap-3 py-2 border-bottom">
        <div class="position-relative">
          <img src="${item.image}" alt="${item.name}" class="rounded-2 border" style="width: 48px; height: 48px; object-fit: cover;">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style="font-size: 0.65rem;">
            ${item.quantity}
          </span>
        </div>
        <div class="flex-grow-1 overflow-hidden">
          <div class="small fw-semibold text-truncate text-dark">${item.name}</div>
          <div class="text-muted" style="font-size: 0.72rem;">${item.color || 'Standard'} &bull; ${item.storage || ''}</div>
        </div>
        <div class="fw-bold small text-midnight">$${(item.price * item.quantity).toLocaleString()}</div>
      </div>
    `).join('');

    const subtotal = GadgetGalaxy.getCartSubtotal();
    let discount = 0;

    if (this.appliedPromo) {
      if (this.appliedPromo.discountPercent > 0) {
        discount = Math.round((subtotal * this.appliedPromo.discountPercent) / 100);
      }
      if (this.appliedPromo.freeShipping) {
        this.selectedShippingCost = 0;
      }
    }

    const shipping = this.selectedShippingCost;
    const tax = Math.round((subtotal - discount) * 0.07);
    const grandTotal = Math.max(0, subtotal - discount + shipping + tax);

    document.getElementById('coSubtotal').textContent = `$${subtotal.toLocaleString()}`;
    
    const discRow = document.getElementById('coDiscountRow');
    if (discRow) {
      if (discount > 0) {
        discRow.style.display = 'flex';
        document.getElementById('coDiscountAmount').textContent = `-$${discount.toLocaleString()} (${this.appliedPromo.code})`;
      } else {
        discRow.style.display = 'none';
      }
    }

    const shippingEl = document.getElementById('coShipping');
    if (shippingEl) {
      shippingEl.innerHTML = shipping === 0 
        ? '<span class="text-success fw-bold">FREE</span>' 
        : `$${shipping.toLocaleString()}`;
    }

    document.getElementById('coTax').textContent = `$${tax.toLocaleString()}`;
    document.getElementById('coGrandTotal').textContent = `$${grandTotal.toLocaleString()}`;
    document.getElementById('payButtonAmount').textContent = `$${grandTotal.toLocaleString()}`;
  },

  processDemoOrder() {
    const orderBtn = document.getElementById('placeOrderSubmitBtn');
    if (orderBtn) {
      orderBtn.disabled = true;
      orderBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Encrypting & Processing...';
    }

    // Simulate safe processing latency
    setTimeout(() => {
      const orderId = 'GG-' + Math.floor(100000 + Math.random() * 900000);
      const customerName = document.getElementById('custFirstName').value + ' ' + document.getElementById('custLastName').value;
      const customerEmail = document.getElementById('custEmail').value;
      const address = document.getElementById('custStreet').value + ', ' + document.getElementById('custCity').value + ', ' + document.getElementById('custState').value + ' ' + document.getElementById('custZip').value;
      const grandTotal = document.getElementById('coGrandTotal').textContent;

      // Populate Success Modal
      document.getElementById('successOrderId').textContent = orderId;
      document.getElementById('successCustomerName').textContent = customerName;
      document.getElementById('successEmail').textContent = customerEmail;
      document.getElementById('successAddress').textContent = address;
      document.getElementById('successTotal').textContent = grandTotal;
      document.getElementById('successShippingMethod').textContent = this.shippingMethodName;

      // Clear Cart from storage
      GadgetGalaxy.clearCart();
      localStorage.removeItem(STORAGE_KEYS.PROMO);

      // Show confirmation modal
      const modalEl = document.getElementById('orderConfirmationModal');
      if (modalEl) {
        const bsModal = new bootstrap.Modal(modalEl, { backdrop: 'static', keyboard: false });
        bsModal.show();
      }

      GadgetGalaxy.showToast(`Order <strong>${orderId}</strong> created successfully!`, 'success', 'bi-check-circle-fill');
    }, 1200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CheckoutPage.init();
});
