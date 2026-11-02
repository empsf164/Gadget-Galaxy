/**
 * GADGET GALAXY — Product Details Engine (assets/js/product-details.js)
 * Reads ?id=... from URL, populates gallery, color & storage variants,
 * technical specs table, reviews, stock, quantity stepper, Buy Now, and related products.
 */

const ProductDetailsPage = {
  currentProduct: null,
  selectedColor: null,
  selectedStorage: null,

  init() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 'gg-phone-01'; // Default to flagship if unspecified
    this.currentProduct = GadgetData.getById(productId) || GadgetData.getAll()[0];

    // Set default variants
    if (this.currentProduct.colors && this.currentProduct.colors.length > 0) {
      this.selectedColor = this.currentProduct.colors[0].name;
    }
    if (this.currentProduct.storageOptions && this.currentProduct.storageOptions.length > 0) {
      this.selectedStorage = this.currentProduct.storageOptions[0];
    }

    this.renderProductData();
    this.bindEvents();
    this.renderRelatedProducts();
  },

  renderProductData() {
    const p = this.currentProduct;
    if (!p) return;

    // Page title
    document.title = `${p.name} — GADGET GALAXY`;

    // Breadcrumbs
    const bcCat = document.getElementById('bcCategory');
    if (bcCat) {
      bcCat.textContent = p.category;
      bcCat.href = `shop.html?category=${p.categorySlug}`;
    }
    const bcName = document.getElementById('bcProductName');
    if (bcName) bcName.textContent = p.name;

    // Header info
    document.getElementById('productBrand').textContent = p.brand;
    document.getElementById('productTitle').textContent = p.name;
    document.getElementById('productCategoryTag').textContent = p.category;

    // Badges
    const badgeEl = document.getElementById('productBadgeContainer');
    if (badgeEl) {
      badgeEl.innerHTML = p.badge ? `<span class="product-badge ${p.badgeType || 'hot'} position-static me-2">${p.badge}</span>` : '';
    }

    // Ratings
    document.getElementById('ratingScore').textContent = p.rating;
    document.getElementById('reviewsCountText').textContent = `(${p.reviewCount} customer reviews)`;

    // Prices
    document.getElementById('currentPrice').textContent = `$${p.price.toLocaleString()}`;
    const origPriceEl = document.getElementById('originalPrice');
    const discountEl = document.getElementById('discountBadge');

    if (p.originalPrice && p.originalPrice > p.price) {
      origPriceEl.textContent = `$${p.originalPrice.toLocaleString()}`;
      origPriceEl.style.display = 'inline';
      if (discountEl && p.discountPercentage) {
        discountEl.textContent = `Save ${p.discountPercentage}%`;
        discountEl.style.display = 'inline-block';
      }
    } else {
      if (origPriceEl) origPriceEl.style.display = 'none';
      if (discountEl) discountEl.style.display = 'none';
    }

    // Short Description
    document.getElementById('shortDescription').textContent = p.shortDescription;

    // Stock Status
    const stockEl = document.getElementById('stockStatusText');
    if (stockEl) {
      stockEl.textContent = p.stockStatus;
      stockEl.className = (p.stockCount && p.stockCount > 0) ? 'text-success fw-bold' : 'text-danger fw-bold';
    }

    // Key highlights bullets
    const bulletsEl = document.getElementById('keyFeaturesList');
    if (bulletsEl && p.keyFeatures) {
      bulletsEl.innerHTML = p.keyFeatures.map(f => `
        <li class="mb-2 d-flex align-items-start gap-2">
          <i class="bi bi-check2-circle text-primary fs-5 mt-n1"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    // Gallery Render
    const mainImg = document.getElementById('mainGalleryImage');
    if (mainImg) {
      mainImg.src = p.gallery && p.gallery.length > 0 ? p.gallery[0] : p.image;
      mainImg.alt = p.name;
    }

    const thumbsContainer = document.getElementById('galleryThumbsRow');
    if (thumbsContainer && p.gallery) {
      thumbsContainer.innerHTML = p.gallery.map((imgUrl, i) => `
        <div class="gallery-thumb-item ${i === 0 ? 'active' : ''}" data-img-src="${imgUrl}">
          <img src="${imgUrl}" alt="${p.name} view ${i+1}">
        </div>
      `).join('');

      thumbsContainer.querySelectorAll('.gallery-thumb-item').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          thumbsContainer.querySelectorAll('.gallery-thumb-item').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const newSrc = thumb.getAttribute('data-img-src');
          if (mainImg) {
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
              mainImg.src = newSrc;
              mainImg.style.opacity = '1';
            }, 150);
          }
        });
      });
    }

    // Color Swatches
    const colorsContainer = document.getElementById('colorSwatchesRow');
    const colorLabel = document.getElementById('selectedColorLabel');
    if (colorsContainer && p.colors) {
      if (colorLabel) colorLabel.textContent = this.selectedColor;
      colorsContainer.innerHTML = p.colors.map((c, i) => `
        <button type="button" class="color-swatch-btn ${i === 0 ? 'active' : ''}" 
                style="background-color: ${c.hex}" 
                data-color-name="${c.name}"
                title="${c.name}"></button>
      `).join('');

      colorsContainer.querySelectorAll('.color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          colorsContainer.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedColor = btn.getAttribute('data-color-name');
          if (colorLabel) colorLabel.textContent = this.selectedColor;
        });
      });
    }

    // Storage Options
    const storageContainer = document.getElementById('storageOptionsRow');
    const storageLabel = document.getElementById('selectedStorageLabel');
    if (storageContainer && p.storageOptions) {
      if (storageLabel) storageLabel.textContent = this.selectedStorage;
      storageContainer.innerHTML = p.storageOptions.map((opt, i) => `
        <button type="button" class="storage-option-btn ${i === 0 ? 'active' : ''}" data-storage="${opt}">
          ${opt}
        </button>
      `).join('');

      storageContainer.querySelectorAll('.storage-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          storageContainer.querySelectorAll('.storage-option-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedStorage = btn.getAttribute('data-storage');
          if (storageLabel) storageLabel.textContent = this.selectedStorage;
        });
      });
    }

    // Specifications Table
    const specsTableBody = document.getElementById('specsTableBody');
    if (specsTableBody && p.specs) {
      const rows = Object.entries(p.specs).filter(([key, val]) => val && val !== 'N/A');
      specsTableBody.innerHTML = rows.map(([label, val]) => `
        <tr>
          <th>${label}</th>
          <td>${val}</td>
        </tr>
      `).join('');
    }

    // Reviews List
    const reviewsList = document.getElementById('customerReviewsList');
    if (reviewsList && p.reviews) {
      reviewsList.innerHTML = p.reviews.map(r => `
        <div class="border-bottom pb-4 mb-4">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <div class="fw-bold text-dark">${r.author}</div>
              <div class="text-warning small">
                ${'<i class="bi bi-star-fill"></i>'.repeat(r.rating)}
              </div>
            </div>
            <span class="text-muted small">${r.date}</span>
          </div>
          <h6 class="fw-bold text-midnight mb-1">${r.title}</h6>
          <p class="text-secondary small mb-0">${r.text}</p>
        </div>
      `).join('');
    }

    // Update Wishlist & Compare Active state for this product
    this.syncProductDetailsActions();
  },

  syncProductDetailsActions() {
    const p = this.currentProduct;
    if (!p) return;

    const wishlistBtn = document.getElementById('pdpWishlistBtn');
    if (wishlistBtn) {
      const isSaved = GadgetGalaxy.isInWishlist(p.id);
      wishlistBtn.innerHTML = isSaved 
        ? '<i class="bi bi-heart-fill text-danger me-2"></i> Saved to Wishlist' 
        : '<i class="bi bi-heart me-2"></i> Add to Wishlist';
      wishlistBtn.classList.toggle('btn-outline-danger', isSaved);
      wishlistBtn.classList.toggle('btn-outline-galaxy', !isSaved);
    }

    const compareBtn = document.getElementById('pdpCompareBtn');
    if (compareBtn) {
      const isComparing = GadgetGalaxy.isInCompare(p.id);
      compareBtn.innerHTML = isComparing 
        ? '<i class="bi bi-check-circle-fill text-success me-2"></i> In Comparison' 
        : '<i class="bi bi-arrow-left-right me-2"></i> Add to Compare';
      compareBtn.classList.toggle('btn-outline-success', isComparing);
      compareBtn.classList.toggle('btn-outline-galaxy', !isComparing);
    }
  },

  bindEvents() {
    const p = this.currentProduct;
    if (!p) return;

    // Quantity buttons
    const qtyInput = document.getElementById('pdpQuantityInput');
    document.getElementById('pdpQtyMinus')?.addEventListener('click', () => {
      if (qtyInput && parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
      }
    });
    document.getElementById('pdpQtyPlus')?.addEventListener('click', () => {
      if (qtyInput) {
        qtyInput.value = parseInt(qtyInput.value) + 1;
      }
    });

    // Add to Cart
    document.getElementById('pdpAddToCartBtn')?.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value) || 1;
      GadgetGalaxy.addToCart(p.id, qty, this.selectedColor, this.selectedStorage);
    });

    // Buy Now
    document.getElementById('pdpBuyNowBtn')?.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value) || 1;
      GadgetGalaxy.addToCart(p.id, qty, this.selectedColor, this.selectedStorage);
      window.location.href = 'checkout.html';
    });

    // Wishlist toggle
    document.getElementById('pdpWishlistBtn')?.addEventListener('click', () => {
      GadgetGalaxy.toggleWishlist(p.id);
      this.syncProductDetailsActions();
    });

    // Compare toggle
    document.getElementById('pdpCompareBtn')?.addEventListener('click', () => {
      GadgetGalaxy.toggleCompare(p.id);
      this.syncProductDetailsActions();
    });

    // Write a review form demo submit
    const reviewForm = document.getElementById('writeReviewForm');
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('reviewAuthorName').value;
        const title = document.getElementById('reviewHeadline').value;
        const text = document.getElementById('reviewComments').value;
        const rating = parseInt(document.getElementById('reviewStarSelect').value);

        if (!p.reviews) p.reviews = [];
        p.reviews.unshift({
          author: author,
          rating: rating,
          date: 'Just Now',
          title: title,
          text: text
        });

        p.reviewCount = (p.reviewCount || 0) + 1;
        this.renderProductData();

        bootstrap.Modal.getInstance(document.getElementById('writeReviewModal'))?.hide();
        GadgetGalaxy.showToast(`Thank you <strong>${author}</strong>! Your review has been published.`, 'success', 'bi-star-fill');
        reviewForm.reset();
      });
    }
  },

  renderRelatedProducts() {
    const p = this.currentProduct;
    const container = document.getElementById('relatedProductsGrid');
    if (!container || !p) return;

    // Get products from same category or others excluding current
    let related = GadgetData.getByCategory(p.categorySlug).filter(item => item.id !== p.id);
    if (related.length < 4) {
      const others = GadgetData.getAll().filter(item => item.id !== p.id && !related.includes(item));
      related = related.concat(others).slice(0, 4);
    } else {
      related = related.slice(0, 4);
    }

    container.innerHTML = related.map(item => GadgetGalaxy.renderProductCard(item)).join('');
    GadgetGalaxy.syncWishlistButtons();
    GadgetGalaxy.syncCompareButtons();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ProductDetailsPage.init();
});
