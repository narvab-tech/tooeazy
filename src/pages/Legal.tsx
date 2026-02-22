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
      // Hero - fade in with slight zoom
      gsap.fromTo('.legal-hero',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Content cards - staggered fade up
      gsap.fromTo('.legal-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const legalSections = [
    {
      icon: Shield,
      title: 'Migration & Visa Advice Disclaimer',
      area: 'Migration',
      statement: 'Migration advice provided only where MARA-registered. No outcomes guaranteed.',
      content: `Migration and visa-related information provided as part of these services is general information only and does not constitute legal advice unless explicitly provided by a Registered Migration Agent (MARA) under a separate written agreement.

Where migration advice is provided, it is delivered strictly within the scope of the consultant's MARA registration. No guarantee is made regarding visa outcomes, processing times, or government decisions.`
    },
    {
      icon: FileText,
      title: 'Financial & Insurance Information Disclaimer',
      area: 'Financial',
      statement: 'Banking and insurance information is general only and not financial advice.',
      content: `Banking, insurance, and financial information provided forms part of a settlement and administrative support service only. It does not constitute financial advice, credit advice, or insurance advice under the Corporations Act 2001.

Clients are responsible for selecting financial products and should seek advice from a licensed financial adviser or insurer where required.`
    },
    {
      icon: Building2,
      title: 'Settlement, Housing & Education Disclaimer',
      area: 'Settlement',
      statement: 'Housing, schooling and employment support is advisory and best-efforts only.',
      content: `Settlement services (including accommodation guidance, schooling/daycare strategy, employment readiness, and transport support) are provided on a best-efforts advisory basis only.

No guarantee is made regarding availability, acceptance, waitlists, rental approvals, school placements, employment outcomes, or third-party service delivery, as these are subject to external providers and market conditions.`
    },
    {
      icon: Scale,
      title: 'Scope of Service Clause',
      area: 'Scope',
      statement: 'Services are advisory/concierge and do not replace licensed professionals.',
      content: `These services are administrative, advisory, and concierge-based. The consultant does not act as an employer, education provider, insurer, bank, real estate agent (unless separately licensed), or government authority.

Our role is to provide guidance, information, and support to help you navigate your migration journey. For specialized legal, financial, or professional advice, we will always recommend consulting with appropriately licensed professionals.`
    },
    {
      icon: Lock,
      title: 'Privacy Policy',
      area: 'Privacy',
      statement: 'Compliant with Australian Privacy Act; client data handled securely.',
      content: `TooEazy is committed to protecting your privacy. We comply with the Australian Privacy Act 1988 and handle all client data securely.

Information collected is used solely for the purpose of providing our services. We do not share your personal information with third parties without your consent, except where required by law.

All data is stored securely and access is limited to authorized personnel only. You have the right to access, correct, or delete your personal information at any time.`
    }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="legal-hero">
            <p className="eyebrow mb-6">LEGAL & COMPLIANCE</p>
            <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
              Transparency<br />and trust.
            </h1>
            <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
              We're committed to clear communication about what we do, what we don't do, and how we protect your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/images/legal_trust.jpg" 
            alt="Trust and partnership" 
            className="rounded-2xl shadow-image w-full object-cover aspect-video"
          />
        </div>
      </section>

      {/* Legal Content */}
      <section ref={contentRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">OUR COMMITMENTS</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              Important information about our services.
            </h2>
          </div>

          <div className="space-y-8">
            {legalSections.map((section, index) => (
              <div key={index} className="legal-card bg-[#F4F2EE] rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#2F6BFF]/10 rounded-xl flex items-center justify-center shrink-0">
                    <section.icon className="w-7 h-7 text-[#2F6BFF]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading font-bold text-xl text-[#111111]">{section.title}</h3>
                      <span className="text-xs font-medium uppercase tracking-wider text-[#2F6BFF] bg-[#2F6BFF]/10 px-3 py-1 rounded-full">
                        {section.area}
                      </span>
                    </div>
                    <p className="text-[#111111] font-medium mb-4">{section.statement}</p>
                    <div className="text-[#6D6A63] whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARA Registration */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2F6BFF] rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4">MARA Registration</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Where migration advice is provided, it is delivered strictly within the scope of the consultant's MARA (Migration Agents Registration Authority) registration.
                </p>
                <p className="text-white/80 leading-relaxed">
                  This ensures that any visa-related guidance meets the professional standards required by Australian law. For complex visa matters, we work with registered migration agents or can refer you to appropriate legal professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">QUESTIONS?</p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111] mb-6">
            We're here to clarify.
          </h2>
          <p className="text-lg text-[#6D6A63] mb-8 max-w-2xl mx-auto">
            If you have any questions about our legal disclosures, privacy practices, or the scope of our services, please don't hesitate to reach out.
          </p>
          <a href="mailto:hello@tooeazy.au" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
