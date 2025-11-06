import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, TrendingUp, Heart, Target, Award, CheckCircle } from "lucide-react";

export default function AboutCompany() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Soin et Compassion",
      description: "Nous plaçons le bien-être de nos patients au cœur de tout ce que nous faisons",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Target,
      title: "Excellence Médicale",
      description: "Des standards de qualité élevés pour des soins de santé optimaux",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Innovation Continue",
      description: "Adoption des dernières technologies et méthodologies médicales",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Patients satisfaits", color: "from-blue-500 to-indigo-600" },
    { icon: Award, value: "100+", label: "Médecins experts", color: "from-purple-500 to-pink-600" },
    { icon: Globe, value: "15+", label: "Spécialités", color: "from-emerald-500 to-green-600" },
    { icon: CheckCircle, value: "5+", label: "Années d'expérience", color: "from-orange-500 to-red-600" },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Équipe d'Experts",
      description: "50+ professionnels qualifiés avec des années d'expérience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Portée Nationale",
      description: "Servant des patients dans toutes les régions du Maroc",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Innovation Médicale",
      description: "Toujours à la pointe des dernières technologies médicales",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              À propos de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">MediCare</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Votre partenaire de confiance pour des soins médicaux de qualité depuis 2020
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Construire l'Avenir de la Santé Aujourd'hui
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fondé en 2020, MediCare a été à l'avant-garde de la transformation digitale 
                  dans le secteur médical, aidant des milliers de patients à travers le Maroc 
                  à accéder à des soins de qualité grâce à nos solutions innovantes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Notre équipe de médecins experts, spécialistes et personnel soignant 
                  travaille sans relâche pour fournir des solutions de pointe qui répondent 
                  non seulement aux défis d'aujourd'hui mais anticipent aussi les opportunités de demain.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to="/reservation"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Prendre Rendez-vous
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className={`transition-all duration-1000 delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                    alt="Notre équipe médicale"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-md bg-white/90 p-6 rounded-2xl shadow-xl">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">5+</div>
                          <div className="text-sm text-gray-600 font-medium">Années</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">100+</div>
                          <div className="text-sm text-gray-600 font-medium">Médecins</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text">10K+</div>
                          <div className="text-sm text-gray-600 font-medium">Patients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre mission quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Rendre les soins médicaux de qualité accessibles à tous grâce à la technologie, 
              en connectant les patients avec les meilleurs professionnels de santé et en 
              simplifiant le processus de prise de rendez-vous.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}