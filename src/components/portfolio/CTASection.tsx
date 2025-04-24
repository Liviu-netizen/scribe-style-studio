
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection = ({ title, subtitle, buttonText }: CTASectionProps) => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="bg-navy-700 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">{title}</h2>
            <p className="text-slate-200 mb-8">{subtitle}</p>
            <Link 
              to="/contact" 
              className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

