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
    <table class="border-collapse table-auto w-full text-sm font-sans text-base">
      <thead class="rounded-xl bg-slate-800">
        <tr class="rounded-xl">
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
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
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-center">
            Links
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((inspection) => (
          <tr>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.date}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.status}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.inspectionNumber}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.vehiclePlate}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.basic ?? "-"}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              {inspection.weight ?? "-"}
            </td>
            <td class="text-slate-950 border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-center">
              <a
                class="rounded-md bg-indigo-600 text-xs/6 font-semibold text-gray-100 p-1"
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
