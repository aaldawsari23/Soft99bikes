// Chips Data for Each Section
const bikesChips = [
    { id: 'new', name: 'جديد', type: 'condition' },
    { id: 'used', name: 'مستعمل', type: 'condition' },
    { id: 'race', name: 'ريس', type: 'bikeType' },
    { id: 'street', name: 'ستريت', type: 'bikeType' },
    { id: 'goldwing', name: 'قولدوينق', type: 'bikeType' },
    { id: 'adventure', name: 'ادفنتشر', type: 'bikeType' },
    { id: 'cruiser', name: 'كروزر', type: 'bikeType' },
    { id: 'dirt', name: 'صحراوي', type: 'bikeType' }
];

const partsChips = [
    { id: 'by-brand', name: 'حسب الشركة', type: 'brand' },
    { id: 'by-model', name: 'حسب الدباب', type: 'model' },
    { id: 'oem', name: 'قطع وكالة', type: 'partsType' },
    { id: 'aftermarket', name: 'تجاري', type: 'partsType' }
];

const accessoriesChips = [
    { id: 'protection', name: 'الحماية الشخصية', type: 'category' },
    { id: 'helmets', name: 'خوذ', type: 'category' },
    { id: 'bike-accessories', name: 'اكسسوارات الدراجات', type: 'category' }
];

// Products Data
const allProducts = [
    // Bikes - New
    {
        id: 'bike-1',
        type: 'bikes',
        name: 'Suzuki Hayabusa 2023',
        price: '85,000',
        condition: 'جديد',
        bikeType: 'race',
        brand: 'suzuki',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    {
        id: 'bike-2',
        type: 'bikes',
        name: 'Yamaha R1 2023',
        price: '78,000',
        condition: 'جديد',
        bikeType: 'race',
        brand: 'yamaha',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    {
        id: 'bike-3',
        type: 'bikes',
        name: 'Honda CBR1000RR',
        price: '82,000',
        condition: 'جديد',
        bikeType: 'race',
        brand: 'honda',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    {
        id: 'bike-4',
        type: 'bikes',
        name: 'Kawasaki Ninja ZX-10R',
        price: '79,000',
        condition: 'جديد',
        bikeType: 'race',
        brand: 'kawasaki',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    // Bikes - Used
    {
        id: 'bike-5',
        type: 'bikes',
        name: 'Yamaha R6 2021',
        price: '52,000',
        condition: 'مستعمل',
        bikeType: 'race',
        brand: 'yamaha',
        km: '8,000 كم',
        year: '2021',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    {
        id: 'bike-6',
        type: 'bikes',
        name: 'Suzuki GSX-R750 2020',
        price: '48,000',
        condition: 'مستعمل',
        bikeType: 'race',
        brand: 'suzuki',
        km: '12,000 كم',
        year: '2020',
        icon: '🏍️',
        availability: 'available',
        category: 'sport'
    },
    // Street Bikes
    {
        id: 'bike-7',
        type: 'bikes',
        name: 'Yamaha MT-09 2023',
        price: '42,000',
        condition: 'جديد',
        bikeType: 'street',
        brand: 'yamaha',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'street'
    },
    {
        id: 'bike-8',
        type: 'bikes',
        name: 'Honda CB650R 2023',
        price: '38,000',
        condition: 'جديد',
        bikeType: 'street',
        brand: 'honda',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'street'
    },
    // Cruiser
    {
        id: 'bike-9',
        type: 'bikes',
        name: 'Harley-Davidson Sportster',
        price: '95,000',
        condition: 'جديد',
        bikeType: 'cruiser',
        brand: 'harley',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'cruiser'
    },
    // Gold Wing
    {
        id: 'bike-10',
        type: 'bikes',
        name: 'Honda Gold Wing 2023',
        price: '155,000',
        condition: 'جديد',
        bikeType: 'goldwing',
        brand: 'honda',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'touring'
    },
    // Adventure
    {
        id: 'bike-11',
        type: 'bikes',
        name: 'BMW R1250GS Adventure',
        price: '98,000',
        condition: 'جديد',
        bikeType: 'adventure',
        brand: 'bmw',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'adventure'
    },
    {
        id: 'bike-12',
        type: 'bikes',
        name: 'KTM 1290 Adventure',
        price: '89,000',
        condition: 'جديد',
        bikeType: 'adventure',
        brand: 'ktm',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'adventure'
    },
    // Dirt Bikes
    {
        id: 'bike-13',
        type: 'bikes',
        name: 'KTM 450 SX-F',
        price: '42,000',
        condition: 'جديد',
        bikeType: 'dirt',
        brand: 'ktm',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'dirt'
    },
    {
        id: 'bike-14',
        type: 'bikes',
        name: 'Yamaha WR250F',
        price: '38,000',
        condition: 'جديد',
        bikeType: 'dirt',
        brand: 'yamaha',
        km: '0 كم',
        year: '2023',
        icon: '🏍️',
        availability: 'available',
        category: 'dirt'
    },

    // Parts
    {
        id: 'part-1',
        type: 'parts',
        name: 'محرك كامل Hayabusa',
        price: '25,000',
        condition: 'جديد',
        partsType: 'oem',
        brand: 'suzuki',
        icon: '⚙️',
        availability: 'available',
        category: 'engine'
    },
    {
        id: 'part-2',
        type: 'parts',
        name: 'فرامل أمامية Brembo',
        price: '2,800',
        condition: 'جديد',
        partsType: 'aftermarket',
        brand: 'yamaha',
        icon: '🛑',
        availability: 'available',
        category: 'brakes'
    },
    {
        id: 'part-3',
        type: 'parts',
        name: 'إطار أمامي Michelin',
        price: '1,200',
        condition: 'جديد',
        partsType: 'aftermarket',
        brand: 'honda',
        icon: '🛞',
        availability: 'available',
        category: 'tires'
    },
    {
        id: 'part-4',
        type: 'parts',
        name: 'عداد رقمي Yamaha R1',
        price: '1,500',
        condition: 'جديد',
        partsType: 'oem',
        brand: 'yamaha',
        icon: '📊',
        availability: 'available',
        category: 'electronics'
    },
    {
        id: 'part-5',
        type: 'parts',
        name: 'علبة سرعات Suzuki GSX-R',
        price: '8,500',
        condition: 'جديد',
        partsType: 'oem',
        brand: 'suzuki',
        icon: '⚙️',
        availability: 'available',
        category: 'transmission'
    },
    {
        id: 'part-6',
        type: 'parts',
        name: 'مرايا جانبية CRG',
        price: '380',
        condition: 'جديد',
        partsType: 'aftermarket',
        brand: 'kawasaki',
        icon: '✨',
        availability: 'available',
        category: 'accessories'
    },
    {
        id: 'part-7',
        type: 'parts',
        name: 'أضواء LED Xenon',
        price: '650',
        condition: 'جديد',
        partsType: 'aftermarket',
        brand: 'honda',
        icon: '💡',
        availability: 'available',
        category: 'lighting'
    },
    {
        id: 'part-8',
        type: 'parts',
        name: 'فلتر هواء K&N',
        price: '450',
        condition: 'جديد',
        partsType: 'aftermarket',
        brand: 'ktm',
        icon: '🌪️',
        availability: 'available',
        category: 'filters'
    },

    // Accessories
    {
        id: 'acc-1',
        type: 'accessories',
        name: 'خوذة AGV Pista GP RR',
        price: '3,500',
        brand: 'AGV',
        icon: '🪖',
        availability: 'available',
        category: 'helmets',
        accessoryType: 'helmets'
    },
    {
        id: 'acc-2',
        type: 'accessories',
        name: 'خوذة Shoei X-14',
        price: '2,800',
        brand: 'Shoei',
        icon: '🪖',
        availability: 'available',
        category: 'helmets',
        accessoryType: 'helmets'
    },
    {
        id: 'acc-3',
        type: 'accessories',
        name: 'خوذة HJC RPHA 11',
        price: '1,500',
        brand: 'HJC',
        icon: '🪖',
        availability: 'available',
        category: 'helmets',
        accessoryType: 'helmets'
    },
    {
        id: 'acc-4',
        type: 'accessories',
        name: 'قفازات Alpinestars GP Pro',
        price: '650',
        brand: 'Alpinestars',
        icon: '🧤',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-5',
        type: 'accessories',
        name: 'قفازات Dainese Full Metal',
        price: '850',
        brand: 'Dainese',
        icon: '🧤',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-6',
        type: 'accessories',
        name: 'جاكيت Dainese Racing',
        price: '2,200',
        brand: 'Dainese',
        icon: '🧥',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-7',
        type: 'accessories',
        name: 'جاكيت Alpinestars Missile',
        price: '1,800',
        brand: 'Alpinestars',
        icon: '🧥',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-8',
        type: 'accessories',
        name: 'حذاء Sidi Mag-1',
        price: '1,800',
        brand: 'Sidi',
        icon: '👢',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-9',
        type: 'accessories',
        name: 'حذاء Alpinestars SMX-6',
        price: '1,200',
        brand: 'Alpinestars',
        icon: '👢',
        availability: 'available',
        category: 'protection',
        accessoryType: 'protection'
    },
    {
        id: 'acc-10',
        type: 'accessories',
        name: 'حقيبة جانبية SW-Motech',
        price: '1,500',
        brand: 'SW-Motech',
        icon: '🎒',
        availability: 'available',
        category: 'bike-accessories',
        accessoryType: 'bike-accessories'
    },
    {
        id: 'acc-11',
        type: 'accessories',
        name: 'حقيبة ظهر Ogio',
        price: '450',
        brand: 'Ogio',
        icon: '🎒',
        availability: 'available',
        category: 'bike-accessories',
        accessoryType: 'bike-accessories'
    },
    {
        id: 'acc-12',
        type: 'accessories',
        name: 'غطاء دراجة مقاوم للماء',
        price: '280',
        brand: 'Generic',
        icon: '🛡️',
        availability: 'available',
        category: 'bike-accessories',
        accessoryType: 'bike-accessories'
    }
];
