import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ImageGrid } from '../components/ui/ImageLightbox';
import githubData from '../data/github.json';

export default function GitHubPage() {
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
            Разработка
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            <span className="gradient-text">GitHub</span> — разработка и программирование
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.8 }}>
            Исходный код проектов, структура разработки, технологии и личный вклад.
          </p>
        </motion.div>

        {/* GitHub Profile */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{
            padding: '28px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            display: 'flex',
            gap: '28px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <img
              src={githubData.profile.image}
              alt="GitHub профиль"
              style={{ width: '300px', borderRadius: '12px', border: '1px solid var(--border)', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--text-primary)">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}>GitHub профиль</h2>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                {githubData.profile.description}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent)' }}>{githubData.profile.repositoriesCount}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>репозиториев</div>
                </div>
              </div>
              <a href={githubData.profile.url} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                  color: 'white', fontSize: '14px', fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                }}
              >
                <ExternalLink size={16} /> Открыть профиль
              </a>
            </div>
          </div>
        </motion.section>

        {/* Repositories */}
        {githubData.repositories.map((repo, i) => (
          <motion.section
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ marginBottom: '60px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '24px' }}>📁</span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>{repo.name}</h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '700px', lineHeight: 1.8 }}>
              {repo.description}
            </p>

            {/* Technologies */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {repo.technologies.map(tech => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>

            {/* Images */}
            {repo.images.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <ImageGrid images={repo.images} />
                {repo.images[0].caption && (
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
                    📸 {repo.images[0].caption}
                  </p>
                )}
              </div>
            )}

            {/* Languages */}
            {repo.languages.length > 0 && (
              <div style={{ marginBottom: '24px', padding: '20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Языки программирования
                </h3>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  {repo.languages.map(lang => (
                    <div key={lang.name} style={{ flex: lang.percent, minWidth: '2px' }}>
                      <div style={{
                        height: '8px',
                        borderRadius: '4px',
                        background: lang.name === 'TypeScript' ? '#3178c6' : lang.name === 'CSS' ? '#563d7c' : '#e34c26',
                      }} title={`${lang.name}: ${lang.percent}%`} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {repo.languages.map(lang => (
                    <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: lang.name === 'TypeScript' ? '#3178c6' : lang.name === 'CSS' ? '#563d7c' : '#e34c26',
                      }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{lang.name}</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Commits */}
            {repo.commits.length > 0 && (
              <div style={{ marginBottom: '24px', padding: '20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  История изменений
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {repo.commits.map((commit, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: 'var(--bg-secondary)',
                      borderRadius: '8px',
                    }}>
                      <div>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>📅 {commit.date}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#22c55e' }}>+{commit.additions}</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '4px' }}>добавлений</span>
                      </div>
                    </div>
                  ))}
                </div>
                {repo.note && (
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '12px', fontStyle: 'italic' }}>
                    {repo.note}
                  </p>
                )}
              </div>
            )}

            <a href={repo.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', color: 'var(--text-primary)',
                fontSize: '14px', fontWeight: 600, transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.borderColor = 'var(--accent)'; (e.currentTarget).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget).style.borderColor = 'var(--border)'; (e.currentTarget).style.color = 'var(--text-primary)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Открыть репозиторий
            </a>
          </motion.section>
        ))}

        {/* Tech Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
            🛠️ Использованные технологии
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Frontend', items: ['React', 'TypeScript', 'Vite'], icon: '⚛️' },
              { title: 'Backend / данные', items: ['Google Apps Script', 'Google Sheets', 'JSON API'], icon: '⚙️' },
              { title: 'Инструменты', items: ['Git', 'GitHub', 'VS Code'], icon: '🔧' },
            ].map((group, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px' }}>{group.icon}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{group.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map(item => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
