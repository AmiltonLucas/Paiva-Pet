import React, { useState } from "react";

const COLORS = {
  primary: '#E63946',
  secondary: '#F6C90E',
  secondaryNav: '#FFF4E0',
  accent: '#F2C744',
  text: '#4A4A4A',
  white: '#FFFFFF',
  error: '#E63946',
};

export default function TrocarSenha({ onSubmit }) {
  const [form, setForm] = useState({
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
    setSucesso("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");
    if (!form.senhaAtual || !form.novaSenha || !form.confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (form.novaSenha.length < 6) {
      setErro("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (form.novaSenha !== form.confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    try {
      // Simulação de envio (substitua pelo backend real)
      await new Promise((res) => setTimeout(res, 1000));
      if (onSubmit) onSubmit(form);
      setSucesso("Senha alterada com sucesso!");
      setForm({ senhaAtual: "", novaSenha: "", confirmarSenha: "" });
    } catch {
      setErro("Erro ao trocar senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50"
      style={{ background: COLORS.secondaryNav, minHeight: '100vh' }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-6 border border-gray-100 relative"
        style={{ color: COLORS.text }}
      >
        <div className="flex flex-col items-center mb-2">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2" style={{ background: COLORS.accent }}>
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill={COLORS.primary} d="M12 2a5 5 0 0 0-5 5v3.09A7.001 7.001 0 0 0 5 17v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a7.001 7.001 0 0 0-2-4.91V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3Zm-5 13a5 5 0 0 1 10 0v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1Z"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-center" style={{ color: COLORS.primary }}>
            Trocar Senha
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="senhaAtual" className="font-semibold" style={{ color: COLORS.text }}>Senha atual</label>
          <input
            id="senhaAtual"
            type="password"
            name="senhaAtual"
            placeholder="Digite sua senha atual"
            value={form.senhaAtual}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-50"
            style={{ borderColor: COLORS.accent }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="novaSenha" className="font-semibold" style={{ color: COLORS.text }}>Nova senha</label>
          <input
            id="novaSenha"
            type="password"
            name="novaSenha"
            placeholder="Digite a nova senha"
            value={form.novaSenha}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-50"
            style={{ borderColor: COLORS.accent }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmarSenha" className="font-semibold" style={{ color: COLORS.text }}>Confirmar nova senha</label>
          <input
            id="confirmarSenha"
            type="password"
            name="confirmarSenha"
            placeholder="Confirme a nova senha"
            value={form.confirmarSenha}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-50"
            style={{ borderColor: COLORS.accent }}
          />
        </div>
        {erro && (
          <div className="text-center text-sm font-medium" style={{ color: COLORS.error, background: '#fff0f0', borderRadius: 8, padding: 8 }}>
            {erro}
          </div>
        )}
        {sucesso && (
          <div className="text-center text-green-600 text-sm font-semibold bg-green-50 rounded p-2">
            {sucesso}
          </div>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-bold transition text-white shadow-md hover:scale-[1.03] hover:shadow-lg"
          style={{ background: COLORS.primary, opacity: loading ? 0.7 : 1, letterSpacing: 1 }}
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar Senha"}
        </button>
      </form>
    </div>
  );
}
