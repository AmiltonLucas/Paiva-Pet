import React, { useState } from "react";

export default function ModalPIN({ isOpen, onClose, onSubmit }) {
  const COLORS = __COLORS__;

  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validação básica do CEP (formato: 00000-000)
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    if (!cepRegex.test(cep)) {
      setError("Por favor, insira um CEP válido.");
      return;
    }
    setError("");
    onSubmit(cep); // Chama a função de envio com o CEP
    onClose(); // Fecha o modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-white/30 backdrop-blur-md border border-white/20 shadow-lg z-50">
      <div
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: COLORS.white }}
      >
        <h2
          className="text-xl font-bold mb-4 text-center"
          style={{ color: COLORS.primary }}
        >
          Insira seu CEP
        </h2>
        <p className="text-sm mb-4 text-center" style={{ color: COLORS.muted }}>
          Digite o CEP para localizar sua região.
        </p>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Ex: 12345-678"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          style={{ borderColor: COLORS.primary }}
        />
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{
              backgroundColor: COLORS.muted,
              color: COLORS.white,
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-indigo-600"
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
