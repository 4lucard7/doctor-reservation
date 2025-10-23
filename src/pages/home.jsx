export default function Home() {
  const doctors = [
    { id: 1, name: "Dr. Amal Benkirane", specialty: "Cardiologue", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Dr. Youssef El Fassi", specialty: "Dentiste", photo: "https://randomuser.me/api/portraits/men/46.jpg" },
    { id: 3, name: "Dr. Salma Idrissi", specialty: "Généraliste", photo: "https://randomuser.me/api/portraits/women/47.jpg" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Réservez{" "}
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
                  votre médecin
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Trouvez le bon médecin et réservez votre consultation en ligne en quelques clics.
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                Commencer maintenant
              </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30" />
                <img
                  src="https://img.freepik.com/free-photo/doctor-wearing-stethoscope_23-2147828276.jpg"
                  alt="Doctor illustration"
                  className="relative z-10 w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 👨‍⚕️ Doctors Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Médecins populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">{doctor.name}</h3>
                <p className="text-gray-500 text-center mb-4">{doctor.specialty}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition">
                  Voir profil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d’aide ?</h2>
        <p className="text-lg mb-6">Notre équipe est disponible pour vous accompagner 24/7.</p>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
          Contactez-nous
        </button>
      </section>
    </div>
  );
}
