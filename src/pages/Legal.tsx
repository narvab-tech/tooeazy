import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FileText, Scale, Building2, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Legal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.legal-hero', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.legal-card', { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const legalSections = [
    { icon: Shield, title: 'Migration & Visa Advice Disclaimer', area: 'Migration', statement: 'Migration advice provided only where MARA-registered. No outcomes guaranteed.',
      content: 'Migration and visa-related information is general information only and does not constitute legal advice unless explicitly provided by a Registered Migration Agent (MARA). No guarantee is made regarding visa outcomes or processing times.' },
    { icon: FileText, title: 'Financial & Insurance Information', area: 'Financial', statement: 'Banking and insurance information is general only.',
      content: 'Banking, insurance, and financial information forms part of settlement support only. It does not constitute financial advice under the Corporations Act 2001.' },
    { icon: Building2, title: 'Settlement Support Disclaimer', area: 'Settlement', statement: 'Housing, schooling and employment support is advisory only.',
      content: 'Settlement services are provided on a best-efforts advisory basis. No guarantee is made regarding availability, acceptance, rentals, school placements, or employment outcomes.' },
    { icon: Scale, title: 'Scope of Service', area: 'Scope', statement: 'Services are advisory/concierge and do not replace licensed professionals.',
      content: 'These services are administrative, advisory, and concierge-based. We guide you through your migration journey but recommend licensed professionals for specialized legal or financial advice.' },
    { icon: Lock, title: 'Privacy Policy', area: 'Privacy', statement: 'Compliant with Australian Privacy Act.',
      content: 'TooEazy complies with the Australian Privacy Act 1988. Information collected is used solely for providing our services. We do not share personal information without consent.' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center legal-hero">
          <p className="eyebrow mb-6">LEGAL & COMPLIANCE</p>
          <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">Transparency<br /><span className="text-[#50BE00]">and trust.</span></h1>
          <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">Clear communication about what we do, what we don't do, and how we protect your interests.</p>
        </div>
      </section>

      <section ref={contentRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">OUR COMMITMENTS</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Important information about our services.</h2>
          </div>
          <div className="space-y-8">
            {legalSections.map((section) => (
              <div key={section.title} className="legal-card bg-[#F4F2EE] rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#50BE00]/10 rounded-xl flex items-center justify-center shrink-0">
                    <section.icon className="w-7 h-7 text-[#50BE00]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading font-bold text-xl text-[#333333]">{section.title}</h3>
                      <span className="text-xs font-medium uppercase tracking-wider text-[#50BE00] bg-[#50BE00]/10 px-3 py-1 rounded-full">{section.area}</span>
                    </div>
                    <p className="text-[#333333] font-medium mb-4">{section.statement}</p>
                    <p className="text-[#6D6A63] leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#001450] rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#50BE00]/20 rounded-xl flex items-center justify-center shrink-0"><Shield className="w-8 h-8 text-[#50BE00]" /></div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4">MARA Registration</h3>
                <p className="text-white/80 leading-relaxed">Where migration advice is provided, it is delivered strictly within the scope of the consultant's MARA registration. This ensures visa-related guidance meets Australian law standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">QUESTIONS?</p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-6">We're here to clarify.</h2>
          <p className="text-lg text-[#6D6A63] mb-8 max-w-2xl mx-auto">If you have questions about our legal disclosures or the scope of our services, please reach out.</p>
          <a href="mailto:hello@tooeazy.au" className="btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
