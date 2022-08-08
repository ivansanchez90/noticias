import Formulario from "./Formulario";
import useNoticias from "../hooks/useNoticias";
import Alerta from "./Alerta";
import Spinner from "./Spinner";
import styles from "../styles/AppNoticias.module.css";
import New from "./New";

const AppNoticias = () => {
  const { alerta, noticia, isLoading, paginasTotales} = useNoticias();
  
  
  return (
    <>
      <header className="heading">Noticias</header>

      <Formulario />
      
      
      <main className={`contenedor ${styles.contPrinc}`}>
          <div className={styles.grid}>

        {alerta ? <Alerta>{alerta}</Alerta> : 
        
        noticia.length ? noticia.map(n => (
          <New
          key={n.url}
          n={n}
          />
          )) : 
          isLoading ? <div className={styles.spinner}><Spinner /></div> :
          
          <p>No hay resultados disponibles</p>}
          </div>
      </main>
      <footer>
      <p className={styles.copyright}>
            Todos los derechos reservados -Ivan Sanchez-
          </p>
      </footer>
    </>
  );
};

export default AppNoticias;
