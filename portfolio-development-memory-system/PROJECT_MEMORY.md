# PROJECT MEMORY — Никита Баранов Portfolio

> Этот файл содержит полную информацию о проекте.
> При передаче другой нейросети — сначала прочитать этот файл.

---

## 1. Описание проекта

Профессиональный сайт-портфолио Никиты Баранова.

**Владелец:** Никита Баранов  
**Специализации:**
- Интернет-маркетолог
- E-commerce специалист
- Junior Frontend Developer
- Специалист по автоматизации бизнес-процессов

**Цель:** Поиск работы, демонстрация реальных проектов и результатов.

---

## 2. Контакты владельца

```
GitHub: https://github.com/NEK360
Telegram: https://t.me/NEK360
WhatsApp: +7 918 797-02-30
MAX: https://max.ru/u/f9LHodD0cOIXaL-KQEQZ2RLZ97U4sJiS8Aze4TdXvv-wAtzJq3ZP5V2NzFc
Email: niki.baranov2006@yandex.ru
```

---

## 3. Технологии проекта

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

---

## 4. Страницы сайта

| Маршрут | Файл | Описание |
|---------|------|----------|
| / | HomePage.tsx | Главная: Hero + About + Timeline + Stats + Architecture + Contact |
| /about | AboutPage.tsx | Обо мне, навыки, стек |
| /projects | ProjectsPage.tsx | Все проекты + AI сайты |
| /projects/vb-store | VBStorePage.tsx | Главный проект с галереей |
| /projects/marketing | MarketingPage.tsx | Маркетинг, Яндекс Директ, учебные проекты |
| /projects/automation | AutomationPage.tsx | Автоматизация, Apps Script, Sheets |
| /projects/other | OtherProjectsPage.tsx | AI Web Studio, Дубайский шоколад |
| /github | GitHubPage.tsx | GitHub репозитории |
| /education | EducationPage.tsx | Дипломы и образование |
| /contact | ContactPage.tsx | Контакты и форма |

---

## 5. Файлы данных

```
src/data/
├── projects.json   — проекты, AI сайты, таймлайн VB Store
├── gallery.json    — галерея с изображениями
├── skills.json     — навыки и стек технологий
├── education.json  — образование и дипломы
├── github.json     — GitHub репозитории
└── media.json      — медиа файлы и ссылки
```

---

## 6. Главные данные (нельзя менять)

### VB Store
- Период: 2022–2026
- Ссылка: https://www.vb-store.ru
- Товаров: 65, Категорий: 6, Брендов: 10, Размеров: 18, Фото: 325+
- Скриптов: 28, Функций: 100+, Строк кода: 3000+, Таблиц: 43

### Wildberries статистика (не менять цифры!)
- 2023: 103 заказа, 200 822 ₽
- 2024: 276 заказов, 497 311 ₽
- 2025: 351 заказ, 493 662 ₽
- 2026*: 283 заказа, 307 893 ₽ (* данные на 01.08.2026)

### Яндекс Директ (не менять цифры!)
- Период: 16 августа — 16 сентября
- Показы: 60 987, Клики: 1 042, CTR: 1,7%
- Конверсии: 18, Цена: 361,11 ₽, Доход: 2 490 ₽, ДРР: 261,04%

### GitHub
- Профиль: https://github.com/NEK360
- Репозиториев: 11
- VB Store: https://github.com/NEK360/VB-STOR.ru
- Telegram Bot: https://github.com/NEK360/telegram-file-bot

---

## 7. Правила изменения

❌ НЕ удалять существующие проекты  
❌ НЕ менять цифры и показатели  
❌ НЕ добавлять выдуманный опыт  
❌ НЕ изменять данные без указания владельца  

✅ Добавлять новые проекты через src/data/projects.json  
✅ Добавлять изображения через src/data/gallery.json  
✅ Сохранять все существующие данные  

---

## 8. Дизайн системы

- Dark/Light тема (localStorage)
- Основной цвет: #0A0A0A (dark), #fafafa (light)
- Акцент: #6366f1 (indigo)
- Анимации: Framer Motion
- Адаптивность: 320px — 1920px

---

## 9. Как добавить новый проект

Открыть `src/data/projects.json` и добавить объект в массив `projects`:

```json
{
  "id": "unique-id",
  "title": "Название",
  "subtitle": "Подзаголовок",
  "category": "E-commerce | Development | Automation | Marketing",
  "tags": [],
  "description": "Описание",
  "year": "2026",
  "technologies": [],
  "images": [],
  "links": {},
  "stats": [],
  "featured": false
}
```

---

## 10. Как добавить AI сайт

Открыть `src/data/projects.json` и добавить в массив `aiProjects`:

```json
{
  "id": "ai-12",
  "title": "AI Website 12",
  "description": "Описание",
  "url": "https://...",
  "image": ""
}
```
