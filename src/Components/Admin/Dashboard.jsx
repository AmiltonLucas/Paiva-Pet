import React from "react";
import {
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaUserTie,
  FaPlus,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/Public/logo.PNG"; // Certifique-se de que o caminho está correto

export default function Dashboard() {
  return (
    <main className="flex-1 p-0">
      {/* Banner de tela completa responsivo */}
      <div className="w-full bg-[#F29F05] flex flex-col items-center justify-center mb-8 py-8 sm:py-12">
        <img
          src={logo}
          alt="Logo da Loja"
          className="max-h-32 sm:max-h-48 w-auto object-contain drop-shadow-xl mb-2 rounded-full"
        />
        <h1 className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
          Bem-vindo ao painel da Paiva pet!
        </h1>
      </div>
      {/* Grid adaptável para mobile/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8">
        {/* Produtos */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaBox className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Produtos</h2>
          <div className="flex gap-3">
            <Link
              to="/cadastro-produto"
              className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaPlus /> Adicionar
            </Link>
            <Link
              to="/produtos"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Modificar
            </Link>
          </div>
        </div>

        {/* Vendas */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaShoppingCart className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Vendas</h2>
          <div className="flex gap-3">
            <Link
              to="/vendas"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Ver mais
            </Link>
          </div>
        </div>

        {/* Fluxo */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaUserTie className="text-[#F29F05] text-3xl mb-2" />
          <h2 className="font-semibold text-lg mb-4">Fluxo de caixa</h2>
          <div className="flex gap-3">
            <Link
              to="/fluxo-caixa"
              className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <FaEdit /> Ver mais
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
