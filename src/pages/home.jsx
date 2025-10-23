export default function Home() {
  const doctors = [
    { id: 1, name: "Dr. Amal Benkirane", specialty: "Cardiologue", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Dr. Youssef El Fassi", specialty: "Dentiste", photo: "https://randomuser.me/api/portraits/men/46.jpg" },
    { id: 3, name: "Dr. Salma Idrissi", specialty: "Généraliste", photo: "https://randomuser.me/api/portraits/women/47.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Réservez{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  votre médecin
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Trouvez le bon médecin et réservez votre consultation en ligne en quelques clics.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                Commencer maintenant
              </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full filter blur-3xl opacity-30"></div>
                <img
                  src="https://img.freepik.com/free-photo/doctor-wearing-stethoscope_23-2147828276.jpg"
                  alt="Doctor illustration"
                  className="relative z-10 w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Médecins populaires
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos médecins les plus recommandés par nos patients
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {doctor.specialty}
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all w-full">
                    Voir profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour vous accompagner 24/7.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}