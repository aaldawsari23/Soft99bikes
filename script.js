// Navigation State
let navigationStack = ['home'];
let currentBrand = null;
let currentModel = null;
let currentBikeType = null;
let currentAccessoryCategory = null;
let currentServiceCategory = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupBackButton();
    updateBreadcrumb();
}

// Navigation Functions
function navigateTo(screen, data = null) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Handle different screens
    switch(screen) {
        case 'spareParts':
            loadBrands();
            document.getElementById('sparePartsScreen').classList.add('active');
            navigationStack.push('spareParts');
            break;

        case 'brandModels':
            currentBrand = data;
            loadBrandModels(data);
            document.getElementById('brandModelsScreen').classList.add('active');
            navigationStack.push('brandModels');
            break;

        case 'partsList':
            currentModel = data;
            loadPartsList(data);
            document.getElementById('partsListScreen').classList.add('active');
            navigationStack.push('partsList');
            break;

        case 'marketplace':
            loadBikeTypes();
            document.getElementById('marketplaceScreen').classList.add('active');
            navigationStack.push('marketplace');
            break;

        case 'bikesList':
            currentBikeType = data;
            loadBikesList(data);
            document.getElementById('bikesListScreen').classList.add('active');
            navigationStack.push('bikesList');
            break;

        case 'accessories':
            loadAccessoriesCategories();
            document.getElementById('accessoriesScreen').classList.add('active');
            navigationStack.push('accessories');
            break;

        case 'accessoriesList':
            currentAccessoryCategory = data;
            loadAccessoriesList(data);
            document.getElementById('accessoriesListScreen').classList.add('active');
            navigationStack.push('accessoriesList');
            break;

        case 'services':
            loadServicesCategories();
            document.getElementById('servicesScreen').classList.add('active');
            navigationStack.push('services');
            break;

        case 'servicesList':
            currentServiceCategory = data;
            loadServicesList(data);
            document.getElementById('servicesListScreen').classList.add('active');
            navigationStack.push('servicesList');
            break;
    }

    updateBackButton();
    updateBreadcrumb();
    window.scrollTo(0, 0);
}

function goBack() {
    if (navigationStack.length <= 1) return;

    navigationStack.pop();
    const previousScreen = navigationStack[navigationStack.length - 1];

    // Clear current state
    if (previousScreen === 'spareParts') {
        currentModel = null;
    }
    if (previousScreen === 'brandModels') {
        currentModel = null;
    }

    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Show previous screen
    switch(previousScreen) {
        case 'home':
            document.getElementById('homeScreen').classList.add('active');
            break;
        case 'spareParts':
            document.getElementById('sparePartsScreen').classList.add('active');
            break;
        case 'brandModels':
            document.getElementById('brandModelsScreen').classList.add('active');
            break;
        case 'marketplace':
            document.getElementById('marketplaceScreen').classList.add('active');
            break;
        case 'accessories':
            document.getElementById('accessoriesScreen').classList.add('active');
            break;
        case 'services':
            document.getElementById('servicesScreen').classList.add('active');
            break;
    }

    updateBackButton();
    updateBreadcrumb();
    window.scrollTo(0, 0);
}

function setupBackButton() {
    document.getElementById('backBtn').addEventListener('click', goBack);
}

function updateBackButton() {
    const backBtn = document.getElementById('backBtn');
    if (navigationStack.length > 1) {
        backBtn.style.display = 'flex';
    } else {
        backBtn.style.display = 'none';
    }
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    const paths = {
        home: 'الرئيسية',
        spareParts: 'قطع الغيار',
        brandModels: currentBrand ? brandsData.find(b => b.id === currentBrand).name : '',
        partsList: currentModel ? 'قطع الغيار' : '',
        marketplace: 'بيع وشراء الدراجات',
        bikesList: currentBikeType ? bikeTypes.find(t => t.id === currentBikeType).name : '',
        accessories: 'الإكسسوارات والمعدات',
        accessoriesList: currentAccessoryCategory ? accessoriesCategories.find(c => c.id === currentAccessoryCategory).name : '',
        services: 'الصيانة والخدمات',
        servicesList: currentServiceCategory ? servicesCategories.find(c => c.id === currentServiceCategory).name : ''
    };

    const breadcrumbText = navigationStack.map(screen => paths[screen]).filter(Boolean).join(' > ');
    breadcrumb.textContent = breadcrumbText;
}

// Load Functions
function loadBrands() {
    const brandsGrid = document.getElementById('brandsGrid');
    brandsGrid.innerHTML = '';

    brandsData.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.onclick = () => navigateTo('brandModels', brand.id);
        brandCard.innerHTML = `
            <div class="brand-logo">${brand.logo}</div>
            <h3>${brand.name}</h3>
        `;
        brandsGrid.appendChild(brandCard);
    });
}

function loadBrandModels(brandId) {
    const brand = brandsData.find(b => b.id === brandId);
    document.getElementById('brandModelsTitle').textContent = `${brand.name} - اختر الموديل`;

    const modelsGrid = document.getElementById('modelsGrid');
    modelsGrid.innerHTML = '';

    const models = modelsData[brandId] || [];

    if (models.length === 0) {
        modelsGrid.innerHTML = '<p style="text-align: center; color: #6b7280;">لا توجد موديلات متاحة حالياً</p>';
        return;
    }

    models.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.onclick = () => navigateTo('partsList', model.id);
        modelCard.innerHTML = `
            <div class="model-icon">${model.icon}</div>
            <h4>${model.name}</h4>
            <p>موديل ${model.year}</p>
        `;
        modelsGrid.appendChild(modelCard);
    });
}

function loadPartsList(modelId) {
    const parts = partsData[modelId] || [];

    // Get model name for title
    let modelName = modelId;
    Object.values(modelsData).flat().forEach(model => {
        if (model.id === modelId) {
            modelName = model.name;
        }
    });

    document.getElementById('partsListTitle').textContent = `قطع غيار ${modelName}`;

    const partsGrid = document.getElementById('partsGrid');
    partsGrid.innerHTML = '';

    if (parts.length === 0) {
        // Show sample parts
        const sampleParts = [
            { name: 'محرك كامل', price: '20,000', condition: 'جديد', icon: '⚙️' },
            { name: 'فرامل أمامية', price: '2,500', condition: 'جديد', icon: '🛑' },
            { name: 'إطار أمامي', price: '1,000', condition: 'جديد', icon: '🛞' },
            { name: 'مرايا جانبية', price: '350', condition: 'جديد', icon: '✨' }
        ];

        sampleParts.forEach(part => {
            const partCard = createItemCard(part, 'part');
            partsGrid.appendChild(partCard);
        });
    } else {
        parts.forEach(part => {
            const partCard = createItemCard(part, 'part');
            partsGrid.appendChild(partCard);
        });
    }
}

function loadBikeTypes() {
    const bikeTypesGrid = document.getElementById('bikeTypesGrid');
    bikeTypesGrid.innerHTML = '';

    bikeTypes.forEach(type => {
        const typeCard = document.createElement('div');
        typeCard.className = 'type-card';
        typeCard.onclick = () => navigateTo('bikesList', type.id);
        typeCard.innerHTML = `
            <div class="type-icon">${type.icon}</div>
            <h3>${type.name}</h3>
            <p>${type.description}</p>
        `;
        bikeTypesGrid.appendChild(typeCard);
    });
}

function loadBikesList(typeId) {
    const type = bikeTypes.find(t => t.id === typeId);
    document.getElementById('bikesListTitle').textContent = type.name;

    const bikesGrid = document.getElementById('bikesGrid');
    bikesGrid.innerHTML = '';

    const bikes = bikesForSale[typeId] || [];

    bikes.forEach(bike => {
        const bikeCard = createItemCard(bike, 'bike');
        bikesGrid.appendChild(bikeCard);
    });
}

function loadAccessoriesCategories() {
    const accessoriesCategoriesGrid = document.getElementById('accessoriesCategoriesGrid');
    accessoriesCategoriesGrid.innerHTML = '';

    accessoriesCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'type-card';
        categoryCard.onclick = () => navigateTo('accessoriesList', category.id);
        categoryCard.innerHTML = `
            <div class="type-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        accessoriesCategoriesGrid.appendChild(categoryCard);
    });
}

function loadAccessoriesList(categoryId) {
    const category = accessoriesCategories.find(c => c.id === categoryId);
    document.getElementById('accessoriesListTitle').textContent = category.name;

    const accessoriesGrid = document.getElementById('accessoriesGrid');
    accessoriesGrid.innerHTML = '';

    const accessories = accessoriesProducts[categoryId] || [];

    accessories.forEach(accessory => {
        const accessoryCard = createItemCard(accessory, 'accessory');
        accessoriesGrid.appendChild(accessoryCard);
    });
}

function loadServicesCategories() {
    const servicesCategoriesGrid = document.getElementById('servicesCategoriesGrid');
    servicesCategoriesGrid.innerHTML = '';

    servicesCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'type-card';
        categoryCard.onclick = () => navigateTo('servicesList', category.id);
        categoryCard.innerHTML = `
            <div class="type-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        servicesCategoriesGrid.appendChild(categoryCard);
    });
}

function loadServicesList(categoryId) {
    const category = servicesCategories.find(c => c.id === categoryId);
    document.getElementById('servicesListTitle').textContent = category.name;

    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';

    const services = servicesProviders[categoryId] || [];

    services.forEach(service => {
        const serviceCard = createItemCard(service, 'service');
        servicesGrid.appendChild(serviceCard);
    });
}

// Create Item Card (Generic)
function createItemCard(item, type) {
    const card = document.createElement('div');
    card.className = 'item-card';

    let content = '';

    switch(type) {
        case 'part':
            content = `
                <div class="item-image">${item.icon}</div>
                <div class="item-content">
                    <h4>${item.name}</h4>
                    <p>الحالة: ${item.condition}</p>
                    <div class="item-price">${item.price} ريال</div>
                    <button class="contact-btn" onclick="contactSeller('${item.name}')">تواصل مع البائع</button>
                </div>
            `;
            break;

        case 'bike':
            content = `
                <div class="item-image">${item.icon}</div>
                <div class="item-content">
                    <h4>${item.name}</h4>
                    <p>السنة: ${item.year}</p>
                    <p>المسافة: ${item.km}</p>
                    <span class="item-badge ${item.condition === 'مستعمل' ? 'used' : ''}">${item.condition}</span>
                    <div class="item-price">${item.price} ريال</div>
                    <button class="contact-btn" onclick="contactSeller('${item.name}')">تواصل مع البائع</button>
                </div>
            `;
            break;

        case 'accessory':
            content = `
                <div class="item-image">${item.icon}</div>
                <div class="item-content">
                    <h4>${item.name}</h4>
                    <p>الماركة: ${item.brand}</p>
                    <div class="item-price">${item.price} ريال</div>
                    <button class="contact-btn" onclick="contactSeller('${item.name}')">تواصل مع البائع</button>
                </div>
            `;
            break;

        case 'service':
            content = `
                <div class="item-image">${item.icon}</div>
                <div class="item-content">
                    <h4>${item.name}</h4>
                    <p>📍 ${item.location}</p>
                    <p>💰 ${item.price}</p>
                    <p>⭐ التقييم: ${item.rating}/5</p>
                    <button class="contact-btn" onclick="contactService('${item.name}')">حجز موعد</button>
                </div>
            `;
            break;
    }

    card.innerHTML = content;
    return card;
}

// Contact Functions
function contactSeller(itemName) {
    alert(`سيتم التواصل مع البائع بخصوص: ${itemName}\n\nهذه نسخة تجريبية - في النسخة الكاملة سيتم فتح واتساب أو نموذج تواصل`);
}

function contactService(serviceName) {
    alert(`سيتم حجز موعد في: ${serviceName}\n\nهذه نسخة تجريبية - في النسخة الكاملة سيتم فتح نموذج حجز`);
}

console.log('✅ Soft99bikes App - Ready!');
