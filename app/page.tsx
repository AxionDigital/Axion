'use client'

import { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ArrowRight, Code2, Palette, Zap, Users, Lightbulb, TrendingUp, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from './contexts/LanguageContext';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiFigma,
  SiAngular,
} from 'react-icons/si';


export default function Home() {
  const { t, tArray } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  // Hooks para scroll reveal de cada seção
  const statsSection = useScrollReveal({ threshold: 0.2 });
  const servicesSection = useScrollReveal({ threshold: 0.2 });
  const whySection = useScrollReveal({ threshold: 0.2 });
  const techSection = useScrollReveal({ threshold: 0.2 });
  const faqSection = useScrollReveal({ threshold: 0.2 });
  const templatesSection = useScrollReveal({ threshold: 0.2 });
  const ctaSection = useScrollReveal({ threshold: 0.2 });
  const contactSection = useScrollReveal({ threshold: 0.2 }); // ← ADICIONE ESTA LINHA

  const carouselImages = [
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80',
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        'service_r91wbhq',
        'template_osfqybp',
        e.currentTarget,
        'IO6a8-PMZLaxTi3JW'
      )
      .then(() => {
        toast.success(t('contact.success'));
        setUserName('');
        setEmail('');
        setUserMessage('');
      })
      .catch((error) => {
        console.error(error);
        toast.error(t('contact.error'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* =========================
     STATS
  ========================= */

  const stats = [
    {
      value: '80+',
      label: t('stats.projects'),
    },
    {
      value: '50+',
      label: t('stats.clients'),
    },
    {
      value: '2+',
      label: t('stats.years'),
    },
    {
      value: '10+',
      label: t('stats.techs'),
    },
  ];


  const services = [
    {
      icon: Palette,
      title: t('services.design.title'),
      subtitle: t('services.design.subtitle'),
      description: t('services.design.desc'),
      color: 'purple'
    },
    {
      icon: Code2,
      title: t('services.dev.title'),
      subtitle: t('services.dev.subtitle'),
      description: t('services.dev.desc'),
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: t('services.strategy.title'),
      subtitle: t('services.strategy.subtitle'),
      description: t('services.strategy.desc'),
      color: 'indigo'
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: t('why.growth.title'),
      description: t('why.growth.desc'),
    },
    {
      icon: Users,
      title: t('why.team.title'),
      description: t('why.team.desc'),
    },
    {
      icon: CheckCircle,
      title: t('why.quality.title'),
      description: t('why.quality.desc'),
    },
    {
      icon: Zap,
      title: t('why.tech.title'),
      description: t('why.tech.desc'),
    },
  ];

  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Express.js', icon: SiExpress, color: '#444444' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  ];

  /* =========================
     FAQ
  ========================= */

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1'),
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden group">
        <div className="absolute inset-0">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={img} alt="Slide" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-purple-500/30 to-blue-600/40 backdrop-blur-sm mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-white">
              <span className="text-purple-700 relative
    drop-shadow-[0_0_14px_rgba(168,85,247,0.7)]">{tArray('hero.title')[0]}</span>{' '}
              {tArray('hero.title')[1]}{' '}

              <span
                className="
    text-purple-700 relative
    drop-shadow-[0_0_14px_rgba(168,85,247,0.7)]
  "
              >
                {tArray('hero.title')[2]}
              </span>{' '}

              {tArray('hero.title')[3]}
            </h1>

            <p className="text-lg text-white/90 mb-8 animate-fade-in">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="
  btn-primary
  group
  flex items-center justify-center text-center gap-2
  px-6 py-3
  rounded-xl
  font-semibold
  transition-all duration-300 ease-out
  hover:scale-[1.03]
  hover:shadow-lg
  active:scale-95
   opacity-0 animate-fade-up
">
                <span className="relative z-10">
                  {t('hero.cta.primary')}
                </span>

                <ArrowRight
                  className="
      w-5 h-5 relative top-[1px]
      transition-transform duration-300
      group-hover:translate-x-1
    "
                />
              </a>


              <a href="#services" className="btn-secondary opacity-0 animate-fade-up">
                {t('hero.cta.secondary')}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSection.ref} className="relative -top-8 py-16 md:py-24 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center animate-on-scroll delay-${idx + 1} ${statsSection.isVisible ? 'is-visible' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent text-white bg-clip-text mb-2">
                  {stat.value}
                </div>
                <p className="text-white text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesSection.ref} className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${servicesSection.isVisible ? 'is-visible' : ''}`}>
              {t('services.title')}
            </h2>
            <p className={`text-gray-600 text-lg max-w-2xl mx-auto animate-on-scroll delay-1 ${servicesSection.isVisible ? 'is-visible' : ''}`}>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 border-border rounded-2xl bg-background card-hover group animate-on-scroll delay-${idx + 1} ${servicesSection.isVisible ? 'is-visible' : ''}`}
                >
                  <div className="mb-4 p-4 bg-purple-100 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section id='about' ref={whySection.ref} className="py-20 md:py-32 bg-background2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${whySection.isVisible ? 'is-visible' : ''}`}> {t('why.title')}</h2>
            <p className={`text-gray-600 text-lg max-w-2xl mx-auto animate-on-scroll delay-1 ${whySection.isVisible ? 'is-visible' : ''}`}>
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col h-full p-8 bg-background rounded-2xl border-border card-hover animate-on-scroll delay-${idx + 1} ${whySection.isVisible ? 'is-visible' : ''}`}
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className='flex-grow'>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-gray-600 leading-6 h-[3rem] line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techSection.ref} className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${techSection.isVisible ? 'is-visible' : ''}`}>{t('tech.title')}</h2>
            <p className={`text-gray-600 text-lg animate-on-scroll delay-1 ${techSection.isVisible ? 'is-visible' : ''}`}>{t('tech.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className={`
          group p-6 rounded-xl border border-border
          bg-background2 text-center
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg
          animate-on-scroll delay-${(idx % 4) + 1} ${techSection.isVisible ? 'is-visible' : ''}
        `}
                >
                  <Icon
                    className="
            mx-auto mb-3 h-8 w-8
            text-purple-500
            transition-transform duration-300
            group-hover:scale-110
          "
                  />

                  <p className="font-semibold text-foreground">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Templates Section */}
      <section ref={templatesSection.ref} className="py-20 md:py-32 bg-background2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${templatesSection.isVisible ? 'is-visible' : ''}`}>
              {t('templates.title')}
            </h2>
            <p className={`text-gray-600 text-lg animate-on-scroll delay-1 ${templatesSection.isVisible ? 'is-visible' : ''}`}>
              {t('templates.subtitle')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className={`w-full max-w-md group overflow-hidden bg-background rounded-2xl border border-border card-hover animate-on-scroll ${templatesSection.isVisible ? 'is-visible' : ''}`}>
              {/* Imagem do Template */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src="Pizzaria.png"
                  alt={t('templates.item1.name')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href="https://pizzaria-modelo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background text-foreground px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    {t('templates.button.view_demo')}
                  </a>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-foreground">
                    {t('templates.item1.name')}
                  </h4>
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {t('templates.item1.category')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  {t('templates.item1.description')}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {t('templates.item1.technologies').split(', ').map((tech, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider text-gray-400">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://pizzaria-modelo.vercel.app/"
                    className="text-primary font-bold text-sm hover:underline flex items-center gap-1 whitespace-nowrap ml-2"
                  >
                    {t('templates.button.details')} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSection.ref} className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${faqSection.isVisible ? 'is-visible' : ''}`}>{t('faq.title')}</h2>
            <p className={`text-gray-600 text-lg animate-on-scroll delay-1 ${faqSection.isVisible ? 'is-visible' : ''}`}>{t('faq.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`border-border rounded-lg overflow-hidden animate-on-scroll delay-${(idx % 4) + 1} ${faqSection.isVisible ? 'is-visible' : ''}`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 bg-background2 hover:bg-background border-border flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{item.q}</h3>
                  <MessageSquare className={`w-5 h-5 text-purple-600 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 bg-background border-t border-border">
                    <p className="text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white animate-on-scroll ${ctaSection.isVisible ? 'is-visible' : ''}`}>{t('cta.title')}</h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-on-scroll delay-1 ${ctaSection.isVisible ? 'is-visible' : ''}`}>
            {t('cta.subtitle')}
          </p>
          <a href={`https://wa.me/5517992472916?text=${encodeURIComponent(
            t('cta.whatsapp')
          )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-10 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 mx-auto animate-on-scroll delay-2 ${ctaSection.isVisible ? 'is-visible' : ''}`}>
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section - Com Scroll Reveal */}
      <section id="contact" ref={contactSection.ref} className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground animate-on-scroll ${contactSection.isVisible ? 'is-visible' : ''}`}>
              {t('contact.title')}
            </h2>
            <p className={`text-gray-600 text-lg animate-on-scroll delay-1 ${contactSection.isVisible ? 'is-visible' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className={`animate-on-scroll animate-slide-left-on-scroll ${contactSection.isVisible ? 'is-visible' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t('contact.form.title')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.form.desc')}
                </p>
              </div>

              <div className={`space-y-4 animate-on-scroll animate-slide-left-on-scroll delay-1 ${contactSection.isVisible ? 'is-visible' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MdOutlineEmail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t('contact.email')}</p>
                    <p className="text-gray-600">axiondigitalsuport@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t('contact.phone')}</p>
                    <p className="text-gray-600">+55 (17) 99247-2916</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={sendEmail}
              className={`space-y-4 animate-on-scroll animate-slide-right-on-scroll ${contactSection.isVisible ? 'is-visible' : ''
                }`}
            >
              <div>
                <label className="block font-semibold text-foreground mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="user_name"   // 👈 IMPORTANTE
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  placeholder={t('contact.name.placeholder')}
                  className="w-full px-4 py-3 bg-background2 border-border rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="user_email"   // 👈 IMPORTANTE
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={t('contact.email.placeholder')}
                  className="w-full px-4 py-3 bg-background2 border-border rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"   // 👈 IMPORTANTE
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  required
                  placeholder={t('contact.message.placeholder')}
                  rows={5}
                  className="w-full px-4 py-3 bg-background2 border-border rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
    btn-primary w-full flex items-center justify-center gap-2
    ${loading ? 'opacity-60 cursor-not-allowed' : ''}
  `}
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    {t('contact.loading')}
                  </>
                ) : (
                  <>
                    {t('contact.send')}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background2 border-t py-16"
        style={{ borderColor: `hsl(var(--border))` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className='relative mb-14'>
              <Image
                src="/logo.png"
                alt="Stack3"
                width={250}
                height={250}
                priority
                className='absolute -left-11 -top-[60px] md:right-11  md:-bottom-10'
              />
              <p className="text-gray-600 text-sm absolute -left-15 top-14 md:left-1  md:-bottom-10">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-purple-600 transition-colors">{t('footer.design')}</a></li>
                <li><a href="#services" className="hover:text-purple-600 transition-colors">{t('footer.development')}</a></li>
                <li><a href="#services" className="hover:text-purple-600 transition-colors">{t('footer.strategy')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-purple-600 transition-colors">{t('footer.about')}</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">{t('footer.blog')}</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">{t('footer.careers')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">{t('footer.terms')}</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2026 Axion. {t('footer.rights')}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/axiondigital01/" className="text-foreground hover:text-purple-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
