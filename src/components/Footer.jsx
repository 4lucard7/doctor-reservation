import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const navigation = {
    services: [
      { name: "Consultation en ligne", href: "/services/online" },
      { name: "Rendez-vous urgents", href: "/services/urgent" },
      { name: "Spécialités médicales", href: "/specialties" },
      { name: "Téléconsultation", href: "/services/tele" },
    ],
    specialties: [
      { name: "Cardiologie", href: "/doctors?specialty=cardiology" },
      { name: "Pédiatrie", href: "/doctors?specialty=pediatrics" },
      { name: "Dermatologie", href: "/doctors?specialty=dermatology" },
      { name: "Médecine générale", href: "/doctors?specialty=general" },
    ],
    company: [
      { name: "À propos", href: "/about" },
      { name: "Notre équipe", href: "/team" },
      { name: "Carrières", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Confidentialité", href: "/privacy" },
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Mentions légales", href: "/legal" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.keys(navigation).map((category) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation[category].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex space-x-6">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.name} to={item.href} className="text-gray-400 hover:text-white">
                <Icon className="h-6 w-6" />
                <span className="sr-only">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}