import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";

export default function AboutCompany(){
  
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Équipe d'Experts",
      description: "50+ professionnels qualifiés avec des années d'expérience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Portée Nationale",
      description: "Servant des patients dans toutes les régions du Maroc",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Innovation Médicale",
      description: "Toujours à la pointe des dernières technologies médicales",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                À propos de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">MediCare</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre partenaire de confiance pour des soins médicaux de qualité depuis 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="items-center grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className={`transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <div className={`transition-all duration-1000 ease-out delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              </div>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <div className={`transition-all duration-1000 ease-out delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Notre équipe médicale"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-sm bg-white/90 p-6 rounded-2xl shadow-lg">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-800">5+</div>
                          <div className="text-sm text-gray-600">Années d'expérience</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">50+</div>
                          <div className="text-sm text-gray-600">Médecins</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">25+</div>
                          <div className="text-sm text-gray-600">Spécialités</div>
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

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl mx-6 mb-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Notre Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Rendre les soins médicaux de qualité accessibles à tous grâce à la technologie, 
            en connectant les patients avec les meilleurs professionnels de santé et en 
            simplifiant le processus de prise de rendez-vous.
          </p>
        </div>
      </section>
    </div>
  );
}

