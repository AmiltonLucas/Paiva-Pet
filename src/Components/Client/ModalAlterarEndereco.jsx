import React, { useState } from "react";


export default function ModalAlterarEndereco({ isOpen, onClose, onSubmit, enderecoAtual = {} }) {
  const [form, setForm] = useState({
    nome: enderecoAtual.nome || "",
    estado: enderecoAtual.estado || "",
    cidade: enderecoAtual.cidade || "",
    bairro: enderecoAtual.bairro || "",
    rua: enderecoAtual.rua || "",
    numero: enderecoAtual.numero || "",
    complemento: enderecoAtual.complemento || "",
    telefone: enderecoAtual.telefone || "",
  });
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    for (const key of ["nome","estado","cidade","bairro","rua","numero","telefone"]) {
      if (!form[key]) {
        setErro("Preencha todos os campos obrigatórios.");
        return;
      }
    }
    if (onSubmit) onSubmit(form);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-4 text-center">Alterar Endereço</h2>
  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="nome" value={form.nome} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Nome completo" required />
          <div className="flex flex-col gap-2">
            <input name="estado" value={form.estado} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Estado" required />
            <input name="cidade" value={form.cidade} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Cidade" required />
          </div>
          <input name="bairro" value={form.bairro} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Bairro" required />
          <div className="flex gap-2">
            <input name="rua" value={form.rua} onChange={handleChange} className="border rounded px-3 py-2 flex-1" placeholder="Rua" required />
            <input name="numero" value={form.numero} onChange={handleChange} className="border rounded px-3 py-2 w-24" placeholder="Número" required />
          </div>
          <input name="complemento" value={form.complemento} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Complemento (opcional)" />
          <input name="telefone" value={form.telefone} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Telefone" required />
          {erro && <div className="text-red-600 text-center text-sm">{erro}</div>}
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition">Salvar</button>
        </form>
      </div>
    </div>
  );
}
