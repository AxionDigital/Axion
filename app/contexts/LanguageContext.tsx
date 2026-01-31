'use client';

import React, { createContext, useContext, useState } from 'react';

/* ================================
   TIPOS
================================ */

export type Language = 'pt' | 'en' | 'es';

type TranslationValue = string | string[];

type Translations = Record<Language, Record<string, TranslationValue>>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

/* ================================
   TRANSLATIONS
================================ */

const translations: Translations = {
  pt: {
    /* NAVBAR */
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.language': 'Idioma',

    /* HERO */
    'hero.title': ['Design', 'que atrai.', 'Código', 'que sustenta.'],
    'hero.subtitle': 'Transformamos ideias em soluções digitais inovadoras',
    'hero.cta.primary': 'Começar Agora',
    'hero.cta.secondary': 'Saiba Mais',

    /* STATS */
    'stats.projects': 'Projetos Entregues',
    'stats.clients': 'Clientes Satisfeitos',
    'stats.years': 'Anos de Experiência',
    'stats.techs': 'Tecnologias',

    /* SERVICES */
    'services.title': 'Nossos Serviços',
    'services.subtitle':
      'Três pilares que sustentam a transformação digital do seu negócio',

    'services.design.title': 'Design',
    'services.design.subtitle': 'UI/UX Moderno',
    'services.design.desc':
      'Criamos interfaces intuitivas e encantadoras focadas em experiência e conversão.',

    'services.dev.title': 'Desenvolvimento',
    'services.dev.subtitle': 'Código Robusto',
    'services.dev.desc':
      'Código escalável, seguro e fácil de manter usando tecnologias modernas.',

    'services.strategy.title': 'Estratégia',
    'services.strategy.subtitle': 'Consultoria Digital',
    'services.strategy.desc':
      'Planejamento tecnológico para crescimento e performance do seu negócio.',

    /* WHY US */
    'why.title': 'Por que escolher a Axion?',
    'why.subtitle':
      'Somos mais que uma agência, somos seu parceiro estratégico',

    'why.growth.title': 'Crescimento Sustentável',
    'why.growth.desc':
      'Soluções pensadas para crescer junto com seu negócio.',

    'why.team.title': 'Equipe Dedicada',
    'why.team.desc':
      'Profissionais experientes e comprometidos com resultados.',

    'why.quality.title': 'Qualidade Garantida',
    'why.quality.desc':
      'Processos rigorosos de testes e validações.',

    'why.tech.title': 'Tecnologia de Ponta',
    'why.tech.desc':
      'Ferramentas e frameworks atualizados.',

    /* TECHNOLOGIES */
    'tech.title': 'Tecnologias que Dominamos',
    'tech.subtitle': 'Stack moderno e de alta performance',

    /* TEMPLATES */
    'templates.title': 'Modelos Prontos',
    'templates.subtitle': 'Escolha uma base profissional para acelerar o seu projeto.',

    'templates.item1.name': 'Pizzaria Moderna',
    'templates.item1.description': 'Um site delicioso e funcional para sua pizzaria, com menu interativo e sistema de pedidos online.',
    'templates.item1.category': 'Alimentação',
    'templates.item1.technologies': 'Next.js, React, TailwindCSS, Express.js',

    /* TEMPLATE BUTTONS */
    'templates.button.view_demo': 'Ver Demo',
    'templates.button.details': 'Detalhes',

    /* FAQ */
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Respostas diretas e transparentes',

    'faq.q1': 'Qual é o tempo médio de um projeto?',
    'faq.a1':
      'De 2 semanas a alguns meses, dependendo da complexidade.',

    'faq.q2': 'Vocês oferecem suporte?',
    'faq.a2':
      'Sim, com planos contínuos de manutenção.',

    'faq.q3': 'Como funciona o desenvolvimento?',
    'faq.a3':
      'Metodologia ágil com entregas incrementais.',

    'faq.q4': 'Existe investimento mínimo?',
    'faq.a4':
      'Não. Criamos soluções para diferentes orçamentos.',

    /* CTA */
    'cta.title': 'Pronto para transformar seu negócio?',
    'cta.subtitle':
      'Vamos construir algo incrível juntos',
    'cta.button': 'Agendar Consulta',
    'cta.whatsapp': 'Olá! Quero agendar uma consulta',

    /* CONTACT */
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para ouvir você',
    'contact.form.title': 'Vamos Conversar',
    'contact.form.desc':
      'Nossa equipe responde em até 24 horas.',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.name.placeholder': 'Digite seu nome',
    'contact.email.placeholder': 'seu@email.com',
    'contact.message.placeholder': 'Conte um pouco sobre seu projeto, ideia ou problema...',
    'contact.phone': 'Telefone',

    /* CONTACT FEEDBACK */
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar a mensagem. Tente novamente.',
    'contact.loading': 'Enviando mensagem...',

    /* FOOTER */
    'footer.tagline': 'Design que atrai. Código que sustenta.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.rights': 'Todos os direitos reservados',

    'footer.design': 'Design',
    'footer.development': 'Desenvolvimento',
    'footer.strategy': 'Estratégia',

    'footer.about': 'Sobre',
    'footer.blog': 'Blog',
    'footer.careers': 'Carreira',

  },

  en: {
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.language': 'Language',

    'hero.title': ['Design', 'that attracts.', 'Code', 'that sustains.'],
    'hero.subtitle': 'We turn ideas into innovative digital solutions',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',

    'stats.projects': 'Projects Delivered',
    'stats.clients': 'Happy Clients',
    'stats.years': 'Years of Experience',
    'stats.techs': 'Technologies',

    'services.title': 'Our Services',
    'services.subtitle': 'Three pillars of digital transformation',

    'services.design.title': 'Design',
    'services.design.subtitle': 'Modern UI/UX',
    'services.design.desc':
      'User-focused interfaces that convert and engage.',

    'services.dev.title': 'Development',
    'services.dev.subtitle': 'Robust Code',
    'services.dev.desc':
      'Scalable, secure and maintainable solutions.',

    'services.strategy.title': 'Strategy',
    'services.strategy.subtitle': 'Digital Consulting',
    'services.strategy.desc':
      'Technology planning for sustainable growth.',

    'why.title': 'Why choose Axion?',
    'why.subtitle': 'Your strategic digital partner',

    'why.growth.title': 'Sustainable Growth',
    'why.growth.desc': 'Built to scale with your business.',

    'why.team.title': 'Dedicated Team',
    'why.team.desc': 'Experienced professionals.',

    'why.quality.title': 'Guaranteed Quality',
    'why.quality.desc': 'Strict QA processes.',

    'why.tech.title': 'Cutting-edge Tech',
    'why.tech.desc': 'Modern tools and frameworks.',

    'tech.title': 'Technologies We Master',
    'tech.subtitle': 'Modern and powerful stack',

    /* TEMPLATES */
    'templates.title': 'Ready-made Templates',
    'templates.subtitle': 'Choose a professional base to accelerate your project.',

    'templates.item1.name': 'Modern Pizzeria',
    'templates.item1.description': 'A delicious and functional website for your pizzeria, with an interactive menu and online ordering system.',
    'templates.item1.category': 'Food & Beverage',
    'templates.item1.technologies': 'Next.js, React, TailwindCSS, Express.js',

    /* TEMPLATE BUTTONS */
    'templates.button.view_demo': 'View Demo',
    'templates.button.details': 'Details',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Clear and honest answers',

    'faq.q1': 'How long does a project usually take?',
    'faq.a1': 'It depends on the scope, but most projects are delivered within a few weeks.',

    'faq.q2': 'Do you work with custom projects?',
    'faq.a2': 'Yes. Every project is tailored to the client’s needs and goals.',

    'faq.q3': 'Which technologies do you use?',
    'faq.a3': 'I mainly work with modern web technologies like React, Next.js and Node.js.',

    'faq.q4': 'How can I request a quote?',
    'faq.a4': 'Just get in touch through the contact form and describe your idea.',

    'cta.title': 'Ready to transform your business?',
    'cta.subtitle': 'Let’s build something great together',
    'cta.button': 'Schedule a Call',
    'cta.whatsapp': 'Hello! I would like to schedule a consultation',


    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We would love to hear from you',
    'contact.form.title': 'Let’s Talk',
    'contact.form.desc': 'We reply within 24 hours.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.name.placeholder': 'Enter your name',
    'contact.email.placeholder': 'your@email.com',
    'contact.message.placeholder': 'Tell us about your project, idea or challenge...',
    'contact.phone': 'Phone',

    /* CONTACT FEEDBACK */
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    'contact.loading': 'Sending message...',

    'footer.tagline': 'Design that attracts. Code that sustains.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved',

    'footer.design': 'Design',
    'footer.development': 'Development',
    'footer.strategy': 'Strategy',

    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',

  },

  es: {
    /* NAVBAR */
    'nav.services': 'Servicios',
    'nav.about': 'Sobre',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',

    /* HERO */
    'hero.title': ['Diseño', 'que atrae.', 'Código', 'que sostiene.'],
    'hero.subtitle': 'Transformamos ideas en soluciones digitales innovadoras',
    'hero.cta.primary': 'Comenzar Ahora',
    'hero.cta.secondary': 'Saber Más',

    /* STATS */
    'stats.projects': 'Proyectos Entregados',
    'stats.clients': 'Clientes Satisfechos',
    'stats.years': 'Años de Experiencia',
    'stats.techs': 'Tecnologías',

    /* SERVICES */
    'services.title': 'Nuestros Servicios',
    'services.subtitle':
      'Tres pilares que impulsan la transformación digital de tu negocio',

    'services.design.title': 'Diseño',
    'services.design.subtitle': 'UI/UX Moderno',
    'services.design.desc':
      'Interfaces intuitivas y atractivas enfocadas en experiencia y conversión.',

    'services.dev.title': 'Desarrollo',
    'services.dev.subtitle': 'Código Robusto',
    'services.dev.desc':
      'Código escalable, seguro y fácil de mantener con tecnologías modernas.',

    'services.strategy.title': 'Estrategia',
    'services.strategy.subtitle': 'Consultoría Digital',
    'services.strategy.desc':
      'Planificación tecnológica para el crecimiento y el rendimiento.',

    /* WHY US */
    'why.title': '¿Por qué elegir Axion?',
    'why.subtitle':
      'Más que una agencia, somos tu socio estratégico',

    'why.growth.title': 'Crecimiento Sostenible',
    'why.growth.desc':
      'Soluciones pensadas para crecer junto a tu negocio.',

    'why.team.title': 'Equipo Dedicado',
    'why.team.desc':
      'Profesionales experimentados y comprometidos con resultados.',

    'why.quality.title': 'Calidad Garantizada',
    'why.quality.desc':
      'Procesos estrictos de pruebas y validaciones.',

    'why.tech.title': 'Tecnología de Punta',
    'why.tech.desc':
      'Herramientas y frameworks actualizados.',

    /* TECHNOLOGIES */
    'tech.title': 'Tecnologías que Dominamos',
    'tech.subtitle': 'Stack moderno y de alto rendimiento',

    /* TEMPLATES */
    'templates.title': 'Plantillas Listas',
    'templates.subtitle': 'Elige una base profesional para acelerar tu proyecto.',

    'templates.item1.name': 'Pizzería Moderna',
    'templates.item1.description': 'Un sitio web delicioso y funcional para tu pizzería, con menú interactivo y sistema de pedidos en línea.',
    'templates.item1.category': 'Alimentos y Bebidas',
    'templates.item1.technologies': 'Next.js, React, TailwindCSS, Express.js',

    /* TEMPLATE BUTTONS */
    'templates.button.view_demo': 'Ver Demo',
    'templates.button.details': 'Detalles',

    /* FAQ */
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Respuestas claras y transparentes',

    'faq.q1': '¿Cuál es el tiempo promedio de un proyecto?',
    'faq.a1':
      'De 2 semanas a algunos meses, según la complejidad.',

    'faq.q2': '¿Ofrecen soporte?',
    'faq.a2':
      'Sí, con planes continuos de mantenimiento.',

    'faq.q3': '¿Cómo funciona el desarrollo?',
    'faq.a3':
      'Metodología ágil con entregas incrementales.',

    'faq.q4': '¿Existe una inversión mínima?',
    'faq.a4':
      'No. Creamos soluciones para diferentes presupuestos.',

    /* CTA */
    'cta.title': '¿Listo para transformar tu negocio?',
    'cta.subtitle':
      'Construyamos algo increíble juntos',
    'cta.button': 'Agendar Consulta',
    'cta.whatsapp': '¡Hola! Quiero agendar una consulta',

    /* CONTACT */
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Estamos listos para escucharte',
    'contact.form.title': 'Hablemos',
    'contact.form.desc':
      'Nuestro equipo responde en hasta 24 horas.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.name.placeholder': 'Ingresa tu nombre',
    'contact.email.placeholder': 'tu@email.com',
    'contact.message.placeholder': 'Cuéntanos sobre tu proyecto, idea o problema...',
    'contact.phone': 'Teléfono',

    /* CONTACT FEEDBACK */
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar el mensaje. Inténtalo de nuevo.',
    'contact.loading': 'Enviando mensaje...',

    /* FOOTER */
    'footer.tagline': 'Diseño que atrae. Código que sostiene.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.rights': 'Todos los derechos reservados',

    'footer.design': 'Diseño',
    'footer.development': 'Desarrollo',
    'footer.strategy': 'Estrategia',

    'footer.about': 'Sobre',
    'footer.blog': 'Blog',
    'footer.careers': 'Carrera',

  },

};

/* ================================
   CONTEXT
================================ */

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) =>
    (translations[language][key] as string) ??
    (translations.pt[key] as string) ??
    key;

  const tArray = (key: string) =>
    (translations[language][key] as string[]) ??
    (translations.pt[key] as string[]) ??
    [];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
