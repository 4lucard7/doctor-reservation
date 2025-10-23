import { useState, useEffect } from "react";
import axios from "axios";
import DoctorsList from "../components/DoctorsList";

export default function Reservation() {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Erreur:", error))
      .finally(() => setLoading(false));
  }, []);

  const filteredDoctors = doctors.filter((d) =>
    (d.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
    (d.specialty?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <>
      {/* 🔍 Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Recherchez un médecin</h2>
          <input
            type="text"
            placeholder="Nom ou spécialité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </section>

      {/* Doctors Section */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4"></div>
        </div>
      ) : filteredDoctors.length === 0 ? (
        <p className="text-center text-gray-500 text-xl py-20">
          Aucun médecin trouvé.
        </p>
      ) : (
        <DoctorsList doctors={filteredDoctors} />
      )}
    </>
  );
}
