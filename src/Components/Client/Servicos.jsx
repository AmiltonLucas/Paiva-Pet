import React from "react";

const COLORS = __COLORS__;

const service = {
  title: "Banho e Tosa",
  products: [
    { id: 1, name: "Shampoo para Cães", price: "R$ 30,00", image: "/images/shampoo.jpg" },
    { id: 2, name: "Tesoura para Tosa", price: "R$ 50,00", image: "/images/tesoura.jpg" },
    { id: 3, name: "Secador para Pets", price: "R$ 200,00", image: "/images/secador.jpg" },
  ],
};

export default function Servicos() {
  return (
    <div className="min-h-screen px-4 py-8 mb-10" style={{ backgroundColor: COLORS.secondaryNav }}>
      <h1
        className="text-2xl font-bold text-center mb-6"
        style={{ color: COLORS.primary }}
      >
        {service.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: COLORS.muted }}
              >
                {product.name}
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                {product.price}
              </p>
              <button
                className="mt-4 w-full py-2 text-sm font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}