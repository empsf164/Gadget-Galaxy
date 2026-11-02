/**
 * GADGET GALAXY — Support & Contact Page Engine (assets/js/support.js)
 * Manages FAQ live search, FAQ category filter buttons, and contact enquiry form validation.
 */

const SupportPage = {
  init() {
    this.bindFaqSearch();
    this.bindFaqCategoryFilters();
    this.bindContactForm();
  },

  bindFaqSearch() {
    const searchInput = document.getElementById('faqSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.faq-item');

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  },

  bindFaqCategoryFilters() {
    const buttons = document.querySelectorAll('.faq-category-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active', 'btn-primary-galaxy'));
        buttons.forEach(b => b.classList.add('btn-outline-galaxy'));

        btn.classList.add('active', 'btn-primary-galaxy');
        btn.classList.remove('btn-outline-galaxy');

        const cat = btn.getAttribute('data-faq-category');
        const items = document.querySelectorAll('.faq-item');

        items.forEach(item => {
          if (cat === 'all' || item.getAttribute('data-faq-category') === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  },

  bindContactForm() {
    const form = document.getElementById('customerSupportContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        GadgetGalaxy.showToast('Please complete all required fields.', 'danger', 'bi-exclamation-triangle');
        return;
      }

      const name = document.getElementById('supportName').value;
      const ticketId = 'TICK-' + Math.floor(10000 + Math.random() * 90000);

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Dispatching Ticket...';
      }

      setTimeout(() => {
        GadgetGalaxy.showToast(`Thank you <strong>${name}</strong>! Your ticket <strong>#${ticketId}</strong> has been logged with our 24/7 Tech Concierge.`, 'success', 'bi-check-circle-fill');
        form.reset();
        form.classList.remove('was-validated');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i class="bi bi-send-fill ms-1"></i>';
        }
      }, 1000);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  SupportPage.init();
});
