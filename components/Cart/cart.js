//Agrega un producto al carrito de compra
function addItemToCart(event) {
    cart.push(event.target.getAttribute("mark"));
    showCart();
    saveCartLocalStorage();
    swal({
      title: "¡Product added!",
      text: "The product has been added to the shopping cart",
      icon: "success",
      background: "#f9dee9",
    });
  }

  //Borra un producto del carrito de compra
  function deleteItemCart(event) {
    const id = event.target.dataset.item;
    cart = cart.filter((carritoId) => {
      return cartId !== id;
    });
    showCart();
    saveCartLocalStorage();
  }