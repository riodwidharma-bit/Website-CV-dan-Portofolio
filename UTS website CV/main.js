// FITUR LIGHTBOX (Klik Gambar untuk Memperbesar)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item img');

// Mendaftarkan fungsi klik ke semua gambar di galeri
galleryItems.forEach(img => {
    img.parentElement.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src; 
        lightboxImg.alt = img.alt;
    });
});

// Menutup lightbox ketika tombol silang (x) diklik
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Menutup lightbox jika pengguna mengklik area luar gambar (area hitam/biru tua transparan)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// 2. ANIMASI FADE-IN SAAT SCROLL (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in');

const appearanceOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -10px 0px"
};

const appearanceOnScroll = new IntersectionObserver(function(entries, appearanceOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; 
        } else {
            entry.target.classList.add('appear'); 
            appearanceOnScroll.unobserve(entry.target);
        }
    });
}, appearanceOptions);

// Daftarkan semua elemen berclass 'fade-in' ke dalam detektor scroll
fadeElements.forEach(element => {
    appearanceOnScroll.observe(element);
});