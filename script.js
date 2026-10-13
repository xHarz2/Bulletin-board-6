console.log('script.js підключено');

const ads = [
    { title: 'Продам велосипед гірський', category: 'Речі', daysAgo: 5 },
    { title: 'Допоможу з ремонтом сантехніки у вашій квартирі', category: 'Послуги', daysAgo: 16 },
    { title: 'Віддам кошенят в добрі руки', category: 'Тварини', daysAgo: 2 },
    { title: 'Дриль-перфоратор напрокат', category: 'Речі', daysAgo: 20 },
    { title: 'Репетитор з вищої математики', category: 'Послуги', daysAgo: 10 }
];

// Обрізає текст до заданої кількості символів і додає три крапки
const shorten = (text, n) => text.length > n ? text.slice(0, n) + '...' : text;

// Шукає оголошення у вказаній категорії, перевіряє їх актуальність та виводить у консоль
function filterAdsByCategory(categoryName) {
    console.log(`\n--- Шукаємо оголошення в категорії: "${categoryName}" ---`);
    
    for (const ad of ads) {
        if (ad.category === categoryName) {
            const shortTitle = shorten(ad.title, 20);
            const status = ad.daysAgo > 14 ? '[застаріле]' : '[актуальне]';
            
            console.log(`${status} ${shortTitle} (вік: ${ad.daysAgo} дн.)`);
        }
    }
}

filterAdsByCategory('Речі');
filterAdsByCategory('Послуги');