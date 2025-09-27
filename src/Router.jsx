import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Client/App/Home";
import LoginPage from "./Pages/Client/Login/Login";
import RegisterPage from "./Pages/Client/Login/Register";
import PerfilPage from "./Pages/Client/App/Perfil";
import FavoritosPage from "./Pages/Client/App/Favoritos";
import CarrinhoPage from "./Pages/Client/App/Carrinho";
import Error404 from "./Errors/Public/Error404";
import ConfirmacaoPedidoPage from "./Pages/Client/App/ConfirmacaoPedido";
import ConfirmacaoPagamentoPage from "./Pages/Client/App/ConfirmacaoPagamento";
import ServicosPage from "./Pages/Client/App/Servicos";
import LoginAdminPage from "./Pages/Admin/Login/Login";
import DashboardAdminPage from "./Pages/Admin/Dashboard/Dashboard";
import TestPage from "./Test/test";
import EsqueceuSenhaPage from "./Pages/Client/Login/EsqueceuSenha";
import ProdutosAdminPage from "./Pages/Admin/Dashboard/Produtos";
import CadastroProdutoPage from "./Pages/Admin/Dashboard/CadastroProdutos";
import EditarProdutoPage from "./Pages/Admin/Dashboard/EditarProdutos";
import CadastroVendaPage from "./Pages/Admin/Dashboard/CadastroVendas";
import VendasPage from "./Pages/Admin/Dashboard/Vendas";
import EditarVendaPage from "./Pages/Admin/Dashboard/EditarVendas";
import FluxoPage from "./Pages/Admin/Dashboard/Fluxo";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          {/* Rotas de cliente*/}
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route
            path="/pedido-finalizado"
            element={<ConfirmacaoPedidoPage />}
          />
          <Route
            path="/confirmacao-pagamento"
            element={<ConfirmacaoPagamentoPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registre-se" element={<RegisterPage />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />} />
          <Route path="/test" element={<TestPage />} />

          {/* Rotas Adiministrativa */}
          <Route path="/admin" element={<LoginAdminPage />} />
          <Route path="/admindash" element={<DashboardAdminPage />} />
          <Route path="/produtos" element={<ProdutosAdminPage />} />
          <Route path="/vendas" element={<VendasPage />} />
          <Route path="/fluxo-caixa" element={<FluxoPage />} />
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
          <Route path="/cadastro-venda" element={<CadastroVendaPage />} />
          <Route path="/editar-produto/:id" element={<EditarProdutoPage />} />
          <Route path="/editar-venda/:id" element={<EditarVendaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
