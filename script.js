// App State
let currentSection = 'welcome';
let currentFilters = {
    type: '',
    chips: [],
    search: '',
    category: '',
    brand: '',
    availability: ''
};
let filteredProducts = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupFilters();
}

// Navigation Setup
function setupNavigation() {
    // Bikes Navigation
    document.getElementById('bikesNavBtn').addEventListener('click', () => {
        showSection('bikes');
        loadChips(bikesChips);
        currentFilters.type = 'bikes';
        filterAndDisplayProducts();
    });

    // Parts Navigation
    document.getElementById('partsNavBtn').addEventListener('click', () => {
        showSection('parts');
        loadChips(partsChips);
        currentFilters.type = 'parts';
        filterAndDisplayProducts();
    });

    // Accessories Navigation
    document.getElementById('accessoriesNavBtn').addEventListener('click', () => {
        showSection('accessories');
        loadChips(accessoriesChips);
        currentFilters.type = 'accessories';
        filterAndDisplayProducts();
    });

    // Parking Navigation
    document.getElementById('parkingNavBtn').addEventListener('click', () => {
        showSection('parking');
        hideChips();
    });

    // Set active state for nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Show Section
function showSection(section) {
    currentSection = section;

    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Show appropriate screen
    if (section === 'parking') {
        document.getElementById('parkingScreen').classList.add('active');
    } else if (section === 'welcome') {
        document.getElementById('welcomeScreen').classList.add('active');
    } else {
        document.getElementById('productsScreen').classList.add('active');
    }

    window.scrollTo(0, 0);
}

// Load Chips
function loadChips(chipsData) {
    const chipsContainer = document.getElementById('chipsContainer');
    const chipsScroll = document.getElementById('chipsScroll');

    chipsScroll.innerHTML = '';
    currentFilters.chips = [];

    chipsData.forEach(chip => {
        const chipElement = document.createElement('button');
        chipElement.className = 'chip';
        chipElement.textContent = chip.name;
        chipElement.dataset.id = chip.id;
        chipElement.dataset.type = chip.type;

        chipElement.addEventListener('click', () => {
            chipElement.classList.toggle('active');
            toggleChipFilter(chip);
        });

        chipsScroll.appendChild(chipElement);
    });

    chipsContainer.style.display = 'block';
}

// Hide Chips
function hideChips() {
    document.getElementById('chipsContainer').style.display = 'none';
}

// Toggle Chip Filter
function toggleChipFilter(chip) {
    const index = currentFilters.chips.findIndex(c => c.id === chip.id);

    if (index > -1) {
        currentFilters.chips.splice(index, 1);
    } else {
        currentFilters.chips.push(chip);
    }

    filterAndDisplayProducts();
}

// Setup Filters
function setupFilters() {
    // Filters Toggle
    const filtersToggleBtn = document.getElementById('filtersToggleBtn');
    const filtersPanel = document.getElementById('filtersPanel');

    filtersToggleBtn.addEventListener('click', () => {
        const isVisible = filtersPanel.style.display === 'block';
        filtersPanel.style.display = isVisible ? 'none' : 'block';
        filtersToggleBtn.classList.toggle('active');
    });

    // Search Input
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase();
        filterAndDisplayProducts();
    });

    // Type Filter
    document.getElementById('typeFilter').addEventListener('change', (e) => {
        currentFilters.type = e.target.value;
        filterAndDisplayProducts();
    });

    // Category Filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        filterAndDisplayProducts();
    });

    // Brand Filter
    document.getElementById('brandFilter').addEventListener('change', (e) => {
        currentFilters.brand = e.target.value;
        filterAndDisplayProducts();
    });

    // Availability Filter
    document.getElementById('availabilityFilter').addEventListener('change', (e) => {
        currentFilters.availability = e.target.value;
        filterAndDisplayProducts();
    });

    // Reset Filters
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        resetFilters();
    });
}

// Reset Filters
function resetFilters() {
    currentFilters.search = '';
    currentFilters.category = '';
    currentFilters.brand = '';
    currentFilters.availability = '';

    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('brandFilter').value = '';
    document.getElementById('availabilityFilter').value = '';

    // Reset chips
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    currentFilters.chips = [];

    filterAndDisplayProducts();
}

// Filter and Display Products
function filterAndDisplayProducts() {
    filteredProducts = allProducts.filter(product => {
        // Filter by type (from nav or dropdown)
        if (currentFilters.type && product.type !== currentFilters.type) {
            return false;
        }

        // Filter by search
        if (currentFilters.search && !product.name.toLowerCase().includes(currentFilters.search)) {
            return false;
        }

        // Filter by brand
        if (currentFilters.brand && product.brand !== currentFilters.brand) {
            return false;
        }

        // Filter by availability
        if (currentFilters.availability && product.availability !== currentFilters.availability) {
            return false;
        }

        // Filter by chips
        if (currentFilters.chips.length > 0) {
            let matchesChip = false;

            currentFilters.chips.forEach(chip => {
                if (chip.type === 'condition' && product.condition === chip.name) {
                    matchesChip = true;
                }
                if (chip.type === 'bikeType' && product.bikeType === chip.id) {
                    matchesChip = true;
                }
                if (chip.type === 'partsType' && product.partsType === chip.id) {
                    matchesChip = true;
                }
                if (chip.type === 'category' && product.accessoryType === chip.id) {
                    matchesChip = true;
                }
            });

            if (!matchesChip) return false;
        }

        return true;
    });

    displayProducts(filteredProducts);
}

// Display Products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">لا توجد منتجات متاحة حالياً</p>';
        return;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');

    // Different sizes for different product types
    if (product.type === 'bikes') {
        card.className = 'product-card product-card-large';
    } else {
        card.className = 'product-card product-card-small';
    }

    let content = `
        <div class="product-image">${product.icon}</div>
        <div class="product-content">
            <h4 class="product-name">${product.name}</h4>
    `;

    // Add details based on product type
    if (product.type === 'bikes') {
        content += `
            <p class="product-detail">السنة: ${product.year}</p>
            <p class="product-detail">المسافة: ${product.km}</p>
            <span class="product-badge ${product.condition === 'مستعمل' ? 'badge-used' : 'badge-new'}">${product.condition}</span>
        `;
    } else if (product.type === 'parts') {
        content += `
            <p class="product-detail">الحالة: ${product.condition}</p>
        `;
    } else if (product.type === 'accessories') {
        content += `
            <p class="product-detail">الماركة: ${product.brand}</p>
        `;
    }

    content += `
            <div class="product-price">${product.price} ريال</div>
            <button class="contact-btn" onclick="contactSeller('${product.name}')">
                📱 تواصل معنا
            </button>
        </div>
    `;

    card.innerHTML = content;
    return card;
}

// Contact Seller Function
function contactSeller(productName) {
    const message = encodeURIComponent(`مرحباً، أنا مهتم بـ: ${productName}`);
    const whatsappUrl = `https://wa.me/966568663381?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

console.log('✅ Soft99bikes App - Ready!');
