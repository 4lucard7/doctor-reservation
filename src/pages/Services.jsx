import { Link } from "react-router-dom";
import { Heart, Stethoscope, Activity, Microscope, Syringe, FileText, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Consultations",
      subtitle: "Générales",
      description: "Consultations médicales pour tous types de problèmes de santé au quotidien.",
      bg: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Stethoscope,
      title: "Spécialistes",
      subtitle: "Cardiologie",
      description: "Examens et traitements spécialisés du cœur et du système cardiovasculaire.",
      bg: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Activity,
      title: "Radiologie",
      subtitle: "et Imagerie",
      description: "Examens d'imagerie médicale avancés pour un diagnostic précis.",
      bg: "from-purple-500 to-violet-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Microscope,
      title: "Analyses",
      subtitle: "Médicales",
      description: "Laboratoire d'analyses complètes pour tous vos besoins médicaux.",
      bg: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Syringe,
      title: "Chirurgie",
      subtitle: "et Soins",
      description: "Interventions chirurgicales et soins post-opératoires de qualité.",
      bg: "from-orange-500 to-amber-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: FileText,
      title: "Suivi",
      subtitle: "et Conseils",
      description: "Accompagnement personnalisé et conseils médicaux adaptés à vos besoins.",
      bg: "from-cyan-500 to-blue-600",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Services Médicaux</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Une gamme complète de services de santé pour répondre à tous vos besoins médicaux
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header avec gradient */}
                <div className={`h-32 bg-gradient-to-r ${service.bg} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8 relative">
                  {/* Icône */}
                  <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center -mt-16 mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">
                    {service.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bouton */}
                  <Link
                    to="/reservation"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.bg} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all group`}
                  >
                    Réserver
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Besoin d'un service spécifique?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}