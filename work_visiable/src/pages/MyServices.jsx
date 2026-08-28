import React from 'react';
import '../styles/Dashboard.css';
import Header from '../components/Header';
import {
  User,
  Wrench,
  Zap,
  Sparkles,
  Paintbrush,
  GraduationCap,
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const MyServices = () => {
  const servicos = [
    {
      title: "Bolos decorados para festas",
      tag: "Bolos e Doces",
      price: "R$ 100 - R$ 200",
      location: "Belo Horizonte",
      icon: <User size={24} color="#7c3aed" strokeWidth={2} />
    },
    {
      title: "Conserto de torneiras e encanamento",
      tag: "Encanador",
      price: "R$ 100 - R$ 200",
      location: "Juquitiba",
      icon: <Wrench size={24} color="#7c3aed" strokeWidth={2} />
    },
    {
      title: "Instalação e manutenção elétrica",
      tag: "Eletricista",
      price: "R$ 100 - R$ 200",
      location: "Curitiba",
      icon: <Zap size={24} color="#7c3aed" strokeWidth={2} />
    },
    {
      title: "Faxina residencial completa",
      tag: "Diarista",
      price: "R$ 50 - R$ 100",
      location: "Rio de Janeiro",
      icon: <Sparkles size={24} color="#7c3aed" strokeWidth={2} />
    },
    {
      title: "Pintura residencial e comercial",
      tag: "Pintor",
      price: "R$ 200 - R$ 500",
      location: "Salvador",
      icon: <Paintbrush size={24} color="#7c3aed" strokeWidth={2} />
    },
    {
      title: "Aulas particulares de matemática",
      tag: "Aulas Particulares",
      price: "R$ 50 - R$ 100",
      location: "Porto Alegre",
      icon: <GraduationCap size={24} color="#7c3aed" strokeWidth={2} />
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      <main className="content-container">
        <div className="page-header">
          <div>
            <h1>Meus Serviços</h1>
            <p>Gerencie seus anúncios de serviços</p>
          </div>
          <button className="btn-primary-action">+ Novo Serviço</button>
        </div>

        <div className="services-list">
          {servicos.map((item, index) => (
            <ServiceCard items={item} key={index} indexs={index}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyServices