/**
 * HazinaUz - Quiz Engine
 * Savollar to'g'ridan-to'g'ri JS ichida saqlanadi
 * (fetch kerak emas, file:// va GitHub Pages ikkalasida ishlaydi)
 */

// ============================================================
// SAVOLLAR MA'LUMOTLAR BAZASI
// ============================================================
const QUIZ_DATA = {

    IELTS: {
        name: "IELTS",
        icon: "🇬🇧",
        color: "#4f8ef7",
        description: "International English Language Testing System",
        levels: [
            {
                id: "band5",
                label: "Band 5",
                questions: [
                    {
                        num: 1, text: "What is the capital of England?",
                        options: [
                            { letter: "A", text: "Manchester" },
                            { letter: "B", text: "Liverpool" },
                            { letter: "C", text: "London" },
                            { letter: "D", text: "Birmingham" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 2, text: "Which word is a synonym for \"happy\"?",
                        options: [
                            { letter: "A", text: "Sad" },
                            { letter: "B", text: "Angry" },
                            { letter: "C", text: "Joyful" },
                            { letter: "D", text: "Tired" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 3, text: "Complete the sentence: She ___ to school every day.",
                        options: [
                            { letter: "A", text: "go" },
                            { letter: "B", text: "goes" },
                            { letter: "C", text: "going" },
                            { letter: "D", text: "gone" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 4, text: "How many days are in a week?",
                        options: [
                            { letter: "A", text: "5" },
                            { letter: "B", text: "6" },
                            { letter: "C", text: "8" },
                            { letter: "D", text: "7" }
                        ],
                        correctAnswer: "D"
                    },
                    {
                        num: 5, text: "Which is the largest ocean?",
                        options: [
                            { letter: "A", text: "Atlantic" },
                            { letter: "B", text: "Indian" },
                            { letter: "C", text: "Arctic" },
                            { letter: "D", text: "Pacific" }
                        ],
                        correctAnswer: "D"
                    },
                    {
                        num: 6, text: "Choose the correct spelling:",
                        options: [
                            { letter: "A", text: "Recieve" },
                            { letter: "B", text: "Receive" },
                            { letter: "C", text: "Receve" },
                            { letter: "D", text: "Receeve" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 7, text: "What does \"ancient\" mean?",
                        options: [
                            { letter: "A", text: "Modern" },
                            { letter: "B", text: "Very old" },
                            { letter: "C", text: "New" },
                            { letter: "D", text: "Beautiful" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 8, text: "She has been studying English ___ five years.",
                        options: [
                            { letter: "A", text: "since" },
                            { letter: "B", text: "for" },
                            { letter: "C", text: "from" },
                            { letter: "D", text: "at" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 9, text: "The opposite of \"expensive\" is:",
                        options: [
                            { letter: "A", text: "Cheap" },
                            { letter: "B", text: "Costly" },
                            { letter: "C", text: "Rare" },
                            { letter: "D", text: "Heavy" }
                        ],
                        correctAnswer: "A"
                    },
                    {
                        num: 10, text: "Which sentence is correct?",
                        options: [
                            { letter: "A", text: "He don't like coffee" },
                            { letter: "B", text: "He doesn't likes coffee" },
                            { letter: "C", text: "He doesn't like coffee" },
                            { letter: "D", text: "He not like coffee" }
                        ],
                        correctAnswer: "C"
                    }
                ]
            },
            {
                id: "band6",
                label: "Band 6",
                questions: [
                    {
                        num: 1, text: "The article argued that climate change ___ immediate global action.",
                        options: [
                            { letter: "A", text: "requires" },
                            { letter: "B", text: "required" },
                            { letter: "C", text: "requiring" },
                            { letter: "D", text: "is require" }
                        ],
                        correctAnswer: "A"
                    },
                    {
                        num: 2, text: "Which word best completes: \"Despite the rain, the event proceeded ___\"?",
                        options: [
                            { letter: "A", text: "nonetheless" },
                            { letter: "B", text: "however" },
                            { letter: "C", text: "although" },
                            { letter: "D", text: "despite" }
                        ],
                        correctAnswer: "A"
                    },
                    {
                        num: 3, text: "Identify the correct sentence:",
                        options: [
                            { letter: "A", text: "Had she known, she would came earlier" },
                            { letter: "B", text: "Had she known, she would have come earlier" },
                            { letter: "C", text: "If she had know, she would come earlier" },
                            { letter: "D", text: "She would have came if she knew" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 4, text: "The term \"biodiversity\" refers to:",
                        options: [
                            { letter: "A", text: "Biology diversity in schools" },
                            { letter: "B", text: "Variety of life on Earth" },
                            { letter: "C", text: "A type of chemical reaction" },
                            { letter: "D", text: "Economic diversity" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 5, text: "Choose the word closest in meaning to \"meticulous\":",
                        options: [
                            { letter: "A", text: "Careless" },
                            { letter: "B", text: "Thorough" },
                            { letter: "C", text: "Rapid" },
                            { letter: "D", text: "Relaxed" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 6, text: "Which preposition is correct: \"She is interested ___ learning new languages\"?",
                        options: [
                            { letter: "A", text: "at" },
                            { letter: "B", text: "on" },
                            { letter: "C", text: "in" },
                            { letter: "D", text: "for" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 7, text: "The passive form of \"They built the bridge in 1990\" is:",
                        options: [
                            { letter: "A", text: "The bridge was built in 1990" },
                            { letter: "B", text: "The bridge built in 1990" },
                            { letter: "C", text: "The bridge is built in 1990" },
                            { letter: "D", text: "The bridge were built in 1990" }
                        ],
                        correctAnswer: "A"
                    },
                    {
                        num: 8, text: "\"Albeit\" means:",
                        options: [
                            { letter: "A", text: "Therefore" },
                            { letter: "B", text: "Although" },
                            { letter: "C", text: "Because" },
                            { letter: "D", text: "However" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 9, text: "Choose the correct form: \"He wishes he ___ more time.\"",
                        options: [
                            { letter: "A", text: "has" },
                            { letter: "B", text: "have" },
                            { letter: "C", text: "had" },
                            { letter: "D", text: "will have" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 10, text: "What is the main idea of a paragraph usually found in?",
                        options: [
                            { letter: "A", text: "Last sentence" },
                            { letter: "B", text: "Middle sentence" },
                            { letter: "C", text: "Topic sentence" },
                            { letter: "D", text: "Supporting detail" }
                        ],
                        correctAnswer: "C"
                    }
                ]
            }
        ]
    },

    CEFR: {
        name: "CEFR",
        icon: "🌍",
        color: "#14b8a6",
        description: "Common European Framework of Reference",
        levels: [
            {
                id: "A1",
                label: "A1 — Beginner",
                questions: [
                    {
                        num: 1, text: "My name ___ Ali.",
                        options: [
                            { letter: "A", text: "am" },
                            { letter: "B", text: "is" },
                            { letter: "C", text: "are" },
                            { letter: "D", text: "be" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 2, text: "How ___ you?",
                        options: [
                            { letter: "A", text: "is" },
                            { letter: "B", text: "am" },
                            { letter: "C", text: "are" },
                            { letter: "D", text: "be" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 3, text: "I ___ a student.",
                        options: [
                            { letter: "A", text: "is" },
                            { letter: "B", text: "are" },
                            { letter: "C", text: "am" },
                            { letter: "D", text: "be" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 4, text: "She ___ a teacher.",
                        options: [
                            { letter: "A", text: "am" },
                            { letter: "B", text: "are" },
                            { letter: "C", text: "is" },
                            { letter: "D", text: "be" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 5, text: "They ___ from Uzbekistan.",
                        options: [
                            { letter: "A", text: "is" },
                            { letter: "B", text: "am" },
                            { letter: "C", text: "are" },
                            { letter: "D", text: "be" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 6, text: "___ is your name?",
                        options: [
                            { letter: "A", text: "How" },
                            { letter: "B", text: "Where" },
                            { letter: "C", text: "What" },
                            { letter: "D", text: "Who" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 7, text: "I like ___ football.",
                        options: [
                            { letter: "A", text: "plays" },
                            { letter: "B", text: "played" },
                            { letter: "C", text: "play" },
                            { letter: "D", text: "playing" }
                        ],
                        correctAnswer: "D"
                    },
                    {
                        num: 8, text: "He ___ coffee every morning.",
                        options: [
                            { letter: "A", text: "drink" },
                            { letter: "B", text: "drinks" },
                            { letter: "C", text: "drinking" },
                            { letter: "D", text: "drank" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 9, text: "Where ___ you live?",
                        options: [
                            { letter: "A", text: "does" },
                            { letter: "B", text: "is" },
                            { letter: "C", text: "do" },
                            { letter: "D", text: "are" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 10, text: "This is ___ apple.",
                        options: [
                            { letter: "A", text: "a" },
                            { letter: "B", text: "an" },
                            { letter: "C", text: "the" },
                            { letter: "D", text: "(heч narsasiz)" }
                        ],
                        correctAnswer: "B"
                    }
                ]
            },
            {
                id: "B1",
                label: "B1 — Intermediate",
                questions: [
                    {
                        num: 1, text: "By the time she arrived, they ___ for two hours.",
                        options: [
                            { letter: "A", text: "waited" },
                            { letter: "B", text: "have waited" },
                            { letter: "C", text: "had been waiting" },
                            { letter: "D", text: "were waiting" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 2, text: "I'd rather you ___ smoke here.",
                        options: [
                            { letter: "A", text: "don't" },
                            { letter: "B", text: "didn't" },
                            { letter: "C", text: "wouldn't" },
                            { letter: "D", text: "won't" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 3, text: "She suggested ___ to the cinema.",
                        options: [
                            { letter: "A", text: "to go" },
                            { letter: "B", text: "going" },
                            { letter: "C", text: "go" },
                            { letter: "D", text: "went" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 4, text: "The report must ___ by Friday.",
                        options: [
                            { letter: "A", text: "submit" },
                            { letter: "B", text: "submitting" },
                            { letter: "C", text: "be submitted" },
                            { letter: "D", text: "submitted" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 5, text: "If it ___ tomorrow, we'll cancel the trip.",
                        options: [
                            { letter: "A", text: "rain" },
                            { letter: "B", text: "rains" },
                            { letter: "C", text: "rained" },
                            { letter: "D", text: "will rain" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 6, text: "He's used to ___ early.",
                        options: [
                            { letter: "A", text: "wake" },
                            { letter: "B", text: "waking" },
                            { letter: "C", text: "woke" },
                            { letter: "D", text: "wakes" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 7, text: "The movie was ___ boring that I fell asleep.",
                        options: [
                            { letter: "A", text: "so" },
                            { letter: "B", text: "such" },
                            { letter: "C", text: "very" },
                            { letter: "D", text: "too" }
                        ],
                        correctAnswer: "A"
                    },
                    {
                        num: 8, text: "___ she studied hard, she failed the exam.",
                        options: [
                            { letter: "A", text: "Because" },
                            { letter: "B", text: "Although" },
                            { letter: "C", text: "So" },
                            { letter: "D", text: "Therefore" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 9, text: "Could you tell me where the bank ___?",
                        options: [
                            { letter: "A", text: "is" },
                            { letter: "B", text: "is it" },
                            { letter: "C", text: "it is" },
                            { letter: "D", text: "does it" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 10, text: "They ___ married for 10 years next month.",
                        options: [
                            { letter: "A", text: "will be" },
                            { letter: "B", text: "will have been" },
                            { letter: "C", text: "are" },
                            { letter: "D", text: "have been" }
                        ],
                        correctAnswer: "B"
                    }
                ]
            }
        ]
    },

    TOPIK: {
        name: "TOPIK",
        icon: "🇰🇷",
        color: "#f5c842",
        description: "Test of Proficiency in Korean",
        levels: [
            {
                id: "level1",
                label: "1-Daraja",
                questions: [
                    {
                        num: 1, text: "한국어로 '안녕하세요'의 의미는? (\"Annyeonghaseyo\" nimani anglatadi?)",
                        options: [
                            { letter: "A", text: "Xayr (Goodbye)" },
                            { letter: "B", text: "Rahmat (Thank you)" },
                            { letter: "C", text: "Salom (Hello)" },
                            { letter: "D", text: "Kechirasiz (Sorry)" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 2, text: "한국어로 숫자 '삼(三)'은? (\"Sam\" qaysi raqam?)",
                        options: [
                            { letter: "A", text: "1" },
                            { letter: "B", text: "2" },
                            { letter: "C", text: "3" },
                            { letter: "D", text: "4" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 3, text: "'사과' (sagwa) nima?",
                        options: [
                            { letter: "A", text: "Banan" },
                            { letter: "B", text: "Olma (Apple)" },
                            { letter: "C", text: "Apelsin" },
                            { letter: "D", text: "Uzum" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 4, text: "'학교' (hakkyo) nimani anglatadi?",
                        options: [
                            { letter: "A", text: "Kasalxona" },
                            { letter: "B", text: "Bozor" },
                            { letter: "C", text: "Maktab (School)" },
                            { letter: "D", text: "Kutubxona" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 5, text: "한국어로 '물' (mul) nima?",
                        options: [
                            { letter: "A", text: "Oʻt" },
                            { letter: "B", text: "Shamol" },
                            { letter: "C", text: "Suv (Water)" },
                            { letter: "D", text: "Yer" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 6, text: "Quyidagilardan qaysi biri rang emas? (색깔이 아닌 것은?)",
                        options: [
                            { letter: "A", text: "빨간색 (Qizil)" },
                            { letter: "B", text: "파란색 (Ko'k)" },
                            { letter: "C", text: "학교 (Maktab)" },
                            { letter: "D", text: "노란색 (Sariq)" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 7, text: "'어디에 사세요?' (Eodi-e saseyo?) nimani anglatadi?",
                        options: [
                            { letter: "A", text: "Siz nima qilasiz?" },
                            { letter: "B", text: "Siz qaerda yashaysziz?" },
                            { letter: "C", text: "Yoshingiz nechada?" },
                            { letter: "D", text: "Ismingiz nima?" }
                        ],
                        correctAnswer: "B"
                    },
                    {
                        num: 8, text: "한국어로 '감사합니다' (gamsahamnida) nima?",
                        options: [
                            { letter: "A", text: "Kechirasiz" },
                            { letter: "B", text: "Iltimos" },
                            { letter: "C", text: "Rahmat (Thank you)" },
                            { letter: "D", text: "Yordam bering" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 9, text: "'오늘' (oneul) nimani anglatadi?",
                        options: [
                            { letter: "A", text: "Kecha" },
                            { letter: "B", text: "Ertaga" },
                            { letter: "C", text: "Bugun (Today)" },
                            { letter: "D", text: "Hozir" }
                        ],
                        correctAnswer: "C"
                    },
                    {
                        num: 10, text: "'저는 학생입니다' (Jeoneun haksaengimnida) nimani anglatadi?",
                        options: [
                            { letter: "A", text: "Men o'qituvchiman" },
                            { letter: "B", text: "Men doktorman" },
                            { letter: "C", text: "Men o'quvchiman" },
                            { letter: "D", text: "Men muhandisман" }
                        ],
                        correctAnswer: "C"
                    }
                ]
            }
        ]
    },

    Imtiyoz: {
        name: "Imtiyoz",
        icon: "🏆",
        color: "#8b5cf6",
        description: "O'zbekiston Imtiyoz Olimpiadasi",
        subjects: [
            {
                id: "matematika",
                label: "Matematika",
                icon: "📐",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "2 + 3 × 4 = ?",
                                options: [
                                    { letter: "A", text: "20" },
                                    { letter: "B", text: "14" },
                                    { letter: "C", text: "16" },
                                    { letter: "D", text: "12" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 2, text: "Agar a = 5, b = 3 bo'lsa, a² – b² = ?",
                                options: [
                                    { letter: "A", text: "16" },
                                    { letter: "B", text: "34" },
                                    { letter: "C", text: "4" },
                                    { letter: "D", text: "22" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 3, text: "√144 = ?",
                                options: [
                                    { letter: "A", text: "11" },
                                    { letter: "B", text: "12" },
                                    { letter: "C", text: "13" },
                                    { letter: "D", text: "14" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 4, text: "Teng tomonli uchburchak perimetri 36 sm bo'lsa, bir tomoni necha sm?",
                                options: [
                                    { letter: "A", text: "9" },
                                    { letter: "B", text: "12" },
                                    { letter: "C", text: "6" },
                                    { letter: "D", text: "18" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 5, text: "200 ning 15% i necha?",
                                options: [
                                    { letter: "A", text: "25" },
                                    { letter: "B", text: "30" },
                                    { letter: "C", text: "35" },
                                    { letter: "D", text: "40" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 6, text: "Doira yuzi = π·r². r = 7 bo'lsa, yuzi? (π≈3.14)",
                                options: [
                                    { letter: "A", text: "153.86" },
                                    { letter: "B", text: "43.96" },
                                    { letter: "C", text: "21.98" },
                                    { letter: "D", text: "307.72" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 7, text: "2x + 6 = 14 bo'lsa, x = ?",
                                options: [
                                    { letter: "A", text: "3" },
                                    { letter: "B", text: "4" },
                                    { letter: "C", text: "5" },
                                    { letter: "D", text: "6" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 8, text: "–5 + 12 – 3 = ?",
                                options: [
                                    { letter: "A", text: "2" },
                                    { letter: "B", text: "4" },
                                    { letter: "C", text: "–4" },
                                    { letter: "D", text: "6" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 9, text: "3/4 + 1/4 = ?",
                                options: [
                                    { letter: "A", text: "4/8" },
                                    { letter: "B", text: "1" },
                                    { letter: "C", text: "2/4" },
                                    { letter: "D", text: "3/8" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 10, text: "100 dan 40% ni ayiring:",
                                options: [
                                    { letter: "A", text: "40" },
                                    { letter: "B", text: "50" },
                                    { letter: "C", text: "60" },
                                    { letter: "D", text: "70" }
                                ],
                                correctAnswer: "C"
                            }
                        ]
                    }
                ]
            },
            {
                id: "fizika",
                label: "Fizika",
                icon: "⚛️",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "Yorug'lik tezligi taxminan qancha?",
                                options: [
                                    { letter: "A", text: "200 000 km/s" },
                                    { letter: "B", text: "300 000 km/s" },
                                    { letter: "C", text: "400 000 km/s" },
                                    { letter: "D", text: "100 000 km/s" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 2, text: "F = ma formulasida \"a\" nima?",
                                options: [
                                    { letter: "A", text: "Massa" },
                                    { letter: "B", text: "Kuch" },
                                    { letter: "C", text: "Tezlanish" },
                                    { letter: "D", text: "Tezlik" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 3, text: "1 Joule quyidagilarning qaysiiga teng?",
                                options: [
                                    { letter: "A", text: "1 kg·m/s" },
                                    { letter: "B", text: "1 kg·m²/s²" },
                                    { letter: "C", text: "1 N·m" },
                                    { letter: "D", text: "B va C ikkalasi ham to'g'ri" }
                                ],
                                correctAnswer: "D"
                            },
                            {
                                num: 4, text: "Ketma-ket ulangan R1=4Ω, R2=6Ω. Umumiy qarshilik?",
                                options: [
                                    { letter: "A", text: "2 Ω" },
                                    { letter: "B", text: "24 Ω" },
                                    { letter: "C", text: "10 Ω" },
                                    { letter: "D", text: "1.5 Ω" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 5, text: "Gravitatsion doimiy G ≈ ?",
                                options: [
                                    { letter: "A", text: "9.8 m/s²" },
                                    { letter: "B", text: "6.67×10⁻¹¹ N·m²/kg²" },
                                    { letter: "C", text: "3×10⁸ m/s" },
                                    { letter: "D", text: "1.6×10⁻¹⁹ C" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 6, text: "Atom tuzilishida elektronlar qayerda joylashgan?",
                                options: [
                                    { letter: "A", text: "Yadroda" },
                                    { letter: "B", text: "Proton ichida" },
                                    { letter: "C", text: "Yadro atrofidagi orbitallarda" },
                                    { letter: "D", text: "Neytron ichida" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 7, text: "Issiqlik formulasi:",
                                options: [
                                    { letter: "A", text: "Q = mgt" },
                                    { letter: "B", text: "Q = mcΔT" },
                                    { letter: "C", text: "Q = mgh" },
                                    { letter: "D", text: "Q = mv²/2" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 8, text: "Qaysi hodisa kvant mexanikasi bilan tushuntiriladi?",
                                options: [
                                    { letter: "A", text: "Erkin tushish" },
                                    { letter: "B", text: "Fotoeffekt" },
                                    { letter: "C", text: "Mexanik to'lqin" },
                                    { letter: "D", text: "Suyuqlik oqimi" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 9, text: "Magnit maydoni birligi:",
                                options: [
                                    { letter: "A", text: "Volt" },
                                    { letter: "B", text: "Amper" },
                                    { letter: "C", text: "Tesla" },
                                    { letter: "D", text: "Om" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 10, text: "p = mv formulasida p nima?",
                                options: [
                                    { letter: "A", text: "Quvvat" },
                                    { letter: "B", text: "Impuls" },
                                    { letter: "C", text: "Bosim" },
                                    { letter: "D", text: "Energiya" }
                                ],
                                correctAnswer: "B"
                            }
                        ]
                    }
                ]
            },
            {
                id: "kimyo",
                label: "Kimyo",
                icon: "🧪",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "H₂O nima?",
                                options: [
                                    { letter: "A", text: "Vodorod peroksid" },
                                    { letter: "B", text: "Suv" },
                                    { letter: "C", text: "Natriy xlorid" },
                                    { letter: "D", text: "Kalsiy oksid" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 2, text: "Davriy jadvalda birinchi element:",
                                options: [
                                    { letter: "A", text: "Geliy" },
                                    { letter: "B", text: "Litiy" },
                                    { letter: "C", text: "Vodorod" },
                                    { letter: "D", text: "Uglerod" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 3, text: "NaCl bu nima?",
                                options: [
                                    { letter: "A", text: "Natriy karbonat" },
                                    { letter: "B", text: "Osh tuzi" },
                                    { letter: "C", text: "Soda" },
                                    { letter: "D", text: "Sulfat kislota" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 4, text: "Organik kimyoning asosini tashkil etuvchi element:",
                                options: [
                                    { letter: "A", text: "Kislorod" },
                                    { letter: "B", text: "Azot" },
                                    { letter: "C", text: "Uglerod" },
                                    { letter: "D", text: "Vodorod" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 5, text: "pH = 7 bo'lsa bu qanday muhit?",
                                options: [
                                    { letter: "A", text: "Kislotali" },
                                    { letter: "B", text: "Ishqoriy" },
                                    { letter: "C", text: "Neytral" },
                                    { letter: "D", text: "Oksidlovchi" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 6, text: "CH₄ bu qaysi gaz?",
                                options: [
                                    { letter: "A", text: "Karbonat angidrid" },
                                    { letter: "B", text: "Ammiak" },
                                    { letter: "C", text: "Metan" },
                                    { letter: "D", text: "Etilen" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 7, text: "Elektrolitik dissotsiatsiya bu nima?",
                                options: [
                                    { letter: "A", text: "Metall eritish" },
                                    { letter: "B", text: "Moddaning ionga ajralishi" },
                                    { letter: "C", text: "Benzin bug'lanishi" },
                                    { letter: "D", text: "Qo'shilish reaksiyasi" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 8, text: "Fe bu qaysi element?",
                                options: [
                                    { letter: "A", text: "Florin" },
                                    { letter: "B", text: "Fransiy" },
                                    { letter: "C", text: "Temir" },
                                    { letter: "D", text: "Fosfor" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 9, text: "Reaksiya tezligiga ta'sir etuvchi omil:",
                                options: [
                                    { letter: "A", text: "Idish shakli" },
                                    { letter: "B", text: "Temperatura" },
                                    { letter: "C", text: "Moddaning rangi" },
                                    { letter: "D", text: "Idish materiali" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 10, text: "H₂SO₄ nima?",
                                options: [
                                    { letter: "A", text: "Xlorid kislota" },
                                    { letter: "B", text: "Azot kislota" },
                                    { letter: "C", text: "Sulfat kislota" },
                                    { letter: "D", text: "Fosfor kislota" }
                                ],
                                correctAnswer: "C"
                            }
                        ]
                    }
                ]
            },
            {
                id: "biologiya",
                label: "Biologiya",
                icon: "🌿",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "Hujayraning energiya markazi:",
                                options: [
                                    { letter: "A", text: "Yadro" },
                                    { letter: "B", text: "Mitoxondriya" },
                                    { letter: "C", text: "Ribosoma" },
                                    { letter: "D", text: "Vakuola" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 2, text: "Fotosintez qayerda sodir bo'ladi?",
                                options: [
                                    { letter: "A", text: "Mitoxondriya" },
                                    { letter: "B", text: "Yadro" },
                                    { letter: "C", text: "Xloroplast" },
                                    { letter: "D", text: "Sitoplazma" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 3, text: "DNK — bu nima?",
                                options: [
                                    { letter: "A", text: "Ribonuklein kislota" },
                                    { letter: "B", text: "Dezoksiribonuklein kislota" },
                                    { letter: "C", text: "Aminokislota" },
                                    { letter: "D", text: "Ferment" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 4, text: "Qon guruhlarini kim kashf etdi?",
                                options: [
                                    { letter: "A", text: "Darvin" },
                                    { letter: "B", text: "Mendel" },
                                    { letter: "C", text: "Landshteyner" },
                                    { letter: "D", text: "Paster" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 5, text: "O'simliklar fotosintezda qaysi gaz chiqaradi?",
                                options: [
                                    { letter: "A", text: "CO₂" },
                                    { letter: "B", text: "N₂" },
                                    { letter: "C", text: "O₂" },
                                    { letter: "D", text: "H₂" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 6, text: "Katta yoshli inson tanasida nechta suyak bor?",
                                options: [
                                    { letter: "A", text: "187" },
                                    { letter: "B", text: "206" },
                                    { letter: "C", text: "215" },
                                    { letter: "D", text: "223" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 7, text: "Viruslar haqida noto'g'ri fikr:",
                                options: [
                                    { letter: "A", text: "Hujayra tuzilishiga ega emas" },
                                    { letter: "B", text: "Faqat tirik hujayrada ko'payadi" },
                                    { letter: "C", text: "Hujayradan tashqarida tirik emas" },
                                    { letter: "D", text: "O'z-o'zidan ko'payadi" }
                                ],
                                correctAnswer: "D"
                            },
                            {
                                num: 8, text: "Insulin qaysi organ ishlab chiqaradi?",
                                options: [
                                    { letter: "A", text: "Jigar" },
                                    { letter: "B", text: "Taloq" },
                                    { letter: "C", text: "Me'da osti bezi" },
                                    { letter: "D", text: "Buyrak" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 9, text: "Ekologiyaning asoschisi:",
                                options: [
                                    { letter: "A", text: "Haeckel" },
                                    { letter: "B", text: "Darwin" },
                                    { letter: "C", text: "Linney" },
                                    { letter: "D", text: "Mendel" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 10, text: "Irsiyatni o'rganuvchi fan:",
                                options: [
                                    { letter: "A", text: "Ekologiya" },
                                    { letter: "B", text: "Sitologiya" },
                                    { letter: "C", text: "Genetika" },
                                    { letter: "D", text: "Embriologiya" }
                                ],
                                correctAnswer: "C"
                            }
                        ]
                    }
                ]
            },
            {
                id: "tarix",
                label: "Tarix",
                icon: "📜",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "O'zbekiston mustaqilligini qachon qo'lga kiritdi?",
                                options: [
                                    { letter: "A", text: "1990-yil 20-iyun" },
                                    { letter: "B", text: "1991-yil 1-sentabr" },
                                    { letter: "C", text: "1991-yil 31-avgust" },
                                    { letter: "D", text: "1992-yil 8-dekabr" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 2, text: "O'zbekistonning poytaxti:",
                                options: [
                                    { letter: "A", text: "Samarqand" },
                                    { letter: "B", text: "Buxoro" },
                                    { letter: "C", text: "Toshkent" },
                                    { letter: "D", text: "Farg'ona" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 3, text: "Amir Temur qaysi yillarda hukmronlik qildi?",
                                options: [
                                    { letter: "A", text: "1370–1405" },
                                    { letter: "B", text: "1336–1405" },
                                    { letter: "C", text: "1350–1400" },
                                    { letter: "D", text: "1380–1420" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 4, text: "\"Boburnoma\" kim tomonidan yozilgan?",
                                options: [
                                    { letter: "A", text: "Ulug'bek" },
                                    { letter: "B", text: "Alisher Navoiy" },
                                    { letter: "C", text: "Zahiriddin Muhammad Bobur" },
                                    { letter: "D", text: "Ibn Sino" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 5, text: "Birinchi jahon urushi qachon boshlandi?",
                                options: [
                                    { letter: "A", text: "1912" },
                                    { letter: "B", text: "1913" },
                                    { letter: "C", text: "1914" },
                                    { letter: "D", text: "1915" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 6, text: "Ikkinchi jahon urushi qachon tugadi?",
                                options: [
                                    { letter: "A", text: "1944" },
                                    { letter: "B", text: "1945" },
                                    { letter: "C", text: "1946" },
                                    { letter: "D", text: "1947" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 7, text: "Buyuk ipak yo'li qaysi ikki hudud o'rtasida bo'lgan?",
                                options: [
                                    { letter: "A", text: "Yevropa va Afrika" },
                                    { letter: "B", text: "Xitoy va O'rta dengiz" },
                                    { letter: "C", text: "Hindiston va Arabiston" },
                                    { letter: "D", text: "Rossiya va Xitoy" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 8, text: "Ibn Sino kim edi?",
                                options: [
                                    { letter: "A", text: "Shoir" },
                                    { letter: "B", text: "Matematik" },
                                    { letter: "C", text: "Tabib va faylasuf" },
                                    { letter: "D", text: "Tarixchi" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 9, text: "O'zbekistonda prezidentlik tizimi qachon joriy etildi?",
                                options: [
                                    { letter: "A", text: "1990" },
                                    { letter: "B", text: "1991" },
                                    { letter: "C", text: "1992" },
                                    { letter: "D", text: "1993" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 10, text: "Alisher Navoiy asosan qaysi tilda yozgan?",
                                options: [
                                    { letter: "A", text: "Arab tili" },
                                    { letter: "B", text: "Fors tili" },
                                    { letter: "C", text: "Eski o'zbek (chig'atoy) tili" },
                                    { letter: "D", text: "Turk tili" }
                                ],
                                correctAnswer: "C"
                            }
                        ]
                    }
                ]
            },
            {
                id: "ona_tili",
                label: "Ona tili",
                icon: "📖",
                levels: [
                    {
                        id: "asosiy",
                        label: "Asosiy daraja",
                        questions: [
                            {
                                num: 1, text: "Alisher Navoiyning to'liq ismi:",
                                options: [
                                    { letter: "A", text: "Nizomiddin Mir Alisher" },
                                    { letter: "B", text: "Alisher Husayn Navoiy" },
                                    { letter: "C", text: "Mirzo Alisher Navoiy" },
                                    { letter: "D", text: "Alisher Muhammad Navoiy" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 2, text: "\"Kecha va Kunduz\" romani muallifi:",
                                options: [
                                    { letter: "A", text: "Abdulla Qodiriy" },
                                    { letter: "B", text: "Cho'lpon" },
                                    { letter: "C", text: "Oybek" },
                                    { letter: "D", text: "G'afur G'ulom" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 3, text: "O'zbek tilida nechta unli fonem mavjud?",
                                options: [
                                    { letter: "A", text: "5" },
                                    { letter: "B", text: "6" },
                                    { letter: "C", text: "8" },
                                    { letter: "D", text: "10" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 4, text: "\"Mehrobdan Chayon\" romanini kim yozgan?",
                                options: [
                                    { letter: "A", text: "Oybek" },
                                    { letter: "B", text: "Said Ahmad" },
                                    { letter: "C", text: "Abdulla Qodiriy" },
                                    { letter: "D", text: "Erkin Vohidov" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 5, text: "Quyidagi so'zlardan qaysi biri ism?",
                                options: [
                                    { letter: "A", text: "Yugurmoq" },
                                    { letter: "B", text: "Chiroyli" },
                                    { letter: "C", text: "Kitob" },
                                    { letter: "D", text: "Tez" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 6, text: "\"Biz\" olmoshi qaysi shaxsga tegishli?",
                                options: [
                                    { letter: "A", text: "I shaxs, ko'plik" },
                                    { letter: "B", text: "II shaxs, birlik" },
                                    { letter: "C", text: "III shaxs, ko'plik" },
                                    { letter: "D", text: "I shaxs, birlik" }
                                ],
                                correctAnswer: "A"
                            },
                            {
                                num: 7, text: "Fe'lning noaniq shakli qanday tugaydi?",
                                options: [
                                    { letter: "A", text: "-di" },
                                    { letter: "B", text: "-moq" },
                                    { letter: "C", text: "-adi" },
                                    { letter: "D", text: "-lar" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 8, text: "\"Ulug'bek\" so'zida nechta harf bor?",
                                options: [
                                    { letter: "A", text: "6" },
                                    { letter: "B", text: "7" },
                                    { letter: "C", text: "8" },
                                    { letter: "D", text: "5" }
                                ],
                                correctAnswer: "B"
                            },
                            {
                                num: 9, text: "Antonim juftini toping:",
                                options: [
                                    { letter: "A", text: "Katta — Ulkan" },
                                    { letter: "B", text: "Tez — Shoshqaloq" },
                                    { letter: "C", text: "Baland — Past" },
                                    { letter: "D", text: "Go'zal — Chiroyli" }
                                ],
                                correctAnswer: "C"
                            },
                            {
                                num: 10, text: "O'zbek yozuvi hozir qaysi alifboda?",
                                options: [
                                    { letter: "A", text: "Arab alifbosi" },
                                    { letter: "B", text: "Kirill alifbosi" },
                                    { letter: "C", text: "Lotin alifbosi" },
                                    { letter: "D", text: "Grek alifbosi" }
                                ],
                                correctAnswer: "C"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// ============================================================
// CERT_CONFIG — app.js bilan muvofiqlashgan
// ============================================================
const CERT_CONFIG = QUIZ_DATA;

// ============================================================
// QUIZ STATE MANAGER
// ============================================================
class QuizState {
    constructor() { this.reset(); }

    reset() {
        this.selectedCert = null;
        this.selectedSubject = null;
        this.selectedLevel = null;
        this.questions = [];
        this.userAnswers = {};
        this.submitted = false;
        this.filePath = null;
        this.levelLabel = null;
    }

    get totalQuestions() { return this.questions.length; }
    get answeredCount() { return Object.keys(this.userAnswers).length; }
    get allAnswered() { return this.answeredCount === this.totalQuestions && this.totalQuestions > 0; }

    answer(qNum, letter) {
        if (!this.submitted) this.userAnswers[qNum] = letter;
    }

    calculateResult() {
        let correct = 0, wrong = 0;
        for (const q of this.questions) {
            const ans = this.userAnswers[q.num];
            if (ans === q.correctAnswer) correct++;
            else wrong++;
        }
        return { correct, wrong, total: this.totalQuestions };
    }
}

const quizState = new QuizState();

// loadQuizFile → endi kerak emas, lekin app.js ni buzmaSlik uchun saqlaymiz
async function loadQuizFile(filePath) {
    console.warn('loadQuizFile chaqirildi, lekin endi JS data ishlatiladi');
    return null;
}
