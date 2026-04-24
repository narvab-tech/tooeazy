import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const ROUTES = [
  { id: 'london',    name: 'London',    cx: 60,  cy: 78,  d: 'M 60,78 Q 285,92 470,332',    dur: 3.2, begin: 0   },
  { id: 'dubai',     name: 'Dubai',     cx: 188, cy: 90,  d: 'M 188,90 Q 365,140 470,332',   dur: 2.6, begin: 0.8 },
  { id: 'mumbai',    name: 'Mumbai',    cx: 224, cy: 118, d: 'M 224,118 Q 385,158 470,332',   dur: 2.9, begin: 1.5 },
  { id: 'singapore', name: 'Singapore', cx: 396, cy: 172, d: 'M 396,172 Q 456,234 470,332',   dur: 2.1, begin: 2.2 },
  { id: 'toronto',   name: 'Toronto',   cx: 30,  cy: 128, d: 'M 30,128 Q 192,-16 470,332',    dur: 4,   begin: 0.4 },
];

// Simplified Australia outline — clockwise from NW
const AU_D =
  'M 352,228 L 382,209 L 398,204 L 425,212 L 468,267 L 472,326 ' +
  'L 465,369 L 448,389 L 425,397 L 385,397 L 362,393 L 345,385 ' +
  'L 323,369 L 307,338 L 305,302 L 310,263 L 320,241 L 340,225 Z';

export default function ComingSoon() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-logo', { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
      gsap.fromTo('.cs-head', { y: 28,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.cs-map',  { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.42 });
      gsap.fromTo('.cs-form', { y: 18,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.72 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setError('Enter a valid email.'); return; }
    setError('');
    setSubmitted(true);
  }

  return (
    <div
      ref={rootRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ background: '#00091F' }}
    >
      {/* Top accent */}
      <div className="fixed top-0 left-0 right-0 h-0.5" style={{ background: '#50BE00' }} />

      {/* Logo */}
      <div className="cs-logo mb-7 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-base"
          style={{ background: '#50BE00', fontFamily: 'Poppins, sans-serif' }}
        >
          TE
        </div>
        <span className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          TooEazy
        </span>
      </div>

      {/* Headline */}
      <div className="cs-head text-center mb-1">
        <h1
          className="text-white font-extrabold tracking-tight"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.6rem, 7vw, 4.2rem)', lineHeight: 1.08 }}
        >
          Coming Soon
        </h1>
        <p className="mt-3" style={{ color: '#4E607A', fontFamily: 'Open Sans, sans-serif', fontSize: '0.9rem' }}>
          Your life architect for Australia — almost ready.
        </p>
      </div>

      {/* ── Interactive SVG flight map ── */}
      <div className="cs-map w-full max-w-2xl my-8 select-none">
        <svg
          viewBox="0 0 600 480"
          width="100%"
          aria-label="Animated map showing migration flight paths to Australia"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="gl-sm" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="gl-lg" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <style>{`
              .g-dot { fill: rgba(255,255,255,.028); }
              .fl-path {
                fill: none;
                stroke: rgba(80,190,0,.18);
                stroke-width: 1.4;
                stroke-dasharray: 5 5;
                stroke-linecap: round;
                transition: stroke .25s, stroke-width .25s;
              }
              .fl-group:hover .fl-path {
                stroke: rgba(80,190,0,.55);
                stroke-width: 1.8;
              }
              .org-dot {
                fill: rgba(255,255,255,.28);
                stroke: rgba(255,255,255,.18);
                stroke-width: 1;
                cursor: pointer;
                transition: fill .22s;
              }
              .fl-group:hover .org-dot {
                fill: #50BE00;
                stroke: rgba(80,190,0,.55);
              }
              .org-label {
                fill: rgba(200,194,168,0);
                font-family: 'Open Sans', sans-serif;
                font-size: 9px;
                pointer-events: none;
                transition: fill .22s;
              }
              .fl-group:hover .org-label { fill: rgba(200,194,168,.95); }
              .au-shape {
                fill: rgba(80,190,0,.055);
                stroke: rgba(80,190,0,.38);
                stroke-width: 1.4;
                stroke-linejoin: round;
                transition: fill .3s, stroke .3s;
              }
              .au-shape:hover {
                fill: rgba(80,190,0,.11);
                stroke: rgba(80,190,0,.65);
              }
              .syd-ring {
                fill: none;
                stroke: rgba(80,190,0,.6);
                stroke-width: 1;
                animation: syd-pulse 2.2s ease-out infinite;
                transform-box: fill-box;
                transform-origin: center;
              }
              @keyframes syd-pulse {
                0%   { r: 5;  opacity: .9; }
                100% { r: 24; opacity: 0; }
              }
            `}</style>
          </defs>

          {/* Dot grid */}
          {Array.from({ length: 11 }, (_, row) =>
            Array.from({ length: 14 }, (_, col) => (
              <circle key={`${row}-${col}`} className="g-dot" cx={col * 46 + 18} cy={row * 46 + 18} r="1.1" />
            ))
          )}

          {/* Flight routes */}
          {ROUTES.map(r => (
            <g key={r.id} className="fl-group">
              <path id={`fp-${r.id}`} className="fl-path" d={r.d} />

              {/* Traveling dot */}
              <circle r="2.8" fill="#50BE00" filter="url(#gl-sm)">
                <animateMotion dur={`${r.dur}s`} repeatCount="indefinite" begin={`${r.begin}s`}>
                  {/* eslint-disable-next-line react/no-unknown-property */}
                  <mpath xlinkHref={`#fp-${r.id}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.07;0.9;1"
                  dur={`${r.dur}s`}
                  repeatCount="indefinite"
                  begin={`${r.begin}s`}
                />
              </circle>

              {/* Origin city */}
              <circle cx={r.cx} cy={r.cy} r="4" className="org-dot" />
              <text x={r.cx + 8} y={r.cy + 3.5} className="org-label">{r.name}</text>
            </g>
          ))}

          {/* Australia shape */}
          <path className="au-shape" d={AU_D} />

          {/* Sydney destination */}
          <circle cx="470" cy="332" r="5"   className="syd-ring" />
          <circle cx="470" cy="332" r="5"   fill="rgba(80,190,0,.22)" filter="url(#gl-lg)" />
          <circle cx="470" cy="332" r="3.2" fill="#50BE00" filter="url(#gl-sm)" />
          <circle cx="470" cy="332" r="1.5" fill="#fff" />
          <text x="478" y="344" fontSize="7.5" fill="rgba(80,190,0,.65)" fontFamily="Open Sans, sans-serif">Sydney</text>

          {/* Australia label */}
          <text x="388" y="314" textAnchor="middle" fontSize="8.5" fill="rgba(80,190,0,.3)"
            fontFamily="Poppins, sans-serif" fontWeight="600" letterSpacing="3">AUSTRALIA</text>

          {/* FROM ANYWHERE label */}
          <text x="72" y="42" fontSize="7" fill="rgba(78,96,122,.65)"
            fontFamily="Open Sans, sans-serif" letterSpacing="2">FROM ANYWHERE</text>
          <line x1="168" y1="39" x2="182" y2="39" stroke="rgba(78,96,122,.4)" strokeWidth="1" />
          <polygon points="183,36 188,39 183,42" fill="rgba(78,96,122,.4)" />
        </svg>
      </div>

      {/* Notify form */}
      <div className="cs-form w-full max-w-xs">
        {submitted ? (
          <div
            className="rounded-xl p-4 text-center"
            style={{ background: 'rgba(80,190,0,.09)', border: '1px solid rgba(80,190,0,.22)' }}
          >
            <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>You're on the list!</p>
            <p className="mt-1 text-xs" style={{ color: '#4E607A', fontFamily: 'Open Sans, sans-serif' }}>We'll email you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,.055)',
                  border: error ? '1.5px solid #f87171' : '1px solid rgba(255,255,255,.09)',
                  color: '#fff',
                  fontFamily: 'Open Sans, sans-serif',
                }}
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center gap-1.5"
                style={{ background: '#50BE00', fontFamily: 'Poppins, sans-serif' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3F9C00')}
                onMouseLeave={e => (e.currentTarget.style.background = '#50BE00')}
              >
                Notify me <ArrowRight size={14} />
              </button>
            </div>
            {error && <p className="mt-1.5 text-xs text-red-400" style={{ fontFamily: 'Open Sans, sans-serif' }}>{error}</p>}
          </form>
        )}
      </div>

      <p className="mt-10 text-xs" style={{ color: '#1A2A3A', fontFamily: 'Open Sans, sans-serif' }}>
        © {new Date().getFullYear()} TooEazy
      </p>
    </div>
  );
}
