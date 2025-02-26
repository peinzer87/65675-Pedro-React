import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Buscar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si el producto ya existe, aumentar su cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Si no existe, agregarlo al carrito
        return [...prevCart, product];
      }
    });
  };
  // };
  const updateQuantity = (id, cantidad) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: cantidad } : product
      )
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const vaciarId = (id) => {
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  const getTotalItem = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    vaciarCarrito,
    vaciarId,
    getTotalPrice,
    getTotalItem,
    updateQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
