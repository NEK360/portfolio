import { motion } from 'framer-motion';
import { ImageGrid } from '../components/ui/ImageLightbox';
import { FileText } from 'lucide-react';

export default function MarketingPage() {
  const yandexImages = [
    { url: 'https://i.postimg.cc/kGFW6pWP/IMG-3446.png', caption: 'Статистика рекламной кампании' },
    { url: 'https://i.postimg.cc/wxhXG7ZR/IMG-3447.png', caption: 'Показатели рекламы' },
    { url: 'https://i.postimg.cc/PJz1pR15/IMG-3448.png', caption: 'Аналитика кампании' },
  ];

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
            Маркетинг
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Интернет-<span className="gradient-text">маркетинг</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.8 }}>
            Работа с интернет-рекламой, аналитикой и маркетинговыми исследованиями.
          </p>
        </motion.div>

        {/* Yandex Direct */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '28px' }}>📈</span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)' }}>
              Яндекс Директ
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Продвижение интернет-магазина VB Store
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            📅 Период: 16 августа — 16 сентября
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '28px', maxWidth: '700px', lineHeight: 1.8 }}>
            Настройка рекламной кампании, подбор аудитории, анализ эффективности и работа с рекламными объявлениями.
          </p>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px', marginBottom: '32px' }}>
            {[
              { label: 'Показы', value: '60 987', icon: '👁️' },
              { label: 'Клики', value: '1 042', icon: '🖱️' },
              { label: 'CTR', value: '1,7%', icon: '📊' },
              { label: 'Конверсии', value: '18', icon: '✅' },
              { label: 'Цена конверсии', value: '361,11 ₽', icon: '💰' },
              { label: 'Доход', value: '2 490 ₽', icon: '💵' },
              { label: 'ДРР', value: '261,04%', icon: '📉' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="stat-card"
                style={{ padding: '16px' }}
              >
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{stat.icon}</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <ImageGrid images={yandexImages} />
        </motion.section>

        {/* SEO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '28px' }}>🔍</span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)' }}>
              SEO оптимизация
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '700px', lineHeight: 1.8 }}>
            Поисковая оптимизация сайта VB Store. Работа с метатегами, структурой сайта, семантическим ядром.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Семантическое ядро', desc: 'Подбор ключевых слов и поисковых запросов для продвижения магазина' },
              { title: 'Яндекс Метрика', desc: 'Настройка аналитики, отслеживание поведения пользователей и конверсий' },
              { title: 'Мета-теги', desc: 'Оптимизация Title, Description, структуры заголовков для поисковых систем' },
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
                  borderRadius: '16px',
                }}
                whileHover={{ borderColor: 'var(--accent)' } as any}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Academic Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '32px' }}>
            📚 Учебные маркетинговые проекты
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Dubai Chocolate */}
            <div style={{
              padding: '28px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Учебный проект 2 курса
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    🍫 Дубайский шоколад
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Разработан лендинг продукта «Дубайский шоколад». Основная задача — представить премиальный продукт через современную посадочную страницу.
              </p>
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Структура лендинга:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {['Hero блок — название и кнопка покупки', 'Описание и состав продукта', 'Преимущества продукта', 'Пищевая ценность', 'CTA блок — покупка'].map((item, i) => (
                    <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {['100% натуральные ингредиенты', 'Премиум-качество', 'Уникальный вкус'].map(badge => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Цена продукта</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent)' }}>1 540 ₽</span>
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
                <FileText size={15} /> Открыть PDF лендинга
              </a>
            </div>

            {/* Kazachy Bread */}
            <div style={{
              padding: '28px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
            }}>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Маркетинговое исследование
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                  🍞 Казачий хлеб
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>ТМ Дубайский шоколад</p>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                В рамках учебного проекта выполнен анализ рынка, целевой аудитории и конкурентной среды.
              </p>
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Выполнено:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {['Семантическое ядро', 'Анализ поисковых запросов', 'Анализ регионов', 'Анализ конкурентов', 'SWOT-анализ', 'Рекомендации по продвижению'].map((item, i) => (
                    <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SWOT */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                {[
                  { title: 'Сильные', items: ['Уникальный продукт', 'Натуральные ингредиенты', 'Ручная работа'], color: '#22c55e' },
                  { title: 'Слабые', items: ['Неизвестность бренда', 'Высокая цена'], color: '#ef4444' },
                  { title: 'Возможности', items: ['Расширение ассортимента', 'Новые рынки'], color: '#6366f1' },
                  { title: 'Угрозы', items: ['Высокая конкуренция', 'Изменение спроса'], color: '#f59e0b' },
                ].map((block) => (
                  <div key={block.title} style={{
                    padding: '12px',
                    background: `${block.color}11`,
                    border: `1px solid ${block.color}33`,
                    borderRadius: '8px',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: block.color, marginBottom: '6px' }}>{block.title}</div>
                    {block.items.map(item => (
                      <div key={item} style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>• {item}</div>
                    ))}
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
                <FileText size={15} /> Открыть PDF исследования
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
