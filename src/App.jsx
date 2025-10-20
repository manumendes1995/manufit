import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import usersData from "./data/users.json";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-pink-600">🏋️‍♀️ Bem-vinda à ManuFit!</h1>
      <p className="text-gray-700">Escolhe uma aba acima para continuar.</p>
    </div>
  );
}

function Perfil() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData.users);
  }, []);

  const getDaysSince = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    return diff >= 0 ? diff : 0;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-pink-600 mb-4">👩‍💻 Perfil de Utilizadoras</h2>
      <div className="grid gap-4">
        {users.map((u, i) => (
          <div key={i} className="border rounded-2xl p-4 shadow">
            <p className="font-semibold">{u.name}</p>
            <p className="text-gray-600 text-sm">{u.email}</p>
            <p className="text-gray-700 text-sm">
              Início: <span className="font-medium">{u.start}</span>
            </p>
            <p className="text-pink-600 font-semibold">
              Dias de utilização: {getDaysSince(u.start)} dias
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/manufit">
      <nav className="bg-white shadow-md p-4 flex justify-center gap-6 text-pink-600 font-semibold">
        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
          Início
        </NavLink>
        <NavLink to="/perfil" className={({ isActive }) => (isActive ? "underline" : "")}>
          Perfil
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
