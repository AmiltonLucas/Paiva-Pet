import React from "react";

export default function Perfil() {
  const COLORS = __COLORS__;

  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    savedItems: ["Produto 1", "Produto 2", "Produto 3"],
    address: "Rua Exemplo, 123, Bairro, Cidade, Estado",
  };

  const handleLogout = () => {
    // Lógica para sair da conta
    console.log("Usuário deslogado");
  };

  const handleChangePassword = () => {
    // Lógica para trocar senha
    console.log("Trocar senha");
  };

  const handleEditAddress = () => {
    // Lógica para editar endereço
    console.log("Editar endereço");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-8"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <div
        className="w-full max-w-2xl p-6 rounded-2xl shadow-lg"
        style={{ backgroundColor: COLORS.white }}
      >
        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
            Bem-vindo, {user.name}
          </h1>
          <p className="text-sm" style={{ color: COLORS.muted }}>
            {user.email}
          </p>
        </div>

        {/* Itens Salvos */}
        <div className="mb-6">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.primary }}
          >
            Itens Salvos
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            {user.savedItems.map((item, index) => (
              <li key={index} style={{ color: COLORS.muted }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Endereço */}
        <div className="mb-6">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.primary }}
          >
            Endereço
          </h2>
          <p style={{ color: COLORS.muted }}>{user.address}</p>
          <button
            onClick={handleEditAddress}
            className="mt-2 text-sm font-medium underline"
            style={{ color: COLORS.primary }}
          >
            Editar endereço
          </button>
        </div>

        {/* Ações */}
        <div className="space-y-4">
          <button
            onClick={handleChangePassword}
            className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-indigo-600"
            style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
          >
            Trocar Senha
          </button>
          <button
            onClick={handleLogout}
            className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-red-600"
            style={{ backgroundColor: "#EF4444", color: COLORS.white }}
          >
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
}
