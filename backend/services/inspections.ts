import { ResponseData } from "../dtos/response.ts";
import { InspectionsSelector } from "../dtos/selectors.ts";


export async function getInspections(params: InspectionsSelector): Promise<ResponseData> {
    await console.log(params)
    return { code: 201, data: { hi: "Hello world from getInspections" } }
}

export async function getInspectionDetails(inspectionNumber: string): Promise<ResponseData> {
    await console.log(inspectionNumber)
    return { code: 200, data: { hi: "Hello world from getInspectionDetails" } }
}