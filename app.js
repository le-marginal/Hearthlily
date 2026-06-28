// Localization Dictionary
const translations = {
  en: {
    "nav.story": "Felicia's Story",
    "nav.services": "Services",
    "nav.retainers": "Retainers",
    "nav.report": "Report Card",
    "nav.contact": "Inquire",
    
    "hero.subtitle": "TAIPEI'S PREMIER SENIOR CONCIERGE",
    "hero.title1": "Dignified Living,",
    "hero.title2": "Beautifully Curated.",
    "hero.desc": "When you can't be there, we can. Hearthlily blends high-touch companion curation with senior UI/UX safety coaching to protect your parent's daily life and digital security in Taipei.",
    "hero.cta1": "Schedule Consultation",
    "hero.cta2": "Evaluate Parent's Setup",
    "hero.badge.title": "Concierge & Design",
    "hero.badge.desc": "Fusing elegant spatial planning with bespoke day-to-day concierge services.",

    "story.meta": "THE FACE OF HEARTHLILY",
    "story.title": "Meet Felicia | 晴萱靈魂人物",
    "story.subtitle": "Bridging User Experience Design and Senior Ergonomics",
    "story.p1": "With over a decade of experience across high-tech user-experience research and bespoke residential interior design in Taipei, Felicia views aging through a lens of spatial poetry and frictionless daily flow.",
    "story.p2": "She founded Hearthlily out of a realization: Taipei's elegant seniors deserve more than medicalized care—they deserve beautiful environments, intellectually rich outings, and spaces designed meticulously to adapt gracefully to physical evolution without ever looking clinical.",
    "story.role": "FOUNDER & CHIEF LIFE CURATOR",

    "services.meta": "BESPOKE SYSTEM",
    "services.title": "The Pillars of Curation",
    "services.s1.title": "Digital Legacy & Safety",
    "services.s1.desc": "Simplifying device interfaces, setting up cloud archives for family photos, organizing credentials, and coaching seniors on anti-scam protection.",
    "services.s1.item1": "Device UI simplification & legibility",
    "services.s1.item2": "Cloud archiving & password legacy",
    "services.s2.title": "Lifestyle Curation",
    "services.s2.desc": "Curating access to premium art exhibits, gourmet dining experiences, boutique doctor appointment accompaniment, high-end tailors, and intellectual events across Taipei.",
    "services.s2.item1": "Exhibition & fine-dining logistics",
    "services.s2.item2": "Meticulous medical escort & tracking",
    "services.s3.title": "UX Family Communication",
    "services.s3.desc": "Deploying formal user research, affinity mapping, and spatial workshops to bridge design desires, physical vulnerabilities, and goals between parents and their global children.",
    "services.s3.item1": "Family alignment workshops",
    "services.s3.item2": "Structured reports for children abroad",

    "retainer.meta": "MEMBERSHIP LEVELS",
    "retainer.title": "Bespoke Retainer Models",
    "retainer.silver.badge": "ELEGANT CONCIERGE",
    "retainer.silver.title": "Silver Lily",
    "retainer.silver.subtitle": "Premium Lifestyle Escort · NT$25,000 / mo",
    "retainer.silver.desc": "Designed for active seniors who value high-end logistics, routine tech audits, and a trusted companion for Taipei's cultural events.",
    "retainer.silver.feature1": "Weekly curated companion excursions (up to 15 hours/month)",
    "retainer.silver.feature2": "Monthly digital safety and device optimization audits",
    "retainer.silver.feature3": "Personalized health navigation, booking management, and transport mapping",
    "retainer.silver.cta": "Select Silver Lily",

    "retainer.gold.badge": "SIGNATURE ULTRA",
    "retainer.gold.title": "Gold Hearth",
    "retainer.gold.subtitle": "Dedicated Life Curation & Liaison · NT$45,000 / mo",
    "retainer.gold.desc": "Our signature ultra-luxury service, pairing high-touch daily lifestyle curation with dedicated coordinator support and the interactive Family Hub.",
    "retainer.gold.feature1": "Full digital legacy management and customized senior device UI setups",
    "retainer.gold.feature2": "Up to 35 hours/month of dedicated lifestyle concierge & priority escorting",
    "retainer.gold.feature3": "Weekly UX Family Reports & real-time updates via the Hearthlily Family Hub",
    "retainer.gold.cta": "Inquire Gold Hearth",

    "retainer.legacy.badge": "LEGACY ULTRA",
    "retainer.legacy.title": "Jade Legacy",
    "retainer.legacy.subtitle": "Family Governance & Curation · NT$80,000 / mo",
    "retainer.legacy.desc": "Our flagship membership, offering high-frequency daily lifestyle curation, family succession liaison, and complete digital/legal heritage coordination.",
    "retainer.legacy.feature1": "Daily premium check-ins & customized lifestyle concierge",
    "retainer.legacy.feature2": "Complete digital legacy archiving & password/asset inheritance setups",
    "retainer.legacy.feature3": "Dedicated legal & succession planning coordination with local firms",
    "retainer.legacy.cta": "Select Jade Legacy",

    "report.meta": "UX ASSESSMENT TOOL",
    "report.title": "UX Family Report Card",
    "report.desc": "Often living far from Taipei, children need objective, metrics-driven clarity regarding how gracefully, safely, and beautifully their parents are living. Rate the 4 dimensions below to receive Felicia's custom design outlook.",
    "report.dim1": "Digital Security & Scam Defense",
    "report.dim1.hint": "Phishing detection, smartphone UI simplification, backup configuration.",
    "report.dim2": "Social & Mental Life",
    "report.dim2.hint": "Exposure to Taipei cultural events, premium intellectual stimulation, fine dining.",
    "report.dim3": "Healthcare Navigation",
    "report.dim3.hint": "Seamless booking, dignified VIP medical escorting, metric coordination.",
    "report.dim4": "Aesthetics & Daily Delight",
    "report.dim4.hint": "Fresh custom floral schemes, beautiful daily coordination, styling & luxury routine.",
    
    "report.output.title": "CURRENT LIFE SCORE",
    "report.output.heading": "Initial Diagnostic Analysis",
    "report.output.desc": "Adjust the four core dimension sliders on the left. Our system evaluates the risk ratios of aesthetic neglect versus functional safety.",

    "contact.meta": "INITIATE AN ESCORTED LIFE",
    "contact.title": "Begin the Curation",
    "contact.subtitle": "Whether you are an adult child located in San Francisco or London, or based here in Taipei, Felicia will reach out within 24 hours to coordinate an exclusive assessment.",
    "form.name": "Your Full Name",
    "form.parentName": "Parent's Location (Within Taipei)",
    "form.email": "Email Address",
    "form.phone": "Phone Number (Include International Code)",
    "form.retainerType": "Interested Retainer Level",
    "form.option.placeholder": "Select your preferred package...",
    "form.option.silver": "Silver Lily Retainer (NT$25,000 / month)",
    "form.option.gold": "Gold Hearth Retainer (NT$45,000 / month)",
    "form.option.notSure": "Not sure yet (Requires initial onboarding fee evaluation)",
    "form.notes": "Aesthetic & Safety Concerns / Tell us about your family scenario",
    "form.submit": "Submit Curated Inquiry",
    
    "footer.desc": "Re-imagining spatial agency and upscale lifestyle operations for Taipei's elite elder generation. Designed and personally curated by interior designer & senior UX specialist Felicia Chang.",
    "footer.credits": "Designed with Care for Elder Dignity"
  },
  zh: {
    "nav.story": "創辦人故事",
    "nav.services": "三大服務板塊",
    "nav.retainers": "專屬年約方案",
    "nav.report": "高齡體驗評估卡",
    "nav.contact": "預約諮詢",
    
    "hero.subtitle": "台北頂級高齡生活管家與生活美學",
    "hero.title1": "優雅老去，",
    "hero.title2": "日常如詩。",
    "hero.desc": "當您無法隨侍在側，我們為您分憂。晴萱將頂級生活管家伴行與高齡智慧裝置防詐防護完美結合，為在台長輩打造尊嚴日常，給予海外子女最極致的安心託付。",
    "hero.badge.title": "空間美學與生活管家",
    "hero.badge.desc": "融合優雅的無障礙空間規劃與全方位高檔日常管家服務。",

    "story.meta": "HEARTHLILY 靈魂人物",
    "story.title": "創辦人 Felicia",
    "story.subtitle": "結合 UX 使用者體驗與高齡空間人體工學的先驅",
    "story.p1": "擁有十多年高科技使用者體驗研究（UX Research）以及台北頂級豪宅室內設計背景，Felicia 堅持以「空間詩意」與「無摩擦日常動線」重新定義老後生活。",
    "story.p2": "她創立晴萱（Hearthlily）源於一個深刻領悟：台北的優雅長者需要的絕不じる醫療照護，而是能優雅融合生活機能的藝文環境、有尊嚴的智識社交，以及經過精心設計、能隨身體機能調適卻毫無「醫療感」的家居美學。",
    "story.role": "創辦人 暨 首席生活策展人",

    "services.meta": "專屬定制系統",
    "services.title": "高齡生活的三大支柱",
    "services.s1.title": "數位遺產與科技防護",
    "services.s1.desc": "簡化智慧型裝置介面，為長輩設定雲端相簿備份家庭珍貴照片，妥善規劃數位遺產與密碼傳承，並提供一對一防詐騙科技安全指導。",
    "services.s1.item1": "自適應介面簡化與字體輔助優化",
    "services.s1.item2": "家庭雲端相片備份與密碼遺產規劃",
    "services.s2.title": "高階日常策展與生活管家",
    "services.s2.desc": "策劃台北最頂級的藝文展覽專車接送、米其林私廚餐飲預約、精品名醫門診全程護送記錄、高級高訂西服搭配，讓日常充滿儀式感。",
    "services.s2.item1": "私廚晚宴、精品展覽無縫對接",
    "services.s2.item2": "全程細緻醫療陪診與精準醫囑記錄",
    "services.s3.title": "高齡UX家族溝通工坊",
    "services.s3.desc": "透過專業UX使用者研究工具、親和圖與空間痛點工作坊，為身處海外 of 子女與在台長者架起溝通橋樑，化解在生活調整上的摩擦與擔憂。",
    "services.s3.item1": "家族跨代生活期望工作坊",
    "services.s3.item2": "為海外子女提供客觀定期的 UX 生活報告書",

    "retainer.meta": "尊榮會員級別",
    "retainer.title": "專屬年約管理方案",
    "retainer.silver.badge": "雅緻高齡伴行",
    "retainer.silver.title": "銀萱雅緻方案",
    "retainer.silver.subtitle": "銀萱雅緻方案 · 每月 NT$25,000",
    "retainer.silver.desc": "專為生活尚能自理，但追求極致生活細節、月度數位安全防護、並需要高品質台北藝文活動伴行的優雅長輩所設計。",
    "retainer.silver.feature1": "每週專屬藝文與生活伴行服務（每月累計達 15 小時）",
    "retainer.silver.feature2": "月度數位帳號安全審查與智慧裝置自適應優化",
    "retainer.silver.feature3": "個人化門診預約跟診、健康數據整理與頂級專車接送",
    "retainer.silver.cta": "選擇銀萱方案",

    "retainer.gold.badge": "極奢生活全託付",
    "retainer.gold.title": "金萱臻藏方案",
    "retainer.gold.subtitle": "金萱臻藏方案 · 每月 NT$45,000",
    "retainer.gold.desc": "最頂級的全面管家服務。將極高頻的日常頂級管家、社交密友行程，與大師級數位遺產整理完美融合，為長輩打造能傳承的優雅晚年生活。",
    "retainer.gold.feature1": "全方位數位遺產整理與手機/平板高齡介面最佳化",
    "retainer.gold.feature2": "每日專屬生活管家對接與醫療行程優先排定（每月累計達 35 小時）",
    "retainer.gold.feature3": "每週專屬 UX 報告與 Hearthlily Family Hub 線上即時照片動態更新",
    "retainer.gold.cta": "預約金萱方案評估",

    "retainer.legacy.badge": "極致尊榮傳承",
    "retainer.legacy.title": "玉萱傳承方案",
    "retainer.legacy.subtitle": "玉萱傳承方案 · 每月 NT$80,000",
    "retainer.legacy.desc": "晴萱頂級旗艦方案。包含極高頻的每日生活管家伴行、家族繼承事務協調、個人自傳數位建檔及跨代法律/稅務規劃諮詢對接。",
    "retainer.legacy.feature1": "每日專屬生活管家探視、高頻藝文伴遊與隨身助理",
    "retainer.legacy.feature2": "完整個人數位遺產整理、雲端相簿建檔與密碼繼承規劃",
    "retainer.legacy.feature3": "對接配合之頂級法律與信託事務所，統籌傳承與家族治理",
    "retainer.legacy.cta": "預約玉萱方案",

    "report.meta": "UX 高齡生活評估工具",
    "report.title": "高齡體驗家庭報告卡",
    "report.desc": "常年居住於歐美或海外的您，需要客觀、數據化的指標來了解年邁父母在台北的生活狀態。滑動評估以下四個維度，獲取 Felicia 的客製化美學與安全建議。",
    "report.dim1": "數位安全與防詐防護",
    "report.dim1.hint": "防詐騙意識、手機介面簡化與自適應對比調整、雲端相簿備份設定。",
    "report.dim2": "社交與心靈活性",
    "report.dim2.hint": "台北頂級藝文活動參與度、優雅社交、精緻餐飲體驗與日常社交頻率。",
    "report.dim3": "健康醫療導航",
    "report.dim3.hint": "門診掛號流暢度、高檔醫療陪同、健康數據整理、藥物安全服用意願。",
    "report.dim4": "生活美學與每日愉悅",
    "report.dim4.hint": "居住空間的花藝美學、每日精緻穿著配搭、高端餐具與有儀式感的日常細節。",
    
    "report.output.title": "長輩當前生活品質分數",
    "report.output.heading": "初始診斷分析",
    "report.output.desc": "請滑動左側的四個指標。本評估工具將為您運算出長輩在美感生活與機能安全之間的平衡比例與潛在風險。",

    "contact.meta": "展開優雅老去的生活策展",
    "contact.title": "開啟您的專屬定制",
    "contact.subtitle": "無論您是身處舊金山、倫敦的海外子女，或是台北在地的長輩，Felicia 都將在 24 小時內與您聯繫，安排首次一對一親自到府評估。",
    "form.name": "您的姓名",
    "form.parentName": "長輩目前在台北的居住區域",
    "form.email": "電子郵件",
    "form.phone": "聯絡電話 (請包含國碼)",
    "form.retainerType": "感興趣的專屬方案",
    "form.option.placeholder": "請選擇您的意向方案...",
    "form.option.silver": "銀萱方案 (每月 NT$25,000)",
    "form.option.gold": "金萱方案 (每月 NT$45,000)",
    "form.option.notSure": "目前尚未決定 (需要支付 NT$20,000 首次到府高齡生活評估與數位稽核費)",
    "form.notes": "美學改造與安全顧慮 / 告訴我們長輩目前的家族生活場景",
    "form.submit": "送出客製化諮詢申請",
    
    "footer.desc": "重新定義台北頂級長者晚年的空間自主權與極奢日常運營。由室內設計與高齡體驗設計專家 Felicia Chang 親自操刀策劃。",
    "footer.credits": "為守護高齡尊嚴而生，晴萱美學管家"
  }
};

// Global Language State
let currentLang = 'zh'; // Default to Traditional Chinese for Taipei

// Initialize Page Elements
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initMobileMenu();
    initScrollNavbar();
    initScrollAnimations();
    initReportCard();
    initContactForm();
});

// Setup Language Switcher Engine
function initLanguage() {
    const langToggleBtn = document.getElementById("langToggle");
    
    // Apply initial translations
    applyTranslations(currentLang);

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-TW';
        applyTranslations(currentLang);
        calculateScore(); // Re-run score calculator to update localized descriptions
    });
}

function applyTranslations(lang) {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[lang][translationKey]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][translationKey]);
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][translationKey];
            } else {
                element.innerHTML = translations[lang][translationKey];
            }
        }
    });
}

// Mobile navigation menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex"); // CSS handles flex layout
    });

    // Close menu when clicking nav links
    const mobileLinks = document.querySelectorAll(".nav-link-mobile");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        });
    });
}

// Smooth scroll header effect
function initScrollNavbar() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("shadow-md");
        } else {
            header.classList.remove("shadow-md");
        }
    });
}

// Elegant Reveal Animation Observer
function initScrollAnimations() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// Interactive UX Family Report Card Engine
function initReportCard() {
    const sliders = ['safety', 'social', 'health', 'delight'];
    
    sliders.forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        const valueDisplay = document.getElementById(`${sliderId}Val`);
        
        slider.addEventListener("input", (e) => {
            valueDisplay.textContent = `${e.target.value} / 10`;
            calculateScore();
        });
    });

    // Run initial calculation
    calculateScore();
}

function calculateScore() {
    const safetyVal = parseInt(document.getElementById("safety").value);
    const socialVal = parseInt(document.getElementById("social").value);
    const healthVal = parseInt(document.getElementById("health").value);
    const delightVal = parseInt(document.getElementById("delight").value);

    const average = (safetyVal + socialVal + healthVal + delightVal) / 4;
    
    // Update Score Text
    document.getElementById("scoreText").textContent = average.toFixed(1);

    // Update Progress Circle (SVG Stroke-dashoffset)
    // Stroke-dasharray is 376.8 (2 * PI * r = 2 * 3.14159 * 60)
    const circle = document.getElementById("scoreProgress");
    const dashOffset = 376.8 - (376.8 * (average / 10));
    circle.style.strokeDashoffset = dashOffset;

    updateDiagnosticOutput(safetyVal, socialVal, healthVal, delightVal, average);
}

// Generate Tailored Dynamic Insights based on scores
function updateDiagnosticOutput(safety = 5, social = 5, health = 5, delight = 5, average = 5) {
    const headingEl = document.getElementById("outputHeading");
    const descEl = document.getElementById("outputDesc");

    // Dynamic output strings depending on language and metrics
    const localizedInsights = {
      en: {
        criticalSafety: "Priority Digital Security Action Required",
        criticalSafetyDesc: "Your parent's digital devices show significant vulnerability to scams and security risks. Felicia recommends configuring phone/tablet UI restrictions, setting up simplified account layouts, and conducting an immediate scam-protection check.",
        culturalIsolation: "Social & Cognitive Stimulation Required",
        culturalIsolationDesc: "Your parent's social and mental engagement levels are low. Hearthlily can coordinate private gallery excursions, luxury dining companion trips, and elite local event access to keep their mind active.",
        aestheticDeprivation: "Everyday Delight & Aesthetics Ignored",
        aestheticDeprivationDesc: "Mental clarity thrives on beauty. Our Gold Hearth plan places a premium on integrating custom floristry, premium styling coordination, and refined sensory touches back into their daily space.",
        healthSaturated: "Healthcare Navigation Needs Support",
        healthSaturatedDesc: "Doctor scheduling and follow-ups are creating friction. We can step in with VIP accompaniment, direct medical summaries translated for you, and strict coordination of care plans.",
        flourishing: "Balanced & Dignified Lifestyle Status",
        flourishingDesc: "Excellent baseline. Your parent is maintaining a beautiful lifestyle. A Silver Lily Retainer can preserve and elevate this baseline, handling all local scheduling and lifestyle details seamlessly."
      },
      zh: {
        criticalSafety: "亟需優先進行數位安全與防詐保護",
        criticalSafetyDesc: "長輩的行動裝置及線上防護存在較大安全隱憂。Felicia 建議首要進行手機/平板介面重整、限制惡意廣告彈出、並規劃數位帳號防護，降低受騙風險。",
        culturalIsolation: "亟需加強藝文與社交心靈啟發",
        culturalIsolationDesc: "長輩目前的生活缺乏足夠的日常精神刺激。晴萱生活管家將親自為長輩安排畫廊賞析、米其林私廚伴餐與台北精緻社交聚會，重燃生活熱情。",
        aestheticDeprivation: "缺乏生活美學與儀式感體驗",
        aestheticDeprivationDesc: "生活尊嚴源自美感。我們的金萱方案將由設計師 Felicia 親自打理長輩居住空間的藝術花藝陳設、日常衣著搭配指南以及高檔日用品選搭，重塑尊貴生活質感。",
        healthSaturated: "長輩醫療陪診與醫囑需專人統籌",
        healthSaturatedDesc: "頻繁就醫與繁瑣掛號正耗費長輩大量精力。晴萱提供細緻的精品醫療跟診陪同，並將醫囑精確歸納成海外子女能看懂的使用者體驗健康報告書。",
        flourishing: "長輩目前的生活維持極佳優雅狀態",
        flourishingDesc: "非常優秀！長輩正享有尊嚴而充實 of 晚年。建議採用「銀萱雅緻方案」為長輩進行月度安全檢測與每週伴行，維持高水準的精緻日常細節。"
      }
    };

    const dict = localizedInsights[currentLang];

    // Diagnostic Logic prioritizing lowest scores
    if (safety <= 4) {
        headingEl.textContent = dict.criticalSafety;
        descEl.textContent = dict.criticalSafetyDesc;
    } else if (social <= 4) {
        headingEl.textContent = dict.culturalIsolation;
        descEl.textContent = dict.culturalIsolationDesc;
    } else if (health <= 4) {
        headingEl.textContent = dict.healthSaturated;
        descEl.textContent = dict.healthSaturatedDesc;
    } else if (delight <= 4) {
        headingEl.textContent = dict.aestheticDeprivation;
        descEl.textContent = dict.aestheticDeprivationDesc;
    } else {
        headingEl.textContent = dict.flourishing;
        descEl.textContent = dict.flourishingDesc;
    }
}

// Premium Form Submission Experience
function initContactForm() {
    const form = document.getElementById("inquiryForm");
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const alertMsg = currentLang === 'en' 
            ? "Thank you. Felicia will contact you within 24 hours to schedule your bespoke senior concierge consultation." 
            : "感謝您的預約。創辦人 Felicia 將於 24 小時內親自與您聯絡，為您安排尊榮到府高齡生活評估。";
            
        alert(alertMsg);
        form.reset();
        
        // Reset sliders displays visually to default 5
        document.getElementById("safety").value = 5;
        document.getElementById("social").value = 5;
        document.getElementById("health").value = 5;
        document.getElementById("delight").value = 5;
        document.getElementById("safetyVal").textContent = "5 / 10";
        document.getElementById("socialVal").textContent = "5 / 10";
        document.getElementById("healthVal").textContent = "5 / 10";
        document.getElementById("delightVal").textContent = "5 / 10";
        
        calculateScore(); 
    });
}