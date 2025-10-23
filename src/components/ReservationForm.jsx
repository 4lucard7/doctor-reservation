import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    storedReservations.push(formData);
    localStorage.setItem("reservations", JSON.stringify(storedReservations));

    alert("Your reservation has been submitted!");
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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Reservation Form
      </div>
      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <input type="hidden" id="doctorId" value={formData.doctorId} />

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            id="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Service / Guests */}
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
            Number of Guests
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          >
            <option value="">Select number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Special Requests
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter any additional information"
            value={formData.message}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Reserve Table
          </button>
        </div>
      </form>
    </div>
  );
}
