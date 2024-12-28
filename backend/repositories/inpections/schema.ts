import { ObjectId } from "jsr:@db/mongo";
import { Inspection } from "../../dtos/inspection.ts"

export interface InspectionSchema extends Inspection {
    _id: ObjectId;
}