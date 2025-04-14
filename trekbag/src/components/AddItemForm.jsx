import Button from "./Button";
import { useRef, useState } from "react";
export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText === "") {
      alert("Please enter text");
      return;
    }
    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
