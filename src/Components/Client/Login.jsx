import React from "react";
import logo from "../../Assets/Public/logo.PNG";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
        {/* Logotipo */}
        <div className="text-center mb-6">
          <img
            src={logo} // Substitua pelo caminho do logotipo
            alt="Logo"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h1
            className="text-xl font-bold mt-2"
            style={{ color: COLORS.primary }}
          >
            Bem-vindo ao Paiva Pet
          </h1>
        </div>

        {/* Título */}
        <h2
          className="text-lg font-semibold text-center mb-4"
          style={{ color: COLORS.muted }}
        >
          Faça login para continuar
        </h2>

        {/* Formulário */}
        <form className="space-y-4">
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

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-indigo-600"
            style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
             onClick={() => navigate("/")}
          >
            Entrar
          </button>
        </form>

        {/* Links adicionais */}
        <div className="text-center mt-4 text-sm">
          <a
            href="/esqueceu-senha"
            className="block mb-2 font-medium"
            style={{ color: COLORS.primary }}
          >
            Esqueceu sua senha?
          </a>
          <p>
            Não tem uma conta?{" "}
            <a
              href="/registre-se"
              className="font-semibold underline"
              style={{ color: COLORS.primary }}
            >
              Criar conta
            </a>
          </p>
        </div>

        {/* Rodapé */}
        <footer className="text-center mt-6 text-xs" style={{ color: COLORS.muted }}>
          © 2025 PetSite. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}