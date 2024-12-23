import { Handlers, PageProps } from "$fresh/server.ts";
import { InspectionsFilter } from "../../components/InpectionsFilter.tsx";
import { InspectionsTable } from "../../components/Table.tsx";

interface ListProps {
  sort: string;
  field: string;
  filter: string;
  // deno-lint-ignore no-explicit-any
  data: any[];
}

export const handler: Handlers<ListProps> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const sort = url.searchParams.get("sort") || "desc";
    const field = url.searchParams.get("field") || "date";
    const filter = url.searchParams.get("filter") || "";
    console.log(filter);
    return ctx.render({ sort, field, filter, data: [] });
  },
};

export default function DotInspections(props: PageProps<ListProps>) {
  const data = [{
    date: "date",
    status: "status",
    inspectionNumber: "inspectionNumber",
    vehiclePlate: "vehiclePlate",
    basic: undefined,
    weight: undefined,
  }, {
    date: "adate",
    status: "astatus",
    inspectionNumber: "ainspectionNumber",
    vehiclePlate: "avehiclePlate",
    basic: undefined,
    weight: undefined,
  }];

  return (
    <body class="bg-slate-200">
      <div class="px-4 py-8 mx-auto">
        <h1 class="text-3xl font-sans">Dot Inspections</h1>
        <div class="inline-table rounded-xl p-8 bg-slate-300 w-full">
          <InspectionsFilter
            filter={props.data.filter}
            field={props.data.field}
            sort={props.data.sort}
          >
          </InspectionsFilter>
          <InspectionsTable
            sortField={props.data.field}
            sortStyle={props.data.sort}
            data={data}
          >
          </InspectionsTable>
        </div>
      </div>
    </body>
  );
}
