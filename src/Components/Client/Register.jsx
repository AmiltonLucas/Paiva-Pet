import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const COLORS = __COLORS__;

  useNavigate();
  const navigate = useNavigate();

    return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl"
        style={{ backgroundColor: COLORS.white }}
      >
        {/* Título */}
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: COLORS.primary }}
        >
          Criar sua Conta
        </h2>

        {/* Subtítulo */}
        <p
          className="text-center text-sm mb-6"
          style={{ color: COLORS.muted }}
        >
          Preencha os campos abaixo para se registrar.
        </p>

        {/* Formulário */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.muted }}
            >
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.muted }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.muted }}
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.muted }}
            >
              Confirmar senha
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: COLORS.primary }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-indigo-600"
            style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
             onClick={() => navigate("/")}
          >
            Cadastrar
          </button>
        </form>

        {/* Link para login */}
        <p className="text-center mt-4 text-sm">
          Já possui uma conta?{" "}
          <a
            href="/login"
            className="font-semibold underline"
            style={{ color: COLORS.primary }}
          >
            Entrar
          </a>
        </p>

        {/* Rodapé */}
        <footer className="text-center mt-6 text-xs" style={{ color: COLORS.muted }}>
          © 2025 PetSite. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
