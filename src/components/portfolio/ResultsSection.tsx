
import React from 'react';

interface StatProps {
  number: string;
  text: string;
}

const Stat = ({ number, text }: StatProps) => (
  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
    <div className="text-3xl font-serif font-medium text-navy-700 mb-2">{number}</div>
    <p className="text-navy-600">{text}</p>
  </div>
);

interface ResultsSectionProps {
  title: string;
  subtitle: string;
  stats: Array<{
    number: string;
    text: string;
  }>;
}

const ResultsSection = ({ title, subtitle, stats }: ResultsSectionProps) => {
  return (
    <section className="bg-cream-50 section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-navy-800 mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto text-navy-700">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

