import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Instagram, MapPin, Phone } from "lucide-react";

const email = "umut_oner@hotmail.com";
const focusAreas = [
  { number: "01", title: "Şarap kültürü", description: "Bir kadehin ardındaki coğrafyayı, üretimi ve kültürel bağları merak ediyorum." },
  { number: "02", title: "Bağ turizmi", description: "Bağları yalnızca bir rota olarak değil, yerel yaşamla kurulan bir karşılaşma olarak ele alıyorum." },
  { number: "03", title: "Araştırma", description: "Şarap turizmine dair soruları, insan deneyiminden ve yerin hikâyesinden hareketle inceliyorum." },
];

export default function Index() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const items = Array.from(page.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -45px 0px" });
    items.forEach((item) => observer.observe(item));
    page.classList.add("motion-ready");
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio" ref={pageRef}>
      <a className="skip-link" href="#ana-icerik">İçeriğe geç</a>
      <header className="site-header">
        <a className="wordmark" href="#ust" aria-label="Umut Öner, sayfanın başına dön">Umut <span>Öner</span><span className="wordmark-dot">.</span></a>
        <nav className="main-nav" aria-label="Ana menü">
          <a href="#hakkimda">Hakkımda</a>
          <a href="#calismalar">Çalışmalar</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-cta" href={`mailto:${email}`}>Birlikte konuşalım <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" /></a>
      </header>

      <main id="ana-icerik">
        <section className="hero" id="ust" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="hero-kicker" data-reveal><span className="kicker-line" /> ŞARAP KÜLTÜRÜ · TURİZM · ARAŞTIRMA</div>
            <h1 id="hero-title" data-reveal>Bağların<br /><em>izinde.</em></h1>
            <p className="hero-intro" data-reveal>Ben Umut Öner. Şarabın çevresinde oluşan kültürü, bağların anlattığı hikâyeleri ve insanların bu yolculukla kurduğu ilişkiyi araştırıyorum.</p>
            <div className="hero-actions" data-reveal>
              <a className="button button-primary" href="#calismalar">Çalışmaları keşfet <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="text-link" href="#hakkimda">Beni tanıyın <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
            <p className="hero-location" data-reveal><MapPin size={15} strokeWidth={1.6} aria-hidden="true" /> İstanbul, Türkiye <span aria-hidden="true">/</span> İnsan · Yer · Hikâye</p>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="portrait-frame">
              <img className="portrait" src="/profile.jpg" alt="Umut Öner'in portresi" />
              <span className="portrait-caption">UMUT ÖNER <span>—</span> İSTANBUL</span>
            </div>
            <img className="hero-illustration" src="/portfolio-illustration.svg" alt="" aria-hidden="true" />
            <div className="visual-index" aria-hidden="true">UMUT ÖNER / PORTRE</div>
          </div>
          <div className="hero-bottom"><span>ŞARAP KÜLTÜRÜNE DAİR BİR BAKIŞ</span><a href="#hakkimda">AŞAĞI KAYDIRIN <ArrowDown size={14} aria-hidden="true" /></a></div>
        </section>

        <nav className="chapter-nav" aria-label="Bölümler">
          <a href="#hakkimda"><span>01</span> Hakkımda <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#odak"><span>02</span> Odak alanları <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#calismalar"><span>03</span> Çalışmalar <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#iletisim"><span>04</span> İletişim <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>

        <section className="about section-shell" id="hakkimda" aria-labelledby="about-title">
          <div className="section-meta" data-reveal><span>01 / HAKKIMDA</span><span className="meta-line" /></div>
          <div className="about-grid">
            <h2 id="about-title" data-reveal>Her bağın<br />bir <em>hikâyesi</em> var.</h2>
            <div className="about-copy" data-reveal>
              <p className="large-copy">Şarap, benim için bir ürünün ötesinde; insanı, toprağı ve kültürü bir araya getiren bir anlatı.</p>
              <p>Bu merakla şarap turisti profilini, bağ turizmini ve şarap rotalarını araştırıyorum. Amacım, deneyimin ardındaki insanı ve yerin özgün karakterini daha iyi anlamak.</p>
              <a className="underlined-link" href={`mailto:${email}`}>Tanışalım <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="expertise" id="odak" aria-labelledby="expertise-title">
          <div className="section-shell">
            <div className="section-meta light" data-reveal><span>02 / ODAK ALANLARI</span><span className="meta-line" /></div>
            <div className="expertise-heading" data-reveal>
              <h2 id="expertise-title">Merakın açtığı<br /><em>üç yol.</em></h2>
              <p>Bir coğrafyayı anlamak, orada anlatılan ve yaşanan hikâyelere kulak vermekle başlar.</p>
            </div>
            <div className="focus-list">
              {focusAreas.map((area) => (
                <article className="focus-item" key={area.number} data-reveal>
                  <span className="focus-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="focus-decoration" aria-hidden="true">✳</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-shell" id="calismalar" aria-labelledby="work-title">
          <div className="section-meta" data-reveal><span>03 / ÇALIŞMALAR</span><span className="meta-line" /></div>
          <div className="work-heading" data-reveal>
            <h2 id="work-title">Araştırmanın<br /><em>izinde.</em></h2>
            <p>Şarap turizmine ve bağların kültürel dünyasına yönelen çalışmalar ve araştırma konuları.</p>
          </div>
          <div className="work-grid">
            <article className="featured-work" data-reveal>
              <div className="book-cover-wrap"><img src="/lovable-uploads/wine1.jpg" alt="Umut Öner'in Türkiye'de Şarap Turisti Profili kitabının kapağı" loading="lazy" /></div>
              <div className="featured-copy"><span className="project-type">YAYIN / ARAŞTIRMA</span><h3>Türkiye’de Şarap<br />Turisti Profili</h3><p>Şarap turisti deneyimini merkeze alan bir çalışma.</p><span className="project-label">UMUT ÖNER · LIBRUM</span></div>
            </article>
            <article className="topic-work" data-reveal>
              <span className="project-type">ARAŞTIRMA KONUSU</span>
              <div><span className="topic-number">02</span><h3>Bağ Turizmi ve<br />Şarap Rotaları</h3><p>Bağlar, rotalar ve yerel deneyim arasındaki ilişki üzerine bir araştırma alanı.</p></div>
              <span className="topic-mark" aria-hidden="true">02 / 02</span>
            </article>
          </div>
        </section>

        <section className="contact" id="iletisim" aria-labelledby="contact-title">
          <div className="section-shell">
            <div className="section-meta light" data-reveal><span>04 / İLETİŞİM</span><span className="meta-line" /></div>
            <div className="contact-grid">
              <div data-reveal><p className="contact-intro">BİR FİKİR, BİR SORU VEYA SADECE BİR MERHABA İÇİN</p><h2 id="contact-title">Sohbet<br /><em>edelim.</em></h2></div>
              <div className="contact-details" data-reveal>
                <p>Şarap kültürü, turizm ve araştırma üzerine konuşmak isterseniz bana ulaşın.</p>
                <a className="email-link" href={`mailto:${email}`}>{email}<ArrowUpRight size={25} strokeWidth={1.4} aria-hidden="true" /></a>
                <a href="tel:+905326611027"><Phone size={17} aria-hidden="true" /> +90 532 661 10 27</a>
                <a href="https://www.instagram.com/umutoner76/" target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /> Instagram <ArrowUpRight size={15} aria-hidden="true" /></a>
                <span><MapPin size={17} aria-hidden="true" /> İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#ust">Umut Öner<span>.</span></a><span>© {new Date().getFullYear()} UMUT ÖNER</span><a href="#ust">Yukarı dön ↑</a></footer>
    </div>
  );
}
