import React, { useState } from "react";
import logo from '../../Assets/Public/logo.PNG';
// Cores do Vite (vite.config.js)
const COLORS = {
  primary: '#E63946',
  secondary: '#F6C90E',
  secondaryNav: '#FFF4E0',
  accent: '#F2C744',
  text: '#4A4A4A',
  white: '#FFFFFF',
};

export default function AlterarSenhaAdmin() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [showSenhaAtual, setShowSenhaAtual] = useState(false);
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");
    setLoading(true);
    setTimeout(() => {
      if (novaSenha !== confirmarSenha) {
        setErro("As senhas não coincidem.");
        setLoading(false);
        return;
      }
      setMensagem("Senha alterada com sucesso!");
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmarSenha("");
      setLoading(false);
    }, 1000);
  };

  const inputClass = "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 transition pr-10";
  const labelClass = "block mb-1 font-medium";

  return (
    <div className="flex items-center justify-center min-h-screen px-2" style={{ background: `linear-gradient(135deg, ${COLORS.secondaryNav} 0%, ${COLORS.accent} 100%)` }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative" style={{ background: COLORS.white }}>
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-2 rounded-full shadow" />
          <h2 className="text-2xl font-bold text-center" style={{ color: COLORS.text }}>Alterar Senha Admin</h2>
          <span className="text-sm" style={{ color: COLORS.secondary }}>Atualize sua senha de acesso</span>
        </div>
        <div className="mb-4 relative">
          <label className={labelClass} style={{ color: COLORS.text }}>Senha Atual</label>
          <input
            type={showSenhaAtual ? "text" : "password"}
            className={inputClass}
            style={{ borderColor: COLORS.primary, color: COLORS.text }}
            value={senhaAtual}
            onChange={e => setSenhaAtual(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-9 text-gray-400 hover:text-primary"
            onClick={() => setShowSenhaAtual(v => !v)}
            aria-label={showSenhaAtual ? "Ocultar senha" : "Mostrar senha"}
          >
            {showSenhaAtual ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.036 3.807 6.07 6.75 9.75 6.75 1.563 0 3.06-.362 4.396-1.01M21.75 12c-.512-1.012-1.24-2.06-2.16-3.037m-2.591-2.264C15.136 6.37 13.62 5.25 12 5.25c-1.563 0-3.06.362-4.396 1.01m0 0A10.477 10.477 0 0 0 2.25 12m5.354-5.74l11.186 11.186m-1.768 1.768-1.768-1.768" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM2.25 12C3.354 7.943 7.21 4.75 12 4.75c4.79 0 8.646 3.193 9.75 7.25-1.104 4.057-4.96 7.25-9.75 7.25-4.79 0-8.646-3.193-9.75-7.25Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="mb-4 relative">
          <label className={labelClass} style={{ color: COLORS.text }}>Nova Senha</label>
          <input
            type={showNovaSenha ? "text" : "password"}
            className={inputClass}
            style={{ borderColor: COLORS.primary, color: COLORS.text }}
            value={novaSenha}
            onChange={e => setNovaSenha(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-9 text-gray-400 hover:text-primary"
            onClick={() => setShowNovaSenha(v => !v)}
            aria-label={showNovaSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {showNovaSenha ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.036 3.807 6.07 6.75 9.75 6.75 1.563 0 3.06-.362 4.396-1.01M21.75 12c-.512-1.012-1.24-2.06-2.16-3.037m-2.591-2.264C15.136 6.37 13.62 5.25 12 5.25c-1.563 0-3.06.362-4.396 1.01m0 0A10.477 10.477 0 0 0 2.25 12m5.354-5.74l11.186 11.186m-1.768 1.768-1.768-1.768" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM2.25 12C3.354 7.943 7.21 4.75 12 4.75c4.79 0 8.646 3.193 9.75 7.25-1.104 4.057-4.96 7.25-9.75 7.25-4.79 0-8.646-3.193-9.75-7.25Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="mb-4 relative">
          <label className={labelClass} style={{ color: COLORS.text }}>Confirmar Nova Senha</label>
          <input
            type={showConfirmar ? "text" : "password"}
            className={inputClass}
            style={{ borderColor: COLORS.primary, color: COLORS.text }}
            value={confirmarSenha}
            onChange={e => setConfirmarSenha(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-9 text-gray-400 hover:text-primary"
            onClick={() => setShowConfirmar(v => !v)}
            aria-label={showConfirmar ? "Ocultar senha" : "Mostrar senha"}
          >
            {showConfirmar ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.036 3.807 6.07 6.75 9.75 6.75 1.563 0 3.06-.362 4.396-1.01M21.75 12c-.512-1.012-1.24-2.06-2.16-3.037m-2.591-2.264C15.136 6.37 13.62 5.25 12 5.25c-1.563 0-3.06.362-4.396 1.01m0 0A10.477 10.477 0 0 0 2.25 12m5.354-5.74l11.186 11.186m-1.768 1.768-1.768-1.768" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM2.25 12C3.354 7.943 7.21 4.75 12 4.75c4.79 0 8.646 3.193 9.75 7.25-1.104 4.057-4.96 7.25-9.75 7.25-4.79 0-8.646-3.193-9.75-7.25Z" />
              </svg>
            )}
          </button>
        </div>
        {erro && <div className="mb-2 text-center" style={{ color: COLORS.primary }}>{erro}</div>}
        {mensagem && <div className="mb-2 text-center" style={{ color: COLORS.primary }}>{mensagem}</div>}
        <button
          type="submit"
          className="w-full py-2 rounded font-semibold transition flex items-center justify-center gap-2"
          style={{ background: COLORS.primary, color: COLORS.white }}
          disabled={loading}
        >
          {loading && (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          )}
          Alterar Senha
        </button>
      </form>
    </div>
  );
}
