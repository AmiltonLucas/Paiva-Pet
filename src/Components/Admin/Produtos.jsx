import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import CadastroProduto from "./CadastroProduto";

export default function ProdutosAdmin() {
  const [showCadastro, setShowCadastro] = useState(false);
  // Exemplo de clientes mockados
  const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      nome: "Maria Souza",
      email: "maria@email.com",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      nome: "Carlos Lima",
      email: "carlos@email.com",
      foto: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Protudos Cadastrados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {clientes.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={produto.foto}
                alt={produto.nome}
                className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-100"
              />
              <h2 className="font-semibold text-lg mb-1">{produto.nome}</h2>
              <p className="text-gray-500 text-sm mb-2">{produto.email}</p>
              <Link
                to={`/editar-produto/${produto.id}`}
                className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm text-center"
              >
                Editar
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowCadastro(true)}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-orange-600"
        >
          Cadastrar produto
        </button>
        {showCadastro && <CadastroProduto />}
      </div>
    </div>
  );
}
