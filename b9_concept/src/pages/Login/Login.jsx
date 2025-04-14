import useAuthStore from "../../store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      console.log("Login Response:", response);

      if (response.success && response.user) {
        const role = response.user.role?.toLowerCase(); // toLowerCase for safety
        console.log("User Role:", role);

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "user") {
          navigate("/appointment");
        } else {
          console.warn("Unknown user role:", role);
        }
      } else {
        console.error("Login failed: Invalid credentials or server error.");
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Form */}
      <div className="flex-1 bg-gray-200 px-20 flex items-center justify-center">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-blue-900 font-bold mb-4">B9 CONCEPT</h1>

          <div className="mb-4">
            <a href="/signup">
              Don't have an account?{" "}
              <span className="hover:text-red-600 font-bold">Sign Up Now</span>
            </a>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password*</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-amber-400 w-full py-2 font-bold rounded hover:bg-amber-500 transition"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="flex-2 hidden md:block">
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
