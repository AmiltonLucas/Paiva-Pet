import React from "react";

export default function Favoritos() {
 const COLORS = __COLORS__;

  const favoritos = [
    {
      id: 1,
      name: "Produto 1",
      image: "/images/produto1.jpg", // Substitua pelo caminho correto
    },
    {
      id: 2,
      name: "Produto 2",
      image: "/images/produto2.jpg", // Substitua pelo caminho correto
    },
    {
      id: 3,
      name: "Produto 3",
      image: "/images/produto3.jpg", // Substitua pelo caminho correto
    },
  ];

  const handleRemove = (id) => {
    // Lógica para remover o item dos favoritos
    console.log(`Removendo item com ID: ${id}`);
  };

  return (
    <div
      className="min-h-screen px-4 py-8 mb-10"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <h1
        className="text-2xl font-bold text-center mb-6"
        style={{ color: COLORS.primary }}
      >
        Meus Favoritos
      </h1>

      {favoritos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritos.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2
                  className="text-lg font-semibold mb-2"
                  style={{ color: COLORS.muted }}
                >
                  {item.name}
                </h2>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="w-full py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-red-600"
                  style={{
                    backgroundColor: "#EF4444",
                    color: COLORS.white,
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          className="text-center text-lg font-medium"
          style={{ color: COLORS.muted }}
        >
          Você ainda não tem itens favoritos.
        </p>
      )}
    </div>
  );
}