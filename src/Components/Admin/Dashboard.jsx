import React from "react";
import { NavLink } from "react-router-dom";

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

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: COLORS.backprimary, minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        className="flex justify-between items-center px-6 py-4 shadow-md"
        style={{ backgroundColor: COLORS.backsecondary }}
      >
        <h1 className="text-xl font-bold" style={{ color: COLORS.text }}>
          Painel Administrativo
        </h1>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className="text-sm font-medium"
            style={{ color: COLORS.buttons }}
          >
            Voltar para o site
          </NavLink>
          <button
            className="text-sm font-medium"
            style={{ color: COLORS.alerts }}
            onClick={() => console.log("Sair")}
          >
            Sair
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cadastrar Produtos */}
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: COLORS.backsecondary }}
          >
            <h2
              className="text-lg font-bold mb-4"
              style={{ color: COLORS.text }}
            >
              Cadastrar Produtos
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium mb-1"
                  style={{ color: COLORS.secondarytext }}
                >
                  Nome do Produto
                </label>
                <input
                  id="productName"
                  type="text"
                  placeholder="Digite o nome do produto"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: COLORS.buttons }}
                />
              </div>
              <div>
                <label
                  htmlFor="productPrice"
                  className="block text-sm font-medium mb-1"
                  style={{ color: COLORS.secondarytext }}
                >
                  Preço
                </label>
                <input
                  id="productPrice"
                  type="number"
                  placeholder="Digite o preço"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: COLORS.buttons }}
                />
              </div>
              <div>
                <label
                  htmlFor="productImage"
                  className="block text-sm font-medium mb-1"
                  style={{ color: COLORS.secondarytext }}
                >
                  URL da Imagem
                </label>
                <input
                  id="productImage"
                  type="text"
                  placeholder="Digite a URL da imagem"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: COLORS.buttons }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 font-semibold rounded-lg cursor-pointer hover"
                style={{
                  backgroundColor: COLORS.buttons,
                  color: COLORS.white,
                }}
              >
                Cadastrar Produto
              </button>
            </form>
          </div>

          {/* Fluxo de Caixa */}
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: COLORS.backsecondary }}
          >
            <h2
              className="text-lg font-bold mb-4"
              style={{ color: COLORS.text }}
            >
              Fluxo de caixa dos últimos 30 dias
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: COLORS.secondarytext }}>Entradas</span>
                <span style={{ color: COLORS.success }}>R$ 10.000,00</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: COLORS.secondarytext }}>Saídas</span>
                <span style={{ color: COLORS.alerts }}>R$ 4.000,00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span style={{ color: COLORS.text }}>Saldo</span>
                <span style={{ color: COLORS.success }}>R$ 6.000,00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Algo a mais: Relatório de Atividades */}
        <div
          className="mt-8 p-6 rounded-lg shadow-md"
          style={{ backgroundColor: COLORS.backsecondary }}
        >
          <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>
            Relatório de Atividades
          </h2>
          <ul className="space-y-2">
            <li style={{ color: COLORS.secondarytext }}>
              - Produto "Ração Premium" cadastrado com sucesso.
            </li>
            <li style={{ color: COLORS.secondarytext }}>
              - Entrada de R$ 2.000,00 registrada.
            </li>
            <li style={{ color: COLORS.secondarytext }}>
              - Saída de R$ 500,00 registrada.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-4 text-center"
        style={{ backgroundColor: COLORS.backsecondary }}
      >
        <p className="text-sm" style={{ color: COLORS.secondarytext }}>
          © 2025 Front Dev Studio. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
