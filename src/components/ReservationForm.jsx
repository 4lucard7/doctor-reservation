import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ReservationForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const doctorId = searchParams.get("doctorId");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
    doctorId: doctorId || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError(""); // Clear error when user types
  };

  const validateForm = () => {
    const required = ["name", "email", "phone", "date", "time", "service"];
    for (const field of required) {
      const val = formData[field];
      if (!val || (typeof val === "string" && val.trim() === "")) {
        setError("Veuillez remplir tous les champs obligatoires.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];

    // SAME PERSON CANNOT RESERVE TWICE
    const samePerson = storedReservations.some(
      (r) => r.email === formData.email || r.phone === formData.phone
    );

    if (samePerson) {
      setError("Vous avez déjà un rendez-vous. Impossible de réserver 2 fois.");
      return;
    }

    // SAME DATE + TIME RESERVED ALREADY
    const sameDateTime = storedReservations.some(
      (r) => r.date === formData.date && r.time === formData.time
    );

    if (sameDateTime) {
      setError("Cette date et heure sont déjà réservées.");
      return;
    }

    // ✔ Save
    storedReservations.push(formData);
    localStorage.setItem("reservations", JSON.stringify(storedReservations));

    // Navigate to success page
    navigate("/reservation-success", { 
      state: { 
        reservation: formData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/reservation"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la liste
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Formulaire de Réservation
            </h1>
            <p className="text-blue-100 mt-2">
              Réservez votre consultation en ligne
            </p>
          </div>

          <form className="py-8 px-8" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            <input
              type="hidden"
              id="doctorId"
              value={formData.doctorId}
              readOnly
            />

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Type de consultation
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                >
                  <option value="">Sélectionnez le type</option>
                  <option value="consultation_generale">
                    Consultation générale
                  </option>
                  <option value="consultation_specialiste">
                    Consultation spécialiste
                  </option>
                  <option value="urgence">Urgence</option>
                  <option value="suivi">Suivi médical</option>
                </select>
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Heure
                </label>
                <input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Message additionnel
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Informations supplémentaires..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Confirmer la réservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}