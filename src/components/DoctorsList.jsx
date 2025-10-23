import { Link } from "react-router-dom";

export default function DoctorsList({ doctors }) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          👨‍⚕️ Nos Médecins
        </h2>

        {doctors.length === 0 ? (
          <p className="text-center text-gray-500">
            Chargement des médecins...
          </p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={
                    doctor.image ||
                    `https://randomuser.me/api/portraits/${
                      index % 2 === 0 ? "men" : "women"
                    }/${index % 99}.jpg`
                  }
                  alt={doctor.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {doctor.specialty}
                  </p>

                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all block mt-3"
                  >
                    Voir profil
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

