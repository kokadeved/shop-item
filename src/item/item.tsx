import React from "react";
import { Button } from "@mui/material";
import { CartItemType } from "../App";
import { Wrapper } from "./item.styled";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3 style={{ color: "tomato" }}>${item.price}</h3>
      </div>
      <button onClick={() => handleAddToCart(item)}>ADD</button>
    </Wrapper>
  );
};

export default Item;
