import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, FileText, MapPin, Building2, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Decide() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const feelingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - diagonal reveal with rotation
      gsap.fromTo('.decide-hero-text',
        { x: -80, y: 40, opacity: 0, rotate: -2 },
        { x: 0, y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo('.decide-hero-image',
        { x: 100, scale: 1.1, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );

      // Services - flip in animation
      gsap.fromTo('.service-item',
        { rotateY: -90, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Feelings - typewriter-like reveal
      gsap.fromTo('.feeling-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.2)',
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
    {
      icon: Users,
      title: 'Lifestyle Consult',
      description: 'Understand what life in Australia really looks like for you and your family.'
    },
    {
      icon: FileText,
      title: 'Visa Consult (MARA)',
      description: 'Clarity on visa pathways from registered migration agents.'
    },
    {
      icon: MapPin,
      title: 'Region / Suburb Strategy',
      description: 'City vs region analysis based on your lifestyle and budget.'
    },
    {
      icon: Building2,
      title: 'Cost-of-living Reality Check',
      description: 'Honest assessment of what your life will cost in different locations.'
    },
    {
      icon: GraduationCap,
      title: 'School Feasibility',
      description: 'High-level schooling options and catchment analysis for families.'
    }
  ];

  const feelings = [
    "Am I choosing the right life in Australia?",
    "Is Australia right for my family?",
    "Which visa path fits my long-term life, not just approval?",
    "What will day-to-day life actually look like?"
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="decide-hero-text">
              <p className="eyebrow mb-6">01 — DECIDE</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
                Choose the right life<br />before you move.
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                Pre-visa clarity. Lifestyle fit, visa pathway clarity (MARA-governed), and family feasibility.
              </p>
              <Link to="/contact" className="btn-primary">
                Check Your Readiness
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="decide-hero-image">
              <img 
                src="/images/decide_consultation.jpg" 
                alt="Professional consultation for migration planning" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Feelings */}
      <section ref={feelingsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT YOU MIGHT BE WONDERING</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              We help answer the questions keeping you up at night.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feelings.map((feeling, index) => (
              <div key={index} className="feeling-card bg-[#F4F2EE] rounded-xl p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#2F6BFF] font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-lg text-[#111111] font-medium">"{feeling}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT'S INCLUDED</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-4">
              Decide phase services
            </h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">
              Behind-the-scenes support that gives you clarity before decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-item bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2F6BFF]" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#111111] mb-2">{service.title}</h3>
                <p className="text-[#6D6A63]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/60">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            Clarity before decisions. No guesswork.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            You'll know exactly what life in Australia looks like for you, which visa path fits your goals, and whether your family's needs can be met.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-[#111111] hover:bg-white/90">
              Check Your Readiness
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/packages" className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/decide_family.jpg" 
                alt="Family exploring Australian neighborhood" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">FOR FAMILIES</p>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111] mb-6">
                Making the right choice for your whole family.
              </h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">
                Schooling and family feasibility analysis helps you understand catchments, waitlists, commute trade-offs, and lifestyle fit before you commit.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> School catchment analysis
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Daycare waitlist timing
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Family-friendly suburb recommendations
                </li>
              </ul>
              <Link to="/contact" className="text-[#2F6BFF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Discuss your family's needs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
