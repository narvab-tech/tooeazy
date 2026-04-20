import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Plane, Home, CheckCircle, Calendar, Clock, Check, Users, FileCheck, MapPin, CreditCard, Smartphone, GraduationCap, Briefcase, Heart, Star, Quote } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-hero-text', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.step-card', { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.detail-card', { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: detailsRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.journey-step', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: journeyRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.testimonial-card', { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: testimonialsRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.faq-item', { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: faqRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const steps = [
    { phase: 'D', title: 'Decide', icon: MessageSquare, color: '#50BE00', duration: 'Pre-departure', description: 'Test your fit before you commit' },
    { phase: 'A', title: 'Arrive', icon: Plane, color: '#50BE00', duration: 'Day 0', description: 'Land with essentials ready' },
    { phase: 'S', title: 'Settle', icon: Home, color: '#50BE00', duration: '60-90 days', description: 'Build your Australian base' },
    { phase: 'H', title: 'Home', icon: CheckCircle, color: '#50BE00', duration: 'Ongoing', description: 'Continued support as needed' }
  ];

  const phaseDetails = [
    {
      phase: 'D - DECIDE',
      title: 'Make the right move decision',
      timing: 'Visa grant to 3 weeks before departure',
      price: '$600-900 AUD',
      icon: MessageSquare,
      deliverables: [
        { icon: Users, text: 'Lifestyle consult (90 min deep-dive)' },
        { icon: FileCheck, text: 'Visa clarity via MARA partner' },
        { icon: MapPin, text: 'Region & suburb shortlist (2-3 targets)' },
        { icon: GraduationCap, text: 'School feasibility report' }
      ],
      outcome: "You'll know if Australia is right for you, and exactly where to target.",
      link: '/decide'
    },
    {
      phase: 'A - ARRIVE',
      title: 'Land with day-one readiness',
      timing: '3 weeks before departure to Day 0',
      price: '$1,200-1,800 AUD',
      icon: Plane,
      deliverables: [
        { icon: CreditCard, text: 'Bank account activated remotely' },
        { icon: Smartphone, text: 'Mobile/eSIM ready on landing' },
        { icon: FileCheck, text: 'TFN application guidance' },
        { icon: Heart, text: 'Health insurance explained & set up' }
      ],
      outcome: 'Your first week feels like a head start, not a scramble.',
      link: '/arrive'
    },
    {
      phase: 'S - SETTLE',
      title: 'Build long-term stability',
      timing: 'Day 0 + 72 hours onwards',
      price: '$2,000-2,800 AUD',
      icon: Home,
      deliverables: [
        { icon: Home, text: 'Suburb & accommodation strategy' },
        { icon: GraduationCap, text: 'School/daycare deep strategy' },
        { icon: Briefcase, text: 'Resume & job market alignment' },
        { icon: Heart, text: 'Medicare & driving license setup' }
      ],
      outcome: 'Smart choices now, fewer corrections later. Settled in 60-90 days.',
      link: '/settle'
    }
  ];

  const journeySteps = [
    { num: '1', title: 'Book a Call', desc: 'Free 15-minute consultation to understand your situation', time: 'Day 0' },
    { num: '2', title: 'Get Your Plan', desc: 'Receive a personalized roadmap based on your timeline', time: 'Day 1-2' },
    { num: '3', title: 'Start Decide', desc: 'Deep lifestyle consult, visa clarity, region research', time: 'Week 1-4' },
    { num: '4', title: 'Prepare to Arrive', desc: 'Bank, mobile, TFN, transport all ready before you land', time: 'Final 3 weeks' },
    { num: '5', title: 'Land & Settle', desc: 'Hit the ground running with your day-one checklist complete', time: 'Day 0+' },
    { num: '6', title: 'Feel at Home', desc: "Full settlement support until you're thriving", time: '60-90 days' }
  ];

  const comparisonData = [
    { feature: 'Pre-departure planning', decide: true, arrive: true, settle: true },
    { feature: 'Lifestyle consultation', decide: true, arrive: false, settle: false },
    { feature: 'Visa pathway clarity (MARA)', decide: true, arrive: false, settle: false },
    { feature: 'Region & suburb research', decide: true, arrive: false, settle: true },
    { feature: 'Bank account setup', decide: false, arrive: true, settle: false },
    { feature: 'Mobile/eSIM ready', decide: false, arrive: true, settle: false },
    { feature: 'TFN application guidance', decide: false, arrive: true, settle: false },
    { feature: 'School research & strategy', decide: true, arrive: false, settle: true },
    { feature: 'Accommodation strategy', decide: false, arrive: false, settle: true },
    { feature: 'Resume localization', decide: false, arrive: false, settle: true },
    { feature: 'Medicare & health setup', decide: false, arrive: true, settle: true }
  ];

  const testimonials = [
    { quote: "We went from overwhelmed to organized in weeks. The Decide phase alone saved us from choosing the wrong suburb.", author: "Priya & Rajan", role: "Software Engineers from India", rating: 5 },
    { quote: "I arrived and my bank card was waiting. My TFN was processing. I felt like I'd been here before.", author: "James Chen", role: "Finance Professional from Singapore", rating: 5 },
    { quote: "The school research alone was worth it. We found the perfect fit for our kids on the first try.", author: "Sarah & Tom Williams", role: "Family from UK", rating: 5 }
  ];

  const faqs = [
    { question: 'How soon should I start?', answer: "We recommend starting the Decide phase 3-6 months before your planned move. This gives us time to properly assess your visa pathway, location fit, and family needs. However, if you're closer to departure, we can adapt our approach." },
    { question: 'Can I purchase packages individually?', answer: "Absolutely. Many clients start with Decide, then add Arrive and Settle as their move approaches. We also offer bundles (D.A.S. Bundle saves up to $1,300) for better value." },
    { question: 'What if my visa is still pending?', answer: "You can start with Decide while your visa is being processed. It's often better to start early so you're fully prepared once granted. We'll work around your timeline." },
    { question: 'How do check-ins work?', answer: "Depending on your package, we schedule regular video calls (weekly or fortnightly) or email updates to track progress, answer questions, and adjust the plan. You're never left wondering what's next." },
    { question: 'Do you work with employer-sponsored migrants?', answer: "Yes, we work with all visa types including skilled independent (189/190), employer-sponsored (482/494), and family visa holders. Each has unique considerations we're familiar with." },
    { question: 'What if my circumstances change?', answer: "Life happens. We're flexible and can adjust your plan. Whether it's a delayed move, changed family situation, or new job offer, we adapt our support to match." },
    { question: 'Are you a migration agent?', answer: 'No. Migration advice is provided only through or under the supervision of a MARA-registered agent. We handle the life-building parts: suburb research, school strategy, settlement logistics.' },
    { question: 'What makes you different from relocation companies?', answer: 'Relocation companies move boxes. We architect lives. We start earlier (before you commit), go deeper (lifestyle fit, not just logistics), and stay longer (until you feel at home).' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center hiw-hero-text">
          <p className="eyebrow mb-6">HOW IT WORKS</p>
          <h1 className="font-heading font-bold text-[clamp(36px,5vw,64px)] text-[#333333] mb-6 leading-[1.1]">
            Stop surviving.<br /><span className="text-[#50BE00]">Start living.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed mb-8">
            The D.A.S.H. framework transforms your Australian visa into a life you actually love — with clarity at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              <Calendar className="mr-2 w-5 h-5" />
              Book a Free Call
            </Link>
            <Link to="/packages" className="btn-secondary">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Process Steps */}
      <section ref={stepsRef} className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">THE FRAMEWORK</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Four phases. One transformed life.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.phase} className="step-card relative">
                <div className="bg-[#F4F2EE] rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 bg-[#50BE00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-2xl text-white">{step.phase}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">{step.title}</h3>
                  <p className="text-[#6D6A63] text-sm mb-3">{step.description}</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-[#50BE00] font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{step.duration}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#50BE00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Phase Breakdown */}
      <section ref={detailsRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT YOU GET</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-4">Every phase, fully detailed.</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">Clear deliverables, clear outcomes, clear pricing. No surprises.</p>
          </div>
          <div className="space-y-8">
            {phaseDetails.map((phase) => (
              <div key={phase.phase} className="detail-card bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#50BE00]/10 rounded-xl flex items-center justify-center">
                        <phase.icon className="w-7 h-7 text-[#50BE00]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#50BE00] font-medium uppercase tracking-wider">{phase.phase}</p>
                        <h3 className="font-heading font-bold text-xl text-[#333333]">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-[#6D6A63]"><span className="font-medium text-[#333333]">When:</span> {phase.timing}</p>
                      <p className="text-sm"><span className="font-medium text-[#333333]">Investment:</span> <span className="text-[#50BE00] font-semibold">{phase.price}</span></p>
                    </div>
                    <Link to={phase.link} className="text-[#50BE00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-sm font-medium text-[#333333] mb-4">What you get:</p>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item) => (
                        <li key={item.text} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#50BE00]/10 rounded-lg flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-[#50BE00]" />
                          </div>
                          <span className="text-sm text-[#6D6A63] pt-1">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-1 flex items-center">
                    <div className="bg-[#F4F2EE] rounded-xl p-6 w-full">
                      <p className="text-sm font-medium text-[#333333] mb-2">The outcome:</p>
                      <p className="text-[#6D6A63] text-sm leading-relaxed">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section ref={journeyRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">YOUR JOURNEY</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-4">What to expect at each step.</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">From first call to feeling at home — here's how it unfolds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeySteps.map((step) => (
              <div key={step.num} className="journey-step bg-[#F4F2EE] rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#50BE00] rounded-full flex items-center justify-center text-white font-heading font-bold">
                  {step.num}
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-lg text-[#333333]">{step.title}</h3>
                    <span className="text-xs text-[#50BE00] font-medium">{step.time}</span>
                  </div>
                  <p className="text-[#6D6A63] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">COMPARE PACKAGES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-4">What's included in each phase?</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card overflow-hidden">
              <thead>
                <tr className="bg-[#001450] text-white">
                  <th className="text-left p-4 font-heading font-semibold">Feature</th>
                  <th className="text-center p-4 font-heading font-semibold">Decide<br /><span className="text-xs font-normal text-white/70">$600-900</span></th>
                  <th className="text-center p-4 font-heading font-semibold">Arrive<br /><span className="text-xs font-normal text-white/70">$1,200-1,800</span></th>
                  <th className="text-center p-4 font-heading font-semibold">Settle<br /><span className="text-xs font-normal text-white/70">$2,000-2,800</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F2EE]'}>
                    <td className="p-4 text-[#333333] text-sm">{row.feature}</td>
                    <td className="p-4 text-center">{row.decide ? <Check className="w-5 h-5 text-[#50BE00] mx-auto" /> : <span className="text-[#ccc]">—</span>}</td>
                    <td className="p-4 text-center">{row.arrive ? <Check className="w-5 h-5 text-[#50BE00] mx-auto" /> : <span className="text-[#ccc]">—</span>}</td>
                    <td className="p-4 text-center">{row.settle ? <Check className="w-5 h-5 text-[#50BE00] mx-auto" /> : <span className="text-[#ccc]">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/packages" className="btn-primary">
              See Full Package Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">CLIENT STORIES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-4">Real families. Real results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="testimonial-card bg-[#F4F2EE] rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#50BE00] text-[#50BE00]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#50BE00]/30 mb-3" />
                <p className="text-[#333333] mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-[#333333]">{testimonial.author}</p>
                  <p className="text-sm text-[#6D6A63]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Got questions? We've got answers.</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={'item-' + index} className="faq-item border border-[#333333]/10 rounded-xl px-6 bg-white">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-base hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#6D6A63] pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">READY TO BEGIN?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">Your Australian life starts with a conversation.</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call. No pressure, no obligation — just clarity on your next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              <Calendar className="mr-2 w-5 h-5" />
              Book a Free Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/packages" className="px-8 py-4 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}