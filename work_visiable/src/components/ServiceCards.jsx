function ServiceCards({ item }) {
  const Icon = categoryIcon(item.categoria);
  const priceLabel = formatPrice(item.precoMin, item.precoMax);
  const waLink = item.whatsapp
    ? `https://wa.me/${item.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <div className="card">
      <div className="card-image">
        <span className="card-tag">
          <Icon className="card-tag-icon" />
          {item.categoria}
        </span>
        <Icon className="card-image-icon" strokeWidth={1.5} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{item.titulo}</h3>
        <p className="card-desc">{item.descricao}</p>

        <div className="provider">
          <div className="avatar">{initials(item.prestador)}</div>
          <div className="provider-info">
            <p className="provider-name">{item.prestador}</p>
            <p className="provider-city">
              <MapPin className="city-icon" />
              <span className="city-text">{item.cidade}</span>
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

export default ServiceCards