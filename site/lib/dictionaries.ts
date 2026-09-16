export type Locale = 'uk' | 'en' | 'de'

const uk = {
  meta: {
    title: 'Sonya Scandal — Академія іміджу та стилю',
    description:
      'Персональна школа іміджу та стилю Sonya Scandal: індивідуальний супровід, менторство та навчання стилістиці. Запис особисто в Telegram.',
  },
  langNames: { uk: 'Українська', en: 'English', de: 'Deutsch' },
  nav: {
    formats: 'Формати',
    courses: 'Напрямки',
    portfolio: 'Роботи',
    faq: 'Питання',
    about: 'Про нас',
    contact: 'Контакти',
    applyCta: 'Записатися в Telegram',
    menuOpen: 'Відкрити меню',
  },
  hero: {
    eyebrow: 'Академія іміджу та стилю · Sonya Scandal',
    line1: 'Працюю з тими, хто',
    highlight: 'по-справжньому',
    line2: 'ставиться до моди й росту у fashion.',
    subtitle:
      'Sonya Scandal — для тих, хто справді хоче опанувати операційну систему та впливати на процеси.',
    ctaPrimary: 'Формати навчання',
    ctaSecondary: 'Роботи →',
    highlights: [
      { label: 'Формат', value: '1:1, завжди поруч' },
      { label: "Зв'язок", value: 'Особисто в Telegram' },
      { label: 'Підхід', value: 'Програма під вас' },
      { label: 'Практика', value: 'Реальні кейси' },
    ],
  },
  audience: {
    eyebrow: 'Кому це підходить',
    heading: 'Ми працюємо з тими, хто серйозно ставиться до стилю.',
    items: [
      {
        title: 'Початківцям',
        text: 'Тим, хто хоче системно зайти в професію іміджмейкера чи стиліста — без хаосу з розрізнених відео в інтернеті.',
      },
      {
        title: 'Особистому іміджу',
        text: 'Тим, хто хоче навчитися одягатись усвідомлено, впевнено і у своєму власному стилі — для себе, не на публіку.',
      },
      {
        title: 'Практикуючим стилістам',
        text: 'Спеціалістам, які хочуть систематизувати досвід, підняти рівень робіт і впевнено вести клієнтів.',
      },
    ],
  },
  formats: {
    eyebrow: 'Етапи та формати навчання',
    heading: 'Оберіть формат супроводу, який підходить саме вам.',
    subtitle:
      "Кожен формат — це свій рівень залученості: від разової консультації до повного супроводу на шляху в професію.",
    items: [
      {
        index: '01',
        title: 'Індивідуальний супровід',
        subtitle: '1:1, персонально',
        description:
          'Особиста робота з вашим конкретним запитом: аналіз гардеробу, типажу чи кольоротипу, підбір окремого образу. Найглибший рівень уваги до деталей.',
        bullets: [
          'Персональні онлайн-зустрічі',
          'Розбір саме вашого запиту',
          'Гнучкий графік за домовленістю',
        ],
      },
      {
        index: '02',
        title: 'Менторство',
        subtitle: 'Регулярний супровід',
        description:
          "Довготривала підтримка на шляху в професію або до власного бренду: регулярні зустрічі, зворотний зв'язок і контроль прогресу.",
        bullets: [
          'Регулярні онлайн-сесії',
          'Зворотний зв’язок за роботами',
          'Підтримка між зустрічами в Telegram',
        ],
      },
      {
        index: '03',
        title: 'Teacher / Викладання',
        subtitle: 'Структуровані уроки',
        description:
          'Формат лекцій і практичних завдань: теорія стилю, кольору та композиції образу — системно, крок за кроком.',
        bullets: [
          'Структурована програма уроків',
          'Домашні завдання з розбором',
          'Підходить для старту з нуля',
        ],
      },
      {
        index: '04',
        title: "Об'ємний супровід",
        subtitle: 'Повний цикл',
        description:
          "Найповніший формат: поєднує менторство, навчання і практику. Для тих, хто хоче пройти шлях від старту до впевненої роботи з образом під наглядом.",
        bullets: [
          'Поєднання всіх форматів вище',
          'Максимальна глибина занурення',
          'Індивідуальний план під ваш темп',
        ],
      },
    ],
    ctaNote: 'Не впевнені, який формат ваш? Напишіть в Telegram — підберемо разом.',
    ctaButton: 'Обрати формат у Telegram',
  },
  courses: {
    eyebrow: 'Напрямки навчання',
    heading: 'Що можна опанувати в Sonya Scandal.',
    subtitle:
      'Програми адаптуються під ваш рівень і мету — від першого знайомства зі стилем до впевненої практики.',
    items: [
      {
        title: 'Особистий імідж і стиль',
        level: 'База',
        description:
          'Кольоротип, типаж фігури, побудова гардеробу та впевненість у щоденних образах.',
      },
      {
        title: 'Fashion-стилістика',
        level: 'Практика',
        description:
          'Створення образів для зйомок і проєктів: від ідеї та мудборду до фінального луку.',
      },
      {
        title: 'Fashion-ілюстрація',
        level: 'Творчість',
        description:
          'Візуалізація образу через скетч та ілюстрацію — інструмент, яким стилісти показують ідею ще до зйомки.',
      },
      {
        title: 'Особистий бренд стиліста',
        level: 'Професія',
        description:
          'Як пакувати досвід, вести соцмережі та знаходити перших клієнтів у сфері стилю та іміджу.',
      },
    ],
    ctaNote: 'Точну вартість і тривалість програми ми узгоджуємо індивідуально.',
    ctaButton: 'Дізнатись деталі в Telegram',
  },
  quotes: [
    'Повірте, бачити ескіз наживо приємніше, ніж шукати ідеальну пару.',
    'Створити свій бренд — це як нові туфлі: спочатку страшно тиснуть, а потім ти в них королева.',
    'Виробництво — це не жах, це просто складний роман із хорошим фіналом.',
    'Я навчу вас перетворювати виробничі жахіття на найстильніші образи сезону.',
  ],
  levels: {
    eyebrow: 'Структура програми',
    heading: 'Три рівні — від цеху до власного почерку.',
    subtitle:
      'Ми піднімаємось знизу вгору: спершу ремесло й виробництво, потім сенси бренду, і аж тоді — ваш власний проєкт.',
    items: [
      {
        level: 'Рівень 1',
        title: 'Від ескізу до власної фабрики',
        subtitle: 'Досвід і виробництво',
        text: 'Як влаштовані тканини, лекала, цех і собівартість. Без цього будь-яка красива ідея залишається просто картинкою.',
      },
      {
        level: 'Рівень 2',
        title: 'Філософія спокуси',
        subtitle: 'Бренд і сенси',
        text: 'Чому люди обирають саме вас: характер бренду, візуальна мова та історія, яку хочеться носити.',
      },
      {
        level: 'Рівень 3',
        title: 'Куратор власного безумства',
        subtitle: 'Фінальний проєкт',
        text: 'Ваш власний проєкт під супроводом: від ідеї до готового виробу чи капсули, яку не соромно показати ринку.',
      },
    ],
  },
  brands: {
    eyebrow: 'Бренди та виробництва',
    heading: 'Бренди, які працюють просто зараз.',
    subtitle:
      'Тут представлена лише частина брендів і виробництв, які Sonya Scandal запускала або супроводжувала. Відкрийте будь-який — це найкраще підтвердження досвіду.',
    ownLabel: 'власний бренд',
    note: 'Назви брендів наведені як приклади робіт. Права на торговельні марки належать їхнім власникам.',
  },
  press: {
    eyebrow: 'Преса та визнання',
    heading: 'Про бренд писали.',
    text: '«Sonya Scandal, або Мілан у серці Харкова» — розворот про презентацію нового магазину та колекції в рамках Kharkiv Fashion Day.',
    source: 'Журнал «Нова Я», червень 2025',
    note: 'Матеріал наведено як згадку у пресі; права на публікацію належать виданню.',
  },
  portfolio: {
    eyebrow: 'Роботи та кейси',
    heading: 'Приклади образів і живий процес роботи з Brunello Cucinelli.',
    subtitle: 'Кадри зі спільної роботи та виробничого процесу — у партнерстві з Brunello Cucinelli.',
    media: {
      clips: [
        { title: 'Процес · 01', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 02', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 03', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 04', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 05', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 06', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
        { title: 'Процес · 07', caption: 'Кадр зі спільної роботи з Brunello Cucinelli.' },
      ],
    },
  },
  about: {
    eyebrow: 'Про засновницю',
    heading: 'Головна любов мого життя — це моя професія.',
    lead: 'Вчитися в мене — це не просто освіта. Це привілей і особливий знак престижу.',
    paragraphs: [
      'Приходьте, вчіться — і ви побачите реальний результат уже за кілька тижнів. Зрештою, навіщо відкладати успіх на потім, якщо його можна запустити, не змигнувши оком?',
      'Здається, моє життя останні двадцять шість років — це суцільний, нескінченно красивий роман. І, зізнаюся чесно, я закохана.',
      'Я отримую задоволення від звуку швейних машин на фабриці й від тієї божевільної енергії, коли народжується ескіз — і перетворюється на готовий розкішний виріб, який доти жив лише у вас у голові. Я закохана в красу, що створюється не в мріях, а в реальних виробничих цехах. Але будьмо чесні: головна любов усього мого життя — це моя професія. Бо ідеального чоловіка знайти складніше, ніж хорошого технолога, повірте.',
      'Мій шлях пролягав через Туреччину та Італію, але моментом, який перевернув моє сприйняття світу, стало стажування на фабриці Brunello Cucinelli. Там я перейняла не просто стандарти якості, а глибоке бачення та спосіб життя: дбайливе ставлення до природи, її багатств і до людини. Цю повагу я пронесла через усе життя й транслюю в усьому, що роблю, — і саме цього вчитиму вас.',
      'Я створила своє. Але головне — я навчилася створювати для інших. Сьогодні за мною вісім діючих виробництв по всьому світу та бренди, які працюють, ростуть і підкорюють ринки.',
      'Про мене писали, мене називали «Відкриттям року», журнали присвячували мені розвороти. Я вдячна за це визнання — неймовірно приємно, коли твоя робота викликає такий відгук.',
      'Але якщо ви спитаєте, у чому секрет, я відповім з усмішкою: це просто велика, пристрасна любов — до професії, до чоловіків, до краси й до гармонії з природою, помножена на безкомпромісний професіоналізм. І, на відміну від сумочки Chanel, цей досвід ніколи не вийде з моди.',
    ],
    credentials: [
      { value: '26 років', label: 'У професії' },
      { value: '8 виробництв', label: 'Діють по всьому світу' },
      { value: 'Туреччина · Італія', label: 'Професійний шлях' },
      { value: 'Brunello Cucinelli', label: 'Стажування на фабриці' },
    ],
    founderName: 'Олена Гавриш',
    founderRole: 'Засновниця Sonya Scandal',
    cardBrand: 'Sonya Scandal',
    cardLinkedin: 'LinkedIn',
    cardPhoneAt: 'Телефон (Австрія)',
    cardPhoneUa: 'Телефон (Україна) · Telegram',
    cardEmail: 'Пошта',
  },
  faq: {
    eyebrow: 'Питання і відповіді',
    heading: 'Перш ніж написати — коротко про головне.',
    items: [
      {
        q: 'Як записатися на консультацію чи навчання?',
        a: 'Напишіть особисто в Telegram за посиланням на цьому сайті. Ми обговоримо ваш запит, підберемо формат і домовимось про час.',
      },
      {
        q: 'Чи є особистий кабінет на сайті?',
        a: 'Ні. Весь супровід, матеріали та зв’язок відбуваються особисто в Telegram — без реєстрацій і паролів.',
      },
      {
        q: 'Якою мовою проходить навчання?',
        a: 'Українська та російська — базові мови навчання. Англійською — за попередньою домовленістю. Сам сайт доступний українською, англійською та німецькою.',
      },
      {
        q: 'У якому форматі проходять заняття?',
        a: 'Онлайн, у зручний для вас час. Формат — індивідуальний супровід, менторство, викладання чи об’ємний супровід — обирається під ваш запит.',
      },
      {
        q: 'Як відбувається оплата і чи можна скасувати запис?',
        a: 'Умови оплати узгоджуються індивідуально в переписці. Якщо ви споживач у ЄС, до фактичного початку надання послуги ви маєте право відмовитися від договору протягом 14 днів — детальніше в Умовах надання послуг.',
      },
      {
        q: 'Чи можна прийти лише на разову консультацію?',
        a: 'Так — формат «Індивідуальний супровід» якраз для точкового запиту, без довгострокових зобов’язань.',
      },
    ],
  },
  timeline: {
    eyebrow: 'Як це відбувається',
    heading: 'Простий шлях від першого повідомлення до результату.',
    steps: [
      {
        title: 'Пишете в Telegram',
        text: 'Розказуєте про свій запит — особистий імідж, навчання чи проєкт. Відповідаємо особисто.',
      },
      {
        title: 'Обираємо формат',
        text: 'Разом визначаємо, що підходить: разова консультація, менторство, навчання чи повний супровід.',
      },
      {
        title: 'Працюємо за графіком',
        text: 'Онлайн-зустрічі, домашні завдання або розбір образів — залежно від обраного формату.',
      },
      {
        title: 'Отримуєте результат',
        text: 'Готові образи, впевненість у стилі або портфоліо робіт — залежно від вашої мети.',
      },
    ],
  },
  contact: {
    eyebrow: 'Контакти',
    heading: 'Напишіть особисто — відповідаємо в Telegram.',
    subtitle:
      'Запис на консультацію та навчання відбувається через особисті повідомлення. Жодних форм і особистих кабінетів — лише пряма розмова.',
    telegramCta: 'Написати в Telegram',
    channelLabel: 'Telegram-канал',
    phoneLabel: 'Телефон',
    emailLabel: 'Пошта',
    note: 'Звертаючись до нас, ви пишете напряму — ваші дані не потрапляють у жодну форму чи базу на сайті. Докладніше — в Політиці конфіденційності.',
  },
  footer: {
    brand: 'Sonya Scandal',
    tagline: 'Персональна академія іміджу та стилю. Навчання, менторство і супровід — особисто, без зайвого.',
    colFormats: { heading: 'Навчання', links: ['Формати навчання', 'Напрямки', 'Роботи та кейси', 'Питання і відповіді'] },
    colAcademy: { heading: 'Про нас', links: ['Про засновницю', 'Контакти'] },
    colLegal: { heading: 'Правова інформація', links: ['Impressum', 'Політика конфіденційності', 'Умови надання послуг', 'Налаштування cookie'] },
    rights: '© {year} Sonya Scandal · Олена Гавриш, ФОП (Україна)',
    madeWith: 'Зроблено з увагою до стилю',
  },
  cookies: {
    bannerTitle: 'Ми використовуємо cookie',
    bannerText:
      'Необхідні cookie потрібні для роботи сайту. За вашою згодою ми також використовуємо аналітичні cookie, щоб розуміти, як покращити сайт. Детальніше — в Політиці конфіденційності.',
    acceptAll: 'Прийняти всі',
    necessaryOnly: 'Тільки необхідні',
    customize: 'Налаштувати',
    save: 'Зберегти вибір',
    settingsTitle: 'Налаштування cookie',
    necessaryTitle: 'Необхідні',
    necessaryDesc:
      'Забезпечують базову роботу сайту (наприклад, збереження вибору мови та cookie-налаштувань). Завжди активні.',
    analyticsTitle: 'Аналітичні',
    analyticsDesc:
      'Допомагають анонімно зрозуміти, як відвідувачі користуються сайтом (Vercel Analytics). Вмикаються лише за вашою згодою.',
    alwaysOn: 'Завжди активні',
    privacyLink: 'Політика конфіденційності',
  },
  legalNav: { back: '← На головну' },
} as const

const en: typeof uk = {
  meta: {
    title: 'Sonya Scandal — Image & Style Academy',
    description:
      'Sonya Scandal is a personal image and style school: individual mentorship, guidance and styling courses. Book personally on Telegram.',
  },
  langNames: { uk: 'Українська', en: 'English', de: 'Deutsch' },
  nav: {
    formats: 'Formats',
    courses: 'Programmes',
    portfolio: 'Work',
    faq: 'FAQ',
    about: 'About',
    contact: 'Contact',
    applyCta: 'Message on Telegram',
    menuOpen: 'Open menu',
  },
  hero: {
    eyebrow: 'Image & Style Academy · Sonya Scandal',
    line1: 'I work with people who',
    highlight: 'genuinely care',
    line2: 'about fashion and growth in it.',
    subtitle:
      'Sonya Scandal is for those who truly want to master the operating system of the industry and shape the process.',
    ctaPrimary: 'Learning formats',
    ctaSecondary: 'See the work →',
    highlights: [
      { label: 'Format', value: '1:1, always beside you' },
      { label: 'Contact', value: 'Personally on Telegram' },
      { label: 'Approach', value: 'A programme built around you' },
      { label: 'Practice', value: 'Real cases' },
    ],
  },
  audience: {
    eyebrow: 'Who this is for',
    heading: 'We work with people who take style seriously.',
    items: [
      {
        title: 'Beginners',
        text: 'Anyone who wants a structured way into the image-consulting or styling profession — without the chaos of scattered videos online.',
      },
      {
        title: 'Personal image',
        text: "Anyone who wants to learn to dress with intention and confidence, in a style that's genuinely their own — for themselves, not for an audience.",
      },
      {
        title: 'Working stylists',
        text: 'Professionals who want to structure their experience, raise the level of their work, and take on clients with confidence.',
      },
    ],
  },
  formats: {
    eyebrow: 'Stages & formats of learning',
    heading: 'Choose the level of support that fits you.',
    subtitle:
      "Each format means a different level of involvement — from a one-off consultation to full, ongoing support on your path into the profession.",
    items: [
      {
        index: '01',
        title: 'Individual mentorship',
        subtitle: '1:1, personal',
        description:
          'Personal work on your specific request: a wardrobe, body-type or colour-type analysis, or a single look. The deepest level of attention to detail.',
        bullets: [
          'Personal online sessions',
          'Focused on your exact request',
          'Flexible scheduling by arrangement',
        ],
      },
      {
        index: '02',
        title: 'Mentorship',
        subtitle: 'Ongoing guidance',
        description:
          'Longer-term support on your way to the profession or your own brand: regular sessions, feedback, and progress tracking.',
        bullets: [
          'Regular online sessions',
          'Feedback on your work',
          'Support between sessions on Telegram',
        ],
      },
      {
        index: '03',
        title: 'Teacher / Lecturing',
        subtitle: 'Structured lessons',
        description:
          'A lecture-and-assignment format: the theory of style, colour and composition, taught step by step.',
        bullets: [
          'Structured lesson plan',
          'Homework with feedback',
          'Great for starting from zero',
        ],
      },
      {
        index: '04',
        title: 'Extensive support',
        subtitle: 'Full cycle',
        description:
          'The most complete format: it combines mentorship, teaching and practice — for anyone who wants a fully guided path from the very start to working with image confidently.',
        bullets: [
          'Combines all formats above',
          'Maximum depth of immersion',
          'An individual plan matched to your pace',
        ],
      },
    ],
    ctaNote: "Not sure which format is yours? Message us on Telegram and we'll figure it out together.",
    ctaButton: 'Choose a format on Telegram',
  },
  courses: {
    eyebrow: 'Programmes',
    heading: 'What you can learn at Sonya Scandal.',
    subtitle:
      'Programmes are adapted to your level and goal — from a first introduction to style to confident professional practice.',
    items: [
      {
        title: 'Personal image & style',
        level: 'Foundations',
        description: 'Colour type, body type, wardrobe building, and confidence in everyday looks.',
      },
      {
        title: 'Fashion styling',
        level: 'Practice',
        description: 'Building looks for shoots and projects: from concept and moodboard to the final look.',
      },
      {
        title: 'Fashion illustration',
        level: 'Craft',
        description:
          'Visualising a look through sketching and illustration — a tool stylists use to show an idea before the shoot.',
      },
      {
        title: 'Personal brand for stylists',
        level: 'Profession',
        description:
          'Packaging your experience, running your social media, and finding your first clients in styling and image consulting.',
      },
    ],
    ctaNote: 'Exact pricing and duration are agreed on individually.',
    ctaButton: 'Get the details on Telegram',
  },
  quotes: [
    'Believe me, seeing your sketch come alive is more satisfying than hunting for the perfect pair of shoes.',
    'Building your own brand is like new shoes: at first they pinch terribly, and then you are a queen in them.',
    'Production is not a nightmare. It is just a complicated romance with a happy ending.',
    'I will teach you to turn production nightmares into the most stylish looks of the season.',
  ],
  levels: {
    eyebrow: 'How the programme is built',
    heading: 'Three levels — from the factory floor to your own signature.',
    subtitle:
      'We climb from the bottom up: first the craft and the production, then the meaning behind the brand, and only then — your own project.',
    items: [
      {
        level: 'Level 1',
        title: 'From sketch to your own factory',
        subtitle: 'Craft and production',
        text: 'How fabrics, patterns, the factory floor and unit costs actually work. Without this, a beautiful idea stays just a picture.',
      },
      {
        level: 'Level 2',
        title: 'The philosophy of seduction',
        subtitle: 'Brand and meaning',
        text: 'Why people choose you: the character of the brand, its visual language, and a story people want to wear.',
      },
      {
        level: 'Level 3',
        title: 'Curator of your own madness',
        subtitle: 'Final project',
        text: 'Your own project with guidance: from the idea to a finished piece or capsule you can confidently show the market.',
      },
    ],
  },
  brands: {
    eyebrow: 'Brands & productions',
    heading: 'Brands that are running right now.',
    subtitle:
      'Only part of the brands and productions Sonya Scandal has launched or guided is shown here. Open any of them — that is the best proof of the experience.',
    ownLabel: 'own brand',
    note: 'Brand names are listed as examples of work. All trademarks belong to their respective owners.',
  },
  press: {
    eyebrow: 'Press & recognition',
    heading: 'Written about in the press.',
    text: '"Sonya Scandal, or Milan in the heart of Kharkiv" — a spread on the launch of the new store and collection during Kharkiv Fashion Day.',
    source: 'Nova Ya magazine, June 2025',
    note: 'Shown here as a press mention; rights to the published material belong to the magazine.',
  },
  portfolio: {
    eyebrow: 'Work & case studies',
    heading: 'Looks, and the live process behind them — with Brunello Cucinelli.',
    subtitle: 'Footage from a shared production process, in partnership with Brunello Cucinelli.',
    media: {
      clips: [
        { title: 'Process · 01', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 02', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 03', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 04', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 05', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 06', caption: 'A frame from work done together with Brunello Cucinelli.' },
        { title: 'Process · 07', caption: 'A frame from work done together with Brunello Cucinelli.' },
      ],
    },
  },
  about: {
    eyebrow: 'About the founder',
    heading: 'The great love of my life is my profession.',
    lead: 'Studying with me is not just an education. It is a privilege, and a mark of a certain kind of prestige.',
    paragraphs: [
      'Come, learn — and you will see a real result within a couple of weeks. After all, why postpone success, when you can launch it without batting an eye?',
      'It seems my life for the past twenty-six years has been one long, endlessly beautiful romance. And I will admit it honestly: I am in love.',
      'I take pleasure in the sound of the machines running on the factory floor, and in that mad rush of energy when a sketch is born — and turns into a finished, luxurious piece that until then lived only in your head. I am in love with beauty that is made not in daydreams but in real production halls. Though let us be honest: the great love of my life is my profession. Because finding a perfect man is harder than finding a good production engineer, believe me.',
      'My path ran through Turkey and Italy, but the moment that changed how I see the world was my internship at the Brunello Cucinelli factory. What I took from there was not just quality standards but a way of seeing and of living: care for nature, for its resources, and for people. I have carried that respect through my whole life and it shows in everything I do — and it is exactly what I will teach you.',
      'I built my own brand. But more importantly, I learned to build them for others. Today there are eight working productions around the world behind me, and brands that run, grow and win their markets.',
      'I have been written about, called a "discovery of the year", given magazine spreads. I am grateful for that recognition — it is an extraordinary feeling when your work resonates like that.',
      'But if you ask me what the secret is, I will answer with a smile: it is simply a great, passionate love — for the profession, for men, for beauty and for harmony with nature, multiplied by uncompromising professionalism. And unlike a Chanel bag, this experience will never go out of fashion.',
    ],
    credentials: [
      { value: '26 years', label: 'In the profession' },
      { value: '8 productions', label: 'Running worldwide' },
      { value: 'Turkey · Italy', label: 'Professional path' },
      { value: 'Brunello Cucinelli', label: 'Factory internship' },
    ],
    founderName: 'Olena Havrysh',
    founderRole: 'Founder of Sonya Scandal',
    cardBrand: 'Sonya Scandal',
    cardLinkedin: 'LinkedIn',
    cardPhoneAt: 'Phone (Austria)',
    cardPhoneUa: 'Phone (Ukraine) · Telegram',
    cardEmail: 'Email',
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Before you write in — the essentials.',
    items: [
      {
        q: 'How do I book a consultation or a course?',
        a: "Message us personally on Telegram using the link on this site. We'll talk through what you need, agree on a format, and find a time.",
      },
      {
        q: 'Is there a personal account or login area on the site?',
        a: 'No. All guidance, materials and communication happen directly on Telegram — no registration, no passwords.',
      },
      {
        q: 'What language is the teaching in?',
        a: 'Ukrainian and Russian are the main teaching languages. English by prior arrangement. The site itself is available in Ukrainian, English and German.',
      },
      {
        q: 'What format are the sessions in?',
        a: 'Online, at a time that works for you. The format — individual mentorship, mentorship, teaching, or extensive support — is chosen to match your request.',
      },
      {
        q: 'How does payment work, and can I cancel a booking?',
        a: 'Payment terms are agreed individually in chat. If you are a consumer in the EU, you have the right to withdraw from the contract within 14 days, as long as the service has not yet begun — see our Terms of Service for details.',
      },
      {
        q: 'Can I book just a one-off consultation?',
        a: "Yes — the 'Individual mentorship' format is exactly for a focused, one-off request, with no long-term commitment.",
      },
    ],
  },
  timeline: {
    eyebrow: 'How it works',
    heading: 'A simple path from your first message to a result.',
    steps: [
      {
        title: 'You message us on Telegram',
        text: 'Tell us what you need — personal image, learning, or a project. We reply personally.',
      },
      {
        title: 'We choose a format together',
        text: 'We work out what fits: a one-off consultation, mentorship, teaching, or full support.',
      },
      {
        title: 'We work to a schedule',
        text: 'Online sessions, assignments, or look reviews — depending on the format you chose.',
      },
      {
        title: 'You get your result',
        text: 'Finished looks, confidence in your style, or a portfolio of work — depending on your goal.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Message us personally — we reply on Telegram.',
    subtitle:
      'Booking a consultation or a course happens through a personal message. No forms, no personal accounts — just a direct conversation.',
    telegramCta: 'Message on Telegram',
    channelLabel: 'Telegram channel',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    note: "When you message us, you're reaching out directly — none of your details are stored in a form or database on this site. See our Privacy Policy for details.",
  },
  footer: {
    brand: 'Sonya Scandal',
    tagline: 'A personal image and style academy. Learning, mentorship and support — personal, and nothing more than that.',
    colFormats: { heading: 'Learning', links: ['Learning formats', 'Programmes', 'Work & cases', 'FAQ'] },
    colAcademy: { heading: 'About', links: ['About the founder', 'Contact'] },
    colLegal: { heading: 'Legal', links: ['Imprint', 'Privacy Policy', 'Terms of Service', 'Cookie settings'] },
    rights: '© {year} Sonya Scandal · Olena Havrysh, sole proprietor (Ukraine)',
    madeWith: 'Made with an eye for style',
  },
  cookies: {
    bannerTitle: 'We use cookies',
    bannerText:
      'Necessary cookies keep this site working. With your consent, we also use analytics cookies to understand how to improve the site. See our Privacy Policy for details.',
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    customize: 'Customize',
    save: 'Save choice',
    settingsTitle: 'Cookie settings',
    necessaryTitle: 'Necessary',
    necessaryDesc: 'Needed for the site to work (e.g. remembering your language and cookie choice). Always active.',
    analyticsTitle: 'Analytics',
    analyticsDesc: 'Help us anonymously understand how visitors use the site (Vercel Analytics). Only enabled with your consent.',
    alwaysOn: 'Always on',
    privacyLink: 'Privacy Policy',
  },
  legalNav: { back: '← Back to home' },
}

const de: typeof uk = {
  meta: {
    title: 'Sonya Scandal — Akademie für Image & Stil',
    description:
      'Sonya Scandal ist eine persönliche Image- und Stilschule: individuelle Begleitung, Mentoring und Styling-Kurse. Anmeldung persönlich per Telegram.',
  },
  langNames: { uk: 'Українська', en: 'English', de: 'Deutsch' },
  nav: {
    formats: 'Formate',
    courses: 'Programme',
    portfolio: 'Arbeiten',
    faq: 'FAQ',
    about: 'Über uns',
    contact: 'Kontakt',
    applyCta: 'Auf Telegram schreiben',
    menuOpen: 'Menü öffnen',
  },
  hero: {
    eyebrow: 'Akademie für Image & Stil · Sonya Scandal',
    line1: 'Ich arbeite mit Menschen, die',
    highlight: 'Mode wirklich',
    line2: 'ernst nehmen und darin wachsen wollen.',
    subtitle:
      'Sonya Scandal ist für alle, die das Betriebssystem der Branche wirklich meistern und die Prozesse aktiv mitgestalten wollen.',
    ctaPrimary: 'Lernformate',
    ctaSecondary: 'Arbeiten ansehen →',
    highlights: [
      { label: 'Format', value: '1:1, immer an Ihrer Seite' },
      { label: 'Kontakt', value: 'Persönlich per Telegram' },
      { label: 'Ansatz', value: 'Programm ganz auf Sie zugeschnitten' },
      { label: 'Praxis', value: 'Echte Fälle' },
    ],
  },
  audience: {
    eyebrow: 'Für wen das ist',
    heading: 'Wir arbeiten mit Menschen, denen Stil wichtig ist.',
    items: [
      {
        title: 'Einsteigerinnen',
        text: 'Für alle, die den Einstieg in den Beruf der Stilberaterin strukturiert angehen möchten — statt sich durch verstreute Videos im Internet zu kämpfen.',
      },
      {
        title: 'Persönlicher Stil',
        text: 'Für alle, die lernen möchten, sich bewusst, selbstbewusst und in ihrem eigenen Stil zu kleiden — für sich selbst, nicht für ein Publikum.',
      },
      {
        title: 'Erfahrene Stylistinnen',
        text: 'Für Fachleute, die ihre Erfahrung strukturieren, das Niveau ihrer Arbeiten heben und selbstbewusst Kundinnen gewinnen möchten.',
      },
    ],
  },
  formats: {
    eyebrow: 'Etappen & Lernformate',
    heading: 'Wählen Sie die Form der Begleitung, die zu Ihnen passt.',
    subtitle:
      'Jedes Format steht für ein anderes Maß an Begleitung — von der Einzelberatung bis zur vollständigen, langfristigen Betreuung auf dem Weg in den Beruf.',
    items: [
      {
        index: '01',
        title: 'Individuelle Begleitung',
        subtitle: '1:1, persönlich',
        description:
          'Persönliche Arbeit an Ihrem konkreten Anliegen: Analyse von Garderobe, Figur- oder Farbtyp, oder ein einzelner Look. Die intensivste Form der Betreuung.',
        bullets: ['Persönliche Online-Termine', 'Fokus genau auf Ihr Anliegen', 'Flexible Terminvereinbarung'],
      },
      {
        index: '02',
        title: 'Mentoring',
        subtitle: 'Laufende Begleitung',
        description:
          'Längerfristige Unterstützung auf dem Weg zum Beruf oder zur eigenen Marke: regelmäßige Termine, Feedback und Fortschrittskontrolle.',
        bullets: ['Regelmäßige Online-Sessions', 'Feedback zu Ihren Arbeiten', 'Begleitung zwischen den Terminen per Telegram'],
      },
      {
        index: '03',
        title: 'Teacher / Unterricht',
        subtitle: 'Strukturierte Lektionen',
        description:
          'Vorlesungs- und Übungsformat: Theorie zu Stil, Farbe und Bildaufbau, Schritt für Schritt vermittelt.',
        bullets: ['Strukturierter Lehrplan', 'Hausaufgaben mit Feedback', 'Ideal für den Einstieg bei null'],
      },
      {
        index: '04',
        title: 'Umfassende Begleitung',
        subtitle: 'Gesamtpaket',
        description:
          'Das umfassendste Format: Es verbindet Mentoring, Unterricht und Praxis — für alle, die den gesamten Weg von Anfang bis zur sicheren Arbeit mit Image vollständig begleitet gehen möchten.',
        bullets: ['Kombination aller oben genannten Formate', 'Maximale Tiefe', 'Individueller Plan in Ihrem Tempo'],
      },
    ],
    ctaNote: 'Nicht sicher, welches Format zu Ihnen passt? Schreiben Sie uns auf Telegram — wir finden es gemeinsam heraus.',
    ctaButton: 'Format per Telegram klären',
  },
  courses: {
    eyebrow: 'Programme',
    heading: 'Was Sie bei Sonya Scandal lernen können.',
    subtitle:
      'Die Programme werden an Ihr Niveau und Ihr Ziel angepasst — vom ersten Kontakt mit Stil bis zur sicheren professionellen Praxis.',
    items: [
      {
        title: 'Persönliches Image & Stil',
        level: 'Grundlagen',
        description: 'Farbtyp, Figurtyp, Garderobenaufbau und Sicherheit im Alltagslook.',
      },
      {
        title: 'Fashion-Styling',
        level: 'Praxis',
        description: 'Looks für Shootings und Projekte entwickeln — von der Idee und dem Moodboard bis zum fertigen Look.',
      },
      {
        title: 'Fashion-Illustration',
        level: 'Handwerk',
        description:
          'Einen Look durch Skizze und Illustration sichtbar machen — ein Werkzeug, mit dem Stylistinnen eine Idee schon vor dem Shooting zeigen.',
      },
      {
        title: 'Persönliche Marke als Stylistin',
        level: 'Beruf',
        description:
          'Erfahrung sichtbar machen, Social Media führen und die ersten Kundinnen im Bereich Styling und Image-Beratung gewinnen.',
      },
    ],
    ctaNote: 'Genauer Preis und Dauer werden individuell vereinbart.',
    ctaButton: 'Details per Telegram erfragen',
  },
  quotes: [
    'Glauben Sie mir: die eigene Skizze lebendig werden zu sehen ist schöner, als das perfekte Paar Schuhe zu suchen.',
    'Eine eigene Marke aufzubauen ist wie neue Schuhe: Erst drücken sie fürchterlich, dann sind Sie darin eine Königin.',
    'Produktion ist kein Albtraum. Sie ist nur eine komplizierte Romanze mit gutem Ende.',
    'Ich bringe Ihnen bei, Produktions-Albträume in die stilvollsten Looks der Saison zu verwandeln.',
  ],
  levels: {
    eyebrow: 'Aufbau des Programms',
    heading: 'Drei Ebenen — von der Werkstatt zur eigenen Handschrift.',
    subtitle:
      'Wir arbeiten uns von unten nach oben: zuerst Handwerk und Produktion, dann die Bedeutung der Marke — und erst dann Ihr eigenes Projekt.',
    items: [
      {
        level: 'Ebene 1',
        title: 'Von der Skizze zur eigenen Fabrik',
        subtitle: 'Handwerk und Produktion',
        text: 'Wie Stoffe, Schnitte, Werkstatt und Stückkosten wirklich funktionieren. Ohne das bleibt jede schöne Idee nur ein Bild.',
      },
      {
        level: 'Ebene 2',
        title: 'Die Philosophie der Verführung',
        subtitle: 'Marke und Bedeutung',
        text: 'Warum Menschen gerade Sie wählen: der Charakter der Marke, ihre visuelle Sprache und eine Geschichte, die man tragen möchte.',
      },
      {
        level: 'Ebene 3',
        title: 'Kuratorin des eigenen Wahnsinns',
        subtitle: 'Abschlussprojekt',
        text: 'Ihr eigenes Projekt unter Begleitung: von der Idee bis zum fertigen Stück oder einer Kapsel, die Sie dem Markt zeigen können.',
      },
    ],
  },
  brands: {
    eyebrow: 'Marken & Produktionen',
    heading: 'Marken, die gerade jetzt laufen.',
    subtitle:
      'Hier ist nur ein Teil der Marken und Produktionen zu sehen, die Sonya Scandal aufgebaut oder begleitet hat. Öffnen Sie eine davon — das ist der beste Beleg für die Erfahrung.',
    ownLabel: 'eigene Marke',
    note: 'Die Markennamen sind als Arbeitsbeispiele genannt. Alle Marken gehören ihren jeweiligen Inhabern.',
  },
  press: {
    eyebrow: 'Presse & Anerkennung',
    heading: 'In der Presse.',
    text: '„Sonya Scandal, oder Mailand im Herzen von Charkiw" — eine Doppelseite über die Eröffnung des neuen Stores und der Kollektion im Rahmen des Kharkiv Fashion Day.',
    source: 'Magazin „Nova Ya", Juni 2025',
    note: 'Hier als Pressehinweis wiedergegeben; die Rechte an der Veröffentlichung liegen beim Magazin.',
  },
  portfolio: {
    eyebrow: 'Arbeiten & Fallbeispiele',
    heading: 'Looks — und der lebendige Prozess dahinter, mit Brunello Cucinelli.',
    subtitle: 'Aufnahmen aus dem gemeinsamen Produktionsprozess, in Partnerschaft mit Brunello Cucinelli.',
    media: {
      clips: [
        { title: 'Prozess · 01', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 02', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 03', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 04', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 05', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 06', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
        { title: 'Prozess · 07', caption: 'Eine Aufnahme aus der Zusammenarbeit mit Brunello Cucinelli.' },
      ],
    },
  },
  about: {
    eyebrow: 'Über die Gründerin',
    heading: 'Die große Liebe meines Lebens ist mein Beruf.',
    lead: 'Bei mir zu lernen ist nicht einfach eine Ausbildung. Es ist ein Privileg — und ein besonderes Zeichen von Prestige.',
    paragraphs: [
      'Kommen Sie, lernen Sie — und Sie sehen schon nach wenigen Wochen ein echtes Ergebnis. Warum sollte man den Erfolg aufschieben, wenn man ihn ohne mit der Wimper zu zucken starten kann?',
      'Mein Leben der letzten sechsundzwanzig Jahre ist, wie mir scheint, eine einzige, unendlich schöne Romanze. Und ich gebe es offen zu: Ich bin verliebt.',
      'Ich genieße das Geräusch der laufenden Maschinen in der Fabrik und diese verrückte Energie, wenn eine Skizze entsteht — und zu einem fertigen, luxuriösen Stück wird, das bis dahin nur in Ihrem Kopf existierte. Ich liebe Schönheit, die nicht in Träumen entsteht, sondern in echten Produktionshallen. Aber seien wir ehrlich: Die große Liebe meines Lebens ist mein Beruf. Denn einen perfekten Mann zu finden ist schwieriger, als einen guten Technologen zu finden — glauben Sie mir.',
      'Mein Weg führte über die Türkei und Italien, doch der Moment, der meine Sicht auf die Welt verändert hat, war mein Praktikum in der Fabrik von Brunello Cucinelli. Was ich dort mitgenommen habe, waren nicht nur Qualitätsstandards, sondern eine Haltung und eine Lebensweise: Achtsamkeit gegenüber der Natur, ihren Ressourcen und dem Menschen. Diesen Respekt trage ich seither durch mein ganzes Leben — und genau das bringe ich Ihnen bei.',
      'Ich habe Eigenes aufgebaut. Vor allem aber habe ich gelernt, für andere aufzubauen. Heute stehen acht laufende Produktionsstätten weltweit hinter mir und Marken, die funktionieren, wachsen und ihre Märkte erobern.',
      'Über mich wurde geschrieben, man nannte mich „Entdeckung des Jahres", Magazine widmeten mir Doppelseiten. Ich bin dankbar für diese Anerkennung — es ist ein unglaubliches Gefühl, wenn die eigene Arbeit so ankommt.',
      'Wenn Sie mich aber nach dem Geheimnis fragen, antworte ich mit einem Lächeln: Es ist einfach eine große, leidenschaftliche Liebe — zum Beruf, zu den Männern, zur Schönheit und zur Harmonie mit der Natur, multipliziert mit kompromissloser Professionalität. Und anders als eine Chanel-Tasche kommt diese Erfahrung nie aus der Mode.',
    ],
    credentials: [
      { value: '26 Jahre', label: 'Im Beruf' },
      { value: '8 Produktionen', label: 'Weltweit in Betrieb' },
      { value: 'Türkei · Italien', label: 'Beruflicher Weg' },
      { value: 'Brunello Cucinelli', label: 'Praktikum in der Fabrik' },
    ],
    founderName: 'Olena Havrysh',
    founderRole: 'Gründerin von Sonya Scandal',
    cardBrand: 'Sonya Scandal',
    cardLinkedin: 'LinkedIn',
    cardPhoneAt: 'Telefon (Österreich)',
    cardPhoneUa: 'Telefon (Ukraine) · Telegram',
    cardEmail: 'E-Mail',
  },
  faq: {
    eyebrow: 'Häufige Fragen',
    heading: 'Kurz das Wichtigste, bevor Sie schreiben.',
    items: [
      {
        q: 'Wie melde ich mich für eine Beratung oder ein Programm an?',
        a: 'Schreiben Sie uns persönlich auf Telegram über den Link auf dieser Seite. Wir besprechen Ihr Anliegen, legen ein Format fest und vereinbaren einen Termin.',
      },
      {
        q: 'Gibt es einen persönlichen Kundenbereich auf der Website?',
        a: 'Nein. Die gesamte Begleitung, alle Materialien und die Kommunikation laufen direkt über Telegram — ohne Registrierung und ohne Passwort.',
      },
      {
        q: 'In welcher Sprache findet der Unterricht statt?',
        a: 'Unterrichtssprachen sind Ukrainisch und Russisch. Englisch nach vorheriger Absprache. Deutsch ist derzeit keine Unterrichtssprache — diese Website steht Ihnen aber auf Deutsch zur Verfügung.',
      },
      {
        q: 'In welchem Format finden die Termine statt?',
        a: 'Online, zu einer für Sie passenden Zeit. Das Format — individuelle Begleitung, Mentoring, Unterricht oder umfassende Begleitung — wird passend zu Ihrem Anliegen gewählt.',
      },
      {
        q: 'Wie funktioniert die Zahlung, und kann ich einen Termin stornieren?',
        a: 'Die Zahlungsbedingungen werden individuell im Chat vereinbart. Verbraucherinnen und Verbraucher in der EU haben das Recht, den Vertrag innerhalb von 14 Tagen zu widerrufen, solange die Dienstleistung noch nicht begonnen hat — Details dazu in unseren Allgemeinen Geschäftsbedingungen.',
      },
      {
        q: 'Kann ich auch nur eine einmalige Beratung buchen?',
        a: 'Ja — genau dafür ist das Format „Individuelle Begleitung“ gedacht: für ein einzelnes Anliegen, ohne langfristige Verpflichtung.',
      },
    ],
  },
  timeline: {
    eyebrow: 'So funktioniert es',
    heading: 'Ein einfacher Weg von der ersten Nachricht zum Ergebnis.',
    steps: [
      {
        title: 'Sie schreiben uns auf Telegram',
        text: 'Erzählen Sie uns, worum es geht — persönliches Image, Lernen oder ein Projekt. Wir antworten persönlich.',
      },
      {
        title: 'Wir wählen gemeinsam ein Format',
        text: 'Wir finden heraus, was passt: eine einmalige Beratung, Mentoring, Unterricht oder umfassende Begleitung.',
      },
      {
        title: 'Wir arbeiten nach Plan',
        text: 'Online-Termine, Aufgaben oder die Besprechung von Looks — je nach gewähltem Format.',
      },
      {
        title: 'Sie erhalten Ihr Ergebnis',
        text: 'Fertige Looks, Sicherheit im eigenen Stil oder ein Arbeitsportfolio — je nach Ihrem Ziel.',
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Schreiben Sie uns persönlich — wir antworten auf Telegram.',
    subtitle:
      'Die Anmeldung zu einer Beratung oder einem Programm erfolgt per persönlicher Nachricht. Keine Formulare, kein Kundenbereich — nur ein direktes Gespräch.',
    telegramCta: 'Auf Telegram schreiben',
    channelLabel: 'Telegram-Kanal',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    note: 'Wenn Sie uns schreiben, wenden Sie sich direkt an uns — Ihre Daten werden dabei in keinem Formular oder keiner Datenbank dieser Website gespeichert. Details dazu finden Sie in unserer Datenschutzerklärung.',
  },
  footer: {
    brand: 'Sonya Scandal',
    tagline: 'Eine persönliche Akademie für Image und Stil. Lernen, Mentoring und Begleitung — persönlich, und nicht mehr als nötig.',
    colFormats: { heading: 'Lernen', links: ['Lernformate', 'Programme', 'Arbeiten & Fälle', 'Häufige Fragen'] },
    colAcademy: { heading: 'Über uns', links: ['Über die Gründerin', 'Kontakt'] },
    colLegal: { heading: 'Rechtliches', links: ['Impressum', 'Datenschutzerklärung', 'AGB', 'Cookie-Einstellungen'] },
    rights: '© {year} Sonya Scandal · Olena Havrysh, Einzelunternehmerin (Ukraine)',
    madeWith: 'Mit einem Blick für Stil gemacht',
  },
  cookies: {
    bannerTitle: 'Wir verwenden Cookies',
    bannerText:
      'Notwendige Cookies sorgen für die Funktion dieser Website. Mit Ihrer Zustimmung verwenden wir außerdem Analyse-Cookies, um die Website zu verbessern. Details finden Sie in unserer Datenschutzerklärung.',
    acceptAll: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    customize: 'Einstellungen',
    save: 'Auswahl speichern',
    settingsTitle: 'Cookie-Einstellungen',
    necessaryTitle: 'Notwendig',
    necessaryDesc: 'Erforderlich für die Funktion der Website (z. B. Speicherung Ihrer Sprach- und Cookie-Auswahl). Immer aktiv.',
    analyticsTitle: 'Analyse',
    analyticsDesc: 'Helfen uns, anonymisiert zu verstehen, wie die Website genutzt wird (Vercel Analytics). Wird nur mit Ihrer Zustimmung aktiviert.',
    alwaysOn: 'Immer aktiv',
    privacyLink: 'Datenschutzerklärung',
  },
  legalNav: { back: '← Zur Startseite' },
}

export type Dictionary = typeof uk

export const dictionaries: Record<Locale, Dictionary> = { uk, en, de }
