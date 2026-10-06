const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const translations = {
  "page-description": "为新加坡家庭提供精心挑选的窗帘、百叶帘及窗饰方案。了解 Sharon Curtains 的预购组屋配套与近期安装案例。",
  "page-title": "Sharon Curtains｜为日常生活而设计",
  "website-status": "网站状态",
  "development-title": "网站正在建设中",
  "development-copy": "目前展示的所有内容仅供测试。",
  "brand-home": "Sharon Curtains 首页",
  "main-navigation": "主导航",
  "nav-collections": "窗帘与百叶帘",
  "nav-packages": "预购组屋配套",
  "nav-projects": "案例展示",
  "nav-portfolios": "作品集",
  "nav-contact": "联系我们",
  "nav-cta": "查看配套",
  "language-group": "选择语言",
  "hero-image-alt": "柔白窗帘为明亮的客厅增添温柔氛围",
  "hero-eyebrow": "为你量身打造的窗饰",
  "hero-title": "柔和的光。<br>让家更有<em>你的风格。</em>",
  "hero-copy": "精心挑选并妥善安装窗帘与百叶帘，让空间真正展现你的生活风格。",
  "hero-button": "寻找你的风格",
  "hero-link": "查看近期案例",
  "hero-caption": "用心布置日常空间",
  "scroll-to-discover": "向下滚动，探索更多",
  "intro-label": "关于我们",
  "intro-title": "美好的一天<br>从<em>好光线</em>开始。",
  "intro-copy": "从轻柔透光的纱帘到让人安心的遮光窗帘，我们为你的生活挑选合适的搭配。探索适合每个房间的布料、款式与实用窗饰方案。",
  "intro-link": "了解更多选择",
  "detail-label": "为你的<br>日常而设计",
  "collections-eyebrow": "为每个房间细心挑选",
  "collections-title": "找到恰好的<em>感觉。</em>",
  "collections-intro": "窗饰能改变整个房间的氛围。先想想你最在意什么——光线、隐私、质感，或是兼而有之。",
  "curtain-image-alt": "带有精致褶皱的落地中性色窗帘",
  "curtain-card-index": "01 / 窗帘",
  "curtain-card-title": "层叠柔和质感。",
  "curtain-card-copy": "S 折、记忆褶、日夜帘、隔断帘及弯轨款式。",
  "blind-image-alt": "日夜帘为家庭客厅调节光线",
  "blind-card-index": "02 / 百叶帘",
  "blind-card-title": "自在调节光线。",
  "blind-card-copy": "卷帘、百叶帘、韩式斑马帘、木百叶、彩虹帘及遮光款式。",
  "home-image-alt": "明亮卧室内安装的中性色窗帘",
  "home-card-index": "03 / 更多家居选择",
  "home-card-title": "细致安装，完善每个细节。",
  "home-card-copy": "电动拉链窗帘、隐形铁花、隔热膜及乙烯基地板。",
  "collection-note": "布料精选自西班牙、墨尔本、土耳其、印度及台湾。",
  "packages-eyebrow": "美好新家的起点",
  "packages-title": "搬新家？<br>从<em>窗户</em>开始。",
  "packages-copy": "简约实用的预购组屋窗帘配套，让入住新家更添完整。",
  "packages-button": "咨询配套详情",
  "price-list-label": "预购组屋窗帘配套起价",
  "room-3": "三房式组屋",
  "room-4": "四房式组屋",
  "room-5": "五房式组屋",
  "price-from": "起",
  "price-footnote": "配套包括遮光布料、轨道、挂钩及绑带。根据目前的配套资料，价格不含消费税（GST）。以上为起价，详情请向我们咨询。",
  "projects-eyebrow": "走进真实的家",
  "projects-title": "让每个空间都有<em>家的感觉。</em>",
  "projects-intro": "精选近期安装案例，呈现真实的生活空间——有人居住、有人喜爱，也随时准备迎接新的一天。",
  "projects-portfolio-link": "浏览全部安装作品",
  "project-1-image-alt": "轻柔白纱帘为客厅带来和煦日光",
  "project-1-caption": "层叠光影，温柔日常",
  "project-2-image-alt": "卧室窗边安装的中性色遮光窗帘",
  "project-2-caption": "安心休憩的柔和空间",
  "project-3-image-alt": "儿童房内安装的透光百叶帘",
  "project-3-caption": "恰到好处的日常光线",
  "video-eyebrow": "近距离欣赏",
  "video-title": "细节之中，<br>看见用心。",
  "video-copy": "近期窗帘与百叶帘安装实况短片。",
  "video-1-label": "近期窗帘安装视频",
  "video-2-label": "近期窗饰安装视频",
  "video-3-label": "近期百叶帘安装视频",
  "video-unsupported": "你的浏览器不支持嵌入式视频。",
  "contact-eyebrow": "欢迎联系我们",
  "contact-title": "让空间拥有<br><em>更美的光线。</em>",
  "contact-copy": "如需了解配套详情或咨询，请前往下方地址联系 Sharon Curtains。请注意，此处为仓库，不对外开放。",
  "contact-label": "新加坡联系地址",
  "phone-list-label": "致电联系 Sharon Curtains",
  "warehouse-note": "仓库 · 不对外开放",
  "contact-map": "在 Google 地图中查看位置",
  "footer-brand": "Sharon Curtains，返回页面顶部",
  "footer-copy": "为你的生活风格设计窗饰。",
  "back-to-top": "返回顶部 ↑",
  "whatsapp-label": "通过 WhatsApp 联系 Sharon Curtains",
  "whatsapp-copy": "通过 WhatsApp 联系我们",
  "portfolios-page-title": "窗饰作品集 | Sharon Curtains",
  "portfolios-page-description": "探索 Sharon Curtains 在新加坡住宅完成的窗帘与百叶帘安装作品。",
  "portfolios-eyebrow": "精心完成的每一处细节",
  "portfolios-title": "为日常生活，<em>妥善布置。</em>",
  "portfolios-intro": "每一扇窗，都为家的故事添上一笔。浏览我们近期完成的真实安装作品，从柔和纱帘到利落百叶帘，找到适合你空间的灵感。",
  "portfolios-count": "精选近期安装作品",
  "ambassador-label": "品牌大使寄语",
  "ambassador-copy": "为让空间更有家的感觉，每个小细节都添上一份专属巧思。",
  "ambassador-garden-alt": "穿蓝色连衣裙的品牌大使肖像",
  "ambassador-studio-alt": "穿米色上衣的品牌大使肖像",
  "portfolio-1-alt": "儿童游戏室窗边的白色透光百叶帘",
  "portfolio-1-type": "透光百叶帘",
  "portfolio-1-title": "为游戏时光柔和调光",
  "portfolio-1-copy": "明亮的日光依然轻轻洒入，为活泼的房间添上恰到好处的柔和感。",
  "portfolio-2-alt": "客厅窗户安装的灰褐色遮光帘与白色纱帘",
  "portfolio-2-type": "遮光帘与纱帘",
  "portfolio-2-title": "层叠质感，收放自如",
  "portfolio-2-copy": "灰褐色布帘搭配轻柔白纱，在私密与自然光之间从容切换。",
  "portfolio-3-alt": "卧室内落地安装的灰色窗帘",
  "portfolio-3-type": "落地窗帘",
  "portfolio-3-title": "安静沉稳的卧室一隅",
  "portfolio-3-copy": "垂坠柔和的中性色布料，为休憩时光营造安定氛围。",
  "portfolio-4-alt": "转角窗安装的棕色日夜帘",
  "portfolio-4-type": "转角日夜帘",
  "portfolio-4-title": "顺着窗景，细致延伸",
  "portfolio-4-copy": "转角安装贴合窗户线条，让宽阔窗面也能自在调节光线。",
  "portfolio-5-alt": "客厅落地白色纱帘轻柔过滤日光",
  "portfolio-5-type": "轻柔纱帘",
  "portfolio-5-title": "让日光轻轻入室",
  "portfolio-5-copy": "通透纱帘柔化窗外光线，为客厅铺上一层温柔明亮。",
  "portfolio-6-alt": "窗框内安装的深色遮光卷帘",
  "portfolio-6-type": "遮光卷帘",
  "portfolio-6-title": "简洁俐落，安心遮光",
  "portfolio-6-copy": "利落的窗框安装设计，为需要遮光与清爽线条的空间而设。",
  "portfolio-7-alt": "搭配深色织带的白色木百叶帘",
  "portfolio-7-type": "木百叶帘",
  "portfolio-7-title": "经典线条，细节见巧思",
  "portfolio-7-copy": "白色百叶与深色织带形成柔和对比，简约中保留层次。",
  "portfolio-8-alt": "凹窗内安装的浅灰色遮光卷帘",
  "portfolio-8-type": "遮光卷帘",
  "portfolio-8-title": "为窗框量身收边",
  "portfolio-8-copy": "贴合窗洞的简洁安装，让遮光布帘自然融入墙面线条。",
  "portfolio-9-alt": "窗户上安装的深色日夜帘",
  "portfolio-9-type": "日夜帘",
  "portfolio-9-title": "明暗之间，自在切换",
  "portfolio-9-copy": "交错的布面与透光层，轻松调出适合当下的光线。",
  "portfolio-10-alt": "儿童房窗边安装的白色横向百叶帘",
  "portfolio-10-type": "横向百叶帘",
  "portfolio-10-title": "清爽明亮的房间日常",
  "portfolio-10-copy": "简洁的白色百叶为房间带来清爽感，也让日光更好掌握。",
  "portfolios-cta-eyebrow": "为你的家，找到合适的窗饰",
  "portfolios-cta-title": "从一扇窗开始，<em>慢慢成家。</em>",
  "portfolios-cta-copy": "告诉我们你的空间与想法，一起挑选适合日常的布料、款式与光线。",
  "portfolios-cta-link": "联系我们"
};

const languageButtons = document.querySelectorAll("[data-language]");
let currentLanguage = "en";

function getChineseTranslation(key) {
  const translation = translations[key];
  if (typeof translation !== "string") {
    throw new Error(`Missing Simplified Chinese translation for "${key}".`);
  }
  return translation;
}

function updateMenuLabel() {
  if (!menuToggle) return;

  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const labels = {
    en: { open: "Open navigation", close: "Close navigation" },
    "zh-CN": { open: "打开导航菜单", close: "关闭导航菜单" }
  };
  menuToggle.setAttribute("aria-label", isOpen ? labels[currentLanguage].close : labels[currentLanguage].open);
}

function setLanguage(language, persist = true) {
  currentLanguage = language === "zh-CN" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!("originalContent" in element.dataset)) {
      element.dataset.originalContent = element.innerHTML;
    }
    element.innerHTML = currentLanguage === "zh-CN"
      ? getChineseTranslation(element.dataset.i18n)
      : element.dataset.originalContent;
  });

  ["content", "alt", "aria-label"].forEach((attribute) => {
    const dataAttribute = `data-i18n-${attribute}`;
    const datasetKey = `i18n${attribute.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("")}`;
    const originalKey = `original${attribute.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("")}`;
    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
      if (!(originalKey in element.dataset)) {
        element.dataset[originalKey] = element.getAttribute(attribute) || "";
      }
      const key = element.dataset[datasetKey];
      if (currentLanguage === "zh-CN") {
        element.setAttribute(attribute, getChineseTranslation(key));
      } else {
        element.setAttribute(attribute, element.dataset[originalKey]);
      }
    });
  });

  document.documentElement.lang = currentLanguage;
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  updateMenuLabel();

  if (persist) {
    try {
      window.localStorage.setItem("site-language", currentLanguage);
    } catch (error) {
      console.warn("Unable to save the selected website language.", error);
    }
  }
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    updateMenuLabel();
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      updateMenuLabel();
      siteNav.classList.remove("is-open");
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let savedLanguage = "en";
try {
  savedLanguage = window.localStorage.getItem("site-language") || "en";
} catch (error) {
  console.warn("Unable to read the saved website language.", error);
}
setLanguage(savedLanguage, false);

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
