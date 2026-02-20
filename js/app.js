/**
 * HazinaUz - Main Application Controller
 * Telegram WebApp + Full UI Controller
 */

'use strict';

// ============================================================
// TELEGRAM WEBAPP INIT
// ============================================================
const tg = window.Telegram?.WebApp || null;

if (tg) {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#0d0f1a');
    tg.setBackgroundColor('#0d0f1a');
}

// ---- User Data ----
let currentUser = {
    id: null,
    firstName: 'Mehmon',
    lastName: '',
    username: null,
    photoUrl: null,
    languageCode: 'uz'
};

function loadUserFromTelegram() {
    if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const u = tg.initDataUnsafe.user;
        currentUser = {
            id: u.id,
            firstName: u.first_name || 'Foydalanuvchi',
            lastName: u.last_name || '',
            username: u.username || null,
            photoUrl: u.photo_url || null,
            languageCode: u.language_code || 'uz'
        };
    }
}

// ---- Contacts Config (sozlash uchun o'zgartiring) ----
const CONTACTS = {
    helpBot: 'https://t.me/hazina_support_bot',
    adminProfile: 'https://t.me/hazina_admin',
    developerProfile: 'https://t.me/pirmatov010',
    officialChannel: 'https://t.me/hazinauz'
};

// ============================================================
// NAVIGATION
// ============================================================
let currentPage = 'home';

function navigateTo(page) {
    // Deactivate all
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // Activate target
    const targetSection = document.getElementById(`page-${page}`);
    const targetNav = document.getElementById(`nav-${page}`);

    if (targetSection) targetSection.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    currentPage = page;

    // Page-specific init
    if (page === 'home') initHomePage();
    if (page === 'books') initBooksPage();
    if (page === 'quiz') initQuizPage();
    if (page === 'profile') initProfilePage();
}

// ============================================================
// TOAST
// ============================================================
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================================
// HOME PAGE
// ============================================================
let sliderInterval = null;
let sliderIndex = 0;
let sliderBooks = [];

function initHomePage() {
    renderHeroSlider();
    renderCertCarousel();
    renderHomeBooks();
}

// -- Hero Slider --
function renderHeroSlider() {
    const container = document.getElementById('slider-container');
    const dotsWrap = document.getElementById('slider-dots');
    if (!container || !dotsWrap) return;

    sliderBooks = getRandomBooks(5);
    container.innerHTML = '';
    dotsWrap.innerHTML = '';

    sliderBooks.forEach((book, i) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'slider-slide' + (i === 0 ? ' active' : '');
        slide.setAttribute('data-book-id', book.id);

        const bg = getBookBgGradient(book.genre);
        slide.innerHTML = `
      <div class="slide-fallback" style="background:${bg}">
        ${getBookEmoji(book.genre)}
      </div>
      <div class="slide-overlay"></div>
      <div class="slide-info">
        <span class="slide-genre">${book.genre}</span>
        <div class="slide-title">${book.name}</div>
        <div class="slide-author">${book.author} · ${book.year}</div>
      </div>
    `;
        slide.addEventListener('click', () => openBookReader(book));
        container.appendChild(slide);

        // Dot
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsWrap.appendChild(dot);
    });

    sliderIndex = 0;
    startSliderAuto();
}

function getBookEmoji(genre) {
    const map = {
        'Roman': '📚', 'Hikoya': '📖', 'Qissa': '📝',
        'Tarixiy Roman': '🏛️', 'Hikoyalar': '📚',
        'O\'quv Qo\'llanma': '📓', 'She\'rlar': '✍️'
    };
    return map[genre] || '📗';
}

function getBookBgGradient(genre) {
    const map = {
        'Roman': 'linear-gradient(135deg,#1a1440,#2d1b69)',
        'Hikoya': 'linear-gradient(135deg,#0f2744,#1e4d8c)',
        'Qissa': 'linear-gradient(135deg,#1a2e05,#3d6b17)',
        'Tarixiy Roman': 'linear-gradient(135deg,#3d1c00,#7a3700)',
        'O\'quv Qo\'llanma': 'linear-gradient(135deg,#001a1a,#004d4d)',
        'She\'rlar': 'linear-gradient(135deg,#2d0036,#6b0080)'
    };
    return map[genre] || 'linear-gradient(135deg,#131627,#1a1e32)';
}

function goToSlide(idx) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slides.length) return;

    slides[sliderIndex]?.classList.remove('active');
    dots[sliderIndex]?.classList.remove('active');

    sliderIndex = (idx + sliderBooks.length) % sliderBooks.length;

    slides[sliderIndex]?.classList.add('active');
    dots[sliderIndex]?.classList.add('active');
}

function startSliderAuto() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => goToSlide(sliderIndex + 1), 4000);
}

function stopSliderAuto() {
    if (sliderInterval) clearInterval(sliderInterval);
}

// -- Certificate Carousel --
function renderCertCarousel() {
    const carousel = document.getElementById('cert-carousel');
    if (!carousel) return;
    carousel.innerHTML = '';

    Object.entries(CERT_CONFIG).forEach(([key, cert]) => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.innerHTML = `
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-name">${cert.name}</div>
      <div class="cert-count">${cert.levels ? cert.levels.length + ' daraja' : cert.subjects?.length + ' fan'}</div>
    `;
        card.addEventListener('click', () => {
            navigateTo('quiz');
            setTimeout(() => selectCertType(key), 100);
        });
        carousel.appendChild(card);
    });
}

// -- Home Books --
function renderHomeBooks() {
    const grid = document.getElementById('home-books-grid');
    if (!grid) return;

    // Birinchi 6 ta kitob ko'rsatiladi
    const displayBooks = BOOKS_DATA.slice(0, 6);
    grid.innerHTML = displayBooks.map(book => createBookCardHTML(book)).join('');

    // Click events
    grid.querySelectorAll('.book-card').forEach(card => {
        const id = parseInt(card.dataset.bookId);
        card.addEventListener('click', () => openBookReader(getBookById(id)));
    });
}

// ============================================================
// BOOKS PAGE
// ============================================================
let searchDebounce = null;

function initBooksPage() {
    renderGenreTabs();
    renderAllBooks(BOOKS_DATA);
}

function renderGenreTabs() {
    const tabs = document.getElementById('genre-tabs');
    if (!tabs) return;
    const genres = getAllGenres();
    tabs.innerHTML = genres.map(g => `
    <div class="filter-tab ${g === 'Barchasi' ? 'active' : ''}" data-genre="${g}">${g}</div>
  `).join('');

    tabs.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const q = document.getElementById('book-search-input')?.value || '';
            const genre = tab.dataset.genre;
            let results = filterByGenre(genre);
            if (q.trim()) results = results.filter(b =>
                b.name.toLowerCase().includes(q.toLowerCase()) ||
                b.author.toLowerCase().includes(q.toLowerCase())
            );
            renderAllBooks(results);
        });
    });
}

function renderAllBooks(books) {
    const grid = document.getElementById('all-books-grid');
    if (!grid) return;

    if (books.length === 0) {
        grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <div class="no-results-text">Hech qanday natija topilmadi</div>
      </div>`;
        return;
    }

    grid.innerHTML = books.map(b => createBookCardHTML(b)).join('');
    grid.querySelectorAll('.book-card').forEach(card => {
        const id = parseInt(card.dataset.bookId);
        card.addEventListener('click', () => openBookReader(getBookById(id)));
    });
}

function handleBookSearch(query) {
    clearTimeout(searchDebounce);
    const clearBtn = document.getElementById('search-clear');
    if (clearBtn) clearBtn.classList.toggle('visible', query.length > 0);

    searchDebounce = setTimeout(() => {
        const activeGenre = document.querySelector('#genre-tabs .filter-tab.active')?.dataset?.genre || 'Barchasi';
        let results = filterByGenre(activeGenre);
        if (query.trim()) results = results.filter(b =>
            b.name.toLowerCase().includes(query.toLowerCase()) ||
            b.author.toLowerCase().includes(query.toLowerCase())
        );
        renderAllBooks(results);
    }, 300);
}

// ============================================================
// BOOK CARD HTML
// ============================================================
function createBookCardHTML(book) {
    const emoji = getBookEmoji(book.genre);
    const bg = getBookBgGradient(book.genre);
    const hasPreview = book.preview && book.preview.trim() !== '';

    // Rasm bor bo'lsa <img> ko'rsatamiz, aks holda gradient
    const coverHTML = hasPreview
        ? `<img
            class="book-cover"
            src="${book.preview}"
            alt="${book.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
           />
           <div class="book-cover-placeholder" style="background:${bg};display:none">
             ${emoji}<span>${book.name}</span>
           </div>`
        : `<div class="book-cover-placeholder" style="background:${bg}">
             ${emoji}<span>${book.name}</span>
           </div>`;

    return `
    <div class="book-card" data-book-id="${book.id}">
      <div class="book-cover-wrap">
        ${coverHTML}
      </div>
      <div class="book-info">
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-year">${book.year} · ${book.genre}</div>
      </div>
    </div>
  `;
}

// ============================================================
// BOOK READER  (TXT + PDF ikkalasini ham qo'llab-quvvatlaydi)
// ============================================================
let currentReaderBook = null;

async function openBookReader(book) {
    if (!book) { showToast('Kitob topilmadi ❌'); return; }
    currentReaderBook = book;

    const reader = document.getElementById('book-reader');
    const title = document.getElementById('reader-title');
    const loading = document.getElementById('reader-loading');
    const content = document.getElementById('reader-content');
    const iframe = document.getElementById('reader-iframe');

    title.textContent = book.name;
    loading.style.display = 'flex';
    content.style.display = 'none';
    iframe.style.display = 'none';
    content.innerHTML = '';

    reader.classList.add('open');
    stopSliderAuto();
    if (tg) tg.BackButton.show();

    const filePath = book.file || '';
    const isTxt = filePath.toLowerCase().endsWith('.txt');
    const isPdf = filePath.toLowerCase().endsWith('.pdf');

    if (isTxt) {
        // ---- TXT fayl o'qish ----
        try {
            const resp = await fetch(filePath);
            if (!resp.ok) throw new Error('Fayl topilmadi: ' + filePath);
            const text = await resp.text();
            loading.style.display = 'none';
            content.style.display = 'block';
            renderTextContent(content, book, text);
        } catch (err) {
            loading.style.display = 'none';
            content.style.display = 'block';
            content.innerHTML = `
                <div class="txt-error">
                    <div style="font-size:48px">📂</div>
                    <div style="font-size:16px;font-weight:700;color:var(--text-primary)">Fayl topilmadi</div>
                    <div style="font-size:13px;color:var(--text-muted);margin-top:6px">${filePath}</div>
                    <div style="font-size:12px;color:var(--text-muted);margin-top:12px">Kitobni GitHub <code>books/</code> papkasiga qo'ying.</div>
                </div>`;
        }
    } else if (isPdf) {
        // ---- PDF fallback (iframe) ----
        iframe.src = filePath;
        iframe.onload = () => {
            loading.style.display = 'none';
            iframe.style.display = 'block';
        };
        iframe.onerror = () => {
            loading.style.display = 'none';
            const fullUrl = new URL(filePath, location.href).href;
            iframe.src = `https://docs.google.com/viewer?url=${encodeURIComponent(fullUrl)}&embedded=true`;
            iframe.style.display = 'block';
        };
        // Safety timeout
        setTimeout(() => {
            if (loading.style.display !== 'none') {
                loading.style.display = 'none';
                iframe.style.display = 'block';
            }
        }, 5000);
    } else {
        loading.style.display = 'none';
        content.style.display = 'block';
        content.innerHTML = `<div class="txt-error"><div style="font-size:48px">❓</div><div>Fayl formati aniqlanmadi</div></div>`;
    }
}

/** TXT matnini chiroyli formatda ko'rsatadi */
function renderTextContent(container, book, rawText) {
    // Encoding tuzatish (agar UTF-8 emas bo'lsa)
    const lines = rawText
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .split('\n');

    let html = `
        <div class="txt-book-header">
            <div class="txt-book-title">${book.name}</div>
            <div class="txt-book-meta">${book.author} · ${book.year}</div>
            <div class="txt-genre-badge">${book.genre}</div>
        </div>
        <div class="txt-body">`;

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === '') {
            html += '<div class="txt-blank"></div>';
        } else if (/^(BOB|QISM|FASL|CHAPTER|\d+[\-\.\)]\s*[A-ZА-ЯЁA-Z\u0400-\u04FF]{3})/i.test(trimmed)) {
            // Chapter / section heading
            html += `<div class="txt-chapter">${trimmed}</div>`;
        } else {
            html += `<p class="txt-para">${trimmed}</p>`;
        }
    }

    html += '</div>';
    container.innerHTML = html;
}

function closeBookReader() {
    document.getElementById('book-reader').classList.remove('open');
    const iframe = document.getElementById('reader-iframe');
    const content = document.getElementById('reader-content');
    iframe.src = '';
    content.innerHTML = '';
    currentReaderBook = null;
    startSliderAuto();
    if (tg) tg.BackButton.hide();
}

// ============================================================
// QUIZ PAGE
// ============================================================
function initQuizPage() {
    quizState.reset();
    showQuizStep('cert-select');
    renderCertTypeGrid();
}

function showQuizStep(step) {
    // Steps: cert-select | level-select | quiz-area | quiz-result
    const steps = ['cert-select', 'level-select', 'quiz-area', 'quiz-result'];
    steps.forEach(s => {
        const el = document.getElementById(`quiz-step-${s}`);
        if (el) {
            if (s === step) el.classList.add('visible');
            else el.classList.remove('visible');
        }
    });
}

function renderCertTypeGrid() {
    const grid = document.getElementById('cert-type-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(CERT_CONFIG).map(([key, cert]) => `
    <div class="cert-type-btn" id="ctype-${key}" data-cert="${key}">
      <div class="cert-type-icon">${cert.icon}</div>
      <div class="cert-type-name">${cert.name}</div>
      <div style="font-size:11px;color:var(--text-muted);text-align:center;">${cert.description}</div>
    </div>
  `).join('');

    grid.querySelectorAll('.cert-type-btn').forEach(btn => {
        btn.addEventListener('click', () => selectCertType(btn.dataset.cert));
    });
}

function selectCertType(certKey) {
    // Highlight
    document.querySelectorAll('.cert-type-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById(`ctype-${certKey}`)?.classList.add('selected');

    quizState.selectedCert = certKey;
    quizState.selectedSubject = null;
    quizState.selectedLevel = null;

    const cert = CERT_CONFIG[certKey];
    if (!cert) return;

    const imtiyozSubs = document.getElementById('imtiyoz-subjects');
    const levelSel = document.getElementById('level-selector');

    if (certKey === 'Imtiyoz') {
        // Show subject selector
        imtiyozSubs.classList.add('visible');
        levelSel.classList.remove('visible');
        renderSubjectChips(cert.subjects);
    } else {
        imtiyozSubs.classList.remove('visible');
        levelSel.classList.add('visible');
        renderLevelButtons(cert.levels);
    }
}

function renderSubjectChips(subjects) {
    const wrap = document.getElementById('subject-chips');
    if (!wrap) return;

    wrap.innerHTML = subjects.map(s => `
    <div class="subject-chip" data-subject-id="${s.id}">
      ${s.icon} ${s.label}
    </div>
  `).join('');

    wrap.querySelectorAll('.subject-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            wrap.querySelectorAll('.subject-chip').forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            const subjId = chip.dataset.subjectId;
            quizState.selectedSubject = subjId;
            const cert = CERT_CONFIG['Imtiyoz'];
            const subj = cert.subjects.find(s => s.id === subjId);
            if (subj) {
                const levelSel = document.getElementById('level-selector');
                levelSel.classList.add('visible');
                renderLevelButtons(subj.levels);
            }
        });
    });
}

function renderLevelButtons(levels) {
    const list = document.getElementById('level-list');
    if (!list) return;

    list.innerHTML = levels.map(l => `
        <div class="level-btn" data-level-id="${l.id}" data-level-label="${l.label}">
          ${l.label}
        </div>
    `).join('');

    list.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            list.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            // Savollarni to'g'ridan-to'g'ri JS dan olamiz
            const levelId = btn.dataset.levelId;
            const certKey = quizState.selectedCert;
            let questions = null;

            if (certKey === 'Imtiyoz') {
                const cert = QUIZ_DATA['Imtiyoz'];
                const subj = cert.subjects.find(s => s.id === quizState.selectedSubject);
                const level = subj?.levels.find(l => l.id === levelId);
                questions = level?.questions || null;
            } else {
                const cert = QUIZ_DATA[certKey];
                const level = cert?.levels.find(l => l.id === levelId);
                questions = level?.questions || null;
            }

            quizState.selectedLevel = levelId;
            quizState.levelLabel = btn.dataset.levelLabel;
            startQuiz(questions, btn.dataset.levelLabel);
        });
    });
}

function startQuiz(questions, levelLabel) {
    if (!questions || questions.length === 0) {
        showToast("❌ Bu darajada savollar topilmadi.");
        return;
    }

    quizState.questions = questions;
    quizState.userAnswers = {};
    quizState.submitted = false;
    quizState.levelLabel = levelLabel;

    // Natija panelini yashiramiz (avvalgi testdan qolgan bo'lsa)
    document.getElementById('quiz-result-panel')?.classList.remove('visible');

    renderQuizQuestions();
    showQuizStep('quiz-area');

    // Sahifani yuqoriga qaytaramiz
    const quizPage = document.getElementById('page-quiz');
    if (quizPage) quizPage.scrollTop = 0;
    showToast(`✅ ${questions.length} ta savol tayyor!`);
}

function renderQuizQuestions() {
    const wrap = document.getElementById('quiz-questions-wrap');
    const submit = document.getElementById('quiz-submit-btn');
    const progFill = document.getElementById('quiz-progress-fill');
    const progLabel = document.getElementById('quiz-progress-label');

    if (!wrap) return;

    const total = quizState.questions.length;
    progLabel.textContent = `0 / ${total}`;
    progFill.style.width = '0%';

    wrap.innerHTML = quizState.questions.map((q, idx) => `
    <div class="quiz-question-card" id="qcard-${q.num}">
      <div class="quiz-q-num">${idx + 1}-savol</div>
      <div class="quiz-q-text">${q.text}</div>
      <div class="quiz-options" id="qopts-${q.num}">
        ${q.options.map(opt => `
          <div class="quiz-option" data-qnum="${q.num}" data-letter="${opt.letter}">
            <div class="option-letter">${opt.letter}</div>
            <div class="option-text">${opt.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

    // Option click handlers
    wrap.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const qnum = parseInt(opt.dataset.qnum);
            const letter = opt.dataset.letter;

            // Clear previous selection in this question
            document.querySelectorAll(`#qopts-${qnum} .quiz-option`).forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');

            quizState.answer(qnum, letter);

            // Update progress
            const answered = quizState.answeredCount;
            progLabel.textContent = `${answered} / ${total}`;
            progFill.style.width = `${(answered / total) * 100}%`;

            submit.disabled = !quizState.allAnswered;
        });
    });

    submit.disabled = true;
    submit.onclick = () => submitQuiz();
}

function submitQuiz() {
    quizState.submitted = true;
    const result = quizState.calculateResult();

    // Show correct/wrong on each option
    quizState.questions.forEach(q => {
        const userAns = quizState.userAnswers[q.num];
        const correct = q.correctAnswer;

        document.querySelectorAll(`#qopts-${q.num} .quiz-option`).forEach(opt => {
            const letter = opt.dataset.letter;
            opt.classList.remove('selected');
            if (letter === correct) opt.classList.add('correct');
            else if (letter === userAns && userAns !== correct) opt.classList.add('wrong');
        });
    });

    // Show result panel
    showQuizResult(result);
}

function showQuizResult(result) {
    const pct = Math.round((result.correct / result.total) * 100);

    document.getElementById('result-score').textContent = `${pct}%`;
    document.getElementById('result-correct-num').textContent = result.correct;
    document.getElementById('result-wrong-num').textContent = result.wrong;
    document.getElementById('result-total-label').textContent =
        `${result.correct} ta to'g'ri, ${result.wrong} ta xato`;

    let title, emoji;
    if (pct >= 90) { title = "Ajoyib! 🎉"; emoji = "🏆"; }
    else if (pct >= 70) { title = "Yaxshi!"; emoji = "👏"; }
    else if (pct >= 50) { title = "Qoniqarli"; emoji = "📚"; }
    else { title = "Ko'proq mashq qiling!"; emoji = "💪"; }

    document.getElementById('result-title-text').textContent = `${emoji} ${title}`;

    // Scroll to top of quiz area, then show result above
    const quizArea = document.getElementById('quiz-step-quiz-area');
    if (quizArea) quizArea.scrollTop = 0;

    document.getElementById('quiz-result-panel')?.classList.add('visible');
    document.getElementById('page-quiz').scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// PROFILE PAGE
// ============================================================
function initProfilePage() {
    const avatar = document.getElementById('profile-avatar');
    const name = document.getElementById('profile-name');
    const uname = document.getElementById('profile-username');
    const hdrAvatar = document.getElementById('header-avatar');
    const hdrName = document.getElementById('header-name');

    const displayName = currentUser.firstName +
        (currentUser.lastName ? ' ' + currentUser.lastName : '');

    if (avatar) {
        if (currentUser.photoUrl) {
            avatar.innerHTML = `<img src="${currentUser.photoUrl}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" alt="Avatar">`;
        } else {
            avatar.textContent = currentUser.firstName.charAt(0).toUpperCase();
        }
    }

    if (name) name.textContent = displayName;
    if (uname) uname.textContent = currentUser.username ? `@${currentUser.username}` : 'Mehmon';

    if (hdrAvatar) {
        if (currentUser.photoUrl) {
            hdrAvatar.innerHTML = `<img src="${currentUser.photoUrl}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" alt="">`;
        } else {
            hdrAvatar.textContent = currentUser.firstName.charAt(0).toUpperCase();
        }
    }
    if (hdrName) hdrName.textContent = currentUser.firstName;
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Load user data
    loadUserFromTelegram();

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen')?.classList.add('hidden');
        navigateTo('home');
    }, 2000);

    // Nav clicks
    ['home', 'books', 'quiz', 'profile'].forEach(page => {
        document.getElementById(`nav-${page}`)?.addEventListener('click', () => navigateTo(page));
    });

    // Search input
    const searchInput = document.getElementById('book-search-input');
    searchInput?.addEventListener('input', e => handleBookSearch(e.target.value));

    // Search clear
    document.getElementById('search-clear')?.addEventListener('click', () => {
        if (searchInput) {
            searchInput.value = '';
            handleBookSearch('');
        }
    });

    // Slider arrows
    document.getElementById('slider-prev')?.addEventListener('click', (e) => {
        e.stopPropagation();
        stopSliderAuto();
        goToSlide(sliderIndex - 1);
        startSliderAuto();
    });
    document.getElementById('slider-next')?.addEventListener('click', (e) => {
        e.stopPropagation();
        stopSliderAuto();
        goToSlide(sliderIndex + 1);
        startSliderAuto();
    });

    // Book reader back
    document.getElementById('reader-back-btn')?.addEventListener('click', closeBookReader);

    // Profile link buttons
    document.getElementById('btn-help')?.addEventListener('click', () => {
        window.open(CONTACTS.helpBot, '_blank');
    });
    document.getElementById('btn-collab')?.addEventListener('click', () => {
        window.open(CONTACTS.adminProfile, '_blank');
    });
    document.getElementById('btn-dev')?.addEventListener('click', () => {
        window.open(CONTACTS.developerProfile, '_blank');
    });
    document.getElementById('btn-channel')?.addEventListener('click', () => {
        window.open(CONTACTS.officialChannel, '_blank');
    });

    // Quiz: new test button
    document.getElementById('quiz-new-test-btn')?.addEventListener('click', () => {
        document.getElementById('quiz-result-panel')?.classList.remove('visible');
        initQuizPage();
    });

    // Quiz: retry button
    document.getElementById('quiz-retry-btn')?.addEventListener('click', () => {
        document.getElementById('quiz-result-panel')?.classList.remove('visible');
        if (quizState.questions && quizState.questions.length > 0) {
            // Xuddi o'sha savollar bilan qaytadan boshlash
            quizState.userAnswers = {};
            quizState.submitted = false;
            renderQuizQuestions();
            showQuizStep('quiz-area');
            const quizPage = document.getElementById('page-quiz');
            if (quizPage) quizPage.scrollTop = 0;
        } else {
            initQuizPage();
        }
    });

    // See all books
    document.getElementById('home-see-all')?.addEventListener('click', () => navigateTo('books'));

    // Telegram BackButton
    if (tg) {
        tg.BackButton.onClick(() => {
            if (document.getElementById('book-reader').classList.contains('open')) {
                closeBookReader();
            }
        });
    }

    // Auth to backend (if tg data available)
    if (tg && tg.initData) {
        authenticateUser(tg.initData);
    }
});

// ============================================================
// BACKEND AUTH (MyXvest PHP)
// ============================================================
async function authenticateUser(initData) {
    try {
        const response = await fetch('https://YOUR_MYXVEST_DOMAIN/auth.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'auth_data=' + encodeURIComponent(initData)
        });
        const data = await response.json();
        if (data.status === 'success') {
            console.log('✅ Auth OK:', data.user);
        }
    } catch (err) {
        // Offline yoki server yo'q — davom etadi
        console.warn('Auth skipped (offline/no server):', err.message);
    }
}
