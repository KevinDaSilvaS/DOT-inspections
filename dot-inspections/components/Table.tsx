import { SortButton } from "./SortButton.tsx";

type InspectionData = {
  date: string;
  status: string;
  inspectionNumber: string;
  vehiclePlate: string;
  basic: string | undefined;
  weight: number | undefined;
};

interface InspectionsTableProps {
  data: InspectionData[];
  sortStyle: string;
  sortField: string;
}

export function InspectionsTable(props: InspectionsTableProps) {
  return (
    <table class="border-collapse table-auto w-full text-sm font-sans text-base ">
      <thead class="rounded-xl bg-slate-500 text-slate-300">
        <tr class="rounded-xl">
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="date"
              >
              </SortButton>
            </div>
            <p>Date</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="status"
              >
              </SortButton>
            </div>
            <p>Status</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="inspectionNumber"
              >
              </SortButton>
            </div>
            <p>Inspection Number</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="vehiclePlate"
              >
              </SortButton>
            </div>
            <p>Vehicle Plate</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="basic"
              >
              </SortButton>
            </div>
            <p>BASIC</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            <div class="float-left">
              <SortButton
                sortField={props.sortField}
                sortStyle={props.sortStyle}
                path={"inspections"}
                fieldName="weight"
              >
              </SortButton>
            </div>
            <p>Weight</p>
          </th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8">
            Links
          </th>
        </tr>
      </thead>
      <tbody class="bg-slate-200">
        {props.data.map((inspection) => (
          <tr>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.date}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.status}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.inspectionNumber}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.vehiclePlate}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.basic ?? "-"}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              {inspection.weight ?? "-"}
            </td>
            <td class="bg-slate-300 text-slate-900 p-5 text-center border-t-2 border-slate-500 p-4 pl-8 text-center">
              <a
                class="rounded-md bg-orange-600 text-xs/6 font-semibold text-gray-100 p-2 shadow-md"
                href={"/inspections/" + inspection.inspectionNumber}
              >
                details
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
