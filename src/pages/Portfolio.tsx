
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">{t("portfolio.hero.title")}</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            {t("portfolio.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project1.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project1.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project1.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project1.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project1.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project2.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project2.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project2.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project2.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project2.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project3.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project3.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project3.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project3.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project3.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project4.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project4.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project4.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project4.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project4.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project5.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project5.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project5.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project5.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project5.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="aspect-video bg-slate-200">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{t("portfolio.project6.type")}</span>
                  <span className="text-navy-500 text-sm">{t("portfolio.project6.year")}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{t("portfolio.project6.title")}</h3>
                <p className="text-navy-600 mb-4">
                  {t("portfolio.project6.description")}
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  {t("portfolio.project6.link")} <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-cream-50 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-navy-800 mb-4">{t("portfolio.results.title")}</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              {t("portfolio.results.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Result 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">{t("portfolio.results.stat1.number")}</div>
              <p className="text-navy-600">{t("portfolio.results.stat1.text")}</p>
            </div>
            
            {/* Result 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">{t("portfolio.results.stat2.number")}</div>
              <p className="text-navy-600">{t("portfolio.results.stat2.text")}</p>
            </div>
            
            {/* Result 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">{t("portfolio.results.stat3.number")}</div>
              <p className="text-navy-600">{t("portfolio.results.stat3.text")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-navy-700 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">{t("portfolio.cta.title")}</h2>
              <p className="text-slate-200 mb-8">
                {t("portfolio.cta.subtitle")}
              </p>
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block">
                {t("portfolio.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
