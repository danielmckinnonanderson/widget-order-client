import WidgetSearchForm from "@/components/WidgetSearchForm";
import { WidgetSearchContextProvider } from "@/components/WidgetSearchProvider";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <WidgetSearchContextProvider>
        <main>
          <WidgetSearchForm onSearch={handleWidgetSearch}/>
          {/* <WidgetSearchContextProvider searchTerms={}> */}
          {/* </WidgetSearchContextProvider> */}
        </main>
      </WidgetSearchContextProvider>
    </ChakraProvider>
  );
}
