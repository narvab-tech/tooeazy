import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Home, GraduationCap, Briefcase, Heart, Car, MapPin, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Settle() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const feelingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - parallax layers
      gsap.fromTo('.settle-hero-text',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo('.settle-hero-image',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.1 }
      );

      // Parallax on scroll
      gsap.to('.settle-hero-image img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Services - reveal with mask
      gsap.fromTo('.service-card',
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Feelings - fade in with blur
      gsap.fromTo('.feeling-item',
        { filter: 'blur(10px)', opacity: 0, y: 30 },
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: feelingsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const services = [
    { icon: MapPin, title: 'Suburb & Commute Framework', desc: 'Data-driven suburb selection based on your priorities.' },
    { icon: Home, title: 'Accommodation Strategy', desc: 'Temporary to permanent housing roadmap.' },
    { icon: GraduationCap, title: 'Schooling / Daycare Strategy', desc: 'Deep dive into education options and applications.' },
    { icon: Heart, title: 'Medicare Guidance', desc: 'Navigate the Australian healthcare system.' },
    { icon: Briefcase, title: 'Resume & Job-Market Alignment', desc: 'Australian-style resume and job search strategy.' },
    { icon: Car, title: 'Driving / Car / Licensing', desc: 'License transfer and vehicle purchase guidance.' },
    { icon: Users, title: 'Family Orientation Support', desc: 'Community connections and local integration.' },
  ];

  const feelings = [
    "How do I avoid expensive mistakes?",
    "Where should we live without locking ourselves in?",
    "What commute/school/rent trade-offs actually work?",
    "How do we stabilise fast?"
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="settle-hero-text">
              <p className="eyebrow mb-6">03 — SETTLE</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
                Settle without<br />the costly detours.
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                Long-term stability: suburb, accommodation, schooling, jobs, and Medicare. From Day 0 + 72 hours, and beyond.
              </p>
              <Link to="/contact" className="btn-primary">
                Plan Your Settlement
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="settle-hero-image relative overflow-hidden rounded-2xl">
              <img 
                src="/images/settle_home.jpg" 
                alt="Family settling into new Australian home" 
                className="w-full object-cover aspect-[4/3] scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Feelings */}
      <section ref={feelingsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">COMMON WORRIES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              We help you avoid the mistakes that cost time and money.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feelings.map((feeling, index) => (
              <div key={index} className="feeling-item bg-[#F4F2EE] rounded-xl p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#2F6BFF] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <p className="text-lg text-[#111111]">"{feeling}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">FULL SETTLEMENT SUPPORT</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-4">
              Everything for long-term stability.
            </h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">
              Smart choices now, fewer corrections later. We guide you through every aspect of settling in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2F6BFF]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#111111] mb-2">{service.title}</h3>
                <p className="text-[#6D6A63] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/settle_career.jpg" 
                alt="Career preparation and resume" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">CAREER SUPPORT</p>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111] mb-6">
                Ready to work. Connected to opportunity.
              </h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">
                Resume aligned to local standards, LinkedIn tuned for your market, and a shortlist of roles and recruiters—before you arrive.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Australian resume format
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> LinkedIn optimization
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Job market research
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Recruiter connections
                </li>
              </ul>
              <div className="bg-[#F4F2EE] rounded-xl p-4">
                <p className="text-sm text-[#6D6A63]">Note: Employment support is advisory and best-efforts only. No guarantee of job outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/60">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            Smart choices now, fewer corrections later.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Most clients feel 'settled' within 60–90 days—because the groundwork is done before the plane lands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-[#111111] hover:bg-white/90">
              Plan Your Settlement
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/packages" className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
