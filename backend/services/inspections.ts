import { InspectionsSelector } from "../dtos/selectors.ts";


export async function getInspections(params: InspectionsSelector) {
    await console.log(params)
}

export async function getInspectionDetails(inspectionNumber: string) {
    await console.log(inspectionNumber)
}