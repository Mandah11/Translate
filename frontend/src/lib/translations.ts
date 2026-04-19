export type Language = "en" | "mn";

export const translations = {
  en: {
    nav: {
      features: "Workflow",
      howItWorks: "Pipeline",
      developers: "Automation",
      pricing: "Plans",
      adminDesk: "Admin desk",
      openWorkspace: "Open workspace",
      languageLabel: "Language",
    },
    hero: {
      tagline: "AI translation with human review",
      headingLine1: "Ship translated",
      headingLine2: "files",
      words: ["faster", "cleaner", "safer", "together"],
      description:
        "Upload source files, generate AI drafts in minutes, request editor review, and keep every delivery version in one workspace.",
      openUserWorkspace: "Start a translation",
      openAdminDesk: "Open review desk",
      stats: [
        { value: "<10 min", label: "first draft turnaround", company: "Finance teams" },
        { value: "2 versions", label: "AI + reviewed output", company: "Legal ops" },
        { value: "1 workspace", label: "history, files, notes", company: "Operations" },
        { value: "24/7", label: "shared handoff visibility", company: "Admin teams" },
      ],
    },
    cta: {
      heading: "Translate, review, and deliver from one place.",
      description:
        "Move from upload to reviewed download without losing file context, notes, or version history.",
      startTranslating: "Open user workspace",
      reviewAsAdmin: "Open admin desk",
      footerNote: "Demo credentials are included in the dashboard screens.",
    },
    featuresSection: {
      label: "Workflow",
      headingLine1: "Built for real translation ops.",
      headingLine2: "Not just a pretty upload form.",
      items: [
        {
          number: "01",
          title: "File-first intake",
          description:
            "Upload PDF, DOCX, XLSX, PPTX, TXT, CSV, and subtitle files while keeping source language, target language, and instructions together.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "AI draft generation",
          description:
            "Generate the first pass instantly so teams can preview translated text, compare versions, and move faster on urgent work.",
          visual: "ai",
        },
        {
          number: "03",
          title: "Human review handoff",
          description:
            "Users can request review with one click and admins get a focused queue with the file, notes, and current status.",
          visual: "collab",
        },
        {
          number: "04",
          title: "Downloadable outputs",
          description:
            "Keep AI and reviewed files as separate downloads so the final delivery is traceable and easy to audit.",
          visual: "security",
        },
      ],
    },
    howItWorksSection: {
      label: "Pipeline",
      headingLine1: "Upload once.",
      headingLine2: "Deliver with confidence.",
      steps: [
        {
          number: "I",
          title: "Capture the job",
          description:
            "Store the file, source and target languages, translation notes, and raw source text in one translation record.",
        },
        {
          number: "II",
          title: "Generate the AI draft",
          description:
            "Run the translation model, attach the draft output to the job, and keep it visible to both the user and admin.",
        },
        {
          number: "III",
          title: "Review and release",
          description:
            "Admins revise the draft, save a reviewed file, and send the final version back without losing the AI reference copy.",
        },
      ],
      statusReady: "Workflow live",
      codeFile: "translation-workflow.ts",
    },
    infrastructureSection: {
      label: "Operations",
      headingLine1: "Everything the team needs,",
      headingLine2: "visible in one place.",
      description:
        "The workspace keeps upload details, translation status, notes, file links, and review ownership aligned so handoffs stay clean.",
      stats: [
        { value: "1", label: "shared job record" },
        { value: "2", label: "delivery versions" },
        { value: "100MB", label: "file size limit" },
      ],
      networkLabel: "Job status board",
      allOperational: "All workflows available",
    },
    metricsSection: {
      label: "Live metrics",
      headingLine1: "Translation work",
      headingLine2: "you can track.",
      live: "Live",
      metrics: [
        { value: 128, suffix: "", label: "Jobs processed this week" },
        { value: 94, suffix: "%", label: "AI drafts approved after review" },
        { value: 18, suffix: " min", label: "Average review turnaround" },
        { value: 6, suffix: "", label: "Supported delivery formats" },
      ],
    },
    integrationsSection: {
      label: "File types",
      headingLine1: "Works with the documents",
      headingLine2: "teams already send.",
      description:
        "From reports and contracts to subtitle files and spreadsheets, the intake flow is designed for the messy files real teams use.",
      integrations: [
        { name: "PDF", category: "Reports" },
        { name: "DOCX", category: "Policies" },
        { name: "XLSX", category: "String tables" },
        { name: "PPTX", category: "Slides" },
        { name: "TXT", category: "Raw copy" },
        { name: "CSV", category: "Catalog data" },
        { name: "SRT", category: "Subtitles" },
        { name: "SVG", category: "Labeled assets" },
        { name: "Mongolian", category: "Target language" },
        { name: "English", category: "Source language" },
        { name: "Korean", category: "Source language" },
        { name: "Japanese", category: "Source language" },
      ],
    },
    securitySection: {
      label: "Controls",
      headingLine1: "Version clarity",
      headingLine2: "is non-negotiable.",
      description:
        "Every job keeps a clear separation between uploaded source files, AI drafts, and reviewed outputs so teams know exactly what was delivered.",
      certifications: ["Per-job history", "Role-based views", "Separate outputs", "Audit-friendly notes"],
      features: [
        {
          title: "Stored original file",
          description: "The source document remains attached to the job for future checks and re-delivery.",
        },
        {
          title: "AI draft visibility",
          description: "Users and admins can inspect the first-pass output before deciding whether review is needed.",
        },
        {
          title: "Review ownership",
          description: "Admin actions are attached to the reviewer so handoffs stay accountable.",
        },
        {
          title: "Reviewed output delivery",
          description: "Final edited files are saved separately instead of overwriting the AI version.",
        },
      ],
    },
    developersSection: {
      label: "Automation",
      headingLine1: "Simple API.",
      headingLine2: "Practical workflow.",
      description:
        "The backend exposes straightforward endpoints for auth, upload, translation, queueing, and review so you can extend the platform without rebuilding the basics.",
      features: [
        { title: "Typed requests", description: "Frontend helpers keep auth headers, job payloads, and file URLs consistent." },
        { title: "Queue aware", description: "Review requests move jobs into the admin queue with a single state change." },
        { title: "Download ready", description: "Generated AI and reviewed outputs are exposed as direct asset URLs." },
        { title: "Incremental", description: "You can plug in richer extraction later without changing the dashboard flow." },
      ],
      codeTabs: [
        {
          label: "Upload",
          code: `await uploadJob({\n  userId,\n  file,\n  sourceLanguage: "English",\n  targetLanguage: "Mongolian",\n  sourceText,\n  translationNote,\n});`,
        },
        {
          label: "Translate",
          code: `await translateJob({\n  userId,\n  jobId,\n  addWatermark: true,\n});`,
        },
        {
          label: "Review",
          code: `await submitReview({\n  userId: adminId,\n  jobId,\n  adminNote,\n  reviewedText,\n});`,
        },
      ],
      readDocs: "Review the API flow",
      viewGitHub: "Inspect implementation",
    },
    pricingSection: {
      label: "Plans",
      headingLine1: "Choose the workflow",
      headingHighlight: "that fits your team.",
      description:
        "Start with AI-only delivery or add a human review lane for teams that need an editor in the loop.",
      monthly: "Monthly",
      annual: "Annual",
      saveLabel: "Save 20%",
      plans: [
        {
          name: "Starter",
          description: "Fast AI drafts for small internal jobs.",
          popular: false,
          price: { monthly: 29, annual: 23 },
          features: ["Single user workspace", "AI draft downloads", "Basic file history", "Email support"],
          cta: "Start with Starter",
        },
        {
          name: "Team",
          description: "Shared review flow for active translation teams.",
          popular: true,
          price: { monthly: 79, annual: 63 },
          features: ["User + admin dashboards", "Human review request queue", "AI and reviewed outputs", "Priority turnaround"],
          cta: "Choose Team",
        },
        {
          name: "Enterprise",
          description: "Custom process and access controls for larger organizations.",
          popular: false,
          price: { monthly: null, annual: null },
          features: ["Custom roles", "Workflow extensions", "Dedicated support", "Deployment guidance"],
          cta: "Talk to sales",
        },
      ],
      bottomNote: "Need custom extraction, OCR, or glossaries?",
      compareFeatures: "Let’s scope it together.",
    },
    footer: {
      brandTagline:
        "Optimus Translate keeps source files, AI drafts, and human-reviewed deliveries aligned from intake to handoff.",
      social: [
        { name: "Email", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Docs", href: "#" },
      ],
      sectionTitles: {
        product: "Product",
        developers: "Workflow",
        company: "Company",
        legal: "Legal",
      },
      product: [
        { name: "User workspace", href: "/user" },
        { name: "Admin desk", href: "/admin" },
        { name: "Pricing", href: "#pricing" },
      ],
      developers: [
        { name: "Upload API", href: "#developers" },
        { name: "Review flow", href: "#how-it-works" },
        { name: "Delivery history", href: "#features" },
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Roadmap", href: "#", badge: "Live" },
        { name: "Support", href: "#" },
      ],
      legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
      ],
      copyRight: "© 2026 Optimus Translate. Built for AI + human translation delivery.",
      systemStatus: "Workflow online",
    },
  },
  mn: {
    nav: {
      features: "Урсгал",
      howItWorks: "Пайплайн",
      developers: "Автоматжуулалт",
      pricing: "Багц",
      adminDesk: "Админ самбар",
      openWorkspace: "Ажлын хэсэг",
      languageLabel: "Хэл",
    },
    hero: {
      tagline: "AI орчуулга, хүний хяналттай",
      headingLine1: "Орчуулсан",
      headingLine2: "файлаа",
      words: ["хурдан", "цэвэр", "найдвартай", "хамтдаа"],
      description:
        "Файлаа оруулаад AI эхний хувилбар гаргаж, шаардлагатай үед редакторын хяналт авч, бүх хувилбараа нэг workspace-д хадгална.",
      openUserWorkspace: "Орчуулга эхлүүлэх",
      openAdminDesk: "Хяналтын самбар нээх",
      stats: [
        { value: "<10 мин", label: "эхний draft", company: "Санхүүгийн баг" },
        { value: "2 хувилбар", label: "AI + reviewed output", company: "Хууль эрх зүй" },
        { value: "1 workspace", label: "түүх, файл, тэмдэглэл", company: "Операц" },
        { value: "24/7", label: "handoff харагдац", company: "Админ баг" },
      ],
    },
    cta: {
      heading: "Орчуулга, хяналт, хүргэлтээ нэг дороос удирд.",
      description:
        "Файл upload-аас эхлээд reviewed download хүртэлх бүх алхмыг file context болон notes-тай нь хадгална.",
      startTranslating: "User workspace нээх",
      reviewAsAdmin: "Admin desk нээх",
      footerNote: "Dashboard дээр demo нэвтрэх мэдээлэл харагдана.",
    },
    featuresSection: {
      label: "Урсгал",
      headingLine1: "Жинхэнэ орчуулгын ажилд зориулсан.",
      headingLine2: "Зүгээр нэг upload form биш.",
      items: [
        {
          number: "01",
          title: "Файл төвтэй intake",
          description:
            "PDF, DOCX, XLSX, PPTX, TXT, CSV, subtitle файлтай хамт source/target хэл болон зааврыг нэг job дээр хадгална.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "AI эхний хувилбар",
          description:
            "Эхний орчуулгыг хурдан гаргаж preview, version comparison, яаралтай ажлын handoff-ыг түргэсгэнэ.",
          visual: "ai",
        },
        {
          number: "03",
          title: "Хүний review handoff",
          description:
            "Хэрэглэгч review хүсэхэд admin queue дээр файл, note, статус нь шууд харагдана.",
          visual: "collab",
        },
        {
          number: "04",
          title: "Тусдаа download output",
          description:
            "AI болон reviewed файлыг тусдаа хадгалснаар хүргэлт илүү ойлгомжтой, audit хийхэд амар болно.",
          visual: "security",
        },
      ],
    },
    howItWorksSection: {
      label: "Пайплайн",
      headingLine1: "Нэг удаа upload хийнэ.",
      headingLine2: "Итгэлтэйгээр хүргэнэ.",
      steps: [
        {
          number: "I",
          title: "Job үүсгэнэ",
          description:
            "Файл, хэлний чиглэл, note, source text-ийг нэг translation record дээр хадгална.",
        },
        {
          number: "II",
          title: "AI draft үүсгэнэ",
          description:
            "Translation model ажиллуулж, гарсан draft-ыг job дээр хавсарган user болон admin-д хоёуланд нь харуулна.",
        },
        {
          number: "III",
          title: "Review хийж гаргана",
          description:
            "Admin draft-ыг засаж reviewed file үүсгээд AI reference-г хадгалсан хэвээр хэрэглэгч рүү буцаана.",
        },
      ],
      statusReady: "Workflow ажиллаж байна",
      codeFile: "translation-workflow.ts",
    },
    infrastructureSection: {
      label: "Операц",
      headingLine1: "Багт хэрэгтэй бүх зүйл,",
      headingLine2: "нэг дэлгэц дээр.",
      description:
        "Upload detail, translation status, note, file link, review owner бүгд нэг дор харагдсанаар handoff цэгцтэй үлдэнэ.",
      stats: [
        { value: "1", label: "shared job record" },
        { value: "2", label: "delivery version" },
        { value: "100MB", label: "файлын дээд хэмжээ" },
      ],
      networkLabel: "Job статусын самбар",
      allOperational: "Бүх workflow нээлттэй",
    },
    metricsSection: {
      label: "Амьд үзүүлэлт",
      headingLine1: "Орчуулгын ажлаа",
      headingLine2: "тоон дээр хар.",
      live: "Амьд",
      metrics: [
        { value: 128, suffix: "", label: "Энэ долоо хоногийн job" },
        { value: 94, suffix: "%", label: "Review дараах зөвшөөрөл" },
        { value: 18, suffix: " мин", label: "Дундаж review хугацаа" },
        { value: 6, suffix: "", label: "Дэмжигдэх формат" },
      ],
    },
    integrationsSection: {
      label: "Файлын төрөл",
      headingLine1: "Багуудын өдөр тутам",
      headingLine2: "хүлээж авдаг файлуудтай ажиллана.",
      description:
        "Тайлан, гэрээ, subtitle, spreadsheet гээд бодит ажил дээр ирдэг файлуудыг intake урсгалдаа багтаасан.",
      integrations: [
        { name: "PDF", category: "Тайлан" },
        { name: "DOCX", category: "Баримт" },
        { name: "XLSX", category: "String table" },
        { name: "PPTX", category: "Слайд" },
        { name: "TXT", category: "Текст" },
        { name: "CSV", category: "Дата" },
        { name: "SRT", category: "Subtitle" },
        { name: "SVG", category: "Шошготой asset" },
        { name: "Монгол", category: "Зорилтот хэл" },
        { name: "Англи", category: "Эх хэл" },
        { name: "Солонгос", category: "Эх хэл" },
        { name: "Япон", category: "Эх хэл" },
      ],
    },
    securitySection: {
      label: "Хяналт",
      headingLine1: "Хувилбарын ялгаа",
      headingLine2: "маш тодорхой байх ёстой.",
      description:
        "Upload source, AI draft, reviewed output гурвыг тусад нь хадгалснаар баг яг юу хүргэснээ ойлгомжтой харна.",
      certifications: ["Job түүх", "Role-based view", "Тусдаа output", "Audit note"],
      features: [
        {
          title: "Эх файл хадгална",
          description: "Source document job дээрээ үлдэж, дараагийн шалгалт болон дахин хүргэлтэд бэлэн байна.",
        },
        {
          title: "AI draft харагдана",
          description: "Review хэрэгтэй эсэхийг шийдэхийн өмнө user, admin аль аль нь эхний хувилбарыг үзнэ.",
        },
        {
          title: "Review owner тэмдэглэнэ",
          description: "Admin үйлдэл reviewer-тэйгээ холбогдож, handoff илүү хариуцлагатай болно.",
        },
        {
          title: "Reviewed output тусдаа",
          description: "Эцсийн edited file нь AI хувилбарыг дарж устгахгүйгээр тусад нь хадгалагдана.",
        },
      ],
    },
    developersSection: {
      label: "Автоматжуулалт",
      headingLine1: "Энгийн API.",
      headingLine2: "Ашигтай workflow.",
      description:
        "Backend нь auth, upload, translation, queue, review endpoint-уудтай тул үндсэн урсгалыг дахин шинээр босгох шаардлагагүй.",
      features: [
        { title: "Typed request", description: "Frontend helper-ууд auth header, job payload, file URL-ийг нэг мөр болгоно." },
        { title: "Queue-aware", description: "Review request нь job-ийн state-г сольж admin queue руу оруулна." },
        { title: "Download-ready", description: "AI болон reviewed output хоёул direct asset URL-тай." },
        { title: "Өргөтгөхөд амар", description: "Дараа нь OCR эсвэл илүү баяжуулсан extraction залгахад dashboard flow эвдэхгүй." },
      ],
      codeTabs: [
        {
          label: "Upload",
          code: `await uploadJob({\n  userId,\n  file,\n  sourceLanguage: "English",\n  targetLanguage: "Mongolian",\n  sourceText,\n  translationNote,\n});`,
        },
        {
          label: "Translate",
          code: `await translateJob({\n  userId,\n  jobId,\n  addWatermark: true,\n});`,
        },
        {
          label: "Review",
          code: `await submitReview({\n  userId: adminId,\n  jobId,\n  adminNote,\n  reviewedText,\n});`,
        },
      ],
      readDocs: "API урсгал харах",
      viewGitHub: "Implementation үзэх",
    },
    pricingSection: {
      label: "Багц",
      headingLine1: "Танай багт тохирох",
      headingHighlight: "workflow-г сонго.",
      description:
        "AI-only delivery-оор эхлээд, шаардлагатай үед human review шугам нэмж болно.",
      monthly: "Сар",
      annual: "Жил",
      saveLabel: "20% хэмнэнэ",
      plans: [
        {
          name: "Starter",
          description: "Жижиг дотоод ажлын AI draft.",
          popular: false,
          price: { monthly: 29, annual: 23 },
          features: ["Нэг хэрэглэгчийн workspace", "AI draft download", "Энгийн file history", "Email support"],
          cta: "Starter эхлүүлэх",
        },
        {
          name: "Team",
          description: "Идэвхтэй орчуулгын багт зориулсан shared review flow.",
          popular: true,
          price: { monthly: 79, annual: 63 },
          features: ["User + admin dashboard", "Human review queue", "AI болон reviewed output", "Priority turnaround"],
          cta: "Team сонгох",
        },
        {
          name: "Enterprise",
          description: "Том байгууллагад зориулсан custom процесс.",
          popular: false,
          price: { monthly: null, annual: null },
          features: ["Custom role", "Workflow extension", "Dedicated support", "Deployment guidance"],
          cta: "Борлуулалттай холбогдох",
        },
      ],
      bottomNote: "OCR, glossary, эсвэл custom extraction хэрэгтэй юу?",
      compareFeatures: "Хамтдаа scope гаргая.",
    },
    footer: {
      brandTagline:
        "Optimus Translate нь эх файл, AI draft, human-reviewed delivery-г intake-ээс handoff хүртэл нэг мөр удирдана.",
      social: [
        { name: "Email", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Docs", href: "#" },
      ],
      sectionTitles: {
        product: "Бүтээгдэхүүн",
        developers: "Workflow",
        company: "Компани",
        legal: "Эрх зүй",
      },
      product: [
        { name: "User workspace", href: "/user" },
        { name: "Admin desk", href: "/admin" },
        { name: "Үнэ", href: "#pricing" },
      ],
      developers: [
        { name: "Upload API", href: "#developers" },
        { name: "Review flow", href: "#how-it-works" },
        { name: "Delivery history", href: "#features" },
      ],
      company: [
        { name: "Тухай", href: "#" },
        { name: "Roadmap", href: "#", badge: "Live" },
        { name: "Support", href: "#" },
      ],
      legal: [
        { name: "Нууцлал", href: "#" },
        { name: "Нөхцөл", href: "#" },
      ],
      copyRight: "© 2026 Optimus Translate. AI + human translation delivery-д зориулсан платформ.",
      systemStatus: "Workflow онлайн",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
