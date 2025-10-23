import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Send
} from "lucide-react";

export default function Footer() {
  const navigation = {
    services: [
      { name: "Consultation en ligne", href: "/services" },
      { name: "Rendez-vous urgents", href: "/reservation" },
      { name: "Spécialités médicales", href: "/services" },
      { name: "Téléconsultation", href: "/services" },
    ],
    company: [
      { name: "À propos", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Réservation", href: "/reservation" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Confidentialité", href: "/privacy" },
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Mentions légales", href: "/legal" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl group-hover:shadow-lg group-hover:scale-110 transition-all">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">MediCare</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre plateforme de réservation médicale en ligne. 
              Trouvez et consultez les meilleurs médecins.
            </p>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm group">
                <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-500" />
                </div>
                <span>+212 6 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <span>contact@medicare.ma</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Clock className="w-4 h-4 text-blue-500" />
                </div>
                <span>Lun - Sam: 8h - 20h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm hover:text-blue-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm hover:text-blue-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Recevez nos actualités et conseils santé.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2025 MediCare. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`bg-gray-800 p-2.5 rounded-lg ${social.color} transition-all hover:scale-110 group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}