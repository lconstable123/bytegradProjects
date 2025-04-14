import React, { createContext, useState, useEffect } from "react";
import { initialItems } from "../../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      name: newItemText,
      id: new Date().getTime(),
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(`deleted ${id}`);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetItems = () => {
    setItems(initialItems);
  };

  const handleMarkAll = (state) => {
    const newItems = items.map((item) => {
      console.log(`marked ${state}`);
      return { ...item, packed: state };
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetItems,
        handleMarkAll,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
