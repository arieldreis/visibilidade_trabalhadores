import "../styles/App.css";
import Header from "../components/Header.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Categories from "../components/Categories.jsx";
import { MapPin, Search }  from "lucide-react";
import { useEffect, useState } from "react";
const Home = ({}) => {

  const [LISTINGS, setLISTINGS] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [resultado, setResultado] = useState("");
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

  function buttonActionCategories(keyCategory){
    seticonTitle(keyCategory);
    setUserInput("");
    setResultado("");
  }

  function readInput(e){
    setUserInput(e.target.value); // onde guarda o que foi escrito no input
  }

  function showType(){
    setResultado(userInput);
    setUserInput(""); // Limpa o que foi escrito no input
    seticonTitle("");
  }

  const filterDatas = LISTINGS.filter((listing) => {

    const matchSearch = listing.categoria
      .toLowerCase()
      .startsWith(resultado.toLowerCase().trim());
    
  if (!listing.categoria) return false;

  if (iconTitle === "Todos" || resultado === "Todos") {
    return true;
  }

  if (resultado && resultado.trim() !== "") {
    return matchSearch;
  }

  if (iconTitle) {
    return listing.categoria === iconTitle;
  }

  if(resultado && iconTitle){
    return matchSearch || iconTitle;
  }

  // Se nenhum filtro estiver ativo, mostra tudo
  return true;

  });
  console.log(resultado);

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
                value={ userInput }
                onChange={ readInput }
              />
            </div>
            <div className="SearchButton_Container">
                <button onClick={ showType }>Pesquisar</button>
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
