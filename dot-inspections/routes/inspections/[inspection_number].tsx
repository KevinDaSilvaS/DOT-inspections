// deno-lint-ignore-file no-explicit-any
import { Handlers } from "$fresh/server.ts";
import { GenericList } from "../../components/GenericList.tsx";
import { GenericTable } from "../../components/GenericTable.tsx";
import { SimpleCard } from "../../components/SimpleCard.tsx";

interface DetailsProps {
  inspectionNumber: string;
  data: any;
}

export const handler: Handlers<DetailsProps> = {
  async GET(_req, ctx) {
    const inspectionNumber = ctx.params.inspection_number;

    const apiUrl = Deno.env.get("API_URL");
    const res = await fetch(`${apiUrl}/inspections/${inspectionNumber}`)
    if(res.status != 200) {
      return ctx.renderNotFound();
    }
    const data = await res.json();
    console.log(inspectionNumber, data);
    console.log("PARAMS", inspectionNumber);
    return ctx.render({ data, inspectionNumber });
  },
};

export default function Details(props: DetailsProps) {
  const {
    status,
    report_number,
    usdot,
    report_state,
    date,
    level,
    facility,
    start,
    end,
    post_crash,
    hazmat,
    vehicles,
    violations,
  } = props.data;
  const vehiclesContent: any[] = vehicles?.map((
    { unit, type, vin, make, plate_state, license_plate }: Record<string, any>,
  ): any[] => [unit, type, make, plate_state, license_plate, vin]) || [];

  const violationsContent: any[] = violations?.map((
    { code, section, unit, oos, description, inSMS, basic }: Record<string, any>,
  ): any[] => [code, section, unit, oos, description, inSMS, basic]) || [];

  const truck = vehicles?.length > 0 ? vehicles[0] : {}
  const trailer = vehicles?.length > 1 ? vehicles[1] : {}
  return (
    <body class="bg-slate-200">
      <div class="pl-8 pt-5">
        <h1 class="text-3xl font-sans">{props.inspectionNumber}</h1>
      </div>

      <div id="page" class="grid grid-cols-4">
        <div
          id="first-block"
          class="p-2 m-4 w-96 col-span-3 w-full bg-slate-100 rounded-md shadow-md"
        >
          <div id="inspection-overview" class="p-8">
            <h2 class="text-xl font-sans">Vehicle Overview</h2>
            <div id="inspection-infos">
              <div class="grid grid-cols-2">
                <div class="col-span-1 p-1">
                  <label htmlFor="status">
                    <span class="block text-sm font-medium text-slate-700">
                      Status
                    </span>
                    <p
                      id="status"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {status || "-"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="report-number">
                    <span class="block text-sm font-medium text-slate-700">
                      Report Number
                    </span>
                    <p
                      id="report-number"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {report_number || "-"}
                    </p>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <div class="col-span-1 p-1">
                  <label htmlFor="usdot">
                    <span class="block text-sm font-medium text-slate-700">
                      USDOT #
                    </span>
                    <p
                      id="usdot"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {usdot || "-"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="report-state">
                    <span class="block text-sm font-medium text-slate-700">
                      Report State
                    </span>
                    <p
                      id="report-state"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {report_state || "-"}
                    </p>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-4">
                <div class="col-span-2 p-2">
                  <label htmlFor="date">
                    <span class="block text-sm font-medium text-slate-700">
                      Date
                    </span>
                    <p
                      id="date"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {date || "-"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="start">
                    <span class="block text-sm font-medium text-slate-700">
                      Start Time
                    </span>
                    <p
                      id="start"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {start || "-"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="end">
                    <span class="block text-sm font-medium text-slate-700">
                      End Time
                    </span>
                    <p
                      id="end"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {end || "-"}
                    </p>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <div class="col-span-1 p-1">
                  <label htmlFor="level">
                    <span class="block text-sm font-medium text-slate-700">
                      Level
                    </span>
                    <p
                      id="level"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {level || "-"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="facility">
                    <span class="block text-sm font-medium text-slate-700">
                      Facility
                    </span>
                    <p
                      id="facility"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {facility || "-"}
                    </p>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <div class="col-span-1 p-1">
                  <label htmlFor="post-crash">
                    <span class="block text-sm font-medium text-slate-700">
                      Post Crash Inspection
                    </span>
                    <p
                      id="post-crash"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {post_crash || "No"}
                    </p>
                  </label>
                </div>
                <div class="col-span-1 p-1">
                  <label htmlFor="hazmat">
                    <span class="block text-sm font-medium text-slate-700">
                      Hazmat Placard Required
                    </span>
                    <p
                      id="hazmat"
                      class="p-3 text-lg text-slate-800 bg-slate-300 rounded-md"
                    >
                      {hazmat || "No"}
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id="vehicle-information" class="p-5">
            <h2 class="text-xl font-sans">Vehicle Information</h2>
            <div id="vehicle-infos-table">
              <GenericTable
                fields={[
                  "Unit",
                  "Type",
                  "Make",
                  "Plate State",
                  "Plate Number",
                  "VIN",
                ]}
                values={vehiclesContent}
              >
              </GenericTable>
            </div>
          </div>
          <div id="vehicle-violations" class="p-5">
            <h2 class="text-xl font-sans">Violations</h2>
            <div id="vehicle-violations-table">
              <GenericTable
                fields={[
                  "Code",
                  "Section",
                  "Unit",
                  "OOS",
                  "Description",
                  "IN SMS",
                  "BASIC",
                ]}
                values={violationsContent}
              >
              </GenericTable>
            </div>
          </div>
        </div>
        <div id="second-block" class="p-2 m-4 col-span-1">
          <div id="response-file-card" class="p-8">
            <SimpleCard title="Response file" content="🔵 Uploaded at">
            </SimpleCard>
          </div>
          <div id="truck-info" class="p-8">
            <GenericList
              values={[
                `🚚 Truck #${truck.vin || " - "}`,
                `🚗 ${truck.type || " - "}`,
                `🚗 ${truck.plate_state || " - "}`,
                `🚚 ${truck.make || " - "}`,
                `🚚 ${truck.license_plate || " - "}`,
                `🚚 Assigned to`,
              ]}
            >
            </GenericList>
          </div>
          <div id="trailer-info" class="p-8">
            <GenericList values={[
                `🚚 Trailer #${trailer.vin || " - "}`,
                `🚗 ${trailer.type || " - "}`,
                `🚗 ${trailer.plate_state || " - "}`,
                `🚚 ${trailer.make || " - "}`,
                `🚚 ${trailer.license_plate || " - "}`,
                `🚚 Assigned to`,
              ]}></GenericList>
          </div>
          <div id="linked-inspection-card" class="p-8">
            <SimpleCard title="Linked Inspection" content="🔵 Pulled at">
            </SimpleCard>
          </div>
        </div>
      </div>
    </body>
  );
}
