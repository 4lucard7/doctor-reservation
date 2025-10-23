import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

export default function DoctorProfile() {
  const { id } = useParams();
  const location = useLocation();
  const doctorFromState = location.state?.doctor; // data men DoctorsList
  const [doctor, setDoctor] = useState(doctorFromState || null);
  const [loading, setLoading] = useState(!doctorFromState); // si déjà data, ma3andnach loading

  useEffect(() => {
    if (!doctorFromState) {
      setLoading(true);
      axios
        .get(`https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors/${id}`)
        .then((response) => {
          setDoctor(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur:", error);
          setLoading(false);
        });
    }
  }, [id, doctorFromState]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Médecin non trouvé</p>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/reservation"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la liste
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>

          <div className="relative px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 pb-8 border-b border-gray-200">
              <img
                src={
                  doctor.image ||
                  `https://randomuser.me/api/portraits/${
                    doctor.id % 2 === 0 ? "men" : "women"
                  }/${doctor.id % 99}.jpg`
                }
                alt={doctor.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-md"
              />

              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
                <p className="text-blue-600 text-lg font-semibold mt-1">{doctor.specialty}</p>
                {doctor.description && (
                  <p className="text-gray-600 mt-2">{doctor.description}</p>
                )}
              </div>

              <Link
                to={`/reservation-form?doctorId=${doctor.id}`}
                state={{ doctor }} // passer data f form
                className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                Prendre RDV
              </Link>
            </div>
          </div>

          {/* Autres informations comme contact, qualifications, etc. */}
        </div>
      </div>
    </div>
  );
}
