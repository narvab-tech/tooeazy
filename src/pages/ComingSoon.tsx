import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, ArrowRight, MapPin, Clock } from 'lucide-react';

const LAUNCH_DATE = new Date('2025-09-01T00:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-logo', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.cs-headline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.cs-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 });
      gsap.fromTo('.cs-countdown', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 });
      gsap.fromTo('.cs-form', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.8 });
      gsap.fromTo('.cs-badges', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(135deg, #001450 0%, #00205F 60%, #001A4A 100%)' }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: '#50BE00' }} />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Logo / brand */}
        <div className="cs-logo mb-10 text-center">
          <div className="inline-flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-xl"
              style={{ background: '#50BE00', fontFamily: 'Poppins, sans-serif' }}
            >
              TE
            </div>
            <span
              className="text-white text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              TooEazy
            </span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-sm" style={{ color: '#E6E0B8', fontFamily: 'Open Sans, sans-serif' }}>
            <MapPin size={13} />
            <span>Your Life Architect for Australia</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="cs-headline text-center text-white font-extrabold leading-tight mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 6vw, 3.75rem)', maxWidth: 720 }}
        >
          Something{' '}
          <span style={{ color: '#50BE00' }}>big</span>{' '}
          is on its way
        </h1>

        {/* Sub-headline */}
        <p
          className="cs-sub text-center mb-10 max-w-xl leading-relaxed"
          style={{ color: '#C8C2A8', fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
        >
          We're building the smartest relocation platform for skilled migrants moving to Australia — covering every step from visa to a home you love.
        </p>

        {/* Countdown */}
        <div className="cs-countdown flex gap-4 mb-12 flex-wrap justify-center">
          {[
            { label: 'Days', value: pad(timeLeft.days) },
            { label: 'Hours', value: pad(timeLeft.hours) },
            { label: 'Minutes', value: pad(timeLeft.minutes) },
            { label: 'Seconds', value: pad(timeLeft.seconds) },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-3xl"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontFamily: 'Poppins, sans-serif',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {value}
              </div>
              <span className="mt-2 text-xs uppercase tracking-widest" style={{ color: '#8A9BB5', fontFamily: 'Open Sans, sans-serif' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Notify form */}
        <div className="cs-form w-full max-w-md mb-12">
          {submitted ? (
            <div
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(80,190,0,0.15)', border: '1px solid rgba(80,190,0,0.4)' }}
            >
              <p className="font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                You're on the list!
              </p>
              <p className="text-sm mt-1" style={{ color: '#C8C2A8', fontFamily: 'Open Sans, sans-serif' }}>
                We'll email you the moment we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p
                className="text-center text-sm mb-3 font-medium"
                style={{ color: '#E6E0B8', fontFamily: 'Open Sans, sans-serif' }}
              >
                <Clock size={13} className="inline mr-1 -mt-0.5" />
                Be first to know when we launch
              </p>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#8A9BB5' }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    placeholder="your@email.com"
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                    style={{
                      background: 'rgba(255,255,255,0.09)',
                      border: error ? '1.5px solid #f87171' : '1px solid rgba(255,255,255,0.18)',
                      color: '#fff',
                      fontFamily: 'Open Sans, sans-serif',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl font-semibold text-white text-sm flex items-center gap-2 transition-all"
                  style={{
                    background: '#50BE00',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#3F9C00')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#50BE00')}
                >
                  Notify me
                  <ArrowRight size={15} />
                </button>
              </div>
              {error && (
                <p className="text-xs mt-2 text-red-400" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Feature badges */}
        <div className="cs-badges flex flex-wrap gap-3 justify-center max-w-lg">
          {[
            'Visa Pathway Guidance',
            'Pre-Move Suburb Research',
            'Day-One Essentials',
            'School Finder',
            'Tax & Finance Setup',
            'Settlement Support',
          ].map(badge => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.13)',
                color: '#C8C2A8',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-5 text-center text-xs" style={{ color: '#4A5B6E', fontFamily: 'Open Sans, sans-serif' }}>
        © {new Date().getFullYear()} TooEazy. All rights reserved.
      </footer>
    </div>
  );
}
