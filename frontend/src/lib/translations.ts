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
      tagline: "Translate important files into Mongolian",
      headingLine1: "From any language",
      headingLine2: "to Mongolian",
      words: ["PDF", "DOCX", "XLSX", "PPTX"],
      description:
        "We translate important materials like PDF, DOC, Excel, slide decks, and subtitle files into Mongolian. Upload the file, generate the first draft, and request human review when needed.",
      openUserWorkspace: "Translate a file",
      openAdminDesk: "Open review desk",
      stats: [
        { value: "Any language", label: "source language accepted", company: "Contracts" },
        { value: "Mongolian", label: "final target language", company: "Reports" },
        { value: "2 versions", label: "AI + reviewed output", company: "Policies" },
        { value: "Optional", label: "name stamp on draft", company: "Client copy" },
      ],
    },
    cta: {
      heading: "Turn important documents into clear Mongolian.",
      description:
        "This workflow is built for translation only: upload a file, generate the Mongolian draft, and keep AI plus reviewed versions in one place.",
      startTranslating: "Open user workspace",
      reviewAsAdmin: "Open admin desk",
      footerNote: "Optional text stamp can be added to the AI draft.",
    },
    featuresSection: {
      label: "Workflow",
      headingLine1: "Built for real translation ops.",
      headingLine2: "Not just a pretty upload form.",
      items: [
        {
          number: "01",
          title: "Important file intake",
          description:
            "Upload PDF, DOCX, XLSX, PPTX, TXT, CSV, and subtitle files that need to be translated into Mongolian.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "Any language to Mongolian",
          description:
            "The workflow is focused on one destination language, so the entire job setup, wording review, and delivery flow stay aligned around Mongolian output.",
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
          title: "Optional text stamp",
          description:
            "If needed, the AI draft can include a visible text stamp with translator name, email, date, and original file reference.",
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
      headingLine1: "Everything needed for",
      headingLine2: "document translation.",
      description:
        "The workspace keeps file details, Mongolian draft status, user notes, and reviewer ownership aligned so important materials do not get lost in handoff.",
      stats: [
        { value: "1", label: "shared job record" },
        { value: "2", label: "delivery versions" },
        { value: "100MB", label: "file size limit" },
      ],
      networkLabel: "Common file requests",
      allOperational: "Ready to translate",
      locations: [
        { city: "Annual report", region: "PDF", latency: "Financial" },
        { city: "Board memo", region: "DOCX", latency: "Internal" },
        { city: "Product strings", region: "XLSX", latency: "App UI" },
        { city: "Presentation deck", region: "PPTX", latency: "Client-facing" },
        { city: "Subtitle sheet", region: "SRT", latency: "Video" },
        { city: "Policy draft", region: "TXT", latency: "Compliance" },
      ],
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
        "From reports and contracts to subtitle files and spreadsheets, the intake flow is built for documents teams urgently need in Mongolian.",
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
        "Every job keeps a clear separation between uploaded source files, Mongolian AI drafts, optional text stamps, and reviewed outputs so teams know exactly what was delivered.",
      certifications: ["Per-job history", "Role-based views", "Separate outputs", "Optional text stamp"],
      features: [
        {
          title: "Stored original file",
          description: "The source document remains attached to the job for future checks and re-delivery.",
        },
        {
          title: "AI draft visibility",
          description: "Users and admins can inspect the Mongolian first-pass output before deciding whether review is needed.",
        },
        {
          title: "Review ownership",
          description: "Admin actions are attached to the reviewer so handoffs stay accountable.",
        },
        {
          title: "Text stamp option",
          description: "For draft-sharing needs, the AI version can include a text stamp with translator identity and timestamp.",
        },
      ],
    },
    developersSection: {
      label: "Workflow",
      headingLine1: "Simple API.",
      headingLine2: "Focused on Mongolian output.",
      description:
        "The backend exposes straightforward endpoints for auth, upload, translation, queueing, and review so teams can move important files from any language into Mongolian without rebuilding the basics.",
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
      copyLabel: "Copy code",
    },
    pricingSection: {
      label: "Use cases",
      headingLine1: "Choose the setup",
      headingHighlight: "that fits your documents.",
      description:
        "Start with AI-only Mongolian translation or add a human review lane for documents that need extra care.",
      monthly: "Monthly",
      annual: "Annual",
      saveLabel: "Save 20%",
      popularLabel: "Most popular",
      monthlySuffix: "/month",
      customLabel: "Custom",
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
      tagline: "Чухал файлаа Монгол хэл рүү орчуулна",
      headingLine1: "Ямар ч хэлнээс",
      headingLine2: "Монгол руу",
      words: ["PDF", "DOCX", "XLSX", "PPTX"],
      description:
        "PDF, DOC, Excel, слайд, subtitle зэрэг чухал материалуудыг Монгол хэл рүү орчуулна. Файлаа оруулаад эхний draft гаргаж, шаардлагатай үед хүний хяналт авна.",
      openUserWorkspace: "Файл орчуулах",
      openAdminDesk: "Хяналтын самбар нээх",
      stats: [
        { value: "Ямар ч хэл", label: "эх хэл хамаарахгүй", company: "Гэрээ" },
        { value: "Монгол", label: "эцсийн зорилтот хэл", company: "Тайлан" },
        { value: "2 хувилбар", label: "AI + reviewed output", company: "Бодлого" },
        { value: "Сонголтоор", label: "текстэн тамга", company: "Харилцагч" },
      ],
    },
    cta: {
      heading: "Чухал баримтаа ойлгомжтой Монгол болго.",
      description:
        "Энэ workflow нь зөвхөн орчуулгад зориулсан: файлаа оруулж, Монгол draft гаргаад, AI болон reviewed хувилбараа нэг дор хадгална.",
      startTranslating: "User workspace нээх",
      reviewAsAdmin: "Admin desk нээх",
      footerNote: "Хүсвэл AI draft дээр текстэн тамга нэмж болно.",
    },
    featuresSection: {
      label: "Урсгал",
      headingLine1: "Жинхэнэ орчуулгын ажилд зориулсан.",
      headingLine2: "Зүгээр нэг upload form биш.",
      items: [
        {
          number: "01",
          title: "Чухал файлын intake",
          description:
            "PDF, DOCX, XLSX, PPTX, TXT, CSV, subtitle зэрэг файлуудыг Монгол хэл рүү орчуулах job болгон хадгална.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "Ямар ч хэлнээс Монгол",
          description:
            "Workflow бүхэлдээ нэг зорилтот хэл дээр төвлөрсөн тул job тохиргоо, нэр томьёо, хяналт бүгд Монгол output дээр төвлөрнө.",
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
          title: "Сонголттой текстэн тамга",
          description:
            "Хэрэгтэй бол AI draft дээр орчуулагчийн нэр, имэйл, огноо, эх файлын мэдээлэлтэй текстэн тамга нэмж болно.",
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
      headingLine1: "Баримт орчуулгад хэрэгтэй",
      headingLine2: "бүх зүйл нэг дор.",
      description:
        "Файлын detail, Монгол draft статус, note, file link, review owner бүгд нэг дор харагдсанаар чухал материал handoff дээр алдагдахгүй.",
      stats: [
        { value: "1", label: "shared job record" },
        { value: "2", label: "delivery version" },
        { value: "100MB", label: "файлын дээд хэмжээ" },
      ],
      networkLabel: "Түгээмэл файлын хүсэлтүүд",
      allOperational: "Орчуулахад бэлэн",
      locations: [
        { city: "Жилийн тайлан", region: "PDF", latency: "Санхүү" },
        { city: "Удирдах зөвлөлийн note", region: "DOCX", latency: "Дотоод" },
        { city: "Бүтээгдэхүүний string", region: "XLSX", latency: "App UI" },
        { city: "Танилцуулгын deck", region: "PPTX", latency: "Харилцагч" },
        { city: "Subtitle файл", region: "SRT", latency: "Видео" },
        { city: "Бодлогын draft", region: "TXT", latency: "Compliance" },
      ],
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
        "Тайлан, гэрээ, subtitle, spreadsheet гээд багуудад яаралтай Монгол хэл дээр хэрэг болдог файлуудыг intake урсгалдаа багтаасан.",
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
        "Upload source, Монгол AI draft, сонголттой текстэн тамга, reviewed output бүгд тусдаа хадгалагддаг тул баг яг юу гаргаснаа ойлгомжтой харна.",
      certifications: ["Job түүх", "Role-based view", "Тусдаа output", "Сонголттой текстэн тамга"],
      features: [
        {
          title: "Эх файл хадгална",
          description: "Source document job дээрээ үлдэж, дараагийн шалгалт болон дахин хүргэлтэд бэлэн байна.",
        },
        {
          title: "AI draft харагдана",
          description: "Review хэрэгтэй эсэхийг шийдэхийн өмнө user, admin аль аль нь Монгол draft-ыг үзнэ.",
        },
        {
          title: "Review owner тэмдэглэнэ",
          description: "Admin үйлдэл reviewer-тэйгээ холбогдож, handoff илүү хариуцлагатай болно.",
        },
        {
          title: "Текстэн тамганы сонголт",
          description: "Draft хуваалцах хэрэгцээнд AI хувилбар дээр орчуулагчийн мэдээлэлтэй текстэн тамга нэмж болно.",
        },
      ],
    },
    developersSection: {
      label: "Workflow",
      headingLine1: "Энгийн API.",
      headingLine2: "Монгол output дээр төвлөрсөн.",
      description:
        "Backend нь auth, upload, translation, queue, review endpoint-уудтай тул ямар ч хэлтэй баримтыг Монгол руу шилжүүлэх үндсэн урсгалыг дахин шинээр босгох шаардлагагүй.",
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
      copyLabel: "Код хуулах",
    },
    pricingSection: {
      label: "Хэрэглээ",
      headingLine1: "Баримтдаа тохирох",
      headingHighlight: "тохиргоог сонго.",
      description:
        "AI-only Монгол орчуулгаас эхлээд, илүү нягт хяналт хэрэгтэй баримт дээр human review нэмж болно.",
      monthly: "Сар",
      annual: "Жил",
      saveLabel: "20% хэмнэнэ",
      popularLabel: "Хамгийн түгээмэл",
      monthlySuffix: "/сар",
      customLabel: "Тохиролцоно",
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
