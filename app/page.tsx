'use client';

import React, { useState } from 'react';
import { Menu, X, MapPin, Mail, CheckCircle2, Sun, ShieldCheck, Maximize2, Building2, Calendar, Lock } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOfficePhoto, setActiveOfficePhoto] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Form state inspired by Conejo Valley Counseling contact intake form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '', // no default selected, placeholder prompt
    presentingIssues: '', // What are the presenting issues?
    minorAge: '', // If the counseling is for a minor, please provide their age:
    preferredDaysTimes: '', // Consistent days and times that work for you
    referralSource: '', // How did you hear about our practice?
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      presentingIssues: '',
      minorAge: '',
      preferredDaysTimes: '',
      referralSource: '',
    });
  };

  // High quality imagery reflecting Santa Monica, grounding, and warmth
  const imgHero = "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200"; 
  const imgMaya = "/maya-reynolds.png";
  const imgAnxiety = "/anxiety.jpg";
  const imgTrauma = "/trauma-emdr.jpg";
  const imgBurnout = "/burnout.jpg";
  const imgCoastal = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200";
  const imgOffice1 = "/office-1.jpg";
  const imgOffice2 = "/office-2.jpg";

  return (
    <div className="min-h-screen bg-bg-light font-sans text-text-dark selection:bg-teal-script/20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-bg-light/95 backdrop-blur-md border-b border-[#ece6dc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-2xl md:text-3xl text-primary font-normal tracking-tight">
                Dr. Maya Reynolds, <span className="text-xl md:text-2xl text-secondary font-light">PsyD</span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-10 items-center">
              <a href="#about" className="text-text-dark hover:text-teal-script transition-colors text-xs uppercase tracking-[0.2em] font-semibold">About</a>
              <a href="#services" className="text-text-dark hover:text-teal-script transition-colors text-xs uppercase tracking-[0.2em] font-semibold">Services</a>
              <a href="#approach" className="text-text-dark hover:text-teal-script transition-colors text-xs uppercase tracking-[0.2em] font-semibold">Approach</a>
              <a href="#office" className="text-text-dark hover:text-teal-script transition-colors text-xs uppercase tracking-[0.2em] font-semibold">Our Office</a>
              <a href="#faqs" className="text-text-dark hover:text-teal-script transition-colors text-xs uppercase tracking-[0.2em] font-semibold">FAQs</a>
              <button 
                onClick={() => setIsContactModalOpen(true)} 
                className="bg-primary text-white hover:bg-secondary transition-colors text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3 rounded-none shadow-sm cursor-pointer"
              >
                Book An Appointment
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-primary hover:text-teal-script p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-bg-light border-t border-[#ece6dc] shadow-xl py-8 px-8">
            <div className="space-y-6 flex flex-col items-center text-center">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-teal-script tracking-[0.2em] uppercase text-sm">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-teal-script tracking-[0.2em] uppercase text-sm">Services</a>
              <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-teal-script tracking-[0.2em] uppercase text-sm">Approach</a>
              <a href="#office" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-teal-script tracking-[0.2em] uppercase text-sm">Our Office</a>
              <a href="#faqs" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-teal-script tracking-[0.2em] uppercase text-sm">FAQs</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }} 
                className="mt-4 bg-primary text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-none inline-block w-full max-w-xs cursor-pointer"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Matching Reference Layout (Left Content + Right Full-bleed Image) */}
      <section className="bg-bg-light border-b border-[#ece6dc] overflow-hidden">
        <div className="w-full grid lg:grid-cols-2 items-stretch min-h-[620px] lg:min-h-[720px]">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 md:py-24 max-w-2xl lg:max-w-none">
            {/* Location Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-text-muted mb-8 md:mb-12">
              THERAPIST IN SANTA MONICA, CA
            </p>

            {/* Main Heading with Script Font Accent in Middle */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-serif text-primary leading-[1.12] mb-8 font-normal">
              We’re here to help{' '}
              <span className="font-script text-teal-script font-normal text-[1.25em] sm:text-[1.3em] inline-block lowercase mx-1 relative -top-1">
                you
              </span>{' '}
              find solid ground again.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-12 max-w-xl font-light">
              Discover a grounded, transformative therapy experience with specialized clinical support for anxiety, panic, trauma, and burnout.
            </p>

            {/* Underlined CTA Button opening booking modal */}
            <div>
              <button 
                type="button"
                onClick={() => setIsContactModalOpen(true)} 
                className="inline-block tracking-[0.22em] text-xs md:text-sm font-bold text-primary uppercase pb-1.5 border-b-2 border-primary hover:border-teal-script hover:text-teal-script transition-all cursor-pointer"
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          {/* Right Column: Full Bleed Lifestyle Photo */}
          <div className="relative h-72 sm:h-96 lg:h-auto w-full">
            <img 
              src={imgHero} 
              alt="Grounded connection and peaceful support in therapy" 
              className="w-full h-full object-cover object-center"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg-light/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Brief Value Proposition Banner */}
      <section className="bg-bg-alt py-12 px-6 sm:px-8 border-b border-[#ece6dc]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="font-serif text-xl md:text-2xl text-primary font-normal">
            Specialized therapy for thoughtful, high-achieving adults who internally feel{' '}
            <span className="font-script text-teal-script text-[1.25em] inline-block font-normal">exhausted</span> or overwhelmed.
          </p>
          <a href="#about" className="flex-shrink-0 text-xs tracking-[0.2em] font-semibold text-primary uppercase border-b border-primary hover:text-teal-script hover:border-teal-script transition-colors pb-1">
            Read Dr. Reynolds&apos; Bio &rarr;
          </a>
        </div>
      </section>

      {/* About Section - Featuring Dr. Maya Reynolds' exact uploaded picture & bio */}
      <section id="about" className="py-24 md:py-32 bg-white border-b border-[#ece6dc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-bg-alt rounded-none z-0 transform translate-x-3 translate-y-3"></div>
                <img 
                  src={imgMaya} 
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA" 
                  className="relative z-10 w-full h-[540px] md:h-[600px] object-cover rounded-none shadow-lg" 
                />
                <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-teal-script shadow-sm">
                  <p className="font-serif font-bold text-primary text-lg">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">Licensed Clinical Psychologist • Santa Monica, CA</p>
                </div>
              </div>
            </div>
            
            {/* Text Column */}
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-4">
                ABOUT DR. MAYA REYNOLDS, PSYD
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Meeting you where you are, with{' '}
                <span className="font-script text-teal-script text-[1.2em] inline-block font-normal">warmth</span>, depth, and grounded care.
              </h2>
              <div className="space-y-5 text-text-muted text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
                <p>
                  In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-serif italic text-primary text-xl leading-relaxed">
                    &ldquo;I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 3 Specialties from Profile */}
      <section id="services" className="py-24 md:py-32 bg-bg-alt border-b border-[#ece6dc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-3">AREAS OF SPECIALIZATION</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary">
              Clinical support for{' '}
              <span className="font-script text-teal-script text-[1.2em] inline-block font-normal">your</span> mind & body.
            </h2>
            <p className="text-text-muted mt-4 text-base sm:text-lg font-light leading-relaxed">
              Individualized therapy integrating cognitive, somatic, and trauma-informed methodologies to restore equilibrium.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Service 1: Anxiety & Panic */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#eae3d7]">
              <div>
                <div className="mb-6 overflow-hidden h-52">
                  <img 
                    src={imgAnxiety} 
                    alt="Therapy for Anxiety and Panic in Santa Monica" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">Anxiety & Panic</h3>
                <p className="text-text-muted leading-relaxed text-sm sm:text-base font-light">
                  For adults who feel “functional” on the outside while constantly battling worry, physical muscle tension, insomnia, or the sense that they are always bracing for catastrophe. We address both psychological and physiological sides of anxiety to restore daily regulation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-teal-script uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Nervous System Regulation
              </div>
            </div>
            
            {/* Service 2: Trauma & EMDR */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#eae3d7]">
              <div>
                <div className="mb-6 overflow-hidden h-52">
                  <img 
                    src={imgTrauma} 
                    alt="Trauma Recovery and EMDR Therapy in Santa Monica" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">Trauma & EMDR</h3>
                <p className="text-text-muted leading-relaxed text-sm sm:text-base font-light">
                  Carefully paced trauma work for single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic distress. Focused on safety, stabilization, and EMDR processing so past experiences no longer dictate your present.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-teal-script uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Safety & Depth Resolution
              </div>
            </div>
            
            {/* Service 3: Burnout & Perfectionism */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#eae3d7]">
              <div>
                <div className="mb-6 overflow-hidden h-52">
                  <img 
                    src={imgBurnout} 
                    alt="Therapy for Professional Burnout and Perfectionism" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">Burnout & Perfectionism</h3>
                <p className="text-text-muted leading-relaxed text-sm sm:text-base font-light">
                  Tailored for entrepreneurs, creatives, and high-achieving professionals disconnected after years of pushing through relentless stress. Therapy provides a dedicated space to slow down, reconnect, and establish sustainable, healthy patterns of living and working.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-teal-script uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Sustainable Balance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 md:py-32 bg-white border-b border-[#ece6dc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-3">CLINICAL METHODOLOGY</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                An integrative approach rooted in{' '}
                <span className="font-script text-teal-script text-[1.2em] inline-block font-normal">evidence</span> and compassion.
              </h2>
              <p className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed font-light">
                Sessions are structured enough to feel supportive and organized, while still leaving ample space for reflection, nuance, and depth.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-teal-script pl-6 py-1">
                  <h4 className="text-xl font-serif text-primary mb-2">Cognitive-Behavioral Therapy (CBT)</h4>
                  <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                    Practical tools to understand the relationship between thoughts, emotions, and behaviors, dismantling cognitive distortions and cycles of overthinking.
                  </p>
                </div>
                
                <div className="border-l-2 border-secondary pl-6 py-1">
                  <h4 className="text-xl font-serif text-primary mb-2">Eye Movement Desensitization and Reprocessing (EMDR)</h4>
                  <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                    An evidence-based trauma protocol that helps reprocess distressing memories so they lose their emotional charge and physiological hold.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6 py-1">
                  <h4 className="text-xl font-serif text-primary mb-2">Mindfulness & Somatic Techniques</h4>
                  <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                    Body-oriented practices that bridge cognitive insight with somatic regulation, helping you physically calm nervous system arousal in high-stress moments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img 
                src={imgCoastal} 
                alt="Tranquil Pacific coastal landscape near Santa Monica" 
                className="w-full h-[520px] object-cover rounded-none shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section id="office" className="py-24 md:py-32 bg-white border-b border-[#ece6dc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header & Supporting Copy */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-3">
              SANTA MONICA PRACTICE SPACE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Our Office: A quiet space for{' '}
              <span className="font-script text-teal-script text-[1.2em] inline-block font-normal">
                grounding
              </span>{' '}
              and healing.
            </h2>
            <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed font-light">
              <p>
                My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <p>
                Stepping into therapy shouldn’t feel clinical or sterile. Situated in downtown Santa Monica, this environment was intentionally curated to offer an oasis of stillness away from daily sensory overload—featuring warm hardwood floors, natural coastal sunlight, ergonomic seating, and complete acoustic discretion.
              </p>
            </div>
          </div>

          {/* Genuine Office Photographs */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Office Image 1: Main Consultation Room */}
            <div className="group relative bg-bg-alt border border-[#eae3d7] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={imgOffice1} 
                  alt="Dr. Maya Reynolds' therapy office in Santa Monica featuring comfortable sofa, armchair, and natural light" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <button 
                  onClick={() => setActiveOfficePhoto(imgOffice1)}
                  className="absolute bottom-4 right-4 bg-primary/90 hover:bg-primary text-white p-2.5 shadow-lg backdrop-blur-sm transition-colors flex items-center gap-1.5 text-xs tracking-wider uppercase font-semibold"
                  title="Click to view full photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>
              <div className="p-6 bg-white border-t border-[#eae3d7]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl text-primary font-medium">Main Consultation Room</h3>
                  <span className="text-[10px] tracking-widest uppercase bg-bg-alt px-2.5 py-1 text-teal-script font-bold">Office View 1</span>
                </div>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  A spacious, uncluttered environment featuring warm hardwood flooring, a comfortable sofa, leather armchair, curated books, and soothing plants that allow your nervous system to settle.
                </p>
              </div>
            </div>

            {/* Office Image 2: Intimate Seating & Window Daylight */}
            <div className="group relative bg-bg-alt border border-[#eae3d7] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={imgOffice2} 
                  alt="Comfortable therapy seating with throw pillows and soft natural sunlight in Santa Monica office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <button 
                  onClick={() => setActiveOfficePhoto(imgOffice2)}
                  className="absolute bottom-4 right-4 bg-primary/90 hover:bg-primary text-white p-2.5 shadow-lg backdrop-blur-sm transition-colors flex items-center gap-1.5 text-xs tracking-wider uppercase font-semibold"
                  title="Click to view full photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>
              <div className="p-6 bg-white border-t border-[#eae3d7]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl text-primary font-medium">Comfortable Seating & Natural Light</h3>
                  <span className="text-[10px] tracking-widest uppercase bg-bg-alt px-2.5 py-1 text-teal-script font-bold">Office View 2</span>
                </div>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  Positioned beside large windows with adjustable blinds, providing soft daylight and comfortable pillows for a calm, grounded somatic experience.
                </p>
              </div>
            </div>
          </div>

          {/* Three Key Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-bg-alt border border-[#eae3d7]">
              <div className="w-10 h-10 bg-white border border-[#eae3d7] flex items-center justify-center text-teal-script mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-primary mb-2">Natural Light & Uncluttered Space</h4>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Thoughtfully arranged with clean lines, soft organic textures, and ample natural daylight to reduce sensory stress and promote mental clarity.
              </p>
            </div>

            <div className="p-6 bg-bg-alt border border-[#eae3d7]">
              <div className="w-10 h-10 bg-white border border-[#eae3d7] flex items-center justify-center text-teal-script mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-primary mb-2">Privacy, Safety & Discretion</h4>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                A confidential, sound-dampened setting designed for complete psychological safety, so you can explore vulnerable emotions without hesitation.
              </p>
            </div>

            <div className="p-6 bg-bg-alt border border-[#eae3d7]">
              <div className="w-10 h-10 bg-white border border-[#eae3d7] flex items-center justify-center text-teal-script mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-primary mb-2">In-Person & Telehealth Options</h4>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Meet in person at our Santa Monica office or connect via secure, HIPAA-compliant telehealth if you reside elsewhere in California.
              </p>
            </div>
          </div>

          {/* Office Location & Visiting Info Card */}
          <div className="bg-primary text-white p-8 sm:p-10 lg:p-12 shadow-md">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-2">VISITING OUR PRACTICE</p>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">Santa Monica Practice Location</h3>
                <div className="flex items-start gap-3 text-white/90 mb-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div className="text-sm sm:text-base leading-relaxed">
                    <p className="font-medium text-white text-lg">123th Street 45 W, Santa Monica, CA 90401</p>
                    <p className="text-white/70 text-sm mt-1">
                      Conveniently situated in Santa Monica, moments from the coast with easy access from Brentwood, Venice, and West Los Angeles.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-2 border-t border-white/15">
                  <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent mr-1.5" /> Quiet Private Suite</span>
                  <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent mr-1.5" /> Elevator Accessible</span>
                  <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent mr-1.5" /> Validated Parking Nearby</span>
                  <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent mr-1.5" /> In-Person & California Telehealth</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a 
                  href="#contact" 
                  className="text-center bg-accent text-primary hover:bg-white hover:text-primary transition-colors text-xs font-bold tracking-[0.2em] uppercase py-3.5 px-6 shadow-sm"
                >
                  Schedule In-Person Visit
                </a>
                <a 
                  href="mailto:contact@drmayareynolds.com" 
                  className="text-center border border-white/30 hover:border-white text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase py-3.5 px-6"
                >
                  Inquire About Sessions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full Image Modal Lightbox for Office Photos */}
        {activeOfficePhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveOfficePhoto(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-bg-light p-3 sm:p-4 shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveOfficePhoto(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-[4/3] w-full max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={activeOfficePhoto} 
                  alt="Dr. Maya Reynolds' Santa Monica Therapy Office" 
                  className="max-w-full max-h-[75vh] object-contain" 
                />
              </div>
              <div className="p-4 bg-white flex justify-between items-center text-xs text-text-muted">
                <span className="font-serif text-primary text-sm font-medium">
                  Dr. Maya Reynolds, PsyD • Santa Monica Practice (123th Street 45 W, Santa Monica, CA 90401)
                </span>
                <span className="uppercase tracking-widest text-[10px] text-teal-script font-bold">Official Office Photo</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 md:py-32 bg-bg-alt border-b border-[#ece6dc]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-3">COMMON INQUIRIES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 border border-[#eae3d7]">
              <h4 className="text-xl font-serif text-primary mb-3">Who do you primarily work with?</h4>
              <p className="text-text-muted leading-relaxed font-light text-base">
                I specialize in working with thoughtful, high-achieving adults—including professionals, entrepreneurs, and creatives—who appear functional on the outside but internally struggle with chronic anxiety, panic, perfectionism, burnout, or the persistent effects of earlier life experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-[#eae3d7]">
              <h4 className="text-xl font-serif text-primary mb-3">Do you offer in-person and telehealth options?</h4>
              <p className="text-text-muted leading-relaxed font-light text-base">
                Yes. I offer in-person sessions at my private, sunlit Santa Monica office located at 123th Street 45 W, Santa Monica, CA 90401. I also provide secure, HIPAA-compliant telehealth video sessions for clients situated anywhere within the state of California.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-[#eae3d7]">
              <h4 className="text-xl font-serif text-primary mb-3">What does an integrative approach mean?</h4>
              <p className="text-text-muted leading-relaxed font-light text-base">
                Rather than applying a rigid one-size-fits-all formula, I combine cognitive-behavioral therapy (CBT), EMDR for trauma processing, and mindfulness/somatic techniques. This allows us to work with both the cognitive thoughts and physiological body tensions you experience.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#eae3d7]">
              <h4 className="text-xl font-serif text-primary mb-3">How can I tell if we are a good fit?</h4>
              <p className="text-text-muted leading-relaxed font-light text-base">
                If you’re seeking a psychologist who unites concrete practical coping tools with depth-oriented exploration—and who understands the realities of high-intensity professional lives—we may be an ideal match. You are welcome to reach out to schedule an initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Callout Section */}
      <section id="contact" className="py-24 md:py-32 bg-white border-t border-[#ece6dc] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-teal-script mb-3">TAKE THE NEXT STEP</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
            Ready to reconnect and find{' '}
            <span className="font-script text-teal-script text-[1.25em] inline-block font-normal">balance</span>?
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Therapy can be a dedicated space to slow down, gain perspective, and build lasting resilience. Reach out today to schedule an initial consultation with Dr. Maya Reynolds.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4.5 hover:bg-secondary transition-colors text-xs font-semibold tracking-[0.22em] uppercase shadow-md cursor-pointer group"
            >
              <Mail className="w-4 h-4 mr-3 text-accent group-hover:scale-110 transition-transform" />
              Book An Appointment
            </button>

            <a 
              href="#office" 
              className="inline-block tracking-[0.2em] text-xs font-bold text-primary uppercase pb-1 border-b-2 border-primary hover:border-teal-script hover:text-teal-script transition-all"
            >
              View Office Location &rarr;
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[#f0eae0] flex flex-wrap justify-center items-center gap-8 text-xs text-text-muted font-light">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-2 text-teal-script" /> 123th Street 45 W, Santa Monica, CA
            </span>
            <span className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-2 text-teal-script" /> Confidential & HIPAA-Compliant
            </span>
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-2 text-teal-script" /> In-Person & Telehealth
            </span>
          </div>
        </div>
      </section>

      {/* Conejo Valley Counseling-style Contact / Intake Modal */}
      {isContactModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div 
            className="bg-white border border-[#eae3d7] max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-[#FAF8F5] border-b border-[#eae3d7] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-teal-script mb-1">DR. MAYA REYNOLDS, PSYD</p>
                <h3 className="text-xl sm:text-2xl font-serif text-primary">Schedule a Consultation</h3>
              </div>
              <button 
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="text-text-muted hover:text-primary p-2 transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-script/10 text-teal-script mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif text-primary">Thank You for Reaching Out</h4>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto">
                    Your inquiry has been privately received. Dr. Maya Reynolds&apos; practice responds within <strong>24 business hours</strong> to discuss consultation scheduling and answer any initial questions.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => resetForm()}
                      className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-script hover:underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsContactModalOpen(false)}
                      className="bg-primary text-white text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs text-text-muted font-light leading-relaxed border-l-2 border-teal-script pl-3">
                    Please provide your information below. Dr. Reynolds offers confidential in-person therapy at her Santa Monica office and secure telehealth for California residents.
                  </p>

                  {/* Name Fields */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                        />
                        <span className="text-[10px] text-text-muted uppercase tracking-wider mt-1 block">First Name</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                        />
                        <span className="text-[10px] text-text-muted uppercase tracking-wider mt-1 block">Last Name</span>
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modalEmail" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="modalEmail"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="youremail@example.com"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="modalPhone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="modalPhone"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(310) 555-0192"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Telehealth or In-Person Therapy Selection (No default, placeholder option) */}
                  <div>
                    <label htmlFor="modalServiceType" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Are you looking for telehealth or in-person therapy? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="modalServiceType"
                      required
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                    >
                      <option value="" disabled>-- Select an option --</option>
                      <option value="in-person">In-Person (Santa Monica Office - 123th Street 45 W)</option>
                      <option value="telehealth">Telehealth (California-wide Online Video)</option>
                      <option value="telehealth-or-in-person">Either / Open to Both</option>
                    </select>
                  </div>

                  {/* Presenting Issues */}
                  <div>
                    <label htmlFor="modalIssues" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      What are the presenting issues? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="modalIssues"
                      required
                      rows={3}
                      name="presentingIssues"
                      value={formData.presentingIssues}
                      onChange={handleInputChange}
                      placeholder="e.g. Anxiety & panic, chronic burnout, trauma/EMDR interest, life transition..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors resize-y"
                    ></textarea>
                  </div>

                  {/* Minor Counseling Field */}
                  <div>
                    <label htmlFor="modalMinorAge" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      If the counseling is for a minor, please provide their age:
                    </label>
                    <input
                      type="text"
                      id="modalMinorAge"
                      name="minorAge"
                      value={formData.minorAge}
                      onChange={handleInputChange}
                      placeholder="e.g. 16 (or leave blank if for an adult)"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Consistent Days and Times */}
                  <div>
                    <label htmlFor="modalDaysTimes" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Consistent days and times that work for your schedule:
                    </label>
                    <input
                      type="text"
                      id="modalDaysTimes"
                      name="preferredDaysTimes"
                      value={formData.preferredDaysTimes}
                      onChange={handleInputChange}
                      placeholder="e.g. Tuesday or Thursday mornings, weekday late afternoons"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label htmlFor="modalReferral" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      How did you hear about our practice?
                    </label>
                    <input
                      type="text"
                      id="modalReferral"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleInputChange}
                      placeholder="e.g. Google Search, Psychology Today, Doctor/Friend Referral"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#ded8cf] text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:border-teal-script focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-[#eae3d7] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-xs text-text-muted font-light">
                      <Lock className="w-3.5 h-3.5 mr-2 text-teal-script flex-shrink-0" />
                      <span>Encrypted & HIPAA-compliant.</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setIsContactModalOpen(false)}
                        className="w-1/2 sm:w-auto px-5 py-3.5 text-xs uppercase tracking-wider font-semibold text-text-muted hover:text-primary transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-1/2 sm:w-auto inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 hover:bg-secondary transition-colors text-xs font-semibold tracking-[0.2em] uppercase shadow-sm disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? 'Sending...' : 'Submit Inquiries'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="font-serif text-2xl font-normal mb-4">Dr. Maya Reynolds, PsyD</h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Licensed Clinical Psychologist</p>
              <p className="text-white/75 text-sm leading-relaxed font-light">
                Compassionate, evidence-based therapy for anxiety, trauma, and burnout. Providing in-person care in Santa Monica and telehealth throughout California.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-5">PRACTICE LOCATION</h4>
              <div className="text-white/80 space-y-2 text-sm leading-relaxed font-light">
                <p className="font-medium text-white">Santa Monica Office</p>
                <p>123th Street 45 W<br/>Santa Monica, CA 90401</p>
                <p className="pt-2 text-white/60">Secure Telehealth across California</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-5">NAVIGATION</h4>
              <ul className="space-y-2.5 text-white/80 text-sm font-light">
                <li><a href="#about" className="hover:text-accent transition-colors">About Dr. Reynolds</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Specialized Services</a></li>
                <li><a href="#approach" className="hover:text-accent transition-colors">Integrative Approach</a></li>
                <li><a href="#office" className="hover:text-accent transition-colors">Our Office & Location</a></li>
                <li><a href="#faqs" className="hover:text-accent transition-colors">Frequently Asked Questions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/15 text-center text-xs text-white/50 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 font-light">
            <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Licensed Clinical Psychologist (Fictional Therapist Profile)</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
