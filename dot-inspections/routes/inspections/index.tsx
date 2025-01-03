import { Handlers, PageProps } from "$fresh/server.ts";
import { InspectionsFilter } from "../../components/InpectionsFilter.tsx";
import { PageControls } from "../../components/PageControls.tsx";
import { InspectionsTable } from "../../components/Table.tsx";

interface InfractionsResponse {
  date: string;
  status: string;
  report_number: string;
  license_plate: string;
  basic: string | undefined;
  weight: number | undefined;
}

interface ListProps {
  sort: string;
  field: string;
  filter: string;
  page: number;
  limit: number;
  data: InfractionsResponse[];
}

export const handler: Handlers<ListProps> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const sort = url.searchParams.get("sort") || "desc";
    const field = url.searchParams.get("field") || "date";
    const filter = url.searchParams.get("filter") || "";
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    const apiUrl = Deno.env.get("API_URL")
    const res = await fetch(`${apiUrl}/inspections?filter=${filter}&field=${field}&sort=${sort}&page=${page}&limit=${limit}`)
    const data = await res.json();
    return ctx.render({ sort, field, filter, page, limit, data });
  },
};

export default function DotInspections(props: PageProps<ListProps>) {
  const { filter, field, sort, page, limit, data } = props.data;
  return (
    <body class="bg-slate-200">
      <div class="px-4 py-8 mx-auto">
        <h1 class="text-3xl font-sans">Dot Inspections</h1>
        <div class="inline-table rounded-xl p-8 bg-slate-100 w-full shadow-md mt-4">
          <InspectionsFilter
            filter={filter}
            field={field}
            sort={sort}
            page={page}
            limit={limit}
          >
          </InspectionsFilter>
          <InspectionsTable
            sortField={field}
            sortStyle={sort}
            filter={filter}
            page={page}
            limit={limit}
            data={data}
          >
          </InspectionsTable>
          <PageControls
            path={"inspections"}
            filter={filter}
            field={field}
            sort={sort}
            page={page}
            limit={limit}
          >
          </PageControls>
        </div>
      </div>
    </body>
  );
}
