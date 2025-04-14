import Counter from "./Counter";
import Logo from "./Logo";
// import { useItemsContext } from "../../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";
export default function Header() {
  // const { items } = useItemsContext();
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
