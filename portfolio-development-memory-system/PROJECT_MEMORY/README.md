# README — Инструкция по разработке

## Как продолжать разработку

### 1. Добавление нового проекта

Открыть файл `src/data/projects.json`

Добавить объект:
```json
{
  "id": "unique-id",
  "title": "Название проекта",
  "category": "E-commerce | Marketing | Development | Automation",
  "description": "Описание проекта",
  "year": "2026",
  "technologies": ["React", "TypeScript"],
  "images": ["https://url-to-image.com/image.png"],
  "links": {
    "site": "https://site.com",
    "github": "https://github.com/repo"
  },
  "stats": [
    {"label": "Метрика", "value": "100"}
  ],
  "featured": false
}
```

### 2. Добавление изображений в галерею

Открыть файл `src/data/gallery.json`

Добавить объект:
```json
{
  "id": "unique-id",
  "title": "Название",
  "category": "wildberries | google-sheets | automation | marketing | other",
  "description": "Описание",
  "whatDone": "Что сделано",
  "result": "Результат",
  "url": "https://link.com",
  "images": ["https://url.com/image.png"],
  "date": "2026-01"
}
```

### 3. Добавление AI сайта

Открыть файл `src/data/projects.json`

Найти раздел `aiProjects` и добавить:
```json
{
  "id": "ai-12",
  "title": "AI Website 12",
  "description": "Описание сайта",
  "url": "https://site.arena.site/",
  "image": ""
}
```

### 4. Изменение дизайна

Основные цвета находятся в `src/index.css`

Компоненты UI в `src/components/ui/`

### 5. Добавление новой страницы

1. Создать файл `src/pages/NewPage.tsx`
2. Добавить маршрут в `src/App.tsx`
3. Добавить ссылку в `src/components/layout/Navbar.tsx`

---

## Как передать проект другой нейросети

1. Скопировать файл `PROJECT_EXPORT.md`
2. Передать Claude вместе с задачей
3. Claude прочитает контекст и продолжит разработку

---

## Структура данных

```
src/data/
├── projects.json    — все проекты + AI сайты
├── gallery.json     — галерея материалов
├── skills.json      — навыки и стек
├── education.json   — образование и дипломы
├── github.json      — GitHub репозитории
└── media.json       — медиа ссылки
```

---

## Правила разработки

1. Все данные — только через JSON файлы
2. Не добавлять выдуманные данные
3. Не изменять цифры и показатели
4. Перед изменением — читать PROJECT_MEMORY.md
5. Все ссылки хранить в data/ файлах
