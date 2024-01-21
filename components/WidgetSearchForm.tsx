import { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type WidgetSearchFormValue = {
  searchTerm: string
};

const defaultFormValue: WidgetSearchFormValue = {
  searchTerm: ""
};

type WidgetSearchFormParams = {
  onSearch: (terms: string) => void
};

export default function 
WidgetSearchForm({ onSearch }: WidgetSearchFormParams) {
  const [formValue, setFormValue] = useState<WidgetSearchFormValue>(defaultFormValue);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<WidgetSearchFormValue>({
    defaultValues: defaultFormValue
  });

  const processForm: SubmitHandler<WidgetSearchFormValue> = data => {
    setFormValue(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(processForm)}>
        <div
        >
          <input
            type="text"
            placeholder="Search for a widget"
            {...register("searchTerm", {
              required: "Please enter a search term"
            })}
          />
          {errors.searchTerm?.message && (
            <p className="text-sm text-red-400">
              {errors.searchTerm.message}
            </p>
          )}
        </div>

        <button
          type="submit"
        >
          Search
        </button>
      </form>

      <br/>

      <pre>
        {JSON.stringify(formValue, null, 4)}
      </pre>
    </>
  );
};

