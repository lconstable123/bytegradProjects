import HashtagItem from "./HashtagItem";
import { useFeedBackItemsStore } from "../store/feedbackItemsStore";
// import { useFeedbackItemsContext } from "../contenxts/FeedbackItemsContextProvider";

export default function HashtagList() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedBackItemsStore((state) => state.getCompanyList());
  const handleSelectCompany = useFeedBackItemsStore(
    (state) => state.selectCompany
  );
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          company={company}
          key={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}
