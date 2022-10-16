import React from "react";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import Item from "../item/item";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const sumTotal = (items: CartItemType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0
    );
  };

  return (
    <Wrapper>
      <h2>Shopping cart</h2>

      {cartItems.length === 0 ? <p>No item</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${sumTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
