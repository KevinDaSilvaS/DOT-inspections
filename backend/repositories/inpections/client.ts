import { Collection, Database } from "jsr:@db/mongo";
import { InspectionSchema } from "./schema.ts"

export function inspections(db: Database): Collection<InspectionSchema> {
    return db.collection<InspectionSchema>("inspections");
}