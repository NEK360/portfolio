import { Link } from 'react-router-dom';
import { MessageCircle, Mail, ExternalLink } from 'lucide-react';

function GithubSVG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 24px',
      marginTop: 'auto',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
              Никита Баранов
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              Интернет-маркетолог · E-commerce · Frontend Developer · Automation
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { href: 'https://github.com/NEK360', icon: <GithubSVG size={16} /> },
                { href: 'https://t.me/NEK360', icon: <MessageCircle size={16} /> },
                { href: 'mailto:niki.baranov2006@yandex.ru', icon: <Mail size={16} /> },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    border: '1px solid var(--border)', background: 'var(--bg-card)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-secondary)'; }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Навигация
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { to: '/', label: 'Главная' },
                { to: '/about', label: 'Обо мне' },
                { to: '/projects', label: 'Проекты' },
                { to: '/projects/vb-store', label: 'VB Store' },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-secondary)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Проекты
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { to: '/projects/marketing', label: 'Маркетинг' },
                { to: '/projects/automation', label: 'Автоматизация' },
                { to: '/github', label: 'GitHub' },
                { to: '/education', label: 'Дипломы' },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-secondary)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Контакты
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:niki.baranov2006@yandex.ru"
                style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.color = 'var(--text-secondary)'; }}
              >
                <Mail size={14} /> niki.baranov2006@yandex.ru
              </a>
              <a href="https://t.me/NEK360" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.color = 'var(--text-secondary)'; }}
              >
                <MessageCircle size={14} /> @NEK360
              </a>
              <a href="https://www.vb-store.ru" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.color = 'var(--text-secondary)'; }}
              >
                <ExternalLink size={14} /> vb-store.ru
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {currentYear} Никита Баранов. Все права защищены.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            React · TypeScript · Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
