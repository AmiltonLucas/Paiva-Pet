import React, { useState } from "react";

export default function EsqueceuSenha() {
  const COLORS = __COLORS__;

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado para recuperação:", email);
    // Aqui você pode integrar com a lógica de envio de email
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <div
        className="w-full max-w-md p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: COLORS.white }}
      >
        <h1
          className="text-2xl font-bold text-center mb-6"
          style={{ color: COLORS.primary }}
        >
          Esqueceu sua senha?
        </h1>
        <p className="text-sm text-center mb-6" style={{ color: COLORS.muted }}>
          Insira seu email abaixo para recuperar sua senha.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.text }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: COLORS.primary }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-red-600"
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
            }}
          >
            Enviar
          </button>
        </form>
        <p className="text-sm text-center mt-4" style={{ color: COLORS.muted }}>
          Lembrou sua senha?{" "}
          <a
            href="/login"
            className="font-medium"
            style={{ color: COLORS.primary }}
          >
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
