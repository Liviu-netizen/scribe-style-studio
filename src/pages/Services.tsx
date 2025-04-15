
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">{t("services.hero.title")}</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            {t("services.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              </div>
              <h2 className="text-navy-800 mb-4">{t("home.services.website.title")}</h2>
              <p className="text-navy-700 mb-6">
                {t("home.services.website.description")}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.website.feature1")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.website.feature2")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.website.feature3")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.website.feature4")}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                {t("home.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cream-50 p-6 rounded-xl">
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Website Copy Image
                </div>
              </div>
              <p className="text-navy-700 italic">
                {t("home.testimonials.1.quote")}
              </p>
              <p className="text-navy-500 text-sm mt-2">— Recent Client</p>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <h2 className="text-navy-800 mb-4">{t("home.services.social.title")}</h2>
              <p className="text-navy-700 mb-6">
                {t("home.services.social.description")}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.social.feature1")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.social.feature2")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.social.feature3")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.social.feature4")}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                {t("home.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cream-50 p-6 rounded-xl order-2 md:order-1">
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Social Media Content Image
                </div>
              </div>
              <p className="text-navy-700 italic">
                {t("services.social.testimonial")}
              </p>
              <p className="text-navy-500 text-sm mt-2">— Recent Client</p>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
              </div>
              <h2 className="text-navy-800 mb-4">{t("home.services.email.title")}</h2>
              <p className="text-navy-700 mb-6">
                {t("home.services.email.description")}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.email.feature1")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.email.feature2")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.email.feature3")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.email.feature4")}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                {t("home.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cream-50 p-6 rounded-xl">
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Email Marketing Image
                </div>
              </div>
              <p className="text-navy-700 italic">
                {t("home.testimonials.2.quote")}
              </p>
              <p className="text-navy-500 text-sm mt-2">— Recent Client</p>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M12 2v6.5"></path><path d="M16 2v6.5"></path><path d="M8 2v6.5"></path><path d="M2 9.5h20"></path><path d="M18 7v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7"></path></svg>
              </div>
              <h2 className="text-navy-800 mb-4">{t("services.blog.title")}</h2>
              <p className="text-navy-700 mb-6">
                {t("services.blog.description")}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.blog.feature1")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.blog.feature2")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.blog.feature3")}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-navy-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>{t("services.blog.feature4")}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                {t("home.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cream-50 p-6 rounded-xl order-2 md:order-1">
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Blog Writing Image
                </div>
              </div>
              <p className="text-navy-700 italic">
                {t("services.blog.testimonial")}
              </p>
              <p className="text-navy-500 text-sm mt-2">— Recent Client</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-cream-50 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-navy-800 mb-4">{t("services.process.title")}</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              {t("services.process.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">01</div>
              <h3 className="text-xl mb-3">{t("services.process.step1.title")}</h3>
              <p className="text-navy-600">
                {t("services.process.step1.description")}
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">02</div>
              <h3 className="text-xl mb-3">{t("services.process.step2.title")}</h3>
              <p className="text-navy-600">
                {t("services.process.step2.description")}
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">03</div>
              <h3 className="text-xl mb-3">{t("services.process.step3.title")}</h3>
              <p className="text-navy-600">
                {t("services.process.step3.description")}
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">04</div>
              <h3 className="text-xl mb-3">{t("services.process.step4.title")}</h3>
              <p className="text-navy-600">
                {t("services.process.step4.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-navy-700 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">{t("about.cta.title")}</h2>
              <p className="text-slate-200 mb-8">
                {t("about.cta.subtitle")}
              </p>
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block">
                {t("about.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
