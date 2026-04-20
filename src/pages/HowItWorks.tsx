import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Plane, Home, CheckCircle, Calendar, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-hero-text', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.timeline-line', { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: timelineRef.current, start: 'top 60%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.timeline-item', { x: -40, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 60%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.faq-item', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: faqRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const timeline = [
    { phase: 'D - Decide', title: 'Test Your Fit', icon: MessageSquare, description: 'Lifestyle consult, visa clarity, region shortlisting, school feasibility.', duration: 'Pre-departure' },
    { phase: 'A - Arrive', title: 'Day-One Ready', icon: Plane, description: 'Bank, mobile, TFN, transport cards, health insurance set before you land.', duration: 'Day 0' },
    { phase: 'S - Settle', title: 'Build Your Base', icon: Home, description: 'Suburb, accommodation, school, Medicare, resume, driving integration.', duration: '60-90 days' },
    { phase: 'H - Home', title: 'Ongoing Support', icon: CheckCircle, description: 'After settling, continued guidance for any new challenges or questions.', duration: 'As needed' }
  ];

  const faqs = [
    { question: 'How soon should I start?', answer: 'We recommend starting the Decide phase 3-6 months before your planned move. This gives us time to properly assess your visa pathway, location fit, and family needs.' },
    { question: 'Can I purchase packages individually?', answer: 'Yes. Many clients start with Decide, then add Arrive and Settle as their move approaches. We also offer bundles for better value.' },
    { question: 'What if my visa is still pending?', answer: 'You can start with Decide while your visa is being processed. It is often better to start early so you are fully prepared once granted.' },
    { question: 'How do check-ins work?', answer: 'Depending on your package, we schedule regular video calls or email updates to track progress, answer questions, and adjust the plan.' },
    { question: 'Do you work with employer-sponsored migrants?', answer: 'Yes, we work with all visa types including skilled independent, employer-sponsored, and family visa holders.' },
    { question: 'What if my circumstances change?', answer: 'We are flexible and can adjust your plan. Whether it is a delayed move or changed family situation, we adapt our support.' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center hiw-hero-text">
          <p className="eyebrow mb-6">HOW IT WORKS</p>
          <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">
            Your journey,<br /><span className="text-[#50BE00]">step by step.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">The D.A.S.H. framework: Decide, Arrive, Settle, Home.</p>
        </div>
      </section>

      <section ref={timelineRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">THE D.A.S.H. FRAMEWORK</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Four phases to your new life.</h2>
          </div>
          <div className="relative">
            <div className="timeline-line absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#50BE00]/20 origin-top"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.phase} className={index % 2 === 1 ? 'timeline-item relative flex items-start gap-8 lg:flex-row-reverse' : 'timeline-item relative flex items-start gap-8'}>
                  <div className="relative z-10 w-12 h-12 bg-[#50BE00] rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="bg-[#F4F2EE] rounded-xl p-6 inline-block">
                      <p className="text-sm text-[#50BE00] font-medium mb-1">{item.phase}</p>
                      <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">{item.title}</h3>
                      <p className="text-[#6D6A63] mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#6D6A63]">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-12 shrink-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Common questions answered.</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={'item-' + index} className="faq-item border border-[#333333]/10 rounded-xl px-6">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#6D6A63] pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">READY TO BEGIN?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">Start your journey today.</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">Book a free 15-minute consultation to discuss your timeline.</p>
          <Link to="/contact" className="btn-primary">
            <Calendar className="mr-2 w-5 h-5" />
            Book a Free Call
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}