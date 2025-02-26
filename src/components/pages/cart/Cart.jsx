import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, vaciarCarrito, vaciarId, getTotalPrice, updateQuantity } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div className="cartContainerPage">
      <h1>🛒</h1>
      {cart.length === 0 ? (
        <h2 className="emptyCartMessage">
          Tu carrito está vacío <br />
          🙀{" "}
        </h2>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((product) => (
              <div className="cartItem" key={product.id}>
                <img
                  className="cartImage"
                  src={product.imageUrl}
                  alt={product.title}
                />
                <div className="cartDetails">
                  <h2 className="cartTitle">{product.title}</h2>
                  <p className="cartPrice">Precio: ${product.price}</p>
                  <div className="cartQuantityContainer">
                    Editar cantidad:
                    <button
                      className="quantityButton"
                      onClick={() =>
                        product.quantity > 1 &&
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <p className="cartQuantity">{product.quantity}</p>
                    <button
                      className="quantityButton"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="deleteButton"
                  onClick={() => vaciarId(product.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <h2 className="cartTotal">Total a pagar: ${total}</h2>
          <div className="cartButtons">
            <button className="emptyCartButton" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="checkoutButton">
              Realizar Compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
