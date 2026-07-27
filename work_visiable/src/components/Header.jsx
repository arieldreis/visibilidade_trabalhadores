import React from 'react'
import { Handshake, Menu, Search, LayoutGrid } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className="anunciar-header">
        <Link to="/Home">
          <div className="anunciar-header__brand">
            <span className="anunciar-header__logo" style={{ padding: '5px' }}>
              <Handshake />
            </span>
            <span className="anunciar-header__name">TalentoLocal</span>
          </div>
        </Link>
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
              + Anunciar
            </button>
          </Link>
          <button type="button" className="anunciar-header__avatar" aria-label="Minha conta">
            👤
          </button>
        </nav>
      </header>
  )
}

export default Header
