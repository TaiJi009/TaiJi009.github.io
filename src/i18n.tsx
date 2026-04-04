import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Locale = 'en' | 'zh';

const STORAGE_LOCALE = 'locale';

const messages = {
  en: {
    'aria.toggleDark': 'Toggle dark mode',
    'aria.openMenu': 'Open menu',
    'aria.closeMenu': 'Close menu',
    'aria.mobileNav': 'Site sections',
    'aria.lang': 'Language',
    'avatar.alt': 'Personal avatar',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'cta.talk': "Let's Talk",
    'hero.badge': 'Available for Freelance',
    'hero.hi': "Hi, I'm",
    'hero.name': 'Zhang Bin',
    'hero.tag1': 'AIGC Enthusiast',
    'hero.tag2': 'AI Designer & Coder',
    'hero.tag3': 'Academic Explorer',
    'hero.tag4': 'Team Glue (ENTJ)',
    'hero.contact': 'Contact Me',
    'hero.location': 'Based in Guangzhou',
    'hero.sticker': 'Prompt Wizard 🪄',
    'about.title': 'About Me',
    'about.student': 'Digital Media Art student',
    'about.at': 'at',
    'about.passion':
      ' with a passion for bridging the gap between ',
    'about.ai': 'AI algorithms',
    'about.human': 'Human creativity',
    'about.and': ' and ',
    'about.period': '.',
    'about.gpa': 'Current GPA',
    'about.research': 'Research',
    'about.paper': 'Chinese CHI Paper Author',
    'about.locationTitle': 'Location',
    'about.locationCity': 'Guangzhou, Guangdong',
    'about.relocate': 'Ready to relocate for the right AI project.',
    'skills.title': 'Toolchain & Skills',
    'skills.aiTools': 'AI Tools',
    'skills.editors': 'AI Editors & Dev',
    'skills.graphic': 'AIGC Graphic',
    'skills.video': 'AIGC Video',
    'exp.title': 'Experience',
    'exp.company': 'Guangzhou Yiyue Tech',
    'exp.role': 'AI Product Manager Assistant & AI Visual Creator',
    'exp.b1before': 'Led product design for ',
    'exp.b1product': 'StoryForge B-End Platform',
    'exp.b1after': ' using advanced AIGC workflows.',
    'exp.b2':
      'Developed custom GPTs and n8n automations for content strategy and rapid prototyping.',
    'exp.b3':
      'Optimized team collaboration through AI-driven asset management and training.',
    'honors.title': 'Honors & Roles',
    'honors.h1': 'National Level Competition Awards (Gold/Silver)',
    'honors.h2': 'Campus Team Leader - Innovation Hub',
    'honors.h3': 'Provincial Digital Arts Excellence Prize',
    'honors.quote':
      '"Zhang Bin combines the precision of a coder with the vision of an artist. A rare ENTJ talent in the AIGC space."',
    'honors.supervisor': 'Faculty Supervisor',
    'footer.hello': 'Say Hello! 👋',
    'footer.tagBefore': "Let's create something ",
    'footer.tagMagic': 'magical',
    'footer.tagAfter': ' together.',
    'footer.email': 'Email Me',
    'footer.wechatLabel': 'WeChat: ',
    'footer.wechatId': 'ZB_AIGC',
    'footer.copyright': '© 2024 Zhang Bin • Built with Joy',
  },
  zh: {
    'aria.toggleDark': '切换深色/浅色模式',
    'aria.openMenu': '打开菜单',
    'aria.closeMenu': '关闭菜单',
    'aria.mobileNav': '页面导航',
    'aria.lang': '语言',
    'avatar.alt': '个人头像',
    'nav.about': '关于',
    'nav.skills': '技能',
    'nav.experience': '经历',
    'nav.contact': '联系',
    'cta.talk': '聊聊',
    'hero.badge': '开放自由职业合作',
    'hero.hi': '嗨，我是',
    'hero.name': '张滨',
    'hero.tag1': 'AIGC 爱好者',
    'hero.tag2': 'AI 设计师 & 开发者',
    'hero.tag3': '学术探索者',
    'hero.tag4': '团队纽带（ENTJ）',
    'hero.contact': '联系我',
    'hero.location': '坐标广州',
    'hero.sticker': '提示词巫师 🪄',
    'about.title': '关于我',
    'about.student': '数字媒体艺术专业学生',
    'about.at': '毕业于',
    'about.passion': '，热衷于在 ',
    'about.ai': '人工智能算法',
    'about.human': '人类创造力',
    'about.and': ' 与 ',
    'about.period': ' 之间架起桥梁。',
    'about.gpa': '当前绩点',
    'about.research': '科研',
    'about.paper': 'Chinese CHI 论文作者',
    'about.locationTitle': '所在地',
    'about.locationCity': '广东省广州市',
    'about.relocate': '如遇契合的 AI 项目，愿意异地发展。',
    'skills.title': '工具链与技能',
    'skills.aiTools': 'AI 工具',
    'skills.editors': 'AI 编辑器与开发',
    'skills.graphic': 'AIGC 图像',
    'skills.video': 'AIGC 视频',
    'exp.title': '经历',
    'exp.company': '广州怡阅科技',
    'exp.role': 'AI 产品助理 & AI 视觉创作者',
    'exp.b1before': '主导 ',
    'exp.b1product': 'StoryForge B 端平台',
    'exp.b1after': ' 的产品设计，运用高阶 AIGC 工作流交付成果。',
    'exp.b2':
      '搭建定制 GPT 与 n8n 自动化流程，支持内容策略与快速原型验证。',
    'exp.b3':
      '通过 AI 驱动的素材管理与培训，提升团队协作效率。',
    'honors.title': '荣誉与角色',
    'honors.h1': '国家级竞赛奖项（金/银）',
    'honors.h2': '校园创新工坊团队负责人',
    'honors.h3': '省级数字艺术优秀奖',
    'honors.quote':
      '「张滨兼具程序员的严谨与艺术家的想象力，是 AIGC 领域里难得的 ENTJ 型人才。」',
    'honors.supervisor': '导师',
    'footer.hello': '打个招呼！👋',
    'footer.tagBefore': '一起创造一些',
    'footer.tagMagic': '神奇',
    'footer.tagAfter': ' 的东西吧。',
    'footer.email': '发邮件',
    'footer.wechatLabel': '微信：',
    'footer.wechatId': 'ZB_AIGC',
    'footer.copyright': '© 2024 张滨 · 用心搭建',
  },
} as const;

export type MessageKey = keyof typeof messages.en;

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem(STORAGE_LOCALE);
  if (stored === 'en' || stored === 'zh') return stored;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_LOCALE, l);
  }, []);

  const t = useCallback(
    (key: MessageKey) => messages[locale][key] ?? messages.en[key] ?? key,
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
