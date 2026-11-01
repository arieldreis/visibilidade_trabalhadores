import { Handshake, Menu, Search, LayoutGrid, Settings, CircleUser  } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <header className="anunciar-header">
      <div className="container-responsive___allItems">
        <div className="container-inline___brand-menu">
          <Link to="/Home">
            <div className="anunciar-header__brand">
              <span className="anunciar-header__logo" style={{ padding: "5px" }}>
                <Handshake />
              </span>
              <span className="anunciar-header__name">Easy Connect</span>
            </div>
          </Link>
          <Menu className="menu-btn" />
        </div>
        <nav className="anunciar-header__nav">
          <button type="button" className="anunciar-header__link">
            <span aria-hidden="true">
              <Search />
            </span> 
            Explorar
          </button>
          <button type="button" className="anunciar-header__link">
            <span aria-hidden="true">
              < LayoutGrid />
            </span> 
            Meus Serviços
          </button>
          <Link to="/AddWork">
            <button type="button" className="anunciar-header__cta">
              <span>+ Anunciar</span>
            </button>
          </Link>
          <button type="button" className="anunciar-header__avatar" aria-label="Minha conta">
            <CircleUser size={24} />
          </button>
          <button type="button" className="anunciar-header__engrenagem" aria-label="Minha conta">
            <Settings/>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
