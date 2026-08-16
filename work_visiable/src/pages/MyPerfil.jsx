import React from 'react';
import '../styles/Dashboard.css';
import Header from '../components/Header';
import { ShoppingBag, Search, User, Save } from 'lucide-react';

const MyPerfil = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="content-container flex-center">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-circle">A</div>
            <div>
              <h2>Meu Perfil</h2>
              <p className="profile-email">arieldreis@gmail.com</p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nome</label>
              <input 
                type="text" 
                className="input-disabled" 
                value="Ariel Marinho" 
                disabled 
              />
              <span className="field-hint">O nome não pode ser alterado aqui</span>
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input 
                type="email" 
                className="input-disabled" 
                value="arieldreis@gmail.com" 
                disabled 
              />
            </div>

            <div className="form-group">
              <label>Telefone / WhatsApp</label>
              <input 
                type="text" 
                className="input-standard" 
                placeholder="Ex: 11999999999" 
              />
            </div>

            <div className="form-group">
              <label>Sobre mim</label>
              <input 
                type="text" 
                className="input-standard" 
                placeholder="Uma breve descrição sobre você" 
              />
            </div>

            <button type="submit" className="btn-save">
              <Save size={18} strokeWidth={2} />
              Salvar Alterações
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default MyPerfil