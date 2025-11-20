// 1. Mobil Menü Açma/Kapama
const menuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. SEPET HAFIZASI (LocalStorage)
// Sayfa her yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", () => {
    // Hafızadan sayıyı al, yoksa 0 kabul et
    const savedCount = localStorage.getItem("sepetSayisi") || 0;
    
    // Tüm sepet ikonlarına bu sayıyı yaz (Hem mobilde hem masaüstünde varsa)
    const badges = document.querySelectorAll(".cart-count");
    badges.forEach(badge => {
        badge.innerText = savedCount;
    });
});
