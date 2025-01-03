import { parse } from "@libs/xml";
import { Inspection } from "./dtos/inspection.ts";
import { Vehicle } from "./dtos/vehicle.ts";
import { Violation } from "./dtos/violation.ts";
import { connect } from "./repositories/start_db.ts";
import { inspections } from "./repositories/inpections/client.ts";

(async function () {
  const contents = await Deno.readTextFile(
    "./xml/USDOT_80806_All_BASICs_Public_11-29-2024.xml",
  );
  const usdot = "USDOT_80806";
  const inspectionsData: Record<string, Inspection> = {};
  const inspectionsInput = parse(contents).carrierData.inspections.inspection;

  for (
    let i = 0;
    i < inspectionsInput.length;
    i++
  ) {
    const dt = inspectionsInput[i];
    dt.vehicles = dt.vehicles.vehicle.length > 0
      ? dt.vehicles.vehicle
      : [dt.vehicles.vehicle];
    dt.violations = dt.violations.violation.length > 0
      ? dt.violations.violation
      : [dt.violations.violation];
    const basic = dt.violations[0] ? dt.violations[0]["@BASIC"] : undefined;
    const license_plate = dt.vehicles[0]
      ? dt.vehicles[0]["@license_number"]
      : undefined;

    inspectionsData[dt["@report_number"]] = {
      report_number: dt["@report_number"],
      date: dt["@inspection_date"],
      report_state: dt["@report_state"],
      level: dt["@level"],
      weight: dt["@time_weight"],
      start: undefined,
      end: undefined,
      status: undefined,
      usdot,
      facility: undefined,
      post_crash: false,
      hazmat: dt["@HM_inspection"],
      basic,
      license_plate,
      vehicles: dt.vehicles.map((vehicle: any): Vehicle => ({
        unit: vehicle["@unit"],
        type: vehicle["@unit_type"],
        make: vehicle["@make"],
        plate_state: vehicle["@license_state"],
        license_plate: vehicle["@license_number"],
        vin: vehicle["@vehicle_id_number"],
      })),
      violations: dt.violations.filter((violation: any): Violation =>
        violation["@BASIC"]
      )
        .map((violation: any): Violation => ({
          code: violation["@code"],
          description: violation["@description"],
          oos: violation["@oos"],
          unit: violation["@unit"],
          basic: violation["@BASIC"],
          section: violation["@section"],
          inSMS: "YES",
        })),
    };
  }

  const db = await connect();
  const inspectionsClient = inspections(db);
  const res = await inspectionsClient.insertMany(
    Object.values(inspectionsData),
  );
  console.log(res);
})();
