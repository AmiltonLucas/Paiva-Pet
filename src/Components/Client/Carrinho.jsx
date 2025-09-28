import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const COLORS = __COLORS__;
    const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Produto 1",
      price: 50.0,
      quantity: 1,
      image: "/images/produto1.jpg", // Substitua pelo caminho correto
    },
    {
      id: 2,
      name: "Produto 2",
      price: 30.0,
      quantity: 2,
      image: "/images/produto2.jpg", // Substitua pelo caminho correto
    },
    {
      id: 3,
      name: "Produto 3",
      price: 20.0,
      quantity: 1,
      image: "/images/produto3.jpg", // Substitua pelo caminho correto
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="min-h-screen px-4 py-8 mb-10"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <h1
        className="text-2xl font-bold text-center mb-6"
        style={{ color: COLORS.primary }}
      >
        Meu Carrinho
      </h1>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 p-4">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: COLORS.muted }}
                >
                  {item.name}
                </h2>
                <p className="text-sm" style={{ color: COLORS.muted }}>
                  R$ {item.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border rounded-lg"
                    style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border rounded-lg"
                    style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 text-sm font-semibold text-red-600"
              >
                Remover
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: COLORS.muted }}
            >
              Total do Pedido
            </h2>
            <p className="text-xl font-bold" style={{ color: COLORS.primary }}>
              R$ {total.toFixed(2)}
            </p>
            <button
             className="w-full mt-4 py-2 font-semibold rounded-lg transition-colors hover:bg-indigo-600"
             style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
             onClick={() => navigate("/Confirmacao-pagamento")}
              >
               Finalizar Compra
    </button>
          </div>
        </div>
      ) : (
        <p
          className="text-center text-lg font-medium"
          style={{ color: COLORS.muted }}
        >
          Seu carrinho está vazio.
        </p>
      )}
    </div>
  );
}