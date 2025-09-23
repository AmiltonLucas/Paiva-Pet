import React, { useState } from "react";

export default function ConfirmacaoPagamento() {
const COLORS = __COLORS__;

  const cartItems = [
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

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState(
    "Rua Exemplo, 123, Bairro, Cidade, Estado, CEP 12345-678"
  );

  const handleConfirmPayment = () => {
    if (!paymentMethod || !deliveryOption) {
      alert("Por favor, selecione a forma de pagamento e a opção de entrega.");
      return;
    }
    console.log("Pagamento confirmado!");
    console.log("Forma de pagamento:", paymentMethod);
    console.log("Opção de entrega:", deliveryOption);
    console.log("Endereço de entrega:", deliveryAddress);
    // Aqui você pode adicionar a lógica para processar o pagamento e o pedido
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
        Confirmação de pedido
      </h1>

      {/* Resumo do Pedido */}
      <div className="space-y-6 mb-8">
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
                Quantidade: {item.quantity}
              </p>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                Preço: R$ {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

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

      {/* Forma de Pagamento */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2
          className="text-lg font-semibold mb-4"
          style={{ color: COLORS.muted }}
        >
          Forma de Pagamento
        </h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="Pix"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Pix
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="Cartão"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cartão de Crédito/Débito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="Boleto"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Boleto Bancário
          </label>
        </div>
      </div>

      {/* Opção de Entrega */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2
          className="text-lg font-semibold mb-4"
          style={{ color: COLORS.muted }}
        >
          Opção de Entrega
        </h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="delivery"
              value="Retirada na Loja"
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="mr-2"
            />
            Retirada na Loja
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="delivery"
              value="Entrega no Endereço"
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="mr-2"
            />
            Entrega no Endereço
          </label>
        </div>
        {deliveryOption === "Entrega no Endereço" && (
          <p className="mt-4 text-sm" style={{ color: COLORS.muted }}>
            Endereço: {deliveryAddress}
          </p>
        )}
      </div>

      {/* Botão Confirmar */}
      <button
        onClick={handleConfirmPayment}
        className="w-full py-2 font-semibold rounded-lg transition-colors hover:bg-indigo-600"
        style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
      >
        Confirmar pedido
      </button>
    </div>
  );
}