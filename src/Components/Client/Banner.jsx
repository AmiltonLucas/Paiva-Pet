import React from "react";
import logo from "../../Assets/Public/logo.PNG";
export default function Banner() {
  const COLORS = __COLORS__;

  return (
    <section
      className="w-full p-6 flex items-center justify-center"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Espaço para a logo centralizada */}
      <div className="flex flex-col items-center">
        <img
          src={logo} // Substitua pela URL da logo
          alt="Logo"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-white font-semibold text-2xl text-center">
          Bem-vindo ao PetShop
        </h2>
        <p className="text-sm text-white opacity-80 text-center">
          Cuidados e amor para o seu pet
        </p>
      </div>
    </section>
  );
}