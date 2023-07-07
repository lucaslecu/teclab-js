const carritoFruta = []

let agregarAlCarrito = (frutaid) => {
    if (frutaid > 0) {
      const resultado = productos.find((producto) => producto.id === parseInt(frutaid));
      if (resultado !== undefined) {
        carritoFruta.push(resultado);
        console.table(carritoFruta);
      } else {
        console.warn('No se encontró el producto.');
      }
    }
  };

