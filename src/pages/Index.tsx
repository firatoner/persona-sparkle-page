import { ArrowDownRight, BookOpen, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const gallery = [
  { src: "/lovable-uploads/wine1.jpg", alt: "Şarap turizmi araştırması" },
  { src: "/lovable-uploads/wine2.jpg", alt: "Bağ turizmi ve şarap rotaları" },
  { src: "/lovable-uploads/wine3.jpg", alt: "Şarap turisti profili" },
  { src: "/lovable-uploads/wine4.jpg", alt: "Türkiye'de Şarap Turisti Profili kitabı" },
];

const Index = () => (
  <main className="site-shell">
    <div className="grain" aria-hidden="true" />
    <section className="hero" id="anasayfa">
      <nav className="nav container">
        <a className="brand" href="#anasayfa" aria-label="Umut Öner ana sayfa">
          <span>U</span> Umut Öner
        </a>
        <div className="nav-links">
          <a href="#hakkinda">Hakkında</a>
          <a href="#calismalar">Çalışmalar</a>
          <a className="nav-contact" href="mailto:umut_oner@hotmail.com">İletişim</a>
        </div>
      </nav>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">ŞARAP KÜLTÜRÜ · BAĞ TURİZMİ · GASTRONOMİ</p>
          <h1>Her bağın<br /><em>anlatacak</em> bir<br />hikâyesi vardır.</h1>
          <p className="hero-intro">
            Türkiye'nin bağcılık mirasını, şarap turizmini ve gastronomi kültürünü araştıran; bu hikâyeleri paylaşan bir yolculuk.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#calismalar">Çalışmaları keşfet <ArrowDownRight size={18} /></a>
            <a className="text-link" href="mailto:umut_oner@hotmail.com">Birlikte konuşalım <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/profile.jpg" alt="Umut Öner" />
          </div>
          <p className="portrait-caption"><span /> Umut Öner · İstanbul, Türkiye</p>
        </div>
      </div>
    </section>

    <section className="intro-section container" id="hakkinda">
      <p className="section-label">01 — YOLCULUK</p>
      <div className="intro-content">
        <h2>Toprağın hafızası,<br /><em>bir kadehte buluşur.</em></h2>
        <div>
          <p>Şarap, yalnızca bir içecek değil; coğrafyanın, emeğin ve zamanın ortak dilidir. Çalışmalarımda Anadolu'nun zengin bağcılık kültürünü turizm ve gastronomiyle buluşturuyorum.</p>
          <dl className="contact-list">
            <div><dt><Mail size={17} /></dt><dd><a href="mailto:umut_oner@hotmail.com">umut_oner@hotmail.com</a></dd></div>
            <div><dt><Phone size={17} /></dt><dd><a href="tel:+905326611027">+90 (532) 661 10 27</a></dd></div>
            <div><dt><MapPin size={17} /></dt><dd>İstanbul, Türkiye</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="work-section" id="calismalar">
      <div className="container">
        <p className="section-label light">02 — ARAŞTIRMALAR</p>
        <div className="work-heading">
          <h2>Şarap turizmine<br /><em>yakından bir bakış.</em></h2>
          <BookOpen size={34} strokeWidth={1.25} />
        </div>
        <div className="research-grid">
          <article className="research-card feature-card">
            <p className="card-number">01</p>
            <h3>Türkiye'de Şarap Turisti Profili: Güney Ege Örneği</h3>
            <p>Türkiye'de gelişmekte olan şarap turizminin ekonomik, kültürel ve sosyolojik boyutlarını inceleyen öncü bir çalışma. Güney Ege'deki saha araştırmasıyla, şarap turistlerinin davranışlarını, beklentilerini ve bölgesel potansiyeli somut verilerle ele alıyor.</p>
            <p className="card-note">Akademi ve sektör profesyonelleri için özgün bir kaynak.</p>
          </article>
          <article className="research-card">
            <p className="card-number">02</p>
            <h3>Bağ Turizmi ve Şarap Rotaları</h3>
            <p>Anadolu'nun bağ rotalarına gelen ziyaretçilerin motivasyonlarını ve deneyim beklentilerini anlamaya odaklanan çalışma; üreticiler, kırsal alanlar ve şarap severler arasındaki güçlü bağı inceliyor.</p>
            <p className="card-note">“Okuyan herkes kendi bağını bulsun diye…”</p>
          </article>
        </div>
      </div>
    </section>

    <section className="gallery-section container">
      <div className="gallery-title"><p className="section-label">03 — GÖRSEL NOTLAR</p><p>Bir araştırmadan kareler</p></div>
      <div className="gallery">
        {gallery.map((image, index) => <figure className={`gallery-image gallery-${index + 1}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
      </div>
    </section>

    <footer className="footer">
      <div className="container footer-inner">
        <div><a className="brand footer-brand" href="#anasayfa"><span>U</span> Umut Öner</a><p>Şarap kültürü, bağ turizmi ve gastronomi.</p></div>
        <div className="socials">
          <a href="https://www.instagram.com/umutoner76/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="https://x.com/umutoner76" target="_blank" rel="noreferrer" aria-label="X"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  </main>
);

export default Index;
