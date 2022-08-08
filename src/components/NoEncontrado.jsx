import { Link } from 'react-router-dom';
import styles from '../styles/NoEncontrado.module.css';

const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Pagina no Encontrada</h1>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default NoEncontrado;
