/**
 * HazinaUz - Books Database
 * Har bir kitob uchun: id, name, author, year, file, preview, genre
 *
 * file     — books/ papkasidagi TXT (yoki PDF) fayl yo'li
 * preview  — images/ papkasidagi kitob muqovasi rasmi yo'li
 *            Rasm bo'lmasa gradient + emoji avtomatik ko'rsatiladi.
 *
 * Yangi kitob qo'shish uchun ushbu massivga yangi ob'ekt qo'shing.
 */

const BOOKS_DATA = [
    {
        id: 1,
        name: "O'tkan Kunlar",
        author: "Abdulla Qodiriy",
        year: 1926,
        genre: "Roman",
        file: "books/kitob2.pdf",
        preview: "images/kitob2.jpg",
        description: "O'zbek adabiyotining birinchi romani. Sevgi va vatan mavzusidagi asosiy tarixiy roman."
    },
    {
        id: 2,
        name: "Mehrobdan Chayon",
        author: "Abdulla Qodiriy",
        year: 1929,
        genre: "Roman",
        file: "books/mehrobdan_chayon.txt",
        preview: "images/mehrobdan_chayon.jpg",
        description: "Abdulla Qodiriyning ikkinchi romani — muhabbat va fojeaning ulkan hikoyasi."
    },
    {
        id: 3,
        name: "Kecha va Kunduz",
        author: "Cho'lpon",
        year: 1936,
        genre: "Roman",
        file: "books/kecha_va_kunduz.txt",
        preview: "images/kecha_va_kunduz.jpg",
        description: "Cho'lponning asosiy romani. O'zbek xalqining 20-asr boshidagi hayoti haqida."
    },
    {
        id: 4,
        name: "Alvido Go'zalim",
        author: "Said Ahmad",
        year: 1962,
        genre: "Qissa",
        file: "books/alvido_gozalim.txt",
        preview: "images/alvido_gozalim.jpg",
        description: "Said Ahmadning sevimli qissasi — hayot, ishq va ayriliq haqida."
    },
    {
        id: 5,
        name: "Sarob",
        author: "Abdulla Qahhor",
        year: 1943,
        genre: "Roman",
        file: "books/sarob.txt",
        preview: "images/sarob.jpg",
        description: "Abdulla Qahhorning mashhur romani — aldanishlar va haqiqat haqida."
    },
    {
        id: 6,
        name: "O'g'ri",
        author: "Abdulla Qahhor",
        year: 1959,
        genre: "Hikoya",
        file: "books/ogri.txt",
        preview: "images/ogri.jpg",
        description: "Abdulla Qahhorning eng kulgili va ta'sirchan hikoyasi."
    },
    {
        id: 7,
        name: "Boqiy Daryo",
        author: "Pirimqul Qodirov",
        year: 1966,
        genre: "Roman",
        file: "books/boqiy_daryo.txt",
        preview: "images/boqiy_daryo.jpg",
        description: "O'zbek tarixini va urf-odatlarini aks ettirgan ulkan roman."
    },
    {
        id: 8,
        name: "Yulduzli Tunlar",
        author: "Pirimqul Qodirov",
        year: 1978,
        genre: "Tarixiy Roman",
        file: "books/yulduzli_tunlar.txt",
        preview: "images/yulduzli_tunlar.jpg",
        description: "Bobur va uning zamonini tasvirlovchi mashhur tarixiy roman."
    },
    {
        id: 9,
        name: "Ikki Eshik Orasi",
        author: "O'tkir Hoshimov",
        year: 1974,
        genre: "Roman",
        file: "books/ikki_eshik_orasi.txt",
        preview: "images/ikki_eshik_orasi.jpg",
        description: "Ikkinchi Jahon urushi davrini tasvirlovchi ta'sirchan roman."
    },
    {
        id: 10,
        name: "Daftar Hoshiyasidagi Bitiklar",
        author: "O'tkir Hoshimov",
        year: 1996,
        genre: "Hikoyalar",
        file: "books/daftar_hoshiyasi.txt",
        preview: "images/daftar_hoshiyasi.jpg",
        description: "O'tkir Hoshimovning falsafiy hikoyalar to'plami."
    },
    {
        id: 11,
        name: "Tun Osmonidagi Chaqmoq",
        author: "Xayriddin Sultonov",
        year: 2005,
        genre: "Qissa",
        file: "books/tun_osmonidagi.txt",
        preview: "images/tun_osmonidagi.jpg",
        description: "Zamonaviy o'zbek adabiyotining qiziqarli qissasi."
    },
    {
        id: 12,
        name: "Ingliz Tili Grammatikasi",
        author: "N. Yusupova",
        year: 2018,
        genre: "O'quv Qo'llanma",
        file: "books/ingliz_grammatika.txt",
        preview: "images/ingliz_grammatika.jpg",
        description: "IELTS va CEFR imtihonlariga tayyorlanish uchun grammatika qo'llanmasi."
    }
];

/**
 * Kitob ma'lumotlarini ID bo'yicha topish
 * @param {number} id - Kitob ID si
 * @returns {Object|null}
 */
function getBookById(id) {
    return BOOKS_DATA.find(b => b.id === id) || null;
}

/**
 * Kitoblarni nom yoki muallif bo'yicha qidirish
 * @param {string} query - Qidiruv so'zi
 * @returns {Array}
 */
function searchBooks(query) {
    if (!query || query.trim() === '') return BOOKS_DATA;
    const q = query.toLowerCase().trim();
    return BOOKS_DATA.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q)
    );
}

/**
 * Janr bo'yicha kitoblarni filtrlash
 * @param {string} genre
 * @returns {Array}
 */
function filterByGenre(genre) {
    if (!genre || genre === 'Barchasi') return BOOKS_DATA;
    return BOOKS_DATA.filter(b => b.genre === genre);
}

/**
 * Tasodifiy N ta kitobni olish (slider uchun)
 * @param {number} count
 * @returns {Array}
 */
function getRandomBooks(count = 5) {
    const shuffled = [...BOOKS_DATA].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Barcha janrlar ro'yxati
 */
function getAllGenres() {
    const genres = [...new Set(BOOKS_DATA.map(b => b.genre))];
    return ['Barchasi', ...genres];
}
