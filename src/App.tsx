import { useEffect, useState } from 'react';
import SplitText from './components/SplitText.jsx';

const NAV_IDS = ['about', 'skills', 'experience', 'contact'] as const;
type NavId = (typeof NAV_IDS)[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavId>('about');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const getScrollLine = () => {
      const header = document.querySelector('header');
      const h = header?.getBoundingClientRect().height ?? 72;
      return window.scrollY + h + 32;
    };

    const pickSection = (): NavId => {
      const y = getScrollLine();
      let next: NavId = 'about';
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) next = id;
      }
      return next;
    };

    const update = () => setActiveSection(pickSection());

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const onHash = () => {
      const raw = window.location.hash.slice(1);
      if (NAV_IDS.includes(raw as NavId)) setActiveSection(raw as NavId);
    };
    window.addEventListener('hashchange', onHash);

    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const navClass = (id: NavId) =>
    [
      "font-['Outfit'] font-bold tracking-tight cursor-pointer active:scale-95 transition-colors",
      activeSection === id
        ? 'text-tertiary-container border-b-4 border-tertiary-container pb-1 dark:text-primary dark:border-primary'
        : 'text-on-surface hover:text-secondary border-b-4 border-transparent pb-1',
    ].join(' ');

  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary/30">
      
{/*  TopNavBar  */}
<header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b-2 border-on-surface hard-shadow">
<nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
<div className="cursor-pointer hover:-translate-y-1 transition-all active:scale-95 rounded-full border-2 border-on-surface overflow-hidden h-9 w-9 shrink-0">
<img
  src="/Image_z/touxiang.jpg"
  alt="Personal avatar"
  className="h-full w-full object-cover object-[center_35%]"
  width={36}
  height={36}
  draggable={false}
/>
</div>
<div className="hidden md:flex items-center gap-8">
<a className={navClass('about')} href="#about">About</a>
<a className={navClass('skills')} href="#skills">Skills</a>
<a className={navClass('experience')} href="#experience">Experience</a>
<a className={navClass('contact')} href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button 
  onClick={() => setIsDark(!isDark)}
  className="w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors"
  aria-label="Toggle dark mode"
>
  <span className="material-symbols-outlined text-on-surface">
    {isDark ? 'light_mode' : 'dark_mode'}
  </span>
</button>
<button className="bg-primary text-on-primary px-6 py-2 border-2 border-on-surface hard-shadow font-bold font-headline hover:-translate-y-0.5 transition-all active:scale-95">
                Let's Talk
            </button>
</div>
</nav>
</header>
<main className="max-w-7xl mx-auto px-6 md:px-12">
{/*  Hero Section  */}
<section className="min-h-[819px] flex flex-col md:flex-row items-center gap-12 py-20 relative overflow-hidden">
{/*  Background Decorations  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-20 left-10 w-48 h-12 bg-primary rounded-full -z-10 -rotate-12 opacity-80 backdrop-blur-md"></div>
<div className="flex-1 space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high border-2 border-on-surface rounded-full">
<span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
<span className="text-sm font-bold uppercase tracking-widest font-label">Available for Freelance</span>
</div>
<h1 className="text-6xl md:text-8xl font-headline font-black text-on-surface leading-[1.08] tracking-tighter">
<SplitText
  text={"Hi, I'm"}
  tag="span"
  className="text-inherit"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>
<br />
<SplitText
  text="Zhang Bin"
  tag="span"
  className="text-primary"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>
</h1>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-surface-container-lowest border-2 border-on-surface hard-shadow font-bold cursor-pointer hover:-translate-y-1 transition-all active:scale-95">AIGC Enthusiast</span>
<span className="px-4 py-2 bg-secondary-container border-2 border-on-surface hard-shadow font-bold cursor-pointer hover:-translate-y-1 transition-all active:scale-95">AI Designer &amp; Coder</span>
<span className="px-4 py-2 bg-tertiary-container border-2 border-on-surface hard-shadow font-bold cursor-pointer hover:-translate-y-1 transition-all active:scale-95">Academic Explorer</span>
<span className="px-4 py-2 bg-primary-container border-2 border-on-surface hard-shadow font-bold cursor-pointer hover:-translate-y-1 transition-all active:scale-95">Team Glue (ENTJ)</span>
</div>
<div className="pt-8 flex items-center gap-6">
<button className="px-10 py-4 bg-secondary text-on-secondary border-2 border-on-surface hard-shadow font-headline text-xl font-bold hover:-translate-y-1 transition-all active:scale-95">
                        Contact Me
                    </button>
<div className="flex items-center gap-2 text-on-surface/60 font-bold italic">
<span className="material-symbols-outlined">south_east</span>
                        Based in Guangzhou
                    </div>
</div>
</div>
<div className="flex-1 relative">
{/*  Abstract "Portrait" composed of CSS shapes  */}
<div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
<div className="absolute inset-0 bg-on-surface rounded-[2rem] rotate-3"></div>
<div className="absolute inset-0 bg-surface-container-lowest border-2 border-on-surface rounded-[2rem] -rotate-3 overflow-hidden flex items-center justify-center">
<div className="w-64 h-64 rounded-full border-4 border-on-surface overflow-hidden relative bg-surface-container-low hard-shadow">
<img
  src="/Image_z/touxiang.jpg"
  alt="Personal avatar"
  className="h-full w-full object-cover object-[center_35%]"
  width={256}
  height={256}
/>
<div className="absolute -top-4 -right-4 flex h-24 w-24 rotate-12 items-center justify-center rounded-lg border-2 border-on-surface bg-tertiary-container">
<span className="material-symbols-outlined text-4xl text-on-surface">code</span>
</div>
</div>
</div>
{/*  Floating Sticker Element  */}
<div className="absolute -bottom-6 -left-6 px-6 py-4 bg-secondary text-on-secondary border-2 border-on-surface rounded-xl hard-shadow -rotate-6">
<p className="font-bold font-headline">Prompt Wizard 🪄</p>
</div>
</div>
</div>
</section>
{/*  About Me Bento Grid  */}
<section className="py-20" id="about">
<div className="flex items-center gap-4 mb-12">
<h2 className="text-4xl font-headline font-black uppercase tracking-tighter">About Me</h2>
<div className="h-1 flex-1 bg-on-surface"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 bg-surface-container-lowest border-2 border-on-surface p-8 rounded-[3rem_1rem_3rem_1rem] hard-shadow relative overflow-hidden">
<div className="polka-dot absolute inset-0 opacity-5"></div>
<div className="relative z-10">
<p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                            <a
                                href="https://yssjxy.gdut.edu.cn/xb2022/rcpy_v2/bkjy_v2/zysz_v2/szmtys.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cursor-pointer text-link font-bold underline underline-offset-8 hover:-translate-y-1 transition-all active:scale-95"
                            >
                                Digital Media Art student
                            </a>{' '}
                            at{' '}
                            <a
                                href="https://www.gdut.edu.cn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cursor-pointer text-primary font-bold underline underline-offset-8 hover:-translate-y-1 transition-all active:scale-95"
                            >
                                GDUT
                            </a>{' '}
                            with a passion for bridging the gap between <span className="text-secondary font-bold">AI algorithms</span> and <span className="text-tertiary font-bold">Human creativity</span>.
                        </p>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-xs uppercase font-bold tracking-widest text-on-surface/50">Current GPA</span>
<span className="text-3xl font-black">3.94 / 4.0</span>
</div>
<div className="w-px h-12 bg-on-surface/20"></div>
<div className="flex flex-col">
<span className="text-xs uppercase font-bold tracking-widest text-on-surface/50">Research</span>
<a
  href="https://dl.acm.org/doi/10.1145/3490355.3490373"
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg font-bold inline-block cursor-pointer hover:-translate-y-1 transition-all active:scale-95"
>
  Chinese CHI Paper Author
</a>
</div>
</div>
</div>
</div>
<div className="md:col-span-4 bg-tertiary-container border-2 border-on-surface p-8 rounded-[1rem_3rem_1rem_3rem] hard-shadow flex flex-col justify-between">
<span className="material-symbols-outlined text-5xl">location_on</span>
<div>
<h3 className="inline-block cursor-pointer text-2xl font-black mb-2 hover:-translate-y-1 transition-all active:scale-95">Location</h3>
<p className="font-bold opacity-80">Guangzhou, Guangdong</p>
<p className="text-sm mt-4 italic opacity-60">Ready to relocate for the right AI project.</p>
</div>
</div>
</div>
</section>
{/*  Toolchain & Skills  */}
<section className="py-20" id="skills">
<h2 className="text-4xl font-headline font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-4xl">construction</span>
                Toolchain &amp; Skills
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Skill Card 1  */}
<div className="bg-surface-container-low border-2 border-on-surface p-6 rounded-2xl hard-shadow transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-primary-container border-2 border-on-surface rounded-lg mb-6 flex items-center justify-center">
<span className="material-symbols-outlined font-bold">psychology</span>
</div>
<h3 className="text-xl font-black mb-4">AI Tools</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Gemini</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">ChatGPT</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Claude</span>
</div>
</div>
{/*  Skill Card 2  */}
<div className="bg-surface-container-low border-2 border-on-surface p-6 rounded-2xl hard-shadow transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-secondary-container border-2 border-on-surface rounded-lg mb-6 flex items-center justify-center">
<span className="material-symbols-outlined font-bold">terminal</span>
</div>
<h3 className="text-xl font-black mb-4">AI Editors &amp; Dev</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Cursor</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">n8n</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Coze</span>
</div>
</div>
{/*  Skill Card 3  */}
<div className="bg-surface-container-low border-2 border-on-surface p-6 rounded-2xl hard-shadow transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-tertiary-container border-2 border-on-surface rounded-lg mb-6 flex items-center justify-center">
<span className="material-symbols-outlined font-bold">palette</span>
</div>
<h3 className="text-xl font-black mb-4">AIGC Graphic</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Midjourney</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Stable Diffusion</span>
</div>
</div>
{/*  Skill Card 4  */}
<div className="bg-surface-container-low border-2 border-on-surface p-6 rounded-2xl hard-shadow transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-surface-dim border-2 border-on-surface rounded-lg mb-6 flex items-center justify-center">
<span className="material-symbols-outlined font-bold">movie</span>
</div>
<h3 className="text-xl font-black mb-4">AIGC Video</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Sora</span>
<span className="px-2 py-1 bg-surface-container-lowest border border-on-surface text-xs font-bold rounded">Runway</span>
</div>
</div>
</div>
</section>
{/*  Work Experience  */}
<section className="py-20" id="experience">
<div className="flex items-center gap-4 mb-12">
<div className="h-1 flex-1 bg-on-surface"></div>
<h2 className="text-4xl font-headline font-black uppercase tracking-tighter">Experience</h2>
</div>
<div className="space-y-12">
<div className="relative pl-12 border-l-4 border-on-surface py-2">
<div className="absolute top-0 left-0 -translate-x-1/2 w-8 h-8 bg-primary border-2 border-on-surface rounded-full hard-shadow"></div>
<div className="bg-surface-container-lowest border-2 border-on-surface p-8 rounded-2xl hard-shadow">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<h3 className="text-2xl font-black">Guangzhou Yiyue Tech</h3>
<p className="text-primary font-bold">AI Product Manager Assistant &amp; AI Visual Creator</p>
</div>
<span className="px-4 py-1 bg-on-surface text-surface rounded-full text-sm font-bold">2023.09 - 2026.03</span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
<p className="font-medium text-on-surface-variant">Led the visual identity creation for <span className="font-bold text-on-surface">StoryForge B-End Platform</span> using advanced AIGC workflows.</p>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
<p className="font-medium text-on-surface-variant">Developed custom GPTs and n8n automations for content strategy and rapid prototyping.</p>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
<p className="font-medium text-on-surface-variant">Optimized team collaboration through AI-driven asset management and training.</p>
</li>
</ul>
</div>
</div>
</div>
</section>
{/*  Competitions  */}
<section className="py-20">
<div className="bg-primary text-on-primary border-2 border-on-surface rounded-[3rem] p-12 hard-shadow overflow-hidden relative">
<div className="polka-dot absolute inset-0 opacity-10"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="text-4xl font-headline font-black uppercase mb-8">Honors &amp; Roles</h2>
<div className="space-y-6">
<div className="flex cursor-pointer items-center gap-4 hover:-translate-y-1 transition-all active:scale-95">
<div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-full border-2 border-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined font-bold">military_tech</span>
</div>
<p className="font-bold text-lg">National Level Competition Awards (Gold/Silver)</p>
</div>
<div className="flex cursor-pointer items-center gap-4 hover:-translate-y-1 transition-all active:scale-95">
<div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full border-2 border-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined font-bold">groups</span>
</div>
<p className="font-bold text-lg">Campus Team Leader - Innovation Hub</p>
</div>
<div className="flex cursor-pointer items-center gap-4 hover:-translate-y-1 transition-all active:scale-95">
<div className="w-12 h-12 bg-surface-container-highest text-primary rounded-full border-2 border-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined font-bold">workspace_premium</span>
</div>
<p className="font-bold text-lg">Provincial Digital Arts Excellence Prize</p>
</div>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-end">
<div className="bg-surface-container-lowest text-on-surface border-2 border-on-surface p-8 rounded-2xl rotate-3 hard-shadow max-w-xs">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">format_quote</span>
<p className="italic font-medium text-lg leading-relaxed">
                                "Zhang Bin combines the precision of a coder with the vision of an artist. A rare ENTJ talent in the AIGC space."
                            </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-10 h-1 flex bg-primary"></div>
<span className="font-bold text-sm">Faculty Supervisor</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full border-t-2 border-on-surface rounded-t-[48px] bg-background polka-dot relative overflow-hidden" id="contact">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-16 max-w-7xl mx-auto relative z-10">
<div className="space-y-6 text-center md:text-left">
<div className="inline-block cursor-pointer bg-tertiary-container border-2 border-on-surface px-6 py-3 rounded-full hard-shadow -rotate-2 hover:-translate-y-1 transition-all active:scale-95">
<h3 className="text-2xl font-black font-headline">Say Hello! 👋</h3>
</div>
<div className="space-y-2">
<p className="text-4xl font-headline font-black text-on-surface tracking-tighter">Let's create something <br/><span className="text-primary">magical</span> together.</p>
</div>
<div className="flex flex-wrap justify-center md:justify-start gap-4">
<a className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border-2 border-on-surface font-['Plus_Jakarta_Sans'] text-sm font-medium uppercase tracking-widest text-on-surface hover:text-primary hover:underline underline-offset-4 transition-all duration-300" href="mailto:hello@zhangbin.com">
<span className="material-symbols-outlined text-sm">mail</span>
                        Email Me
                    </a>
<div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border-2 border-on-surface font-['Plus_Jakarta_Sans'] text-sm font-medium uppercase tracking-widest text-on-surface">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
                        WeChat: ZB_AIGC
                    </div>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-6">
<div className="flex gap-4">
<a className="w-12 h-12 bg-on-surface text-surface rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300" href="#">
<span className="font-bold">GH</span>
</a>
<a className="w-12 h-12 bg-on-surface text-surface rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300" href="#">
<span className="font-bold">IN</span>
</a>
<a className="w-12 h-12 bg-on-surface text-surface rounded-full flex items-center justify-center hover:bg-tertiary-container hover:text-on-surface transition-all duration-300" href="#">
<span className="font-bold">DR</span>
</a>
</div>
<div className="text-right">
<p className="font-['Plus_Jakarta_Sans'] text-sm font-medium uppercase tracking-widest text-on-surface opacity-70">© 2024 Zhang Bin • Built with Joy</p>
</div>
</div>
</div>
{/*  Background Speech Bubble Decoration  */}
<div className="absolute -bottom-10 -left-10 w-64 h-64 border-4 border-on-surface rounded-full opacity-10"></div>
</footer>

    </div>
  );
}
