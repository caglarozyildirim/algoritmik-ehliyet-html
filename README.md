# 🎯 Algoritmik Ehliyet Değerlendirme Sistemi

Üst düzey yöneticiler için tasarlanmış yapay zekâ farkındalık ölçümü. Kurumunuzun YZ stratejisinde liderlik etme yetkinliğinizi değerlendirin.

## 🌟 Özellikler

- ✅ **5 Boyutlu Analiz:** Şeffaflık, Adalet, Denge, Sürdürülebilirlik ve Veri Yönetişimi
- ✅ **Detaylı Raporlama:** Kişiselleştirilmiş geri bildirim ve gelişim önerileri
- ✅ **Otomatik Email:** Test sonuçları otomatik olarak emaile gönderilir
- ✅ **Responsive Tasarım:** Tüm cihazlarda mükemmel görünüm
- ✅ **Radar Grafikleri:** Chart.js ile interaktif veri görselleştirme

## 🚀 Canlı Demo

[https://algoritmik-ehliyet.vercel.app](https://algoritmik-ehliyet.vercel.app)

## 📦 Kurulum

### Gereksinimler

- Node.js 14+
- npm veya yarn
- Gmail hesabı (SMTP için)

### Adımlar

```bash
# 1. Repository'yi klonlayın
git clone https://github.com/[username]/algoritmik-ehliyet-html.git
cd algoritmik-ehliyet-html

# 2. Bağımlılıkları yükleyin
npm install

# 3. Environment variables ayarlayın
cp .env.example .env
# .env dosyasını düzenleyin ve SMTP bilgilerinizi girin

# 4. Sunucuyu başlatın
npm start
```

### Environment Variables

`.env` dosyası oluşturun ve şu bilgileri ekleyin:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=your-email@gmail.com
FROM_NAME="Algoritmik Ehliyet Değerlendirmesi"
ADMIN_EMAIL=caglar@rgbilisim.com
PORT=3000
NODE_ENV=production
```

**Gmail App Password Nasıl Alınır:**
1. [Google Hesap Güvenlik](https://myaccount.google.com/security) sayfasına gidin
2. "İki adımlı doğrulama"yı aktif edin
3. "Uygulama şifreleri" bölümünden yeni şifre oluşturun

## 🏗️ Teknolojiler

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Email:** Nodemailer
- **Charts:** Chart.js
- **Deployment:** Vercel

## 📁 Proje Yapısı

```
algoritmik-ehliyet-html/
│
├── index.html              # Ana form sayfası
├── test.html              # Test soruları
├── sonuc.html             # Sonuç sayfası
├── email-template.html    # Email şablonu
├── server.js              # Backend API
├── package.json           # Dependencies
├── vercel.json           # Vercel config
├── .env.example          # Environment template
├── .gitignore            # Git ignore
└── README.md             # Bu dosya
```

## 🔧 Kullanım

1. `http://localhost:3000/index.html` adresini tarayıcınızda açın
2. Formu doldurun (ad, soyad, email, şirket, telefon)
3. Teste başlayın ve soruları yanıtlayın
4. Sonuç sayfasında detaylı analizinizi görün
5. Otomatik olarak email adresinize rapor gönderilir

## 🌐 Vercel'da Deploy Etme

### Vercel CLI ile

```bash
# Vercel CLI'yi yükleyin
npm i -g vercel

# Login olun
vercel login

# Deploy edin
vercel
```

### Vercel Dashboard ile

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. "Add New Project" > "Import Git Repository"
3. GitHub repository'nizi seçin
4. Environment Variables ekleyin:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `FROM_EMAIL`
   - `FROM_NAME`
   - `ADMIN_EMAIL`
5. Deploy'a tıklayın

## 📧 Email Template

Email template'i `email-template.html` dosyasında bulabilirsiniz. Template aşağıdaki dinamik verileri destekler:

- Kullanıcı bilgileri (ad, soyad, email, şirket)
- Test puanı ve seviye
- 5 boyut analizi
- Kişiselleştirilmiş geri bildirimler
- Araç ve eğitim önerileri

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için lütfen önce bir issue açarak neyi değiştirmek istediğinizi tartışın.

## 📄 Lisans

ISC

## 👤 İletişim

- **Geliştirici:** RG Bilişim
- **Email:** caglar@rgbilisim.com
- **Partner:** HPE & NVIDIA & Forenzone

## 🎓 Kredi

Bu proje, HPE & NVIDIA partnerliği ve Forenzone stratejik kürasyonuyla hayata geçirilen **Decision Intelligence/Stratejik Karar Zekası** atölyesinin bir parçasıdır.

---

**Not:** Bu proje eğitim ve değerlendirme amaçlıdır. Ticari kullanım için lütfen iletişime geçin.