import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import projectsData from '../data/projects.json';

const businessTemplates = [
  { name: 'Салон красоты', icon: '💅' },
  { name: 'Стоматология', icon: '🦷' },
  { name: 'Барбершоп', icon: '💈' },
  { name: 'Автосервис', icon: '🚗' },
  { name: 'Кафе', icon: '☕' },
  { name: 'Клининговая компания', icon: '🧹' },
  { name: 'Ремонт квартир', icon: '🏠' },
];

export default function OtherProjectsPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container-custom" style={{ padding: '60px 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
            padding: '4px 16px',
            borderRadius: '100px',
            background: 'var(--accent-glow)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}>
            Дополнительные проекты
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Дополнительные <span className="gradient-text">проекты</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.8 }}>
            AI Web Studio, учебные проекты и маркетинговые исследования.
          </p>
        </motion.div>

        {/* AI Web Studio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '28px' }}>🤖</span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)' }}>
              AI Web Studio
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '8px', maxWidth: '700px', lineHeight: 1.8 }}>
            Разработка концепции универсальной системы создания сайтов с использованием искусственного интеллекта.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px' }}>
            Цель: ускорить создание сайтов для малого бизнеса.
          </p>

          {/* What implemented */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {[
              { title: 'Шаблоны', desc: 'Создание универсальных шаблонов сайтов для разных ниш', icon: '📋' },
              { title: 'JSON конфиг', desc: 'Изменение данных через JSON без перекодирования', icon: '🔧' },
              { title: 'Компоненты', desc: 'Повторное использование компонентов между проектами', icon: '⚛️' },
              { title: 'Автоматизация', desc: 'Быстрая адаптация под разные сферы бизнеса', icon: '⚡' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  padding: '24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Business templates */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
            📂 Подготовленные направления
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {businessTemplates.map((tmpl) => (
              <div key={tmpl.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                fontSize: '14px',
                color: 'var(--text-primary)',
                fontWeight: 500,
              }}>
                <span>{tmpl.icon}</span>
                {tmpl.name}
              </div>
            ))}
          </div>

          {/* AI Sites */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
            🌐 Готовые AI сайты
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {projectsData.aiProjects.map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s',
                }}
                whileHover={{ borderColor: 'var(--accent)', y: -2 } as any}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>🤖</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>{site.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{site.description}</div>
                  </div>
                </div>
                <a href={site.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                    color: 'white', fontSize: '12px', fontWeight: 600,
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}
                >
                  Открыть <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dubai Chocolate */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            🍫 Дубайский шоколад — Учебный проект
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Landing */}
            <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Лендинг · Учебный проект 2 курса
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '12px' }}>
                Лендинг продукта
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Разработан лендинг продукта «Дубайский шоколад». Задача — представить премиальный продукт через современную посадочную страницу.
              </p>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Структура:</div>
                {['Hero — название и CTA', 'Описание продукта', 'Состав и преимущества', 'Пищевая ценность', 'Блок покупки'].map(item => (
                  <div key={item} style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                  </div>
                ))}
              </div>
              <div style={{ padding: '12px 16px', background: 'var(--accent-glow)', borderRadius: '10px', border: '1px solid rgba(99,102,241,0.2)', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Цена продукта</span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent)' }}>1 540 ₽</span>
              </div>
              <a href="https://www.image2url.com/r2/default/documents/1785680984978-511ef0ee-0150-4a96-881f-79c33567a758.pdf"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                  color: 'white', fontSize: '13px', fontWeight: 600,
                }}
              >
                <FileText size={14} /> Открыть PDF
              </a>
            </div>

            {/* Market Research */}
            <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Маркетинговое исследование · Учебный проект
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '8px', marginBottom: '12px' }}>
                🍞 Казачий хлеб
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>ТМ Дубайский шоколад</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Маркетинговое исследование: анализ рынка, семантики, аудитории и конкурентной среды.
              </p>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Выполнено:</div>
                {['Семантическое ядро', 'Анализ поисковых запросов', 'Анализ конкурентов', 'SWOT-анализ', 'Рекомендации по продвижению'].map(item => (
                  <div key={item} style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                  </div>
                ))}
              </div>
              {/* Mini SWOT */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                {[
                  { title: 'Сильные', items: ['Уникальный продукт', 'Натуральный состав'], color: '#22c55e' },
                  { title: 'Слабые', items: ['Неизвестность бренда', 'Высокая цена'], color: '#ef4444' },
                  { title: 'Возможности', items: ['Расширение ассортимента', 'Новые рынки'], color: '#6366f1' },
                  { title: 'Угрозы', items: ['Конкуренция', 'Изменение спроса'], color: '#f59e0b' },
                ].map(b => (
                  <div key={b.title} style={{ padding: '10px', background: `${b.color}11`, border: `1px solid ${b.color}33`, borderRadius: '8px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: b.color, marginBottom: '4px' }}>{b.title}</div>
                    {b.items.map(i => <div key={i} style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>• {i}</div>)}
                  </div>
                ))}
              </div>
              <a href="https://www.image2url.com/r2/default/documents/1785680508817-3bdf8232-9064-45a0-b4cc-78beb6a8052b.pdf"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                  color: 'white', fontSize: '13px', fontWeight: 600,
                }}
              >
                <FileText size={14} /> Открыть PDF исследования
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
