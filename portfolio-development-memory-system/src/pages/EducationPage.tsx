import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import educationData from '../data/education.json';

export default function EducationPage() {
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
            Образование
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Образование и <span className="gradient-text">профессиональная подготовка</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.8 }}>
            Документы об образовании и профессиональной квалификации.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
          {educationData.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: '32px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--gradient-from), var(--gradient-to))',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                    padding: '3px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}>
                    {edu.type === 'diploma' ? 'СПО' : 'Профпереподготовка'}
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {edu.title}
                  </h2>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  📅 {edu.date}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Организация
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>{edu.organization}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Квалификация
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' } as React.CSSProperties}>{edu.qualification}</div>
                </div>
                {edu.city && (
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Город
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{edu.city}</div>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Рег. номер
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{edu.registrationNumber}</div>
                </div>
                {edu.serialNumber && (
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Серия / Номер
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{edu.serialNumber}</div>
                  </div>
                )}
              </div>

              {edu.description && (
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {edu.description}
                </p>
              )}

              {edu.pdf && (
                <a href={edu.pdf} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget).style.transform = 'translateY(0)'; }}
                >
                  <FileText size={16} /> Открыть документ PDF
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills from education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '60px', maxWidth: '800px' }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            📚 Полученные навыки
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Маркетинг', items: ['Интернет-маркетинг', 'Реклама', 'Аналитика', 'SEO'], icon: '📊' },
              { title: 'E-commerce', items: ['Маркетплейсы', 'Wildberries', 'Карточки товаров', 'Аналитика'], icon: '🛒' },
              { title: 'Разработка', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], icon: '💻' },
              { title: 'Автоматизация', items: ['Google Apps Script', 'API интеграции', 'Google Sheets'], icon: '⚙️' },
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  padding: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{group.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{group.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map(item => (
                    <span key={item} className="badge" style={{ fontSize: '11px' }}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
