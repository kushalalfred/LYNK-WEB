import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "lynk-cart";
const CartContext = createContext(null);

function readCart() {
  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Unable to read the saved cart.", error);
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Unable to save the cart.", error);
    }
  }, [items]);

  useEffect(() => {
    const syncCart = (event) => {
      if (event.key === CART_STORAGE_KEY) {
        setItems(readCart());
      }
    };

    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.unitPrice * item.quantity,
        0
      ),
      addItem(item) {
        setItems((currentItems) => {
          const existingItem = currentItems.find(
            (currentItem) => currentItem.id === item.id
          );

          if (existingItem) {
            return currentItems.map((currentItem) =>
              currentItem.id === item.id
                ? { ...currentItem, quantity: currentItem.quantity + 1 }
                : currentItem
            );
          }

          return [...currentItems, { ...item, quantity: 1 }];
        });
      },
      updateQuantity(itemId, quantity) {
        setItems((currentItems) =>
          currentItems.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          )
        );
      },
      removeItem(itemId) {
        setItems((currentItems) =>
          currentItems.filter((item) => item.id !== itemId)
        );
      },
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider.");
  }
  return cart;
}
