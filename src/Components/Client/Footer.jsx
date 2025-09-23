import React from "react";

export default function Footer() {
  const COLORS = __COLORS__;

  return (
    <footer
      className="w-full py-6 px-6 mt-10 mb-15  text-center shadow-inner"
      style={{ backgroundColor: COLORS.secondaryNav, color: COLORS.text }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo / Nome */}
        <h2 className="text-lg font-bold mb-2" style={{ color: COLORS.primary }}>
          🐾 Meu Pet Shop
        </h2>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <a href="#home" className="hover:underline">
            Início
          </a>
          <a href="#services" className="hover:underline">
            Serviços
          </a>
          <a href="#products" className="hover:underline">
            Produtos
          </a>
          <a href="#contact" className="hover:underline">
            Contato
          </a>
        </nav>

        {/* Direitos Autorais */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Meu Pet Shop. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
