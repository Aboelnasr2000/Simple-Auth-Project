import { useState,React } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ILoginModel {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.email === "" || data.password === "") {
      setMessage("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        setMessage("Email or Password is incorrect");
        return;
      }

      const result = await response.json();
      console.log("Login successful:", result);
      localStorage.setItem("token", result.access_token); // ✅ Store token
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
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
        <h3>Login Here</h3>

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          id="email"
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

        <button type="submit">Log In</button>
        <div className="social">
          {message && <p>{message}</p>}
          <h4>
            <Link to="/register">Register</Link>
          </h4>
        </div>
      </form>
    </>
  );
};

export default Login;
