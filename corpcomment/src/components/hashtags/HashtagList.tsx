import HashtagItem from "./HashtagItem";
import { useFeedbackItemsContext } from "../../lib/hooks";
// import { useFeedbackItemsContext } from "../contenxts/FeedbackItemsContextProvider";

export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
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
