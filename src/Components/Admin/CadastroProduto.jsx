import React, { useState } from "react";

const tipos = ["Gato", "Cachorro", "Rações", "Petiscos"];

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState(null);
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !imagem || !tipo) {
      setMensagem("Preencha todos os campos.");
      return;
    }
    setMensagem("Produto cadastrado com sucesso!");
    setNome("");
    setPreco("");
    setImagem(null);
    setTipo("");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-2 text-[#F29F05]">
          Cadastrar produto
        </h2>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="number"
          placeholder="Preço (R$)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          min="0"
          step="0.01"
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImagem(e.target.files[0])}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        >
          <option value="">Tipo de Produto</option>
          {tipos.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {mensagem && <div className="text-green-600 text-center">{mensagem}</div>}
        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
