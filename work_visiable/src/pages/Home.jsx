import "../styles/App.css";
import Header from "../components/Header.jsx";
import ServiceCards from "../components/ServiceCards.jsx";

import {
  MapPin, Search, LayoutGrid, Wrench,
  Sparkles, Zap, PaintBucket, Cookie,
  Scissors, Leaf, HardHat, Hand,
  HeartHandshake, BookOpen, Camera, MoreHorizontal, MessageCircle,
  Home,
} from "lucide-react";

const CATEGORIES = [
  { key: "Todos", label: "Todos", icon: LayoutGrid },
  { key: "Encanador", label: "Encanador", icon: Wrench },
  { key: "Diarista", label: "Diarista", icon: Sparkles },
  { key: "Eletricista", label: "Eletricista", icon: Zap },
  { key: "Pintor", label: "Pintor", icon: PaintBucket },
  { key: "Bolos e Doces", label: "Bolos e Doces", icon: Cookie },
  { key: "Costura", label: "Costura", icon: Scissors },
  { key: "Jardinagem", label: "Jardinagem", icon: Leaf },
  { key: "Pedreiro", label: "Pedreiro", icon: HardHat },
  { key: "Manicure", label: "Manicure", icon: Hand },
  { key: "Cuidador", label: "Cuidador", icon: HeartHandshake },
  { key: "Aulas Particulares", label: "Aulas Particulares", icon: BookOpen },
  { key: "Fotografia", label: "Fotografia", icon: Camera },
  { key: "Outros", label: "Outros", icon: MoreHorizontal },
];

const Home = () => {
  const categoryIcon = (categoria) => {
    CATEGORIES.find((c) => c.key === categoria)?.icon || MoreHorizontal;
  }

  // Dados estáticos apenas para montar o layout. Isso será substituído pelo
  // retorno de fetch("http://localhost:3000/listarDados") na próxima etapa.

  function formatPrice(min, max) {
    if (min == null && max == null) return "Sob consulta";
    if (min != null && max != null) return `R$ ${min} - R$ ${max}`;
    return `R$ ${min ?? max}`;
  }

    function initials(name = "") {
      return name.trim().charAt(0).toUpperCase() || "?";
    }

  return (
    <>
      <div className="page">
      <Header />
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="badge">
            <MapPin className="badge-icon" />
            Encontre profissionais perto de você
          </span>
          <h1 className="title">
            Conecte-se com <span className="title-highlight">talentos locais</span>
          </h1>
          <p className="subtitle">
            Encontre encanadores, diaristas, confeiteiros e diversos
            profissionais na sua região. Contrate direto pelo WhatsApp.
          </p>

          <div className="search-wrap">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar serviços, profissionais ou cidades..."
              className="search-input"
            />
          </div>
        </div>
      </section>
      {/* Filtros de categoria (apenas visual por enquanto) */}
      <section className="categories">
        <div className="categories-list">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const active = key === "Todos";
            return (
              <button
                key={key}
                className={`cat-btn${active ? " cat-btn-active" : ""}`}
              >
                <Icon className="cat-btn-icon" />
                {label}
              </button>
            );
          })}
        </div>
      </section>
      {/* Listagem */}
      <main className="listings">
        <div className="listings-grid">
          {LISTINGS.map((item) => (
            <ServiceCards key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default Home
