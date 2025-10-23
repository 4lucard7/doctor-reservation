import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', form);
    alert('Your message has been sent!');
    // Optionally reset form
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <p className="text-base font-medium text-gray-500 mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions or ready to start your project? We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="bg-white p-12 rounded-none shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">Get in touch</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-none mr-4">
                    {/* Phone SVG */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">Phone</h4>
                    <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-none mr-4">
                    {/* Email SVG */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">Email</h4>
                    <p className="text-lg text-gray-600">hello@company.com</p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-none mr-4">
                    {/* Address SVG */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">Office</h4>
                    <p className="text-lg text-gray-600">123 Business Ave, Suite 100<br/>New York, NY 10001</p>
                  </div>
                </div>
                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-none mr-4">
                    {/* Hours SVG */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">Business Hours</h4>
                    <p className="text-lg text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-black mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black text-lg"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-black mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black text-lg"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-black mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black text-lg"
                    placeholder="What is this regarding?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black text-lg"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
