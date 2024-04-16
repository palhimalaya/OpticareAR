import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
  
      if (existingItem) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemToRemove.name));
  };

  const increaseQuantity = (itemToIncrease) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.name === itemToIncrease.name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemToDecrease) => {
    setCartItems(prevItems => prevItems.reduce((items, item) => {
      if (item.name === itemToDecrease.name) {
        if (item.quantity === 1) {
          return items;
        } else {
          return [...items, { ...item, quantity: item.quantity - 1 }];
        }
      } else {
        return [...items, item];
      }
    }, []));
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};