import Pattern from "../Pattern";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";
import { useFeedBackItemsStore } from "../store/feedbackItemsStore";

export default function Header() {
  // const { handleAddToList } = useFeedbackItemsContext();
  const handleAddToList = useFeedBackItemsStore((state) => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
