/**
 * GADGET GALAXY — Shop & Categories Page Logic (assets/js/shop.js)
 * Implements multi-attribute filtering (Category, Brand, Price, Rating, Stock, Deals),
 * live search, sorting, active filter chips, URL query sync, and responsive filter drawer.
 */

const ShopPage = {
  state: {
    searchQuery: '',
    selectedCategory: 'all',
    selectedBrands: [],
    minPrice: 0,
    maxPrice: 4000,
    minRating: 0,
    onlyInStock: false,
    filterTag: null, // 'deals', 'new', 'bestsellers', 'featured', 'wishlist'
    sortBy: 'featured',
    viewMode: 'grid' // 'grid' | 'list'
  },

  init() {
    this.parseUrlParams();
    this.populateBrandFilters();
    this.bindEvents();
    this.applyFilters();
  },

  parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('category')) {
      this.state.selectedCategory = params.get('category').toLowerCase();
    }
    if (params.has('filter')) {
      this.state.filterTag = params.get('filter').toLowerCase();
    }
    if (params.has('search')) {
      this.state.searchQuery = params.get('search').toLowerCase();
      const searchBox = document.getElementById('shopSearchInput');
      if (searchBox) searchBox.value = params.get('search');
    }
    if (params.has('sort')) {
      this.state.sortBy = params.get('sort');
    }
  },

  populateBrandFilters() {
    const allProducts = GadgetData.getAll();
    const brands = [...new Set(allProducts.map(p => p.brand))].sort();

    const brandListEl = document.getElementById('brandFilterList');
    const mobileBrandListEl = document.getElementById('mobileBrandFilterList');

    const html = brands.map(brand => {
      const count = allProducts.filter(p => p.brand === brand).length;
      return `
        <li class="filter-list-item">
          <label class="filter-checkbox-label">
            <span>
              <input type="checkbox" value="${brand}" class="brand-filter-checkbox">
              ${brand}
            </span>
            <span class="filter-count">(${count})</span>
          </label>
        </li>
      `;
    }).join('');

    if (brandListEl) brandListEl.innerHTML = html;
    if (mobileBrandListEl) mobileBrandListEl.innerHTML = html;
  },

  bindEvents() {
    // Category radios
    document.querySelectorAll('.category-filter-radio').forEach(radio => {
      if (radio.value === this.state.selectedCategory) radio.checked = true;
      radio.addEventListener('change', (e) => {
        this.state.selectedCategory = e.target.value;
        this.applyFilters();
      });
    });

    // Brand checkboxes
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('brand-filter-checkbox')) {
        const brand = e.target.value;
        if (e.target.checked) {
          if (!this.state.selectedBrands.includes(brand)) this.state.selectedBrands.push(brand);
        } else {
          this.state.selectedBrands = this.state.selectedBrands.filter(b => b !== brand);
        }
        // Mirror to other brand inputs (desktop vs mobile drawer)
        document.querySelectorAll(`.brand-filter-checkbox[value="${brand}"]`).forEach(cb => cb.checked = e.target.checked);
        this.applyFilters();
      }
    });

    // Price range slider
    const priceSlider = document.getElementById('priceRangeSlider');
    const priceValDisplay = document.getElementById('priceValueDisplay');
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        this.state.maxPrice = parseInt(e.target.value);
        if (priceValDisplay) priceValDisplay.textContent = `$${this.state.maxPrice}`;
        this.applyFilters();
      });
    }

    // Rating filters
    document.querySelectorAll('input[name="ratingFilter"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.state.minRating = parseFloat(e.target.value) || 0;
        this.applyFilters();
      });
    });

    // In Stock filter
    const stockCb = document.getElementById('inStockFilterCb');
    if (stockCb) {
      stockCb.addEventListener('change', (e) => {
        this.state.onlyInStock = e.target.checked;
        this.applyFilters();
      });
    }

    // Sort selector
    const sortSelect = document.getElementById('sortProductsSelect');
    if (sortSelect) {
      sortSelect.value = this.state.sortBy;
      sortSelect.addEventListener('change', (e) => {
        this.state.sortBy = e.target.value;
        this.applyFilters();
      });
    }

    // Shop search input
    const shopSearch = document.getElementById('shopSearchInput');
    if (shopSearch) {
      shopSearch.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value.trim().toLowerCase();
        this.applyFilters();
      });
    }

    // Clear filters button
    document.querySelectorAll('.btn-clear-all-filters').forEach(btn => {
      btn.addEventListener('click', () => {
        this.resetFilters();
      });
    });
  },

  resetFilters() {
    this.state.searchQuery = '';
    this.state.selectedCategory = 'all';
    this.state.selectedBrands = [];
    this.state.minPrice = 0;
    this.state.maxPrice = 4000;
    this.state.minRating = 0;
    this.state.onlyInStock = false;
    this.state.filterTag = null;
    this.state.sortBy = 'featured';

    // Uncheck UI elements
    document.querySelectorAll('.category-filter-radio').forEach(r => r.checked = r.value === 'all');
    document.querySelectorAll('.brand-filter-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="ratingFilter"]').forEach(r => r.checked = r.value === '0');
    
    const stockCb = document.getElementById('inStockFilterCb');
    if (stockCb) stockCb.checked = false;

    const slider = document.getElementById('priceRangeSlider');
    if (slider) slider.value = 4000;

    const priceVal = document.getElementById('priceValueDisplay');
    if (priceVal) priceVal.textContent = '$4000';

    const search = document.getElementById('shopSearchInput');
    if (search) search.value = '';

    const sort = document.getElementById('sortProductsSelect');
    if (sort) sort.value = 'featured';

    this.applyFilters();
  },

  applyFilters() {
    let list = GadgetData.getAll();

    // Filter by Wishlist if requested via ?filter=wishlist
    if (this.state.filterTag === 'wishlist') {
      const savedIds = GadgetGalaxy.getWishlist();
      list = list.filter(p => savedIds.includes(p.id));
    }
    // Filter by Special Tags
    else if (this.state.filterTag === 'deals') {
      list = list.filter(p => p.isDeal);
    } else if (this.state.filterTag === 'new') {
      list = list.filter(p => p.isNewArrival);
    } else if (this.state.filterTag === 'bestsellers') {
      list = list.filter(p => p.isBestSeller);
    } else if (this.state.filterTag === 'featured') {
      list = list.filter(p => p.isFeatured);
    } else if (this.state.filterTag === 'trending') {
      list = list.filter(p => p.badgeType === 'hot' || p.isFeatured);
    }

    // Filter by Category
    if (this.state.selectedCategory && this.state.selectedCategory !== 'all') {
      list = list.filter(p => p.categorySlug.toLowerCase() === this.state.selectedCategory.toLowerCase());
    }

    // Filter by Brand
    if (this.state.selectedBrands.length > 0) {
      list = list.filter(p => this.state.selectedBrands.includes(p.brand));
    }

    // Filter by Price
    list = list.filter(p => p.price <= this.state.maxPrice);

    // Filter by Rating
    if (this.state.minRating > 0) {
      list = list.filter(p => p.rating >= this.state.minRating);
    }

    // Filter by In-Stock
    if (this.state.onlyInStock) {
      list = list.filter(p => (p.stockCount || 0) > 0);
    }

    // Filter by Search Query
    if (this.state.searchQuery) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(this.state.searchQuery) ||
        p.brand.toLowerCase().includes(this.state.searchQuery) ||
        p.category.toLowerCase().includes(this.state.searchQuery) ||
        p.shortDescription.toLowerCase().includes(this.state.searchQuery)
      );
    }

    // Sorting
    switch (this.state.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'featured':
      default:
        list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    this.renderActiveFilterChips();
    this.renderProductGrid(list);
  },

  renderActiveFilterChips() {
    const container = document.getElementById('activeFilterChipsContainer');
    if (!container) return;

    let chips = [];

    if (this.state.filterTag) {
      chips.push({
        label: `Tag: ${this.state.filterTag.toUpperCase()}`,
        remove: () => { this.state.filterTag = null; this.applyFilters(); }
      });
    }

    if (this.state.selectedCategory && this.state.selectedCategory !== 'all') {
      chips.push({
        label: `Category: ${this.state.selectedCategory}`,
        remove: () => {
          this.state.selectedCategory = 'all';
          document.querySelectorAll('.category-filter-radio').forEach(r => r.checked = r.value === 'all');
          this.applyFilters();
        }
      });
    }

    this.state.selectedBrands.forEach(brand => {
      chips.push({
        label: `Brand: ${brand}`,
        remove: () => {
          this.state.selectedBrands = this.state.selectedBrands.filter(b => b !== brand);
          document.querySelectorAll(`.brand-filter-checkbox[value="${brand}"]`).forEach(cb => cb.checked = false);
          this.applyFilters();
        }
      });
    });

    if (this.state.maxPrice < 4000) {
      chips.push({
        label: `Under $${this.state.maxPrice}`,
        remove: () => {
          this.state.maxPrice = 4000;
          const slider = document.getElementById('priceRangeSlider');
          if (slider) slider.value = 4000;
          const priceVal = document.getElementById('priceValueDisplay');
          if (priceVal) priceVal.textContent = '$4000';
          this.applyFilters();
        }
      });
    }

    if (this.state.minRating > 0) {
      chips.push({
        label: `${this.state.minRating}★ & Up`,
        remove: () => {
          this.state.minRating = 0;
          document.querySelectorAll('input[name="ratingFilter"]').forEach(r => r.checked = r.value === '0');
          this.applyFilters();
        }
      });
    }

    if (this.state.onlyInStock) {
      chips.push({
        label: `In Stock Only`,
        remove: () => {
          this.state.onlyInStock = false;
          const stockCb = document.getElementById('inStockFilterCb');
          if (stockCb) stockCb.checked = false;
          this.applyFilters();
        }
      });
    }

    if (this.state.searchQuery) {
      chips.push({
        label: `Search: "${this.state.searchQuery}"`,
        remove: () => {
          this.state.searchQuery = '';
          const search = document.getElementById('shopSearchInput');
          if (search) search.value = '';
          this.applyFilters();
        }
      });
    }

    if (chips.length === 0) {
      container.innerHTML = '';
      container.style.display = 'none';
      return;
    }

    container.style.display = 'flex';
    container.innerHTML = `
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
        <span class="small fw-bold text-muted me-1">Active Filters:</span>
        ${chips.map((c, i) => `
          <span class="active-filter-chip">
            ${c.label}
            <button type="button" data-chip-index="${i}">&times;</button>
          </span>
        `).join('')}
        <button type="button" class="btn btn-sm btn-link text-danger p-0 text-decoration-none small ms-2 btn-clear-all-filters">
          Clear All
        </button>
      </div>
    `;

    // Attach chip remove listeners
    container.querySelectorAll('[data-chip-index]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-chip-index'));
        chips[index].remove();
      });
    });

    container.querySelector('.btn-clear-all-filters')?.addEventListener('click', () => {
      this.resetFilters();
    });
  },

  renderProductGrid(products) {
    const gridEl = document.getElementById('shopProductsGrid');
    const countEl = document.getElementById('productsCountDisplay');
    if (!gridEl) return;

    if (countEl) {
      countEl.textContent = `Showing ${products.length} product${products.length === 1 ? '' : 's'}`;
    }

    if (products.length === 0) {
      gridEl.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="mb-3 text-muted display-4"><i class="bi bi-funnel"></i></div>
          <h4 class="fw-bold text-midnight">No matching gadgets found</h4>
          <p class="text-secondary small max-w-500 mx-auto mb-4">
            Try loosening your filters, adjusting the price slider, or searching for broader terms like "phone", "macbook", or "headphone".
          </p>
          <button class="btn btn-primary-galaxy btn-clear-all-filters">
            Reset All Filters
          </button>
        </div>
      `;
      gridEl.querySelector('.btn-clear-all-filters')?.addEventListener('click', () => this.resetFilters());
      return;
    }

    gridEl.innerHTML = products.map(p => GadgetGalaxy.renderProductCard(p)).join('');

    // Sync button states
    GadgetGalaxy.syncWishlistButtons();
    GadgetGalaxy.syncCompareButtons();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ShopPage.init();
});
