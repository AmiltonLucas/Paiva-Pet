import React from "react";

export default function ConfirmacaoPedido() {
 const COLORS = __COLORS__;

  const purchasedItems = [
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
  ];

  const deliveryAddress = "Rua Exemplo, 123, Bairro, Cidade, Estado, CEP 12345-678";

  const total = purchasedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="min-h-screen px-4 py-8"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <h1
        className="text-2xl font-bold text-center mb-6"
        style={{ color: COLORS.primary }}
      >
        Pedido Confirmado!
      </h1>
      <p
        className="text-center text-lg mb-8"
        style={{ color: COLORS.muted }}
      >
        Obrigado por comprar conosco! Aqui estão os detalhes do seu pedido:
      </p>

      {/* Itens Comprados */}
      <div className="space-y-6">
        {purchasedItems.map((item) => (
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
                Quantidade: {item.quantity}
              </p>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                Preço: R$ {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        {/* Endereço de Entrega */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.muted }}
          >
            Endereço de Entrega
          </h2>
          <p className="text-sm" style={{ color: COLORS.muted }}>
            {deliveryAddress}
          </p>
        </div>

        {/* Total */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: COLORS.muted }}
          >
            Total da Compra
          </h2>
          <p className="text-xl font-bold" style={{ color: COLORS.primary }}>
            R$ {total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Mensagem Final */}
      <p
        className="text-center text-sm mt-8"
        style={{ color: COLORS.muted }}
      >
        Caso tenha dúvidas, entre em contato com nosso suporte.
      </p>
    </div>
  );
}