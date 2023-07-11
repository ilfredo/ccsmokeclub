let productosContainer = document.getElementById("productos");

// Obtiene los datos de los productos (puedes reemplazar este ejemplo con una llamada AJAX para cargar el archivo JSON)
let productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Esta es la descripción del Producto 1 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 10,
    precio: 19.99,
    imagen: "../assets/img/imgtest002.png",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Esta es la descripción del Producto 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ",
    stock: 5,
    precio: 9.99,
    imagen: "../assets/img/imgtest005.png",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Esta es la descripción del Producto 3 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 2,
    precio: 29.99,
    imagen: "../assets/img/imgtest006.png",
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Esta es la descripción del Producto 4 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 0,
    precio: 39.99,
    imagen: "../assets/img/imgtest007.png",
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "Esta es la descripción del Producto 5 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 1,
    precio: 49.99,
    imagen: "../assets/img/default.png",
  },
  {
    id: 6,
    nombre: "Producto 6",
    descripcion: "Esta es la descripción del Producto 6 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 10,
    precio: 59.99,
    imagen: "../assets/img/imgtest006.png",
  },
  {
    id: 7,
    nombre: "Producto 7",
    descripcion: "Esta es la descripción del Producto 7 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    stock: 10,
    precio: 59.99,
    imagen: "../assets/img/default.png",
  }
];

// Recorre los productos y crea elementos HTML para mostrarlos
productos.forEach((function (producto) {
  // Crea un contenedor para todos los productos
  var cardContainer = document.createElement("div");
  cardContainer.className = "card";

  var cardImgContainer = document.createElement("div");
  cardImgContainer.className = "card";

  var cardBodyContainer = document.createElement("div");
  cardBodyContainer.className = "card-body text-center";

  // Crea un contenedor para cada producto
  var productoContainer = document.createElement("div");
  productoContainer.className = "col";

  // Crea elementos HTML para mostrar la información del producto
  var nombreElement = document.createElement("h2");
  nombreElement.textContent = producto.nombre;
  nombreElement.className = "card-title";

  var descripcionElement = document.createElement("p");
  descripcionElement.textContent = producto.descripcion;
  descripcionElement.className = "card-text";

  var stockElement = document.createElement("p");
  stockElement.textContent = "Stock: " + producto.stock;
  stockElement.className = "";

  var precioElement = document.createElement("p");
  precioElement.textContent = "$ " + producto.precio;
  precioElement.className = "fs-2";

  var imagenElement = document.createElement("img");
  imagenElement.src = producto.imagen;
  imagenElement.className = "card-img-top"

  productoContainer.appendChild(cardImgContainer)
  productoContainer.appendChild(cardContainer)
  cardContainer.appendChild(cardBodyContainer);
  cardImgContainer.appendChild(imagenElement);
  cardBodyContainer.appendChild(nombreElement);
  cardBodyContainer.appendChild(descripcionElement);
  cardBodyContainer.appendChild(stockElement);
  cardBodyContainer.appendChild(precioElement);
  productosContainer.appendChild(productoContainer);
}));

