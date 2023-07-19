const almacenarCarrito = () =>{
  if (carritoFruta.length > 0)
  localStorage.setItem('mi carrito',JSON.stringify(carritoFruta))
}
const recuperarCarrito = () =>{
  return JSON.parse( localStorage.getItem('mi carrito')) || []
} 

const carritoFruta = recuperarCarrito()

let agregarAlCarrito = (frutaid) => {
    if (frutaid > 0) {
      const resultado = productos.find((producto) => producto.id === parseInt(frutaid));
      if (resultado !== undefined) {
        carritoFruta.push(resultado);
        almacenarCarrito()
        //console.table(carritoFruta);
      } else {
        console.warn('No se encontró el producto.');
      }
    }
  };

