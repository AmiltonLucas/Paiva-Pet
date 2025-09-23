import React from "react";
import { Home, Heart, ShoppingBag, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

function NavItem({ to, icon, label, active, activeColor, inactiveColor }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center transition-colors`}
      style={{ color: active ? activeColor : inactiveColor }}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const COLORS = __COLORS__;

  const location = useLocation(); // Obtém a rota atual

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 shadow-lg border-t border-gray-300 z-50 rounded-t-xl"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <NavItem
        to="/"
        icon={<Home size={22} />}
        label="Home"
        active={location.pathname === "/"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/favoritos"
        icon={<Heart size={22} />}
        label="Favoritos"
        active={location.pathname === "/favoritos"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/carrinho"
        icon={<ShoppingBag size={22} />}
        label="Carrinho"
        active={location.pathname === "/carrinho"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/perfil"
        icon={<User size={22} />}
        label="Perfil"
        active={location.pathname === "/perfil"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
    </nav>
  );
}
