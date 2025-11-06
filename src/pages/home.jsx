import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Calendar, Clock, Shield, Users, Star, ArrowRight, Heart, Stethoscope, TrendingUp } from "lucide-react";

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les médecins depuis l'API
    axios
      .get("https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors")
      .then((response) => {
        setDoctors(response.data.slice(0, 3)); // Prendre les 3 premiers
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setLoading(false);
      });
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Réservation facile",
      description: "Prenez rendez-vous en quelques clics, 24h/24",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Disponibilité rapide",
      description: "Des créneaux disponibles sous 48h",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Vos données médicales sont protégées",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Médecins qualifiés",
      description: "Plus de 100 professionnels certifiés",
      color: "from-orange-500 to-red-600"
    },
  ];

  const stats = [
    { value: "10K+", label: "Patients satisfaits", icon: Users },
    { value: "100+", label: "Médecins experts", icon: Stethoscope },
    { value: "15+", label: "Spécialités", icon: Heart },
    { value: "24/7", label: "Support disponible", icon: Clock },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium">Plateforme de santé #1 au Maroc</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Votre santé,{" "}
                <span className="bg-gradient-to-r from-pink-400 to-yellow-400 text-transparent bg-clip-text">
                  notre priorité
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Trouvez le bon médecin et réservez votre consultation en ligne en quelques clics. 
                Simple, rapide et sécurisé.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/reservation"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all group"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Nos services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-200 group-hover:text-white transition-colors" />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Médecins professionnels"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pourquoi choisir MediCare?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une expérience de réservation médicale simple et sécurisée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Médecins populaires
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns de nos médecins les plus appréciés
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <img
                        src={
                          doctor.photo ||
                          doctor.image ||
                          `https://randomuser.me/api/portraits/${
                            index % 2 === 0 ? "men" : "women"
                          }/${(doctor.id % 99) + 1}.jpg`
                        }
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4 fill-white" />
                        <span className="text-sm font-bold">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-6">
                      {doctor.specialty}
                    </p>
                    <Link
                      to={`/doctor/${doctor.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all group"
                    >
                      Voir profil
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-lg group"
            >
              Voir tous les médecins
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Stethoscope className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'aide?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Notre équipe est disponible pour vous accompagner 24/7.
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