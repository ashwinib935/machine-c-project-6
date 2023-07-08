import React, { createContext, useContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../data/restorentData";
export const RestorentContext = createContext();
const handleReducer = (state, action) => {
  switch (action.type) {
    case "CUSION_TYPE": {
      const cusionId = action.payload;
      const cusion = state.cuisineData.find(
        (cusion) => cusion.id === Number(cusionId)
      );
      console.log("cusion", cusion);

      return { ...state, selectedCusion: Number(cusion.id) };
    }
    case "ADD_REVIEW": {
      const newResortList = action.payload;
      return { ...state, restaurantsData: newResortList };
    }
    default: {
      return state;
    }
  }
};

function RestorentProvider({ children }) {
  const [state, dispatch] = useReducer(handleReducer, {
    cuisineData: cuisineData,
    restaurantsData: restaurantsData,
    selectedCusion: "",
  });
  const applyFilter = () => {
    return state.restaurantsData.filter(
      (restorent) => restorent.cuisine_id === state.selectedCusion
    );
  };
  const filteredRestorent = applyFilter();
  console.log("filteredRestorent", filteredRestorent);
  const handleAddReview = (newReview, id) => {
    const newResort = [...state.restaurantsData];
    newResort.map((resort) => {
      if (resort.id === id) {
        resort.ratings.push(newReview);
      }
    });
    console.log("newResort", newResort);
    dispatch({ type: "ADD_REVIEW", payload: newResort });
  };
  return (
    <RestorentContext.Provider
      value={{ state, dispatch, filteredRestorent, handleAddReview }}
    >
      {children}
    </RestorentContext.Provider>
  );
}

export const useRestorent = () => useContext(RestorentContext);
export default RestorentProvider;
