# PROJECT STRUCTURE

## Файловая структура

```
portfolio/
├── src/
│   ├── data/
│   │   ├── projects.json        — все проекты
│   │   ├── gallery.json         — галерея материалов
│   │   ├── skills.json          — навыки и стек
│   │   ├── education.json       — образование
│   │   ├── github.json          — github репозитории
│   │   ├── links.json           — все ссылки
│   │   └── media.json           — медиа файлы
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   └── ImageLightbox.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── ArchitectureSection.tsx
│   │   │   └── ContactSection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── VBStorePage.tsx
│   │   ├── MarketingPage.tsx
│   │   ├── AutomationPage.tsx
│   │   ├── GitHubPage.tsx
│   │   ├── EducationPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── OtherProjectsPage.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollAnimation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── PROJECT_MEMORY/
│   ├── PROJECT_CONTEXT.md
│   ├── PROJECT_RULES.md
│   ├── PROJECT_STRUCTURE.md
│   ├── PROJECT_DATA.md
│   ├── CHANGELOG.md
│   └── README.md
├── PROJECT_MEMORY.md
├── PROJECT_EXPORT.md
└── index.html
```

## Страницы и маршруты

| Путь | Компонент | Описание |
|------|-----------|----------|
| / | HomePage | Главная страница |
| /about | AboutPage | Обо мне |
| /projects | ProjectsPage | Все проекты |
| /projects/vb-store | VBStorePage | VB Store |
| /projects/marketing | MarketingPage | Маркетинг |
| /projects/automation | AutomationPage | Автоматизация |
| /github | GitHubPage | GitHub |
| /education | EducationPage | Дипломы |
| /contact | ContactPage | Контакты |

## Компоненты

### Layout
- **Navbar** — навигация, бургер-меню, переключатель темы
- **Footer** — ссылки, контакты

### UI
- **Card** — универсальная карточка
- **Badge** — теги технологий
- **Button** — кнопки
- **AnimatedCounter** — анимированные счетчики
- **ImageLightbox** — просмотр изображений

### Sections
- **HeroSection** — первый экран
- **AboutSection** — о себе
- **SkillsSection** — навыки
- **StatsSection** — статистика VB Store
- **TimelineSection** — история проекта
- **ArchitectureSection** — схема архитектуры
- **ContactSection** — контакты
