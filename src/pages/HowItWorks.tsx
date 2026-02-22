import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ClipboardList, Plane, Home, CheckCircle, Calendar, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - split text effect simulation
      gsap.fromTo('.hiw-hero-text',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Timeline - draw line animation
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Timeline items - pop in
      gsap.fromTo('.timeline-item',
        { x: -40, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // FAQ - slide up
      gsap.fromTo('.faq-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const timeline = [
    {
      phase: 'Phase 1',
      title: 'Initial Consultation',
      icon: MessageSquare,
      description: 'We discuss your goals, timeline, and concerns. This free 15-minute call helps us understand where you are and what you need.',
      duration: '15 minutes'
    },
    {
      phase: 'Phase 2',
      title: 'Assessment & Planning',
      icon: ClipboardList,
      description: 'We assess your situation and create a customized plan. You receive a detailed roadmap with timelines and action items.',
      duration: '1-2 weeks'
    },
    {
      phase: 'Phase 3',
      title: 'Pre-Departure Preparation',
      icon: Plane,
      description: 'We work through the Decide and Land phases—visa clarity, banking setup, and all day-one essentials.',
      duration: '3-6 months'
    },
    {
      phase: 'Phase 4',
      title: 'Arrival & Settlement',
      icon: Home,
      description: 'From Day 0 onwards, we guide you through accommodation, schooling, job search, and full integration.',
      duration: '60-90 days'
    },
    {
      phase: 'Phase 5',
      title: 'Ongoing Support',
      icon: CheckCircle,
      description: 'Even after you\'re settled, we remain available for questions and additional guidance as needed.',
      duration: 'As needed'
    }
  ];

  const faqs = [
    {
      question: 'How soon should I start the process?',
      answer: 'We recommend starting the Decide phase 3–6 months before your planned move. This gives us time to properly assess your visa pathway, location fit, and family needs. However, we can work with tighter timelines if needed.'
    },
    {
      question: 'Can I purchase packages individually or do I need all three?',
      answer: 'You can purchase any package individually based on your needs. Many clients start with Decide, then add Land and Settle as their move approaches. We also offer customised packages if you need specific services.'
    },
    {
      question: 'What if my visa application is still pending?',
      answer: 'You can absolutely start with the Decide phase while your visa is being processed. In fact, it\'s often better to start early so you\'re fully prepared once your visa is granted.'
    },
    {
      question: 'How do the weekly check-ins work?',
      answer: 'Depending on your package, we schedule regular video calls or email updates to track progress, answer questions, and adjust the plan as needed. You\'ll always know what\'s next.'
    },
    {
      question: 'What happens if my circumstances change?',
      answer: 'Life happens! We\'re flexible and can adjust your plan as needed. Whether it\'s a delayed move, changed family situation, or new job opportunity, we adapt our support to match.'
    },
    {
      question: 'Do you work with employer-sponsored migrants?',
      answer: 'Yes, we work with all types of migrants including skilled independent, employer-sponsored, and family visa holders. Our services are tailored to your specific visa type and circumstances.'
    }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hiw-hero-text">
            <p className="eyebrow mb-6">HOW IT WORKS</p>
            <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
              Your journey,<br />step by step.
            </h1>
            <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
              A simple timeline, weekly check-ins, and a shared checklist—so you always know what's next.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">THE JOURNEY</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              Five phases to your new life.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#2F6BFF]/20 origin-top" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`timeline-item relative flex items-start gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 bg-[#2F6BFF] rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className={`bg-[#F4F2EE] rounded-xl p-6 inline-block ${index % 2 === 1 ? 'lg:text-left' : ''}`}>
                      <p className="text-sm text-[#2F6BFF] font-medium mb-1">{item.phase}</p>
                      <h3 className="font-heading font-bold text-xl text-[#111111] mb-2">{item.title}</h3>
                      <p className="text-[#6D6A63] mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#6D6A63]">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-12 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Image */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/images/howitworks_timeline.jpg" 
            alt="Journey timeline visualization" 
            className="rounded-2xl shadow-image w-full object-cover aspect-video"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              Common questions answered.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item border border-[#111111]/10 rounded-xl px-6">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6D6A63] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/60">READY TO BEGIN?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            Start your journey today.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your timeline and how we can help.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-[#111111] hover:bg-white/90">
            <Calendar className="mr-2 w-5 h-5" />
            Book a Free Call
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
