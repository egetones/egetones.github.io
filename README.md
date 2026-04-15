# Noir Essence | Premium Parfüm Web Sitesi

![Proje Durumu](https://img.shields.io/badge/Durum-Tamamlandı-success)
![Ders](https://img.shields.io/badge/Ders-Web%20Editörü%20Temelleri-blue)

Bu proje, **Web Editörü Temelleri** dersi final ödevi kapsamında geliştirilmiştir. "Dark Mode" (Koyu Tema) estetiğine sahip, responsive (mobil uyumlu) ve modern bir parfüm markası tanıtım sitesidir.

## 🎯 Proje Hakkında
**Noir Essence**, lüks ve zarafeti temsil eden kurgusal bir parfüm markasıdır. Tasarımda "Petrol Siyahı" ve "Altın" tonları kullanılarak premium bir algı oluşturulması hedeflenmiştir. 

Site; ürünlerin sergilendiği ana sayfa, marka hikayesi ve iletişim formu olmak üzere **3 temel sayfadan** oluşmaktadır.

## 🛠️ Kullanılan Teknolojiler
Bu projede herhangi bir hazır framework (Bootstrap vb.) kullanılmamış, tamamen **Vanilla (Saf)** kod yazılmıştır.

* **HTML5:** Semantik etiket yapısı (header, nav, article, section, footer).
* **CSS3:** * Flexbox ve Grid sistemleri ile sayfa düzeni.
    * CSS Variables (Değişkenler) ile renk yönetimi.
    * Responsive tasarım (@media queries).
* **JavaScript:** Mobil cihazlar için açılır/kapanır (hamburger) menü kontrolü.
* * **Medya Yönetimi:** Proje boyutunu düşük tutmak ve hızlı yükleme sağlamak adına görseller **Unsplash CDN** üzerinden çekilmiştir. Yerel dosya (images klasörü) kullanılmamıştır.

## 📂 Dosya Yapısı
Proje klasörlemesi düzenli ve anlaşılır şekilde yapılandırılmıştır:

```text
parfum-projesi/
│
├── assets/                  # Proje kaynak dosyaları
│   ├── css/
│   │   └── style.css        # Tüm sayfaların stil dosyası
│   ├── js/
│   │   └── script.js        # Mobil menü ve sepet etkileşimleri
│   └── images/              # Ürün ve arka plan görselleri
│       ├── parfum1.jpg
│       ├── parfum2.jpg
│       ├── hero-bg.jpg
│       └── ...
│
├── index.html               # Ana Sayfa (Vitrin)
├── hakkimizda.html          # Marka Hikayesi
├── iletisim.html            # İletişim Formu
├── urun-detay.html          # Ürün Detay Sayfası (Listede var, şemada eksikti)
├── sepet.html               # Sepet Sayfası (Listede var, şemada eksikti)
└── README.md                # Proje dökümantasyonu
Çrş 15 Nis 2026 22:16:40 +03
