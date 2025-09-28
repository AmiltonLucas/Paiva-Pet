
import React, { useState } from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";

const categorias = ["Gato", "Cachorro", "Rações", "Petiscos"];

export default function EditarProdutoPage() {
  // Mock do produto
  const produto = {
    id: 1,
    nome: "Notebook Dell",
    preco: 3500,
    foto: "https://source.unsplash.com/100x100/?laptop",
    categoria: "Cachorro",
  };

  const [nome, setNome] = useState(produto.nome);
  const [preco, setPreco] = useState(produto.preco);
  const [categoria, setCategoria] = useState(produto.categoria);
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(produto.foto);
  const [mensagem, setMensagem] = useState("");

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend
    setMensagem("Produto atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Editar Produto</h1>
        <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
          <div className="flex flex-col items-center mb-4">
            <img
              src={preview}
              alt={nome}
              className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-blue-100"
            />
            <label className="block text-sm text-gray-600 mb-2">Trocar imagem</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImagemChange}
              className="mb-2"
            />
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="border p-2 rounded"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Nome do Produto"
              required
            />
            <select
              className="border p-2 rounded"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              required
            >
              <option value="">Selecione a categoria</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              className="border p-2 rounded"
              value={preco}
              onChange={e => setPreco(e.target.value)}
              type="number"
              min="0"
              step="0.01"
              placeholder="Preço (R$)"
              required
            />
            {mensagem && <div className="text-green-600 text-center">{mensagem}</div>}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
