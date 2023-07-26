const tableBody = document.querySelector('tbody')

const retornarTablaHTML =(producto)=>{
return `<tr>
<td>${producto.nombre}</td>
<td>${producto.id}</td>
<td>${producto.precio}</td>
<td>${producto.imagen}</td>
</tr>`
}
if (carritoFruta.length > 0){
    carritoFruta.forEach((producto) =>tableBody.innerHTML+= retornarTablaHTML(producto) )
        
    }
const btneliminar= document.querySelector("#btnComprar")
btneliminar.addEventListener("click",()=>{
    alert("Gracias por la compra")
    carritoFruta.length=0
    localStorage.removeItem('mi carrito')
    tableBody.innerHTM=""
}


)

