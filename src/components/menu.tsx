import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleDarkMode from "./toggleDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !menuRef?.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <a className="menu-burger-trigger" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </a>

      <div className={`menu ${isOpen ? "open" : "close"}`}>
        <nav className="navigation-links">
          <NavLink
            to="/"
            className="action default"
            // Use spread operator to bypass TypeScript type checking
            {...{ activeClassName: "active" }}
          >
            Accueil
          </NavLink>
          <NavLink to="/about" className="action default">
            À propos de moi
          </NavLink>
          <NavLink to="/services" className="action default">
            Mes services
          </NavLink>
          <NavLink to="/contact" className="action default">
            Contact
          </NavLink>
          <ToggleDarkMode />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
