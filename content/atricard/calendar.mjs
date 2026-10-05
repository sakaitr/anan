/**
 * Atricard — 4 haftalık Instagram takvimi (20 içerik, hafta içi her gün).
 * Kaynak doğruluk: ürün iddiaları yalnızca atricard.com'dan ve mevcut IG gönderilerinden alındı.
 * `[DOĞRULA]` işaretli yerler yayından önce Kayra tarafından teyit edilmeli.
 *
 * Slide yazımı: `*vurgu*` renkli kelime, `\n` satır sonu.
 * Slide tipleri: hook | compare | list | stat | tiers | cta   (bkz. render/slides.mjs)
 */

export const START_DATE = '2026-10-06'; // Salı
export const DEFAULT_POST_TIME = '19:30';

const TAGS_CORE = ['#dijitalkartvizit', '#nfckartvizit', '#karekodkartvizit'];
const TAGS_SALES = ['#satış', '#networking', '#b2b'];
const TAGS_BUSINESS = ['#kobi', '#girişimci', '#işhayatı'];

const SITE_CTA = 'Ücretsiz başla → atricard.com (profildeki link)';

export const calendar = [
  // ───────────── HAFTA 1 — Tanışma: sorunu göster, ürünü tanıt ─────────────
  {
    id: 'd01',
    format: 'reel',
    pillar: 'Sorun',
    goal: 'izlenme + paylaşım',
    hook: 'Kartvizitin kaç kişiyi aradı? Bilmiyorsun.',
    slides: [
      { type: 'hook', bg: 'blue', title: 'Kartvizitin\nkaç kişiyi aradı?\n*Bilmiyorsun.*', align: 'bottom' },
    ],
    script: [
      { sec: '0-2', show: 'Elinde kağıt kartvizit destesi, kameraya tutuyor', say: '“Dağıttığın 200 kartvizitten kaçı seni aradı?”' },
      { sec: '2-6', show: 'Kartları masaya saçıyor, omuz silkiyor', say: '“Bilmiyorsun. Kağıt kartvizit sana hiçbir şey söylemez.”' },
      { sec: '6-12', show: 'Atricard panel ekranı: görüntülenme grafiği, QR/Link/NFC kaynakları', say: '“Dijital kartta kim açtı, hangi yoldan geldi, kim iletişime geçti — hepsi panelde.”' },
      { sec: '12-16', show: 'Logo + atricard.com', say: '“Atricard. Ücretsiz başla.”' },
    ],
    caption: `Dijital kartvizit mi, kağıt mı? Kağıt kartvizit elinden çıktığı an hikâye biter. 📇

Kim açtı, hangi yoldan geldi, kim iletişime geçti — bunları bilmiyorsan fırsatı yarı yarıya kaçırıyorsun.

Atricard'da kartını QR, link veya NFC ile paylaşırsın; kartı açan kişinin uygulama indirmesi gerekmez.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#kartvizit', ...TAGS_SALES.slice(0, 1)],
    notes: 'Kamera önünde Kayra veya ekipten biri. Panel ekranında “Demo hesap verisi” etiketi kalsın.',
  },
  {
    id: 'd02',
    format: 'carousel',
    pillar: 'Sorun',
    goal: 'kaydet + paylaş',
    hook: 'Kağıt kartvizitin 5 sessiz maliyeti',
    slides: [
      { type: 'hook', bg: 'yellow', title: 'Kağıt kartvizitin\n*5 sessiz maliyeti*', sub: 'Kaydır →', align: 'bottom' },
      { type: 'hook', bg: 'blue', title: 'Bilgi değişti mi?\n*Hepsini yeniden bas.*', sub: 'Yeni unvan, yeni numara: eldeki kartlar çöpe.' },
      { type: 'hook', bg: 'navy', title: 'Kimin baktığını\n*bilemezsin.*', sub: 'Kart elden çıktı, arkasından gelen yok.' },
      { type: 'hook', bg: 'coral', title: 'Çekmecede\n*unutulur.*', sub: 'Karşı taraf seni aramak istese bile kartı bulamaz.' },
      { type: 'hook', bg: 'green', title: 'Her çalışan\n*ayrı baskı.*', sub: 'Ekip büyüdükçe maliyet de iş yükü de büyür.' },
      { type: 'hook', bg: 'paper', title: 'Fuardaki lead\n*kaybolur.*', sub: 'Takip edilmeyen kart, kaçan müşteridir.' },
      { type: 'cta', bg: 'blue', title: 'Kartını\n*dijitale* taşı.', sub: 'QR, link veya NFC ile paylaş.' },
    ],
    caption: `Kağıt kartvizitin faturası basım maliyetinden ibaret değil. 👇

1️⃣ Bilgi değişince yeniden basım
2️⃣ Kimin baktığını bilememek
3️⃣ Çekmecede unutulması
4️⃣ Her çalışan için ayrı baskı
5️⃣ Takip edilmeyen lead

Hangisi sana en çok tanıdık geldi? Yorumla 👇
Kaydet, kartvizit basımına gitmeden önce hatırla.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#kartvizit', ...TAGS_BUSINESS.slice(0, 1)],
    notes: '',
  },
  {
    id: 'd03',
    format: 'reel',
    pillar: 'Ürün',
    goal: 'izlenme + profil ziyareti',
    hook: 'Dokundur, açılsın.',
    slides: [{ type: 'hook', bg: 'navy', title: 'Dokundur,\n*açılsın.*', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'NFC kart telefona yaklaşıyor (yakın çekim)', say: 'Ses yok / hafif “tık” efekti. Yazı: “Dokundur.”' },
      { sec: '2-6', show: 'Telefonda kart sayfası açılıyor', say: '“Uygulama yok. İndirme yok.”' },
      { sec: '6-11', show: 'Sayfa üzerinde WhatsApp, Instagram, LinkedIn butonları', say: '“Tek dokunuşla rehbere kaydet, arayıp yaz.”' },
      { sec: '11-15', show: 'QR ve link seçenekleri hızlı kesitler', say: '“NFC yoksa QR. QR yoksa link. Atricard.”' },
    ],
    caption: `Dokundur, açılsın. 📲

NFC kartı karşındakinin telefonuna yaklaştır, kartın açılsın. NFC yoksa QR veya link yeter. Kartı açan kişinin uygulama indirmesine gerek yok.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#nfc', '#teknoloji'],
    notes: 'Bu Reel için bir NFC kart ve bir telefon gerekiyor. Yoksa ekran kaydı + animasyon kullan (ffmpeg).',
  },
  {
    id: 'd04',
    format: 'carousel',
    pillar: 'Eğitici',
    goal: 'kaydet',
    hook: 'Fuarda tanıştığın kişiyi unutma',
    slides: [
      { type: 'hook', bg: 'coral', title: 'Fuarda tanıştığın\nkişiyi *unutma.*', sub: '3 adımda lead takibi', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: 'Fuar sonrası\n*3 adım*',
        items: [
          { h: 'Kartını okut', p: 'QR veya NFC ile karşı tarafa saniyeler içinde ulaş.' },
          { h: 'Lead’i etiketle', p: 'Fuardan gelen kişiler otomatik fuar etiketiyle kaydolsun.' },
          { h: 'Teşekkür e-postası gönder', p: 'Fuar sonrası herkese tek seferde teşekkür et.' },
        ],
      },
      { type: 'cta', bg: 'blue', title: 'Bir sonraki fuara\n*hazır git.*', sub: 'Kartın dijital, takibin otomatik.' },
    ],
    caption: `Fuardan 200 kartvizitle dönmek, 200 fırsatla dönmek demek değil. 🎪

Önemli olan o kişileri unutmadan takip etmek.

✔️ Kartını QR/NFC ile paylaş
✔️ Gelen lead'leri fuar etiketiyle topla
✔️ Teşekkür e-postasını tek seferde gönder

Bir sonraki fuara hangi etkinlikle gidiyorsun? Yorumda yaz 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#fuar', ...TAGS_SALES.slice(0, 2)],
    notes: '“Fuar etiketi” ve “teşekkür e-postası” özelliklerini mevcut IG gönderisinden aldım [DOĞRULA: ikisi de ürün içinde canlı mı?].',
  },
  {
    id: 'd05',
    format: 'carousel',
    pillar: 'Ürün',
    goal: 'profil ziyareti + takip',
    hook: 'Atricard nedir? 30 saniyede.',
    slides: [
      { type: 'hook', bg: 'blue', title: 'Kartın artık\n*cebinde.*', chips: ['QR', 'Link', 'NFC', 'Lead', 'Analiz'], sub: 'Atricard nedir? Kaydır →' },
      {
        type: 'list', bg: 'yellow', title: 'Atricard\n*ne yapar?*',
        items: [
          { h: 'Üç şekilde paylaş', p: 'QR kod, link veya NFC kart.' },
          { h: 'Kimin baktığını gör', p: 'Açılış sayısı ve kimler tarafından görüldüğü panelde.' },
          { h: 'Lead formu', p: 'İletişim bilgisi bırakanlar tek yerde toplanır.' },
          { h: 'Tüm ekip tek panelde', p: 'Marka rengi ve logoyla tutarlı kartlar.' },
        ],
      },
      { type: 'hook', bg: 'navy', title: 'Kartı açan kişi\n*uygulama indirmez.*', sub: 'Kredi kartı da gerekmez.' },
      { type: 'cta', bg: 'blue', title: 'Ücretsiz\n*başla.*', sub: 'atricard.com' },
    ],
    caption: `Atricard, ekipler için dijital kartvizit platformu. 📇

QR, link veya NFC kartla paylaş. Kimin baktığını gör. Lead'leri topla. Tüm ekibi tek panelden yönet.

Kartı açan kişi uygulama indirmez, sen de başlamak için kredi kartı vermezsin.

Ücretsiz başla → atricard.com (profildeki link)`,
    hashtags: [...TAGS_CORE, '#kartvizit', '#kobi'],
    notes: 'Sabitlenmiş (pin) gönderi adayı.',
  },

  // ───────────── HAFTA 2 — Eğitici içerik: satış ve networking ─────────────
  {
    id: 'd06',
    format: 'reel',
    pillar: 'Eğitici',
    goal: 'izlenme + yorum',
    hook: 'Elini sıkarken kartın hazır mı?',
    slides: [{ type: 'hook', bg: 'paper', title: 'Elini sıkarken\n*kartın hazır mı?*', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'Tokalaşma, ardından cebini yokluyor (komik panik)', say: 'Yazı: “Kartvizitim nerede?”' },
      { sec: '2-6', show: 'Cebinden telefon çıkarıyor, QR gösteriyor', say: '“Telefon her zaman yanında. Kartın da orada olsun.”' },
      { sec: '6-12', show: 'Karşı taraf QR’ı okutuyor, kart açılıyor', say: '“Okut, aç, kaydet.”' },
      { sec: '12-15', show: 'Logo', say: '“Atricard. Ücretsiz başla.”' },
    ],
    caption: `Toplantıda, fuarda, asansörde... Kartvizit tam ihtiyaç anında hiç yanında olmuyor. 😅

Telefon her zaman yanında. Kartını oraya taşı.

Sen en son hangi anda kartvizitsiz kaldın? 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#networking', '#komik'],
    notes: 'Komik / hikâyeli format; ilk 2 saniye panik anı kritik.',
  },
  {
    id: 'd07',
    format: 'carousel',
    pillar: 'Satış',
    goal: 'kaydet + paylaş',
    hook: 'Satış ekipleri için 5 networking alışkanlığı',
    slides: [
      { type: 'hook', bg: 'navy', title: 'Satışçıların\n*5 networking\nalışkanlığı*', sub: 'Kaydır →', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: 'İlk üç\n*alışkanlık*',
        items: [
          { h: 'Etkinlikten önce hazırlan', p: 'Kimle tanışmak istediğini ve ne söyleyeceğini bil.' },
          { h: 'Aynı gün takip et', p: 'Tanıştığın kişiye akşam bir mesaj at.' },
          { h: 'Konuşmayı not al', p: 'İkinci mesajda hatırlanmak fark yaratır.' },
        ],
      },
      {
        type: 'list', bg: 'yellow', title: 'Son iki\n*alışkanlık*',
        items: [
          { h: 'Bilgilerini güncel tut', p: 'Eski numara, eski unvan güven kaybettirir.' },
          { h: 'Sonucu ölç', p: 'Kimin baktığını, kimin döndüğünü takip et.' },
        ],
      },
      { type: 'cta', bg: 'blue', title: 'Ölçmek\nkolay olsun.', sub: 'Kartını kimin açtığını Atricard panelinde gör.' },
    ],
    caption: `Satışta networking tesadüf değil, alışkanlık. 🤝

Kaydet, bir sonraki etkinlikten önce tekrar oku. Satış ekibinden bir arkadaşına gönder.

Senin listene eklemek istediğin bir alışkanlık var mı? Yorumda yaz 👇

${SITE_CTA}`,
    hashtags: [...TAGS_SALES, '#satışteknikleri', '#networking', ...TAGS_CORE.slice(0, 1)],
    notes: 'Genel tavsiye içeriği; ürün iddiası yalnızca son slayttaki panel cümlesi.',
  },
  {
    id: 'd08',
    format: 'reel',
    pillar: 'Eğitici',
    goal: 'kaydet + paylaş',
    hook: 'QR kodunu nereye koyabilirsin? 5 yer',
    slides: [{ type: 'hook', bg: 'coral', title: 'QR’ını\n*nereye\nkoyarsın?*', sub: '5 fikir', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'Büyük QR, metin: “5 yer”', say: '“QR kartını koyabileceğin 5 yer.”' },
      { sec: '2-5', show: 'E-posta imzası', say: '“1. E-posta imzan. Her mail bir tanıtım.”' },
      { sec: '5-8', show: 'Fuar standı / masa', say: '“2. Stand ve masan.”' },
      { sec: '8-11', show: 'Araç / vitrin', say: '“3. Aracın ve vitrinin.”' },
      { sec: '11-14', show: 'Ambalaj / fatura', say: '“4. Ambalaj ve faturan.”' },
      { sec: '14-17', show: 'Sosyal medya biyografisi', say: '“5. Profilin. Şimdi bir tane oluştur: atricard.com”' },
    ],
    caption: `QR kartını bir kez oluştur, her yere koy. 📍

1. E-posta imzası
2. Stand / masa
3. Araç / vitrin
4. Ambalaj / fatura
5. Sosyal medya profili

Sen QR'ı nereye koymayı düşünüyorsun? 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#qr', '#pazarlama'],
    notes: 'Hızlı kesit, her yer 3 sn. Altyazı şart (sessiz izleme).',
  },
  {
    id: 'd09',
    format: 'carousel',
    pillar: 'Ürün',
    goal: 'kaydet',
    hook: 'E-posta imzan bir kartvizit olabilir',
    slides: [
      { type: 'hook', bg: 'yellow', title: 'E-posta imzan\n*bir kartvizit\nolabilir.*', align: 'bottom' },
      {
        type: 'list', bg: 'blue', title: 'Neden\n*imzaya kart?*',
        items: [
          { h: 'Günde onlarca kişiye yazıyorsun', p: 'Her mail bir tanıtım fırsatı.' },
          { h: 'Tek dokunuşla ulaşım', p: 'WhatsApp, LinkedIn, Instagram, hepsi tek linkte.' },
          { h: 'Bir kez güncelle', p: 'Bilgi değişince her yerde güncel kalsın.' },
        ],
      },
      { type: 'cta', bg: 'navy', title: 'İmzanı\n*kartla* güçlendir.', sub: 'atricard.com' },
    ],
    caption: `Günde kaç e-posta gönderiyorsun? Her biri bir kartvizit olabilir. ✉️

Atricard kartını e-posta imzana ekle; WhatsApp, LinkedIn ve Instagram tek linkte.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#eposta', '#işhayatı'],
    notes: '[DOĞRULA] E-posta imzası entegrasyonu sitede “özellik” olarak yazıyor; kurulum adımlarını panelden teyit edip ek slide yapılabilir.',
  },
  {
    id: 'd10',
    format: 'carousel',
    pillar: 'Ürün',
    goal: 'profil ziyareti + dönüşüm',
    hook: 'Atricard fiyatları',
    slides: [
      { type: 'hook', bg: 'green', title: 'Başlamak\n*ücretsiz.*', sub: 'Kredi kartı gerekmez.', align: 'bottom' },
      {
        type: 'tiers', bg: 'navy', title: 'Üç plan,\n*net fiyat.*',
        tiers: [
          { name: 'Ücretsiz', price: '₺0', note: 'başla' },
          { name: 'Pro', price: '₺149', note: '/ay', highlight: true },
          { name: 'Business', price: '₺490', note: '/ay' },
        ],
      },
      { type: 'hook', bg: 'blue', title: 'Daha büyük\n*bir ekip mi?*', sub: 'Kurumsal plan için teklif al.' },
      { type: 'cta', bg: 'yellow', title: 'Önce\n*ücretsiz dene.*', sub: 'atricard.com' },
    ],
    caption: `Fiyat sürprizi yok. 💳

Ücretsiz: ₺0
Pro: ₺149/ay
Business: ₺490/ay
Kurumsal: teklif bazlı

Başlamak için kredi kartı gerekmez.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#fiyat', '#kobi'],
    notes: '[DOĞRULA] Fiyatlar atricard.com’dan alındı; yayın günü güncel mi kontrol et. Plan içerikleri (limitler) sitede net değil, eklemedim.',
  },

  // ───────────── HAFTA 3 — Sektör içerikleri ─────────────
  {
    id: 'd11',
    format: 'reel',
    pillar: 'Sektör',
    goal: 'paylaşım + sektör hedefleme',
    hook: 'Emlak danışmanı kartında ne olmalı?',
    slides: [{ type: 'hook', bg: 'blue', title: 'Emlak danışmanı\nkartında *ne olmalı?*', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'Anahtarlı el + metin: “Emlak danışmanları”', say: '“Kartında bunlar yoksa, müşteri başkasına gider.”' },
      { sec: '2-6', show: 'Kart sayfası: fotoğraf + isim + unvan', say: '“1. Yüzün ve adın. Güven burada başlar.”' },
      { sec: '6-10', show: 'WhatsApp butonu vurgulanıyor', say: '“2. Tek dokunuşla WhatsApp.”' },
      { sec: '10-14', show: 'Instagram / LinkedIn / portföy linki', say: '“3. Portföyün: tek link.”' },
      { sec: '14-17', show: 'Logo', say: '“Atricard. Kartını oluştur.”' },
    ],
    caption: `Emlak danışmanıysan, kartın ilk portföyün. 🏠

✔️ Fotoğraf, ad, unvan
✔️ Tek dokunuşla WhatsApp
✔️ Portföy / sosyal medya linkleri

Hangi sektörün kartını yapalım? Yorumda yaz 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#emlak', '#emlakdanışmanı'],
    notes: 'Sektör serisi: emlak → sigorta → ajans → İK. Yorumlarda gelen sektörü sıradaki içeriğe çevir.',
  },
  {
    id: 'd12',
    format: 'carousel',
    pillar: 'Sektör',
    goal: 'kaydet + paylaş',
    hook: 'Sigorta danışmanı kartında olması gerekenler',
    slides: [
      { type: 'hook', bg: 'navy', title: 'Sigorta danışmanı\nkartında *olması\ngerekenler*', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: '4 şey\n*yeter.*',
        items: [
          { h: 'Net unvan', p: '“Sigorta danışmanı” yeter, uzun cümle gereksiz.' },
          { h: 'Tek dokunuşla arama', p: 'Hasar anında müşteri seni hızlı bulsun.' },
          { h: 'WhatsApp butonu', p: 'En çok kullanılan kanal en üstte olsun.' },
          { h: 'Güncel iletişim bilgisi', p: 'Bir kez güncelle, tüm kartların güncel kalsın.' },
        ],
      },
      { type: 'cta', bg: 'blue', title: 'Müşteri seni\n*kolay bulsun.*', sub: 'Ücretsiz kartını oluştur.' },
    ],
    caption: `Sigorta işinde güven her şeydir, hız da. 🛡️

Kartın sade, net ve ulaşılabilir olsun. Müşteri seni ihtiyaç duyduğu an bulabilsin.

Sigorta ekibin varsa bu gönderiyi onlara gönder. 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#sigorta', '#sigortadanışmanı'],
    notes: '',
  },
  {
    id: 'd13',
    format: 'reel',
    pillar: 'Ekip',
    goal: 'B2B ilgisi + profil ziyareti',
    hook: 'Tüm ekip, tek marka.',
    slides: [{ type: 'hook', bg: 'blue', title: 'Tüm ekip,\n*tek marka.*', align: 'bottom' }],
    script: [
      { sec: '0-3', show: 'Ekip fotoğrafları yan yana (farklı kartvizit tasarımları karışık)', say: '“Ekipte her kart bir başka tasarım mı?”' },
      { sec: '3-8', show: 'Atricard ekip paneli: üyeler, davet et butonu', say: '“Tüm ekip kartları tek panelde.”' },
      { sec: '8-12', show: 'Renk ve logo özelleştirme', say: '“Marka renklerin, logon, her kartta aynı.”' },
      { sec: '12-15', show: 'Logo', say: '“Atricard Business. Detaylar atricard.com”' },
    ],
    caption: `Ekipte 10 kişi, 10 farklı kartvizit tasarımı? 😬

Atricard'da tüm ekip kartları tek panelde, marka renginle ve logonla.

Ekibin için bilgi almak istersen DM'den yaz ya da profildeki linke tıkla.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#kurumsal', '#marka'],
    notes: 'Panel ekranı: mevcut IG gönderisindeki “Ekip” ekranı kullanılabilir.',
  },
  {
    id: 'd14',
    format: 'carousel',
    pillar: 'Sektör',
    goal: 'kaydet + paylaş',
    hook: 'İK için: yeni çalışana ilk gün kartı',
    slides: [
      { type: 'hook', bg: 'green', title: 'Yeni çalışana\nilk gün\n*kartı hazır.*', sub: 'İK ekipleri için', align: 'bottom' },
      {
        type: 'compare', bg: 'blue', title: 'İlk gün\n*farkı*',
        left: { label: 'Kağıt', items: ['Basım siparişi', 'Haftalar sonra gelir', 'Bilgi değişirse yeniden'] },
        right: { label: 'Dijital', items: ['Ekibe davet et', 'Aynı marka şablonu', 'Bilgi değişirse güncelle'] },
      },
      { type: 'cta', bg: 'navy', title: 'İlk günden\n*profesyonel.*', sub: 'Ekip planı için atricard.com' },
    ],
    caption: `Yeni gelen çalışana ilk gün neler veriyorsun? Bilgisayar, mail adresi... ve kartvizit? 🧑‍💼

Kağıt kartvizit siparişi haftalar sürebilir. Dijital kart, ekip paneline davet etmek kadar hızlı.

İK ekibinden biri varsa etiketle. 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#ik', '#insankaynakları', '#işealım'],
    notes: '[DOĞRULA] “Haftalar sonra gelir” genelleme; basım süresi firmaya göre değişir, metni daha yumuşatabilirsin.',
  },
  {
    id: 'd15',
    format: 'carousel',
    pillar: 'Eğitici',
    goal: 'kaydet',
    hook: 'Dijital kartvizitte 6 sık hata',
    slides: [
      { type: 'hook', bg: 'coral', title: 'Dijital kartvizitte\n*6 sık hata*', sub: 'Sen kaçını yapıyorsun?', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: 'Hata\n*1–3*',
        items: [
          { h: 'Eski bilgi', p: 'Numara veya unvan değiştiyse kartı hemen güncelle.' },
          { h: 'Çok fazla link', p: 'En önemli 3-4 tanesini seç.' },
          { h: 'Fotoğraf yok', p: 'İnsanlar yüzü hatırlar, logoyu değil.' },
        ],
      },
      {
        type: 'list', bg: 'yellow', title: 'Hata\n*4–6*',
        items: [
          { h: 'Net aksiyon yok', p: '“Ara”, “Yaz”, “Randevu al”: biri öne çıksın.' },
          { h: 'Telefonda denememek', p: 'Kartın mobilde nasıl göründüğüne bak.' },
          { h: 'Sonucu izlememek', p: 'Kim açmış, kim dönmüş: ölç.' },
        ],
      },
      { type: 'cta', bg: 'blue', title: 'Kartını\n*bir kez doğru* yap.', sub: 'atricard.com' },
    ],
    caption: `Kartın var ama sonuç yok mu? Bu 6 hatadan birini yapıyor olabilirsin. 👇

Kaydet, kartını gözden geçirirken kontrol listesi olarak kullan.

Senin kartında bunlardan kaç tanesi var? 😅

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#kişiselmarka', '#networking'],
    notes: '',
  },

  // ───────────── HAFTA 4 — Kanıt ve dönüşüm ─────────────
  {
    id: 'd16',
    format: 'reel',
    pillar: 'Karşılaştırma',
    goal: 'paylaşım + dönüşüm',
    hook: 'Kağıt mı, dijital mi?',
    slides: [{ type: 'hook', bg: 'paper', title: 'Kağıt mı,\n*dijital mi?*', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'Ekran ikiye bölünmüş: sol kağıt kart, sağ telefon', say: 'Yazı: “Kağıt mı, dijital mi?”' },
      { sec: '2-6', show: 'Sol: “Bilgi değişti: yeniden bas”, Sağ: “Bir kez güncelle”', say: '“Bilgin değişti. Biri yeniden basım, biri bir tık.”' },
      { sec: '6-10', show: 'Sol: “Kim baktı? Bilmiyorsun”, Sağ: “Panelde gör”', say: '“Kim baktı? Biri bilmiyor, biri biliyor.”' },
      { sec: '10-14', show: 'Logo + atricard.com', say: '“Sen hangisini seçersin?”' },
    ],
    caption: `Kağıt mı, dijital mi? Cevap senin ekibine göre değişir, ama bir şey net: ölçemediğini geliştiremezsin. 📊

Sen hangi tarafsın? 👇

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#dijitaldönüşüm', '#kobi'],
    notes: 'Mevcut “Kağıt mı, dijital mi?” gönderisinin Reel versiyonu.',
  },
  {
    id: 'd17',
    format: 'carousel',
    pillar: 'Ürün',
    goal: 'kaydet + dönüşüm',
    hook: 'Panelde okunan 4 şey',
    slides: [
      { type: 'hook', bg: 'blue', title: 'Panelde neleri\n*görürsün?*', sub: 'Demo hesap verisi ile', align: 'bottom' },
      { type: 'stat', bg: 'navy', number: '298', title: 'Kart açılışı\n*son 30 gün*', caption: 'Kartının kaç kez açıldığını gör. (Demo hesap verisi)' },
      {
        type: 'list', bg: 'paper', title: 'Hangi yoldan\n*geldiler?*',
        items: [
          { h: 'QR', p: 'Fuar, stand, basılı materyaller.' },
          { h: 'Link', p: 'Sosyal medya, e-posta, mesaj.' },
          { h: 'NFC', p: 'Yüz yüze tanışmalar.' },
        ],
      },
      { type: 'hook', bg: 'green', title: 'Kim baktı,\n*kim kaydetti.*', sub: 'Lead formu ile iletişim bilgisi bırakanlar tek yerde.' },
      { type: 'cta', bg: 'blue', title: 'Ölç, geliştir,\n*daha çok kazan.*', sub: 'atricard.com' },
    ],
    caption: `Kartvizit artık sadece paylaşım değil, veri. 📈

Panelde göreceklerin:
• Kartının kaç kez açıldığı
• QR, link veya NFC: hangi yoldan geldikleri
• Lead formu ile bırakılan iletişim bilgileri

(Görseldeki rakamlar demo hesap verisidir.)

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#analitik', '#satış'],
    notes: 'Mevcut IG gönderilerindeki demo panel görselleri baz alındı; rakamların demo olduğu belirtildi.',
  },
  {
    id: 'd18',
    format: 'reel',
    pillar: 'Ekip',
    goal: 'B2B ilgisi',
    hook: 'Ekibini kartlara davet et',
    slides: [{ type: 'hook', bg: 'navy', title: 'Ekibini\n*davet et.*', align: 'bottom' }],
    script: [
      { sec: '0-2', show: 'Panel: “Üye davet et” butonu', say: '“Ekibini tek tıkla kartlara davet et.”' },
      { sec: '2-7', show: 'Ekip listesi: yönetici, aktif, davet gitti rozetleri', say: '“Kim aktif, kim davet bekliyor, hepsi görünür.”' },
      { sec: '7-12', show: 'Marka renkleri/logo seçimi', say: '“Marka renklerin her kartta aynı.”' },
      { sec: '12-15', show: 'Logo', say: '“Atricard Business. Detay: atricard.com”' },
    ],
    caption: `Ekibin büyüdükçe kartvizit işi de büyür. Atricard'da hepsi tek panelde. 👥

Davet et, marka renginle yönet, kim aktif, kim bekliyor gör.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#ekip', '#kurumsal'],
    notes: 'Mevcut “Ekip” panel görselinden ekran kaydı al.',
  },
  {
    id: 'd19',
    format: 'carousel',
    pillar: 'SSS',
    goal: 'kaydet + güven',
    hook: 'Atricard hakkında sık sorulan 5 soru',
    slides: [
      { type: 'hook', bg: 'yellow', title: 'Sık sorulan\n*5 soru*', sub: 'Kısa, net cevaplar', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: 'Başlamadan\n*önce*',
        items: [
          { h: 'Uygulama indirmek gerekir mi?', p: 'Kartı açan kişi için hayır.' },
          { h: 'Kredi kartı gerekir mi?', p: 'Ücretsiz plana başlamak için hayır.' },
          { h: 'Nasıl paylaşılır?', p: 'QR kod, link veya NFC kart.' },
        ],
      },
      {
        type: 'list', bg: 'blue', title: 'Ekip için\n*soruları*',
        items: [
          { h: 'Tüm ekibi yönetebilir miyim?', p: 'Evet, ekip kartları tek panelde.' },
          { h: 'Marka renk ve logoyu kullanabilir miyim?', p: 'Evet, kartlar marka özelleştirmesine uygun.' },
        ],
      },
      { type: 'cta', bg: 'navy', title: 'Başka sorun\n*mu var?*', sub: 'DM’den yaz ya da atricard.com' },
    ],
    caption: `En çok sorulan sorular, tek gönderide. ❓

Aklına takılan başka bir şey varsa yorum veya DM'den yaz, cevabını gönderiye ekleyelim.

${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#sss', '#kobi'],
    notes: 'Yalnızca sitedeki bilgilerden yazıldı. Gelen yeni sorularla bu gönderiyi güncelle (v2).',
  },
  {
    id: 'd20',
    format: 'carousel',
    pillar: 'Topluluk',
    goal: 'yorum + UGC',
    hook: 'Atricard kullanıyor musun? Hikayeni paylaş',
    slides: [
      { type: 'hook', bg: 'blue', title: 'Atricard\nkullanıyor musun?\n*Hikayeni anlat.*', align: 'bottom' },
      {
        type: 'list', bg: 'paper', title: 'Bize\n*yaz*',
        items: [
          { h: 'Hangi sektörde çalışıyorsun?', p: 'Sıradaki sektör içeriğini birlikte seçelim.' },
          { h: 'Kartını nerede paylaşıyorsun?', p: 'QR, link ya da NFC: en çok işe yarayanı anlat.' },
          { h: 'Seçilen hikâyeler', p: 'Profilde yer alabilir. (İzninle)' },
        ],
      },
      { type: 'cta', bg: 'yellow', title: 'Hikâyeni\n*yorumda* paylaş.', sub: 'ya da DM’den yaz.', button: 'Yorum yap ↓' },
    ],
    caption: `Atricard kullanıyorsan senden duymak isteriz. 💙

Hangi sektördesin, kartını nerede paylaşıyorsun? Yorumda anlat, en ilginç hikâyeleri izninle profilde paylaşalım.

Henüz denemediysen: ${SITE_CTA}`,
    hashtags: [...TAGS_CORE, '#topluluk', '#müşterihikayesi'],
    notes: '[DOĞRULA] Müşteri hikâyesi paylaşımı Kayra onayına tabi. Kimsenin adı/yorumu izinsiz yayınlanmaz.',
  },
];

/** Hafta sonlarını atlayarak her içeriğe tarih verir. */
const addBusinessDays = (isoDate, offset) => {
  const date = new Date(`${isoDate}T00:00:00Z`);
  let remaining = offset;
  while (remaining > 0) {
    date.setUTCDate(date.getUTCDate() + 1);
    const weekday = date.getUTCDay();
    if (weekday !== 0 && weekday !== 6) remaining -= 1;
  }
  return date.toISOString().slice(0, 10);
};

calendar.forEach((post, index) => {
  post.date = addBusinessDays(START_DATE, index);
  post.time = post.time ?? DEFAULT_POST_TIME;
});
