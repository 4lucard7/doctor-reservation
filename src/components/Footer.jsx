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
  Send,
} from "lucide-react";

export default function Footer() {
  const navigation = {
    //page links
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
  };
  //social media links:
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", gradient: "from-blue-500 to-blue-700" },
    { name: "Twitter", icon: Twitter, href: "#", gradient: "from-sky-400 to-sky-600" },
    { name: "Instagram", icon: Instagram, href: "#", gradient: "from-pink-500 to-yellow-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", gradient: "from-blue-700 to-indigo-600" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg transform group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white leading-tight">MediCare</span>
                <div className="text-xs text-slate-300 -mt-0.5">Plateforme de réservation médicale</div>
              </div>
            </Link>

            <p className="text-slate-300/90 mb-6">
              Trouvez, comparez et réservez des consultations avec des professionnels de santé de confiance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-indigo-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white">+212 6 12 34 56 78</div>
                  <div className="text-xs text-slate-400">Support téléphonique</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-indigo-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white">contact@medicare.ma</div>
                  <div className="text-xs text-slate-400">Support par email</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-indigo-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white">Casablanca, Maroc</div>
                  <div className="text-xs text-slate-400">Cabinet principal</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-indigo-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white">Lun - Sam: 8h - 20h</div>
                  <div className="text-xs text-slate-400">Horaires d'ouverture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="hidden lg:block" />
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-300 hover:text-white hover:pl-2 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-300 hover:text-white hover:pl-2 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-2">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">Recevez conseils et actualités santé chaque semaine.</p>

            <form className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/6 transition"
                aria-label="Votre email"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md hover:scale-105 transition-transform"
                aria-label="S'abonner"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">OK</span>
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className={`w-10 h-10 rounded-full inline-flex items-center justify-center shadow-md transform transition-all hover:-translate-y-1`}
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  >
                    <span
                      className={`w-10 h-10 rounded-full inline-flex items-center justify-center`}
                      style={{
                        background: `linear-gradient(135deg, var(--start), var(--end))`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © 2025 MediCare. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link to="/contact" className="text-sm px-3 py-2 bg-white/5 rounded-lg hover:bg-white/6 transition">Contact</Link>
              <Link to="/reservation" className="text-sm px-3 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow hover:opacity-95 transition">Réserver</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}