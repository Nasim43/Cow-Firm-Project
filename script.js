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
/* ==========================
   SOFTWARE DOWNLOAD SECTION
========================== */

.software-card {
    width: 100%;
    max-width: 410px;
    min-height: 410px;
    padding: 32px 28px;
    border-radius: 28px;

    background: linear-gradient(
        145deg,
        #ffffff,
        #eaf4dc
    );

    color: #174b35;
    text-align: center;

    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.20);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: transform 0.3s ease,
                box-shadow 0.3s ease;
}

.software-card:hover {
    transform: translateY(-6px);

    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
}

/* Software icon */

.software-icon {
    width: 85px;
    height: 85px;

    display: grid;
    place-items: center;

    border-radius: 24px;

    background: #174b35;
    color: white;

    font-size: 42px;

    margin-bottom: 18px;
}

/* Badge */

.software-badge {
    background: #e0efbd;
    color: #286746;

    padding: 6px 15px;
    border-radius: 50px;

    font-size: 14px;
    font-weight: 600;

    margin-bottom: 12px;
}

/* Heading */

.software-card h2 {
    font-size: 27px;
    line-height: 1.3;

    margin: 5px 0 12px;

    color: #174b35;
}

/* Description */

.software-card p {
    font-size: 15px;
    line-height: 1.8;

    color: #52675a;

    margin: 0 0 18px;
}

/* Features */

.software-features {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 8px;

    margin-bottom: 22px;
}

.software-features span {
    background: #f3f7eb;

    border: 1px solid #dce8cf;

    padding: 6px 11px;
    border-radius: 9px;

    font-size: 13px;
}

/* Download button */

.software-download {
    width: 100%;

    display: inline-block;

    background: #b7d66b;
    color: #17351f;

    padding: 14px 16px;

    border-radius: 13px;

    font-size: 16px;
    font-weight: 700;

    text-decoration: none;

    transition: 0.25s;
}

.software-download:hover {
    background: #a6ca53;

    transform: scale(1.02);
}

/* Bottom text */

.software-card small {
    margin-top: 14px;

    font-size: 12px;

    color: #718173;
}

/* Mobile responsive */

@media (max-width: 800px) {

    .software-card {
        max-width: 400px;
        min-height: auto;

        margin: 0 auto;
    }

}

@media (max-width: 520px) {

    .software-card {
        padding: 25px 20px;
        border-radius: 22px;
    }

    .software-card h2 {
        font-size: 23px;
    }

    .software-download {
        font-size: 15px;
    }
.download-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    color: white;
    border: 1px solid rgba(255,255,255,0.85);
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}

.download-btn:hover {
    background: rgba(255,255,255,0.12);
    border-color: white;
}


}
