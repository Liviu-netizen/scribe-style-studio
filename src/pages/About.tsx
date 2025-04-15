
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">{t("about.hero.title")}</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-navy-300 to-navy-500 flex items-center justify-center text-white text-opacity-30 text-xl">
                    Professional Image
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-cream-100 p-6 rounded-md shadow-lg">
                  <p className="font-serif text-navy-800 text-lg italic">
                    "Words have power. I harness that power for your business."
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-navy-800 mb-4">{t("about.main.title")}</h2>
              <p className="text-navy-700 mb-6">
                {t("about.main.p1")}
              </p>
              <p className="text-navy-700 mb-6">
                {t("about.main.p2")}
              </p>
              <p className="text-navy-700 mb-8">
                {t("about.main.p3")}
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                {t("about.main.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-navy-800 mb-4">{t("about.expertise.title")}</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              {t("about.expertise.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">{t("about.expertise.skill1.number")}</div>
              <h3 className="text-xl mb-3">{t("about.expertise.skill1.title")}</h3>
              <p className="text-navy-600">
                {t("about.expertise.skill1.description")}
              </p>
            </div>
            
            {/* Skill 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">{t("about.expertise.skill2.number")}</div>
              <h3 className="text-xl mb-3">{t("about.expertise.skill2.title")}</h3>
              <p className="text-navy-600">
                {t("about.expertise.skill2.description")}
              </p>
            </div>
            
            {/* Skill 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">{t("about.expertise.skill3.number")}</div>
              <h3 className="text-xl mb-3">{t("about.expertise.skill3.title")}</h3>
              <p className="text-navy-600">
                {t("about.expertise.skill3.description")}
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-xl mb-6">{t("about.industries.title")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry1")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry2")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry3")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry4")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry5")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>{t("about.industries.industry6")}</span>
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

export default About;
