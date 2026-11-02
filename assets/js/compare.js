/**
 * GADGET GALAXY — Dynamic Product Comparison Matrix (assets/js/compare.js)
 * Loads selected products from localStorage (gadgetGalaxy_compare),
 * renders side-by-side spec comparison table, difference highlights toggle,
 * remove device controls, quick add selector, and Add to Cart actions.
 */

const ComparePage = {
  highlightDifferences: false,

  init() {
    this.renderComparisonTable();
    this.populateAddProductDropdown();
    this.bindEvents();

    // Listen to global compare updates
    window.addEventListener('compareUpdated', () => {
      this.renderComparisonTable();
      this.populateAddProductDropdown();
    });
  },

  getComparedProducts() {
    let ids = GadgetGalaxy.getCompareList();
    
    // If empty on first visit, seed with 2 flagship devices so the user immediately sees the experience
    if (ids.length === 0) {
      ids = ['gg-phone-01', 'gg-phone-02'];
      localStorage.setItem('gadgetGalaxy_compare', JSON.stringify(ids));
      GadgetGalaxy.updateCounters();
    }

    return ids.map(id => GadgetData.getById(id)).filter(Boolean);
  },

  populateAddProductDropdown() {
    const selectEl = document.getElementById('quickAddCompareSelect');
    if (!selectEl) return;

    const currentIds = GadgetGalaxy.getCompareList();
    const allProducts = GadgetData.getAll();

    selectEl.innerHTML = '<option value="">+ Choose a gadget to add to comparison...</option>' + 
      allProducts.map(p => {
        const isAdded = currentIds.includes(p.id);
        return `<option value="${p.id}" ${isAdded ? 'disabled' : ''}>
          ${p.name} (${p.brand} - $${p.price}) ${isAdded ? '[Already in Compare]' : ''}
        </option>`;
      }).join('');
  },

  bindEvents() {
    // Highlight differences toggle
    const toggleCb = document.getElementById('highlightDiffToggle');
    if (toggleCb) {
      toggleCb.addEventListener('change', (e) => {
        this.highlightDifferences = e.target.checked;
        this.renderComparisonTable();
      });
    }

    // Quick add select
    const selectEl = document.getElementById('quickAddCompareSelect');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          GadgetGalaxy.toggleCompare(val);
          selectEl.value = '';
        }
      });
    }

    // Clear all in comparison
    document.getElementById('clearAllCompareBtn')?.addEventListener('click', () => {
      localStorage.setItem('gadgetGalaxy_compare', JSON.stringify([]));
      GadgetGalaxy.updateCounters();
      this.renderComparisonTable();
      this.populateAddProductDropdown();
      GadgetGalaxy.showToast('Cleared comparison list.', 'info', 'bi-trash3');
    });
  },

  renderComparisonTable() {
    const products = this.getComparedProducts();
    const container = document.getElementById('compareTableWrapper');
    const emptyState = document.getElementById('compareEmptyState');
    const controlsBar = document.getElementById('compareControlsBar');

    if (!container) return;

    if (products.length === 0) {
      container.style.display = 'none';
      if (controlsBar) controlsBar.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (controlsBar) controlsBar.style.display = 'flex';
    container.style.display = 'block';

    // Collect all spec keys present in any of the compared products
    const specKeys = ['Display', 'Processor', 'Memory', 'Storage', 'Camera', 'Battery', 'Connectivity', 'Dimensions'];

    // Header Row: Product Thumb, Name, Price, Actions
    const headerThs = products.map(p => `
      <th style="min-width: 250px; text-align: center; vertical-align: top;" class="bg-white">
        <div class="position-relative p-2">
          <button type="button" class="btn btn-sm btn-outline-danger position-absolute top-0 end-0 rounded-circle p-1" style="width: 28px; height: 28px; line-height: 1;" onclick="ComparePage.removeProduct('${p.id}')" title="Remove from comparison">
            &times;
          </button>
          
          <img src="${p.image}" alt="${p.name}" class="rounded-3 mx-auto mb-2" style="width: 140px; height: 140px; object-fit: contain;">
          <div class="text-uppercase small fw-bold text-muted">${p.brand}</div>
          <h5 class="fw-bold text-midnight mb-2 fs-6">
            <a href="product-details.html?id=${p.id}" class="text-decoration-none text-dark">${p.name}</a>
          </h5>
          <div class="fs-5 fw-bold text-primary font-heading mb-2">$${p.price.toLocaleString()}</div>
          
          <div class="d-flex justify-content-center align-items-center gap-1 text-warning small mb-3">
            <i class="bi bi-star-fill"></i>
            <span class="fw-bold text-dark">${p.rating}</span>
            <span class="text-muted">(${p.reviewCount})</span>
          </div>

          <div class="d-grid gap-2">
            <button type="button" class="btn btn-sm btn-primary-galaxy justify-content-center" onclick="GadgetGalaxy.addToCart('${p.id}')">
              <i class="bi bi-bag-plus"></i> Add to Cart
            </button>
            <a href="product-details.html?id=${p.id}" class="btn btn-sm btn-outline-galaxy justify-content-center">
              View Details
            </a>
          </div>
        </div>
      </th>
    `).join('');

    // Spec Rows
    const specRowsHtml = specKeys.map(key => {
      // Check if values are different across devices
      const values = products.map(p => (p.specs && p.specs[key]) ? p.specs[key] : '—');
      const isDifferent = new Set(values).size > 1;
      const highlightClass = (this.highlightDifferences && isDifferent) ? 'compare-highlight-diff' : '';

      return `
        <tr>
          <td class="compare-feature-label">${key}</td>
          ${values.map(val => `
            <td class="${highlightClass} small text-secondary">${val}</td>
          `).join('')}
        </tr>
      `;
    }).join('');

    // Key Features Row
    const featuresRow = `
      <tr>
        <td class="compare-feature-label">Key Highlights</td>
        ${products.map(p => `
          <td class="small text-secondary align-top">
            <ul class="list-unstyled mb-0">
              ${(p.keyFeatures || []).map(f => `<li class="mb-1"><i class="bi bi-check2 text-primary me-1"></i>${f}</li>`).join('')}
            </ul>
          </td>
        `).join('')}
      </tr>
    `;

    // Stock Status Row
    const stockRow = `
      <tr>
        <td class="compare-feature-label">Stock Availability</td>
        ${products.map(p => `
          <td class="small fw-semibold text-success">${p.stockStatus || 'In Stock'}</td>
        `).join('')}
      </tr>
    `;

    container.innerHTML = `
      <div class="compare-container">
        <table class="table compare-table">
          <thead>
            <tr>
              <th class="compare-feature-label align-middle bg-light">
                <span class="fs-6 fw-bold">Comparing ${products.length} Gadget${products.length > 1 ? 's' : ''}</span>
              </th>
              ${headerThs}
            </tr>
          </thead>
          <tbody>
            ${specRowsHtml}
            ${featuresRow}
            ${stockRow}
          </tbody>
        </table>
      </div>
    `;
  },

  removeProduct(productId) {
    GadgetGalaxy.toggleCompare(productId);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ComparePage.init();
});
