export type TFeedbackItem = {
  id: string;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};
export type TFeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};
