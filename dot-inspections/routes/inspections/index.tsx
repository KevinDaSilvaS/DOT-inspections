import { Handlers, PageProps } from "$fresh/server.ts";
import { InspectionsTable } from "../../components/Table.tsx";

interface ListProps {
  sort: string
  field: string
}

export const handler: Handlers<ListProps> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const sort = url.searchParams.get("sort") || "asc";
    const field = url.searchParams.get("field") || "date";
    const filter = url.searchParams.get("filter") || "";
    console.log(filter)
    return ctx.render({ sort, field });
  },
};

export default function DotInspections(props: PageProps<ListProps>) {
  const data = [{
    date: "date",
    status: "status",
    inspectionNumber: "inspectionNumber",
    vehiclePlate: "vehiclePlate",
    basic: undefined,
    weight: undefined
  }, 
  {
    date: "adate",
    status: "astatus",
    inspectionNumber: "ainspectionNumber",
    vehiclePlate: "avehiclePlate",
    basic: undefined,
    weight: undefined
  }]

  return (
    <body class="bg-slate-200">
      <div class="px-4 py-8 mx-auto">
      <h1 class="text-3xl font-sans">Dot Inspections</h1>
      <div class="rounded-xl p-8 bg-slate-300">
        <form>
          <div class="sm:col-span-3 pb-2">
            <label for="filter" class="block text-sm/6 font-medium text-gray-900">BASIC</label>
            <div class="mt-2 grid grid-cols-5">
              <select name="filter" id="filter" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option selected></option>
                <option>option1</option>
              </select>
              <div></div>
              <button class="sm:col-span-1 rounded-md bg-slate-600 text-sm/6 font-semibold text-gray-100" type="submit">Search</button>
            </div>

          </div>
          <input name="sort" type="text" hidden value={props.data.sort} />
          <input name="field" type="text" hidden value={props.data.field} />
        </form>

        <InspectionsTable sortField={props.data.field} sortStyle={props.data.sort} data={data}></InspectionsTable>
      </div>
    </div>
    </body>
    
  );
}
