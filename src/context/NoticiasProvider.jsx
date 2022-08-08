import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { contadorPaginas } from "../helpers";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [noticia, setNoticia] = useState("");
  const [totalResultados, setTotalResultados] = useState(0);
  const [paginasTotales, setPaginasTotales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [busqueda, setBusqueda] = useState({
    noticia: "",
    pagina: 1,
  });

  const handleTotalPaginas = (totalResults) => {
    const totalPage = contadorPaginas(totalResults);
    setPaginasTotales(totalPage);
  };

  const busquedaNoticia = async (busqueda) => {
    setIsLoading(true);
    try {
      const { noticia, pagina } = busqueda;
      const url = `https://newsapi.org/v2/everything?q=${noticia}&apiKey=f1ed34e704174924938893df74cbd9c7&page=${pagina}&pageSize=10&language=es`;
      const { data } = await axios(url);
      const { articles, totalResults } = data;
      setNoticia(articles);
      setTotalResultados(totalResults);
      handleTotalPaginas(totalResults);
    } catch (error) {
      console.log(error);
      setTotalResultados(0);
    }

    setIsLoading(false);
  };

  return (
    <NoticiasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaNoticia,
        noticia,
        totalResultados,
        paginasTotales,
        isLoading,
        setNoticia,
        busqueda,
        setBusqueda,
        setPaginasTotales,
        setIsLoading,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider};

export default NoticiasContext;
