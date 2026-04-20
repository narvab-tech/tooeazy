import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Clock, Phone, Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

interface ContactFormData {
  name: string;
  email: string;
  location: string;
  arrival: string;
  visaStatus: string;
  message: string;
  honeypot: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', location: '', arrival: '', visaStatus: '', message: '', honeypot: ''
  });

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id === 'visa-status' ? 'visaStatus' : id;
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[id as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Honeypot spam check
    if (!validate()) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent! We'll reply within 1 business day.");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      gsap.fromTo('.contact-form-container', { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: formRef.current, start: 'top 70%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.info-card', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: formRef.current, start: 'top 60%', toggleActions: 'play none none reverse' } }
      );
    });
    return () => ctx.revert();
  }, []);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@tooeazy.au', href: 'mailto:hello@tooeazy.au' },
    { icon: MapPin, label: 'Location', value: 'Australia-wide (remote-first)', href: null },
    { icon: Clock, label: 'Availability', value: 'Mon-Thu 9am-6pm AEST', href: null },
    { icon: Phone, label: 'Response Time', value: 'Within 1 business day', href: null }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center contact-hero">
          <p className="eyebrow mb-6">CONTACT</p>
          <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">
            Ready when<br /><span className="text-[#50BE00]">you are.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
            Tell us where you are in the journey. We'll tell you exactly how we can help — and what working together would look like.
          </p>
        </div>
      </section>

      <section ref={formRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img src="/images/contact_support.jpg" alt="Customer support team" className="rounded-2xl shadow-image w-full object-cover aspect-video mb-8" loading="lazy" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="info-card bg-white rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#50BE00]/10 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-[#50BE00]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6D6A63] mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-[#333333] font-medium hover:text-[#50BE00] transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-[#333333] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-container bg-white rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#50BE00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-[#50BE00]" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#333333] mb-3">Message Sent!</h3>
                  <p className="text-[#6D6A63]">We'll reply within 1 business day with next steps.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-2xl text-[#333333] mb-2">Tell us about your move</h3>
                  <p className="text-[#6D6A63] mb-6">A few details and we'll come back to you with honest, practical next steps.</p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Honeypot - hidden from real users */}
                    <input
                      type="text"
                      id="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="absolute opacity-0 h-0 w-0 pointer-events-none"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />
                    <div>
                      <Label htmlFor="name" className="text-[#333333]">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`bg-[#F4F2EE] border-0 mt-1 ${errors.name ? 'ring-2 ring-red-400' : ''}`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-red-500 text-sm mt-1">
                          <AlertCircle className="w-4 h-4" />{errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#333333]">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`bg-[#F4F2EE] border-0 mt-1 ${errors.email ? 'ring-2 ring-red-400' : ''}`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-500 text-sm mt-1">
                          <AlertCircle className="w-4 h-4" />{errors.email}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="text-[#333333]">Current Location</Label>
                        <Input id="location" value={formData.location} onChange={handleChange} placeholder="City, Country" className="bg-[#F4F2EE] border-0 mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="arrival" className="text-[#333333]">Planned Arrival</Label>
                        <Input id="arrival" value={formData.arrival} onChange={handleChange} placeholder="e.g., June 2026" className="bg-[#F4F2EE] border-0 mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="visa-status" className="text-[#333333]">Visa Status</Label>
                      <Input id="visa-status" value={formData.visaStatus} onChange={handleChange} placeholder="e.g., Applied, Granted, Planning" className="bg-[#F4F2EE] border-0 mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#333333]">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your move..."
                        rows={4}
                        className={`bg-[#F4F2EE] border-0 mt-1 resize-none ${errors.message ? 'ring-2 ring-red-400' : ''}`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-red-500 text-sm mt-1">
                          <AlertCircle className="w-4 h-4" />{errors.message}
                        </p>
                      )}
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
                      {loading ? (
                        <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Sending...</>
                      ) : (
                        <><Send className="mr-2 w-4 h-4" />Send Message</>
                      )}
                    </button>
                    <p className="text-xs text-[#6D6A63] text-center">
                      By submitting, you agree to our <a href="/legal" className="text-[#50BE00] hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">WHAT TO EXPECT</p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333] mb-12">
            What happens after you reach out?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'We Respond', desc: "You hear from us within 1 business day. No auto-replies, no waiting rooms." },
              { num: '2', title: 'Free Consultation', desc: 'A real 15-minute conversation — not a sales pitch. We listen first, then tell you honestly if we can help.' },
              { num: '3', title: 'Get Started', desc: "If it's a good fit, we build your plan together. If it's not, we'll tell you honestly." }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-[#50BE00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-2xl text-[#50BE00]">{step.num}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#333333] mb-2">{step.title}</h3>
                <p className="text-[#6D6A63]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

