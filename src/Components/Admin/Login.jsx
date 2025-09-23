import React, { useState } from "react";

export default function LoginAdmin() {
  const COLORS = {
    backprimary: "#F9FAFB", 
    backsecondary: "#FFFFFF", 
    text: "#1F2937", 
    secondarytext: "#6B7280", 
    buttons: "#2563EB", 
    alerts: "#E63946", 
    warnings: "#F6C90E", 
    success: "#10B981", 
    white: "#FFFFFF", 
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@petsite.com" && password === "admin123") {
      console.log("Login bem-sucedido!");
      // Redirecionar para o painel do administrador
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: COLORS.backprimary }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl"
        style={{ backgroundColor: COLORS.backsecondary }}
      >
        <h1
          className="text-2xl font-bold text-center mb-6"
          style={{ color: COLORS.text }}
        >
          Login do Administrador
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.secondarytext }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.secondarytext }}
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 mt-2">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: COLORS.buttons, color: COLORS.white }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}