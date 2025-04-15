
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">Portfolio</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            Explore a selection of my copywriting projects across various industries.
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Website Copy</span>
                  <span className="text-navy-500 text-sm">2023</span>
                </div>
                <h3 className="text-xl font-medium mb-2">TechStart SaaS Platform</h3>
                <p className="text-navy-600 mb-4">
                  Complete website copy for a SaaS platform, including homepage, product pages, and pricing page.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Email Campaign</span>
                  <span className="text-navy-500 text-sm">2023</span>
                </div>
                <h3 className="text-xl font-medium mb-2">GrowthBound Nurture Sequence</h3>
                <p className="text-navy-600 mb-4">
                  A 5-part email nurture sequence that increased conversion rates by 45% for a B2B service company.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Social Media</span>
                  <span className="text-navy-500 text-sm">2022</span>
                </div>
                <h3 className="text-xl font-medium mb-2">FitLife Brand Voice & Content</h3>
                <p className="text-navy-600 mb-4">
                  Social media content strategy and copy that doubled engagement for a fitness brand.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Blog Content</span>
                  <span className="text-navy-500 text-sm">2022</span>
                </div>
                <h3 className="text-xl font-medium mb-2">EcoLiving Blog Series</h3>
                <p className="text-navy-600 mb-4">
                  A 12-part blog series on sustainable living that established the brand as an industry authority.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Landing Page</span>
                  <span className="text-navy-500 text-sm">2022</span>
                </div>
                <h3 className="text-xl font-medium mb-2">FinEdge Product Launch</h3>
                <p className="text-navy-600 mb-4">
                  High-converting landing page copy for a fintech product launch that exceeded conversion targets.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">Brand Voice</span>
                  <span className="text-navy-500 text-sm">2021</span>
                </div>
                <h3 className="text-xl font-medium mb-2">ModernHome Brand Guidelines</h3>
                <p className="text-navy-600 mb-4">
                  Complete brand voice and messaging guidelines for a home décor e-commerce brand.
                </p>
                <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
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
            <h2 className="text-navy-800 mb-4">Client Results</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              The impact of strategic copywriting on business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Result 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">45%</div>
              <p className="text-navy-600">Average increase in email open rates</p>
            </div>
            
            {/* Result 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">120%</div>
              <p className="text-navy-600">Growth in organic website traffic</p>
            </div>
            
            {/* Result 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-serif font-medium text-navy-700 mb-2">85%</div>
              <p className="text-navy-600">Increase in landing page conversions</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-navy-700 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-slate-200 mb-8">
                Let's work together to craft copy that delivers outstanding results for your business.
              </p>
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
