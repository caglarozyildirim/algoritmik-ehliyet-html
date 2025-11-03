# Algoritmik Ehliyet - Otomatik Email Gönderme Kurulumu

Bu dokümantasyon, anket tamamlandığında otomatik email gönderme sisteminin nasıl kurulacağını ve kullanılacağını açıklar.

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Gmail hesabı (veya başka bir SMTP servisi)

## 🚀 Kurulum Adımları

### 1. Bağımlılıkları Yükleyin

```bash
cd /Users/caglarozyildirim/Desktop/Şirketler/algoritmik-ehliyet-html
npm install
```

Bu komut şu paketleri yükleyecek:
- express (Web server)
- nodemailer (Email gönderme)
- cors (Cross-origin istekleri için)

### 2. Gmail App Password Oluşturun

Gmail kullanıyorsanız, App Password oluşturmanız gerekiyor:

1. Google Hesabınıza gidin: https://myaccount.google.com/
2. "Güvenlik" sekmesine tıklayın
3. "İki adımlı doğrulama"yı aktif edin (eğer aktif değilse)
4. "Uygulama şifreleri" (App passwords) bölümüne gidin
5. "E-posta" için yeni bir uygulama şifresi oluşturun
6. Oluşturulan 16 haneli şifreyi kopyalayın

### 3. SMTP Ayarlarını Yapılandırın

`server.js` dosyasını açın ve aşağıdaki kısmı düzenleyin:

```javascript
const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@gmail.com',     // BURAYA KENDİ EMAİL ADRESİNİZİ YAZIN
        pass: 'your-app-password'         // BURAYA GMAIL APP PASSWORD YAZIN
    }
});
```

**Önemli:**
- `user`: Gmail adresiniz
- `pass`: Yukarıda oluşturduğunuz 16 haneli App Password

### 4. Alıcı Email Adreslerini Ayarlayın

`server.js` dosyasında mail gönderme kısmını kontrol edin:

```javascript
const mailOptions = {
    from: '"Algoritmik Ehliyet Değerlendirmesi" <your-email@gmail.com>',
    to: `${userData.email}, caglar@rgbilisim.com`,  // Kullanıcı + sizin mailiniz
    subject: `🎯 Algoritmik Ehliyet Değerlendirme Sonuçlarınız - ${userData.firstName} ${userData.lastName}`,
    html: emailHTML
};
```

`to` kısmında:
- `${userData.email}`: Anketi dolduran kullanıcının emaili (otomatik)
- `caglar@rgbilisim.com`: Sizin email adresiniz (değiştirilebilir)

## 🏃 Çalıştırma

### Sunucuyu Başlatın

```bash
npm start
```

veya geliştirme modunda (otomatik yeniden başlatma ile):

```bash
npm run dev
```

Sunucu çalıştığında şu mesajı göreceksiniz:

```
╔═══════════════════════════════════════════════════════════╗
║   Algoritmik Ehliyet - Email Servisi Çalışıyor!         ║
╠═══════════════════════════════════════════════════════════╣
║   Port: 3000                                              ║
║   URL: http://localhost:3000                             ║
║                                                           ║
║   ÖNEMLI: SMTP ayarlarını server.js'de düzenleyin!      ║
║   - Gmail kullanıyorsanız App Password oluşturun        ║
║   - İki faktörlü doğrulama aktif olmalı                 ║
╚═══════════════════════════════════════════════════════════╝
```

### HTML Dosyalarını Açın

1. Sunucu çalışırken tarayıcınızda şu adresi açın:
   ```
   http://localhost:3000/index.html
   ```

2. Anketi doldurun ve tamamlayın

3. Sonuç sayfasında (sonuc.html) otomatik olarak:
   - Sayfa yüklendikten 2 saniye sonra email gönderilir
   - Başarılı ise sağ alt köşede yeşil bildirim görünür
   - Hata varsa kırmızı bildirim görünür

## 📧 Email Template Özelleştirme

Email içeriğini özelleştirmek için `email-template.html` dosyasını düzenleyin.

Dinamik veriler `server.js`'de şu şekilde doldurulur:
- `[Ad Soyad]` → Kullanıcının tam adı
- `[XX]` → Toplam puan
- `[ALGORİTMİK LİDER]` → Seviye badge'i
- `[email@sirket.com]` → Kullanıcının emaili
- vb.

## 🔧 Sorun Giderme

### Email Gönderilmiyor

1. **SMTP Bilgilerini Kontrol Edin:**
   - Gmail App Password doğru mu?
   - İki faktörlü doğrulama aktif mi?

2. **Sunucu Çalışıyor mu?**
   ```bash
   # Terminal'de kontrol edin
   curl http://localhost:3000
   ```

3. **Console'da Hata Mesajı:**
   - Tarayıcıda F12 tuşuna basın
   - Console sekmesine bakın
   - Hata mesajlarını kontrol edin

4. **CORS Hatası:**
   - Dosyaları `http://localhost:3000` üzerinden açtığınızdan emin olun
   - Doğrudan dosya yolundan (file://) açmayın

### Port Kullanımda Hatası

Eğer 3000 portu kullanılıyorsa, `server.js`'de farklı bir port seçin:

```javascript
const PORT = 3001; // veya başka bir port
```

### Gmail "Daha Az Güvenli Uygulamalar" Hatası

Modern Gmail hesapları için App Password kullanmanız şarttır. Normal şifre ile çalışmaz.

## 📝 Başka SMTP Servisleri

Gmail dışında başka servisler de kullanabilirsiniz:

### Outlook/Hotmail

```javascript
const transporter = nodemailer.createTransporter({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@outlook.com',
        pass: 'your-password'
    }
});
```

### Yandex

```javascript
const transporter = nodemailer.createTransporter({
    host: 'smtp.yandex.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@yandex.com',
        pass: 'your-password'
    }
});
```

### SendGrid / Mailgun / AWS SES

Profesyonel projelerde bu servisleri kullanmanız önerilir.

## 🎯 Özellikler

✅ **Otomatik Email Gönderme:** Sonuç sayfası yüklendiğinde otomatik gönderim
✅ **Dinamik Template:** Kullanıcı verilerine göre özelleştirilmiş email
✅ **Çoklu Alıcı:** Hem kullanıcıya hem de admin'e gönderim
✅ **Bildirim Sistemi:** Başarılı/başarısız durumlar için kullanıcı bildirimi
✅ **Responsive Email:** Tüm email istemcilerinde düzgün görünüm
✅ **Detaylı Raporlama:** 5 boyut üzerinden detaylı analiz

## 📞 Destek

Herhangi bir sorunuz varsa:
- Email: caglar@rgbilisim.com
- Dosya konumu: `/Users/caglarozyildirim/Desktop/Şirketler/algoritmik-ehliyet-html/`

## 🔐 Güvenlik Notları

⚠️ **ÖNEMLİ:**
- `server.js` dosyasındaki email ve şifre bilgilerini asla paylaşmayın
- Projeyi GitHub'a yüklerken `.gitignore` dosyasına `server.js` veya `.env` ekleyin
- Production ortamında environment variables kullanın

## 📦 Dosya Yapısı

```
algoritmik-ehliyet-html/
│
├── index.html              # Ana form sayfası
├── test.html              # Test soruları
├── sonuc.html             # Sonuç sayfası (email tetikleyici)
├── email-template.html    # Email şablonu
├── server.js              # Backend email servisi
├── package.json           # Node.js bağımlılıkları
└── README_EMAIL_SETUP.md  # Bu dosya
```

---

**Hazırlayan:** RG Bilişim
**Tarih:** Kasım 2025
**Versiyon:** 1.0.0