import { motion } from 'framer-motion';
import { ImageGrid } from '../components/ui/ImageLightbox';
import AnimatedCounter from '../components/ui/AnimatedCounter';

export default function AutomationPage() {
  const appsScriptImages = [
    { url: 'https://i128.fastpic.org/big/2026/0804/7c/2c9f2d4d1b9c5808cef6ff4a7ab7b87c.jpeg', caption: 'Структура скриптов Google Apps Script' },
    { url: 'https://i128.fastpic.org/big/2026/0804/5f/ded17c30e30e7f8bd0f87dcd0128805f.jpeg', caption: 'Код скрипта' },
    { url: 'https://i128.fastpic.org/big/2026/0804/66/52355f4a098cf1e9964d96d06d671766.jpeg', caption: 'Логи выполнения' },
    { url: 'https://i128.fastpic.org/big/2026/0804/f7/b1e86ac7111f53102d41cfe96993c1f7.jpeg', caption: 'Логи выполнения' },
  ];

  const sheetsImages = [
    { url: 'https://i128.fastpic.org/big/2026/0805/34/b7f7fee9120c7b62b7bafba0aa747e34.jpeg', caption: 'Главная таблица' },
    { url: 'https://i128.fastpic.org/big/2026/0805/33/6682855b093656deaaab9a148fc94233.jpeg', caption: 'WB таблица' },
    { url: 'https://i128.fastpic.org/big/2026/0805/02/04f286acc103ccac64beb3de578e8802.jpeg', caption: 'Каталог товаров' },
    { url: 'https://i128.fastpic.org/big/2026/0805/39/d07c02916fbf3e817bcc74c291322339.jpeg', caption: 'Каталог товаров' },
    { url: 'https://i128.fastpic.org/big/2026/0805/02/956a7122592037b5a80cc5d39fa61602.jpeg', caption: 'Каталог товаров' },
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
            Автоматизация
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Автоматизация <span className="gradient-text">бизнес-процессов</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.8 }}>
            Создание систем автоматической синхронизации данных между Wildberries API, Google Sheets и интернет-магазином.
          </p>
        </motion.div>

        {/* Problem → Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{
              padding: '28px',
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '16px',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>❌</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Проблема</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Раньше необходимо было вручную:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['добавлять товары', 'обновлять остатки', 'менять размеры', 'загружать фотографии', 'редактировать описания'].map(item => (
                  <li key={item} style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#ef4444' }}>×</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              padding: '28px',
              background: 'rgba(34, 197, 94, 0.05)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '16px',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Решение</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Создана автоматическая система синхронизации:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['автозагрузка товаров из WB API', 'автообновление остатков', 'обработка фотографий', 'синхронизация размеров', 'обновление ежесуточно'].map(item => (
                  <li key={item} style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            📊 Показатели системы
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Файлов скриптов', value: '28', icon: '📁' },
              { label: 'Функций', value: '100+', icon: '⚡' },
              { label: 'Строк кода', value: '3000+', icon: '💻' },
              { label: 'Google таблиц', value: '43', icon: '📊' },
              { label: 'Обновление', value: '24ч', icon: '🔄' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="stat-card"
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            🏗️ Архитектура системы
          </h2>
          <div style={{
            padding: '32px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '560px', margin: '0 auto' }}>
              {[
                { from: 'Wildberries API', to: null, icon: '🛒', desc: 'Данные о товарах, остатках, ценах' },
                { from: 'Google Apps Script', to: null, icon: '⚙️', desc: '28 файлов · 100+ функций · 3000+ строк кода' },
                { from: 'Google Sheets CMS', to: null, icon: '📊', desc: '43 таблицы · управление товарами' },
                { from: 'JSON API', to: null, icon: '🔗', desc: 'Форматирование и передача данных' },
                { from: 'React сайт vb-store.ru', to: null, icon: '⚛️', desc: '65 товаров · 6 категорий · 10 брендов' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <div style={{
                    padding: '18px 24px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.2s',
                  }}>
                    <span style={{ fontSize: '28px', flexShrink: 0 }}>{step.icon}</span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{step.from}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{step.desc}</div>
                    </div>
                  </div>
                  {i < 4 && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '40px',
                      color: 'var(--accent)',
                      fontSize: '22px',
                      fontWeight: 700,
                    }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Google Apps Script */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            ⚙️ Google Apps Script
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '700px', lineHeight: 1.8 }}>
            Создана собственная система автоматизации на Google Apps Script.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {['загрузка товаров', 'обработка данных', 'фотографии', 'размеры', 'остатки', 'цены', 'категории', 'генерация каталога'].map(item => (
              <span key={item} className="badge">{item}</span>
            ))}
          </div>
          <ImageGrid images={appsScriptImages} />
        </motion.section>

        {/* Google Sheets CMS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            📊 Google Sheets CMS
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '700px', lineHeight: 1.8 }}>
            Создана собственная CMS на базе Google Sheets. Управление товарами, остатками, характеристиками, фотографиями.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {['название', 'бренд', 'категория', 'цена', 'размеры', 'фотографии', 'описание', 'артикул', 'остатки'].map(item => (
              <span key={item} className="badge">{item}</span>
            ))}
          </div>
          <ImageGrid images={sheetsImages} />
        </motion.section>

        {/* Telegram Bot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            🤖 Telegram File Bot
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '700px', lineHeight: 1.8 }}>
            Telegram-бот для автоматической загрузки файлов на Яндекс.Диск.
          </p>
          <div style={{
            padding: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <img
              src="https://i128.fastpic.org/big/2026/0804/1e/4f51878851511e1ab2851b1295bc601e.jpeg"
              alt="Telegram File Bot"
              style={{ width: '280px', borderRadius: '10px', border: '1px solid var(--border)', flexShrink: 0 }}
            />
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Telegram File Bot — Яндекс.Диск
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Разработка Telegram-бота для автоматизации работы с файлами. Бот принимает файлы и автоматически загружает их на Яндекс.Диск.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {['Python', 'Telegram Bot API', 'Яндекс.Диск API'].map(tech => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              <a href="https://github.com/NEK360/telegram-file-bot" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  border: '1px solid var(--border)', color: 'var(--text-primary)',
                  fontSize: '14px', fontWeight: 600, transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; }}
              >
                GitHub репозиторий
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
