import { useEffect} from "react";
import useNoticias from "../hooks/useNoticias";
import styles from "../styles/Formulario.module.css";

const Formulario = () => {
  const { setAlerta, busquedaNoticia, setPaginasTotales, paginasTotales, noticia, busqueda, setBusqueda, setIsLoading } = useNoticias();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Coloque la noticia que desea buscar");
      return;
    }
    busquedaNoticia(busqueda);
    setAlerta("");
  };

  useEffect(() => {
    const serach = async () => {
      await busquedaNoticia(busqueda);
    };
    if (!noticia.includes("")) {
      
      serach();
    }
    setIsLoading(false)
  }, [busqueda.pagina]);

  const handleBoton = (e) => {
   
    setBusqueda({
      ...busqueda,
      [e.target.name]: Number(e.target.value),
    })
  }

  useEffect(() => {
    setPaginasTotales([])
  }, [busqueda.pagina])
  

  return (
    <form className={`contenedor ${styles.formulario}`} onSubmit={handleSubmit}>
      <div className={styles.contenido}>
        <div className={styles.buscador}>
          <legend>Buscar Noticia</legend>
          <input
          autoComplete="off"
            className={styles.displaySearch}
            type="text"
            name="noticia"
            placeholder="Buscar noticias"
            value={busqueda.noticia}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div className={styles.paginado}>
          {

          paginasTotales.length
            ? paginasTotales.map((e, n) => (
                <input
                  key={n}
                  type="button"
                  name="pagina"
                  value={n + 1}
                  onClick={(e) =>
                    handleBoton(e)
                  }
                />
              ))
            :
            null}
        </div>
        <input disabled={busqueda.noticia.length < 3 ? true : false} className={busqueda.noticia.length < 3 ? `${styles.btnTrue}` : `${styles.btnFalse}`} type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
