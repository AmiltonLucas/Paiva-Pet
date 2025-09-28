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
          🐾 Paiva Pet - Pet Shop
        </h2>

        {/* Direitos Autorais */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Paiva Pet. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
