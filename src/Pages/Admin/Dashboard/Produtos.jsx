import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import ProdutosAdmin from "../../../Components/Admin/Produtos";

export default function ProdutosAdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <ProdutosAdmin/>
    </div>
  );
}
