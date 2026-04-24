import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import createGlobe from 'cobe';

type LatLng = [number, number];

// cobe arcs: flights from major cities → Australian cities
const ARCS: { from: LatLng; to: LatLng }[] = [
  { from: [51.5074, -0.1278],  to: [-33.8688, 151.2093] }, // London → Sydney
  { from: [25.2048,  55.271],  to: [-37.8136, 144.9631] }, // Dubai → Melbourne
  { from: [19.076,   72.8777], to: [-31.9505, 115.8605] }, // Mumbai → Perth
  { from: [ 1.3521, 103.8198], to: [-33.8688, 151.2093] }, // Singapore → Sydney
  { from: [43.6532, -79.3832], to: [-27.4698, 153.0251] }, // Toronto → Brisbane
];

// Australian city markers
const MARKERS: { location: LatLng; size: number }[] = [
  { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
  { location: [-37.8136, 144.9631], size: 0.05 }, // Melbourne
  { location: [-31.9505, 115.8605], size: 0.04 }, // Perth
  { location: [-27.4698, 153.0251], size: 0.04 }, // Brisbane
];

export default function ComingSoon() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');
  const rootRef    = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const globeRef   = useRef<{ destroy: () => void } | null>(null);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-logo', { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
      gsap.fromTo('.cs-head', { y: 28,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.cs-map',  { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.4 });
      gsap.fromTo('.cs-form', { y: 18,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.72 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // cobe globe — centered on Australia (lng 133.77°E, lat -25.27°)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const size = canvas.offsetWidth * window.devicePixelRatio;
    canvas.width  = size;
    canvas.height = size;

    let phi   = 2.35;  // ≈ 133.7°E — Australia longitude
    let rafId = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: window.devicePixelRatio,
      width:  size,
      height: size,
      phi,
      theta: -0.35,           // tilt toward southern hemisphere
      dark: 1,
      diffuse: 1.8,
      mapSamples: 18000,
      mapBrightness: 5,
      baseColor:   [0.02, 0.07, 0.26],
      markerColor: [0.31, 0.75, 0],
      glowColor:   [0.05, 0.15, 0.45],
      arcColor:    [0.31, 0.75, 0],
      arcWidth: 0.6,
      arcHeight: 0.35,
      markers: MARKERS,
      arcs:    ARCS,
    });

    const animate = () => {
      phi += 0.002;
      // Slow idle oscillation centered on Australia
      const drift = 2.35 + Math.sin(phi * 0.12) * 0.18;
      globe.update({ phi: drift });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    globeRef.current = globe;
    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
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

      {/* ── cobe Globe ── */}
      <div className="cs-map w-full max-w-md my-6 flex items-center justify-center select-none">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '50%' }}
          aria-label="3D globe showing flight paths to Australia"
        />
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
