export const contadorPaginas = (paginas) => {
    let contador = [];
    if (paginas > 0) {
      for (let i = 0; i < paginas && i < 100; i += 10) {
        contador.push(i);
      }
    }
    return contador;
  };
  
  export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
  
    return fechaNueva.toLocaleDateString("es-ES", opciones);
  };