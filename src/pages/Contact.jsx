import { useState } from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire de contact soumis:', form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 6 12 34 56 78",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@medicare.ma",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Casablanca, Maroc",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Heures d'ouverture",
      content: "Lun - Sam: 8h - 20h",
      color: "from-orange-500 to-orange-600"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Message envoyé!
          </h2>
          <p className="text-gray-600">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Contactez-<span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">nous</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Des questions ou prêt à prendre rendez-vous ? Nous serions ravis de vous entendre. 
              Contactez-nous et prenons soin de votre santé ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white">
                <h2 className="text-3xl font-bold mb-8">Restons en contact</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-3">Besoin d'une consultation urgente ?</h4>
                  <p className="text-gray-300 mb-4">
                    Notre équipe est disponible pour les urgences médicales 24h/24 et 7j/7.
                  </p>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Urgence médicale
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Envoyez-nous un message
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Votre nom complet"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Objet de votre message"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                      placeholder="Décrivez votre demande..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Notre localisation</h3>
                <p className="text-gray-600">Casablanca, Maroc</p>
                <p className="text-gray-500 text-sm mt-2">Carte interactive disponible prochainement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}