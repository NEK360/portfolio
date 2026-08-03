import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import projectsData from '../data/projects.json';

function GithubSVG({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const categories = ['Все', 'E-commerce', 'Development', 'Automation', 'Marketing'];

const categoryColors: Record<string, string> = {
  'E-commerce': '#6366f1',
  'Development': '#8b5cf6',
  'Automation': '#06b6d4',
  'Marketing': '#f59e0b',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container-custom" style={{ padding: '60px 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
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
            Портфолио
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Все <span className="gradient-text">проекты</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.8 }}>
            Реальные проекты с реальными результатами — от запуска маркетплейса до разработки автоматизированного интернет-магазина.
          </p>
        </motion.div>

        {/* Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                background: activeCategory === cat ? 'var(--accent-glow)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
              }}
              whileHover={{ y: -4, borderColor: 'var(--accent)' } as any}
            >
              {/* Image or Color Block */}
              <div style={{
                height: '180px',
                background: project.images.length > 0
                  ? `url(${project.images[0]}) center/cover`
                  : `linear-gradient(135deg, ${categoryColors[project.category] || '#6366f1'}22, ${categoryColors[project.category] || '#8b5cf6'}44)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {project.images.length === 0 && (
                  <div style={{ fontSize: '48px' }}>
                    {project.category === 'E-commerce' ? '🛒' : project.category === 'Development' ? '💻' : project.category === 'Automation' ? '⚙️' : '📊'}
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(4px)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'white',
                }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{project.year}</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                  {project.description.slice(0, 120)}{project.description.length > 120 ? '...' : ''}
                </p>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="badge" style={{ fontSize: '11px' }}>{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge" style={{ fontSize: '11px' }}>+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* Stats */}
                {project.stats.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {project.stats.slice(0, 2).map(stat => (
                      <div key={stat.label} style={{
                        padding: '6px 12px',
                        background: 'var(--accent-glow)',
                        borderRadius: '8px',
                        border: '1px solid rgba(99,102,241,0.2)',
                      }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>{stat.value}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.links.site && (
                    <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                        color: 'white', fontSize: '13px', fontWeight: 600,
                        transition: 'all 0.2s',
                      }}
                    >
                      <ExternalLink size={13} /> Открыть
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '8px',
                        border: '1px solid var(--border)', color: 'var(--text-primary)',
                        fontSize: '13px', fontWeight: 600, background: 'var(--bg-secondary)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; }}
                      onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; }}
                    >
                      <GithubSVG size={14} /> GitHub
                    </a>
                  )}
                  {project.links.pdf && (
                    <a href={project.links.pdf} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '8px',
                        border: '1px solid var(--border)', color: 'var(--text-primary)',
                        fontSize: '13px', fontWeight: 600, background: 'var(--bg-secondary)',
                        transition: 'all 0.2s',
                      }}
                    >
                      📄 PDF
                    </a>
                  )}
                  {project.id === 'vb-store' && (
                    <Link to="/projects/vb-store"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '8px',
                        border: '1px solid var(--accent)', color: 'var(--accent)',
                        fontSize: '13px', fontWeight: 600, background: 'var(--accent-glow)',
                        transition: 'all 0.2s',
                      }}
                    >
                      Подробнее <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '80px' }}
        >
          <div style={{ marginBottom: '40px' }}>
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
              AI Web Studio
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              AI Generated Websites
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.8 }}>
              Сайты, созданные с использованием искусственного интеллекта. Концепция универсальной системы для быстрого создания сайтов для малого бизнеса.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {projectsData.aiProjects.map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{
                  padding: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
                whileHover={{ borderColor: 'var(--accent)', y: -2 } as any}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '18px' }}>🤖</span>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>{site.title}</h4>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>AI Web Studio</p>
                </div>
                <a href={site.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                    color: 'white', fontSize: '12px', fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all 0.2s',
                  }}
                >
                  Открыть <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
