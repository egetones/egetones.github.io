// 1. Mobil Menü
const menuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. SEPET SAYAÇ GÜNCELLEME (Global Fonksiyon)
function updateCartCount() {
    // LocalStorage'dan 'sepet' dizisini al, yoksa boş dizi [] kabul et
    const cart = JSON.parse(localStorage.getItem('sepet')) || [];
    
    // Tüm rozetlere (badge) dizinin uzunluğunu yaz
    const badges = document.querySelectorAll(".cart-count");
    badges.forEach(badge => {
        badge.innerText = cart.length;
    });
}

// Sayfa yüklendiğinde sayacı çalıştır
document.addEventListener("DOMContentLoaded", updateCartCount);
