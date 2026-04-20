import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CreditCard, Smartphone, FileCheck, Bus, Shield, Mail, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Arrive() {
  const heroRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const feelingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.arrive-hero-text', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.arrive-hero-image', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.8)', delay: 0.2 });
      gsap.fromTo('.checklist-item', { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: checklistRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.feeling-quote', { x: 80, skewX: -5, opacity: 0 },
        { x: 0, skewX: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: feelingsRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const checklist = [
    { icon: CreditCard, title: 'Bank Activation Strategy', desc: 'Open your Australian account before you land — online, in advance, no branch visit needed.' },
    { icon: Smartphone, title: 'Mobile / eSIM', desc: 'Land with a working number. Your Australian SIM or eSIM, set up remotely before departure.' },
    { icon: FileCheck, title: 'TFN Guidance', desc: 'Your Tax File Number starts processing before Day One. You’re compliant from the start.' },
    { icon: Bus, title: 'Transport Cards', desc: 'Opal, Myki, Go Card — loaded and ready so you can move from the airport immediately.' },
    { icon: Shield, title: 'Health Insurance Explanation', desc: 'We walk you through your options clearly. You choose knowing the real trade-offs, not just the brochure.' },
    { icon: Mail, title: 'Mail Redirection', desc: 'Redirected so nothing important falls through the cracks during the chaos of the first few weeks.' },
    { icon: Package, title: 'Cargo Coordination Logic', desc: 'We help you time your shipment to match your accommodation — not the other way around.' },
  ];

  const feelings = [
    "My card doesn't work here. I have $80 cash and a jetlagged family.",
    "I've used 3 weeks of annual leave for this. I can't spend it queueing at a bank.",
    "My first day at work is Monday. I need to be contactable and compliant by Friday.",
    "The kids start school in 4 days. Every hour counts."
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 px-6 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="arrive-hero-image order-1 lg:order-1">
              <img src="/images/land_arrival.jpg" alt="Confident arrival at Australian airport" className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
            <div className="arrive-hero-text order-2 lg:order-2">
              <p className="eyebrow mb-6">A - ARRIVE</p>
              <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">
                Walk off that plane<br /><span className="text-[#50BE00]">like you've been here before.</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#6D6A63] mb-8 max-w-lg leading-relaxed">
                Your first 72 hours in a new country set the tone for everything that follows. We make sure yours go right — bank activated, phone working, TFN in progress, and a clear plan for the week ahead.
              </p>
              <Link to="/contact" className="btn-primary">Prepare for Day One<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={feelingsRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">YOUR CONCERNS</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">Because this is what arrival day actually feels like.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feelings.map((feeling, idx) => (
              <div key={idx} className="feeling-quote bg-[#F4F2EE] rounded-xl p-6 border-l-4 border-[#50BE00]">
                <p className="text-lg text-[#333333] font-medium">"{feeling}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={checklistRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">YOUR DAY-ONE CHECKLIST</p>
            <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-[#333333] mb-4">Everything sorted before you land.</h2>
            <p className="text-lg text-[#6D6A63] max-w-2xl mx-auto">We handle the setup so your first day is about exploring your new city — not standing in queues.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((item) => (
              <div key={item.title} className="checklist-item bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#50BE00]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#50BE00] transition-colors">
                  <item.icon className="w-6 h-6 text-[#50BE00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#333333] mb-2">{item.title}</h3>
                <p className="text-[#6D6A63] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">BANKING & FINANCE</p>
              <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-6">Your bank account opens before you land.</h2>
              <p className="text-lg text-[#6D6A63] mb-6 leading-relaxed">We walk you through opening your Australian account weeks in advance. By arrival day, your card works, your transfers are set up, and you can pay for anything the moment you step through customs.</p>
              <div className="bg-[#F4F2EE] rounded-xl p-6 mb-6">
                <p className="text-sm text-[#6D6A63] mb-2">Note</p>
                <p className="text-sm text-[#333333]">Banking information is general only and does not constitute financial advice under the Corporations Act 2001.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> Account opening guidance</li>
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> ID requirements checklist</li>
                <li className="flex items-center gap-3 text-[#6D6A63]"><Check className="w-5 h-5 text-[#50BE00]" /> International transfer setup</li>
              </ul>
            </div>
            <div><img src="/images/land_banking.jpg" alt="Mobile banking setup" className="rounded-2xl shadow-image w-full object-cover aspect-[4/3]" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">THE OUTCOME</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">Your first week should feel like a head start — not a catch-up session.</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Every hour you save in week one is an hour you spend actually building your Australian life — not recovering from the admin of arriving.</p>
          <Link to="/contact" className="btn-primary">Prepare for Day One<ArrowRight className="ml-2 w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
