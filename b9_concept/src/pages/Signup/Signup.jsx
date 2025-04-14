import { useState } from "react";
import { Form, Input, Button, Select } from "antd";
//import useAuthStore from "@/store/authStore";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Signup = () => {
  const [formData, setFormData] = useState({});
  const signup = useAuthStore((state) => state.signup);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    const response = await signup(formData);
    console.log(response);
    if (response.success) navigate("/appointment");
  };

  return (
    // <div className="">
    //   <Form layout="vertical" onFinish={handleSubmit}>
    //     <Form.Item
    //       label="Username"
    //       name="username" // Make sure it's "username" and not "name"
    //       rules={[{ required: true, message: "Please enter your username" }]}
    //     >
    //       <Input onChange={(e) => handleChange("username", e.target.value)} />
    //     </Form.Item>

    //     <Form.Item
    //       label="Email"
    //       name="email"
    //       rules={[
    //         {
    //           required: true,
    //           type: "email",
    //           message: "Please enter a valid email",
    //         },
    //       ]}
    //     >
    //       <Input onChange={(e) => handleChange("email", e.target.value)} />
    //     </Form.Item>

    //     <Form.Item
    //       label="Password"
    //       name="password"
    //       rules={[{ required: true, message: "Please enter your password" }]}
    //     >
    //       <Input.Password
    //         onChange={(e) => handleChange("password", e.target.value)}
    //       />
    //     </Form.Item>

    //     <Form.Item
    //       label="Role"
    //       name="role"
    //       rules={[{ required: true, message: "Please select a role" }]}
    //     >
    //       <Select onChange={(value) => handleChange("role", value)}>
    //         <Option value="user">User</Option>
    //         <Option value="admin">Admin</Option>
    //         <Option value="superadmin">Superadmin</Option>
    //         <Option value="peer">Peer</Option>
    //       </Select>
    //     </Form.Item>

    //     <Form.Item>
    //       <Button type="primary" htmlType="submit">
    //         Sign Up
    //       </Button>
    //     </Form.Item>

    //     <div>
    //       <a href="/login">Already Have an Account?</a>
    //     </div>
    //   </Form>
    // </div>
    <div
      className=""
      style={{ display: "flex", flexWrap: "wrap", minHeight: "100vh" }}
    >
      {/* Left Column - Form */}
      <div className=" bg-gray-300" style={{ flex: "1", padding: "2rem" }}>
        <h1 className="text-3xl text-blue-600 font-bold mb-4">B9 CONCEPT</h1>
        <Form
          className=""
          style={{ marginTop: "-26" }}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              className="w-70 "
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
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              className="border p-1 w-70 "
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </Form.Item>

          {/* <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select onChange={(value) => handleChange("role", value)}>
              <Option value="user">User</Option>
              <Option value="admin">Admin</Option>
              <Option value="superadmin">Superadmin</Option>
              <Option value="peer">Peer</Option>
            </Select>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>

          <div className="font-bold mt-4">
            <a href="/login">Already Have an Account?</a>
          </div>
        </Form>
      </div>

      {/* Right Column - Image */}
      <div
        style={{
          flex: "2",
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          alt="Form illustration"
          style={{
            width: "100%",
            // maxWidth: "500px",
            height: " 695px",
            // borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default Signup;
