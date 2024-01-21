import { WidgetInfo } from "@/StateStore";
import { SetStateAction } from "jotai";
import { Dispatch, createContext, useContext, useEffect, useState } from "react";

type SearchContext = {
  searchResults: WidgetInfo[] | null;
  setSearchResults: Dispatch<SetStateAction<WidgetInfo[] | null>> | undefined;
};

const defaultCtx = {
  searchResults: null,
  setSearchResults: undefined
};

export const WidgetSearchContext = createContext<SearchContext>(defaultCtx);

export const useWidgetSearchResults = () => {
  return useContext(WidgetSearchContext);
}


type SearchContextParams = {
  searchTerms: string,
  children?: any
};

export const WidgetSearchContextProvider= ({ searchTerms, children }: SearchContextParams) => {
  // State of the current widget search, or null if no search has happened
  const [searchResults, setSearchResults] = useState<WidgetInfo[] | null>(null);

  // When WidgetSearchContextProvider renders, fire a search for the given terms
  useEffect(() => {
    // Define the async operation that we'll call if the terms are valid
    const search = async () => {
      try {
        // TODO - Fake API
        const response = await fetch("value");
        const data = await response.json();
        // Update results with response data
        setSearchResults(data);
      } catch (error: any) {
        console.error(`Couldn't search for terms ${searchTerms}`, error);
      }
    };

    // Check validity
    if (!searchTerms || searchTerms != "") {
      // No terms means no results 
      setSearchResults(null);
    } else {
      search();
    }
  }, [searchTerms]);

  return (
    <WidgetSearchContext.Provider value={{ searchResults, setSearchResults }}>
      { children }
    </WidgetSearchContext.Provider>
  );
};

