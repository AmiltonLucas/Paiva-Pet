import React, { useState } from "react";      
import SidebarMenu from "../../../Components/Admin/SidebarMenu";  

const statusOptions = [
  "Seu produto foi embalado",
  "Seu produto foi enviado",
  "Está pronto para retirada na loja"
];

export default function VendasPage() {
  const [vendas, setVendas] = useState([
    {
      id: 1,
      cliente: "João Silva",
      produto: "Notebook Dell",
      categoria: "Eletrônicos",
      preco: 3500,
      quantidade: 1,
      endereco: "Rua das Flores, 123, Centro, São Paulo - SP",
      status: statusOptions[0],
    },
    {
      id: 2,
      cliente: "Maria Souza",
      produto: "Mouse Logitech",
      categoria: "Acessórios",
      preco: 120,
      quantidade: 2,
      endereco: "Av. Brasil, 456, Jardim América, Rio de Janeiro - RJ",
      status: statusOptions[1],
    },
    {
      id: 3,
      cliente: "Carlos Lima",
      produto: "Teclado Mecânico",
      categoria: "Acessórios",
      preco: 400,
      quantidade: 1,
      endereco: "Rua Verde, 789, Centro, Belo Horizonte - MG",
      status: statusOptions[2],
    },
  ]);

  const [modal, setModal] = useState({ open: false, vendaId: null, mensagem: "" });
  const handleStatusChange = (id, novoStatus) => {
    setVendas((vendasAntigas) =>
      vendasAntigas.map((venda) =>
        venda.id === id ? { ...venda, status: novoStatus } : venda
      )
    );
  };
  const openModal = (vendaId) => setModal({ open: true, vendaId, mensagem: "" });
  const closeModal = () => setModal({ open: false, vendaId: null, mensagem: "" });
  const handleMensagemChange = (e) => setModal((m) => ({ ...m, mensagem: e.target.value }));
  const enviarMensagem = () => {
    // Aqui você pode integrar com backend para enviar mensagem ao cliente
    alert("Mensagem enviada ao cliente: " + modal.mensagem);
    closeModal();
  };

  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Suas vendas</h1>
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
              <p className="text-gray-500 text-sm mb-1">Categoria: <span className="font-semibold text-gray-700">{venda.categoria}</span></p>
              <p className="text-gray-500 text-sm mb-1">Preço: <span className="font-semibold text-green-600">R$ {venda.preco.toFixed(2)}</span></p>
              <p className="text-gray-500 text-sm mb-1">Cliente: <span className="font-semibold text-gray-700">{venda.cliente}</span></p>
              <p className="text-gray-500 text-sm mb-2">Endereço: <span className="font-semibold text-gray-700">{venda.endereco}</span></p>
              <div className="w-full mb-2">
                <label className="block text-xs text-gray-400 mb-1">Status do pedido:</label>
                <select
                  className="w-full border rounded px-2 py-1 text-sm"
                  value={venda.status}
                  onChange={e => handleStatusChange(venda.id, e.target.value)}
                >
                  {statusOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="w-full text-xs text-gray-500 text-center mt-1">
                <span className="font-semibold text-blue-600">{venda.status}</span>
                <br />
                <span className="text-gray-400">(Visível para o cliente)</span>
              </div>
              <button
                className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                onClick={() => openModal(venda.id)}
              >
                Enviar mensagem ao cliente
              </button>
            </div>
          ))}
        </div>
        {/* Modal de mensagem */}
        {modal.open && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg bg-opacity-40 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={closeModal}>&times;</button>
              <h2 className="text-lg font-bold mb-2">Enviar mensagem ao cliente</h2>
              <textarea
                className="w-full border rounded p-2 mb-4"
                rows={4}
                placeholder="Digite a mensagem para o cliente..."
                value={modal.mensagem}
                onChange={handleMensagemChange}
              />
              <button
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                onClick={enviarMensagem}
                disabled={!modal.mensagem.trim()}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
