# Email Template Generator - Kullanım Kılavuzu

## Yapılan Değişiklikler

### 1. Yeni Dosya: `email-generator.js`
Bu JavaScript dosyası, test sonuçlarını email-template.html formatında yeni sekmede açmak için oluşturuldu.

**Özellikler:**
- LocalStorage'dan kullanıcı ve test sonuçlarını okur
- email-template.html dosyasını fetch API ile alır
- Template içindeki tüm placeholder'ları (örn: [Ad Soyad], [XX], [YY]) gerçek verilerle değiştirir
- Doldurulmuş template'i yeni sekmede/pencerede açar

**Fonksiyonlar:**
- `generateAndOpenEmailTemplate()` - Ana fonksiyon, email template'i oluşturur ve açar
- `determineLevel(score)` - Toplam puana göre seviyeyi belirler (Çırak/Usta/Lider)
- `getFeedbackLevel(score)` - Boyut skoruna göre geri bildirim seviyesini belirler (high/medium/low)

### 2. Güncelleme: `sonuc.html`
Sonuç sayfasına email template generator entegre edildi.

**Değişiklikler:**
1. `email-generator.js` script'i head bölümüne eklendi (satır 10)
2. Yeni buton eklendi: "Email Formatında Aç" (satır 543)
   - Yeşil gradient renk ile diğer butondan ayrıştırıldı
   - `onclick="generateAndOpenEmailTemplate()` ile fonksiyona bağlandı

## Nasıl Kullanılır?

### 1. Test Akışı
1. Kullanıcı `index.html` sayfasında form doldurur (Ad, Soyad, Email, Şirket, Telefon)
2. "Değerlendirmeye Başla" butonuna tıklar
3. `test.html` sayfasında testi tamamlar
4. Test bitince `sonuc.html` sayfasına yönlendirilir

### 2. Email Template'i Açma
`sonuc.html` sayfasında:
1. Test sonuçlarını görüntüler (radar chart, boyut skorları, seviye badge'i)
2. "Email Formatında Aç" butonuna tıklar
3. Yeni sekmede email-template.html formatında sonuçlar açılır
   - Tüm placeholder'lar gerçek verilerle doldurulmuştur
   - Kullanıcı adı, email, şirket, tarih
   - Toplam skor ve seviye
   - 5 boyut skoru ve geri bildirimleri

### 3. Template Değiştirmeleri
Email template'de değiştirilen placeholder'lar:

**Temel Bilgiler:**
- `[Ad Soyad]` → Kullanıcının tam adı
- `[Kullanıcı Ad Soyad]` → Kullanıcının tam adı (tekrar)
- `[email@sirket.com]` → Kullanıcının email adresi
- `[Şirket Adı]` → Kullanıcının şirketi
- `[3 Kasım 2025]` → Test tamamlanma tarihi

**Skorlar:**
- `[XX]` → Toplam skor (0-100)
- `[ALGORİTMİK LİDER]` → Seviye badge'i (ÇIRAK/USTA/LİDER)
- `[YY]/20` → Şeffaflık boyutu skoru
- Progress bar genişlikleri → Her boyutun yüzdelik değeri

**Geri Bildirimler:**
- `[15-20 PUAN]` → Skor aralığı
- `[Geri bildirim metni buraya gelecek]` → İlgili seviyeye göre geri bildirim

**İletişim:**
- `[email@forenzone.com]` → info@forenzone.com
- `[www.forenzone.com]` → www.forenzone.com

## Teknik Detaylar

### LocalStorage Kullanımı
```javascript
// Kullanıcı verileri
{
  firstName: "Ahmet",
  lastName: "Yılmaz",
  email: "ahmet@sirket.com",
  company: "ABC Şirketi",
  phone: "0555 123 45 67",
  startTime: "2025-01-04T10:30:00.000Z"
}

// Test sonuçları
{
  totalScore: 75,
  dimensionScores: {
    transparency: 18,
    fairness: 15,
    balance: 16,
    sustainability: 14,
    data: 12
  },
  completionTime: "2025-01-04T10:45:00.000Z"
}
```

### Seviye Belirleme
- **0-40 puan:** Algoritmik Çırak (Sarı gradient)
- **41-70 puan:** Algoritmik Usta Adayı (Mor gradient)
- **71-100 puan:** Algoritmik Lider (Altın gradient)

### Boyut Geri Bildirim Seviyeleri
Her boyut 20 puan üzerinden değerlendirilir:
- **15-20 puan:** Yüksek (High) - Güçlü farkındalık
- **8-14 puan:** Orta (Medium) - Gelişim alanları var
- **0-7 puan:** Düşük (Low) - Derinlemesine çalışma gerekli

## Tarayıcı Desteği
- Chrome, Firefox, Safari, Edge (modern versiyonlar)
- Pop-up engelleyici kapalı olmalı (yeni sekme açılabilmesi için)
- JavaScript aktif olmalı

## Sorun Giderme

### Pop-up Engelleyici Sorunu
Eğer yeni sekme açılmıyorsa:
1. Tarayıcının pop-up engelleyicisini kontrol edin
2. Site için pop-up'lara izin verin
3. Alternatif: Email template'i blob URL olarak oluşturup indirme linki sunabilirsiniz

### LocalStorage Boş
Eğer "Test sonuçları bulunamadı" hatası alıyorsanız:
1. Testi baştan tamamlayın
2. localStorage.clear() ile temizleyip tekrar deneyin

### Template Yüklenmiyor
Email-template.html fetch edilemiyorsa:
1. Dosyanın aynı klasörde olduğundan emin olun
2. CORS hatası varsa local server kullanın (npm run dev)

## Geliştirme Notları

### Gelecek Özellikler
- [ ] PDF olarak indirme özelliği
- [ ] Email göndermeden önce önizleme
- [ ] Sonuçları paylaşma linki oluşturma
- [ ] Özel branding seçenekleri

### Bilinen Sınırlamalar
- Email template sadece statik HTML olarak açılır (interaktif değil)
- Chart.js grafikleri email'de gösterilmez (static HTML)
- Print/PDF export için ekstra kütüphane gerekebilir

## Lisans ve İletişim
Bu proje RG Bilişim tarafından geliştirilmiştir.
HPE & NVIDIA & Forenzone ortaklığında sunulmaktadır.

---
Son güncelleme: 4 Ocak 2025