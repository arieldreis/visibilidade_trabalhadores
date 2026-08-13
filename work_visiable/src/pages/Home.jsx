import "../styles/App.css";
import Header from "../components/Header.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Categories from "../components/Categories.jsx";
import { MapPin, Search }  from "lucide-react";
import { useEffect, useState } from "react";
const Home = ({}) => {

  const [LISTINGS, setLISTINGS] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [iconTitle, seticonTitle] = useState("");

  useEffect(() => {
    const endPoint = "http://localhost:3000/listarDados";
    const reqAPI = (url) => {
      fetch(url).
      then((response) => response.json()).
      then((users) => {
        const dataArray = Array.isArray(users) ? users : Object.values(users);
        setLISTINGS(users)
      }).catch((error) => {
        console.log("Erro na busca de dados da api: ", error);
      })
    };

    reqAPI(endPoint);
  }, []);

  {/* Filtro de Busca */}
  function inputBusca(e){
    setUserInput(e.target.value);
  }

  function buttonActionCategories(keyCategory){
    seticonTitle(keyCategory)
  }

  const filterDatas = LISTINGS.filter((LISTING) => {
    if(LISTING === "Todos"){
      return LISTING.categoria
    } else {
      return LISTING.categoria.startsWith(userInput);
      return LISTING.categoria.icontAction
    }

  });

  console.log(`Teste: ${iconTitle}`)

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
              placeholder="Buscar serviços ou cidades..."
              className="search-input"
              onChange={ inputBusca }
              value={ userInput }
            />
          </div>
        </div>
      </section>
      {/* Filtros de categoria (apenas visual por enquanto) */}
      <Categories icontAction={ buttonActionCategories } iconTitle={ iconTitle }/>
      {/* Listagem */}
      <main className="listings">
        <div className="listings-grid">
          {filterDatas.map((item) => (
            <ServiceCards key={item.id} items={item} />
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default Home;
