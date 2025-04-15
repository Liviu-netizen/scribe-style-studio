import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  useEffect(() => {
    emailjs.init("YOUR_USER_ID");
    setEmailJSInitialized(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: 'liviu3667@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        service: formData.service,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-navy-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">Contact Me</h1>
          <p className="max-w-2xl mx-auto text-center text-xl text-slate-200">
            Let's discuss how I can help you with your copywriting needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-navy-800 mb-6">Get in Touch</h2>
              <p className="text-navy-700 mb-8">
                Have a project in mind or want to discuss how copywriting can help your business? I'd love to hear from you. Fill out the form or reach out directly using the contact information below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <Mail className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-navy-600">liviu3667@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <Phone className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-navy-600">+40730377130</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-50 p-3 rounded-full mr-4">
                    <MapPin className="text-navy-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
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
                      Check out my services on Fiverr
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="text-xl mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h2 className="text-navy-800 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-navy-700">
                      Name
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
                      Email
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
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Copywriting</option>
                      <option value="social">Social Media Content</option>
                      <option value="email">Email Marketing</option>
                      <option value="blog">Blog & Content Writing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-navy-700">
                      Subject
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
                      Message
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
                    disabled={isSubmitting || !emailJSInitialized}
                    className={`w-full py-3 px-4 bg-navy-600 text-white rounded-md font-medium flex items-center justify-center transition ${
                      isSubmitting || !emailJSInitialized ? 'opacity-75 cursor-not-allowed' : 'hover:bg-navy-700'
                    }`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
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
            <h2 className="text-navy-800 mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-navy-700">
              Common questions about working with me.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is your process for starting a new project?</h3>
              <p className="text-navy-600">
                We begin with an initial consultation to understand your needs, goals, and brand voice. From there, I'll create a proposal outlining the scope, timeline, and cost of the project. Once approved, I'll start the research phase before moving on to drafting and revisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How do you charge for your services?</h3>
              <p className="text-navy-600">
                I offer both project-based pricing and retainer packages depending on your needs. Project pricing is determined by scope, complexity, and timeline, while retainers provide ongoing support at a consistent monthly rate. I'm happy to discuss which option would be best for your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How many revisions are included in your service?</h3>
              <p className="text-navy-600">
                All projects include two rounds of revisions to ensure the final copy meets your expectations. Additional revisions can be arranged at an hourly rate if needed, but most clients find that two rounds are sufficient to achieve the desired result.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is the typical turnaround time for projects?</h3>
              <p className="text-navy-600">
                Turnaround time varies based on project scope and complexity. Small projects like email campaigns might take 1-2 weeks, while comprehensive website copy could take 3-4 weeks. I'll provide a specific timeline during our initial consultation and keep you updated on progress throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
