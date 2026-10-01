import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, Code2, Server, Palette, Mail, Phone, MapPin, Menu, X, Download, Check, Layers, GraduationCap } from 'lucide-react';
import { content, career } from './content';




const icons = [Code2, Server, Palette];const email = 'ibrahimkhaloud@gmail.com';
export default function App() {
  const [lang, setLang] = useState(() => {
    try { const saved = localStorage.getItem('portfolio-language'); return ['en', 'ar', 'am'].includes(saved) ? saved : 'en'; } catch { return 'en'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [copied, setCopied] = useState(false);
  const ar = lang === 'ar';
  const c = content[lang] || content.en;
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    document.title = c.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.description);
    try { localStorage.setItem('portfolio-language', lang); } catch { /* Storage may be disabled. */ }
  }, [lang, ar, c]);
  useEffect(() => {
    const onEscape = event => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); }
    catch { window.location.href = `mailto:${email}`; }
  }
  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="site-header"><div className="wrap header-inner">
      <a className="wordmark" href="#home" aria-label={c.name}><span className="monogram" dir="ltr">ik<span>.</span></span><span className="wordmark-name">{c.name}</span></a>
      <nav className={menuOpen ? 'nav is-open' : 'nav'} id="main-navigation" aria-label={c.navigation}>
        {c.nav.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>{c.letsTalk}<ArrowUpRight size={16}/></a>
      </nav>
      <div className="header-actions"><div className="language-options" role="group" aria-label="Language"><button type="button" aria-pressed={lang === 'en'} onClick={() => { setLang('en'); setMenuOpen(false); }}>EN</button><button type="button" aria-pressed={lang === 'ar'} onClick={() => { setLang('ar'); setMenuOpen(false); }}>عربي</button><button type="button" aria-pressed={lang === 'am'} onClick={() => { setLang('am'); setMenuOpen(false); }}>አማ</button></div><button className="menu-button" aria-label={menuOpen ? c.closeMenu : c.openMenu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </div></header>
    <main id="main">
      <section className="hero wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/>{c.status}</div><h1>{c.hero[0]}<br/><span>{c.hero[1]}</span><br/>{c.hero[2]}</h1><p className="hero-description">{c.intro}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{c.viewWork}<ArrowUpRight size={19}/></a><a className="button button-secondary" href="/cv.pdf" download="Ibrahim-Khalid-CV.pdf">{c.download}<Download size={18}/></a></div><div className="hero-location"><MapPin size={15}/>{c.location}<span className="small-divider"/>{c.languages}</div></div>
        <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="system-card"><div className="system-top"><span><i/><i/><i/></span><span>ibrahim / workspace</span><span>01</span></div><div className="system-heading"><span className="system-kicker">THINK. BUILD. IMPROVE.</span><div className="system-symbol">{'{'}<span>ik</span>{'}'}</div><p>Connecting technology<br/>with everyday business.</p></div><div className="system-stack"><div><Code2 size={19}/><span>Software development</span><Check size={14}/></div><div><Server size={19}/><span>IT & systems</span><Check size={14}/></div><div><Palette size={19}/><span>Design & digital</span><Check size={14}/></div></div><div className="system-bottom"><span className="status-dot"/> READY TO COLLABORATE <span>↗</span></div></div><div className="floating-label"><span>01 /</span> FROM IDEA TO IMPLEMENTATION</div></div>
      </section>
      <div className="wrap proof-strip"><div><strong>2012</strong><span>{c.since}</span></div><div><strong dir="ltr">C# · PHP · Java · C++</strong><span>{c.coreTools}</span></div><div><strong>{c.sectorsValue}</strong><span>{c.sectors}</span></div><a href="#about" aria-label={c.aboutTitle}><ArrowDown size={22}/></a></div>
      <section id="about" className="section wrap about-section"><div><div className="eyebrow">01 / {c.aboutLabel}</div><h2>{c.aboutTitle}</h2></div><div className="about-body"><p>{c.aboutText}</p><p className="muted">{c.aboutExtra}</p><div className="education"><GraduationCap size={23}/><div><strong>{c.degree}</strong><span>{c.university}</span></div></div></div></section>
      <section id="skills" className="section shaded"><div className="wrap"><div className="section-heading"><div><div className="eyebrow">02 / {c.skillsLabel}</div><h2>{c.skillsTitle}</h2></div><p>{c.skillsIntro}</p></div><div className="expertise-grid">{c.expertise.map((item, index) => { const Icon = icons[index]; return <article className="expertise-card" key={item.title}><div className="card-top"><Icon size={25}/><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>; })}</div></div></section>
      <section id="projects" className="section wrap"><div className="section-heading"><div><div className="eyebrow">03 / {c.workLabel}</div><h2>{c.workTitle}</h2></div><p>{c.workIntro}</p></div><div className="project-filters" role="group" aria-label={c.filterLabel}>{c.filters.map(([id, label]) => <button key={id} aria-pressed={filter === id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{label}</button>)}</div><div className="project-grid">{c.projects.filter(p => filter === 'all' || p.type === filter).map(p => <article className="project-card" key={p.id}><div className={`project-visual project-visual-${p.id}`} aria-hidden="true"><div className="visual-window"><div className="visual-window-header"><span/><span/><span/></div><div className="visual-window-content"><div className="visual-sidebar"/><div className="visual-dashboard"><Layers size={24}/><div className="visual-bars"><i/><i/><i/><i/><i/></div><div className="visual-lines"><i/><i/><i/></div></div></div></div><span className="visual-number">0{p.id}</span></div><div className="project-body"><div className="project-meta"><span>{p.category}</span><span dir="ltr">{p.year}</span></div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div></article>)}</div><p className="project-note">{c.projectNote}</p></section>
      <section id="experience" className="section shaded"><div className="wrap experience-layout"><div className="experience-intro"><div className="eyebrow">04 / {c.experienceLabel}</div><h2>{c.experienceTitle}</h2><p>{c.experienceIntro}</p><a className="text-link" href="/cv.pdf" download="Ibrahim-Khalid-CV.pdf">{c.download}<ArrowUpRight size={18}/></a></div><div className="timeline">{career.map(([year, company, en, arabic, amharic]) => <article className="timeline-item" key={company}><span className="timeline-year" dir="ltr">{year}</span><div><h3>{lang === 'am' ? (amharic || en) : ar ? arabic : en}</h3><p>{company}</p></div></article>)}</div></div></section>
      <section id="services" className="section wrap"><div className="section-heading"><div><div className="eyebrow">05 / {c.servicesLabel}</div><h2>{c.servicesTitle}</h2></div><p>{c.servicesIntro}</p></div><div className="services-grid">{c.services.map(([title, text], i) => <a className="service-card" href="#contact" key={title}><span className="service-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={22}/></a>)}</div></section>
      <section id="contact" className="contact-section"><div className="wrap contact-layout"><div><div className="eyebrow"><span className="status-dot"/>{c.contactLabel}</div><h2>{c.contactTitle}<br/><span>{c.contactAccent}</span></h2><p>{c.contactIntro}</p><a href={`mailto:${email}`} className="button button-primary">{c.letsTalk}<ArrowUpRight size={19}/></a></div><div className="contact-details"><a href={`mailto:${email}`}><Mail size={20}/><div><span>{c.email}</span><strong dir="ltr">{email}</strong></div><ArrowUpRight size={18}/></a><a href="tel:+966538136393"><Phone size={20}/><div><span>{c.ksaPhone}</span><strong dir="ltr">+966 538 136 393</strong></div><ArrowUpRight size={18}/></a><a href="tel:+251915555155"><Phone size={20}/><div><span>{c.ethPhone}</span><strong dir="ltr">+251 915 555 155</strong></div><ArrowUpRight size={18}/></a><button onClick={copyEmail}>{copied ? <Check size={17}/> : <Mail size={17}/>}<span aria-live="polite">{copied ? c.copied : c.copyEmail}</span></button></div></div></section>
    </main>
    <footer className="wrap footer"><a className="monogram" href="#home" aria-label={c.backTop} dir="ltr">ik<span>.</span></a><span>© {new Date().getFullYear()} {c.name}</span><span>{c.footer}</span><a href="#home" className="text-link">{c.backTop}<ArrowUpRight size={16}/></a></footer>
  </>;
}



