import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { ImageGrid, ImageLightbox } from '../components/ui/ImageLightbox';
import { AnimatePresence } from 'framer-motion';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import galleryData from '../data/gallery.json';

export default function VBStorePage() {
  const [lightboxImages, setLightboxImages] = useState<{ url: string; caption?: string }[] | null>(null);
  const lightboxIndex = 0;

  const wbGallery = galleryData.gallery.find(g => g.id === 'wb-store');
  const sheetsGallery = galleryData.gallery.find(g => g.id === 'google-sheets-cms');
  const appsGallery = galleryData.gallery.find(g => g.id === 'google-apps-script');
  const directGallery = galleryData.gallery.find(g => g.id === 'yandex-direct');

  const vbStats = [
    { label: 'Товаров', value: '65', icon: '🛍️' },
    { label: 'Категорий', value: '6', icon: '📂' },
    { label: 'Брендов', value: '10', icon: '🏷️' },
    { label: 'Размеров', value: '18', icon: '📏' },
    { label: 'Фотографий', value: '325+', icon: '🖼️' },
    { label: 'Страниц товаров', value: '65', icon: '📄' },
    { label: 'Файлов скриптов', value: '28', icon: '⚙️' },
    { label: 'Функций', value: '100+', icon: '🔧' },
    { label: 'Строк кода', value: '3000+', icon: '💻' },
    { label: 'Google таблиц', value: '43', icon: '📊' },
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
            Главный проект
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.1 }}>
            VB <span className="gradient-text">Store</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Интернет-магазин спортивной обуви · Полный цикл разработки и автоматизации e-commerce проекта
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {['E-commerce', 'Web Development', 'Automation', 'Internet Marketing'].map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>📅 2022–2026</span>
            <a href="https://www.vb-store.ru" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px', borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                color: 'white', fontSize: '14px', fontWeight: 600,
                boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              }}
            >
              <ExternalLink size={15} /> vb-store.ru
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            Показатели проекта
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
            {vbStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="stat-card"
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Архитектура системы
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.8 }}>
            Создана автоматизированная система передачи данных между маркетплейсом, таблицами и интернет-магазином.
          </p>
          <div style={{
            padding: '32px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', maxWidth: '500px', width: '100%' }}>
              {[
                { label: 'Wildberries API', icon: '🛒', desc: 'Данные о товарах' },
                { label: 'Google Apps Script', icon: '⚙️', desc: '28 файлов, 100+ функций, 3000+ строк кода' },
                { label: 'Google Sheets CMS', icon: '📊', desc: '43 таблицы управления' },
                { label: 'JSON API', icon: '🔗', desc: 'Передача данных' },
                { label: 'React сайт', icon: '⚛️', desc: 'vb-store.ru — 65 товаров' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <div style={{
                    width: '100%',
                    padding: '16px 24px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                    <span style={{ fontSize: '24px' }}>{step.icon}</span>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>{step.label}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{step.desc}</div>
                    </div>
                  </div>
                  {i < 4 && (
                    <div style={{ fontSize: '20px', color: 'var(--accent)', margin: '8px 0', fontWeight: 700 }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Wildberries Section */}
        {wbGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>🛒</span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
                {wbGallery.title}
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '700px', lineHeight: 1.8 }}>
              {wbGallery.description}
            </p>

            <ImageGrid images={wbGallery.images} />

            {/* Video */}
            {wbGallery.video && (
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  📹 Видео товара (создано с помощью ИИ)
                </h4>
                <video
                  src={wbGallery.video}
                  controls
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                  }}
                />
              </div>
            )}

            {/* WB Stats */}
            <div style={{ marginTop: '32px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
                📈 Статистика продаж Wildberries
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      {['Год', 'Заказы', 'Продажи'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2023', orders: '103', sales: '200 822 ₽' },
                      { year: '2024', orders: '276', sales: '497 311 ₽' },
                      { year: '2025', orders: '351', sales: '493 662 ₽' },
                      { year: '2026*', orders: '283', sales: '307 893 ₽' },
                    ].map((row) => (
                      <tr key={row.year} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--accent)', fontSize: '15px' }}>{row.year}</td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--text-primary)', fontSize: '15px' }}>{row.orders}</td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--text-primary)', fontSize: '15px' }}>{row.sales}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
                * Данные за 2026 год являются неполными. Статистика приведена на 01.08.2026.
              </p>
            </div>
          </motion.div>
        )}

        {/* Google Sheets CMS */}
        {sheetsGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>📊</span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Google Sheets CMS
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '700px', lineHeight: 1.8 }}>
              {sheetsGallery.description}
            </p>
            <div style={{ marginBottom: '16px', padding: '16px 20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Обрабатываемые данные:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['название', 'бренд', 'категория', 'цена', 'размеры', 'фотографии', 'описание', 'артикул', 'остатки'].map(item => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
            <ImageGrid images={sheetsGallery.images} />
          </motion.div>
        )}

        {/* Google Apps Script */}
        {appsGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>⚙️</span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Google Apps Script — Автоматизация
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '700px', lineHeight: 1.8 }}>
              {appsGallery.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              {[
                { label: 'Файлов', value: '28' },
                { label: 'Функций', value: '100+' },
                { label: 'Строк кода', value: '3000+' },
                { label: 'Таблиц', value: '43' },
                { label: 'Обновление', value: 'ежесуточно' },
              ].map(stat => (
                <div key={stat.label} style={{
                  padding: '12px 20px',
                  background: 'var(--accent-glow)',
                  borderRadius: '10px',
                  border: '1px solid rgba(99,102,241,0.2)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent)' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '24px', padding: '16px 20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Автоматизировано:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['загрузка товаров', 'обработка данных', 'фотографии', 'размеры', 'остатки', 'цены', 'категории', 'генерация каталога'].map(item => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
            <ImageGrid images={appsGallery.images} />
          </motion.div>
        )}

        {/* Yandex Direct */}
        {directGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>📈</span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Яндекс Директ — Продвижение VB Store
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '700px', lineHeight: 1.8 }}>
              {directGallery.description}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              📅 Период: 16 августа — 16 сентября
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {[
                { label: 'Показы', value: '60 987' },
                { label: 'Клики', value: '1 042' },
                { label: 'CTR', value: '1,7%' },
                { label: 'Конверсии', value: '18' },
                { label: 'Цена конверсии', value: '361,11 ₽' },
                { label: 'Доход', value: '2 490 ₽' },
                { label: 'ДРР', value: '261,04%' },
              ].map((stat, i) => (
                <div key={i} className="stat-card" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <ImageGrid images={directGallery.images} />
          </motion.div>
        )}

        {/* Tilda PDF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
            📄 Материалы проекта
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { label: 'Сайт Tilda 2024', url: 'https://www.image2url.com/r2/default/documents/1785680642140-20961c59-7abd-4528-8ddc-953e8de6d049.pdf', desc: 'Первая версия интернет-магазина на Tilda' },
            ].map((doc, i) => (
              <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; }}
              >
                <FileText size={24} color="var(--accent)" />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{doc.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{doc.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImages && (
          <ImageLightbox
            images={lightboxImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxImages(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
