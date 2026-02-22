import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Clock, Phone, Send, Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - slide up with fade
      gsap.fromTo('.contact-hero',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );

      // Form - slide in from right
      gsap.fromTo('.contact-form-container',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Info cards - staggered reveal
      gsap.fromTo('.info-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent! We\'ll reply within 1 business day.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@tooeazy.au',
      href: 'mailto:hello@tooeazy.au'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Australia-wide (remote-first)',
      href: null
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon–Thu 9am–6pm AEST',
      href: null
    },
    {
      icon: Phone,
      label: 'Response Time',
      value: 'Within 1 business day',
      href: null
    }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="contact-hero">
            <p className="eyebrow mb-6">CONTACT</p>
            <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
              Ready when<br />you are.
            </h1>
            <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
              Tell us your timeline. We'll reply within 1 business day with next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <img 
                src="/images/contact_support.jpg" 
                alt="Customer support team" 
                className="rounded-2xl shadow-image w-full object-cover aspect-video mb-8"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card bg-white rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2F6BFF]/10 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6D6A63] mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-[#111111] font-medium hover:text-[#2F6BFF] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#111111] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-form-container bg-white rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#111111] mb-3">Message Sent!</h3>
                  <p className="text-[#6D6A63]">We'll reply within 1 business day with next steps.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-2xl text-[#111111] mb-2">Send us a message</h3>
                  <p className="text-[#6D6A63] mb-6">Fill in the form below and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-[#111111]">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        className="bg-[#F4F2EE] border-0 mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#111111]">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-[#F4F2EE] border-0 mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="text-[#111111]">Current Location</Label>
                        <Input 
                          id="location" 
                          placeholder="City, Country" 
                          className="bg-[#F4F2EE] border-0 mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="arrival" className="text-[#111111]">Planned Arrival</Label>
                        <Input 
                          id="arrival" 
                          placeholder="e.g., March 2025" 
                          className="bg-[#F4F2EE] border-0 mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="visa-status" className="text-[#111111]">Visa Status</Label>
                      <Input 
                        id="visa-status" 
                        placeholder="e.g., Applied, Granted, Planning to apply" 
                        className="bg-[#F4F2EE] border-0 mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#111111]">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your move and what you need help with..." 
                        rows={4}
                        className="bg-[#F4F2EE] border-0 mt-1 resize-none"
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </button>

                    <p className="text-xs text-[#6D6A63] text-center">
                      By submitting, you agree to our <a href="/legal" className="text-[#2F6BFF] hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">WHAT TO EXPECT</p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111] mb-12">
            What happens after you reach out?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-[#2F6BFF]">1</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#111111] mb-2">We Respond</h3>
              <p className="text-[#6D6A63]">Within 1 business day, we'll reply with available times for a consultation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-[#2F6BFF]">2</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#111111] mb-2">Free Consultation</h3>
              <p className="text-[#6D6A63]">A 15-minute call to understand your needs and recommend the right package.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-[#2F6BFF]">3</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#111111] mb-2">Get Started</h3>
              <p className="text-[#6D6A63]">We begin working together with a clear plan and timeline.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
