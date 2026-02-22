import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Briefcase, Home as HomeIcon, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation - fade up with scale
      gsap.fromTo('.hero-content',
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.hero-image',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );

      // Framework cards - staggered slide up
      gsap.fromTo('.framework-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: frameworkRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Value props - slide in from sides
      gsap.fromTo('.value-left',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valueRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.value-right',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valueRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="hero-content">
              <p className="eyebrow mb-6">DECIDE / LAND / SETTLE</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
                Move to Australia.<br />
                <span className="text-[#2F6BFF]">Smarter</span> from day one.
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                A clear plan, local knowledge, and hands-on help—so you land ready and settle faster.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Book a Decide Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/packages" className="btn-secondary">
                  See packages
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-[#6D6A63]">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Visa clarity
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Banking & phone
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Home, school & job
                </span>
              </div>
            </div>
            <div className="hero-image relative">
              <img 
                src="/images/home_hero.jpg" 
                alt="Couple planning their move to Australia" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-card hidden lg:block">
                <p className="text-sm text-[#6D6A63] mb-1">Client Success Rate</p>
                <p className="font-heading font-bold text-3xl text-[#2F6BFF]">95%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section ref={frameworkRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">OUR FRAMEWORK</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-4">
              Three phases. One clear path.
            </h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">
              too eazy helps you decide with confidence, land without friction, and settle without regret in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Decide Card */}
            <div className="framework-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#2F6BFF]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#111111] mb-3">01 — Decide</h3>
              <p className="text-[#6D6A63] mb-6 leading-relaxed">
                Pre-visa clarity. Lifestyle fit, visa pathway clarity (MARA), and family feasibility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Lifestyle consultation
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Visa pathway clarity
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Cost-of-living check
                </li>
              </ul>
              <Link to="/decide" className="text-[#2F6BFF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Explore Decide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Land Card */}
            <div className="framework-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-[#2F6BFF]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#111111] mb-3">02 — Land</h3>
              <p className="text-[#6D6A63] mb-6 leading-relaxed">
                Arrival readiness. Banking, mobile, TFN, transport, and insurance guidance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Bank setup
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Mobile / eSIM
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> TFN guidance
                </li>
              </ul>
              <Link to="/land" className="text-[#2F6BFF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Explore Land <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Settle Card */}
            <div className="framework-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7 text-[#2F6BFF]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#111111] mb-3">03 — Settle</h3>
              <p className="text-[#6D6A63] mb-6 leading-relaxed">
                Long-term stability. Suburb, accommodation, schooling, jobs, and Medicare.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Accommodation strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> School/daycare
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#2F6BFF]" /> Resume & jobs
                </li>
              </ul>
              <Link to="/settle" className="text-[#2F6BFF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Explore Settle <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={valueRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="value-left">
              <p className="eyebrow mb-4">WHY TOOEAZY?</p>
              <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-6">
                Smart choices now,<br />fewer corrections later.
              </h2>
              <p className="text-lg text-[#6D6A63] mb-8 leading-relaxed">
                Decision clarity + risk reduction + time efficiency. "Here's where you are — and here's how we get you through it."
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#111111] mb-1">Clarity before decisions</h4>
                    <p className="text-[#6D6A63]">No guesswork. Know exactly what to expect before you move.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#111111] mb-1">You arrive ready</h4>
                    <p className="text-[#6D6A63]">Not scrambling. Day-one functionality for work and life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#111111] mb-1">Settle without regret</h4>
                    <p className="text-[#6D6A63]">Avoid costly mistakes and feel at home faster.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="value-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F4F2EE] rounded-2xl p-6">
                  <p className="font-heading font-bold text-4xl text-[#2F6BFF] mb-2">60-90</p>
                  <p className="text-[#6D6A63]">Days to feel settled</p>
                </div>
                <div className="bg-[#F4F2EE] rounded-2xl p-6">
                  <p className="font-heading font-bold text-4xl text-[#2F6BFF] mb-2">500+</p>
                  <p className="text-[#6D6A63]">Families helped</p>
                </div>
                <div className="bg-[#F4F2EE] rounded-2xl p-6">
                  <p className="font-heading font-bold text-4xl text-[#2F6BFF] mb-2">3</p>
                  <p className="text-[#6D6A63]">Phases covered</p>
                </div>
                <div className="bg-[#F4F2EE] rounded-2xl p-6">
                  <p className="font-heading font-bold text-4xl text-[#2F6BFF] mb-2">24h</p>
                  <p className="text-[#6D6A63]">Response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">READY TO START?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-6">
            Your Australian journey begins with a conversation.
          </h2>
          <p className="text-lg text-[#6D6A63] mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call to discuss your timeline and how we can help you move smarter.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            <Phone className="mr-2 w-5 h-5" />
            Book a Decide Call
          </Link>
        </div>
      </section>
    </div>
  );
}
