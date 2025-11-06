import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ReservationForm() {
  const [searchParams] = useSearchParams();
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const required = ["name", "email", "phone", "date", "time", "service"];
    for (const field of required) {
      const val = formData[field];
      if (!val || (typeof val === "string" && val.trim() === "")) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];

    const isDuplicate = storedReservations.some((r) => {
      // same doctor, same date & time and same person (by email or phone or name)
      return (
        String(r.doctorId) === String(formData.doctorId) &&
        r.date === formData.date &&
        r.time === formData.time &&
        (r.email === formData.email || r.phone === formData.phone || r.name === formData.name)
      );
    });

    if (isDuplicate) {
      alert("Une réservation existe déjà pour cette personne à la même date et heure.");
      return;
    }

    storedReservations.push(formData);
    localStorage.setItem("reservations", JSON.stringify(storedReservations));

    alert("Votre réservation a été soumise avec succès !");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
      doctorId: doctorId || "",
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
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Formulaire de Réservation
            </h1>
            <p className="text-blue-100 mt-2">
              Réservez votre consultation en ligne
            </p>
          </div>

          {/* Form */}
          <form className="py-8 px-8" onSubmit={handleSubmit}>
            <input type="hidden" id="doctorId" value={formData.doctorId} readOnly />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
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

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
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

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Type de consultation
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez le type</option>
                  <option value="consultation_generale">Consultation générale</option>
                  <option value="consultation_specialiste">Consultation spécialiste</option>
                  <option value="urgence">Urgence</option>
                  <option value="suivi">Suivi médical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
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

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
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
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message additionnel
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Informations supplémentaires ou symptômes..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all w-full md:w-auto"
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