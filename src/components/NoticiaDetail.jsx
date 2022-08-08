
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";
import useNoticias from "../hooks/useNoticias"
import { formatearFecha } from "../helpers";
import styles from "../styles/NoticiasDetail.module.css"


const NoticiaDetail = () => {
    const {setBusqueda} = useNoticias()
  const { publishedAt } = useParams();
  const { noticia, setNoticia } = useNoticias();
  const n = noticia.find((e) => e.publishedAt === publishedAt);
 
  const resetState = () => {
    setNoticia("")
    setBusqueda({
      noticia: "",
      pagina: 1,
    })}
  return (
    <>
    <article className={styles.contenido}>
      <div className={styles.content}>
      <h2 className={styles.titulo}>{n.title}</h2>
      <img src={n.urlToImage} alt={`imagen detalle noticia ${n.title}`} />
      <p className={styles.content}>{n.content}</p>
      </div>
      <div className={styles.fechaBoton}>
      <Link to="/">
      <Button variant="contained" size="medium" onClick={resetState}>
          inicio
        </Button>
      </Link>
      <p className={styles.fecha}>{formatearFecha(n.publishedAt)}</p>
      </div>
    </article>
    </>
  )
}

export default NoticiaDetail
export {resetState}