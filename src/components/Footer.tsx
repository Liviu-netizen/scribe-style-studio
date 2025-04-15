
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-medium">Liviu M.C.</Link>
            <p className="text-slate-300 max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cream-300 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cream-300 transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/" className="text-white hover:text-cream-300 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Pages Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{t("footer.pages")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-300 hover:text-white transition">{t("nav.home")}</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition">{t("nav.about")}</Link>
              <Link to="/services" className="text-slate-300 hover:text-white transition">{t("nav.services")}</Link>
              <Link to="/portfolio" className="text-slate-300 hover:text-white transition">{t("nav.portfolio")}</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition">{t("nav.contact")}</Link>
            </nav>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{t("footer.contact")}</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>orders@liviuthecopywriter.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>+40730377130</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>Bucharest, Romania</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-10 pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-slate-400 text-sm">
            {t("footer.rights")}
          </p>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
