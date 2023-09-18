import { NavLink } from "react-router-dom";
import Menu from "../menu.tsx";

const Header: React.FC = () => {
  return (
    <header className="flex row v-center">
      <NavLink to="/" className="logo">
        <img src="images/logo-h.svg" alt="logo hugo vertical" />
      </NavLink>
      <Menu />
    </header>
  );
};

export default Header;
