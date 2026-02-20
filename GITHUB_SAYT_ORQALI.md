# 🌐 GitHub Sayt Orqali Yuklash Ko'rsatmasi
## (Git o'rnatmasdan, brauzer orqali)

---

## 📌 1-QADAM — Repository Yaratish

1. **[github.com](https://github.com)** ga kiring (akkaunt oching yoki kiring)
2. Yuqori o'ng burchakdagi **`+`** tugmasini bosing
3. **"New repository"** ni bosing
4. Quyidagi ma'lumotlarni kiriting:
   - **Repository name:** `hazina`
   - **Description:** `HazinaUz — Bilim Xazinasi` *(ixtiyoriy)*
   - **Public** ni tanlang ✅ *(GitHub Pages bepul ishlashi uchun shart)*
   - **"Add a README file"** ni BELGILAMANG ❌
5. **"Create repository"** tugmasini bosing

---

## 📌 2-QADAM — Fayllarni Yuklash

> ⚠️ GitHub bir vaqtda ko'p fayl qabul qiladi, lekin **papkalar bilan birga** yuklash uchun quyidagi usulni bajaring.

### Asosiy faylni yuklash:

1. Yaratilgan repository sahifasida **"uploading an existing file"** havolasini bosing
   - Yoki: **"Add file"** → **"Upload files"**

2. Ko'rsatilgan maydonni bosing yoki fayllarni **sudrab tashlang (drag & drop)**

3. Quyidagi fayllarni tanlang (kompyuterdan):
   ```
   C:\Users\Windows_11\Desktop\hazina\index.html
   C:\Users\Windows_11\Desktop\hazina\QILISH_KERAK.md
   C:\Users\Windows_11\Desktop\hazina\README.md
   ```

4. Pastdagi "Commit changes" qismida:
   - **"Add files via upload"** — xuddi shunday qoldiring
5. **"Commit changes"** tugmasini bosing ✅

---

## 📌 3-QADAM — Papkalarni Yuklash

GitHub saytida papkalar alohida yuklanadi. Har bir papka uchun:

### `css/` papkasi:
1. Repository sahifasida **"Add file"** → **"Upload files"**
2. `C:\Users\Windows_11\Desktop\hazina\css\style.css` faylini tanlang
3. Commit message: `css papkasi` deb yozing
4. **"Commit changes"** ✅

> ⚠️ **Muammo:** GitHub papka nomini avtomatik yaratmaydi.
> **Yechim:** Fayl nomini to'g'ridan-to'g'ri yozing. Quyidagi usulni bajaring 👇

### Papka bilan fayl yaratish usuli:

1. **"Add file"** → **"Create new file"** bosing
2. Fayl nomi maydoniga yozing: `css/style.css`
   - `/` belgisini yozganda papka avtomatik yaratiladi! ✨
3. `style.css` mazmunini quyidagi qadamlarda ko'chiring:
   - Kompyuterda `css\style.css` faylini **Notepad** da oching
   - **Ctrl+A** → **Ctrl+C** (hammasini ko'chiring)
   - GitHubdagi matn maydoniga **Ctrl+V** (joylashtiring)
4. **"Commit new file"** ✅

---

## 📌 4-QADAM — Barcha Fayllarni Tartib Bilan Yuklash

Quyidagi tartibda har bir faylni yarating yoki yuklang:

### 🗂️ Asosiy fayllar (to'g'ridan yuklash mumkin):
| Fayl | Manba |
|------|-------|
| `index.html` | `C:\...\hazina\index.html` |
| `README.md` | `C:\...\hazina\README.md` |

### 🗂️ `css/` papkasi:
| GitHub yo'li | Manba fayl |
|-------------|-----------|
| `css/style.css` | `css\style.css` |

### 🗂️ `js/` papkasi:
| GitHub yo'li | Manba fayl |
|-------------|-----------|
| `js/books.js` | `js\books.js` |
| `js/quiz.js` | `js\quiz.js` |
| `js/app.js` | `js\app.js` |

### 🗂️ `certificates/` papkasi:
| GitHub yo'li | Manba fayl |
|-------------|-----------|
| `certificates/IELTS/band5.txt` | `certificates\IELTS\band5.txt` |
| `certificates/IELTS/band6.txt` | `certificates\IELTS\band6.txt` |
| `certificates/CEFR/A1.txt` | `certificates\CEFR\A1.txt` |
| `certificates/CEFR/B1.txt` | `certificates\CEFR\B1.txt` |
| `certificates/TOPIK/level1.txt` | `certificates\TOPIK\level1.txt` |
| `certificates/Imtiyoz/matematika/asosiy.txt` | `certificates\Imtiyoz\matematika\asosiy.txt` |
| `certificates/Imtiyoz/fizika/asosiy.txt` | `certificates\Imtiyoz\fizika\asosiy.txt` |
| `certificates/Imtiyoz/kimyo/asosiy.txt` | `certificates\Imtiyoz\kimyo\asosiy.txt` |
| `certificates/Imtiyoz/biologiya/asosiy.txt` | `certificates\Imtiyoz\biologiya\asosiy.txt` |
| `certificates/Imtiyoz/tarix/asosiy.txt` | `certificates\Imtiyoz\tarix\asosiy.txt` |
| `certificates/Imtiyoz/ona_tili/asosiy.txt` | `certificates\Imtiyoz\ona_tili\asosiy.txt` |

### 🗂️ `books/` papkasi (kitob fayllaringiz):
| GitHub yo'li | Manba fayl |
|-------------|-----------|
| `books/kitob_nomi.txt` | Kitob fayli |

### 🗂️ `images/` papkasi (muqova rasmlari):
| GitHub yo'li | Manba fayl |
|-------------|-----------|
| `images/kitob_nomi.jpg` | Rasm fayli |

> 💡 **Bir vaqtda ko'p rasm yuklash:** "Upload files" da bir vaqtda barcha rasmlarni tanlang:
> `images/` papkasini yaratish uchun avval bitta `.gitkeep` fayl yarating, keyin boshqalarni yuklang.

---

## 📌 5-QADAM — GitHub Pages Yoqish

1. Repository sahifasida **"Settings"** (yuqori o'ng) bosing
2. Chap menyu → **"Pages"** bosing
3. **Source** qismida:
   - **"Deploy from a branch"** tanlang
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. **"Save"** bosing ✅
5. **1-3 daqiqa** kuting
6. Sayt manzili paydo bo'ladi:
   ```
   ✅ Your site is published at:
   https://YOUR_USERNAME.github.io/hazina/
   ```

---

## 📌 6-QADAM — Fayl Yangilash (Keyinchalik)

Biror faylni o'zgartirsangiz:

1. Repository sahifasida tegishli faylni toping (masalan `js/books.js`)
2. Fayl nomini bosing → ochiladi
3. Yuqori o'ng burjak — **✏️ (karandash)** belgisini bosing
4. Matnni o'zgartiring
5. "Commit changes" → **"Commit directly to the main branch"** → **"Commit changes"** ✅

### Yoki yangi fayl yuklash:
1. Tegishli papkaga kiring
2. **"Add file"** → **"Upload files"**
3. Yangi faylni tanlang (eskisi ustiga yoziladi)

---

## 📌 7-QADAM — Saytni Tekshirish

Yuklashdan 2-3 daqiqa o'tgach:
```
https://YOUR_USERNAME.github.io/hazina/
```

✅ **Ishlaydi** — Loading screen chiqadi
❌ **404 xato** — `index.html` to'g'ri joyda emas, Settings → Pages ni tekshiring

---

## 💡 FOYDALI MASLAHATLAR

### Fayl mazmunini tez nusxalash (ko'chirish):
1. Tegishli faylni **VS Code** yoki **Notepad**da oching
2. **Ctrl + A** → **Ctrl + C**
3. GitHub saytidagi matn maydoniga **Ctrl + V**

### Katta fayllar uchun (>25MB):
GitHub sayt orqali 25MB dan katta fayl qabul qilmaydi.
Katta PDF kitoblar uchun **Google Drive** yoki **Telegram** ni ishlatib, faylni direct link orqali kitobga qo'shing.

### Papka ichida papka yaratish:
Fayl nomiga yozing: `ota_papka/bola_papka/fayl.txt`
Har bir `/` belgisi yangi papka yaratadi.

---

## ✅ YAKUNLASH TEKSHIRUVI

- [ ] `index.html` yuklangan ✅
- [ ] `css/style.css` yuklangan ✅
- [ ] `js/books.js` yuklangan ✅
- [ ] `js/quiz.js` yuklangan ✅
- [ ] `js/app.js` yuklangan ✅
- [ ] `certificates/` papkasi to'liq ✅
- [ ] GitHub Pages yoqilgan ✅
- [ ] Sayt brauzerda ochiladi ✅

---

*Agar "404 Not Found" chiqsa: Settings → Pages → Branch: main, Folder: / (root) → Save*
