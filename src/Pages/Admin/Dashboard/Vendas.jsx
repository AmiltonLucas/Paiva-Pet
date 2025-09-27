import React, { useState } from "react";

import { Link } from "react-router-dom";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import CadastroVenda from "../../../Components/Admin/CadastroVenda";

export default function VendasPage() {
  const [showCadastro, setShowCadastro] = useState(false);
  // Exemplo de vendas mockadas
  const vendas = [
    { id: 1, cliente: "João Silva", produto: "Notebook Dell", quantidade: 1 },
    { id: 2, cliente: "Maria Souza", produto: "Mouse Logitech", quantidade: 2 },
    {
      id: 3,
      cliente: "Carlos Lima",
      produto: "Teclado Mecânico",
      quantidade: 1,
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Vendas Cadastradas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {vendas.map((venda) => (
            <div
              key={venda.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-2 text-3xl text-orange-400 font-bold">
                {venda.quantidade}
              </div>
              <h2 className="font-semibold text-lg mb-1">{venda.produto}</h2>
              <p className="text-gray-500 text-sm mb-2">
                Cliente: {venda.cliente}
              </p>
              <Link
                to={`/editar-venda/${venda.id}`}
                className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm text-center"
              >
                Editar
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowCadastro(true)}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Cadastrar Venda
        </button>
        {showCadastro && <CadastroVenda />}
      </div>
    </div>
  );
}
