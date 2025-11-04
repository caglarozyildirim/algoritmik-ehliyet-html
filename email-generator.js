// Email Template Generator - Dinamik email template oluşturma ve yeni sekmede açma

(function() {
    'use strict';

    // 5 Boyut bilgileri
    const dimensionInfo = {
    transparency: {
        name: 'Şeffaflık & Açıklanabilirlik',
        questions: 'Soru 1 ve Soru 2',
        description: 'Bu eksen, modelin ne yaptığını anlama ve kararları açıklama yeteneğinizi gösterir.',
        feedback: {
            high: { range: '15-20 Puan', text: 'Model şeffaflığına hâkimsiniz, kararlarınızı gerekçelendirebiliyorsunuz.' },
            medium: { range: '8-14 Puan', text: 'Temel farkındalığınız var, ancak modelin iç işleyişini daha iyi tanımanız faydalı olur.' },
            low: { range: '0-7 Puan', text: 'Model yapısını derinlemesine inceleme ihtiyacınız var, açıklanabilirlik zayıf.' }
        },
        tools: [
            'HPE & NVIDIA | PCAI – Veri kanalları yönetimi & Explainability araçları',
            'Forenzone | YZ Okuryazarlığı, Algoritmik Ehliyet Modülü & Karar Mimarisinde Açıklanabilirlik Eğitimi'
        ]
    },
    fairness: {
        name: 'Adalet & Kontrol',
        questions: 'Soru 3 ve Soru 4',
        description: 'Bu eksen, algoritmik önyargıları fark etme ve canlı karar süreçlerinde kontrol sahibi olma kapasitenizi ölçer.',
        feedback: {
            high: { range: '15-20 Puan', text: 'Bias risklerini tanıyor ve sürece aktif müdahale edebiliyorsunuz.' },
            medium: { range: '8-14 Puan', text: 'Farkındalığınız var ama düzenli denetim ve kontrol mekanizmaları güçlendirilmeli.' },
            low: { range: '0-7 Puan', text: 'Sistemleri olduğu gibi kabul ediyor, denetim ve kontrolü göz ardı ediyorsunuz.' }
        },
        tools: [
            'HPE & NVIDIA | PCAI – Bias farkındalığı & Yönetişim araçları',
            'Forenzone | Algoritmik Tarafsızlık Atölyesi & Etik Denetim Simülasyonları'
        ]
    },
    balance: {
        name: 'İnsan–AI Dengesi',
        questions: 'Soru 5 ve Soru 10',
        description: 'Bu eksen, karar süreçlerinde insan sezgisi ile yapay zekâ çıktıları arasındaki dengeyi ve etik farkındalığı yansıtır.',
        feedback: {
            high: { range: '15-20 Puan', text: 'Stratejik sezginizi YZ ile dengeliyor, etik çerçeveyi uyguluyorsunuz.' },
            medium: { range: '8-14 Puan', text: 'Dengeye dair niyet var, ancak karar ağırlığı YZ\'de yoğunlaşmış olabilir.' },
            low: { range: '0-7 Puan', text: 'Kendi katkınızı önemsizleştiriyor, etik etkileri yeterince sorgulamıyorsunuz.' }
        },
        tools: [
            'HPE & NVIDIA | Trusted AI çerçevesi',
            'Forenzone | Bilinçli Liderlik Programı & Stratejik Sezgi Aktivasyon Seansları'
        ]
    },
    sustainability: {
        name: 'Sürdürülebilirlik & Güncellenme',
        questions: 'Soru 6 ve Soru 8',
        description: 'Bu eksen, modellerin sürdürülebilirliği, enerji farkındalığı ve güncellenme kabiliyeti ile ilgilidir.',
        feedback: {
            high: { range: '15-20 Puan', text: 'Model drift\'e karşı hazırlıklısınız, sürdürülebilirlik farkındalığınız güçlü.' },
            medium: { range: '8-14 Puan', text: 'Farkındalığınız var ama süreçleri daha düzenli hale getirmeniz gerek.' },
            low: { range: '0-7 Puan', text: 'Enerji maliyeti ve model eskimesi gibi kritik unsurlar radarınızda değil.' }
        },
        tools: [
            'HPE & NVIDIA | PCAI Monitoring Tools + GreenLake Sustainability Dashboard',
            'Forenzone | Sürdürülebilir AI/Teknoloji Stratejileri Eğitimi'
        ]
    },
    data: {
        name: 'Veri & Stratejik Etki',
        questions: 'Soru 7 ve Soru 9',
        description: 'Bu eksen, verinin entegrasyonu ve kararların iş modeline uzun vadeli etkisini değerlendirme becerinizi ölçer.',
        feedback: {
            high: { range: '15-20 Puan', text: 'Veri altyapınızı etkin yönetiyor, stratejik etkileri analiz ediyorsunuz.' },
            medium: { range: '8-14 Puan', text: 'Veriye erişiminiz sınırlı, uzun vadeli etkiler için bütüncül bakış eksik olabilir.' },
            low: { range: '0-7 Puan', text: 'Veriler dağınık ve kararlar kısa vadeye odaklanmış.' }
        },
        tools: [
            'HPE & NVIDIA | Data Fabric + ROI Modelleme danışmanlık çözümleri',
            'Forenzone | Stratejik Veri Kullanımı Workshop\'u & Karar Ekosistem Haritalama Aracı'
        ]
    }
};

// Seviye belirleme
function determineLevel(score) {
    if (score <= 40) return {
        name: 'Algoritmik Çırak',
        description: 'YZ sistemleri hakkında temel farkındalık geliştirmeye başladınız.',
        badge: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)',
        class: 'cirak'
    };
    if (score <= 70) return {
        name: 'Algoritmik Usta Adayı',
        description: 'YZ sistemleri konusunda iyi bir farkındalığa sahipsiniz.',
        badge: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 100%)',
        class: 'usta'
    };
    return {
        name: 'Algoritmik Lider',
        description: 'Tebrikler. YZ sistemleri konusunda yüksek farkındalığa sahipsiniz.',
        badge: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        class: 'lider'
    };
}

function getFeedbackLevel(score) {
    if (score >= 15) return 'high';
    if (score >= 8) return 'medium';
    return 'low';
}

// Email template'i doldur ve yeni sekmede aç
async function generateAndOpenEmailTemplate() {
    try {
        // LocalStorage'dan verileri al
        const results = JSON.parse(localStorage.getItem('algoritmikEhliyetResults') || '{}');
        const userData = JSON.parse(localStorage.getItem('algoritmikEhliyetUser') || '{}');

        if (!results.totalScore && results.totalScore !== 0) {
            alert('Test sonuçları bulunamadı. Lütfen önce testi tamamlayın.');
            return;
        }

        // Email template'i fetch ile al
        const response = await fetch('email-template.html');
        let template = await response.text();

        // Tarih formatlama
        const completionDate = new Date(results.completionTime);
        const formattedDate = completionDate.toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Temel değiştirmeler
        const fullName = `${userData.firstName} ${userData.lastName}`;
        const level = determineLevel(results.totalScore);

        template = template.replace(/\[Ad Soyad\]/g, fullName);
        template = template.replace(/\[Kullanıcı Ad Soyad\]/g, fullName);
        template = template.replace(/\[email@sirket\.com\]/g, userData.email);
        template = template.replace(/\[Şirket Adı\]/g, userData.company);
        template = template.replace(/\[3 Kasım 2025\]/g, formattedDate);
        template = template.replace(/\[XX\]/g, results.totalScore);
        template = template.replace(/\[ALGORİTMİK LİDER\]/g, level.name.toUpperCase());
        template = template.replace(/\[Seviye açıklaması buraya gelecek\]/g, level.description);

        // Tüm boyutlar için skorları değiştir
        const dimensions = ['transparency', 'fairness', 'balance', 'sustainability', 'data'];
        dimensions.forEach((dim, index) => {
            const score = results.dimensionScores[dim];
            const percentage = (score / 20) * 100;
            const feedbackLevel = getFeedbackLevel(score);
            const feedback = dimensionInfo[dim].feedback[feedbackLevel];

            // Her boyut için placeholder'ları değiştir (YY1, YY2, YY3, YY4, YY5 formatında)
            const placeholder = index === 0 ? 'YY' : `YY${index + 1}`;
            template = template.replace(new RegExp(`\\[${placeholder}\\]/20`, 'g'), `${score}/20`);

            // Progress bar genişliklerini değiştir (sıralı olarak)
            // Template'de width="XX%" formatında olduğunu varsayıyoruz
        });

        // İlk boyut için özel değiştirmeler (template'de tek örnek var)
        const firstScore = results.dimensionScores.transparency;
        const firstFeedbackLevel = getFeedbackLevel(firstScore);
        const firstFeedback = dimensionInfo.transparency.feedback[firstFeedbackLevel];
        const firstPercentage = (firstScore / 20) * 100;

        template = template.replace(/width="75%"/g, `width="${firstPercentage}%"`);
        template = template.replace(/\[15-20 PUAN\]/g, firstFeedback.range);
        template = template.replace(/\[Geri bildirim metni buraya gelecek\]/g, firstFeedback.text);

        // İletişim bilgileri
        template = template.replace(/\[email@forenzone\.com\]/g, 'info@forenzone.com');
        template = template.replace(/\[www\.forenzone\.com\]/g, 'www.forenzone.com');

        // Yeni sekmede aç
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(template);
            newWindow.document.close();
        } else {
            alert('Pop-up engelleyici aktif olabilir. Lütfen pop-up\'lara izin verin.');
        }

    } catch (error) {
        console.error('Email template oluşturulurken hata:', error);
        alert('Email template oluşturulamadı. Hata: ' + error.message);
    }
}

    // Global scope'a ekle
    window.generateAndOpenEmailTemplate = generateAndOpenEmailTemplate;

})(); // IIFE sonu