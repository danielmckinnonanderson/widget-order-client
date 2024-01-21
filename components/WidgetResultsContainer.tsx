import { WidgetInfo } from "@/StateStore";

export default function WidgetResultsContainer(results: WidgetInfo[] | null) {
  return (
    results
      ? 
        <div>
        {
          results.map(value => {
            return (<span>{ value.name }</span>);
          })
        }
        </div>
      : 
        <div>
          <span>No results found.</span>
        </div>
  );
}
