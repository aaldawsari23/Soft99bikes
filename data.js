// Data Structure for the App

const brandsData = [
    { id: 'suzuki', name: 'سوزوكي', nameEn: 'Suzuki', logo: '🔴' },
    { id: 'yamaha', name: 'ياماها', nameEn: 'Yamaha', logo: '🔵' },
    { id: 'honda', name: 'هوندا', nameEn: 'Honda', logo: '🔴' },
    { id: 'kawasaki', name: 'كاواساكي', nameEn: 'Kawasaki', logo: '🟢' },
    { id: 'harley', name: 'هارلي ديفيدسون', nameEn: 'Harley-Davidson', logo: '🟠' },
    { id: 'ducati', name: 'دوكاتي', nameEn: 'Ducati', logo: '🔴' },
    { id: 'bmw', name: 'بي إم دبليو', nameEn: 'BMW', logo: '🔵' },
    { id: 'ktm', name: 'كي تي إم', nameEn: 'KTM', logo: '🟠' }
];

const modelsData = {
    suzuki: [
        { id: 'hayabusa', name: 'Hayabusa', nameAr: 'هايابوسا', icon: '🏍️', year: '2023' },
        { id: 'gsxr1000', name: 'GSX-R1000', nameAr: 'جي إس إكس آر 1000', icon: '🏍️', year: '2023' },
        { id: 'vstrom', name: 'V-Strom 650', nameAr: 'في سترووم 650', icon: '🏍️', year: '2023' },
        { id: 'gsxs', name: 'GSX-S750', nameAr: 'جي إس إكس إس 750', icon: '🏍️', year: '2023' }
    ],
    yamaha: [
        { id: 'r1', name: 'YZF-R1', nameAr: 'آر 1', icon: '🏍️', year: '2023' },
        { id: 'r6', name: 'YZF-R6', nameAr: 'آر 6', icon: '🏍️', year: '2023' },
        { id: 'mt09', name: 'MT-09', nameAr: 'إم تي 09', icon: '🏍️', year: '2023' },
        { id: 'fz', name: 'FZ', nameAr: 'أفش', icon: '🏍️', year: '2023' }
    ],
    honda: [
        { id: 'cbr1000', name: 'CBR1000RR', nameAr: 'سي بي آر 1000', icon: '🏍️', year: '2023' },
        { id: 'cbr600', name: 'CBR600RR', nameAr: 'سي بي آر 600', icon: '🏍️', year: '2023' },
        { id: 'africa', name: 'Africa Twin', nameAr: 'أفريكا توين', icon: '🏍️', year: '2023' },
        { id: 'goldwing', name: 'Gold Wing', nameAr: 'قولد وينق', icon: '🏍️', year: '2023' }
    ],
    kawasaki: [
        { id: 'ninja', name: 'Ninja ZX-10R', nameAr: 'نينجا', icon: '🏍️', year: '2023' },
        { id: 'z900', name: 'Z900', nameAr: 'زد 900', icon: '🏍️', year: '2023' },
        { id: 'versys', name: 'Versys 650', nameAr: 'فيرسس 650', icon: '🏍️', year: '2023' }
    ],
    harley: [
        { id: 'sportster', name: 'Sportster', nameAr: 'سبورتستر', icon: '🏍️', year: '2023' },
        { id: 'softail', name: 'Softail', nameAr: 'سوفت تيل', icon: '🏍️', year: '2023' },
        { id: 'touring', name: 'Touring', nameAr: 'تورينق', icon: '🏍️', year: '2023' }
    ],
    ducati: [
        { id: 'panigale', name: 'Panigale V4', nameAr: 'بانيقالي', icon: '🏍️', year: '2023' },
        { id: 'monster', name: 'Monster', nameAr: 'مونستر', icon: '🏍️', year: '2023' },
        { id: 'multistrada', name: 'Multistrada', nameAr: 'مالتيسترادا', icon: '🏍️', year: '2023' }
    ],
    bmw: [
        { id: 's1000rr', name: 'S1000RR', nameAr: 'إس 1000 آر آر', icon: '🏍️', year: '2023' },
        { id: 'gs', name: 'R1250GS', nameAr: 'جي إس 1250', icon: '🏍️', year: '2023' },
        { id: 'f900', name: 'F900R', nameAr: 'إف 900 آر', icon: '🏍️', year: '2023' }
    ],
    ktm: [
        { id: 'duke', name: 'Duke 390', nameAr: 'ديوك 390', icon: '🏍️', year: '2023' },
        { id: 'rc', name: 'RC 390', nameAr: 'آر سي 390', icon: '🏍️', year: '2023' },
        { id: 'adventure', name: '1290 Adventure', nameAr: 'أدفينتشر 1290', icon: '🏍️', year: '2023' }
    ]
};

const partsData = {
    hayabusa: [
        { name: 'محرك كامل', price: '25,000', condition: 'جديد', icon: '⚙️' },
        { name: 'علبة سرعات', price: '8,500', condition: 'جديد', icon: '⚙️' },
        { name: 'إطار أمامي', price: '1,200', condition: 'جديد', icon: '🛞' },
        { name: 'إطار خلفي', price: '1,500', condition: 'جديد', icon: '🛞' }
    ],
    r1: [
        { name: 'محرك كامل', price: '22,000', condition: 'جديد', icon: '⚙️' },
        { name: 'فرامل أمامية', price: '2,800', condition: 'جديد', icon: '🛑' },
        { name: 'عداد رقمي', price: '1,500', condition: 'جديد', icon: '📊' }
    ]
    // Add more parts for other models as needed
};

const bikeTypes = [
    { id: 'sport', name: 'دراجات رياضية', nameEn: 'Sport Bikes', icon: '🏍️', description: 'دراجات عالية الأداء للسرعة' },
    { id: 'street', name: 'دراجات الشوارع', nameEn: 'Street Bikes', icon: '🛵', description: 'مثالية للتنقل اليومي' },
    { id: 'cruiser', name: 'دراجات كروزر', nameEn: 'Cruisers', icon: '🏍️', description: 'راحة وأناقة في القيادة' },
    { id: 'dirt', name: 'دراجات صحراوية', nameEn: 'Dirt Bikes', icon: '🏍️', description: 'للطرق الوعرة والرمال' },
    { id: 'scooter', name: 'سكوتر', nameEn: 'Scooters', icon: '🛵', description: 'سهلة وعملية' },
    { id: 'touring', name: 'دراجات سياحية', nameEn: 'Touring', icon: '🏍️', description: 'للرحلات الطويلة' }
];

const bikesForSale = {
    sport: [
        { name: 'Suzuki Hayabusa 2023', price: '85,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' },
        { name: 'Yamaha R1 2022', price: '72,000', condition: 'مستعمل', km: '5,000 كم', year: '2022', icon: '🏍️' },
        { name: 'Kawasaki Ninja ZX-10R', price: '78,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' }
    ],
    street: [
        { name: 'Yamaha FZ 2023', price: '28,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🛵' },
        { name: 'Honda CB650R', price: '35,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🛵' },
        { name: 'Suzuki GSX-S750', price: '42,000', condition: 'مستعمل', km: '8,000 كم', year: '2022', icon: '🛵' }
    ],
    cruiser: [
        { name: 'Harley-Davidson Sportster', price: '95,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' },
        { name: 'Harley-Davidson Softail', price: '125,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' }
    ],
    dirt: [
        { name: 'KTM Duke 390', price: '32,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' },
        { name: 'Yamaha WR250F', price: '38,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' }
    ],
    scooter: [
        { name: 'Yamaha NMAX', price: '18,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🛵' },
        { name: 'Honda PCX', price: '22,000', condition: 'مستعمل', km: '3,000 كم', year: '2022', icon: '🛵' }
    ],
    touring: [
        { name: 'Honda Gold Wing', price: '150,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' },
        { name: 'BMW R1250GS', price: '98,000', condition: 'جديد', km: '0 كم', year: '2023', icon: '🏍️' }
    ]
};

const accessoriesCategories = [
    { id: 'helmets', name: 'خوذ', nameEn: 'Helmets', icon: '🪖', description: 'خوذ بمعايير أمان عالمية' },
    { id: 'gloves', name: 'قفازات', nameEn: 'Gloves', icon: '🧤', description: 'قفازات واقية للقيادة' },
    { id: 'jackets', name: 'جاكيتات', nameEn: 'Jackets', icon: '🧥', description: 'جاكيتات جلدية وقماشية' },
    { id: 'boots', name: 'أحذية', nameEn: 'Boots', icon: '👢', description: 'أحذية خاصة بالدراجات' },
    { id: 'bags', name: 'حقائب', nameEn: 'Bags', icon: '🎒', description: 'حقائب للدراجات' },
    { id: 'parts', name: 'قطع تزيينية', nameEn: 'Decorative Parts', icon: '✨', description: 'قطع لتزيين الدراجة' }
];

const accessoriesProducts = {
    helmets: [
        { name: 'خوذة AGV Pista GP RR', price: '3,500', brand: 'AGV', icon: '🪖' },
        { name: 'خوذة Shoei X-14', price: '2,800', brand: 'Shoei', icon: '🪖' },
        { name: 'خوذة HJC RPHA 11', price: '1,500', brand: 'HJC', icon: '🪖' }
    ],
    gloves: [
        { name: 'قفازات Alpinestars GP Pro', price: '650', brand: 'Alpinestars', icon: '🧤' },
        { name: 'قفازات Dainese Full Metal', price: '850', brand: 'Dainese', icon: '🧤' }
    ],
    jackets: [
        { name: 'جاكيت Dainese Racing', price: '2,200', brand: 'Dainese', icon: '🧥' },
        { name: 'جاكيت Alpinestars Missile', price: '1,800', brand: 'Alpinestars', icon: '🧥' }
    ],
    boots: [
        { name: 'حذاء Sidi Mag-1', price: '1,800', brand: 'Sidi', icon: '👢' },
        { name: 'حذاء Alpinestars SMX-6', price: '1,200', brand: 'Alpinestars', icon: '👢' }
    ],
    bags: [
        { name: 'حقيبة جانبية SW-Motech', price: '1,500', brand: 'SW-Motech', icon: '🎒' },
        { name: 'حقيبة ظهر Ogio', price: '450', brand: 'Ogio', icon: '🎒' }
    ],
    parts: [
        { name: 'مرايا CRG', price: '380', brand: 'CRG', icon: '✨' },
        { name: 'أضواء LED', price: '250', brand: 'Generic', icon: '✨' }
    ]
};

const servicesCategories = [
    { id: 'maintenance', name: 'صيانة عامة', nameEn: 'General Maintenance', icon: '🔧', description: 'خدمات الصيانة الدورية' },
    { id: 'repair', name: 'إصلاح وتصليح', nameEn: 'Repair', icon: '🔨', description: 'إصلاح الأعطال' },
    { id: 'customization', name: 'تعديل وتطوير', nameEn: 'Customization', icon: '🎨', description: 'تعديل وتحسين الدراجة' },
    { id: 'wash', name: 'غسيل وتلميع', nameEn: 'Wash & Polish', icon: '💧', description: 'خدمات الغسيل والتلميع' },
    { id: 'inspection', name: 'فحص شامل', nameEn: 'Full Inspection', icon: '🔍', description: 'فحص كامل للدراجة' }
];

const servicesProviders = {
    maintenance: [
        { name: 'ورشة السرعة', location: 'الرياض - حي النخيل', price: '150 ريال/ساعة', rating: '4.8', icon: '🔧' },
        { name: 'مركز الخليج للدراجات', location: 'جدة - حي الروضة', price: '180 ريال/ساعة', rating: '4.9', icon: '🔧' }
    ],
    repair: [
        { name: 'ورشة التميز', location: 'الدمام - حي الفيصلية', price: 'حسب العطل', rating: '4.7', icon: '🔨' },
        { name: 'مركز الصيانة الشامل', location: 'الرياض - حي العليا', price: 'حسب العطل', rating: '4.6', icon: '🔨' }
    ],
    customization: [
        { name: 'Custom Bikes Studio', location: 'الرياض - حي الملقا', price: 'حسب التعديل', rating: '5.0', icon: '🎨' },
        { name: 'ورشة الإبداع', location: 'جدة - حي الزهراء', price: 'حسب التعديل', rating: '4.8', icon: '🎨' }
    ],
    wash: [
        { name: 'غسيل النجوم', location: 'الرياض - حي السليمانية', price: '50 ريال', rating: '4.5', icon: '💧' },
        { name: 'مركز اللمعان', location: 'جدة - حي البوادي', price: '60 ريال', rating: '4.6', icon: '💧' }
    ],
    inspection: [
        { name: 'مركز الفحص المتقدم', location: 'الرياض - حي الملز', price: '200 ريال', rating: '4.9', icon: '🔍' },
        { name: 'فحص الخبراء', location: 'الدمام - حي الشاطئ', price: '180 ريال', rating: '4.7', icon: '🔍' }
    ]
};
