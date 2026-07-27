import React from 'react'
import { Handshake, Menu } from 'lucide-react'

const Header = () => {
  return (
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">
              <Handshake className="brand-icon-svg" />
            </div>
            <span className="brand-name">TalentoLocal</span>
          </div>
          <button aria-label="Abrir menu" className="menu-btn">
            <Menu className="menu-icon" />
          </button>
        </div>
      </header>
  )
}

export default Header
