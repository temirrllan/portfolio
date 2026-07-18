// ============================================================================
//  CONTENT / DATA  —  EDIT THIS FILE TO PUT YOUR OWN INFORMATION
// ----------------------------------------------------------------------------
//  Everything on the site is driven from here. There are three languages:
//  en (English), ru (Russian), kk (Kazakh). Fill in each block for every
//  language. The structure must stay the same across the three languages.
// ============================================================================

export type Lang = "en" | "ru" | "kk";

export const LANGS: Lang[] = ["en", "ru", "kk"];

export interface SocialLink {
  type: "email" | "github" | "telegram" | "linkedin" | "instagram";
  href: string;
}

// Social icons in the hero (same for every language)
export const SOCIALS: SocialLink[] = [
  { type: "email", href: "mailto:raiymbektemirlan45@gmail.com" },
  { type: "github", href: "https://github.com/temirrllan" },
  { type: "telegram", href: "https://t.me/kimjjk" },
  { type: "linkedin", href: "https://www.linkedin.com/in/temirlanraiymbek/" },
  { type: "instagram", href: "https://www.instagram.com/temirrlllan/" },
];

export interface Content {
  meta: { title: string; description: string };
  nav: { now: string; projects: string; wins: string; contact: string };
  hero: {
    available: string;
    greeting: string;
    handle: string;
    logoText: string;
    subtitle: string;
    tagline: string;
  };
  about: { heading: string; paragraphs: string[] };
  inProgress: {
    heading: string;
    items: {
      status: string;
      badge?: string; // e.g. "for sale"
      title: string;
      subtitle: string;
      description: string;
      tags: string[];
      cta?: string; // e.g. "get in touch →"
    }[];
  };
  projects: {
    heading: string;
    items: { title: string; year: string; description: string; tags: string[] }[];
  };
  bots: {
    heading: string;
    items: { handle: string; description: string }[];
  };
  wins: {
    heading: string;
    items: { title: string; place: string; year: string }[];
  };
  experience: {
    heading: string;
    items: { title: string; meta: string }[];
  };
  education: {
    heading: string;
    items: { title: string; subtitle?: string; meta: string }[];
  };
  languages: {
    heading: string;
    items: { name: string; level: string }[];
  };
  stack: { heading: string; items: string[] };
  media: {
    heading: string;
    items: { title: string; year: string; description: string; image?: string }[];
  };
  contact: {
    heading: string;
    intro: string;
    items: { label: string; value: string; href: string }[];
  };
  footer: { copyright: string; madeWith: string };
}

export const CONTENT: Record<Lang, Content> = {
  // ==========================================================================
  //  ENGLISH
  // ==========================================================================
  en: {
    meta: {
      title: "Temirlan Raiymbek — Developer & AI Integrator",
      description: "Developer and ai integrator — telegram bots, ai agents, automation, websites.",
    },
    nav: { now: "now", projects: "projects", wins: "wins", contact: "contact" },
    hero: {
      available: "available for projects",
      greeting: "hi, i'm",
      handle: "temirlan",
      logoText: "temirlan",
      subtitle: "Temirlan Raiymbek",
      tagline: "ai integration, bots, automation.",
    },
    about: {
      heading: "about",
      paragraphs: [
        "developer and ai integrator. i bring ai into business: telegram bots, ai agents, process automation, websites, landing pages, telegram mini apps, and amocrm setup.",
        "astana hub resident. developer at ittalker.academy. i work with harness ai agent.",
        "freelancer. solana by decentrathon 5.0 prize winner.",
      ],
    },
    inProgress: {
      heading: "currently in progress",
      items: [
        {
          status: "in development",
          badge: "for sale",
          title: "ai sales agent",
          subtitle: "lives inside amocrm + telegram",
          description:
            "an ai agent that qualifies leads, replies to clients 24/7 and books meetings straight into the crm. plug it into your funnel and it just works.",
          tags: ["ai agents", "amocrm", "telegram", "automation"],
          cta: "get in touch",
        },
        {
          status: "in development",
          title: "ai automation studio",
          subtitle: "processes without the busywork",
          description:
            "a toolkit for wiring ai into any business process — from telegram bots and mini apps to document parsing and reports. packing the pieces i keep reusing on client projects into one product.",
          tags: ["ai", "automation", "mini apps", "no-code"],
        },
      ],
    },
    projects: {
      heading: "projects",
      items: [
        {
          title: "tgbottelecom",
          year: "2025",
          description:
            "ai assistant for kazakhtelecom field technicians. workers write work tickets in free-form text — the bot understands, extracts the data (address, problem, work done, materials) and saves it. natural-language queries over tickets, plus reminders during work hours.",
          tags: ["telegram", "ai", "python", "postgres"],
        },
        {
          title: "habits & check-ins",
          year: "2026",
          description:
            "habit-tracking startup. create a habit with goal, category (~23), weekly schedule, reminder time, bad-habit flag and day period. daily swipe check-in (done / failed / skipped). honest streaks recomputed from the data, schedule-aware with a grace period. weekly/monthly stats, bar charts and a calendar week navigator.",
          tags: ["mobile app", "product", "startup", "streaks"],
        },
        {
          title: "zhasyl.kz",
          year: "2026",
          description:
            "carbon offsets on solana: tokenization, fractionalization and on-chain verification of every tonne of co₂. web3 infrastructure for a transparent carbon credit market.",
          tags: ["solana", "web3", "climatetech"],
        },
      ],
    },
    bots: {
      heading: "telegram bots",
      items: [
        {
          handle: "@Aibotfbot",
          description:
            "ai bot for kazakhtelecom field technicians — logs work tickets from free-form text. private, access-restricted.",
        },
        {
          handle: "habitly",
          description:
            "habit tracker — create habits, daily swipe check-ins and honest streaks.",
        },
      ],
    },
    wins: {
      heading: "wins",
      items: [
        { title: "solana by decentrathon 5.0", place: "prize winner", year: "2026" },
      ],
    },
    experience: {
      heading: "experience",
      items: [
        { title: "developer at ittalker.academy", meta: "current" },
        { title: "freelance developer & ai integrator", meta: "now" },
        { title: "astana hub resident", meta: "now" },
      ],
    },
    education: {
      heading: "education",
      items: [
        {
          title: "toraighyrov university",
          meta: "since 2025",
        },
        {
          title: "college of information technology",
          meta: "2022 — 2025",
        },
        {
          title: "«zerde» school-lyceum for gifted children, ekibastuz",
          subtitle: "secondary education",
          meta: "until 2022",
        },
      ],
    },
    languages: {
      heading: "languages",
      items: [
        { name: "kazakh", level: "native" },
        { name: "russian", level: "native" },
        { name: "english", level: "b1" },
      ],
    },
    stack: {
      heading: "stack",
      items: [
        "ai integration",
        "ai agents",
        "harness ai agent",
        "telegram bots",
        "telegram mini apps",
        "process automation",
        "amocrm",
        "web development",
        "landing pages",
        "python",
        "javascript / typescript",
        "next.js",
      ],
    },
    media: {
      heading: "awards",
      items: [
        {
          title: "decentrathon 5.0 — certificate",
          year: "2026",
          description: "prize winner certificate from solana by decentrathon 5.0.",
          image: "/media/decentrathon-certificate.png",
        },
        {
          title: "coursera — ai",
          year: "2026",
          description: "coursera certificate in artificial intelligence.",
          image: "/media/coursera-ai.png",
        },
        {
          title: "solana by decentrathon 5.0 — 3rd place (rwa)",
          year: "2026",
          description: "3rd place in the rwa track at solana by decentrathon 5.0.",
          image: "/media/solana-rwa-3rd-place.png",
        },
      ],
    },
    contact: {
      heading: "contact",
      intro: "open to interesting tasks and collaboration. drop a line — i reply within the day.",
      items: [
        { label: "email", value: "raiymbektemirlan45@gmail.com", href: "mailto:raiymbektemirlan45@gmail.com" },
        { label: "github", value: "github.com/temirrllan", href: "https://github.com/temirrllan" },
        { label: "telegram", value: "@kimjjk", href: "https://t.me/kimjjk" },
        { label: "linkedin", value: "in/temirlanraiymbek", href: "https://www.linkedin.com/in/temirlanraiymbek/" },
        { label: "instagram", value: "@temirrlllan", href: "https://www.instagram.com/temirrlllan/" },
      ],
    },
    footer: { copyright: "© 2026 temirlan", madeWith: "made with next.js" },
  },

  // ==========================================================================
  //  RUSSIAN
  // ==========================================================================
  ru: {
    meta: {
      title: "Темирлан Райымбек — Разработчик и AI-интегратор",
      description: "Разработчик и ai-интегратор — telegram-боты, ai-агенты, автоматизация, сайты.",
    },
    nav: { now: "сейчас", projects: "проекты", wins: "победы", contact: "контакты" },
    hero: {
      available: "открыт для проектов",
      greeting: "привет, я",
      handle: "temirlan",
      logoText: "temirlan",
      subtitle: "Темирлан Райымбек",
      tagline: "ai-интеграция, боты, автоматизация.",
    },
    about: {
      heading: "обо мне",
      paragraphs: [
        "разработчик и ai-интегратор. внедряю ai в бизнес: telegram-боты, ai-агенты, автоматизация процессов, сайты, лендинги, telegram mini apps, настройка amocrm.",
        "резидент astana hub. разработчик в ittalker.academy. работаю с harness ai agent.",
        "фрилансер. призёр solana by decentrathon 5.0.",
      ],
    },
    inProgress: {
      heading: "сейчас в работе",
      items: [
        {
          status: "в разработке",
          badge: "продаётся",
          title: "ai-агент для продаж",
          subtitle: "живёт внутри amocrm + telegram",
          description:
            "ai-агент, который квалифицирует лиды, отвечает клиентам 24/7 и ставит встречи прямо в crm. подключаешь к воронке — и он просто работает.",
          tags: ["ai-агенты", "amocrm", "telegram", "автоматизация"],
          cta: "связаться",
        },
        {
          status: "в разработке",
          title: "ai-студия автоматизации",
          subtitle: "процессы без рутины",
          description:
            "набор инструментов, чтобы встроить ai в любой бизнес-процесс: от telegram-ботов и mini apps до разбора документов и отчётов. собираю то, что переиспользую на клиентских проектах, в один продукт.",
          tags: ["ai", "автоматизация", "mini apps", "no-code"],
        },
      ],
    },
    projects: {
      heading: "проекты",
      items: [
        {
          title: "tgbottelecom",
          year: "2025",
          description:
            "ai-ассистент для монтёров kazakhtelecom. монтёр пишет наряд свободным текстом — бот понимает, извлекает данные (адрес, проблема, выполненные работы, материалы) и сохраняет. запросы к нарядам на естественном языке и напоминания в рабочее время.",
          tags: ["telegram", "ai", "python", "postgres"],
        },
        {
          title: "привычки и отметки",
          year: "2026",
          description:
            "стартап — трекер привычек. создание привычки: название, цель, категория (~23), расписание по дням недели, время напоминания, пометка «вредная привычка», период дня. ежедневная отметка свайпом: выполнено / провалено / пропущено. честные стрики — пересчитываются из данных, учитывают расписание, с грейс-периодом. недельная и месячная статистика, графики и календарь.",
          tags: ["мобильное приложение", "продукт", "стартап", "стрики"],
        },
        {
          title: "zhasyl.kz",
          year: "2026",
          description:
            "углеродный офсет на solana: токенизация, дробление и on-chain верификация каждой тонны co₂. web3-инфраструктура для прозрачного рынка углеродных кредитов.",
          tags: ["solana", "web3", "climatetech"],
        },
      ],
    },
    bots: {
      heading: "telegram-боты",
      items: [
        {
          handle: "@Aibotfbot",
          description:
            "ai-бот для монтёров kazakhtelecom — заносит наряды из свободного текста. приватный, с ограниченным доступом.",
        },
        {
          handle: "habitly",
          description:
            "трекер привычек — создание привычек, ежедневные отметки свайпом и честные стрики.",
        },
      ],
    },
    wins: {
      heading: "победы",
      items: [
        { title: "solana by decentrathon 5.0", place: "призёр", year: "2026" },
      ],
    },
    experience: {
      heading: "опыт",
      items: [
        { title: "разработчик в ittalker.academy", meta: "сейчас" },
        { title: "фриланс-разработчик и ai-интегратор", meta: "сейчас" },
        { title: "резидент astana hub", meta: "сейчас" },
      ],
    },
    education: {
      heading: "образование",
      items: [
        {
          title: "торайгыров университет",
          meta: "с 2025",
        },
        {
          title: "колледж информационных технологий",
          meta: "2022 — 2025",
        },
        {
          title: "школа-лицей «зерде» для одарённых детей, экибастуз",
          subtitle: "среднее образование",
          meta: "до 2022",
        },
      ],
    },
    languages: {
      heading: "языки",
      items: [
        { name: "казахский", level: "родной" },
        { name: "русский", level: "родной" },
        { name: "английский", level: "b1" },
      ],
    },
    stack: {
      heading: "стек",
      items: [
        "ai-интеграция",
        "ai-агенты",
        "harness ai agent",
        "telegram-боты",
        "telegram mini apps",
        "автоматизация процессов",
        "amocrm",
        "веб-разработка",
        "лендинги",
        "python",
        "javascript / typescript",
        "next.js",
      ],
    },
    media: {
      heading: "награды",
      items: [
        {
          title: "decentrathon 5.0 — сертификат",
          year: "2026",
          description: "сертификат призёра solana by decentrathon 5.0.",
          image: "/media/decentrathon-certificate.png",
        },
        {
          title: "coursera — ai",
          year: "2026",
          description: "сертификат coursera по искусственному интеллекту.",
          image: "/media/coursera-ai.png",
        },
        {
          title: "solana by decentrathon 5.0 — 3 место (rwa)",
          year: "2026",
          description: "3 место в треке rwa на solana by decentrathon 5.0.",
          image: "/media/solana-rwa-3rd-place.png",
        },
      ],
    },
    contact: {
      heading: "контакты",
      intro: "открыт для интересных задач и сотрудничества. напишите — отвечаю в течение дня.",
      items: [
        { label: "email", value: "raiymbektemirlan45@gmail.com", href: "mailto:raiymbektemirlan45@gmail.com" },
        { label: "github", value: "github.com/temirrllan", href: "https://github.com/temirrllan" },
        { label: "telegram", value: "@kimjjk", href: "https://t.me/kimjjk" },
        { label: "linkedin", value: "in/temirlanraiymbek", href: "https://www.linkedin.com/in/temirlanraiymbek/" },
        { label: "instagram", value: "@temirrlllan", href: "https://www.instagram.com/temirrlllan/" },
      ],
    },
    footer: { copyright: "© 2026 temirlan", madeWith: "сделано на next.js" },
  },

  // ==========================================================================
  //  KAZAKH
  // ==========================================================================
  kk: {
    meta: {
      title: "Темірлан Райымбек — Әзірлеуші және AI-интегратор",
      description: "Әзірлеуші және ai-интегратор — telegram-боттар, ai-агенттер, автоматтандыру, сайттар.",
    },
    nav: { now: "қазір", projects: "жобалар", wins: "жеңістер", contact: "байланыс" },
    hero: {
      available: "жобаларға ашықпын",
      greeting: "сәлем, мен",
      handle: "temirlan",
      logoText: "temirlan",
      subtitle: "Темірлан Райымбек",
      tagline: "ai-интеграция, боттар, автоматтандыру.",
    },
    about: {
      heading: "өзім туралы",
      paragraphs: [
        "әзірлеуші және ai-интегратор. бизнеске ai енгіземін: telegram-боттар, ai-агенттер, процестерді автоматтандыру, сайттар, лендингтер, telegram mini apps, amocrm баптау.",
        "astana hub резиденті. ittalker.academy әзірлеушісі. harness ai agent-пен жұмыс істеймін.",
        "фрилансер. solana by decentrathon 5.0 жүлдегері.",
      ],
    },
    inProgress: {
      heading: "қазір жұмыстағы",
      items: [
        {
          status: "әзірленуде",
          badge: "сатылады",
          title: "сатылымға арналған ai-агент",
          subtitle: "amocrm + telegram ішінде тұрады",
          description:
            "лидтерді сұрыптап, клиенттерге 24/7 жауап беріп, кездесулерді тікелей crm-ге жазатын ai-агент. воронкаға қосасың — өзі жұмыс істейді.",
          tags: ["ai-агенттер", "amocrm", "telegram", "автоматтандыру"],
          cta: "байланысу",
        },
        {
          status: "әзірленуде",
          title: "ai-автоматтандыру студиясы",
          subtitle: "рутинасыз процестер",
          description:
            "ai-ды кез келген бизнес-процеске енгізуге арналған құралдар жинағы: telegram-боттар мен mini apps-тан құжаттарды талдау мен есептерге дейін. клиент жобаларында қайта қолданатын нәрселерімді бір өнімге жинаймын.",
          tags: ["ai", "автоматтандыру", "mini apps", "no-code"],
        },
      ],
    },
    projects: {
      heading: "жобалар",
      items: [
        {
          title: "tgbottelecom",
          year: "2025",
          description:
            "kazakhtelecom монтёрлеріне арналған ai-ассистент. монтёр нарядты еркін мәтінмен жазады — бот түсінеді, деректерді (мекенжай, ақау, орындалған жұмыс, материалдар) шығарып сақтайды. наряд бойынша табиғи тілде сұраныстар және жұмыс уақытында еске салулар.",
          tags: ["telegram", "ai", "python", "postgres"],
        },
        {
          title: "әдеттер мен белгілер",
          year: "2026",
          description:
            "стартап — әдеттерді бақылаушы. әдет құру: атауы, мақсаты, санаты (~23), апта күндері бойынша кесте, еске салу уақыты, «зиянды әдет» белгісі, тәулік кезеңі. күнделікті свайппен белгі: орындалды / сәтсіз / өткізілді. адал стриктер — деректерден қайта есептеледі, кестені ескереді, грейс-периодпен. апталық және айлық статистика, графиктер мен күнтізбе.",
          tags: ["мобильді қосымша", "өнім", "стартап", "стриктер"],
        },
        {
          title: "zhasyl.kz",
          year: "2026",
          description:
            "solana-дағы көміртек офсеті: әр co₂ тоннасын токендеу, бөлшектеу және on-chain верификациялау. ашық көміртек несиелері нарығына арналған web3-инфрақұрылым.",
          tags: ["solana", "web3", "climatetech"],
        },
      ],
    },
    bots: {
      heading: "telegram-боттар",
      items: [
        {
          handle: "@Aibotfbot",
          description:
            "kazakhtelecom монтёрлеріне арналған ai-бот — нарядтарды еркін мәтіннен енгізеді. жабық, қолжетімділігі шектеулі.",
        },
        {
          handle: "habitly",
          description:
            "әдеттерді бақылаушы — әдет құру, күнделікті свайппен белгілеу және адал стриктер.",
        },
      ],
    },
    wins: {
      heading: "жеңістер",
      items: [
        { title: "solana by decentrathon 5.0", place: "жүлдегер", year: "2026" },
      ],
    },
    experience: {
      heading: "тәжірибе",
      items: [
        { title: "ittalker.academy әзірлеушісі", meta: "қазір" },
        { title: "фриланс әзірлеуші және ai-интегратор", meta: "қазір" },
        { title: "astana hub резиденті", meta: "қазір" },
      ],
    },
    education: {
      heading: "білім",
      items: [
        {
          title: "торайғыров университеті",
          meta: "2025-тен бері",
        },
        {
          title: "ақпараттық технологиялар колледжі",
          meta: "2022 — 2025",
        },
        {
          title: "«зерде» дарынды балаларға арналған мектеп-лицейі, екібастұз",
          subtitle: "орта білім",
          meta: "2022-ге дейін",
        },
      ],
    },
    languages: {
      heading: "тілдер",
      items: [
        { name: "қазақша", level: "ана тілі" },
        { name: "орысша", level: "ана тілі" },
        { name: "ағылшынша", level: "b1" },
      ],
    },
    stack: {
      heading: "стек",
      items: [
        "ai-интеграция",
        "ai-агенттер",
        "harness ai agent",
        "telegram-боттар",
        "telegram mini apps",
        "процестерді автоматтандыру",
        "amocrm",
        "веб-әзірлеу",
        "лендингтер",
        "python",
        "javascript / typescript",
        "next.js",
      ],
    },
    media: {
      heading: "марапаттар",
      items: [
        {
          title: "decentrathon 5.0 — сертификат",
          year: "2026",
          description: "solana by decentrathon 5.0 жүлдегерінің сертификаты.",
          image: "/media/decentrathon-certificate.png",
        },
        {
          title: "coursera — ai",
          year: "2026",
          description: "жасанды интеллект бойынша coursera сертификаты.",
          image: "/media/coursera-ai.png",
        },
        {
          title: "solana by decentrathon 5.0 — 3 орын (rwa)",
          year: "2026",
          description: "solana by decentrathon 5.0-те rwa тректе 3 орын.",
          image: "/media/solana-rwa-3rd-place.png",
        },
      ],
    },
    contact: {
      heading: "байланыс",
      intro: "қызықты міндеттер мен серіктестікке ашықпын. жазыңыз — тәулік ішінде жауап беремін.",
      items: [
        { label: "email", value: "raiymbektemirlan45@gmail.com", href: "mailto:raiymbektemirlan45@gmail.com" },
        { label: "github", value: "github.com/temirrllan", href: "https://github.com/temirrllan" },
        { label: "telegram", value: "@kimjjk", href: "https://t.me/kimjjk" },
        { label: "linkedin", value: "in/temirlanraiymbek", href: "https://www.linkedin.com/in/temirlanraiymbek/" },
        { label: "instagram", value: "@temirrlllan", href: "https://www.instagram.com/temirrlllan/" },
      ],
    },
    footer: { copyright: "© 2026 temirlan", madeWith: "next.js-те жасалған" },
  },
};
