export type Language = "en" | "mn";

export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      developers: "Developers",
      pricing: "Pricing",
      adminDesk: "Admin desk",
      openWorkspace: "Open workspace",
      languageToggle: "MN",
      languageLabel: "Language",
    },
    hero: {
      tagline: "The platform for modern teams",
      headingLine1: "The platform",
      headingLine2: "to",
      words: ["create", "build", "scale", "ship"],
      description:
        "Your toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best experiences.",
      openUserWorkspace: "Open user workspace",
      openAdminDesk: "Open admin desk",
      stats: [
        { value: "20 days", label: "saved on builds", company: "NETFLIX" },
        { value: "98%", label: "faster deployment", company: "STRIPE" },
        { value: "300%", label: "throughput increase", company: "LINEAR" },
        { value: "6x", label: "faster to ship", company: "NOTION" },
      ],
    },
    cta: {
      heading: "Ready to build something great?",
      description:
        "Join thousands of teams shipping faster with Optimus. Start free, scale infinitely.",
      startTranslating: "Start translating",
      reviewAsAdmin: "Review as admin",
      footerNote: "No credit card required",
    },
    features: [
      {
        number: "01",
        title: "Instant Deployment",
        description:
          "Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.",
        visual: "deploy",
      },
      {
        number: "02",
        title: "AI-Native Workflows",
        description:
          "Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.",
        visual: "ai",
      },
      {
        number: "03",
        title: "Real-time Collaboration",
        description:
          "Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.",
        visual: "collab",
      },
      {
        number: "04",
        title: "Enterprise Security",
        description:
          "Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.",
        visual: "security",
      },
    ],
    featuresSection: {
      label: "Capabilities",
      headingLine1: "Everything you need.",
      headingLine2: "Nothing you don't.",
      items: [
        {
          number: "01",
          title: "Instant Deployment",
          description:
            "Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "AI-Native Workflows",
          description:
            "Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.",
          visual: "ai",
        },
        {
          number: "03",
          title: "Real-time Collaboration",
          description:
            "Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.",
          visual: "collab",
        },
        {
          number: "04",
          title: "Enterprise Security",
          description:
            "Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.",
          visual: "security",
        },
      ],
    },
    howItWorksSection: {
      label: "Process",
      headingLine1: "Three steps.",
      headingLine2: "Infinite possibilities.",
      steps: [
        {
          number: "I",
          title: "Connect your tools",
          description:
            "Integrate with your existing stack in minutes. We support 200+ data sources out of the box.",
        },
        {
          number: "II",
          title: "Build your workflow",
          description:
            "Design powerful automations with our visual builder or write code directly.",
        },
        {
          number: "III",
          title: "Ship to production",
          description:
            "Deploy globally with zero configuration. Your app goes live in under 30 seconds.",
        },
      ],
      statusReady: "Ready",
      codeFile: "workflow.ts",
    },
    infrastructureSection: {
      label: "Infrastructure",
      headingLine1: "Global by",
      headingLine2: "default.",
      description:
        "Deploy once, run everywhere. Our edge network spans 17 data centers across 6 continents, delivering sub-50ms latency to 99% of the world.",
      stats: [
        { value: "17", label: "Data centers" },
        { value: "99.99%", label: "Uptime SLA" },
        { value: "<50ms", label: "Global latency" },
      ],
      networkLabel: "Edge Network",
      allOperational: "All operational",
    },
    metricsSection: {
      label: "Live metrics",
      headingLine1: "Performance you",
      headingLine2: "can measure.",
      live: "Live",
      metrics: [
        { value: 2847392, suffix: "", label: "API requests today" },
        { value: 99, suffix: ".99%", label: "Uptime this quarter" },
        { value: 23, suffix: "ms", label: "Average response time" },
        { value: 184, suffix: "", label: "Countries served" },
      ],
    },
    integrationsSection: {
      label: "Integrations",
      headingLine1: "Works with everything",
      headingLine2: "you already use.",
      description: "200+ pre-built integrations. Connect your entire stack in minutes.",
      integrations: [
        { name: "GitHub", category: "Version Control" },
        { name: "Slack", category: "Communication" },
        { name: "Stripe", category: "Payments" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Redis", category: "Cache" },
        { name: "AWS", category: "Cloud" },
        { name: "MongoDB", category: "Database" },
        { name: "Vercel", category: "Hosting" },
        { name: "Figma", category: "Design" },
        { name: "Linear", category: "Project Management" },
        { name: "Notion", category: "Documentation" },
        { name: "OpenAI", category: "AI/ML" },
      ],
    },
    securitySection: {
      label: "Security",
      headingLine1: "Trust is",
      headingLine2: "non-negotiable.",
      description:
        "Enterprise-grade security isn't optional. It's built into every layer of our platform, from infrastructure to application.",
      certifications: ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "CCPA"],
      features: [
        {
          title: "SOC 2 Type II",
          description:
            "Independently audited security controls with continuous monitoring.",
        },
        {
          title: "End-to-end encryption",
          description: "AES-256 encryption for data at rest and TLS 1.3 in transit.",
        },
        {
          title: "Zero-trust architecture",
          description:
            "Every request is authenticated and authorized. No exceptions.",
        },
        {
          title: "GDPR & HIPAA",
          description:
            "Full compliance with data protection and healthcare regulations.",
        },
      ],
    },
    developersSection: {
      label: "For developers",
      headingLine1: "Built by devs.",
      headingLine2: "For devs.",
      description:
        "A thoughtfully designed SDK that gets out of your way. Ship faster with intuitive APIs and exceptional documentation.",
      features: [
        {
          title: "TypeScript native",
          description: "Full type safety with auto-generated types.",
        },
        {
          title: "Zero config",
          description: "Sensible defaults that just work.",
        },
        {
          title: "Edge-ready",
          description: "Runs anywhere: Node, Deno, Bun, browsers.",
        },
        {
          title: "12KB gzipped",
          description: "Lightweight with zero dependencies.",
        },
      ],
      codeTabs: [
        {
          label: "Install",
          code: `npm install @optimus/sdk\n\n# or\nyarn add @optimus/sdk\npnpm add @optimus/sdk`,
        },
        {
          label: "Initialize",
          code: `import { Optimus } from '@optimus/sdk'\n\nconst optimus = new Optimus({\n  apiKey: process.env.OPTIMUS_KEY\n})`,
        },
        {
          label: "Deploy",
          code: `const app = await optimus.deploy({\n  name: 'my-app',\n  region: 'auto',\n  scaling: {\n    min: 1,\n    max: 100\n  }\n})\n\nconsole.log('Live at:', app.url)`,
        },
      ],
      readDocs: "Read the docs",
      viewGitHub: "View on GitHub",
    },
    pricingSection: {
      label: "Pricing",
      headingLine1: "Simple, transparent",
      headingHighlight: "pricing",
      description: "Start free and scale as you grow. No hidden fees, no surprises.",
      monthly: "Monthly",
      annual: "Annual",
      saveLabel: "Save 17%",
      plans: [
        {
          name: "Starter",
          description: "For individuals and small projects",
          price: { monthly: 0, annual: 0 },
          features: [
            "Up to 3 projects",
            "1GB storage",
            "Community support",
            "Basic analytics",
            "SSL certificates",
          ],
          cta: "Start free",
          popular: false,
        },
        {
          name: "Pro",
          description: "For growing teams and businesses",
          price: { monthly: 29, annual: 24 },
          features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Advanced analytics",
            "Custom domains",
            "Team collaboration",
            "API access",
          ],
          cta: "Start trial",
          popular: true,
        },
        {
          name: "Enterprise",
          description: "For large-scale operations",
          price: { monthly: null, annual: null },
          features: [
            "Everything in Pro",
            "Unlimited storage",
            "24/7 dedicated support",
            "Custom integrations",
            "SLA guarantee",
            "On-premise option",
            "Security audit",
            "Custom contracts",
          ],
          cta: "Contact sales",
          popular: false,
        },
      ],
      compareFeatures: "Compare all features",
      bottomNote:
        "All plans include automatic updates, HTTPS, and DDoS protection.",
    },
    testimonialsSection: {
      label: "What people say",
      keyResultLabel: "Key Result",
      trustedBy: "Trusted by forward-thinking teams",
      testimonials: [
        {
          quote:
            "Optimus transformed our deployment process. What used to take hours now happens in seconds.",
          author: "Sarah Chen",
          role: "CTO",
          company: "Meridian Labs",
          metric: "10x faster deploys",
        },
        {
          quote:
            "The developer experience is outstanding. Our team ships more with less friction.",
          author: "Marcus Webb",
          role: "Engineering Lead",
          company: "Flux Systems",
          metric: "40% more shipped",
        },
        {
          quote:
            "We finally have infrastructure that scales with confidence. 99.99% uptime since launch.",
          author: "Elena Rodriguez",
          role: "VP Engineering",
          company: "Beacon AI",
          metric: "99.99% uptime",
        },
        {
          quote:
            "Integrations were seamless. We connected our full stack in under a day.",
          author: "James Liu",
          role: "Founder",
          company: "Prism Analytics",
          metric: "50+ integrations used",
        },
      ],
      featuredCompanies: [
        "Meridian Labs",
        "Flux Systems",
        "Beacon AI",
        "Prism Analytics",
        "Nova Tech",
        "Quantum Corp",
        "Atlas Digital",
        "Vertex Labs",
      ],
    },
    footer: {
      sectionTitles: {
        product: "Product",
        developers: "Developers",
        company: "Company",
        legal: "Legal",
      },
      brandTagline:
        "The platform for teams who ship. Build, deploy, and scale with unprecedented velocity.",
      product: [
        { name: "Features", href: "#features" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
      ],
      developers: [
        { name: "Documentation", href: "#developers" },
        { name: "API Reference", href: "#" },
        { name: "SDK", href: "#developers" },
        { name: "Status", href: "#" },
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#", badge: "Hiring" },
        { name: "Contact", href: "#" },
      ],
      legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#security" },
      ],
      social: [
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
      copyRight: "2025 Optimus. All rights reserved.",
      systemStatus: "All systems operational",
    },
  },
  mn: {
    nav: {
      features: "Функцууд",
      howItWorks: "Яаж ажилладаг",
      developers: "Хөгжүүлэгчид",
      pricing: "Үнийн санал",
      adminDesk: "Админ самбар",
      openWorkspace: "Ажлын талбар нээх",
      languageToggle: "EN",
      languageLabel: "Хэл",
    },
    hero: {
      tagline: "Орчин үеийн багуудад зориулсан платформ",
      headingLine1: "Платформ",
      headingLine2: "харин",
      words: ["бүтээх", "хөгжүүлэх", "өргөжүүлэх", "илгээх"],
      description:
        "Тохиргоо зогсоо, шинэлэг шийдэл дээр төвлөр. Аюулгүй барьж, байршуулж, хамгийн сайн хэрэглэгчийн туршлагыг өргөжүүл.",
      openUserWorkspace: "Хэрэглэгчийн талбар нээх",
      openAdminDesk: "Админ самбар нээх",
      stats: [
        { value: "20 өдөр", label: "барилгын хугацаа хэмнэсэн", company: "NETFLIX" },
        { value: "98%", label: "хурдан байршуулалт", company: "STRIPE" },
        { value: "300%", label: "оролт нэмэгдсэн", company: "LINEAR" },
        { value: "6x", label: "илүү хурдан илгээх", company: "NOTION" },
      ],
    },
    cta: {
      heading: "Сайн зүйл бүтээхэд бэлэн үү?",
      description:
        "Optimus-оор хурдан илгээж буй олон багт нэгд. Үнэгүй эхлээд хязгааргүйгээр өргөжүүл.",
      startTranslating: "Орчуулж эхлэх",
      reviewAsAdmin: "Админаар шалгах",
      footerNote: "Кредит карт шаардлагагүй",
    },
    features: [
      {
        number: "01",
        title: "Даралтаар шууд байршуулалт",
        description:
          "Програмыг хэдхэн секундын дотор үйлдвэрлэлд гарга. Манай edge сүлжээ дэлхий даяар хурдан ачаалдаг.",
        visual: "deploy",
      },
      {
        number: "02",
        title: "AI-т зориулсан ажлын урсгал",
        description:
          "Ухаалаг програм бүтээ. Сургалт, дүн шинжилгээ, бүх зүйл автомат өргөжинө.",
        visual: "ai",
      },
      {
        number: "03",
        title: "Бодит цагийн хамтын ажиллагаа",
        description:
          "Нэг дор хамтран ажилла. Шуурхай санал, амьд урьдчилсан үзүүлэлт, ойлгомжтой хувилбарын хяналт.",
        visual: "collab",
      },
      {
        number: "04",
        title: "Аж ахуйн нөгөө талын аюулгүй байдал",
        description:
          "Банкны зэрэглэлийн шифрлэл, SOC 2 нийцэмж, нарийвчилсан нэвтрэх хяналт. Таны өгөгдөл таных хэвээр.",
        visual: "security",
      },
    ],
    featuresSection: {
      label: "Чадварууд",
      headingLine1: "Танд хэрэгтэй бүх зүйл.",
      headingLine2: "Хэрэггүй зүйл үгүй.",
      items: [
        {
          number: "01",
          title: "Даралтаар шууд байршуулалт",
          description:
            "Програмыг хэдхэн секундын дотор үйлдвэрлэлд гарга. Манай edge сүлжээ дэлхий даяар хурдан ачаалдаг.",
          visual: "deploy",
        },
        {
          number: "02",
          title: "AI-т зориулсан ажлын урсгал",
          description:
            "Ухаалаг програм бүтээ. Сургалт, дүн шинжилгээ, бүх зүйл автомат өргөжинө.",
          visual: "ai",
        },
        {
          number: "03",
          title: "Бодит цагийн хамтын ажиллагаа",
          description:
            "Нэг дор хамтран ажилла. Шуурхай санал, амьд урьдчилсан үзүүлэлт, ойлгомжтой хувилбарын хяналт.",
          visual: "collab",
        },
        {
          number: "04",
          title: "Аж ахуйн нөгөө талын аюулгүй байдал",
          description:
            "Банкны зэрэглэлийн шифрлэл, SOC 2 нийцэмж, нарийвчилсан нэвтрэх хяналт. Таны өгөгдөл таных хэвээр.",
          visual: "security",
        },
      ],
    },
    howItWorksSection: {
      label: "Үйл явц",
      headingLine1: "Гурван алхам.",
      headingLine2: "Хязгааргүй боломж.",
      steps: [
        {
          number: "I",
          title: "Багаж хэрэгслүүдээ холбох",
          description:
            "Өөрийн стекээ хэдхэн минутын дотор холбож болно. 200+ өгөгдлийн эх үүсвэрийг дэмжинэ.",
        },
        {
          number: "II",
          title: "Ажлын урсгалаа бүтээх",
          description:
            "Визуал бүтээгчээр хүчирхэг автоматжуулалт үүсгэх эсвэл кодоо шууд бичээрэй.",
        },
        {
          number: "III",
          title: "Үйлдвэрлэл рүү илгээх",
          description:
            "Нуль тохиргоогоор дэлхий даяар байршуул. Апп тань 30 секундээс бага хугацаанд live болно.",
        },
      ],
      statusReady: "Бэлэн",
      codeFile: "workflow.ts",
    },
    infrastructureSection: {
      label: "Инфраструктур",
      headingLine1: "Глобал",
      headingLine2: "анхдагч.",
      description:
        "Нэг удаа байршуул, хаана ч ажиллуул. Манай edge сүлжээ 6 тивийн 17 дата төвийг хамардаг бөгөөд дэлхий даяар 50мс-аас бага сааталтай.",
      stats: [
        { value: "17", label: "Дата төв" },
        { value: "99.99%", label: "Үйлчилгээний SLA" },
        { value: "<50ms", label: "Дэлхийн саатал" },
      ],
      networkLabel: "Edge сүлжээ",
      allOperational: "Бүхэлдээ хэвийн ажиллаж байна",
    },
    metricsSection: {
      label: "Амьд метрик",
      headingLine1: "Үр дүнг хэмжинэ.",
      headingLine2: "Хэмжиж болно.",
      live: "Амьд",
      metrics: [
        { value: 2847392, suffix: "", label: "API хүсэлт өнөөдөр" },
        { value: 99, suffix: ".99%", label: "Энэ улиралын uptime" },
        { value: 23, suffix: "ms", label: "Дундаж хариулах хугацаа" },
        { value: 184, suffix: "", label: "Алсын улс" },
      ],
    },
    integrationsSection: {
      label: "Интеграц",
      headingLine1: "Өмнө нь ашигладаг",
      headingLine2: "бүх зүйлтэй ажиллана.",
      description:
        "200+ урьдчилан бэлтгэсэн интеграц. Бүх стекийн холбоосыг хэдхэн минутанд байгуул.",
      integrations: [
        { name: "GitHub", category: "Хувилбар хяналт" },
        { name: "Slack", category: "Харилцаа" },
        { name: "Stripe", category: "Төлбөр" },
        { name: "PostgreSQL", category: "Өгөгдлийн сан" },
        { name: "Redis", category: "Кеш" },
        { name: "AWS", category: "Үүл" },
        { name: "MongoDB", category: "Өгөгдлийн сан" },
        { name: "Vercel", category: "Хостинг" },
        { name: "Figma", category: "Дизайн" },
        { name: "Linear", category: "Төсөл удирдлага" },
        { name: "Notion", category: "Баримт бичиг" },
        { name: "OpenAI", category: "AI/ML" },
      ],
    },
    securitySection: {
      label: "Аюулгүй байдал",
      headingLine1: "Итгэл",
      headingLine2: "уулзваргүй.",
      description:
        "Аж ахуйн зэрэглэлийн аюулгүй байдал сонголт биш. Энэ нь платформынхаа давхаргад байнга суусан.",
      certifications: ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "CCPA"],
      features: [
        {
          title: "SOC 2 Type II",
          description:
            "Туршилттай, үргэлж хянагддаг аюулгүй байдлын хяналт.",
        },
        {
          title: "Эцсээс эцс хүртэл шифрлэл",
          description:
            "Өгөгдлийг AES-256, дамжуулалтыг TLS 1.3 ашиглан хамгаална.",
        },
        {
          title: "Zero-trust архитектур",
          description:
            "Төлөв бүрт шалгалт, зөвшөөрөл шаардлагатай. Ямар ч exception байхгүй.",
        },
        {
          title: "GDPR & HIPAA",
          description:
            "Өгөгдөл хамгаалах болон эрүүл мэндийн зохицуулалтын бүрэн нийцэмж.",
        },
      ],
    },
    developersSection: {
      label: "Хөгжүүлэгчдэд",
      headingLine1: "Хөгжүүлэгчид бүтээв.",
      headingLine2: "Хөгжүүлэгчдэд зориулав.",
      description:
        "Танд саад болохгүйгээр зохион бүтээгдсэн SDK. Илүү хурдан илгээхэд тохиромжтой API болон шилдэг баримт бичиг.",
      features: [
        {
          title: "TypeScript-д нийцсэн",
          description: "Автомат үүсгэгдсэн төрлийн аюулгүй байдал.",
        },
        {
          title: "Тохиргоо шаардлагагүй",
          description: "Зөв тохиргоо бүрэн автомат ажиллана.",
        },
        {
          title: "Edge-д бэлэн",
          description: "Node, Deno, Bun, хөтөч аль дээр ч ажиллана.",
        },
        {
          title: "12KB gzipped",
          description: "Хөнгөн, хамааралгүй.",
        },
      ],
      codeTabs: [
        {
          label: "Суулгах",
          code: `npm install @optimus/sdk\n\n# эсвэл\nyarn add @optimus/sdk\npnpm add @optimus/sdk`,
        },
        {
          label: "Эхлүүлэх",
          code: `import { Optimus } from '@optimus/sdk'\n\nconst optimus = new Optimus({\n  apiKey: process.env.OPTIMUS_KEY\n})`,
        },
        {
          label: "Байршуулах",
          code: `const app = await optimus.deploy({\n  name: 'my-app',\n  region: 'auto',\n  scaling: {\n    min: 1,\n    max: 100\n  }\n})\n\nconsole.log('Live at:', app.url)`,
        },
      ],
      readDocs: "Баримт бичгийг унших",
      viewGitHub: "GitHub дээр харах",
    },
    pricingSection: {
      label: "Үнийн санал",
      headingLine1: "Энгийн, ил тод",
      headingHighlight: "үнэ",
      description: "Үнэгүй эхлээд өсөх хэрээр өргөжүүл. Нууц төлбөргүй.",
      monthly: "Сар бүр",
      annual: "Жилийн",
      saveLabel: "17% хэмнэ",
      plans: [
        {
          name: "Starter",
          description: "Хувь хүн болон жижиг төслүүдэд",
          price: { monthly: 0, annual: 0 },
          features: [
            "3 хүртэл төсөл",
            "1GB хадгалах",
            "Олон нийтийн дэмжлэг",
            "Анхан шатны аналитик",
            "SSL сертификат",
          ],
          cta: "Үнэгүй эхлэх",
          popular: false,
        },
        {
          name: "Pro",
          description: "Өсөж буй баг болон бизнесүүдэд",
          price: { monthly: 29, annual: 24 },
          features: [
            "Хязгааргүй төслүүд",
            "100GB хадгалах",
            "Тэргүүлэх дэмжлэг",
            "Ахисан аналитик",
            "Тусгай домэйн",
            "Багийн хамтын ажиллагаа",
            "API хандалт",
          ],
          cta: "Туршилт эхлэх",
          popular: true,
        },
        {
          name: "Enterprise",
          description: "Том хэмжээний үйл ажиллагаанд",
          price: { monthly: null, annual: null },
          features: [
            "Pro-д агуулагдсан бүх зүйл",
            "Хязгааргүй хадгалах",
            "24/7 тусгай дэмжлэг",
            "Тусгай интеграц",
            "SLA баталгаа",
            "Дотоод системд суулгах боломж",
            "Аюулгүй байдлын аудит",
            "Тусгай гэрээ",
          ],
          cta: "Худалдааны албатай холбоо барих",
          popular: false,
        },
      ],
      compareFeatures: "Бүх функцуудыг харьцуулах",
      bottomNote:
        "Бүх төлөв өөрчлөлт автомат шинэчлэгдэж, HTTPS болон DDoS хамгаалалт агуулна.",
    },
    testimonialsSection: {
      label: "Хүмүүс юу хэлж байна",
      keyResultLabel: "Түлхүүр үр дүн",
      trustedBy: "Ирээдүйг харсан багууд итгэдэг",
      testimonials: [
        {
          quote:
            "Optimus бол манай байршуулалтын процессийг өөрчилсөн. Өмнө нь хэдэн цаг зарцуулдаг байсан зүйл одоо секундийн дотор хийгдэж байна.",
          author: "Sarah Chen",
          role: "CTO",
          company: "Meridian Labs",
          metric: "10x хурдан байршуулалт",
        },
        {
          quote:
            "Хөгжүүлэгчийн туршлага онцгой. Манай багийн бүтээмж нь өмнөхөөс огт өөр.",
          author: "Marcus Webb",
          role: "Engineering Lead",
          company: "Flux Systems",
          metric: "40% илүү функц гаргасан",
        },
        {
          quote:
            "Эцэст нь хүслээ даган өргөжиж чадах инфраструктуртай боллоо. Солисноос хойш 99.99% тасалдалгүй.",
          author: "Elena Rodriguez",
          role: "VP Engineering",
          company: "Beacon AI",
          metric: "99.99% uptime",
        },
        {
          quote:
            "Интеграццууд нь яг л амархан. Бид бүх стекээ нэг өдрийн дотор холбож чадсан.",
          author: "James Liu",
          role: "Founder",
          company: "Prism Analytics",
          metric: "50+ интеграц ашигласан",
        },
      ],
      featuredCompanies: [
        "Meridian Labs",
        "Flux Systems",
        "Beacon AI",
        "Prism Analytics",
        "Nova Tech",
        "Quantum Corp",
        "Atlas Digital",
        "Vertex Labs",
      ],
    },
    footer: {
      sectionTitles: {
        product: "Бүтээгдэхүүн",
        developers: "Хөгжүүлэгчид",
        company: "Компани",
        legal: "Хууль эрх зүй",
      },
      brandTagline:
        "Илгээдэг багуудад зориулсан платформ. Барь, байршуул, хурдасгах.",
      product: [
        { name: "Функцууд", href: "#features" },
        { name: "Яаж ажилладаг", href: "#how-it-works" },
        { name: "Үнийн санал", href: "#pricing" },
        { name: "Интеграц", href: "#integrations" },
      ],
      developers: [
        { name: "Баримт бичиг", href: "#developers" },
        { name: "API лавлах", href: "#" },
        { name: "SDK", href: "#developers" },
        { name: "Төлөв", href: "#" },
      ],
      company: [
        { name: "Бидний тухай", href: "#" },
        { name: "Блог", href: "#" },
        { name: "Ажилд авах", href: "#", badge: "Ажиллаж байна" },
        { name: "Холбоо барих", href: "#" },
      ],
      legal: [
        { name: "Нууцлал", href: "#" },
        { name: "Үйлчилгээний нөхцөл", href: "#" },
        { name: "Аюулгүй байдал", href: "#security" },
      ],
      social: [
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
      copyRight: "2025 Optimus. Бүх эрх хуулиар хамгаалагдсан.",
      systemStatus: "Систем бүхэлдээ хэвийн ажиллаж байна",
    },
  },
} as const;

export type Translations = typeof translations[Language];
