import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtags/HashtagList";
import FeedbackItemsContextProvider from "./components/contenxts/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <FeedbackItemsContextProvider>
        <Footer />
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
