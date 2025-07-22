import { useState,React } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IUserModel {
  name: string;
  username: string;
  password: string;
}

const Register = () => {
  const [data, setData] = useState<IUserModel>({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const resetData = () => {
    setData({ name: "", username: "", password: "" , confirmPassword: "" });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, password , confirmPassword } = data;

    if (name.trim().length < 3) {
      setMessage("Name must be at least 3 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 8 characters, include one letter, one number, and one special character."
      );
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 409) {
        setMessage("User already exists.");
        return;
      }

      if (!response.ok) {
        setMessage("Registration failed. Try again.");
        return;
      }

      setMessage("User registered successfully.");
      resetData();

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h3>Register Here</h3>

        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={data.name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={data.email}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />


        <button type="submit">Register</button>
        <div className="social">
          {message && <p>{message}</p>}
          <br />
          <h4>
            <Link to="/login">Login</Link>
          </h4>
        </div>
      </form>
    </>
  );
};

export default Register;
