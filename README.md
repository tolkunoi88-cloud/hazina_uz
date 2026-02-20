# 🪙 HazinaUz — Bilim Xazinasi

Online kitob o'qish va sertifikat testlari platformasi.  
Telegram WebApp + PHP Bot (MyXvest hosting).

---

## 📁 Papkalar Tuzilishi

```
hazina/
│
├── index.html              ← Asosiy sahifa (GitHub Pages)
│
├── css/
│   └── style.css           ← Barcha stillar
│
├── js/
│   ├── books.js            ← Kitoblar ma'lumotlar bazasi
│   ├── quiz.js             ← Test tizimi va parser
│   └── app.js              ← Asosiy ilova kodi
│
├── books/                  ← PDF kitoblar + preview rasmlari
│   ├── kitob_nomi.pdf
│   └── previews/
│       └── kitob_nomi.jpg
│
├── certificates/           ← Test savollari (TXT format)
│   ├── IELTS/
│   │   ├── band5.txt
│   │   └── band6.txt
│   ├── CEFR/
│   │   ├── A1.txt
│   │   └── B1.txt
│   ├── TOPIK/
│   │   └── level1.txt
│   └── Imtiyoz/
│       ├── matematika/asosiy.txt
│       ├── fizika/asosiy.txt
│       ├── kimyo/asosiy.txt
│       ├── biologiya/asosiy.txt
│       ├── tarix/asosiy.txt
│       └── ona_tili/asosiy.txt
│
└── bot/                    ← PHP bot fayllari (MyXvest)
    ├── bot.php             ← Asosiy bot
    ├── auth.php            ← WebApp autentifikatsiya
    ├── set_webhook.php     ← Webhook o'rnatish
    └── database.sql        ← MySQL schema
```

---

## 🚀 O'rnatish Qo'llanmasi

### 1. GitHub Pages (Frontend)

1. Bu repozitoriyani GitHub'ga push qiling
2. Settings → Pages → Source: `main` branch, `/ (root)` papkasi
3. URL: `https://YOUR_USERNAME.github.io/hazina/`

### 2. Kitob Qo'shish

`js/books.js` faylida `BOOKS_DATA` massiviga qo'shing:

```javascript
{
    id: 13,                              // Unikal ID
    name: "Kitob Nomi",
    author: "Muallif Ismi",
    year: 2024,
    genre: "Roman",                      // Janr
    file: "books/kitob_nomi.pdf",        // PDF fayl yo'li
    preview: "books/previews/cover.jpg", // Muqova rasmi
    description: "Kitob haqida qisqacha"
}
```

### 3. Test Savoli Qo'shish

TXT faylni to'g'ri formatda yozing:

```
1. Savol matni bu yerda?
A) Birinchi variant
B) Ikkinchi variant
C) Uchinchi variant
D) To'rtinchi variant

2. Ikkinchi savol?
A) Variant A
B) Variant B
C) Variant C
D) Variant D

To'g'ri javoblar:
1C
2B
```

### 4. PHP Bot (MyXvest)

1. `bot/` papkasidagi fayllarni MyXvest serveriga yuklang
2. `bot.php`, `auth.php`, `set_webhook.php` da quyidagilarni to'ldiring:
   - `BOT_TOKEN` — BotFather dan oling
   - `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` — MyXvest DB
   - `WEBAPP_URL` — GitHub Pages URL

3. MySQL: `database.sql` ni import qiling

4. Webhook o'rnating: `https://YOUR_DOMAIN/set_webhook.php` ga kiring

5. `app.js` da `auth.php` URL ni yangilang:
   ```javascript
   const response = await fetch('https://YOUR_DOMAIN/auth.php', ...);
   ```

6. BotFather'da WebApp URLini o'rnating:
   ```
   /setmenubutton → @YourBot → URL → https://YOUR_USERNAME.github.io/hazina/
   ```

---

## 📝 Sertifikat Darajalarini Kengaytirish

`js/quiz.js` faylida `CERT_CONFIG` ob'ektiga yangi darajalar qo'shing:

```javascript
IELTS: {
    levels: [
        { id: "band5", label: "Band 5", file: "certificates/IELTS/band5.txt" },
        { id: "band7", label: "Band 7", file: "certificates/IELTS/band7.txt" }, // yangi
    ]
}
```

---

## 📞 Aloqa

- 🆘 Yordam: @hazina_support_bot  
- 👨‍💻 Dasturchi: @hazina_dev  
- 📢 Kanal: @hazina_uz_channel
