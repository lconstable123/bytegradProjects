import { TriangleUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { TFeedbackItemProps } from "../../lib/types";

export default function FeedbackItem({ feedbackItem }: TFeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true; // remove focus from button
    e.stopPropagation();
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}`}
      onClick={toggleOpen}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
