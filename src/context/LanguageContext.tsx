
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'ro';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Translations object
const translations = {
  en: {
    // Home page
    "home.hero.title": "Words that Work. Copy that Converts.",
    "home.hero.subtitle": "Elevate your brand with strategic copywriting that engages your audience and drives results.",
    "home.hero.cta1": "Get in Touch",
    "home.hero.cta2": "View Services",
    "home.services.title": "Copywriting Services",
    "home.services.subtitle": "Strategic writing solutions tailored to your unique business needs and audience expectations.",
    "home.services.website.title": "Website Copy",
    "home.services.website.description": "Compelling website content that engages visitors and drives conversions.",
    "home.services.social.title": "Social Media Content", 
    "home.services.social.description": "Engaging posts and captions that boost engagement and foster community.",
    "home.services.email.title": "Email Campaigns",
    "home.services.email.description": "Strategic email sequences that nurture leads and drive customer action.",
    "home.services.viewAll": "View All Services",
    "home.testimonials.title": "Client Testimonials",
    "home.testimonials.subtitle": "See what clients have to say about working with WordCraft Copywriting.",
    "home.testimonials.1.quote": "The website copy exceeded our expectations. It perfectly captured our brand voice and has significantly improved our conversion rates. Truly exceptional work!",
    "home.testimonials.1.name": "Sarah Johnson",
    "home.testimonials.1.position": "Marketing Director, TechStart",
    "home.testimonials.2.quote": "Our email campaign open rates increased by 45% with the new copy. The writing was clear, compelling, and exactly what our audience needed to hear.",
    "home.testimonials.2.name": "Michael Anderson",
    "home.testimonials.2.position": "CEO, GrowthBound",
    "home.cta.title": "Ready to Transform Your Copy?",
    "home.cta.subtitle": "Let's collaborate to create compelling content that resonates with your audience and drives results.",
    "home.cta.button": "Start Your Project",

    // About page
    "about.hero.title": "About Me",
    "about.hero.subtitle": "Passionate about turning words into results for businesses of all sizes.",
    "about.main.title": "Crafting Compelling Copy Since 2015",
    "about.main.p1": "With over 8 years of experience in the industry, I specialize in creating strategic, audience-focused copy that drives engagement and conversions. My approach combines creativity with data-driven insights to deliver content that not only sounds good but performs exceptionally well.",
    "about.main.p2": "I've worked with businesses across various industries, from tech startups to established financial institutions, helping them communicate their value proposition and connect with their target audience through powerful words.",
    "about.main.p3": "My mission is simple: to transform your ideas into impactful messages that resonate with your audience and inspire action.",
    "about.main.cta": "Let's Work Together",
    "about.expertise.title": "Expertise & Skills",
    "about.expertise.subtitle": "Leveraging experience and industry knowledge to deliver exceptional copy.",
    "about.expertise.skill1.number": "01",
    "about.expertise.skill1.title": "Brand Voice Development",
    "about.expertise.skill1.description": "Creating and refining distinctive brand voices that stand out in crowded markets and build strong connections with target audiences.",
    "about.expertise.skill2.number": "02",
    "about.expertise.skill2.title": "Conversion Copywriting",
    "about.expertise.skill2.description": "Writing persuasive, action-oriented copy that guides readers through the customer journey and encourages them to take specific steps.",
    "about.expertise.skill3.number": "03",
    "about.expertise.skill3.title": "SEO Content Strategy",
    "about.expertise.skill3.description": "Developing content that balances search engine optimization with engaging, value-driven information that serves both algorithms and human readers.",
    "about.industries.title": "Industries I've Worked With",
    "about.industries.industry1": "Technology & SaaS",
    "about.industries.industry2": "E-commerce",
    "about.industries.industry3": "Finance & Fintech",
    "about.industries.industry4": "Healthcare",
    "about.industries.industry5": "Education",
    "about.industries.industry6": "Real Estate",
    "about.cta.title": "Ready to Tell Your Story?",
    "about.cta.subtitle": "Let me help you craft a narrative that engages your audience and achieves your business goals.",
    "about.cta.button": "Get in Touch",

    // Portfolio page
    "portfolio.hero.title": "Portfolio",
    "portfolio.hero.subtitle": "Explore a selection of my copywriting projects across various industries.",
    "portfolio.project1.type": "Website Copy",
    "portfolio.project1.year": "2023",
    "portfolio.project1.title": "TechStart SaaS Platform",
    "portfolio.project1.description": "Complete website copy for a SaaS platform, including homepage, product pages, and pricing page.",
    "portfolio.project1.link": "View Project",
    "portfolio.project2.type": "Email Campaign",
    "portfolio.project2.year": "2023",
    "portfolio.project2.title": "GrowthBound Nurture Sequence",
    "portfolio.project2.description": "A 5-part email nurture sequence that increased conversion rates by 45% for a B2B service company.",
    "portfolio.project2.link": "View Project",
    "portfolio.project3.type": "Social Media",
    "portfolio.project3.year": "2022",
    "portfolio.project3.title": "FitLife Brand Voice & Content",
    "portfolio.project3.description": "Social media content strategy and copy that doubled engagement for a fitness brand.",
    "portfolio.project3.link": "View Project",
    "portfolio.project4.type": "Blog Content",
    "portfolio.project4.year": "2022",
    "portfolio.project4.title": "EcoLiving Blog Series",
    "portfolio.project4.description": "A 12-part blog series on sustainable living that established the brand as an industry authority.",
    "portfolio.project4.link": "View Project",
    "portfolio.project5.type": "Landing Page",
    "portfolio.project5.year": "2022",
    "portfolio.project5.title": "FinEdge Product Launch",
    "portfolio.project5.description": "High-converting landing page copy for a fintech product launch that exceeded conversion targets.",
    "portfolio.project5.link": "View Project",
    "portfolio.project6.type": "Brand Voice",
    "portfolio.project6.year": "2021",
    "portfolio.project6.title": "ModernHome Brand Guidelines",
    "portfolio.project6.description": "Complete brand voice and messaging guidelines for a home décor e-commerce brand.",
    "portfolio.project6.link": "View Project",
    "portfolio.results.title": "Client Results",
    "portfolio.results.subtitle": "The impact of strategic copywriting on business outcomes.",
    "portfolio.results.stat1.number": "45%",
    "portfolio.results.stat1.text": "Average increase in email open rates",
    "portfolio.results.stat2.number": "120%",
    "portfolio.results.stat2.text": "Growth in organic website traffic",
    "portfolio.results.stat3.number": "85%",
    "portfolio.results.stat3.text": "Increase in landing page conversions",
    "portfolio.cta.title": "Ready to Create Your Success Story?",
    "portfolio.cta.subtitle": "Let's work together to craft copy that delivers outstanding results for your business.",
    "portfolio.cta.button": "Start Your Project",

    // Contact page
    "contact.hero.title": "Let's Connect",
    "contact.hero.subtitle": "Ready to discuss your copywriting needs? Get in touch today.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send Message",
    "contact.alt.title": "Prefer a direct approach?",
    "contact.alt.email": "Email me at:",
    "contact.alt.phone": "Call me at:",

    // Services page
    "services.hero.title": "My Services",
    "services.hero.subtitle": "Professional copywriting solutions tailored to your business needs.",
    
    // Navigation & Footer
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "footer.pages": "Pages",
    "footer.contact": "Contact",
    "footer.rights": "© 2025 Liviu M.C. Copywriting. Designed and developed by Liviu M.C.",
    "footer.tagline": "Crafting compelling copy that converts casual readers into loyal customers.",

    // Language selector
    "language.select": "Select language",
  },
  ro: {
    // Home page
    "home.hero.title": "Cuvinte care funcționează. Texte care convertesc.",
    "home.hero.subtitle": "Îmbunătățește-ți brandul cu texte strategice care atrag publicul și generează rezultate.",
    "home.hero.cta1": "Contactează-mă",
    "home.hero.cta2": "Vezi serviciile",
    "home.services.title": "Servicii de Copywriting",
    "home.services.subtitle": "Soluții de scriere strategică adaptate nevoilor afacerii tale și așteptărilor publicului.",
    "home.services.website.title": "Texte pentru Website",
    "home.services.website.description": "Conținut captivant pentru site-uri web care atrage vizitatorii și generează conversii.",
    "home.services.social.title": "Conținut pentru Social Media", 
    "home.services.social.description": "Postări și descrieri atractive care cresc implicarea și dezvoltă comunitatea.",
    "home.services.email.title": "Campanii Email",
    "home.services.email.description": "Secvențe strategice de email care cultivă lead-urile și determină acțiuni din partea clienților.",
    "home.services.viewAll": "Vezi toate serviciile",
    "home.testimonials.title": "Testimoniale Clienți",
    "home.testimonials.subtitle": "Vezi ce spun clienții despre colaborarea cu WordCraft Copywriting.",
    "home.testimonials.1.quote": "Textele pentru site au depășit așteptările noastre. Au captat perfect vocea brandului nostru și au îmbunătățit semnificativ ratele de conversie. Muncă cu adevărat excepțională!",
    "home.testimonials.1.name": "Sarah Johnson",
    "home.testimonials.1.position": "Director Marketing, TechStart",
    "home.testimonials.2.quote": "Ratele de deschidere ale campaniei noastre de email au crescut cu 45% datorită noilor texte. Scrierea a fost clară, convingătoare și exact ceea ce publicul nostru avea nevoie să audă.",
    "home.testimonials.2.name": "Michael Anderson",
    "home.testimonials.2.position": "CEO, GrowthBound",
    "home.cta.title": "Pregătit să-ți transformi textele?",
    "home.cta.subtitle": "Hai să colaborăm pentru a crea conținut captivant care rezonează cu publicul tău și aduce rezultate.",
    "home.cta.button": "Începe proiectul",

    // About page
    "about.hero.title": "Despre mine",
    "about.hero.subtitle": "Pasionat de transformarea cuvintelor în rezultate pentru afaceri de toate dimensiunile.",
    "about.main.title": "Creez texte captivante din 2015",
    "about.main.p1": "Cu peste 8 ani de experiență în industrie, mă specializez în crearea de texte strategice, orientate spre public, care stimulează angajamentul și conversiile. Abordarea mea combină creativitatea cu analize bazate pe date pentru a oferi conținut care nu doar sună bine, ci performează excepțional.",
    "about.main.p2": "Am lucrat cu afaceri din diverse industrii, de la startup-uri tech până la instituții financiare consacrate, ajutându-le să-și comunice propunerea de valoare și să se conecteze cu publicul țintă prin cuvinte puternice.",
    "about.main.p3": "Misiunea mea este simplă: să transform ideile tale în mesaje puternice care rezonează cu publicul tău și inspiră acțiune.",
    "about.main.cta": "Să lucrăm împreună",
    "about.expertise.title": "Expertiză și Abilități",
    "about.expertise.subtitle": "Valorificarea experienței și cunoștințelor din industrie pentru a livra texte excepționale.",
    "about.expertise.skill1.number": "01",
    "about.expertise.skill1.title": "Dezvoltarea Vocii Brandului",
    "about.expertise.skill1.description": "Crearea și rafinarea vocilor distinctive ale brandurilor care se remarcă în piețe aglomerate și construiesc conexiuni puternice cu publicul țintă.",
    "about.expertise.skill2.number": "02",
    "about.expertise.skill2.title": "Copywriting pentru Conversie",
    "about.expertise.skill2.description": "Scrierea persuasivă, orientată spre acțiune, care ghidează cititorii prin călătoria clientului și îi încurajează să facă pași specifici.",
    "about.expertise.skill3.number": "03",
    "about.expertise.skill3.title": "Strategie de Conținut SEO",
    "about.expertise.skill3.description": "Dezvoltarea conținutului care echilibrează optimizarea pentru motoarele de căutare cu informații angajante și valoroase care servesc atât algoritmilor, cât și cititorilor umani.",
    "about.industries.title": "Industriile cu care am lucrat",
    "about.industries.industry1": "Tehnologie și SaaS",
    "about.industries.industry2": "E-commerce",
    "about.industries.industry3": "Finanțe și Fintech",
    "about.industries.industry4": "Sănătate",
    "about.industries.industry5": "Educație",
    "about.industries.industry6": "Imobiliare",
    "about.cta.title": "Pregătit să-ți spui povestea?",
    "about.cta.subtitle": "Lasă-mă să te ajut să creezi o narațiune care atrage publicul tău și îți atinge obiectivele de afaceri.",
    "about.cta.button": "Contactează-mă",

    // Portfolio page
    "portfolio.hero.title": "Portofoliu",
    "portfolio.hero.subtitle": "Explorează o selecție a proiectelor mele de copywriting din diverse industrii.",
    "portfolio.project1.type": "Texte Website",
    "portfolio.project1.year": "2023",
    "portfolio.project1.title": "Platformă SaaS TechStart",
    "portfolio.project1.description": "Text complet pentru un site SaaS, inclusiv pagina principală, paginile de produs și pagina de prețuri.",
    "portfolio.project1.link": "Vezi proiectul",
    "portfolio.project2.type": "Campanie Email",
    "portfolio.project2.year": "2023",
    "portfolio.project2.title": "Secvență de Nurturare GrowthBound",
    "portfolio.project2.description": "O secvență de nurturare prin email în 5 părți care a crescut ratele de conversie cu 45% pentru o companie de servicii B2B.",
    "portfolio.project2.link": "Vezi proiectul",
    "portfolio.project3.type": "Social Media",
    "portfolio.project3.year": "2022",
    "portfolio.project3.title": "Vocea Brandului și Conținut pentru FitLife",
    "portfolio.project3.description": "Strategie de conținut și texte pentru social media care au dublat angajamentul pentru un brand de fitness.",
    "portfolio.project3.link": "Vezi proiectul",
    "portfolio.project4.type": "Conținut Blog",
    "portfolio.project4.year": "2022",
    "portfolio.project4.title": "Serie de Blog EcoLiving",
    "portfolio.project4.description": "O serie de blog în 12 părți despre viața sustenabilă care a stabilit brandul ca o autoritate în industrie.",
    "portfolio.project4.link": "Vezi proiectul",
    "portfolio.project5.type": "Landing Page",
    "portfolio.project5.year": "2022",
    "portfolio.project5.title": "Lansare Produs FinEdge",
    "portfolio.project5.description": "Text pentru landing page cu conversie ridicată pentru lansarea unui produs fintech care a depășit țintele de conversie.",
    "portfolio.project5.link": "Vezi proiectul",
    "portfolio.project6.type": "Vocea Brandului",
    "portfolio.project6.year": "2021",
    "portfolio.project6.title": "Ghid de Brand ModernHome",
    "portfolio.project6.description": "Ghid complet pentru vocea și mesajele brandului pentru un brand de e-commerce pentru decorațiuni interioare.",
    "portfolio.project6.link": "Vezi proiectul",
    "portfolio.results.title": "Rezultate pentru Clienți",
    "portfolio.results.subtitle": "Impactul copywriting-ului strategic asupra rezultatelor de afaceri.",
    "portfolio.results.stat1.number": "45%",
    "portfolio.results.stat1.text": "Creștere medie a ratelor de deschidere a emailurilor",
    "portfolio.results.stat2.number": "120%",
    "portfolio.results.stat2.text": "Creștere a traficului organic pe site",
    "portfolio.results.stat3.number": "85%",
    "portfolio.results.stat3.text": "Creștere a conversiilor pe landing page",
    "portfolio.cta.title": "Pregătit să-ți creezi povestea de succes?",
    "portfolio.cta.subtitle": "Hai să lucrăm împreună pentru a crea texte care aduc rezultate excepționale pentru afacerea ta.",
    "portfolio.cta.button": "Începe proiectul",

    // Contact page
    "contact.hero.title": "Să ne conectăm",
    "contact.hero.subtitle": "Pregătit să discutăm despre nevoile tale de copywriting? Contactează-mă astăzi.",
    "contact.form.name": "Numele tău",
    "contact.form.email": "Emailul tău",
    "contact.form.message": "Mesajul tău",
    "contact.form.submit": "Trimite mesajul",
    "contact.alt.title": "Preferi o abordare directă?",
    "contact.alt.email": "Trimite-mi email la:",
    "contact.alt.phone": "Sună-mă la:",

    // Services page
    "services.hero.title": "Serviciile mele",
    "services.hero.subtitle": "Soluții profesionale de copywriting adaptate nevoilor afacerii tale.",
    
    // Navigation & Footer
    "nav.home": "Acasă",
    "nav.about": "Despre",
    "nav.services": "Servicii",
    "nav.portfolio": "Portofoliu",
    "nav.contact": "Contact",
    "footer.pages": "Pagini",
    "footer.contact": "Contact",
    "footer.rights": "© 2025 Liviu M.C. Copywriting. Proiectat și dezvoltat de Liviu M.C.",
    "footer.tagline": "Crearea de texte convingătoare care transformă cititorii ocazionali în clienți fideli.",
    
    // Language selector
    "language.select": "Selectează limba",
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get stored language or default to English
  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState<Language>(
    (storedLanguage as Language) || 'en'
  );

  // Function to change language
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Translation function
  const translate = (key: string): string => {
    // @ts-ignore - We know that translations[language] exists
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

