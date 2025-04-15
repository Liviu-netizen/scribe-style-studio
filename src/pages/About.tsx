
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">About Me</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            Passionate about turning words into results for businesses of all sizes.
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
              <h2 className="text-navy-800 mb-4">Crafting Compelling Copy Since 2015</h2>
              <p className="text-navy-700 mb-6">
                With over 8 years of experience in the industry, I specialize in creating strategic, audience-focused copy that drives engagement and conversions. My approach combines creativity with data-driven insights to deliver content that not only sounds good but performs exceptionally well.
              </p>
              <p className="text-navy-700 mb-6">
                I've worked with businesses across various industries, from tech startups to established financial institutions, helping them communicate their value proposition and connect with their target audience through powerful words.
              </p>
              <p className="text-navy-700 mb-8">
                My mission is simple: to transform your ideas into impactful messages that resonate with your audience and inspire action.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-navy-800 mb-4">Expertise & Skills</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              Leveraging experience and industry knowledge to deliver exceptional copy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">01</div>
              <h3 className="text-xl mb-3">Brand Voice Development</h3>
              <p className="text-navy-600">
                Creating and refining distinctive brand voices that stand out in crowded markets and build strong connections with target audiences.
              </p>
            </div>
            
            {/* Skill 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">02</div>
              <h3 className="text-xl mb-3">Conversion Copywriting</h3>
              <p className="text-navy-600">
                Writing persuasive, action-oriented copy that guides readers through the customer journey and encourages them to take specific steps.
              </p>
            </div>
            
            {/* Skill 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-navy-600 mb-4 text-xl font-medium font-serif">03</div>
              <h3 className="text-xl mb-3">SEO Content Strategy</h3>
              <p className="text-navy-600">
                Developing content that balances search engine optimization with engaging, value-driven information that serves both algorithms and human readers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-xl mb-6">Industries I've Worked With</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>Technology & SaaS</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>E-commerce</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>Finance & Fintech</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>Healthcare</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>Education</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-navy-600 mr-2 h-5 w-5" />
                <span>Real Estate</span>
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
              <h2 className="mb-4">Ready to Tell Your Story?</h2>
              <p className="text-slate-200 mb-8">
                Let me help you craft a narrative that engages your audience and achieves your business goals.
              </p>
              <Link to="/contact" className="bg-cream-400 text-navy-900 hover:bg-cream-300 px-8 py-3 rounded-md font-medium text-lg transition duration-300 inline-block">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
