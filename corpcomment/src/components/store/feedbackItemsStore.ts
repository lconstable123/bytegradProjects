import { create } from "zustand";
import { TFeedbackItem } from "../../lib/types";

type TFeedbackItemsState = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addItemToList: (text: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
};

export const useFeedBackItemsStore = create<TFeedbackItemsState>(
  (set, get) => ({
    feedbackItems: [],
    isLoading: false,
    errorMessage: "",
    selectedCompany: "",
    getCompanyList: () => {
      return get()
        .feedbackItems.map((item) => item.company)
        .filter((value, index, array) => array.indexOf(value) === index);
    },
    getFilteredFeedbackItems: () => {
      const state = get();
      return state.selectedCompany
        ? state.feedbackItems.filter(
            (item) => item.company === state.selectedCompany
          )
        : state.feedbackItems;
    },
    addItemToList: async (text: string) => {
      console.log("adding");
      const company = text
        .split(" ")
        .find((word) => word.includes("#"))!
        .substring(1);

      const newItem: TFeedbackItem = {
        id: new Date().getTime().toString(),
        text: text,
        company: company,
        badgeLetter: company.substring(0, 1).toUpperCase(),
        upvoteCount: 0,
        daysAgo: 0,
      };
      set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

      await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      );
    },
    selectCompany: (company: string) => {
      set((state) => ({
        selectedCompany: state.selectedCompany === company ? "" : company,
      }));

      console.log("company selected:", company);
    },

    fetchFeedbackItems: async () => {
      set(() => ({ isLoading: true }));
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        set(() => ({ feedbackItems: data.feedbacks }));
        console.log("Feedback items:", data);
      } catch (error) {
        set(() => ({ errorMessage: "something went wrong" }));
        console.error("Error fetching feedback items:", error);
      }
      set(() => ({ isLoading: false }));
    },
  })
);
