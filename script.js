/* ---- THEME COLORS: edit here (applied as CSS variables) ---- */
const THEME_COLORS = {
  light: { accent:"#186774", accentStrong:"#0f4750", accentSoft:"#e6eff0", aqua:"#3fb8c6", mint:"#8fe3c2", deep:"#0f4750" },
  dark:  { accent:"#39aebd", accentStrong:"#5fc7d4", accentSoft:"rgba(57,174,189,0.12)", aqua:"#5fd0da", mint:"#7fe0b8", deep:"#0a2f36" }
};
(function applyThemeColors(){
  const css = (c) => `--accent:${c.accent};--accent-strong:${c.accentStrong};--accent-soft:${c.accentSoft};--aqua:${c.aqua};--mint:${c.mint};--deep:${c.deep};`;
  const s = document.createElement('style');
  s.textContent = `:root{${css(THEME_COLORS.light)}}[data-theme="dark"]{${css(THEME_COLORS.dark)}}`;
  document.head.appendChild(s);
})();

/* =========================================================================
   DATA — edit everything here. Every text field can be either:
   - a plain string (shown as-is in both languages), or
   - an object { en: "...", ar: "..." } for a bilingual value.
   ========================================================================= */

// ---- EXPERIENCE ---------------------------------------------------------
// name, org, date, location, items (array of bullet points)
const experienceData = [
  {
    name: { en: "Flutter Developer & IT Support Specialist", ar: "مطوّر Flutter وأخصائي دعم تقني" },
    org: "Pearl Plus & RZR",
    date: { en: "11/2025 – Present", ar: "11/2025 – حتى الآن" },
    location: { en: "UAE, Dubai", ar: "دبي، الإمارات" },
    items: [
      { en: "Architected and spearheaded the development of flagship mobile applications from scratch, leveraging advanced BLoC/Cubit patterns to enforce strict separation of concerns and Clean Architecture.",
        ar: "قدت وصممت تطوير تطبيقات جوال رئيسية من الصفر، مستخدمًا أنماط BLoC/Cubit المتقدمة لفرض فصل صارم للاهتمامات ومعمارية Clean Architecture." },
      { en: "Automated deployment workflows by establishing robust CI/CD pipelines, cutting delivery times, while integrating complex RESTful APIs for core payment gateways and secure OAuth authorizations.",
        ar: "أتمتة سير عمل النشر عبر إنشاء خطوط CI/CD متينة، ما قلّص أوقات التسليم، مع دمج واجهات RESTful API معقدة لبوابات الدفع الأساسية وتفويضات OAuth الآمنة." },
      { en: "Enhanced application stability and user experience by implementing proactive error-handling and optimizing UI rendering for critical modules.",
        ar: "عزّزت استقرار التطبيق وتجربة المستخدم من خلال تطبيق آليات استباقية لمعالجة الأخطاء وتحسين أداء عرض الواجهات للوحدات الحرجة." },
      { en: "Provide day-to-day IT support: configuring printers, Wi-Fi networks, Google accounts, and biometric attendance systems, and troubleshooting hardware and software issues.",
        ar: "أقدّم الدعم التقني اليومي: إعداد الطابعات وشبكات Wi-Fi وحسابات Google وأنظمة البصمة، وتشخيص مشكلات العتاد والبرمجيات وحلّها." },
      { en: "Deploy web pages, configure domains and URLs, and handle invoice-related tasks and data exports.",
        ar: "أنشر صفحات الويب وأضبط النطاقات والروابط، وأتولى مهام الفواتير وتصدير البيانات." }
    ]
  },
  {
    name: { en: "Freelance Content Creator & Visual Designer", ar: "صانع محتوى ومصمم بصري مستقل" },
    org: { en: "Linda Beauty Salon · Mazaya Travel & Tourism", ar: "صالون ليندا للتجميل · مزايا للسياحة والسفر" },
    date: { en: "05/2026 – Present", ar: "05/2026 – حتى الآن" },
    location: { en: "UAE (Remote)", ar: "الإمارات (عن بُعد)" },
    items: [
      { en: "Planned and filmed 30+ Reels — from ideas, hooks, and shot lists to on-site shooting sessions covering mobile photography, videography, lighting, and composition.",
        ar: "خطّطت وصوّرت أكثر من 30 ريل — من الأفكار والـ Hooks وقوائم اللقطات إلى جلسات التصوير الميدانية بالموبايل، مع الإضاءة والتكوين وزوايا الكاميرا."},
      { en: "Designed 500+ visual assets (promotional posts, Stories, covers, and advertising creatives) using Photoshop, Figma, and AI-assisted tools.",
        ar: "صمّمت أكثر من 500 تصميم بصري (منشورات ترويجية، ستوريز، أغلفة، وإعلانات) باستخدام Photoshop وFigma وأدوات الذكاء الاصطناعي."},
      { en: "Grew the Linda Beauty Salon account by ~250 Instagram followers in 3 months, with Reels reaching 10K+ views; Mazaya Reels reached ~30K–50K views.",
        ar: "رفعت حساب صالون ليندا بنحو 250 متابع جديد على إنستغرام خلال 3 أشهر مع ريلز تجاوزت 10 آلاف مشاهدة، وريلز مزايا وصلت إلى 30–50 ألف مشاهدة."},
      { en: "Managed direct client communication: presenting creative proposals, handling revisions, and delivering final content.",
        ar: "أدرت التواصل المباشر مع العملاء: عرض المقترحات الإبداعية، والتعامل مع التعديلات، وتسليم المحتوى النهائي."}
    ]
  },
  {
    name: { en: "Flutter Developer & UI/UX Designer", ar: "مطوّر Flutter ومصمم UI/UX" },
    org: "Virtual Modern School",
    date: { en: "08/2024 – 10/2025", ar: "08/2024 – 10/2025" },
    location: { en: "United States (Remote)", ar: "الولايات المتحدة (عن بُعد)" },
    items: [
      { en: "Developed the complete front-end architecture for a large-scale educational platform, ensuring high performance and modularity using GetX.",
        ar: "طوّرت البنية الكاملة للواجهة الأمامية لمنصة تعليمية واسعة النطاق، لضمان أداء عالٍ وقابلية تعديل باستخدام GetX." },
      { en: "Optimized user engagement by transforming complex Figma/Adobe XD mockups into smooth, fluidly rendering responsive UI components.",
        ar: "حسّنت تفاعل المستخدمين عبر تحويل تصاميم Figma/Adobe XD المعقدة إلى مكونات واجهة متجاوبة وسلسة الأداء." },
      { en: "Managed API integrations and synchronized backend REST endpoints while resolving cross-browser compatibility issues for Flutter Web.",
        ar: "أدرت عمليات دمج الـ API وزامنت نقاط النهاية الخلفية REST مع حل مشكلات التوافق بين المتصفحات لتطبيق Flutter Web." }
    ]
  },
  {
    name: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    org: "Soltan Volunteer Team",
    date: { en: "01/2023 – 06/2024", ar: "01/2023 – 06/2024" },
    location: { en: "Syria, Swaida", ar: "السويداء، سوريا" },
    items: [
      { en: "Led the development of an enterprise administrative system, establishing a scalable codebase driven by GetX state management.",
        ar: "قدت تطوير نظام إداري متكامل، وأسست قاعدة كود قابلة للتوسع مبنية على إدارة حالة GetX." },
      { en: "Secured critical workflows by writing rigorous unit testing for the e-wallet module's business logic to ensure transaction accuracy.",
        ar: "أمّنت مسارات العمل الحرجة عبر كتابة اختبارات وحدة دقيقة لمنطق أعمال وحدة المحفظة الإلكترونية لضمان دقة المعاملات." },
      { en: "Translated Figma designs into responsive, pixel-perfect Flutter code, ensuring seamless UI consistency across mobile and web.",
        ar: "ترجمت تصاميم Figma إلى كود Flutter متجاوب ودقيق البكسل، لضمان اتساق الواجهة عبر منصتي الجوال والويب." }
    ]
  },
  {
    name: { en: "Freelance Flutter Developer", ar: "مطوّر Flutter مستقل" },
    org: { en: "Freelancer", ar: "عمل حر" },
    date: { en: "06/2021 – Present", ar: "06/2021 – حتى الآن" },
    location: { en: "Syria & Remote", ar: "سوريا وعن بُعد" },
    items: [
      { en: "Engineered and launched 8+ commercial cross-platform apps using Flutter & Dart, managing the full lifecycle from database setup to store deployment.",
        ar: "صمّمت وأطلقت أكثر من 8 تطبيقات تجارية عبر منصات متعددة باستخدام Flutter وDart، وأدرت دورة الحياة الكاملة من إعداد قاعدة البيانات حتى النشر على المتاجر." },
      { en: "Implemented adaptive architectures utilizing GetX and Provider based on specific project requirements and scalability needs.",
        ar: "طبّقت معماريات متكيّفة باستخدام GetX وProvider وفق متطلبات كل مشروع واحتياجاته من القابلية للتوسع." },
      { en: "Integrated core features including offline data persistence (Hive/Isar) and secure payment gateways with robust RESTful API parsing.",
        ar: "دمجت ميزات أساسية مثل تخزين البيانات دون اتصال (Hive/Isar) وبوابات دفع آمنة مع تحليل RESTful API متين." }
    ]
  },
  {
    name: { en: "Computer Technician & Sales", ar: "فني حاسوب ومبيعات" },
    org: "Call Me",
    date: { en: "2018 – 2023", ar: "2018 – 2023" },
    location: { en: "Syria", ar: "سوريا" },
    items: [
      { en: "Diagnosed and repaired hardware and software issues on desktops and laptops, installed Windows, drivers, and software, and assembled PCs and replaced components.",
        ar: "شخّصت وأصلحت أعطال العتاد والبرمجيات في الحواسيب المكتبية والمحمولة، وثبّتّ ويندوز والتعاريف والبرامج، وجمّعت أجهزة PC وبدّلت القطع."},
      { en: "Installed, configured, and maintained printers and biometric attendance devices, resolving technical issues on-site.",
        ar: "ركّبت وضبطت وصيّنت الطابعات وأجهزة البصمة وحلّلت مشكلاتها ميدانيًا."},
      { en: "Advised customers on choosing suitable computers, mobile phones, and software based on their needs, and provided technical support.",
        ar: "ساعدت الزبائن في اختيار الحواسيب والهواتف والبرامج المناسبة لاحتياجاتهم وقدّمت لهم الدعم التقني."}
    ]
  }
];

// ---- PROJECT FILTER CATEGORIES ---------------------------------------------
// key: used in each project's `cats` array. Add/remove categories freely;
// the filter bar at the top of the Projects section is built from this list.
const projectCategories = [
  { key: "all",     label: { en: "All", ar: "الكل" } },
  { key: "mobile",  label: { en: "Mobile Apps", ar: "تطبيقات الجوال" } },
  { key: "web",     label: { en: "Web Apps", ar: "تطبيقات الويب" } },
  { key: "design",  label: { en: "UI/UX Design", ar: "تصميم UI/UX" } },
  { key: "content", label: { en: "Content & Graphic Design", ar: "المحتوى والتصميم الجرافيكي" } }
];

// ---- PROJECTS -------------------------------------------------------------
// name, org, date, items
// cats    : one or more category keys from projectCategories (card shows under each filter)
// tech    : small chips shown on the card
// folder  : this project's image folder, e.g. "images/projects/virtual-modern-school"
//           cover.(jpg|png|webp|svg) = card cover image   (if missing, 1.* is used)
//           1.*, 2.*, 3.* ...        = gallery images shown in the lightbox (numbered, no gaps)
//           Just replace the files inside the folder - any of jpg/jpeg/png/webp/avif/svg works.
// count   : number of gallery images (1.jpg ... N.jpg). Gives instant loading. Omit it to auto-scan the folder.
// link    : URL. Clicking a card ALWAYS opens the gallery; if link is set the gallery shows a
//           "Visit GitHub / Visit Figma / Visit Website ..." button (picked automatically from the URL).
//           Leave link: "" and no button is shown.
const projectsData = [
  {
    name: "Virtual Modern School",
    org: { en: "Syrian Virtual School", ar: "المدرسة الافتراضية السورية" },
    date: "08/2024 – 10/2025",
    cats: ["web", "mobile", "design"],
    tech: ["Flutter", "Figma", "REST APIs"],
    folder: "images/projects/virtual-modern-school",
    count: 33,
    link: "https://vmssyria.com/home",
    items: [
      { en: "Built the Flutter web and mobile interfaces of an educational and administrative platform for students, teachers, and administrators, including live classes via Meet, interactive lessons, and assignment management.",
        ar: "بنيت بـ Flutter واجهات الويب والجوال لمنصة تعليمية وإدارية للطلاب والمعلمين والإداريين، تشمل الحصص المباشرة عبر Meet والدروس التفاعلية وإدارة الواجبات." },
      { en: "Designed the UI/UX in Figma: layouts, color palettes, typography, and a consistent design system with reusable components, refined through user feedback.",
        ar: "صمّمت واجهة وتجربة المستخدم في Figma: التخطيطات ولوحات الألوان والخطوط، مع نظام تصميم متسق بمكونات قابلة لإعادة الاستخدام، وحسّنته بناءً على ملاحظات المستخدمين." },
      { en: "Integrated the interfaces with backend services through RESTful APIs and supported ongoing updates and maintenance.",
        ar: "ربطت الواجهات بالخدمات الخلفية عبر RESTful APIs ودعمت التحديثات والصيانة المستمرة." }
    ]
  },
  {
    name: "Sultan Volunteer Team App",
    org: { en: "Sultan Volunteer Team", ar: "فريق سلطان التطوعي" },
    date: "2023 – 2024",
    cats: ["mobile", "web", "design"],
    tech: ["Flutter", "Role-based UI", "Figma"],
    folder: "images/projects/sultan-volunteer-app",
    count: 26,
    link: "https://github.com/LaithHaithamAzzam/Soltanteam",
    items: [
      { en: "Contributed to a volunteer and team management app built with Flutter, featuring an e-wallet, task management, and real-time updates for volunteers and administrators.",
        ar: "ساهمت في تطبيق لإدارة المتطوعين والفرق مبني بـ Flutter، يتضمن محفظة إلكترونية ونظام إدارة مهام وتحديثات فورية للمتطوعين والمشرفين." },
      { en: "Designed and built administrative dashboards for volunteers, coordinators, and administrators with role-based navigation and consistent layouts across all modules.",
        ar: "صمّمت ونفّذت لوحات إدارة للمتطوعين والمنسقين والمشرفين مع تنقّل حسب الدور وتخطيطات متسقة عبر جميع الوحدات." }
    ]
  },
  {
    name: "Twenty Personal Assistants",
    org: { en: "Graduation Project", ar: "مشروع التخرج" },
    date: "2024",
    cats: ["mobile"],
    tech: ["Flutter", "NFC", "Voice Commands"],
    folder: "images/projects/twenty-personal-assistants",
    count: 15,
    link: "",
    items: [
      { en: "Developed \"Twenty\", a personal assistant application featuring 20 core functions, as my graduation project.",
        ar: "طوّرت تطبيق \"Twenty\"، مساعدًا شخصيًا يضم 20 وظيفة أساسية، كمشروع تخرجي." },
      { en: "Added an NFC card holding essential medical information so first responders can quickly access patient data in emergencies.",
        ar: "أضفت بطاقة NFC تحمل معلومات طبية أساسية لتمكين المسعفين من الوصول السريع لبيانات المريض في حالات الطوارئ." },
      { en: "Added voice-command control to help people with mobility impairments use the device independently. Graded 95/100 and ranked first among graduation projects.",
        ar: "أضفت التحكم بالأوامر الصوتية لمساعدة ذوي الإعاقة الحركية على استخدام الجهاز باستقلالية. حصل على 95/100 وحلّ أولًا بين مشاريع التخرج." }
    ]
  },
  {
    name: { en: "E-Commerce Application — Smart Location Phone", ar: "تطبيق متجر إلكتروني — Smart Location Phone" },
    org: { en: "Mobile Application", ar: "تطبيق جوال" },
    date: "2023",
    cats: ["mobile"],
    tech: ["Flutter", "Product Search", "E-Wallet"],
    folder: "images/projects/smart-location-phone",
    count: 5,
    link: "https://github.com/LaithHaithamAzzam/Smart-Location-Phone",
    items: [
      { en: "Developed an online store for selling mobile phones with brand categories, product search, and detailed phone pages showing price, battery, display, system, RAM, and colors.",
        ar: "طوّرت متجرًا إلكترونيًا لبيع الهواتف مع تصنيف حسب الماركات وبحث عن المنتجات وصفحات تفصيلية للهاتف تعرض السعر والبطارية والشاشة والنظام والذاكرة والألوان." },
      { en: "Built a manager side for adding phones with their photos, RAM, storage, and other specs, plus cart and order features and e-wallet payments for users.",
        ar: "بنيت جهة إدارة لإضافة الهواتف مع صورها والذاكرة والتخزين ومواصفاتها، إضافةً إلى السلة والطلبات والدفع بالمحفظة الإلكترونية للمستخدمين." }
    ]
  },
  {
    name: "Hotel Management System",
    org: { en: "Academic / Training Project", ar: "مشروع أكاديمي / تدريبي" },
    date: "2022",
    cats: ["mobile"],
    tech: ["Flutter", "GetX", "Laravel API"],
    folder: "images/projects/hotel-management",
    count: 16,
    link: "https://github.com/LaithHaithamAzzam/Hotel",
    items: [
      { en: "Developed a hotel management app with Flutter and GetX covering room management, reservations, check-in/check-out, guest information, employee management, billing, and reporting.",
        ar: "طوّرت تطبيق إدارة فندق بـ Flutter وGetX يشمل إدارة الغرف والحجوزات وتسجيل الدخول والخروج ومعلومات النزلاء وإدارة الموظفين والفوترة والتقارير." },
      { en: "Supported three user types (manager, hotel owner, and user): users book rooms, pay with the app wallet, rate hotels, and save favorites, while managers add offers and track availability.",
        ar: "دعمت ثلاثة أنواع من المستخدمين (المدير، مالك الفندق، المستخدم): يحجز المستخدم الغرف ويدفع بمحفظة التطبيق ويقيّم الفنادق ويحفظ المفضلة، بينما يضيف المدير العروض ويتابع التوفر." },
      { en: "Connected the app to a Laravel backend through RESTful APIs with authentication and user permissions, working alongside a separate backend developer.",
        ar: "ربطت التطبيق بخلفية Laravel عبر RESTful APIs مع المصادقة وصلاحيات المستخدمين، بالتعاون مع مطوّر خلفية مستقل." }
    ]
  },
  {
    name: "Wanderlust Trip Management",
    org: { en: "Travel & Tourism Application", ar: "تطبيق سفر وسياحة" },
    date: "2021",
    cats: ["mobile"],
    tech: ["Flutter", "Itinerary", "Booking"],
    folder: "images/projects/wanderlust-trip",
    count: 12,
    link: "https://github.com/LaithHaithamAzzam/Wanderlust",
    items: [
      { en: "Developed a travel management app for trip planning and destination exploration, with itinerary planning, hotel booking, and travel information.",
        ar: "طوّرت تطبيق إدارة سفر لتخطيط الرحلات واستكشاف الوجهات، مع تخطيط البرامج وحجز الفنادق ومعلومات السفر." },
      { en: "Users book trips, choose the number of participants, pay through the app wallet, and save favorites, while managers update trips and track reservations.",
        ar: "يحجز المستخدم الرحلات ويحدد عدد المشاركين ويدفع عبر محفظة التطبيق ويحفظ المفضلة، بينما يحدّث المدير الرحلات ويتابع الحجوزات." }
    ]
  },
  {
    name: "Hajj Mate Application",
    org: { en: "UI/UX Design · Figma", ar: "تصميم UI/UX · Figma" },
    date: "",
    cats: ["design"],
    tech: ["Figma", "Prototyping", "Mobile UI"],
    folder: "images/projects/hajj-mate",
    count: 17,
    link: "https://www.figma.com/proto/rj6EA4Mj0txur0u18fT9hi/Hajj_APP?page-id=0%3A1&node-id=2-3&p=f&viewport=1331%2C478%2C0.43&t=GK2Ypdf1KuV1tF8o-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
    items: [
      { en: "Designed a digital companion that guides pilgrims through Hajj rituals step by step, with interactive maps, prayer times, and reminders.",
        ar: "صمّمت تطبيقًا مرافقًا يرشد الحجاج خطوة بخطوة في مناسك الحج، مع خرائط تفاعلية ومواقيت الصلاة وتذكيرات." },
      { en: "Included hotel booking, transportation management, and emergency support flows in a clean, easy-to-navigate interface.",
        ar: "شمل التصميم مسارات حجز الفنادق وإدارة النقل والدعم الطارئ ضمن واجهة نظيفة وسهلة التنقل." }
    ]
  },
  {
    name: "Laza — Ecommerce Mobile App",
    org: { en: "UI/UX Design · Figma", ar: "تصميم UI/UX · Figma" },
    date: "",
    cats: ["design"],
    tech: ["Figma", "E-commerce", "Mobile UI"],
    folder: "images/projects/laza-ecommerce-design",
    count: 20,
    link: "https://www.figma.com/design/ehEEVwzQRFYUeZQfJGXgzA/Ecommerce-Mobile-App?node-id=0-1&t=0M2hOnd7jihOseSK-1",
    items: [
      { en: "Designed a modern shopping experience covering product browsing, cart, order tracking, and payment management.",
        ar: "صمّمت تجربة تسوّق عصرية تغطي تصفّح المنتجات والسلة وتتبّع الطلبات وإدارة الدفع." },
      { en: "Focused on a clean interface and smooth navigation across all e-commerce screens.",
        ar: "ركّزت على واجهة نظيفة وتنقّل سلس عبر جميع شاشات المتجر." }
    ]
  },
  {
    name: "Lens — Lens Adjustment App",
    org: { en: "UI/UX Design · Figma", ar: "تصميم UI/UX · Figma" },
    date: "",
    cats: ["design"],
    tech: ["Figma", "Prototyping"],
    folder: "images/projects/lens-app-design",
    count: 3,
    link: "https://www.figma.com/proto/xOo8qQbzI29lWnKmJdtrT1/Eye-Glass?page-id=0%3A1&node-id=5-573&viewport=267%2C-88%2C0.22&t=gaz8fFclxd8UdpIo-1&scaling=scale-down&content-scaling=fixed",
    items: [
      { en: "Designed an app that helps users adjust and calibrate lenses with step-by-step guidance and precision tips.",
        ar: "صمّمت تطبيقًا يساعد المستخدمين على ضبط العدسات ومعايرتها بإرشادات خطوة بخطوة ونصائح دقيقة." },
      { en: "Built an interactive Figma prototype with an intuitive interface to reach accurate results quickly.",
        ar: "بنيت نموذجًا تفاعليًا في Figma بواجهة بديهية للوصول إلى نتائج دقيقة بسرعة." }
    ]
  },
  {
    name: { en: "Linda Beauty Salon — Social Media Content", ar: "صالون ليندا للتجميل — محتوى السوشال ميديا" },
    org: { en: "Freelance Client · Beauty", ar: "عميل مستقل · تجميل" },
    date: "05/2026 – Present",
    cats: ["content"],
    tech: ["Reels", "Photography", "Social Designs"],
    folder: "images/projects/linda-beauty-salon",
    link: "https://www.instagram.com/lindabeauty.ae",
    items: [
      { en: "Planned and filmed ~30 Reels with hooks, shot lists, and visual direction, plus ~4 on-site shooting sessions per month.",
        ar: "خطّطت وصوّرت نحو 30 ريل بـ Hooks وقوائم لقطات وتوجيه بصري، مع نحو 4 جلسات تصوير ميدانية شهريًا." },
      { en: "Created 250+ social designs in 3 months; the account gained ~250 followers with Reels reaching 10K+ views.",
        ar: "صمّمت أكثر من 250 تصميم سوشال خلال 3 أشهر؛ واكتسب الحساب نحو 250 متابع مع ريلز تجاوزت 10 آلاف مشاهدة." }
    ]
  },
  {
    name: { en: "Mazaya Travel & Tourism — Campaign Visuals", ar: "مزايا للسياحة والسفر — تصاميم الحملات" },
    org: { en: "Freelance Client · Travel & Tourism", ar: "عميل مستقل · سياحة وسفر" },
    date: "2026",
    cats: ["content"],
    tech: ["Photoshop", "AI Tools", "Reels"],
    folder: "images/projects/mazaya-travel",
    link: "https://www.instagram.com/mazayatraveluae",
    items: [
      { en: "Designed 250+ visual assets: promotional posters, Stories, covers, and advertising creatives for travel offers and visa promotions.",
        ar: "صمّمت أكثر من 250 تصميمًا بصريًا: بوسترات ترويجية وستوريز وأغلفة وإعلانات لعروض السفر وخدمات التأشيرات." },
      { en: "Conceived a pet-centered campaign concept and filmed Reels reaching ~30K–50K views.",
        ar: "ابتكرت فكرة حملة محورها حيوان أليف وصوّرت ريلز وصلت إلى 30–50 ألف مشاهدة." }
    ]
  }
];

// ---- SKILLS ---------------------------------------------------------------
// title, items (array of strings or {en, ar}), fullWidth (optional, spans both grid columns)
const skillsData = [
  {
    title: { en: "Core Development", ar: "التطوير الأساسي" },
    items: ["Flutter (iOS / Android / Web / Desktop)", "Dart", { en: "Cross-Platform Development", ar: "تطوير متعدد المنصات" }]
  },
  {
    title: { en: "State Management & Architecture", ar: "إدارة الحالة والمعمارية" },
    items: ["BLoC / Cubit", "GetX", "Provider"]
  },
  {
    title: { en: "Architecture & Testing", ar: "المعمارية والاختبار" },
    items: ["Clean Architecture", { en: "Separation of Concerns", ar: "فصل الاهتمامات" }, "Unit Testing", "Widget Testing"]
  },
  {
    title: { en: "UI/UX & Design", ar: "واجهة وتجربة المستخدم" },
    items: ["Figma", "Auto Layout", { en: "Components & Variants", ar: "المكونات والـ Variants" }, { en: "Interactive Prototyping", ar: "النماذج التفاعلية" }, { en: "Design Systems", ar: "أنظمة التصميم" }, "Adobe XD", "Adobe Photoshop", { en: "Responsive Design", ar: "تصميم متجاوب" }, "Material Design", "Apple HIG"]
  },
  {
    title: { en: "Content Creation & Visual Design", ar: "صناعة المحتوى والتصميم البصري" },
    items: [
      { en: "Reel & Short-Form Video", ar: "الريلز والفيديو القصير" },
      { en: "Mobile Photography & Videography", ar: "التصوير والفيديو بالموبايل" },
      { en: "Social Media Design", ar: "تصميم السوشال ميديا" },
      { en: "Creative Direction", ar: "التوجيه الإبداعي" },
      { en: "AI-Assisted Content Creation", ar: "صناعة المحتوى بمساعدة الذكاء الاصطناعي" },
      "Adobe Illustrator", "Canva", "CapCut", "Adobe Lightroom", "Adobe Premiere Pro"
    ]
  },
  {
    title: { en: "IT Support & Hardware", ar: "الدعم التقني والعتاد" },
    items: [
      { en: "Hardware & Software Troubleshooting", ar: "تشخيص أعطال العتاد والبرمجيات" },
      { en: "PC Assembly & Maintenance", ar: "تجميع وصيانة الحواسيب" },
      { en: "Windows Installation", ar: "تثبيت ويندوز" },
      { en: "Printers & Biometric Attendance", ar: "الطابعات وأنظمة البصمة" },
      { en: "Wi-Fi & Basic Network Setup", ar: "إعداد Wi-Fi والشبكات الأساسية" },
      { en: "Google Workspace Support", ar: "دعم Google Workspace" },
      "Microsoft 365"
    ]
  },
  {
    title: { en: "Backend Integration & Tools", ar: "تكامل الخلفية والأدوات" },
    items: ["RESTful APIs", "Dio", "JSON", "Git", "GitHub / GitLab", "CI/CD", { en: "Web Deployment & Domains", ar: "نشر المواقع وإعداد النطاقات" }],
    fullWidth: true
  }
];

// ---- EDUCATION --------------------------------------------------------------
// degree, place, date
const educationData = [
  {
    degree: { en: "Bachelor of Applied Sciences in Computer Technology", ar: "بكالوريوس العلوم التطبيقية — تقنية الحاسوب" },
    place: { en: "Damascus University, Applied College", ar: "جامعة دمشق، الكلية التطبيقية" },
    date: { en: "2020 – 2024 · Damascus", ar: "2020 – 2024 · دمشق" }
  }
];

// ---- LANGUAGES ---------------------------------------------------------------
// name, level
const languagesData = [
  { name: "Arabic — العربية", level: { en: "Native Speaker", ar: "اللغة الأم" } },
  { name: "English — الإنجليزية", level: { en: "Professional Working Proficiency", ar: "كفاءة عمل احترافية" } }
];

// ---- CERTIFICATES & COURSES ---------------------------------------------------
// title, meta
// logo  : the issuer's logo, shown on the card (click it to open the certificate).
// image : the certificate picture, opened inside the viewer.
// certificateVerifyUrl : verification URL. The "Verify certificate" button (on the card AND inside the
//                         image viewer) only appears when this is set. Leave "" to hide it.
const certificatesData = [
  {
    title: "One Million Prompters",
    meta: { en: "Dubai Future Foundation & Dubai Centre for AI — 2026", ar: "مؤسسة دبي للمستقبل ومركز دبي للذكاء الاصطناعي — 2026" },
    logo: "images/certificates/logos/dff.svg",
    image: "images/certificates/omp.png",
    certificateVerifyUrl: "https://omp.dub.ai/certificate/nT821616Rswk"
  },
  {
    title: { en: "Certificate of Appreciation", ar: "شهادة تقدير" },
    meta: { en: "Virtual Modern School — For contributing to an educational platform, 20 Mar 2025", ar: "المدرسة الافتراضية الحديثة — تقديرًا للمساهمة في منصة تعليمية، 20 آذار 2025" },
    logo: "images/certificates/logos/vms.png",
    image: "images/certificates/appreciation-vms.jpg",
    certificateVerifyUrl: ""
  },
  {
    title: { en: "HEMAC Exhibition — Excellence in the Graduation Project", ar: "معرض HEMAC — التميّز في مشروع التخرج" },
    meta: { en: "Damascus University — 18 Oct 2024", ar: "جامعة دمشق — 18 تشرين الأول 2024" },
    logo: "images/certificates/logos/hemac.jpg",
    image: "images/certificates/hemac-exhibition.jpg",
    certificateVerifyUrl: ""
  },
  {
    title: { en: "Material Components for Flutter", ar: "مكوّنات Material لـ Flutter" },
    meta: { en: "Coursera — 17 Mar 2024", ar: "Coursera — 17 آذار 2024" },
    logo: "images/certificates/logos/coursera.svg",
    image: "images/certificates/coursera-material-components.jpg",
    certificateVerifyUrl: "https://coursera.org/verify/QYX93QUNR9FY"
  },
  {
    title: { en: "Build a Two-Screen Flutter Application", ar: "بناء تطبيق Flutter بشاشتين" },
    meta: { en: "Coursera — 17 Mar 2024", ar: "Coursera — 17 آذار 2024" },
    logo: "images/certificates/logos/coursera.svg",
    image: "images/certificates/coursera-two-screen-app.jpg",
    certificateVerifyUrl: "https://coursera.org/verify/25BRVYQM3RXA"
  },
  {
    title: { en: "Getting Started with Flutter Development", ar: "البدء بتطوير Flutter" },
    meta: { en: "Coursera — 17 Mar 2024", ar: "Coursera — 17 آذار 2024" },
    logo: "images/certificates/logos/coursera.svg",
    image: "images/certificates/coursera-getting-started.jpg",
    certificateVerifyUrl: "https://coursera.org/verify/T76ERLYVLXPC"
  },
  {
    title: "Flutter Machine Learning",
    meta: { en: "Korsatcode — 30 Mar 2023", ar: "Korsatcode — 30 آذار 2023" },
    logo: "images/certificates/logos/korsatcode.png",
    image: "images/certificates/flutter-ml-korsatcode.jpg",
    certificateVerifyUrl: "https://www.korsatcode.com/student/certificate/6099941088"
  },
  {
    title: "Adobe Photoshop",
    meta: { en: "EIC (Education Information Center) — 29 Oct 2022", ar: "EIC (مركز المعلومات التعليمي) — 29 تشرين الأول 2022" },
    logo: "images/certificates/logos/eic.jpg",
    image: "images/certificates/photoshop-eic.jpg",
    certificateVerifyUrl: ""
  },
  {
    title: { en: "Programming Language C#", ar: "لغة البرمجة C#" },
    meta: { en: "Edraak — 23 Jan 2022", ar: "إدراك — 23 كانون الثاني 2022" },
    logo: "images/certificates/logos/edraak.jpg",
    image: "images/certificates/edraak-csharp.jpg",
    certificateVerifyUrl: "https://programs.edraak.org/learn/verify-certificate/2da7272200444d2c804c42734decab4b/?lang=ar"
  },
  {
    title: { en: "Computer Maintenance Fundamentals", ar: "أساسيات صيانة الحاسوب" },
    meta: { en: "Masa Training Center — 15 Jul 2014", ar: "مركز مَسَا للتدريب — 15 تموز 2014" },
    logo: "images/certificates/logos/masa.png",
    image: "images/certificates/computer-maintenance-masa.jpg",
    certificateVerifyUrl: ""
  }
];

/* =========================================================================
   RENDER ENGINE — you shouldn't need to touch anything below this line.
   ========================================================================= */

function t(field, lang){
  if (field === null || field === undefined) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || field.ar || "";
}

function el(tag, attrs = {}, html = ""){
  const node = document.createElement(tag);
  for (const k in attrs) node.setAttribute(k, attrs[k]);
  node.innerHTML = html;
  return node;
}

function renderExperience(lang){
  const wrap = document.getElementById("experienceList");
  wrap.innerHTML = "";
  experienceData.forEach((job, idx) => {
    const item = el("div", { class: "tl-item reveal" });
    item.style.transitionDelay = (idx * 0.1) + "s";
    item.appendChild(el("div", { class: "tl-dot" }));

    const top = el("div", { class: "tl-top" });
    const left = document.createElement("div");
    left.appendChild(el("div", { class: "tl-role" }, t(job.name, lang)));
    left.appendChild(el("p", { class: "tl-org" }, t(job.org, lang)));
    top.appendChild(left);

    const metaParts = [t(job.date, lang), t(job.location, lang)].filter(Boolean).join(" · ");
    top.appendChild(el("div", { class: "tl-meta" }, metaParts));
    item.appendChild(top);

    const list = el("ul", { class: "tl-list" });
    (job.items || []).forEach(li => list.appendChild(el("li", {}, t(li, lang))));
    item.appendChild(list);

    wrap.appendChild(item);
  });
}

/* ---------- PROJECTS: filter bar + cards + gallery lightbox ---------- */
let activeProjectFilter = "all";

function projectMatches(p, key){
  return key === "all" || (p.cats || []).indexOf(key) !== -1;
}

function renderProjectFilters(lang){
  const bar = document.getElementById("projectFilters");
  if (!bar) return;
  bar.innerHTML = "";
  projectCategories.forEach(cat => {
    const count = projectsData.filter(p => projectMatches(p, cat.key)).length;
    if (cat.key !== "all" && count === 0) return;           // hide empty categories
    const btn = el("button", {
      type: "button",
      class: "filter-btn" + (cat.key === activeProjectFilter ? " active" : ""),
      "data-filter": cat.key,
      "aria-pressed": cat.key === activeProjectFilter ? "true" : "false"
    }, t(cat.label, lang) + '<span class="filter-count">' + count + '</span>');
    btn.addEventListener("click", () => setProjectFilter(cat.key));
    bar.appendChild(btn);
  });
}

function setProjectFilter(key){
  if (key === activeProjectFilter) return;
  activeProjectFilter = key;
  document.querySelectorAll("#projectFilters .filter-btn").forEach(b => {
    const on = b.dataset.filter === key;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });

  const cards = Array.from(document.querySelectorAll("#projectsList .proj-card"));
  // 1) fade out the ones that don't match
  cards.forEach(card => {
    const match = projectMatches(projectsData[+card.dataset.idx], key);
    if (!match && !card.classList.contains("is-hidden")) card.classList.add("is-leaving");
  });
  // 2) after the fade, hide them and pop the matching ones in (staggered)
  setTimeout(() => {
    let n = 0;
    cards.forEach(card => {
      const match = projectMatches(projectsData[+card.dataset.idx], key);
      card.classList.remove("is-leaving");
      if (!match){ card.classList.add("is-hidden"); return; }
      card.classList.remove("is-hidden");
      card.classList.add("in-view");                         // hidden cards never got revealed by the observer
      card.style.transitionDelay = "0s";
      card.style.setProperty("--pop-delay", (n++ * 0.06) + "s");
      card.classList.remove("pop-in"); void card.offsetWidth; card.classList.add("pop-in");
    });
  }, 230);
}

/* ---- image discovery: reads  <folder>/cover.*  and  <folder>/1.*, 2.*, 3.* ... ---- */
const IMG_EXTS = ["jpg", "jpeg", "png", "webp", "avif", "svg"];   // first match wins
function probeImg(url){
  return new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = url; });
}
async function findImage(base){
  const hits = await Promise.all(IMG_EXTS.map(e => probeImg(base + "." + e)));
  const k = hits.indexOf(true);
  return k === -1 ? null : base + "." + IMG_EXTS[k];
}
function loadProjectMedia(p){
  if (!p.folder) return Promise.resolve({ cover: null, files: [] });
  if (p.count && !p._media){
    const files = Array.from({ length: p.count }, (_, i) => p.folder + "/" + (i + 1) + ".jpg");
    p._res = { cover: p.folder + "/cover.jpg", files };
    p._media = Promise.resolve(p._res);
  }
  if (!p._media){
    p._media = (async () => {
      const files = [];
      for (let n = 1; n <= 40; n++){
        const f = await findImage(p.folder + "/" + n);
        if (!f) break;
        files.push(f);
      }
      let cover = await findImage(p.folder + "/cover");
      if (!cover) cover = files[0] || null;
      if (!files.length && cover) files.push(cover);
      return { cover, files };
    })().then(m => { p._res = m; return m; });
  }
  return p._media;
}

function verifyLabel(lang){ return lang === "ar" ? "التحقق من الشهادة ↗" : "Verify certificate ↗"; }

function linkLabel(url, lang){
  const u = (url || "").toLowerCase();
  const ar = lang === "ar";
  if (u.includes("github.com"))    return ar ? "زيارة GitHub ↗"    : "Visit GitHub ↗";
  if (u.includes("figma.com"))     return ar ? "زيارة Figma ↗"     : "Visit Figma ↗";
  if (u.includes("instagram.com")) return ar ? "زيارة Instagram ↗" : "Visit Instagram ↗";
  if (u.includes("behance.net"))   return ar ? "زيارة Behance ↗"   : "Visit Behance ↗";
  if (/^https?:/.test(u))          return ar ? "زيارة الموقع ↗"    : "Visit Website ↗";
  return ar ? "فتح المشروع ↗" : "Open project ↗";
}

function renderProjects(lang){
  renderProjectFilters(lang);
  const wrap = document.getElementById("projectsList");
  wrap.innerHTML = "";
  projectsData.forEach((p, idx) => {
    const hasLink = p.link && p.link.trim() !== "";
    const hasFolder = !!p.folder;
    const mode = hasFolder ? "gallery" : "static";
    const hidden = !projectMatches(p, activeProjectFilter);

    const card = el("div", {
      class: "proj-card reveal " + mode + (hidden ? " is-hidden" : ""),
      "data-idx": idx
    });
    card.style.transitionDelay = (idx * 0.07) + "s";
    if (hasFolder){
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.addEventListener("click", () => openLightbox(idx, 0));
      card.addEventListener("keydown", e => { if (e.target !== card) return; if (e.key === "Enter" || e.key === " "){ e.preventDefault(); openLightbox(idx, 0); } });
    }

    if (hasFolder){
      const media = el("div", { class: "proj-media" });
      const firstCat = projectCategories.find(c => c.key !== "all" && (p.cats || []).indexOf(c.key) !== -1);
      if (firstCat) media.appendChild(el("span", { class: "proj-badge" }, t(firstCat.label, lang)));
      const ctaText = lang === "ar" ? "عرض الصور ⤢" : "View gallery ⤢";
      media.appendChild(el("span", { class: "proj-cta" }, ctaText));
      card.appendChild(media);

      // fill the cover + gallery counter once the folder has been scanned
      loadProjectMedia(p).then(m => {
        if (m.cover){
          const img = el("img", { src: m.cover, alt: t(p.name, lang), loading: "lazy" });
          img.addEventListener("error", () => { if (m.files[0] && img.getAttribute("src") !== m.files[0]) img.src = m.files[0]; });
          img.addEventListener("load", () => img.classList.add("loaded"));
          if (img.complete) img.classList.add("loaded");
          media.insertBefore(img, media.firstChild);
        }
        if (m.files.length > 1){
          const gb = el("span", { class: "proj-count", "aria-label": "Gallery" }, "▣ " + m.files.length);
          media.appendChild(gb);
        }
      });
    }

    const top = el("div", { class: "proj-top" });
    const nameHtml = t(p.name, lang);
    top.appendChild(el("span", { class: "proj-name" }, nameHtml));
    top.appendChild(el("span", { class: "proj-date" }, t(p.date, lang)));
    card.appendChild(top);

    card.appendChild(el("p", { class: "proj-org" }, t(p.org, lang)));

    const list = el("ul", {});
    (p.items || []).forEach(li => list.appendChild(el("li", {}, t(li, lang))));
    card.appendChild(list);

    if (p.tech && p.tech.length){
      const tech = el("div", { class: "proj-tech" });
      p.tech.forEach(x => tech.appendChild(el("span", {}, t(x, lang))));
      card.appendChild(tech);
    }

    if (hasLink){
      const visit = el("a", { class: "btn btn-solid proj-visit", href: p.link, target: "_blank", rel: "noopener" }, linkLabel(p.link, lang));
      visit.addEventListener("click", e => e.stopPropagation());
      card.appendChild(visit);
    }

    wrap.appendChild(card);
  });
}

/* ---------- LIGHTBOX (gallery for projects without an external link) ---------- */
const lb = { root: null, idx: 0, img: 0, src: null };

function buildLightbox(){
  if (lb.root) return;
  const root = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-hidden": "true" },
    '<button type="button" class="lb-close" aria-label="Close">✕</button>' +
    '<button type="button" class="lb-nav lb-prev" aria-label="Previous">❮</button>' +
    '<button type="button" class="lb-nav lb-next" aria-label="Next">❯</button>' +
    '<figure class="lb-stage"><img class="lb-img" alt=""><figcaption class="lb-cap"><strong class="lb-title"></strong><span class="lb-counter"></span></figcaption></figure>' +
    '<div class="lb-thumbs"></div>' +
    '<a class="btn btn-solid lb-open" target="_blank" rel="noopener" hidden></a>');
  document.body.appendChild(root);
  lb.root = root;
  root.addEventListener("click", e => { if (e.target === root || e.target.classList.contains("lb-stage")) closeLightbox(); });
  root.querySelector(".lb-close").addEventListener("click", closeLightbox);
  root.querySelector(".lb-prev").addEventListener("click", () => stepLightbox(-1));
  root.querySelector(".lb-next").addEventListener("click", () => stepLightbox(1));
  document.addEventListener("keydown", e => {
    if (!root.classList.contains("open")) return;
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") stepLightbox(rtl ? 1 : -1);
  });
}

function lightboxFiles(p){ return (p._res && p._res.files) || []; }
function lbItem(){ return lb.src || projectsData[lb.idx]; }

function showLightboxImage(i){
  const p = lbItem(), files = lightboxFiles(p), lang = currentLang();
  lb.img = (i + files.length) % files.length;
  const img = lb.root.querySelector(".lb-img");
  img.classList.remove("swap"); void img.offsetWidth;
  img.src = files[lb.img]; img.alt = t(p.name, lang); img.classList.add("swap");
  lb.root.querySelector(".lb-title").textContent = t(p.name, lang);
  lb.root.querySelector(".lb-counter").textContent = (lb.img + 1) + " / " + files.length;
  lb.root.querySelectorAll(".lb-thumbs button").forEach((b, k) => b.classList.toggle("active", k === lb.img));
  lb.root.querySelectorAll(".lb-nav").forEach(b => b.style.display = files.length > 1 ? "" : "none");
}

async function openLightbox(idx, start){
  lb.src = null;
  const p = projectsData[idx];
  await loadProjectMedia(p);
  if (!lightboxFiles(p).length) return;                 // empty folder -> nothing to show
  buildLightbox();
  lb.idx = idx;
  const files = lightboxFiles(p), lang = currentLang();
  const thumbs = lb.root.querySelector(".lb-thumbs");
  thumbs.innerHTML = "";
  files.forEach((f, k) => {
    const b = el("button", { type: "button", "aria-label": "Image " + (k + 1) }, '<img src="' + f + '" alt="">');
    b.addEventListener("click", () => showLightboxImage(k));
    thumbs.appendChild(b);
  });
  thumbs.style.display = files.length > 1 ? "" : "none";
  const open = lb.root.querySelector(".lb-open");
  if (p.link && p.link.trim()){
    open.hidden = false; open.href = p.link; open.textContent = linkLabel(p.link, lang);
  } else { open.hidden = true; }
  showLightboxImage(start || 0);
  lb.root.classList.add("open");
  lb.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("lb-lock");
}

function openCertificate(idx){
  const c = certificatesData[idx];
  if (!c || !c.image) return;
  buildLightbox();
  lb.src = { name: c.title, _res: { files: [c.image] } };
  const lang = currentLang();
  const thumbs = lb.root.querySelector(".lb-thumbs");
  thumbs.innerHTML = ""; thumbs.style.display = "none";
  const open = lb.root.querySelector(".lb-open");
  if (c.certificateVerifyUrl && c.certificateVerifyUrl.trim()){
    open.hidden = false; open.href = c.certificateVerifyUrl; open.textContent = verifyLabel(lang);
  } else { open.hidden = true; }
  showLightboxImage(0);
  lb.root.classList.add("open");
  lb.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("lb-lock");
}

function closeLightbox(){
  if (!lb.root) return;
  lb.root.classList.remove("open");
  lb.root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lb-lock");
}
function stepLightbox(d){ showLightboxImage(lb.img + d); }

function renderSkills(lang){
  const wrap = document.getElementById("skillsList");
  wrap.innerHTML = "";
  skillsData.forEach(group => {
    const g = el("div", { class: "skill-group reveal" });
    if (group.fullWidth) g.style.gridColumn = "1/-1";
    g.appendChild(el("h3", {}, t(group.title, lang)));
    const row = el("div", { class: "tag-row" });
    (group.items || []).forEach(i => row.appendChild(el("span", { class: "tag" }, t(i, lang))));
    g.appendChild(row);
    wrap.appendChild(g);
  });
}

function renderEducation(lang){
  const wrap = document.getElementById("educationList");
  wrap.innerHTML = "";
  educationData.forEach(e => {
    const item = el("div", { class: "edu-item" });
    item.appendChild(el("h3", {}, t(e.degree, lang)));
    item.appendChild(el("p", { class: "muted" }, t(e.place, lang)));
    item.appendChild(el("p", { class: "muted" }, t(e.date, lang)));
    wrap.appendChild(item);
  });
}

function renderLanguages(lang){
  const wrap = document.getElementById("languagesList");
  wrap.innerHTML = "";
  languagesData.forEach(l => {
    const row = el("div", { class: "lang-row" });
    row.appendChild(el("span", { class: "lang-name" }, t(l.name, lang)));
    row.appendChild(el("span", { class: "lang-level" }, t(l.level, lang)));
    wrap.appendChild(row);
  });
}

function renderCertificates(lang){
  const wrap = document.getElementById("certificatesList");
  wrap.innerHTML = "";
  certificatesData.forEach((c, idx) => {
    const item = el("div", { class: "cert-item reveal has-img" });
    item.style.transitionDelay = (idx * 0.06) + "s";
    const tile = el("button", { class: "cert-thumb", type: "button", "aria-label": t(c.title, lang) });
    tile.appendChild(el("img", { src: c.logo || c.image, alt: "", loading: "lazy" }));
    tile.appendChild(el("span", { class: "cert-zoom" }, "⤢"));
    tile.addEventListener("click", () => openCertificate(idx));
    item.appendChild(tile);
    const body = document.createElement("div");
    body.appendChild(el("p", { class: "cert-title" }, t(c.title, lang)));
    body.appendChild(el("p", { class: "cert-meta" }, t(c.meta, lang)));
    body.appendChild(el("button", { class: "cert-view", type: "button" }, lang === "ar" ? "عرض الشهادة" : "View certificate"))
        .addEventListener("click", () => openCertificate(idx));
    if (c.certificateVerifyUrl && c.certificateVerifyUrl.trim()){
      body.appendChild(el("a", { class: "cert-verify", href: c.certificateVerifyUrl, target: "_blank", rel: "noopener" }, verifyLabel(lang)));
    }
    item.appendChild(body);
    wrap.appendChild(item);
  });
}

function renderAll(lang){
  renderExperience(lang);
  renderProjects(lang);
  renderSkills(lang);
  renderEducation(lang);
  renderLanguages(lang);
  renderCertificates(lang);
  renderStats(lang);
  initScrollReveal();
}

/* =========================================================================
   SCROLL REVEAL — fades/slides elements in as they enter the viewport.
   Re-run after every render so newly created nodes (experience, projects,
   skills, certificates...) animate in too, including after a language switch.
   ========================================================================= */
function initScrollReveal(){
  const targets = document.querySelectorAll('.reveal, .skill-group');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(elm => io.observe(elm));
}

/* =========================================================================
   NAV: shrink-on-scroll + scrollspy (highlights the active section link)
   ========================================================================= */
function updateProgress(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  const fg = document.getElementById('ringFg'), pct = document.getElementById('pct'), b = document.getElementById('backToTop');
  if (fg) fg.style.strokeDashoffset = String(150.8 * (1 - p));
  if (pct) pct.textContent = Math.round(p * 100);
  if (b) b.classList.toggle('done', p > 0.985);
}
window.addEventListener('resize', () => updateProgress());

/* stats tiles (counted from the data above) */
function renderStats(lang){
  const box = document.getElementById('stats'); if (!box) return;
  const L = lang === 'ar';
  const items = [
    [projectsData.length, L ? 'مشروع' : 'Projects'],
    [certificatesData.length, L ? 'شهادة ودورة' : 'Certificates'],
    [experienceData.length, L ? 'محطات مهنية' : 'Roles'],
    [4, L ? 'تخصصات' : 'Disciplines']
  ];
  box.innerHTML = items.map(([n, l]) => '<div class="stat"><b data-n="' + n + '">' + n + '</b><span>' + l + '</span></div>').join('');
}

/* CV picker */
function initCvMenu(){
  const m = document.getElementById('cvMenu'), b = document.getElementById('cvToggle'); if (!m) return;
  b.addEventListener('click', e => { e.stopPropagation(); b.setAttribute('aria-expanded', String(m.classList.toggle('open'))); });
  document.addEventListener('click', () => { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') m.classList.remove('open'); });
}

function initNav(){
  const navEl = document.querySelector('header.site-nav');
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', window.scrollY > 12);
    updateProgress();
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav.links a');
  const spyIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => spyIO.observe(s));

  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =========================================================================
   RIPPLE EFFECT on buttons
   ========================================================================= */
function initRipple(){
  document.querySelectorAll('.btn, .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', function (e){
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height) * 1.4;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}

/* =========================================================================
   SUBTLE PARALLAX for the hero photo on scroll
   ========================================================================= */
function initParallax(){
  const photoWrap = document.querySelector('.photo-wrap');
  if (!photoWrap) return;
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY * 0.08, 40);
    photoWrap.style.transform = `translateY(${y}px)`;
  });
}

/* =========================================================================
   CODE TYPER — types out a little Dart/Flutter snippet in the hero's
   floating "editor" card, on a continuous loop.
   ========================================================================= */
function initCodeTyper(){
  const el = document.getElementById('codeTyper');
  if (!el) return null;
  const snippet =
`class Portfolio extends
    StatelessWidget {
  Widget build(ctx) {
    return GreatUX();
  }
}`;
  let timer = null;

  // types the snippet once; called every time the "code" scene becomes active
  return function typeIn(){
    clearTimeout(timer);
    let i = 0;
    el.textContent = '';
    el.classList.add('typing');
    (function tick(){
      i++;
      el.textContent = snippet.slice(0, i);
      if (i < snippet.length) timer = setTimeout(tick, 15);
    })();
  };
}

/* Role badge — swaps the word (Flutter Developer / Content Creator / IT Support /
   UI/UX Designer) and resizes the pill to fit it, in both languages. */
function initChipWords(){
  const box = document.getElementById('chipWords');
  if (!box) return () => {};
  const words = box.querySelectorAll('.chip-word');
  let cur = 0;
  function fit(){
    const w = words[cur].getBoundingClientRect().width;
    if (w) box.style.width = Math.ceil(w) + 'px';
  }
  fit();
  new MutationObserver(() => requestAnimationFrame(fit))
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  return function show(n){
    words[cur].classList.remove('is-active');
    cur = n % words.length;
    words[cur].classList.add('is-active');
    fit();
  };
}

/* =========================================================================
   HERO SCENE CARD — every 3 seconds the floating card switches:
   code  ->  camera  ->  laptop & tech work  ->  designer tools  ->  (loop)
   ========================================================================= */
function initSceneCard(){
  const stage = document.getElementById('sceneStage');
  if (!stage) return;
  const scenes = stage.querySelectorAll('.scene');
  const pips   = document.querySelectorAll('.scene-pips i');
  const label  = document.getElementById('sceneLabel');
  const typeIn = initCodeTyper();
  const showChip = initChipWords();
  let i = 0;

  if (typeIn) typeIn();

  setInterval(() => {
    scenes[i].classList.remove('is-active');
    pips[i].classList.remove('on');
    i = (i + 1) % scenes.length;
    scenes[i].classList.add('is-active');
    void pips[i].offsetWidth;            // restart the progress animation
    pips[i].classList.add('on');
    if (label) label.textContent = scenes[i].dataset.label;
    showChip(i);
    if (i === 0 && typeIn) typeIn();
  }, 3000);
}

/* =========================================================================
   DEVICE MORPH — the floating device at the bottom corner changes every
   3 seconds:  phone  ->  laptop  ->  mouse  ->  (loop)
   ========================================================================= */
function initDeviceMorph(){
  const box = document.getElementById('deviceMorph');
  if (!box) return;
  const devs = box.querySelectorAll('.dev');
  if (devs.length < 2) return;
  let i = 0;
  setTimeout(() => {
    setInterval(() => {
      devs[i].classList.remove('is-active');
      i = (i + 1) % devs.length;
      devs[i].classList.add('is-active');
    }, 3000);
  }, 1500);   // offset so the two animations alternate instead of changing in lockstep
}

/* =========================================================================
   UI CONTROLS — language + theme
   ========================================================================= */
const bodyEl = document.body;
const htmlEl = document.documentElement;
const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');

function currentLang(){ return bodyEl.classList.contains('lang-ar') ? 'ar' : 'en'; }

function setLang(lang){
  bodyEl.classList.remove('lang-en','lang-ar');
  bodyEl.classList.add('lang-' + lang);
  htmlEl.lang = lang;
  htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
  renderAll(lang);
}
function setTheme(theme){
  bodyEl.dataset.theme = theme;
}

langBtn.addEventListener('click', () => setLang(currentLang() === 'ar' ? 'en' : 'ar'));
themeBtn.addEventListener('click', () => setTheme(bodyEl.dataset.theme === 'dark' ? 'light' : 'dark'));

renderAll(currentLang());
initNav();
initCvMenu();
updateProgress();
initRipple();
initParallax();
initSceneCard();
initDeviceMorph();

/* stat count-up */
(function(){
  const box = document.getElementById('stats'); if (!box) return;
  new IntersectionObserver((es, io) => es.forEach(e => {
    if (!e.isIntersecting) return; io.disconnect();
    box.querySelectorAll('b').forEach(b => {
      const n = +b.dataset.n, t0 = performance.now();
      (function f(t){ const k = Math.min(1, (t - t0) / 900); b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0);
    });
  }), { threshold: .4 }).observe(box);
})();


/* =========================================================================
   2027 layer: role swap, Dubai clock, marquee, spotlight, project counter
   ========================================================================= */
(function(){
  /* rotating role pill */
  const box = document.getElementById('roleSwap');
  if (box){
    const ws = box.querySelectorAll('.rw'); let c = 0;
    const fit = () => {};
    box.style.width = 'auto'; setTimeout(fit, 60);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    new MutationObserver(() => requestAnimationFrame(fit)).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    setInterval(() => {
      const prev = ws[c]; prev.classList.remove('is-active'); prev.classList.add('leaving');
      setTimeout(() => prev.classList.remove('leaving'), 600);
      c = (c + 1) % ws.length; ws[c].classList.add('is-active'); fit();
    }, 2600);
  }
  /* Dubai clock */
  const ck = document.getElementById('dxbClock'), dt = document.getElementById('dxbDate');
  function tick(){
    if (!ck) return; const now = new Date();
    ck.textContent = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' });
    if (dt) dt.textContent = now.toLocaleDateString(currentLang() === 'ar' ? 'ar-AE' : 'en-GB', { timeZone: 'Asia/Dubai', weekday: 'long', day: 'numeric', month: 'short' });
  }
  tick(); setInterval(tick, 15000); langBtn.addEventListener('click', () => setTimeout(tick, 30));
  /* projects counter */
  const pc = document.getElementById('projCount'); if (pc) pc.textContent = projectsData.length;
  /* marquee: words follow the page language */
  function renderMarquee(lang){
    const mq = document.getElementById('mqTrack'); if (!mq) return;
    const en = ['Flutter','Dart','Figma','BLoC / Cubit','Clean Architecture','REST APIs','CI/CD','UI/UX','Design Systems','Content Creation','IT Support'];
    const ar = ['Flutter','Dart','Figma','BLoC / Cubit','Clean Architecture','REST APIs','CI/CD','تصميم UI/UX','أنظمة التصميم','صناعة المحتوى','الدعم التقني'];
    const row = (lang === 'ar' ? ar : en).map(w => '<span>' + w + '</span>').join('');
    mq.innerHTML = row + row;
  }
  renderMarquee(currentLang());
  langBtn.addEventListener('click', () => renderMarquee(currentLang()));
  /* pointer glow + per-card spotlight */
  const glow = document.getElementById('cursorGlow');
  const fine = window.matchMedia('(pointer:fine)').matches;
  if (fine){
    document.addEventListener('mousemove', e => {
      if (glow){ glow.style.opacity = 1; glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)'; }
      const t = e.target.closest && e.target.closest('.tile,.proj-card,.skill-group,.tl-item,.info-card,.cert-item,.stat');
      if (t){ const r = t.getBoundingClientRect(); t.classList.add('spot'); t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px'); }
    });
  }
})();


/* fit the full name on ONE line, scaling with the screen */
(function(){
  const h = document.querySelector('h1.name'); if (!h) return;
  function fit(){
    const avail = h.parentElement.clientWidth - 56;   // container padding
    h.style.fontSize = '100px';
    h.style.display = 'inline-block';
    const w = h.getBoundingClientRect().width || 1;
    h.style.display = '';
    const max = currentLang() === 'ar' ? 150 : 140;
    h.style.fontSize = Math.max(22, Math.min(max, 100 * avail / w * 0.995)) + 'px';
  }
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  new MutationObserver(() => requestAnimationFrame(fit)).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  fit();
})();
