import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação
import Entrar from "../../Assets/Client/entrar.png";
import Pin from "../../Assets/Client/pin.png";
import ModalPIN from "./ModalPIN"; // Importa o modal criado anteriormente

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitCEP = (cep) => {
    console.log("CEP enviado:", cep);
    // Aqui você pode adicionar a lógica para salvar ou buscar informações com o CEP
  };

  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Olá Usuário</h1>
          <p className="text-sm text-gray-500">Localização( )</p>
        </div>
        <div className="flex gap-3">
          {/* Botão Entrar redireciona para a página de login */}
          <Link
            to="/login"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
          >
            <img src={Entrar} className="h-6 w-6 object-contain" alt="Entrar" />
          </Link>
          <div
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={handleOpenModal} // Abre o modal ao clicar no ícone de Pin
          >
            <img src={Pin} className="h-6 w-6 object-contain" alt="Pin" />
          </div>
        </div>
      </header>

      {/* Modal para inserir o CEP */}
      <ModalPIN
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitCEP}
      />
    </>
  );
}