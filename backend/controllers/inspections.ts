import { ResponseData } from "../dtos/response.ts";
import { InspectionsSelector } from "../dtos/selectors.ts";
import {
  getInspectionDetails,
  getInspections,
} from "../services/inspections.ts";

const validFilters: Record<string, string> = {
  basic: "basic",
};

const validFields: Record<string, string> = {
  date: "date",
  status: "status",
  inspectionNumber: "report_number",
  vehiclePlate: "license_plate",
  basic: "basic",
  weight: "weight",
};

const validSorts: Record<string, string> = {
  asc: "asc",
  desc: "desc",
};

const MAX_LIMIT = 100;
const MIN_PAGE = 1;

export async function fetchInspections(
  page: number,
  limit: number,
  sort: string,
  field: string,
  filter: string,
): Promise<ResponseData> {
  const selector: InspectionsSelector = {
    page: page < MIN_PAGE ? MIN_PAGE : page,
    limit: limit > MAX_LIMIT ? MAX_LIMIT : limit,
    sort: validSorts[sort] || validSorts.desc,
    filter: validFilters[filter],
    field: validFields[field] || validFields.date,
  };

  return await getInspections(selector);
}

export async function fetchInspectionDetails(inspectionNumber: string) {
  return await getInspectionDetails(inspectionNumber);
}
