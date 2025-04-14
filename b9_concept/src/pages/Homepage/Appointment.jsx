import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    contact: "",
    email: "",
    dob: "",
    doctor: "",
    status: "pending",
    created_by: 1, // Temporary static user id, ideally fetched from logged-in user
  });
  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/appoint/create", formData);
      console.log("Appointment Submitted", response);
    } catch (error) {
      console.error("Error submitting appointment:", error);
    }
  };
  // 🔁 Fetch appointments on mount
  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:9099/api/v1/appoint");
      const data = await res.json();
      setAppointments(data);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    }
  };
  useEffect(() => {
    fetchAppointments();
  }, []);
  return (
    <div className="appointment w-300 mt-33 m-20 items-center justify-center min-h-screen p-6 bg-[#ccdcea] shadow-md">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
        User Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-blue-500 text-2xl">
            User Information
          </legend>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div>
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            <div>
              <label className="font-semibold">City</label>
              <input
                type="text"
                name="city"
                placeholder="City Name"
                required
                className="p-2 border rounded w-full"
                onChange={handleChange}
                value={formData.city}
              />
            </div>
          </div>

          <label className="font-semibold">Contact No</label>
          <input
            type="text"
            name="contact"
            pattern="[0-9]{10,15}"
            placeholder="Enter contact number"
            required
            className="p-2 border rounded w-full"
            onChange={handleChange}
            value={formData.contact}
          />

          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="p-2 border rounded w-full"
            onChange={handleChange}
            value={formData.email}
          />

          <label className="font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            required
            className="p-2 border rounded w-full"
            onChange={handleChange}
            value={formData.dob}
          />

          <label className="font-semibold">Doctor</label>
          <select
            name="doctor"
            required
            className="p-2 border rounded w-full"
            onChange={handleChange}
            value={formData.doctor}
          >
            <option value="">Select a doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Jones">Dr. Jones</option>
            <option value="Dr. Williams">Dr. Williams</option>
            <option value="Dr. Brown">Dr. Brown</option>
          </select>

          <label className="font-semibold">Status</label>
          <select
            name="status"
            className="p-2 border rounded w-full"
            onChange={handleChange}
            value={formData.status}
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </fieldset>
        <button className="bg-amber-400 mt-12 h-9 w-39 font-bold" type="submit">
          Submit
        </button>
      </form>

      {/* Appointment List Section */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        All Appointments
      </h3>
      <div className="overflow-auto max-h-[400px] border rounded-md p-4 bg-white">
        {appointments.length > 0 ? (
          <table className="min-w-full text-left border">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">City</th>
                <th className="p-2 border">Contact</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="p-2 border">{item.city}</td>
                  <td className="p-2 border">{item.contact}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.dob}</td>
                  <td className="p-2 border">{item.doctor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointment;
