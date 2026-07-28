import "../styles/App.css";
import { CATEGORIES } from "../services/servicesCategories.js";
import { MoreHorizontal, MapPin, MessageCircle } from "lucide-react";

const ServiceCards = ({ items }) => {

  function formatPrice(min, max) {
    if (min == null && max == null) return "Sob consulta";
    if (min != null && max != null) return `R$ ${min} - R$ ${max}`;
    // return `R$ ${min ?? max}`;
  }

  function initials(name = "") {
    return name.trim().charAt(0).toUpperCase() || "?";
  }
  const categoryIcon = (categoria) => {
    return CATEGORIES.find((c) => c.key === categoria)?.icon || MoreHorizontal;
  }

  const Icon = categoryIcon(items.categoria);
  const priceLabel = formatPrice(items.precoMin, items.precoMax);
  const waLink = items.telefone ? `https://wa.me/${items.telefone.replace(/\D/g, "")}` : null;

  return (
    <div className="card">
      <div className="card-image">
        <span className="card-tag">
          <Icon className="card-tag-icon" />
          {items.categoria}
        </span>
        <Icon className="card-image-icon" strokeWidth={1.5} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{items.title_service}</h3>
        <p className="card-desc">{items.descricao}</p>

        <div className="provider">
          <div className="avatar">{initials(items.nome)}</div>
          <div className="provider-info">
            <p className="provider-name">{items.nome}</p>
            <p className="provider-city">
              <MapPin className="city-icon" />
              <span className="city-text">{items.cidade}</span>
            </p>
          </div>
        </div>

        <div className="price-row">
          <span className="price">{priceLabel}</span>
          {waLink ? (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              <MessageCircle className="wa-icon" />
              WhatsApp
            </a>
          ) : (
            <span className="wa-btn wa-btn-disabled">
              <MessageCircle className="wa-icon" />
              Indisponível
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;