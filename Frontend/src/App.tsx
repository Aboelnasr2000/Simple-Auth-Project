import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />

      </Route>
    </Routes>
  );
}

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Checking auth with token:", token);
        const res = await fetch("http://localhost:4000/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
