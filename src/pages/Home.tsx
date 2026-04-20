import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Plane, Home as HomeIcon, Phone, HelpCircle, Shield, Package, Star, Quote, Users, Award, MessageSquare } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const avoidRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo('.hero-content',
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.hero-image',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );

      // Questions cards
      gsap.fromTo('.question-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: questionsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Value props
      gsap.fromTo('.value-content',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valueRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Framework cards
      gsap.fromTo('.framework-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: frameworkRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Avoid cards
      gsap.fromTo('.avoid-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: avoidRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Testimonials
      gsap.fromTo('.testimonial-card',
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // FAQ
      gsap.fromTo('.home-faq-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const keyQuestions = [
    { icon: HelpCircle, question: "We've landed. The kids are jet-lagged. Where do we even begin?" },
    { icon: HelpCircle, question: "What if we chose the wrong suburb? The wrong school zone?" },
    { icon: HelpCircle, question: "How long until this actually feels like home?" },
  ];

  const avoidPoints = [
    { text: "Catch the suburb-to-school mismatch before you sign a lease." },
    { text: "Cut through the 8-week admin fog that follows most arrivals." },
    { text: "Know if Australia truly fits your family — before the big spend." },
  ];

  const testimonials = [
    { quote: "We were about to sign a lease in a suburb 40 minutes from our kids' school zone. The Decide phase caught it. TooEazy saved us from a relocation we never saw coming.", author: "Priya & Rajan", role: "Software Engineers, from India", rating: 5 },
    { quote: "Day one: I landed, opened my banking app, and my card worked instantly. TFN already processing. I'd never been to Australia before — but I moved through customs like I'd lived here for years.", author: "James Chen", role: "Finance Professional, from Singapore", rating: 5 },
    { quote: "Two families we know moved to Australia the same month as us — without TooEazy. Both have already relocated once. We're still in our first suburb, 18 months in.", author: "Sarah & Tom", role: "Healthcare workers, from UK", rating: 5 }
  ];

  const trustStats = [
    { icon: Users, value: '500+', label: 'Families helped' },
    { icon: Award, value: '95%', label: 'Settled within 90 days' },
    { icon: MessageSquare, value: '4.9/5', label: 'Client satisfaction' },
    { icon: Star, value: '60-90', label: 'Days to feel at home' }
  ];

  const homeFaqs = [
    { question: 'Is TooEazy a migration agent?', answer: 'No. Migration advice is given only through or under the supervision of a MARA-registered agent. We handle the life-building parts: suburb research, school strategy, banking setup, and settlement logistics.' },
    { question: 'When should I start?', answer: 'Ideally 3-6 months before your planned move. But even if you\'re leaving in 3 weeks, we can still make a material difference — we\'ll adapt to your timeline.' },
    { question: 'What if I only need one phase?', answer: 'That\'s fine. Packages are sold individually. Start with Decide. Add Arrive as your move approaches. Add Settle once you land. Or bundle all three for savings.' },
    { question: 'Do you work with all visa types?', answer: 'Yes — skilled independent (189/190), employer-sponsored (482/494), family visas, and more. Each visa type has different constraints we know well.' },
    { question: 'What cities do you cover?', answer: 'Sydney, Melbourne, Brisbane, Perth, Adelaide, and regional areas. We\'ve helped families settle in all major cities and know the suburb differences in each.' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="hero-content">
              <p className="eyebrow mb-6">DECIDE / ARRIVE / SETTLE / HOME</p>
              <h1 className="font-heading font-bold text-[clamp(36px,5vw,64px)] text-[#333333] mb-6 leading-[1.1]">
                You've earned your visa.<br />
                <span className="text-[#50BE00]">Now build the life</span> that comes with it.
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-4 max-w-lg leading-relaxed">
                Moving to Australia is one decision. The 200 smaller ones that follow — suburb, school zone, bank, job market — that's where families lose months and momentum.
              </p>
              <p className="text-base text-[#6D6A63] mb-8 max-w-lg">
                TooEazy cuts through the complexity so you arrive ready, settle faster, and build a life that actually fits.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Book your free consult — 15 minutes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/packages" className="btn-secondary">
                  See packages
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#6D6A63]">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Visa clarity
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Banking & phone
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Home, school & job
                </span>
              </div>
            </div>
            <div className="hero-image relative">
              <img 
                src="/images/home_hero.jpg" 
                alt="Family planning their move to Australia with Sydney skyline" 
                className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-card hidden lg:block">
                <p className="text-sm text-[#6D6A63] mb-1">Faster Progress</p>
                <p className="font-heading font-bold text-2xl text-[#50BE00]">Up to 3x</p>
                <p className="text-xs text-[#6D6A63]">more efficient settlement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Questions Section */}
      <section ref={questionsRef} className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">SOUND FAMILIAR?</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">
              Every migrant asks these questions at 2am.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyQuestions.map((item, index) => (
              <div key={index} className="question-card bg-[#F4F2EE] rounded-xl p-6 flex items-center gap-4 border-l-4 border-[#50BE00]">
                <item.icon className="w-8 h-8 text-[#50BE00] shrink-0" />
                <p className="text-lg text-[#333333] font-medium">"{item.question}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section ref={valueRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="value-content">
              <p className="eyebrow mb-4">WHY TOOEAZY?</p>
              <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-[#333333] mb-6">
                A life architect,<br />not a relocation helper.
              </h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">
                Most services help you move.<strong className="text-[#333333]"> We help you move well.</strong> The difference is measured in months of lost time, thousands in avoidable mistakes, and the quiet weight of landing in the wrong place.
              </p>
              <p className="text-base text-[#6D6A63] mb-8 leading-relaxed">
                We work alongside your migration agent and licensed professionals — cutting through complexity, avoiding the traps, and closing the gap between arriving and actually living here.
              </p>
              <Link to="/how-it-works" className="btn-primary">
                See how it works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div ref={avoidRef} className="space-y-4">
              {avoidPoints.map((point, index) => (
                <div key={index} className="avoid-card bg-white rounded-xl p-6 flex items-center gap-4 shadow-card">
                  <div className="w-12 h-12 bg-[#50BE00]/10 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#50BE00]" />
                  </div>
                  <p className="text-lg text-[#333333] font-medium">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D.A.S.H Framework Overview */}
      <section ref={frameworkRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">THE D.A.S.H FRAMEWORK</p>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-[#333333] mb-4">
              Decide. Arrive. Settle. Home.
            </h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">
              Four phases. Each one removes a layer of stress, risk, and guesswork from your migration journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Decide Card */}
            <div className="framework-card bg-[#F4F2EE] rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#50BE00]/10 rounded-xl flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#50BE00]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">D - Decide</h3>
              <p className="text-[#6D6A63] mb-4 text-sm leading-relaxed">
                Test whether Australia truly fits before you invest in visas, flights, and shipping.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Lifestyle consult
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Visa clarity (MARA)
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Region shortlist
                </li>
              </ul>
              <Link to="/decide" className="text-[#50BE00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Arrive Card */}
            <div className="framework-card bg-[#F4F2EE] rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#50BE00]/10 rounded-xl flex items-center justify-center mb-5">
                <Plane className="w-6 h-6 text-[#50BE00]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">A - Arrive</h3>
              <p className="text-[#6D6A63] mb-4 text-sm leading-relaxed">
                Land with your bank, phone, TFN, and transport sorted. Walk off that plane ready.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Bank setup
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Mobile & eSIM
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> TFN & transport
                </li>
              </ul>
              <Link to="/arrive" className="text-[#50BE00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Settle Card */}
            <div className="framework-card bg-[#F4F2EE] rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#50BE00]/10 rounded-xl flex items-center justify-center mb-5">
                <HomeIcon className="w-6 h-6 text-[#50BE00]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">S - Settle</h3>
              <p className="text-[#6D6A63] mb-4 text-sm leading-relaxed">
                Schools, suburbs, healthcare, career. Built right the first time — not corrected six months later.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Suburb strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> School & daycare
                </li>
                <li className="flex items-center gap-2 text-sm text-[#6D6A63]">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Resume & jobs
                </li>
              </ul>
              <Link to="/settle" className="text-[#50BE00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Home Bundle Card */}
            <div className="framework-card bg-[#001450] rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#50BE00]/20 rounded-xl flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-[#50BE00]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">H - Home Bundle</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                From 'should we move?' to 'this is home.' Everything in one package.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Full D.A.S.H path
                </li>
                <li className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Priority support
                </li>
                <li className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 text-[#50BE00]" /> Extended guidance
                </li>
              </ul>
              <Link to="/packages" className="text-[#50BE00] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                See bundle <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-card">
                <stat.icon className="w-8 h-8 text-[#50BE00] mx-auto mb-3" />
                <p className="font-heading font-bold text-3xl md:text-4xl text-[#50BE00] mb-2">{stat.value}</p>
                <p className="text-[#6D6A63] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">CLIENT STORIES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-[#333333] mb-4">Real families. Real results.</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">Families who moved with a plan. Here's what the difference looked like.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="testimonial-card bg-[#F4F2EE] rounded-2xl p-7 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {new Array(t.rating).fill(null).map((_, i) => (
                    <Star key={`star-${t.author}-${i}`} className="w-5 h-5 fill-[#50BE00] text-[#50BE00]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#50BE00]/20 mb-3" />
                <p className="text-[#333333] leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="border-t border-[#333333]/10 pt-4">
                  <p className="font-heading font-semibold text-[#333333]">{t.author}</p>
                  <p className="text-sm text-[#6D6A63]">{t.role}</p>
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
            <p className="eyebrow mb-4">QUICK ANSWERS</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-4">The questions people ask before they start.</h2>
            <p className="text-[#6D6A63]">Real questions. Honest answers.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={'faq-' + index} className="home-faq-item border border-[#333333]/10 rounded-xl px-6 bg-white">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-base hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#6D6A63] pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="text-[#50BE00] font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all">
              See full FAQ on How It Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">READY TO START?</p>
          <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] text-white mb-6">
            Your Australian life is waiting. Let's build it right.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            The first conversation is free. No pitch, no pressure — just honest clarity on what your move looks like.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            <Phone className="mr-2 w-5 h-5" />
            Book a Free Consult
          </Link>
        </div>
      </section>
    </div>
  );
}
