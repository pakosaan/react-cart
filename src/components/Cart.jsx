import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  deleteFromCart,
  addToCart,
  calculatePrice,
} from "../redux/actions.js";

const Cart = () => {
  const { cartItems,subTotal, tax, shipping, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(addToCart({ id }));
    dispatch(calculatePrice());
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
    dispatch(calculatePrice());
  };
  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
    dispatch(calculatePrice());
  };

  return (
    <div className="h-[100vh] grid grid-cols-[1fr] sm:grid-cols-[4fr_1fr]">
      <main className="p-[2rem] overflow-y-auto scrollbar-hide">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={handleDecrement}
              increment={handleIncrement}
              deleteFromCart={handleDelete}
            />
          ))
        ) : (
          <h1 className="text-tertiary [font:100_2rem_Roboto]">
            No Items Yet.
          </h1>
        )}
      </main>

      <aside className="sm:p-[2rem] sm:rounded-[100px_0_0_100px] bg-primary text-tertiary h-[100%] w-[100%] [box-shadow:-10px_0px_10px_rgba(0,0,0,0.182)] flex flex-col justify-center">
        <h2 className="m-[1rem] sm:[font-100_1.8rem_Roboto] tracking-[2px] [font:100_1.2rem_Roboto]">
          Subtotal: ${subTotal}
        </h2>
        <h2 className="m-[1rem] sm:[font:100_1.8rem_Roboto] tracking-[2px] [font:100_1.2rem_Roboto]">
          Shipping: ${shipping}
        </h2>
        <h2 className="m-[1rem] sm:[font:100_1.8rem_Roboto] tracking-[2px] [font:100_1.2rem_Roboto]">
          Tax: ${tax}
        </h2>
        <h2 className="m-[1rem] sm:[font:600_1.8rem_Roboto] tracking-[2px] [font:600_1.2rem_Roboto]">
          Total: ${total}
        </h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteFromCart,
  id,
}) => (
  <div className="bg-tertiary w-[100%] rounded-[10px] m-[2rem_0] p-[1rem] grid  grid-cols-[1fr_3fr_1fr_1fr] items-center">
    <img
      className="w-[100%] h-[200px] object-contain"
      src={imgSrc}
      alt="Item"
    />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div className="flex items-center h-[100%]">
      <button
        className="w-[30px] h-[30px] border-none bg-primary text-tertiary rounded-[5px] cursor-pointer hover:bg-primarydark "
        onClick={() => decrement(id)}
      >
        -
      </button>
      <p className="w-[30px] h-[30px] grid place-items-center">{qty}</p>
      <button
        className="w-[30px] h-[30px] border-none bg-primary text-tertiary rounded-[5px] cursor-pointer hover:bg-primarydark "
        onClick={() => increment(id)}
      >
        +
      </button>
    </div>
    <AiFillDelete
      className="cursor-pointer font-[1.5rem] inline-block m-auto hover:text-secondary"
      onClick={() => deleteFromCart(id)}
    />
  </div>
);

export default Cart;
