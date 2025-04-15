import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, Quote, Star } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Words that Work. Copy that Converts.</h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-200">
              Elevate your brand with strategic copywriting that engages your audience and drives results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
                Get in Touch
              </Link>
              <Link to="/services" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition duration-300">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Copywriting Services</h2>
            <p className="max-w-2xl mx-auto text-navy-600">
              Strategic writing solutions tailored to your unique business needs and audience expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Website Copy</h3>
              <p className="text-navy-600 mb-4">
                Compelling website content that engages visitors and drives conversions.
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Social Media Content</h3>
              <p className="text-navy-600 mb-4">
                Engaging posts and captions that boost engagement and foster community.
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
              <div className="bg-navy-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-600"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Email Campaigns</h3>
              <p className="text-navy-600 mb-4">
                Strategic email sequences that nurture leads and drive customer action.
              </p>
              <Link to="/services" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-cream-50 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Client Testimonials</h2>
            <p className="max-w-2xl mx-auto text-navy-600">
              See what clients have to say about working with WordCraft Copywriting.
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
                "The website copy exceeded our expectations. It perfectly captured our brand voice and has significantly improved our conversion rates. Truly exceptional work!"
              </p>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-navy-500">Marketing Director, TechStart</p>
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
                "Our email campaign open rates increased by 45% with the new copy. The writing was clear, compelling, and exactly what our audience needed to hear."
              </p>
              <div>
                <p className="font-medium">Michael Anderson</p>
                <p className="text-sm text-navy-500">CEO, GrowthBound</p>
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
              <h2 className="mb-4">Ready to Transform Your Copy?</h2>
              <p className="text-slate-200 mb-8">
                Let's collaborate to create compelling content that resonates with your audience and drives results.
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

export default Index;
