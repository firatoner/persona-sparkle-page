import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const grapePositions = [
  [74, 0], [47, 29], [97, 29], [22, 59], [72, 59], [122, 59], [48, 90], [98, 90], [23, 121], [73, 121], [123, 121], [49, 152], [99, 152], [74, 183],
];

function Grapes() {
  return <div className="grape-cluster">{grapePositions.map(([left, top], index) => <i className="grape" style={{ left, top }} key={index} />)}</div>;
}

function Vine() {
  return <div className="vine" aria-hidden="true"><div className="vine-sun" /><div className="vine-hill hill-far" /><div className="vine-hill hill-near" /><div className="vine-stalk" /><i className="leaf leaf-a" /><i className="leaf leaf-b" /><i className="leaf leaf-c" /><Grapes /></div>;
}

export default function Index() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(".intro-panel", { autoAlpha: 1, y: 0 });
      gsap.set(".ripening-panel, .harvest-panel, .research-panel, .final-panel", { autoAlpha: 0, y: 0 });
      gsap.set(".basket", { autoAlpha: 0, x: -20, y: 90, rotate: -8 });
      gsap.set(".barrel", { autoAlpha: 0, y: 110, rotate: 7 });
      gsap.set(".wine-glass", { autoAlpha: 0, y: 90, scale: 0.82 });
      gsap.set(".final-wash", { autoAlpha: 0 });
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: ".wine-story", start: "top top", end: "+=4400", scrub: 1, pin: true, anticipatePin: 1 },
      });
      timeline
        .to(".intro-panel", { autoAlpha: 0, duration: 1 })
        .to(".vine-sun", { y: 100, scale: 1.35, backgroundColor: "#df8b5d", duration: 1 }, "<")
        .to(".grape", { backgroundColor: "#641d35", scale: 1.08, duration: 1, stagger: 0.025 }, "<")
        .to(".ripening-panel", { autoAlpha: 1, y: 0, duration: 0.8 }, "<.35")
        .to(".ripening-panel", { autoAlpha: 0, duration: 0.7 }, "+=1.15")
        .to(".vine", { x: -220, y: -110, scale: 0.78, duration: 1 }, "<")
        .to(".basket", { autoAlpha: 1, x: 0, y: 0, rotate: 0, duration: 1 }, "<.2")
        .to(".harvest-panel", { autoAlpha: 1, y: 0, duration: 0.8 }, "<.35")
        .to(".harvest-panel", { autoAlpha: 0, duration: 0.7 }, "+=1.2")
        .to(".vine, .basket", { autoAlpha: 0, y: -150, duration: 0.8 }, "<")
        .to(".barrel", { autoAlpha: 1, y: 0, rotate: 0, duration: 1 }, "<.2")
        .to(".research-panel", { autoAlpha: 1, y: 0, duration: 0.8 }, "<.25")
        .to(".research-panel", { autoAlpha: 0, duration: 0.7 }, "+=1.35")
        .to(".barrel", { autoAlpha: 0, y: -150, duration: 0.75 }, "<")
        .to(".final-wash", { autoAlpha: 1, duration: 0.8 }, "<")
        .to(".wine-glass", { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, "<")
        .to(".pour", { autoAlpha: 1, duration: 0.35 }, "<.25")
        .to(".wine-fill", { height: "57%", duration: 1.5 }, "<")
        .to(".final-panel", { autoAlpha: 1, y: 0, duration: 0.8 }, "<.35");
    }, root);
    return () => context.revert();
  }, []);

  return <div className="story-app" ref={root}>
    <header className="site-header"><a href="#baslangic" className="logo" aria-label="Umut Öner ana sayfa">U<span>°</span></a><span>UMUT ÖNER · ŞARAP KÜLTÜRÜ</span><a href="mailto:umut_oner@hotmail.com">İletişim <ArrowUpRight size={15} /></a></header>
    <main className="wine-story" id="baslangic">
      <div className="scene-background" /><div className="final-wash" /><div className="scene-noise" />
      <div className="story-counter"><b>01</b><i /><span>05</span></div>
      <Vine />
      <div className="basket" aria-hidden="true"><Grapes /></div>
      <div className="barrel" aria-hidden="true"><i /><i /><b>UO</b></div>
      <div className="wine-glass" aria-hidden="true"><div className="pour" /><div className="wine-fill" /><div className="glass-stem" /><div className="glass-foot" /></div>

      <section className="panel intro-panel"><p className="eyebrow">BİR BAĞIN HİKÂYESİ</p><h1>Topraktan<br /><em>kadehe.</em></h1><p className="panel-lead">Anadolu'nun bağcılık mirası; emek, zaman ve merakla dönüşen bir hikâye.</p><p className="start-scroll">Kaydır ve keşfet <ArrowDown size={17} /></p></section>
      <section className="panel ripening-panel panel-right"><p className="eyebrow">01 — OLGUNLAŞMA</p><h2>Güneş, sabır<br />ve <em>bir mevsim.</em></h2><p>Her salkım toprağın karakterini taşır. Yeşilden mora dönen taneler, bağın bütün yıl biriktirdiği hikâyedir.</p></section>
      <section className="panel harvest-panel panel-right"><p className="eyebrow">02 — HASAT</p><h2>Doğru anda<br /><em>toplamak.</em></h2><p>Hasat, yalnızca bir meyveyi toplamak değildir. Bağın ritmini, iklimi ve emeği dinlemeyi gerektirir.</p></section>
      <section className="panel research-panel"><p className="eyebrow">03 — ARAŞTIRMALAR</p><h2>Bağların izinde,<br /><em>insan hikâyeleri.</em></h2><div className="research-links"><a href="#iletisim"><span>01</span>Türkiye'de Şarap Turisti Profili <ArrowUpRight size={17} /></a><a href="#iletisim"><span>02</span>Bağ Turizmi ve Şarap Rotaları <ArrowUpRight size={17} /></a></div></section>
      <section className="panel final-panel" id="iletisim"><p className="eyebrow">04 — KADEH</p><h2>Bir yolculuk,<br /><em>tek yudumda.</em></h2><p>Şarabın içinde toprağın sesi, bağın rüzgârı ve onu büyüten insanların emeği vardır.</p><div className="contact-card"><a href="mailto:umut_oner@hotmail.com"><Mail size={16} /> umut_oner@hotmail.com</a><a href="tel:+905326611027"><Phone size={16} /> +90 532 661 10 27</a><span><MapPin size={16} /> İstanbul, Türkiye</span></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} UMUT ÖNER</span><div><a href="https://www.instagram.com/umutoner76/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="mailto:umut_oner@hotmail.com">E-posta <ArrowUpRight size={14} /></a></div></footer>
  </div>;
}
