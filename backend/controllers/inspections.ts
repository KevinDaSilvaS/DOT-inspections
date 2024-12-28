import { Database } from "@db/mongo";
import { ResponseData } from "../dtos/response.ts";
import { InspectionsSelector } from "../dtos/selectors.ts";
import { InspectionsService } from "../services/inspections.ts";
import { validFilters } from "../validations/filters.ts";
import { validSorts } from "../validations/sorts.ts";
import { validFields } from "../validations/fields.ts";

export class InspectionsController {
  private db: Database;
  private service: InspectionsService;
  private MAX_LIMIT = 100;
  private MIN_PAGE = 1;

  constructor(db: Database) {
    this.db = db;
    this.service = new InspectionsService(this.db);
  }

  public async fetchInspections(
    page: number,
    limit: number,
    sort: string,
    field: string,
    filter: string,
  ): Promise<ResponseData> {
    const selector: InspectionsSelector = {
      page: page < this.MIN_PAGE ? this.MIN_PAGE : page,
      limit: limit > this.MAX_LIMIT ? this.MAX_LIMIT : limit,
      sort: validSorts[sort] || validSorts.desc,
      filter: validFilters[filter],
      field: validFields[field] || validFields.date,
    };

    return await this.service.getInspections(selector);
  }

  public async fetchInspectionDetails(inspectionNumber: string) {
    return await this.service.getInspectionDetails(inspectionNumber);
  }
}
