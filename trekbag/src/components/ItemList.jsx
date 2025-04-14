import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState, useMemo } from "react";
import { useItemsStore } from "../stores/itemsStore";
// import { useItemsContext } from "../../lib/hooks";
const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore((state) => state.items);
  const handleDeleteItem = useItemsStore((state) => state.handleDeleteItem);
  const handleToggleItem = useItemsStore((state) => state.handleToggleItem);
  // const { items, handleDeleteItem, handleToggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        if (sortBy === "default") {
          return 0;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[1]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.name}
          item={item}
          onDelete={handleDeleteItem}
          onToggle={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDelete, onToggle }) {
  return (
    <li className="item">
      <label>
        <input
          id={item.name}
          type="checkbox"
          checked={item.packed}
          onClick={() => onToggle(item.id)}
        />
        {item.name}
      </label>
      <button
        className="btn--remove"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
