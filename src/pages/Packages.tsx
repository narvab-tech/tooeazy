import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Check, Clock, Calendar, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export default function Packages() {
  const heroRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - text reveal character by character effect
      gsap.fromTo('.packages-hero-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );

      // Package cards - 3D flip reveal
      gsap.fromTo('.package-card',
        { rotateX: -30, y: 60, opacity: 0 },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: packagesRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request sent! We\'ll contact you within 24 hours.');
  };

  const packages = [
    {
      name: 'DECIDE',
      price: '600–900',
      priceNote: 'AUD',
      timeframe: 'From Visa grant to 3 weeks prior to departure',
      features: [
        'Lifestyle consult',
        'Visa clarity (MARA-governed)',
        'Location & family feasibility',
        'Cost-of-living reality check',
        'City vs region suitability',
        'Schooling feasibility (high level)'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'LAND',
      price: '1,200–1,800',
      priceNote: 'AUD',
      timeframe: 'From 3 weeks to departure until arrival (day 0)',
      features: [
        'Bank activation strategy',
        'Mobile number / eSIM setup',
        'TFN guidance',
        'Transport cards (Opal etc.)',
        'Health insurance explanation',
        'Mail redirection guidance',
        'Cargo coordination logic'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'SETTLE',
      price: '2,000–2,800',
      priceNote: 'AUD',
      timeframe: 'Day 0 + 72 hours, and beyond',
      features: [
        'Suburb & commute framework',
        'Temporary → permanent accommodation strategy',
        'School & daycare deep strategy',
        'Medicare setup guidance',
        'Resume & job-market alignment',
        'Transport mastery',
        'Driving / car / licensing guidance',
        'Family orientation support'
      ],
      cta: 'Get Started',
      popular: false
    }
  ];

  return (
    <div className="bg-[#F4F2EE]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="packages-hero-text">
            <p className="eyebrow mb-6">PACKAGES</p>
            <h1 className="font-heading font-bold text-[clamp(40px,6vw,72px)] text-[#111111] mb-6 leading-[1.05]">
              Choose your level<br />of support.
            </h1>
            <p className="text-lg lg:text-xl text-[#6D6A63] max-w-2xl mx-auto leading-relaxed">
              Three ways to work with us—so you only pay for what you need. Each package is designed to guide you through a specific phase of your migration journey.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section ref={packagesRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`package-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative ${pkg.popular ? 'ring-2 ring-[#2F6BFF]' : ''}`}
                style={{ perspective: '1000px' }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2F6BFF] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-2xl text-[#111111] mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-4xl text-[#2F6BFF]">AUD ${pkg.price}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6 text-sm text-[#6D6A63]">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{pkg.timeframe}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-[#6D6A63]">
                      <Check className="w-4 h-4 text-[#2F6BFF] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className={`w-full py-3 rounded-full font-medium transition-colors ${pkg.popular ? 'bg-[#2F6BFF] text-white hover:bg-[#2556CC]' : 'border-2 border-[#2F6BFF] text-[#2F6BFF] hover:bg-[#2F6BFF] hover:text-white'}`}>
                      {pkg.cta}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-heading font-bold text-2xl">Book {pkg.name} Package</DialogTitle>
                    </DialogHeader>
                    <p className="text-[#6D6A63] mb-4">Fill in your details and we'll contact you within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor={`${pkg.name}-name`}>Name</Label>
                        <Input id={`${pkg.name}-name`} placeholder="Your name" />
                      </div>
                      <div>
                        <Label htmlFor={`${pkg.name}-email`}>Email</Label>
                        <Input id={`${pkg.name}-email`} type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor={`${pkg.name}-phone`}>Phone</Label>
                        <Input id={`${pkg.name}-phone`} placeholder="+61 ..." />
                      </div>
                      <button type="submit" className="btn-primary w-full">Request Booking</button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>

          {/* Custom packages note */}
          <div className="mt-12 bg-white rounded-xl p-6 flex items-start gap-4">
            <Info className="w-5 h-5 text-[#2F6BFF] mt-0.5 shrink-0" />
            <div>
              <p className="text-[#111111] font-medium mb-1">Customised packages available</p>
              <p className="text-[#6D6A63] text-sm">Need something specific? Charges will be priced on application. <Link to="/contact" className="text-[#2F6BFF] hover:underline">Contact us</Link> to discuss your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">COMPARE PACKAGES</p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-[#111111]">
              What's included in each phase?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#111111]">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#111111]">Service</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-[#111111]">DECIDE</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-[#111111]">LAND</th>
                  <th className="text-center py-4 px-4 font-heading font-semibold text-[#111111]">SETTLE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Lifestyle Consult', decide: true, land: false, settle: false },
                  { service: 'Visa Consult (MARA)', decide: true, land: false, settle: false },
                  { service: 'Region / Suburb Strategy', decide: true, land: false, settle: true },
                  { service: 'School Feasibility', decide: true, land: false, settle: true },
                  { service: 'Bank Setup Guidance', decide: false, land: true, settle: false },
                  { service: 'Mobile / eSIM', decide: false, land: true, settle: false },
                  { service: 'TFN Guidance', decide: false, land: true, settle: false },
                  { service: 'Transport Cards', decide: false, land: true, settle: false },
                  { service: 'Health Insurance', decide: false, land: true, settle: false },
                  { service: 'Accommodation Strategy', decide: false, land: false, settle: true },
                  { service: 'Schooling / Daycare Strategy', decide: false, land: false, settle: true },
                  { service: 'Medicare Guidance', decide: false, land: false, settle: true },
                  { service: 'Resume / Jobs', decide: false, land: false, settle: true },
                  { service: 'Driving / Car', decide: false, land: false, settle: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-[#111111]/10">
                    <td className="py-3 px-4 text-[#6D6A63]">{row.service}</td>
                    <td className="text-center py-3 px-4">{row.decide && <Check className="w-5 h-5 text-[#2F6BFF] mx-auto" />}</td>
                    <td className="text-center py-3 px-4">{row.land && <Check className="w-5 h-5 text-[#2F6BFF] mx-auto" />}</td>
                    <td className="text-center py-3 px-4">{row.settle && <Check className="w-5 h-5 text-[#2F6BFF] mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#2F6BFF]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4 text-white/70">READY TO START?</p>
          <h2 className="font-heading font-bold text-[clamp(32px,4vw,48px)] text-white mb-6">
            View Packages & Book
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call to discuss which package is right for your situation.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-[#2F6BFF] hover:bg-white/90">
            <Calendar className="mr-2 w-5 h-5" />
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
