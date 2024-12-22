interface InspectionsFilterProps {
  filter: string
  sort: string
  field: string
}

export function InspectionsFilter(props: InspectionsFilterProps) {
  const options = ["", "option1"];
  return (
    <div>
      <form>
        <div class="sm:col-span-3 pb-2">
          <label for="filter" class="block text-sm/6 font-medium text-gray-900">
            BASIC
          </label>
          <div class="mt-2 grid grid-cols-5">
            <select
              name="filter"
              id="filter"
              class="sm:col-span-2 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              {options.map((option) =>
                option == props.filter
                  ? <option selected>{option}</option>
                  : <option>{option}</option>
              )}
            </select>
            <button
              class="sm:col-span-1 rounded-md bg-slate-600 text-sm/6 font-semibold text-gray-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <input name="sort" type="text" hidden value={props.sort} />
        <input name="field" type="text" hidden value={props.field} />
      </form>
    </div>
  );
}
