import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CreditCard, Smartphone, FileCheck, Bus, Shield, Mail, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Land() {
  const heroRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const feelingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - scale up with elastic
      gsap.fromTo('.land-hero-text',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.land-hero-image',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.8)', delay: 0.2 }
      );

      // Checklist items - bounce in from bottom
      gsap.fromTo('.checklist-item',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: checklistRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Feelings - slide from right with skew
      gsap.fromTo('.feeling-quote',
        { x: 80, skewX: -5, opacity: 0 },
        {
          x: 0,
          skewX: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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

  const checklist = [
    { icon: CreditCard, title: 'Bank Activation Strategy', desc: 'Set up your Australian bank account before you arrive.' },
    { icon: Smartphone, title: 'Mobile / eSIM', desc: 'Get connected immediately with the right phone plan.' },
    { icon: FileCheck, title: 'TFN Guidance', desc: 'Tax File Number application made simple.' },
    { icon: Bus, title: 'Transport Cards', desc: 'Opal, Myki, or Go Card set up for immediate use.' },
    { icon: Shield, title: 'Health Insurance Explanation', desc: 'Understand your coverage options clearly.' },
    { icon: Mail, title: 'Mail Redirection', desc: "Ensure you don't miss important correspondence." },
    { icon: Package, title: 'Cargo Coordination Logic', desc: 'Plan your shipment timing and logistics.' },
  ];

  const feelings = [
    "Can I operate from Day One?",
    "I don't want to waste my first 2 weeks.",
    "I need to be contactable, banked, and compliant immediately.",
    "I can't afford delays for work or school."
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="land-hero-image order-1 lg:order-1">
              <img 
                src="/images/land_arrival.jpg" 
                alt="Confident arrival at Australian airport" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="land-hero-text order-2 lg:order-2">
              <p className="eyebrow mb-6">02 — LAND</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
                Land with your<br />essentials ready.
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                Day-one readiness: bank, mobile, TFN, transport, and insurance guidance. From 3 weeks before departure until arrival (Day 0).
              </p>
              <Link to="/contact" className="btn-primary">
                Prepare for Day One
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feelings */}
      <section ref={feelingsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">YOUR CONCERNS</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              We understand the pressure of arrival day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feelings.map((feeling, index) => (
              <div key={index} className="feeling-quote bg-[#F4F2EE] rounded-xl p-6 border-l-4 border-[#2F6BFF]">
                <p className="text-lg text-[#111111] font-medium">"{feeling}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day One Checklist */}
      <section ref={checklistRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">YOUR DAY-ONE CHECKLIST</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#111111] mb-4">
              Everything ready before you land.
            </h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">
              Behind-the-scenes support that ensures you arrive ready — not scrambling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((item, index) => (
              <div key={index} className="checklist-item bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2F6BFF] transition-colors">
                  <item.icon className="w-6 h-6 text-[#2F6BFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#111111] mb-2">{item.title}</h3>
                <p className="text-[#6D6A63] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">BANKING & FINANCE</p>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111] mb-6">
                Banked and ready from day one.
              </h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">
                We guide you through opening your Australian bank account before arrival, so you can transfer funds, receive salary, and make payments immediately.
              </p>
              <div className="bg-[#F4F2EE] rounded-xl p-6 mb-6">
                <p className="text-sm text-[#6D6A63] mb-2">Note</p>
                <p className="text-sm text-[#111111]">Banking information is general only and does not constitute financial advice under the Corporations Act 2001.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> Account opening guidance
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> ID requirements checklist
                </li>
                <li className="flex items-center gap-3 text-[#6D6A63]">
                  <Check className="w-5 h-5 text-[#2F6BFF]" /> International transfer setup
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/land_banking.jpg" 
                alt="Mobile banking setup" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-6 lg:px-12 bg-[#2F6BFF]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/70">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            You arrive ready — not scrambling.
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Your first week feels like a head start, not a catch-up. You're contactable, banked, compliant, and ready for work or school.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-[#2F6BFF] hover:bg-white/90">
            Prepare for Day One
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
