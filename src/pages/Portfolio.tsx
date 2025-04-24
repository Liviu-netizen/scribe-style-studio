import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ResultsSection from '@/components/portfolio/ResultsSection';
import CTASection from '@/components/portfolio/CTASection';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      type: t("portfolio.project1.type"),
      year: t("portfolio.project1.year"),
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.description"),
      linkText: t("portfolio.project1.link"),
      thumbnailUrl: "/lovable-uploads/044bd646-ff08-428b-ac26-163ab10e7d66.png",
      fullImageUrl: "/lovable-uploads/43ea12ba-7675-4a5b-b391-f9c15bf811b1.png"
    },
    {
      type: t("portfolio.project2.type"),
      year: t("portfolio.project2.year"),
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      linkText: t("portfolio.project2.link")
    },
    {
      type: t("portfolio.project3.type"),
      year: t("portfolio.project3.year"),
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.description"),
      linkText: t("portfolio.project3.link")
    },
    {
      type: t("portfolio.project4.type"),
      year: t("portfolio.project4.year"),
      title: t("portfolio.project4.title"),
      description: t("portfolio.project4.description"),
      linkText: t("portfolio.project4.link")
    },
    {
      type: t("portfolio.project5.type"),
      year: t("portfolio.project5.year"),
      title: t("portfolio.project5.title"),
      description: t("portfolio.project5.description"),
      linkText: t("portfolio.project5.link")
    },
    {
      type: t("portfolio.project6.type"),
      year: t("portfolio.project6.year"),
      title: t("portfolio.project6.title"),
      description: t("portfolio.project6.description"),
      linkText: t("portfolio.project6.link")
    }
  ];

  const stats = [
    {
      number: t("portfolio.results.stat1.number"),
      text: t("portfolio.results.stat1.text")
    },
    {
      number: t("portfolio.results.stat2.number"),
      text: t("portfolio.results.stat2.text")
    },
    {
      number: t("portfolio.results.stat3.number"),
      text: t("portfolio.results.stat3.text")
    }
  ];

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
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <ResultsSection
        title={t("portfolio.results.title")}
        subtitle={t("portfolio.results.subtitle")}
        stats={stats}
      />

      {/* CTA Section */}
      <CTASection
        title={t("portfolio.cta.title")}
        subtitle={t("portfolio.cta.subtitle")}
        buttonText={t("portfolio.cta.button")}
      />
    </Layout>
  );
};

export default Portfolio;
