import { use } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";
// import { useItemsContext } from "../../lib/hooks";
export const ButtonGroup = () => {
  // const { handleMarkAll, handleResetItems, handleRemoveAllItems } =
  //   useItemsContext();
  const handleMarkAll = useItemsStore((state) => state.handleMarkAll);
  const handleResetItems = useItemsStore((state) => state.handleResetItems);
  const handleRemoveAllItems = useItemsStore(
    (state) => state.handleRemoveAllItems
  );

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={() => handleMarkAll(true)}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={() => handleMarkAll(false)}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetItems}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
};
