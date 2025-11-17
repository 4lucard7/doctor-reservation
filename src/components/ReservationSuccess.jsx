import { useLocation, Link, useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, Clock, User, Mail, Phone, FileText, Home } from "lucide-react";
import { useEffect } from "react";

export default function ReservationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

  // Si pas de données de réservation, rediriger vers la page d'accueil
  useEffect(() => {
    if (!reservation) {
      navigate("/");
    }
  }, [reservation, navigate]);

  if (!reservation) {
    return null;
  }

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const serviceLabels = {
    consultation_generale: "Consultation générale",
    consultation_specialiste: "Consultation spécialiste",
    urgence: "Urgence",
    suivi: "Suivi médical"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 animate-bounce">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Réservation Confirmée !
          </h1>
          <p className="text-xl text-gray-600">
            Votre rendez-vous a été enregistré avec succès
          </p>
        </div>

        {/* Reservation Details Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-6 px-8">
            <h2 className="text-2xl font-bold text-white text-center">
              Détails de votre rendez-vous
            </h2>
          </div>

          <div className="p-8 space-y-6">
            {/* Patient Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Nom complet</p>
                  <p className="text-lg font-bold text-gray-800">{reservation.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Email</p>
                  <p className="text-lg font-bold text-gray-800">{reservation.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Téléphone</p>
                  <p className="text-lg font-bold text-gray-800">{reservation.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Type de consultation</p>
                  <p className="text-lg font-bold text-gray-800">
                    {serviceLabels[reservation.service]}
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time - Highlighted */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 p-4 rounded-xl">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Date du rendez-vous</p>
                    <p className="text-xl font-bold text-gray-800">
                      {formatDate(reservation.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-500 p-4 rounded-xl">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Heure</p>
                    <p className="text-xl font-bold text-gray-800">{reservation.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message if exists */}
            {reservation.message && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500 font-semibold mb-2">Message additionnel</p>
                <p className="text-gray-700">{reservation.message}</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-2">📧 Confirmation envoyée</h3>
          <p className="text-blue-800">
            Un email de confirmation a été envoyé à <strong>{reservation.email}</strong> avec tous les détails de votre rendez-vous.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>

          <Link
            to="/reservation"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Nouveau rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}