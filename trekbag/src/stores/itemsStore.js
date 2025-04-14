import { create } from "zustand";
import { initialItems } from "../../lib/constants";
export const useItemsStore = create((set) => ({
  items: initialItems,
  handleRemoveAllItems: () => {
    set(() => ({ items: [] }));
  },
  handleResetItems: () => {
    set(() => ({ items: initialItems }));
  },
  handleAddItem: (newItemText) => {
    set((state) => {
      const newItem = {
        name: newItemText,
        id: new Date().getTime(),
        packed: false,
      };
      console.log(`added ${newItemText}`);
      return { items: [...state.items, newItem] };
    });
  },
  handleDeleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      console.log(`deleted ${id}`);
      return { items: newItems };
    });
  },
  handleToggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...state.items, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  handleMarkAll: (checked) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        console.log(`marked ${checked}`);
        return { ...item, packed: checked };
      });
      return { items: newItems };
    });
  },
}));
