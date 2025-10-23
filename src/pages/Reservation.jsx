import { useState, useEffect } from "react";
import axios from "axios";
import DoctorsList from "../components/DoctorsList";
import { Search, Filter } from "lucide-react";

export default function Reservation() {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  useEffect(() => {
    axios
      .get("https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Erreur:", error))
      .finally(() => setLoading(false));
  }, []);

  // Extraire les spécialités uniques
  const specialties = ["all", ...new Set(doctors.map(d => d.specialty).filter(Boolean))];

  const filteredDoctors = doctors.filter((d) => {
    const matchesSearch = 
      (d.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (d.specialty?.toLowerCase() || "").includes(search.toLowerCase());
    
    const matchesSpecialty = 
      selectedSpecialty === "all" || d.specialty === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section avec recherche */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Trouvez votre <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">médecin</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Recherchez parmi nos médecins qualifiés et prenez rendez-vous en ligne
            </p>

            {/* Barre de recherche */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Recherche */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom du médecin ou spécialité..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
                  />
                </div>

                {/* Filtre par spécialité */}
                <div className="relative md:w-64">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="all">Toutes les spécialités</option>
                    {specialties.slice(1).map((specialty, index) => (
                      <option key={index} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Résultats count */}
              {search || selectedSpecialty !== "all" ? (
                <div className="mt-4 text-gray-600">
                  <span className="font-semibold text-blue-600">{filteredDoctors.length}</span> médecin(s) trouvé(s)
                </div>
              ) : null}
            </div>

            {/* Quick filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Cardiologue", "Dentiste", "Généraliste", "Pédiatre"].map((spec) => (
                <button
                  key={spec}
                  onClick={() => {
                    setSelectedSpecialty(spec);
                    setSearch("");
                  }}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedSpecialty === spec
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des médecins */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Chargement des médecins...</p>
          </div>
        </div>
      ) : filteredDoctors.length === 0 ? (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Aucun médecin trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedSpecialty("all");
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </div>
      ) : (
        <DoctorsList doctors={filteredDoctors} />
      )}
    </div>
  );
}