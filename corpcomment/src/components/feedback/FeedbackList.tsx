import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackItemsContext } from "../../lib/hooks";
// import { useFeedbackItemsContext } from "../contenxts/FeedbackItemsContextProvider";

export default function FeedbackList() {
  const { filteredFeedbackItems, isLoading, errorMessage } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
