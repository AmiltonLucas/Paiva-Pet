import React, { useRef, useState } from "react";

export default function TestPage() {
  const COLORS = {
    primary: "#E63946", // Vermelho moderno
    secondary: "#F9FAFB", // Cinza claro
    text: "#1F2937", // Texto escuro
    muted: "#6B7280", // Texto secundário
    white: "#FFFFFF", // Branco
  };

  // Referências para as seções
  const gatosRef = useRef(null);
  const cachorrosRef = useRef(null);
  const brinquedosRef = useRef(null);
  const acessoriosRef = useRef(null);

  // Estado para controlar o link ativo
  const [activeSection, setActiveSection] = useState("gatos");

  const scrollToSection = (ref, sectionName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar fixa com rolagem lateral */}
      <header
        className="sticky top-0 bg-white shadow-md z-50"
        style={{ borderBottom: `1px solid ${COLORS.muted}` }}
      >
        <nav className="flex overflow-x-auto gap-4 px-4 py-2 bg-white scrollbar-hide">
          <button
            onClick={() => scrollToSection(gatosRef, "gatos")}
            className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 ${
              activeSection === "gatos" ? "border-b-2 border-red-500" : ""
            }`}
            style={{ color: COLORS.text }}
          >
            Gatos
          </button>
          <button
            onClick={() => scrollToSection(cachorrosRef, "cachorros")}
            className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 ${
              activeSection === "cachorros" ? "border-b-2 border-red-500" : ""
            }`}
            style={{ color: COLORS.text }}
          >
            Cachorros
          </button>
          <button
            onClick={() => scrollToSection(brinquedosRef, "brinquedos")}
            className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 ${
              activeSection === "brinquedos" ? "border-b-2 border-red-500" : ""
            }`}
            style={{ color: COLORS.text }}
          >
            Brinquedos
          </button>
          <button
            onClick={() => scrollToSection(acessoriosRef, "acessorios")}
            className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 ${
              activeSection === "acessorios" ? "border-b-2 border-red-500" : ""
            }`}
            style={{ color: COLORS.text }}
          >
            Acessórios
          </button>
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="px-4 py-6">
        {/* Farmácia Veterinária */}
        <section ref={gatosRef} className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>
            Gatos
          </h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/remedio1.jpg"
                alt="Remédio"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Vermífugo Para Cães
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 86,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/remedio2.jpg"
                alt="Remédio"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Advocate Antipulgas
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 236,70
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>

        {/* Higiene e Limpeza */}
        <section ref={cachorrosRef} className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>
            Cachorros
          </h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/higiene1.jpg"
                alt="Higiene"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Aditivo Antiodor
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 14,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/higiene2.jpg"
                alt="Higiene"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Alicate de Unha
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 19,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>

        {/* Brinquedos */}
        <section ref={brinquedosRef} className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>
            Brinquedos
          </h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/brinquedo1.jpg"
                alt="Brinquedo"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Bola de Borracha
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 25,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/brinquedo2.jpg"
                alt="Brinquedo"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Mordedor de Corda
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 18,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>
        {/* Acessorios */}
        <section ref={acessoriosRef} className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>
            Acessórios
          </h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/brinquedo1.jpg"
                alt="Brinquedo"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Bola de Borracha
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 25,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
              <img
                src="/images/brinquedo2.jpg"
                alt="Brinquedo"
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-medium" style={{ color: COLORS.text }}>
                Mordedor de Corda
              </h3>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                R$ 18,90
              </p>
              <button
                className="mt-2 w-full py-1 text-sm font-semibold rounded-lg"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}