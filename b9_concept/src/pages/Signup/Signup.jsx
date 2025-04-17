import { useState } from "react";
import { Form, Input, Button } from "antd";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const signup = useAuthStore((state) => state.signup);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await signup(formData);
    if (response.success) navigate("/appointment");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#9ea4af",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "900px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Column - Image & Welcome */}
        <div
          style={{
            flex: 1,
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/04/24/30/93/240_F_424309320_UkOxg2z3sq7yXwGnWCO6xBXkRI4byhnI.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Welcome to B9 CONCEPT
        </div>

        {/* Right Column - Form */}
        <div className="text-center" style={{ flex: 1.2, padding: "3rem" }}>
          <h1 className="2xl" style={{ fontWeight: "bold", color: "#0a2a82" }}>
            B9 CONCEPT
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            Already have an account?{" "}
            <a href="/login" style={{ color: "#0a2a82", fontWeight: "bold" }}>
              Login
            </a>
          </p>

          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input onChange={(e) => handleChange("email", e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#fbbc04",
                  color: "#fff",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
