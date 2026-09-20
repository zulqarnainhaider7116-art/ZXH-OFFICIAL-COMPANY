import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const social=[
 ['Instagram','https://www.instagram.com/stylish.munda875/','◎'],
 ['TikTok','https://vm.tiktok.com/ZS9FMYvMQRAES-PVX07/','♪'],
 ['Snapchat','https://www.snapchat.com/add/zxh-official','◈'],
 ['Facebook','https://www.facebook.com/share/1E86tuDM3C/','f']
];
const wa='https://wa.me/message/VP5WENBFNFKCM1';
const channel='https://whatsapp.com/channel/0029Vb6lszR7YSd3iYfa2V0n';
const backup='https://whatsapp.com/channel/0029Vb8XF2y1NCrQDWetrk1r';
const projects=[
 ['ZXH Prompt AI','AI prompt workspace for creating, refining and organizing powerful prompts.','AI Tools','https://zxh-prompt-ai.pages.dev/'],
 ['ZXH TXT To File','Convert text into downloadable files through a clean, simple web interface.','Developer Tools','https://zxh-txt-to-file.pages.dev/'],
 ['ZXH Link Shortner','A compact link utility for turning long URLs into shareable short links.','Web Tools','https://zxh-link-shortner.pages.dev/'],
 ['ZXH Wallpaper Pro','Premium wallpaper experience built for fast browsing and mobile screens.','Creative','https://zxh-wallpaper-pro.pages.dev/'],
 ['ZXH WhatsApp Ban Tool','Experimental WhatsApp utility project from the ZXH tools collection.','Utilities','https://zxh-whatsapp-ban-tool.pages.dev/'],
 ['ZXH YT Thumbnail Downloader','Grab YouTube thumbnail assets quickly from a public video URL.','Video Tools','https://zxh-yt-thmnail-down.pages.dev/'],
 ['ZXH Holy Quran','Read the Holy Quran through a clean, modern and focused digital experience.','Islamic Apps','https://zxh-holy-quran.vercel.app/'],
 ['ZXH Live Madni TV','Islamic content and live Madni programming in a dedicated web experience.','Islamic Apps','https://zxh-live-madni-tv.pages.dev/'],
 ['ZXH Islamic Portal','A broader Islamic digital space bringing multiple resources together.','Islamic Apps','https://zxh-islamic-portal.pages.dev/'],
 ['ZXH Official Tools','The main ZXH tools hub for web utilities, AI, developer and media tools.','Platform','https://zxh-official-tools.pages.dev/'],
 ['ZXH Obfuscater','A browser-based code utility for transforming and protecting source text.','Developer Tools','https://zxh-obfuscater.pages.dev/'],
 ['ZXH Age Calculater','A simple date and age calculation utility with a focused interface.','Utilities','https://zxh-age-calculater.pages.dev/'],
 ['ZXH Sports TV','A sports-focused web project for discovering available sports content.','Media','https://zxh-sports-tv.pages.dev/'],
 ['Name Of Muhammad ﷺ','A dedicated Islamic project centered around the blessed name of Muhammad ﷺ.','Islamic Apps','https://name-of-muhammad.pages.dev/'],
 ['ZXH Profile Stalker','Experimental social-profile utility project in the ZXH collection.','Experimental','https://zxh-profile-stalker.pages.dev/'],
 ['ZXH Sim Database','A database-style lookup interface project under the ZXH brand.','Utilities','https://zxh-sim-database.pages.dev/'],
 ['ZXH SMS Bomber','Experimental testing/utility project in the ZXH portfolio.','Experimental','https://zxh-sms-bomber.pages.dev/'],
 ['ZXH Temp Mail Pro','Temporary email utility for disposable inbox workflows.','Privacy Tools','https://zxh-temp-mail-pro.pages.dev/'],
 ['ZXH TXT To Speech','Convert written text into spoken audio through a simple web tool.','AI Tools','https://zxh-txt-to-speech.pages.dev/'],
 ['ZXH TT Saver','Download TikTok media through a quick paste-and-go interface.','Social Tools','https://zxh-tt-saver.pages.dev/'],
 ['ZXH AI Image Generator','AI-powered image creation interface for generating visual concepts.','AI Tools','https://zxh-ai-img-generater.pages.dev/'],
 ['ZXH YouTube Watch Time','A focused YouTube watch-time utility project.','YouTube Tools','https://zxh-yt-watch-time.pages.dev/'],
 ['ZXH AI Web Creator','AI-assisted web creation concept for generating modern web experiences.','AI Tools','https://zxh-ai-web-creater.pages.dev/'],
 ['ZXH Image To Link','Turn an image into a shareable link through a lightweight workflow.','Developer Tools','https://zxh-img-to-link.pages.dev/'],
 ['ZXH Insta Saver','Save Instagram media through a paste-and-go downloader interface.','Social Tools','https://zxh-insta-saver.pages.dev/']
];
const skills=['Web Development','Web Design','UI / UX Design','React & JavaScript','PWA Development','Three.js & 3D Web','AI Web Tools','SEO & Meta','Cloud Deployment','Digital Product Design'];
function App(){
 const [menu,setMenu]=useState(false); const [query,setQuery]=useState(''); const [cat,setCat]=useState('All'); const [theme,setTheme]=useState(false); const scene=useRef(null);
 useEffect(()=>{const fn=e=>{if(!scene.current)return;const x=(e.clientX/innerWidth-.5)*10,y=(e.clientY/innerHeight-.5)*8;scene.current.style.setProperty('--mx',x+'deg');scene.current.style.setProperty('--my',y+'deg')};addEventListener('mousemove',fn);return()=>removeEventListener('mousemove',fn)},[]);
 const cats=['All',...new Set(projects.map(p=>p[2]))]; const filtered=projects.filter(p=>(cat==='All'||p[2]===cat)&&p[0].toLowerCase().includes(query.toLowerCase()));
 return <div className={theme?'app light':'app'} ref={scene}>
  <header className="nav glass"><a className="brand" href="#top"><span className="mark">ZXH</span><span><b>OFFICIAL</b><small>COMPANY</small></span></a><nav className={menu?'open':''}><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><div className="nav-actions"><button className="icon-btn" onClick={()=>setTheme(!theme)} aria-label="theme">{theme?'☾':'◐'}</button><button className="menu" onClick={()=>setMenu(!menu)}>☰</button></div></header>
  <main id="top">
   <section className="hero">
    <div className="office-bg"><div className="tower t1"/><div className="tower t2"/><div className="tower t3"/><div className="window-glow"/></div>
    <div className="hero-copy"><div className="eyebrow">IDEAS · CODE · DESIGN · DEPLOY</div><h1>ZXH <em>OFFICIAL</em><span>COMPANY</span></h1><p className="lead">Web • Apps • Digital Solutions</p><p className="script">Turning Ideas Into Reality</p><div className="hero-buttons"><a className="btn primary" href="#projects">Explore Projects ↗</a><a className="btn" href={wa} target="_blank">Work With Me ↗</a></div><div className="hero-meta"><span>⚡ Modern</span><span>◇ Secure</span><span>✦ Scalable</span></div></div>
    <div className="desk-scene"><div className="shelf"><div className="shelf-logo">ZXH<br/><small>OFFICIAL</small></div><i></i><i></i><i></i></div><div className="desk"><div className="laptop"><div className="screen"><span>&lt;ZXH /&gt;</span><code>const company = "ZXH OFFICIAL";<br/>build({`web`, `apps`, `digital`});<br/>return innovation;</code></div><div className="keyboard"/></div><div className="phone"><b>ZXH</b><small>OFFICIAL</small><span>BUILD · CREATE · SCALE</span></div><div className="bottle">ZXH<small>OFFICIAL</small></div><div className="plant"><i/><i/><i/><b/></div><div className="book">WEB<br/>DESIGN<br/>INNOVATION</div></div></div>
    <div className="founder-card glass"><div className="founder-photo"><img src="/assets/zxh-founder.jpg" alt="ZXH founder portrait"/></div><div><span>FOUNDER / CREATIVE DEVELOPER</span><h3>Zulqarnain X Haider</h3><p>Web Developer · Web Designer · UI/UX Designer</p><a href="#contact">View Profile →</a></div></div>
   </section>
   <section className="section about" id="about"><div className="section-head"><span>01 — ABOUT</span><h2>Building digital products<br/><i>with a company mindset.</i></h2></div><div className="about-grid"><div className="about-copy"><p>ZXH OFFICIAL is a modern digital brand focused on web development, design, tools and creative technology. The goal is simple: turn useful ideas into polished digital experiences.</p><p>From lightweight utilities to full web platforms, every project is designed around clarity, performance, responsive UI and a distinctive visual identity.</p><a className="text-link" href={channel} target="_blank">Join the official channel ↗</a></div><div className="about-stat glass"><strong>25+</strong><span>Featured projects</span><strong>10</strong><span>Core skills</span><strong>24/7</strong><span>Digital presence</span></div></div></section>
   <section className="section" id="services"><div className="section-head"><span>02 — SERVICES</span><h2>From concept to<br/><i>launch.</i></h2></div><div className="service-grid">{[['⌘','Web Development','Fast, responsive and scalable websites.'],['◫','Web Design','Premium visual systems and responsive layouts.'],['◇','UI / UX Design','Clear interfaces with strong interaction design.'],['◌','PWA & Tools','Installable web apps and practical utilities.'],['△','3D Web','Depth, motion and cinematic product presentation.'],['✦','AI Solutions','Modern AI-powered web experiences and tools.']].map(x=><article className="service glass" key={x[1]}><div className="service-icon">{x[0]}</div><h3>{x[1]}</h3><p>{x[2]}</p><span>EXPLORE →</span></article>)}</div></section>
   <section className="section projects" id="projects"><div className="section-head"><span>03 — PROJECT ARCHIVE</span><h2>The ZXH<br/><i>digital collection.</i></h2></div><div className="filters"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..."/>{cats.map(c=><button className={cat===c?'active':''} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div><div className="project-grid">{filtered.map((p,i)=><article className="project glass" key={p[3]}><div className={'project-art art-'+(i%7)}><div className="mini-device"><span>ZXH</span><small>{p[2]}</small></div><div className="art-orb"/></div><div className="project-body"><span className="tag">{p[2]}</span><h3>{p[0]}</h3><p>{p[1]}</p><div className="project-actions"><a className="btn small" href={p[3]} target="_blank" rel="noreferrer">Open Project ↗</a><a className="source" href={wa} target="_blank" rel="noreferrer">Source Code / Buy ↗</a></div></div></article>)}</div>{!filtered.length&&<div className="empty glass">No matching project found.</div>}</section>
   <section className="section skills" id="skills"><div className="section-head"><span>04 — SKILLS</span><h2>Tools, craft &<br/><i>technical direction.</i></h2></div><div className="skill-cloud">{skills.map((s,i)=><div className="skill glass" key={s}><b>0{i+1}</b><span>{s}</span><i>↗</i></div>)}</div></section>
   <section className="section contact" id="contact"><div className="contact-panel glass"><div><span>05 — CONTACT</span><h2>Have an idea?<br/><i>Let's build it.</i></h2><p>For project work, custom websites, source code purchases or digital collaboration, contact ZXH OFFICIAL directly.</p></div><div className="contact-links"><a href={wa} target="_blank">WhatsApp Contact ↗</a><a href={channel} target="_blank">Official Channel ↗</a><a href={backup} target="_blank">Backup Channel ↗</a></div></div></section>
  </main>
  <footer><div className="footer-main"><div className="brand"><span className="mark">ZXH</span><span><b>OFFICIAL</b><small>COMPANY</small></span></div><div><p>Web • Apps • Digital Solutions</p><p className="muted">Turning Ideas Into Reality</p></div><div className="socials">{social.map(s=><a key={s[0]} href={s[1]} target="_blank" rel="noreferrer" title={s[0]}>{s[2]}</a>)}</div></div><div className="footer-bottom"><span>© 2026 ZXH OFFICIAL COMPANY</span><span>POWERED BY ZULQARNAIN X HAIDER</span><span>@stylish.munda875</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
