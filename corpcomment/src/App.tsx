import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtags/HashtagList";
import { useEffect } from "react";
import { useFeedBackItemsStore } from "./components/store/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedBackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, []);
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
