import { MapPin, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ items, indexs }) => {
  return (
    <div key={indexs} className="service-card">
      <div className="service-card-left">
        <div className="service-icon-box">{items.icon}</div>
        <div className="service-info">
          <h3>{items.title}</h3>
          <div className="service-meta">
            <span className="badge">{items.tag}</span>
            <span className="price">{items.price}</span>
            <span className="location">
              <MapPin size={14} strokeWidth={2} />
              {items.location}
            </span>
          </div>
        </div>
      </div>

      <div className="service-actions">
        <button className="btn-edit">
          <Link to={`/MyPerfil`}>
            <Pencil size={16} strokeWidth={2} />
            <span>Editar</span>
          </Link>
        </button>
        <button className="btn-delete">
          <Trash2 size={16} color="#ef4444" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
