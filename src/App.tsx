import React, { FC, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Drawer } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/icons-material";

import { Wrapper } from "./App.styles";
import { StyleButton } from "./App.styles";

import Item from "./item/item";
import Cart from "./Cart/Cart";

export type CartItemType = {
  id: number;
  cathegory: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const url = "https://fakestoreapi.com/products";

const getProducts = async (): Promise<CartItemType[]> => {
  const res = await axios.get(url);

  console.log(res.data);
  return res.data;
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((acc, item) => acc + item.amount, 120);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      console.log(prev);
      // if item already added
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
      }
      // first time item is added
      else {
        return [...prev, { ...clickedItem, amount: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc;
          } else {
            return [...acc, { ...item, amount: item.amount - 1 }];
          }
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>Somthing goes wrong...</div>;
  }

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          removeFromCart={handleRemoveFromCart}
          addToCart={handleAddToCart}
          cartItems={cartItems}
        />
      </Drawer>
      <StyleButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyleButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
