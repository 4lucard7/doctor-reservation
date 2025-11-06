import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

export default function DoctorProfile() {
  const { id } = useParams();
  const location = useLocation();
  const doctorFromState = location.state?.doctor; 
  const [doctor, setDoctor] = useState(doctorFromState || null);
  const [loading, setLoading] = useState(!doctorFromState); 

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
                state={{ doctor }} 
                className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                Prendre RDV
              </Link>
            </div>
          </div>

          {/* Autres informations comme contact, qualifications, etc. */}
          <div className="px-8 pb-8">
            {(() => {
              const defaultNameKey = (doctor.name || "medecin").toLowerCase().replace(/\s+/g, "");
              const contact = {
                phone: doctor.phone || "06 12 34 56 78",
                email: doctor.email || `${defaultNameKey}@example.com`,
                address: doctor.address || "Clinique Centrale, 12 Rue Principale, 75000 Rabat",
              };

              const qualifications =
                doctor.qualifications && doctor.qualifications.length
                  ? doctor.qualifications
                  : [
                      "Doctorat en médecine",
                      doctor.specialty ? `Spécialisation en ${doctor.specialty}` : "Spécialisation non renseignée",
                      "Membre de l'ordre des médecins",
                    ];

              const experienceYears =
                doctor.experienceYears ||
                (Number(doctor.id) ? (Number(doctor.id) % 20) + 3 : 5);

              const languages = doctor.languages && doctor.languages.length
                ? doctor.languages
                : ["Français", "Anglais"];

              const hours = doctor.hours && doctor.hours.length
                ? doctor.hours
                : ["Lun - Ven : 09:00 - 17:00", "Sam : 09:00 - 12:00"];

              return (
                <div className="grid gap-6 md:grid-cols-3 p-6">
                  {/* Contact card */}
                  <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-semibold">T</div>
                        <div>
                          <div className="font-medium text-gray-800">{contact.phone}</div>
                          <div className="text-xs text-gray-500">Téléphone</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-semibold">@</div>
                        <div>
                          <div className="font-medium text-gray-800 break-all">{contact.email}</div>
                          <div className="text-xs text-gray-500">Email</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600 font-semibold">L</div>
                        <div>
                          <div className="font-medium text-gray-800">{contact.address}</div>
                          <div className="text-xs text-gray-500">Adresse</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Qualifications & languages */}
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-800">Qualifications & Expérience</h4>
                      <span className="text-sm text-gray-500">{experienceYears} ans</span>
                    </div>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {qualifications.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <div className="text-sm text-gray-600 mb-2"><strong>Langues :</strong> {languages.join(", ")}</div>
                      <div className="flex flex-wrap gap-2">
                        {languages.map((l, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hours & CTA */}
                  <div className="bg-gradient-to-tr from-indigo-600 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">Horaires & Cabinet</h4>
                        <p className="text-sm opacity-90 mt-1">{doctor.officeName || "Cabinet Privé"}</p>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold">{doctor.rating ?? "4.8"}</div>
                        <div className="text-xs opacity-90">Note moyenne</div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm">
                      {hours.map((h, i) => (
                        <li key={i} className="bg-white/12 rounded-md px-3 py-2">{h}</li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link
                        to={`/reservation-form?doctorId=${doctor.id}`}
                        state={{ doctor }}
                        className="inline-block w-full text-center bg-white text-indigo-700 font-semibold py-2 rounded-lg shadow-sm hover:opacity-95"
                      >
                        Prendre RDV
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}