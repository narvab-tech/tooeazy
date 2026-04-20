import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Check, Clock, Calendar, Info, Package, AlertCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

interface BookingFormErrors {
  name?: string;
  email?: string;
}

function BookingForm({ packageName }: Readonly<{ packageName: string }>) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<BookingFormErrors>({});

  const validate = (): boolean => {
    const newErrors: BookingFormErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    toast.success(`Booking request sent for ${packageName}! We'll contact you within 24 hours.`);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-[#50BE00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-[#50BE00]" />
        </div>
        <h3 className="font-heading font-bold text-xl text-[#333333] mb-2">Request Received!</h3>
        <p className="text-[#6D6A63] text-sm">We'll contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <Label htmlFor={`booking-name-${packageName}`} className="text-[#333333]">Name *</Label>
        <Input
          id={`booking-name-${packageName}`}
          value={name}
          onChange={e => { setName(e.target.value); if (errors.name) setErrors((p: BookingFormErrors) => ({...p, name: undefined})); }}
          placeholder="Your name"
          className={errors.name ? 'ring-2 ring-red-400' : ''}
        />
        {errors.name && <p className="flex items-center gap-1 text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4" />{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor={`booking-email-${packageName}`} className="text-[#333333]">Email *</Label>
        <Input
          id={`booking-email-${packageName}`}
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); if (errors.email) setErrors((p: BookingFormErrors) => ({...p, email: undefined})); }}
          placeholder="your@email.com"
          className={errors.email ? 'ring-2 ring-red-400' : ''}
        />
        {errors.email && <p className="flex items-center gap-1 text-red-500 text-sm mt-1"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor={`booking-phone-${packageName}`} className="text-[#333333]">Phone (optional)</Label>
        <Input
          id={`booking-phone-${packageName}`}
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="+61 ..."
        />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
        {loading ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Sending...</> : 'Request Booking'}
      </button>
    </form>
  );
}

export default function Packages() {
  const heroRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const bundlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.packages-hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      gsap.fromTo('.package-card', { rotateX: -30, y: 60, opacity: 0 },
        { rotateX: 0, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: packagesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
      gsap.fromTo('.bundle-card', { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: bundlesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const packages = [
    { name: 'DECIDE', price: '600-900', timeframe: 'Visa grant to 3 weeks prior', features: ['Lifestyle consult', 'Visa clarity (MARA-governed)', 'Location and family feasibility', 'Cost-of-living reality check', 'Schooling feasibility'], popular: false },
    { name: 'ARRIVE', price: '1,200-1,800', timeframe: '3 weeks to departure until Day 0', features: ['Bank activation strategy', 'Mobile / eSIM setup', 'TFN guidance', 'Transport cards', 'Health insurance explanation', 'Mail redirection guidance', 'Cargo coordination'], popular: true },
    { name: 'SETTLE', price: '2,000-2,800', timeframe: 'Day 0 + 72 hours onwards', features: ['Suburb and commute framework', 'Accommodation strategy', 'School and daycare deep strategy', 'Medicare setup', 'Resume and job-market alignment', 'Driving / car / licensing'], popular: false }
  ];

  const bundles = [
    { name: 'D.A.S. Bundle', desc: 'Decide + Arrive + Settle', price: '3,200-4,200', savings: 'Save up to $1,300' },
    { name: 'A.S. Combo', desc: 'Arrive + Settle', price: '2,800-3,600', savings: 'Save up to $1,000' }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center packages-hero-text">
          <p className="eyebrow mb-6">PACKAGES</p>
          <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#333333] mb-6 leading-[1.05]">
            Choose your level<br /><span className="text-[#50BE00]">of support.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
            Three phases to work with us so you only pay for what you need.
          </p>
        </div>
      </section>

      <section ref={packagesRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name} 
                className={pkg.popular ? 'package-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative ring-2 ring-[#50BE00]' : 'package-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative'}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#50BE00] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-2xl text-[#333333] mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#6D6A63]">AUD</span>
                    <span className="font-heading font-bold text-4xl text-[#50BE00]">${pkg.price}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-6 text-sm text-[#6D6A63]">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{pkg.timeframe}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#6D6A63]">
                      <Check className="w-4 h-4 text-[#50BE00] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className={pkg.popular ? 'w-full py-3 rounded-lg font-medium transition-colors bg-[#50BE00] text-white hover:bg-[#45a800]' : 'w-full py-3 rounded-lg font-medium transition-colors bg-[#F4F2EE] text-[#333333] hover:bg-[#E6E0B8]'}>
                      Get Started
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-heading font-bold text-2xl">Book {pkg.name} Package</DialogTitle>
                    </DialogHeader>
                    <p className="text-[#6D6A63] mb-4">Fill in your details and we will contact you within 24 hours.</p>
                    <BookingForm packageName={pkg.name} />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={bundlesRef} className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">BUNDLES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#333333]">
              Save with combined packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bundles.map((b) => (
              <div key={b.name} className="bundle-card bg-[#001450] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-[#50BE00]" />
                  <h3 className="font-heading font-bold text-2xl">{b.name}</h3>
                </div>
                <p className="text-white/70 mb-4">{b.desc}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-sm text-white/60">AUD</span>
                  <span className="font-heading font-bold text-3xl">${b.price}</span>
                  <span className="text-[#50BE00] text-sm font-medium">{b.savings}</span>
                </div>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Get Bundle Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-[#E6E0B8]/30 rounded-xl p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#50BE00] mt-0.5 shrink-0" />
          <div>
            <p className="text-[#333333] font-medium mb-1">Home phase and custom packages</p>
            <p className="text-[#6D6A63] text-sm">
              The H - Home phase (ongoing support after settling) is available as an add-on. 
              Custom requirements priced on application. <Link to="/contact" className="text-[#50BE00] hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#001450]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-[#E6E0B8]">READY TO START?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            Book a free discovery call
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            15 minutes to discuss which package fits your situation.
          </p>
          <Link to="/contact" className="btn-primary">
            <Calendar className="mr-2 w-5 h-5" />
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}