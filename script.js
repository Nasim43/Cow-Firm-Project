// Mobile navigation menu
const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu');
if (menuBtn && nav) { menuBtn.addEventListener('click', () => nav.classList.toggle('open')); }

// Close menu after selecting a section
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

// Current year in footer
const footer = document.querySelector('footer .container');
if (footer) footer.innerHTML = footer.innerHTML.replace('2026', new Date().getFullYear());

// Change this placeholder to your real WhatsApp number, international format, no plus sign.
// Bangladesh example: 8801XXXXXXXXX
const whatsappNumber = '8801XXXXXXXXX';
const whatsappLink = document.querySelector('a[href*="wa.me"]');
if (whatsappLink && !whatsappNumber.includes('X')) {
  whatsappLink.href = `https://wa.me/${whatsappNumber}`;
}
