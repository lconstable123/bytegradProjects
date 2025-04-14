import Button from "./Button";
import { useItemsContext } from "../../lib/hooks";
export const ButtonGroup = () => {
  const { handleMarkAll, handleResetItems, handleRemoveAllItems } =
    useItemsContext();
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
