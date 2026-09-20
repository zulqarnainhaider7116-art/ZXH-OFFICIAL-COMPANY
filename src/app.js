const WA='https://wa.me/message/VP5WENBFNFKCM1';
const projects=[
['ZXH Prompt AI','AI prompt workspace for creating, refining and organizing powerful prompts.','AI Tools','https://zxh-prompt-ai.pages.dev/'],
['ZXH TXT To File','Convert text into downloadable files through a clean, simple web interface.','Developer Tools','https://zxh-txt-to-file.pages.dev/'],
['ZXH Link Shortner','A compact link utility for turning long URLs into shareable short links.','Web Tools','https://zxh-link-shortner.pages.dev/'],
['ZXH Wallpaper Pro','A premium wallpaper experience designed for fast browsing and mobile screens.','Creative','https://zxh-wallpaper-pro.pages.dev/'],
['ZXH WhatsApp Ban Tool','An experimental WhatsApp utility project in the ZXH collection.','Utilities','https://zxh-whatsapp-ban-tool.pages.dev/'],
['ZXH YT Thumbnail Downloader','A focused utility for retrieving public YouTube thumbnail assets.','Video Tools','https://zxh-yt-thmnail-down.pages.dev/'],
['ZXH Holy Quran','Read the Holy Quran with a clean and modern digital experience.','Islamic Apps','https://zxh-holy-quran.vercel.app/'],
['Asma-ul-Husna','Explore the 99 Beautiful Names of Allah ﷻ in a dedicated digital experience.','Islamic Apps','https://asma-ul-husna-zxh.pages.dev/'],
['Asma-ul-Nabi ﷺ','Explore the blessed names of Prophet Muhammad ﷺ in a focused Islamic project.','Islamic Apps','https://asma-ul-nabi.pages.dev/'],
['ZXH Islamic Portal','A complete Islamic digital space bringing multiple resources together.','Islamic Apps','https://zxh-islamic-portal.zulqarnainhaider7116.workers.dev/'],
['ZXH Live Madni TV','Islamic content and live Madni programming in a dedicated web experience.','Islamic Apps','https://zxh-live-madni-tv.pages.dev/'],
['ZXH Official Tools','The main ZXH tools hub for AI, developer, media, social and Islamic utilities.','Platform','https://zxh-official-tools.pages.dev/'],
['ZXH Obfuscater','A browser-based code utility for transforming and protecting source text.','Developer Tools','https://zxh-obfuscater.pages.dev/'],
['ZXH Age Calculater','A simple date and age calculation utility with a focused interface.','Utilities','https://zxh-age-calculater.pages.dev/'],
['ZXH Sports TV','A sports-focused web project for discovering available sports content.','Media','https://zxh-sports-tv.pages.dev/'],
['Name Of Muhammad ﷺ','A dedicated Islamic project centered around the blessed name of Muhammad ﷺ.','Islamic Apps','https://name-of-muhammad.pages.dev/'],
['ZXH Profile Stalker','An experimental social-profile utility project in the ZXH collection.','Experimental','https://zxh-profile-stalker.pages.dev/'],
['ZXH Sim Database','A database-style lookup interface project under the ZXH brand.','Utilities','https://zxh-sim-database.pages.dev/'],
['ZXH SMS Bomber','An experimental testing/utility project in the ZXH portfolio.','Experimental','https://zxh-sms-bomber.pages.dev/'],
['ZXH Temp Mail Pro','Temporary email utility for disposable inbox workflows.','Privacy Tools','https://zxh-temp-mail-pro.pages.dev/'],
['ZXH TXT To Speech','Convert written text into spoken audio through a simple web tool.','AI Tools','https://zxh-txt-to-speech.pages.dev/'],
['ZXH TT Saver','Download TikTok media through a quick paste-and-go interface.','Social Tools','https://zxh-tt-saver.pages.dev/'],
['ZXH AI Image Generator','AI-powered image creation interface for generating visual concepts.','AI Tools','https://zxh-ai-img-generater.pages.dev/'],
['ZXH YouTube Watch Time','A focused YouTube watch-time utility project.','YouTube Tools','https://zxh-yt-watch-time.pages.dev/'],
['ZXH AI Web Creator','AI-assisted web creation concept for generating modern web experiences.','AI Tools','https://zxh-ai-web-creater.pages.dev/'],
['ZXH Image To Link','Turn an image into a shareable link through a lightweight workflow.','Developer Tools','https://zxh-img-to-link.pages.dev/'],
['ZXH Insta Saver','Save Instagram media through a paste-and-go downloader interface.','Social Tools','https://zxh-insta-saver.pages.dev/']
];
const categories=['All',...new Set(projects.map(p=>p[2]))];
const grid=document.querySelector('#projectGrid'),filters=document.querySelector('#filters'),search=document.querySelector('#search'),count=document.querySelector('#projectCount');
let active='All';
function esc(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function card(p,i){return `<article class="project-card glass tilt" data-tilt><div class="project-visual v${i%8}"><div class="visual-grid"></div><div class="visual-orb"></div><div class="visual-device"><b>ZXH</b><small>${esc(p[2])}</small><span>${String(i+1).padStart(2,'0')}</span></div><div class="visual-label">ZXH / DIGITAL PRODUCT</div></div><div class="project-body"><div class="tag">${esc(p[2])}</div><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p><div class="project-actions"><a class="open-project" href="${p[3]}" target="_blank" rel="noopener">Open Project ↗</a><a class="source-code" href="${WA}" target="_blank" rel="noopener">Source Code ↗</a></div></div></article>`}
function render(){const q=(search.value||'').toLowerCase().trim();const list=projects.filter(p=>(active==='All'||p[2]===active)&&(`${p[0]} ${p[1]} ${p[2]}`.toLowerCase().includes(q)));grid.innerHTML=list.map(card).join('');count.textContent=`${list.length} ${list.length===1?'project':'projects'}`;document.querySelectorAll('[data-tilt]').forEach(addTilt)}
filters.innerHTML=categories.map(c=>`<button class="filter ${c===active?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
filters.addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;active=b.dataset.cat;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render()});
search.addEventListener('input',render);render();
function addTilt(el){el.addEventListener('pointermove',e=>{if(matchMedia('(pointer:coarse)').matches)return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--rx',`${-y*5}deg`);el.style.setProperty('--ry',`${x*7}deg`)});el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')})}
const nav=document.querySelector('#mainNav'),menuBtn=document.querySelector('#menuBtn');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const themeBtn=document.querySelector('#themeBtn');themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');themeBtn.textContent=document.body.classList.contains('light')?'☾':'◐';localStorage.setItem('zxh-theme',document.body.classList.contains('light')?'light':'dark')});if(localStorage.getItem('zxh-theme')==='light'){document.body.classList.add('light');themeBtn.textContent='☾'}
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--cx',e.clientX+'px');document.documentElement.style.setProperty('--cy',e.clientY+'px')},{passive:true});
const hero=document.querySelector('.hero');window.addEventListener('scroll',()=>{const y=scrollY;hero.style.setProperty('--scroll-depth',Math.min(y/900,1));document.querySelector('#nav').classList.toggle('scrolled',y>40)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal,.reveal-delay,.service,.project-card,.skill-list>div,.contact-panel').forEach(x=>io.observe(x));
window.addEventListener('load',()=>setTimeout(()=>document.body.classList.add('loaded'),450));
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
