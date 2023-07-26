
const productos = []
const URL = "js/productos.json"
function retornarCardHTML(producto) {
    return `
      <div class="card">
          <div class="card-image">${producto.imagen}</div>
          <div class="card-name">${producto.nombre}</div>
          <div class="card-price">$ ${producto.precio}</div>
          <div class="card-button">
              <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
          </div>
      </div>
    `;
  }
  const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add');
    for (boton of botonesAgregar){
      boton.addEventListener('click',(e)=>{
        agregarAlCarrito(e.target.id)
      })
    }
   
  }


  
  function cargarProductos(array) {
    const container = document.querySelector('.container');
  
    array.forEach((producto) => {
      const cardHTML = retornarCardHTML(producto);
      container.innerHTML += cardHTML;
    });
    activarClickEnBotones()
  }
  
  // Llamamos a la función cargarProductos y pasamos el array de productos
  
  const obtenerProductos = () => {
    fetch(URL)
    .then( (reponse) => reponse.json() )
    .then((data) => productos.push(...data))
    .then(()=> cargarProductos(productos))
    .catch((error)=> console.error(error))
    }
    obtenerProductos()