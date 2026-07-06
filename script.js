// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
  // БАГ №6: кнопка нажимается, но ничего не меняется.
  // Этот класс не описан в style.css — посмотри, как там называется тёмная тема.
  document.body.classList.toggle('dark');
});


// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
// (Здесь спрятан БАГ №3 из index.html: id кнопки не совпадает.
//  Открой консоль браузера — F12 → Console — и прочитай ошибку.)
const contactBtn = document.getElementById('contact-btn');
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
  contact.classList.toggle('hidden');
});

let likes = 0;
const likeBtn = document.getElementById('like-btn');
likeBtn.addEventListener("click", function () {
    likes++;
    likeBtn.textContent = `❤️ Нравится (${likes})`;
});