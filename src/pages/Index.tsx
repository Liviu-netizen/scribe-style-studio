
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, Quote, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{t("home.hero.title")}</h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-200">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
                {t("home.hero.cta1")}
              </Link>
              <Link to="/services" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
                {t("home.hero.cta2")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("home.services.title")}</h2>
            <p className="max-w-2xl mx-auto text-navy-600">
              {t("home.services.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t("home.services.website.title")}</h3>
              <p className="text-navy-600 mb-4">
                {t("home.services.website.description")}
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                {t("home.services.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t("home.services.social.title")}</h3>
              <p className="text-navy-600 mb-4">
                {t("home.services.social.description")}
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                {t("home.services.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{t("home.services.email.title")}</h3>
              <p className="text-navy-600 mb-4">
                {t("home.services.email.description")}
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                {t("home.services.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center">
              {t("home.services.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-cream-50 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("home.testimonials.title")}</h2>
            <p className="max-w-2xl mx-auto text-navy-600">
              {t("home.testimonials.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote size={32} className="text-navy-200" />
              </div>
              <p className="italic mb-6 text-navy-700">
                "{t("home.testimonials.1.quote")}"
              </p>
              <div>
                <p className="font-medium">{t("home.testimonials.1.name")}</p>
                <p className="text-sm text-navy-500">{t("home.testimonials.1.position")}</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote size={32} className="text-navy-200" />
              </div>
              <p className="italic mb-6 text-navy-700">
                "{t("home.testimonials.2.quote")}"
              </p>
              <div>
                <p className="font-medium">{t("home.testimonials.2.name")}</p>
                <p className="text-sm text-navy-500">{t("home.testimonials.2.position")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-navy-700 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">{t("home.cta.title")}</h2>
              <p className="text-slate-200 mb-8">
                {t("home.cta.subtitle")}
              </p>
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block">
                {t("home.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
