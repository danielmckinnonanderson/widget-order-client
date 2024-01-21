import { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type WidgetSearchFormValue = {
  searchTerm: string
};

const defaultFormValue: WidgetSearchFormValue = {
  searchTerm: ""
};

export default function WidgetSearchForm() {
  
  const [formValue, setFormValue] = useState<WidgetSearchFormValue>(defaultFormValue);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<WidgetSearchFormValue>({
    defaultValues: defaultFormValue
  });

  const processForm: SubmitHandler<WidgetSearchFormValue> = data => setFormValue(data);

  return (
    <>
      <form onSubmit={handleSubmit(processForm)}>
        <div className="self-center">
          <input
            type="text"
            className="border-solid border-zinc-800"
            placeholder="Search for a widget"
            {...register("searchTerm", {
              required: "Please enter a search term"
            })}
          />
          {errors.searchTerm?.message && (
            <p className="text-sm text-red-400">{errors.searchTerm.message}</p>
          )}
        </div>

        <button type="submit" className="rounded-lg bg-gray-300 py-2">
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

