
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
  
  
  function cargarProductos(array) {
    const container = document.querySelector('.container');
  
    array.forEach((producto) => {
      const cardHTML = retornarCardHTML(producto);
      container.innerHTML += cardHTML;
    });
  }
  
  // Llamamos a la función cargarProductos y pasamos el array de productos
  cargarProductos(productos);