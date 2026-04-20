import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Home, GraduationCap, Briefcase, Heart, Car } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Settle() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.settle-hero-text', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.settle-hero-image', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.1 });
      gsap.to('.settle-hero-image img', { yPercent: 20, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
      });
      gsap.fromTo('.service-card', { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.inOut',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const serviceGroups = [
    { category: 'Housing', icon: Home, items: ['Suburb & Commute Framework', 'Temporary Accommodation Strategy', 'Rental Application Guidance'] },
    { category: 'School / Daycare', icon: GraduationCap, items: ['School Research & Shortlisting', 'Enrolment Procedures', 'Daycare Options'] },
    { category: 'Healthcare', icon: Heart, items: ['Medicare Registration Guidance', 'GP & Specialist Finding', 'Private Health Explanation'] },
    { category: 'Driving / Transport', icon: Car, items: ['License Transfer Steps', 'Car Purchase Checklist', 'Public Transport Setup'] },
    { category: 'Career', icon: Briefcase, items: ['Resume Localisation', 'LinkedIn Optimisation', 'Job Market Research'] },
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="settle-hero-text">
              <p className="eyebrow mb-6">S - SETTLE</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">
                Settle without<br /><span className="text-[#50BE00]">the costly detours.</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                Long-term stability: suburb, accommodation, schooling, jobs, and Medicare. From Day 0 + 72 hours, and beyond.
              </p>
              <Link to="/contact" className="btn-primary">Plan Your Settlement<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </div>
            <div className="settle-hero-image relative overflow-hidden rounded-2xl">
              <img src="/images/settle_home.jpg" alt="Family settling into new Australian home" className="w-full object-cover aspect-[4/3] scale-110" />
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">FULL SETTLEMENT SUPPORT</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#333333] mb-4">Everything for long-term stability.</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">Smart choices now, fewer corrections later.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceGroups.map((group) => (
              <div key={group.category} className="service-card bg-[#F4F2EE] rounded-xl p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-[#50BE00]/10 rounded-lg flex items-center justify-center mb-4">
                  <group.icon className="w-6 h-6 text-[#50BE00]" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#333333] mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#6D6A63] text-sm">
                      <Check className="w-4 h-4 text-[#50BE00] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><img src="/images/settle_career.jpg" alt="Career preparation" className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]" /></div>
            <div>
              <p className="eyebrow mb-4">CAREER SUPPORT</p>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-6">Ready to work. Connected to opportunity.</h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">Resume aligned to local standards, LinkedIn tuned for your market, and a shortlist of roles and recruiters—before you arrive.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> Australian resume format</li>
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> LinkedIn optimization</li>
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> Job market research</li>
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> Recruiter connections</li>
              </ul>
              <div className="bg-[#E6E0B8]/30 rounded-xl p-4">
                <p className="text-sm text-[#6D6A63]">Note: Employment support is advisory and best-efforts only. No guarantee of job outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">Smart choices now, fewer corrections later.</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">Most clients feel 'settled' within 60-90 days—because the groundwork is done before the plane lands.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Plan Your Settlement<ArrowRight className="ml-2 w-4 h-4" /></Link>
            <Link to="/packages" className="px-8 py-4 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
