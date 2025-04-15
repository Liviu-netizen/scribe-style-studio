
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent(`Website Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open default mail client with pre-filled information
      window.location.href = `mailto:orders@liviuthecopywriter.com?subject=${subject}&body=${body}`;
      
      toast({
        title: t("contact.form.success.title") || "Email Client Opened",
        description: t("contact.form.success.description") || "Your message has been prepared in your email client. Please send it to complete your request.",
      });

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t("contact.form.error.title") || "Error",
        description: t("contact.form.error.description") || "There was an issue opening your email client. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">{t("contact.hero.title")}</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-navy-800 mb-6">{t("contact.hero.title")}</h2>
              <p className="text-navy-700 mb-8">
                {t("contact.hero.subtitle")}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <Mail className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contact.alt.email")}</h3>
                    <a href="mailto:orders@liviuthecopywriter.com" className="text-navy-600 hover:text-navy-800 transition">
                      orders@liviuthecopywriter.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <Phone className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contact.alt.phone")}</h3>
                    <p className="text-navy-600">+40730377130</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <MapPin className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("about.industries.industry6")}</h3>
                    <p className="text-navy-600">Bucharest, Romania</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <ExternalLink className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Fiverr</h3>
                    <a href="https://www.fiverr.com/username" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-800 transition">
                      {t("contact.fiverr.link") || "Check out my services on Fiverr"}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-xl mb-4">{t("contact.hours.title") || "Office Hours"}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.hours.weekdays") || "Monday - Friday"}</span>
                    <span>{t("contact.hours.weekday_time") || "9:00 AM - 5:00 PM"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.hours.weekend") || "Saturday - Sunday"}</span>
                    <span>{t("contact.hours.weekend_time") || "Closed"}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h2 className="text-navy-800 mb-6">{t("contact.form.submit")}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-navy-700">
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-navy-700">
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1 text-navy-700">
                      {t("contact.form.service") || "Service Interested In"}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    >
                      <option value="">{t("contact.form.select_service") || "Select a service"}</option>
                      <option value="website">{t("contact.form.services.website") || "Website Copywriting"}</option>
                      <option value="social">{t("contact.form.services.social") || "Social Media Content"}</option>
                      <option value="email">{t("contact.form.services.email") || "Email Marketing"}</option>
                      <option value="blog">{t("contact.form.services.blog") || "Blog & Content Writing"}</option>
                      <option value="other">{t("contact.form.services.other") || "Other"}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-navy-700">
                      {t("contact.form.subject") || "Subject"}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-navy-700">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-navy-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-navy-600 text-white rounded-md font-medium flex items-center justify-center transition hover:bg-navy-700"
                  >
                    {t("contact.form.submit")} <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-cream-50 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-navy-800 mb-4">{t("contact.faq.title") || "Frequently Asked Questions"}</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              {t("contact.faq.subtitle") || "Common questions about working with me."}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t("contact.faq.q1") || "What is your process for starting a new project?"}</h3>
              <p className="text-navy-600">
                {t("contact.faq.a1") || "We begin with an initial consultation to understand your needs, goals, and brand voice. From there, I'll create a proposal outlining the scope, timeline, and cost of the project. Once approved, I'll start the research phase before moving on to drafting and revisions."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t("contact.faq.q2") || "How do you charge for your services?"}</h3>
              <p className="text-navy-600">
                {t("contact.faq.a2") || "I offer both project-based pricing and retainer packages depending on your needs. Project pricing is determined by scope, complexity, and timeline, while retainers provide ongoing support at a consistent monthly rate. I'm happy to discuss which option would be best for your specific situation."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t("contact.faq.q3") || "How many revisions are included in your service?"}</h3>
              <p className="text-navy-600">
                {t("contact.faq.a3") || "All projects include two rounds of revisions to ensure the final copy meets your expectations. Additional revisions can be arranged at an hourly rate if needed, but most clients find that two rounds are sufficient to achieve the desired result."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t("contact.faq.q4") || "What is the typical turnaround time for projects?"}</h3>
              <p className="text-navy-600">
                {t("contact.faq.a4") || "Turnaround time varies based on project scope and complexity. Small projects like email campaigns might take 1-2 weeks, while comprehensive website copy could take 3-4 weeks. I'll provide a specific timeline during our initial consultation and keep you updated on progress throughout the project."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
