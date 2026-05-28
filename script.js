const facts = [
    "Алматы был столицей Казахстана до 1997 года.",
    "Название города переводится как «Яблоневый».",
    "Здесь находится самая высокая телебашня в мире (относительно уровня моря) — Кок-Тобе.",
    "Знаменитый сорт яблок «Апорт» родом именно из Алматы.",
    "Алматинское метро — единственное в Казахстане."
];

let currentFactIndex = 0;

const factText = document.getElementById('fact-text');
const nextFactBtn = document.getElementById('next-fact-btn');

nextFactBtn.addEventListener('click', () => {
    currentFactIndex++;
    
    // Если факты закончились, начинаем сначала
    if (currentFactIndex >= facts.length) {
        currentFactIndex = 0;
    }
    
    // Плавная смена текста
    factText.style.opacity = 0;
    setTimeout(() => {
        factText.textContent = facts[currentFactIndex];
        factText.style.opacity = 1;
    }, 200);
});
