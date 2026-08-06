import { sendContactEmail } from "../lib/email";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await sendContactEmail(
      form.name,
      form.email,
      form.message
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSent(false), 3000);
  } catch (err) {
    console.error(err);
    alert("Не удалось отправить сообщение.");
  }
};

  const contacts = [
    { label: 'GitHub', value: 'github.com/NEK360', href: 'https://github.com/NEK360', icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, color: '#ffffff' },
    { label: 'Telegram', value: '@NEK360', href: 'https://t.me/NEK360', icon: <MessageCircle size={20} />, color: '#26a4e8' },
    { label: 'WhatsApp', value: '+7 918 797-02-30', href: 'https://wa.me/79187970230', icon: <MessageCircle size={20} />, color: '#25d366' },
    { label: 'Email', value: 'niki.baranov2006@yandex.ru', href: 'mailto:niki.baranov2006@yandex.ru', icon: <Mail size={20} />, color: '#ef4444' },
    { label: 'MAX', value: 'Профиль MAX', href: 'https://max.ru/u/f9LHodD0cOIXaL-KQEQZ2RLZ97U4sJiS8Aze4TdXvv-wAtzJq3ZP5V2NzFc', icon: <ExternalLink size={20} />, color: '#6366f1' },
    { label: 'Сайт', value: 'vb-store.ru', href: 'https://www.vb-store.ru', icon: <ExternalLink size={20} />, color: '#8b5cf6' },
  ];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container-custom" style={{ padding: '60px 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
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
            Контакты
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            Связаться <span className="gradient-text">со мной</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            Открыт для предложений о сотрудничестве и работе в направлениях маркетинга, e-commerce и разработки.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                whileHover={{ y: -3, borderColor: 'var(--accent)' } as any}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${contact.color}22`,
                  border: `1px solid ${contact.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: contact.color,
                  flexShrink: 0,
                }}>
                  {contact.icon}
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                    {contact.label}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '32px', textAlign: 'center' }}>
            Написать сообщение
          </h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '40px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#22c55e', marginBottom: '8px' }}>
                Сообщение отправлено!
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>Я отвечу вам в ближайшее время.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '32px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
            }}>
              {[
                { name: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.name as 'name' | 'email']}
                    onChange={(e) => setForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => { (e.target).style.borderColor = 'var(--accent)'; }}
                    onBlur={(e) => { (e.target).style.borderColor = 'var(--border)'; }}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Сообщение
                </label>
                <textarea
                  placeholder="Напишите ваше сообщение..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
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
                padding: '16px 32px',
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => { (e.currentTarget).style.transform = 'translateY(-2px)'; (e.currentTarget).style.boxShadow = '0 8px 30px rgba(99,102,241,0.4)'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.transform = 'translateY(0)'; (e.currentTarget).style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; }}
              >
                Отправить сообщение
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
