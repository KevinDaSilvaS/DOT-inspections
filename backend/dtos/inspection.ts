import { Vehicle } from "./vehicle.ts";
import { Violation } from "./violation.ts";

export interface Inspection {
  report_number: string;
  date: string;
  report_state: string;
  level: string;
  weight: string;
  start?: string;
  end?: string;
  usdot: string;
  facility?: string;
  postCrash?: boolean;
  hazmat: string;
  basic?: string;
  license_plate: string;
  vehicles: Vehicle[];
  violations: Violation[]
}
