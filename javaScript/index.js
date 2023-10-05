let productosSuper = [];
let carrito = [];

productosSuper.push(new Productos('Coca-Cola', 660, 'COCACOLA'));
productosSuper.push(new Productos('Fanta', 580, 'COCACOLA'));
productosSuper.push(new Productos('Sprite', 620, 'COCACOLA'));


const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');

const enviarDatos = document.querySelector('#enviar_datos')
let validacion = '';
let cantidadProducto;

enviarDatos.addEventListener('click',(e)=>{

  e.preventDefault()
  
})

function registroUsuario (a,b) {

  a.addEventListener('input',(e)=>{

    validacion  = e.target.value ;
  
    validacion.length < 3 ? e.target.style.backgroundColor = 'red' : e.target.style.backgroundColor = 'green';
  
    validacion.length < 3 ? e.target.nextElementSibling.textContent = 'Agregar datos ' : e.target.nextElementSibling.textContent = 'Datos Correctos'
  
    localStorage.setItem(b,e.target.value);
  
    validacion.length === 0 && localStorage.removeItem(b)
  
  
  });
}

registroUsuario(nombre,'Nombre-Usuario');

registroUsuario(apellido,'Apellido-Usuario');


const agregarSprite = document.querySelector('#agregar_sprite');
const quitarSprite = document.querySelector('#quitar_sprite');
const agregarCoca = document.querySelector('#agregar_coca');
const quitarCoca = document.querySelector('#quitar_coca');
const agregarFanta = document.querySelector('#agregar_fanta');
const quitarFanta = document.querySelector('#quitar_fanta');


agregarCoca.addEventListener('click', () => {

  cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[0].nombre}`)) || 0;

  cantidadProducto++;
  
  localStorage.setItem(productosSuper[0].nombre, cantidadProducto)

  let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];
  
  let pepe = carritoLocal.findIndex(item => item.producto.nombre === productosSuper[0].nombre);
  
  let index = carrito.findIndex(item => item.producto.nombre === productosSuper[0].nombre);

  if (index !== -1 && pepe !== -1) {

    carrito[index].cantidad = cantidadProducto;
   
    carritoLocal[pepe].cantidad = cantidadProducto;

    localStorage.setItem('carrito', JSON.stringify(carritoLocal))

  } else {

    carrito.push(new Item(productosSuper[0], cantidadProducto));

    let carritoJason = JSON.stringify(carrito) 

    localStorage.setItem('carrito',carritoJason);
    
  }

crearLista()
  console.log(carrito);
});

agregarFanta.addEventListener('click',()=>{
  cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[1].nombre}`)) || 0;

  cantidadProducto++;
  
  localStorage.setItem(productosSuper[1].nombre, cantidadProducto)

  let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];
  
  let pepe = carritoLocal.findIndex(item => item.producto.nombre === productosSuper[1].nombre);
  
  let index = carrito.findIndex(item => item.producto.nombre === productosSuper[1].nombre);

  if (index !== -1 && pepe !== -1) {

    carrito[index].cantidad = cantidadProducto;
   
    carritoLocal[pepe].cantidad = cantidadProducto;

    localStorage.setItem('carrito', JSON.stringify(carritoLocal))

  } else {

    carrito.push(new Item(productosSuper[1], cantidadProducto));

    let carritoJason = JSON.stringify(carrito) 

    localStorage.setItem('carrito',carritoJason);
    
  }

  crearLista();
  console.log(carrito);
});

agregarSprite.addEventListener('click',()=>{

  cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[2].nombre}`)) || 0;

  cantidadProducto++;
  
  localStorage.setItem(productosSuper[2].nombre, cantidadProducto)

  let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];
  
  let pepe = carritoLocal.findIndex(item => item.producto.nombre === productosSuper[2].nombre);
  
  let index = carrito.findIndex(item => item.producto.nombre === productosSuper[2].nombre);

  if (index !== -1 && pepe !== -1) {

    carrito[index].cantidad = cantidadProducto;
   
    carritoLocal[pepe].cantidad = cantidadProducto;

    localStorage.setItem('carrito', JSON.stringify(carritoLocal))

  } else {

    carrito.push(new Item(productosSuper[2], cantidadProducto));

    let carritoJason = JSON.stringify(carrito) 

    localStorage.setItem('carrito',carritoJason);
    
  }

crearLista()
  console.log(carrito);
});

quitarCoca.addEventListener('click', () => {
  let cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[0].nombre}`)) || 0;

  if (cantidadProducto > 0) {
    cantidadProducto--;

    localStorage.setItem(`${productosSuper[0].nombre}`, cantidadProducto);

    const index = carrito.findIndex(item => item.producto.nombre === productosSuper[0].nombre);

    let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];

    if (index !== -1) {

      carrito[index].cantidad = cantidadProducto;

      carritoLocal[index].cantidad = cantidadProducto;

      localStorage.setItem('carrito', JSON.stringify(carritoLocal))

      if (cantidadProducto === 0) {

        carrito.splice(index, 1);

        localStorage.removeItem(`${productosSuper[0].nombre}`);
        
        let carritoJason = JSON.stringify(carrito) 

       localStorage.setItem('carrito',carritoJason);
      }
    }
    crearLista();

    console.log(carrito);
  }
});

quitarFanta.addEventListener('click', () => {
  let cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[1].nombre}`)) || 0;

  if (cantidadProducto > 0) {
    cantidadProducto--;

    localStorage.setItem(`${productosSuper[1].nombre}`, cantidadProducto);

    const index = carrito.findIndex(item => item.producto.nombre === productosSuper[1].nombre);

    let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];

    if (index !== -1) {

      carrito[index].cantidad = cantidadProducto;

      carritoLocal[index].cantidad = cantidadProducto;

      localStorage.setItem('carrito', JSON.stringify(carritoLocal))

      if (cantidadProducto === 0) {

        carrito.splice(index, 1);

        localStorage.removeItem(`${productosSuper[1].nombre}`);
        
        let carritoJason = JSON.stringify(carrito) 

       localStorage.setItem('carrito',carritoJason);
      }
    }
    crearLista();

    console.log(carrito);
  }
});

quitarSprite.addEventListener('click', () => {
  let cantidadProducto = parseInt(localStorage.getItem(`${productosSuper[2].nombre}`)) || 0;

  if (cantidadProducto > 0) {
    cantidadProducto--;

    localStorage.setItem(`${productosSuper[2].nombre}`, cantidadProducto);

    const index = carrito.findIndex(item => item.producto.nombre === productosSuper[2].nombre);

    let carritoLocal = JSON.parse(localStorage.getItem ('carrito')) || [];

    if (index !== -1) {

      carrito[index].cantidad = cantidadProducto;

      carritoLocal[index].cantidad = cantidadProducto;

      localStorage.setItem('carrito', JSON.stringify(carritoLocal))

      if (cantidadProducto === 0) {

        carrito.splice(index, 1);

        localStorage.removeItem(`${productosSuper[2].nombre}`);
        
        let carritoJason = JSON.stringify(carrito) 

       localStorage.setItem('carrito',carritoJason);
      }
    }
    crearLista();

    console.log(carrito);
  }
});

function crearLista (){

  const lista = document.querySelector('#lista');
  lista.innerHTML = ` `;

  carrito.forEach((item,index)=>{

    let tr = document.createElement ('tr');
    lista.appendChild(tr)
    

    let th = document.createElement ('th');
    th.textContent =`Producto Numero ${index+1} ` 
    tr.appendChild(th);

    let td = document.createElement('td');
    td.textContent =`Producto ${item.producto.nombre}--------             `
    tr.appendChild(td)

    td = document.createElement('td');
    td.textContent =`Marca del Producto ${item.producto.marca}--------        `;
    tr.appendChild(td)

    td = document.createElement('td');
    td.textContent = ` Precio  del Producto $${item.producto.precio} -------         `;
    tr.appendChild(td)

    td = document.createElement('td');
    td.textContent =`Cantidad${item.cantidad}`;
    tr.appendChild(td)    

    
  })
}
function calcularPrecio (){

   let total = carrito.reduce((acum,item)=>{return acum + item.cantidad*item.producto.precio},0 )

console.log(total)
}



const total = document.querySelector('#total');
total.addEventListener('click',(e)=>{

  let total = carrito.reduce((acum,item)=>{return acum + item.cantidad*item.producto.precio},0 );

  e.target.nextElementSibling.textContent = ` el total es de ${total}`




});