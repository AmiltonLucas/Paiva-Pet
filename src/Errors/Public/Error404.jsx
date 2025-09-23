import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  const COLORS = __COLORS__;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: COLORS.secondary }}
    >
      <h1
        className="text-6xl font-bold mb-4"
        style={{ color: COLORS.primary }}
      >
        404
      </h1>
      <p
        className="text-lg text-center mb-6"
        style={{ color: COLORS.muted }}
      >
        Oops! A página que você está procurando não foi encontrada.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-indigo-600"
        style={{
          backgroundColor: COLORS.primary,
          color: COLORS.text,
        }}
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}