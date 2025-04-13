import Button from "./Button";
import { useRef, useState } from "react";
export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //vaidation
        if (itemText === "") {
          alert("Please enter text");
          return;
        }

        const newItem = {
          name: itemText,
          id: new Date().getTime(),
          packed: false,
        };
        setItems((prevItems) => {
          return [...prevItems, newItem];
        });
        setItemText("");
        inputRef.current.focus();
      }}
    >
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
