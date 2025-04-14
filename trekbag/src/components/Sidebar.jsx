import AddItemForm from "./AddItemForm";
import { ButtonGroup } from "./ButtonGroup";
// import { useItemsContext } from "../../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";
export default function Sidebar() {
  // const { handleAddItem } = useItemsContext();
  const handleAddItem = useItemsStore((state) => state.handleAddItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
