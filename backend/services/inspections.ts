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

    public async getInspections(params: InspectionsSelector): Promise<ResponseData> {
        await console.log(params)
        return { code: 201, data: { hi: "Hello world from getInspections" } }
    }
    
    public async getInspectionDetails(inspectionNumber: string): Promise<ResponseData> {
        await console.log(inspectionNumber)
        return { code: 200, data: { hi: "Hello world from getInspectionDetails" } }
    }
}

