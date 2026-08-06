import { sendContactEmail } from "../email";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ExternalLink, MessageCircle, ChevronRight, Code, BarChart2, Settings, Cpu } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import projectsData from '../data/projects';

function GithubSVG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const roles = [
  'Интернет-маркетолог',
  'E-commerce специалист',
  'Frontend Developer',
  'Automation Developer',
];

const stats = [
  { label: 'Товаров на сайте', value: '65', icon: '🛍️' },
  { label: 'Файлов автоматизации', value: '28', icon: '⚙️' },
  { label: 'Функций Apps Script', value: '100+', icon: '🔧' },
  { label: 'Строк кода', value: '3000+', icon: '💻' },
  { label: 'Google таблиц', value: '43', icon: '📊' },
  { label: 'Фотографий', value: '325+', icon: '🖼️' },
];

const timeline = projectsData.vbStoreTimeline;

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: '48px' }}
    >
      {sub && (
        <span style={{
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '12px',
          padding: '4px 16px',
          borderRadius: '100px',
          background: 'var(--accent-glow)',
          border: '1px solid rgba(99,102,241,0.2)',
        }}>
          {sub}
        </span>
      )}
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--text-primary)' }}>
        {children}
      </h2>
    </motion.div>
  );
}

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await sendContactEmail(
      contactForm.name,
      contactForm.email,
      contactForm.message
    );

    setFormSent(true);

    setContactForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setFormSent(false), 3000);

  } catch (err) {
    console.error("EmailJS error:", err);
    alert("Не удалось отправить сообщение.");
  }
};

  return (
    <div>
      {/* ===== HERO ===== */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container-custom" style={{ width: '100%' }}>
          <div style={{ maxWidth: '800px' }}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '24px' }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                padding: '6px 16px',
                borderRadius: '100px',
                background: 'var(--accent-glow)',
                border: '1px solid rgba(99,102,241,0.3)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Портфолио
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              Никита{' '}
              <span className="gradient-text">Баранов</span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}
            >
              {roles.map((role, i) => (
                <span
                  key={i}
                  onClick={() => setRoleIndex(i)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: `1px solid ${roleIndex === i ? 'var(--accent)' : 'var(--border)'}`,
                    color: roleIndex === i ? 'var(--accent)' : 'var(--text-secondary)',
                    background: roleIndex === i ? 'var(--accent-glow)' : 'var(--bg-card)',
                    transition: 'all 0.2s',
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                maxWidth: '600px',
                marginBottom: '40px',
              }}
            >
              Разрабатываю интернет-магазины, автоматизирую бизнес-процессы и создаю системы управления данными.
              <br /><br />
              Опыт разработки полного цикла: от создания карточек товаров и настройки рекламы до разработки сайтов на React, интеграции API и автоматизации через Google Apps Script.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <Link to="/projects" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                color: 'white',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              }}
                onMouseEnter={(e) => { (e.currentTarget).style.transform = 'translateY(-2px)'; (e.currentTarget).style.boxShadow = '0 8px 30px rgba(99,102,241,0.4)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.transform = 'translateY(0)'; (e.currentTarget).style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; }}
              >
                Посмотреть проекты <ChevronRight size={18} />
              </Link>

              <a href="https://github.com/NEK360" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '15px',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; (e.currentTarget).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; (e.currentTarget).style.color = 'var(--text-primary)'; }}
              >
                <GithubSVG size={18} /> GitHub
              </a>

              <a href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '15px',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; (e.currentTarget).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; (e.currentTarget).style.color = 'var(--text-primary)'; }}
              >
                <MessageCircle size={18} /> Связаться
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            fontSize: '12px',
          }}
        >
          <span>Прокрутите вниз</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT MINI ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container-custom">
          <SectionTitle sub="Обо мне">Специалист на стыке технологий</SectionTitle>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: <BarChart2 size={24} />, title: 'Маркетинг', desc: 'Яндекс Директ, SEO, Яндекс Метрика, работа с маркетплейсами, аналитика' },
              { icon: <Code size={24} />, title: 'Разработка', desc: 'React, TypeScript, Vite, HTML, CSS, JavaScript, Git' },
              { icon: <Settings size={24} />, title: 'Автоматизация', desc: 'Google Apps Script, Wildberries API, Google Sheets, REST API, JSON' },
              { icon: <Cpu size={24} />, title: 'AI инструменты', desc: 'ChatGPT, Claude, Gemini, генерация контента, промптинг' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                whileHover={{ y: -4, borderColor: 'var(--accent)' } as any}
              >
                <div style={{
                  width: '48px', height: '48px',
                  background: 'var(--accent-glow)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '16px',
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 24px', lineHeight: 1.8 }}>
              Студент направления реклама и интернет-маркетинг. Самостоятельно разработал систему управления товарами, которая объединяет Wildberries API, Google Sheets и сайт интернет-магазина.
            </p>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '10px',
              border: '1px solid var(--border)', color: 'var(--text-primary)',
              fontSize: '14px', fontWeight: 600, transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; (e.currentTarget).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; (e.currentTarget).style.color = 'var(--text-primary)'; }}
            >
              Подробнее обо мне <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VB STORE TIMELINE ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <SectionTitle sub="Главный проект">VB Store — 2022–2026</SectionTitle>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Полный цикл развития интернет-магазина спортивной обуви
          </p>

          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent) 90%, transparent)',
              transform: 'translateX(-50%)',
            }} className="timeline-center-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                    position: 'relative',
                  }}
                  className="timeline-item"
                >
                  {/* Year dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '24px',
                    transform: 'translate(-50%, -50%)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 800,
                    color: 'white',
                    zIndex: 1,
                    boxShadow: '0 0 20px var(--accent-glow)',
                  }} className="timeline-dot">
                    {item.year}
                  </div>

                  {/* Card */}
                  <div style={{
                    width: 'calc(50% - 50px)',
                    padding: '24px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    transition: 'all 0.3s',
                  }}
                    className="timeline-card"
                  >
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                      {item.description}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      {item.done.slice(0, 4).map((d, j) => (
                        <li key={j} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                          {d}
                        </li>
                      ))}
                      {item.done.length > 4 && (
                        <li style={{ fontSize: '13px', color: 'var(--text-muted)' }}>+{item.done.length - 4} ещё...</li>
                      )}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: item.stats ? '16px' : '0' }}>
                      {item.tech.map((t, j) => (
                        <span key={j} className="badge" style={{ fontSize: '11px' }}>{t}</span>
                      ))}
                    </div>

                    {item.stats && (
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {item.stats.map((s, j) => (
                          <div key={j} style={{
                            padding: '8px 16px',
                            background: 'var(--accent-glow)',
                            borderRadius: '8px',
                            border: '1px solid rgba(99,102,241,0.2)',
                          }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>{s.value}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          marginTop: '12px', fontSize: '13px', color: 'var(--accent)',
                          fontWeight: 600, transition: 'gap 0.2s',
                        }}
                      >
                        Открыть сайт <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/projects/vb-store" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
              color: 'white', fontWeight: 700, fontSize: '15px',
              boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => { (e.currentTarget).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget).style.transform = 'translateY(0)'; }}
            >
              Полный кейс VB Store <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container-custom">
          <SectionTitle sub="Результаты">Показатели проекта VB Store</SectionTitle>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="stat-card"
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTURE ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <SectionTitle sub="Архитектура">Система автоматизации</SectionTitle>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '48px', lineHeight: 1.8 }}>
              Создана автоматизированная система передачи данных между маркетплейсом, таблицами и интернет-магазином.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
              {[
                { label: 'Wildberries API', icon: '🛒', desc: 'Источник данных о товарах' },
                { label: 'Google Apps Script', icon: '⚙️', desc: '28 файлов, 100+ функций' },
                { label: 'Google Sheets CMS', icon: '📊', desc: '43 таблицы управления' },
                { label: 'JSON API', icon: '🔗', desc: 'Передача данных на сайт' },
                { label: 'React сайт', icon: '⚛️', desc: 'vb-store.ru' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      width: '100%',
                      padding: '20px 28px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'all 0.3s',
                    }}
                    whileHover={{ borderColor: 'var(--accent)', x: 4 } as any}
                  >
                    <span style={{ fontSize: '28px' }}>{step.icon}</span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{step.label}</div>
                      <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{step.desc}</div>
                    </div>
                  </motion.div>
                  {i < 4 && (
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      style={{ color: 'var(--accent)', fontSize: '24px', margin: '8px 0' }}
                    >
                      ↓
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WILDBERRIES STATS ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container-custom">
          <SectionTitle sub="Wildberries">Статистика продаж</SectionTitle>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {[
              { year: '2023', orders: '103', sales: '200 822 ₽' },
              { year: '2024', orders: '276', sales: '497 311 ₽' },
              { year: '2025', orders: '351', sales: '493 662 ₽' },
              { year: '2026*', orders: '283', sales: '307 893 ₽' },
            ].map((row, i) => (
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
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                whileHover={{ borderColor: 'var(--accent)', y: -4 } as any}
              >
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)', marginBottom: '12px' }}>{row.year}</div>
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}><AnimatedCounter value={row.orders} /></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>заказов</div>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{row.sales}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>продажи</div>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
            * Данные за 2026 год являются неполными. Статистика приведена на 01.08.2026.
          </p>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <SectionTitle sub="Контакты">Связаться со мной</SectionTitle>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
            {/* Contact info */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>
                Готов к сотрудничеству
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'GitHub', value: 'github.com/NEK360', href: 'https://github.com/NEK360' },
                  { label: 'Telegram', value: '@NEK360', href: 'https://t.me/NEK360' },
                  { label: 'WhatsApp', value: '+7 918 797-02-30', href: 'https://wa.me/79187970230' },
                  { label: 'Email', value: 'niki.baranov2006@yandex.ru', href: 'mailto:niki.baranov2006@yandex.ru' },
                  { label: 'MAX', value: 'Профиль MAX', href: 'https://max.ru/u/f9LHodD0cOIXaL-KQEQZ2RLZ97U4sJiS8Aze4TdXvv-wAtzJq3ZP5V2NzFc' },
                ].map((contact, i) => (
                  <a key={i} href={contact.href} target={contact.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 20px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>{contact.label}</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>
                Написать сообщение
              </h3>
              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '32px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                  <p style={{ color: '#22c55e', fontWeight: 600 }}>Сообщение отправлено!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя' },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={contactForm[field.name as 'name' | 'email']}
                        onChange={(e) => setContactForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => { (e.target).style.borderColor = 'var(--accent)'; }}
                        onBlur={(e) => { (e.target).style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Сообщение
                    </label>
                    <textarea
                      placeholder="Напишите ваше сообщение..."
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { (e.target).style.borderColor = 'var(--accent)'; }}
                      onBlur={(e) => { (e.target).style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                  <button type="submit" style={{
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.transform = 'translateY(0)'; }}
                  >
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .timeline-center-line { display: none !important; }
          .timeline-item { justify-content: center !important; }
          .timeline-card { width: 100% !important; }
          .timeline-dot { display: none !important; }
        }
      `}</style>
    </div>
  );
}
