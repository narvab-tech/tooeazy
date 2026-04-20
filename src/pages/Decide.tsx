import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileText, MapPin, GraduationCap, Briefcase, Building, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Decide() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const audienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.decide-hero-text',
        { x: -80, y: 40, opacity: 0, rotate: -2 },
        { x: 0, y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo('.decide-hero-image',
        { x: 100, scale: 1.1, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.service-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.audience-card',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: audienceRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const services = [
    { icon: Users, title: 'Lifestyle Consult', description: 'An honest look at your current life vs what Australian life actually looks like. Not Instagram. Reality.' },
    { icon: FileText, title: 'Visa Consult (via MARA Partner)', description: 'Your pathway, risks, and timeline — explained clearly by a MARA partner. No vague reassurances, no overpromising.' },
    { icon: MapPin, title: 'Region & Suburb Shortlisting', description: 'We compare 10–15 locations against your commute, school zones, budget, and lifestyle. You get 2–3 real, researched targets.' },
    { icon: GraduationCap, title: 'School Feasibility', description: 'The zoning rules that catch parents by surprise. The waitlists nobody mentions until it’s too late. We map it all before you commit.' }
  ];

  const targetAudience = [
    { icon: Briefcase, title: 'Skilled Workers', description: 'Weighing Australia against Singapore, Canada, or the UK — and need an honest, unbiased comparison before you commit.' },
    { icon: Users, title: 'Families', description: 'The city matters less than the suburb. We help you find the right one for your kids\u2019 schools, your commute, and your life.' },
    { icon: Building, title: 'Employer-Sponsored Migrants', description: 'Your employer chose the city. We help you choose the right part of it — before you sign a lease.' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="decide-hero-text">
              <p className="eyebrow mb-6">D - DECIDE</p>
              <h1 className="font-heading font-bold text-[clamp(36px,5vw,64px)] text-[#333333] mb-6 leading-[1.1]">
                Before you spend a cent —<br /><span className="text-[#50BE00]">make sure you're moving right.</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                The suburb you choose shapes your kids' schools, your daily commute, your social circle. Most families make this call based on a Google search and a friend's recommendation. We go deeper — before you spend big.
              </p>
              <Link to="/contact" className="btn-primary">Check Your Readiness<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </div>
            <div className="decide-hero-image">
              <img src="/images/decide_consultation.jpg" alt="Professional consultation" className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT'S INCLUDED</p>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-[#333333] mb-4">Decide phase services</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">The research, honesty, and local knowledge you need before you commit to anything.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="service-item bg-[#F4F2EE] rounded-xl p-6 flex items-start gap-4 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-[#50BE00]/10 rounded-lg flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-[#50BE00]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-[#333333] mb-2">{service.title}</h3>
                  <p className="text-[#6D6A63]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={audienceRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">WHO THIS IS FOR</p>
              <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-[#333333] mb-6">The Decide phase is for people who want to get this right.</h2>
              <div className="space-y-4">
                {targetAudience.map((item) => (
                  <div key={item.title} className="audience-card bg-white rounded-xl p-5 flex items-start gap-4 shadow-card">
                    <div className="w-10 h-10 bg-[#50BE00]/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#50BE00]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-[#333333] mb-1">{item.title}</h3>
                      <p className="text-[#6D6A63] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div><img src="/images/decide_family.jpg" alt="Family exploring" className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]" /></div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-[#E6E0B8]/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-card">
            <AlertTriangle className="w-6 h-6 text-[#50BE00] shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-semibold text-lg text-[#333333] mb-2">Migration Advice Disclaimer</h3>
              <p className="text-[#6D6A63] leading-relaxed">Migration advice is provided only through or under the supervision of a MARA-registered agent. We never guarantee visa outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-white mb-6">Know before you go. No guesswork. No regrets.</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">You'll know exactly what life in Australia looks like for your family — before you spend a dollar on flights, visas, or a shipping container.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Check Your Readiness<ArrowRight className="ml-2 w-4 h-4" /></Link>
            <Link to="/packages" className="px-8 py-4 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
