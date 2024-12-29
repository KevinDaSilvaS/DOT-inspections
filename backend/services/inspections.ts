import { Collection, Database } from "@db/mongo";
import { ResponseData } from "../dtos/response.ts";
import { InspectionsSelector } from "../dtos/selectors.ts";
import { inspections } from "../repositories/inpections/client.ts";
import { InspectionSchema } from "../repositories/inpections/schema.ts";

export class InspectionsService {
  private db: Database;
  private inspections: Collection<InspectionSchema>;

  constructor(db: Database) {
    this.db = db;
    this.inspections = inspections(this.db);
  }

  public async getInspections(
    params: InspectionsSelector,
  ): Promise<ResponseData> {
    const { page, limit, filter, field, sort } = params
    const sortObj: Record<string, number> = {}
    sortObj[field] = sort;

    const filterObj: Record<string, string> = {}
    if(filter) {
        filterObj["basic"] = filter;
    }
    
    const inspections = await this.inspections.find(filterObj, {
      projection: {
        _id: false,
        report_number: true,
        status: true,
        date: true,
        weight: true,
        basic: true,
        license_plate: true,
      },
    })
    .sort(sortObj)
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();
    return { code: 201, data: inspections };
  }

  public async getInspectionDetails(
    inspectionNumber: string,
  ): Promise<ResponseData> {
    const inspection = await this.inspections.findOne({
      report_number: inspectionNumber,
    });
    if (!inspection) {
      return { code: 404, data: { error: "Inspection not found :(" } };
    }

    return { code: 200, data: inspection };
  }
}
