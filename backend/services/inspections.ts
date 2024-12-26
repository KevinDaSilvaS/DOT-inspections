export interface GetInspections {
    filter?: string,
    page: number,
    limit: number,
    sort: "asc" | "desc",
    field: "date" | "status" | "inspectionNumber" | "vehiclePlate" | "basic" | "weight"
}

export async function getInspections(params: GetInspections) {
    await console.log(params)
}

export async function getInspectionDetails(inspectionNumber: string) {
    await console.log(inspectionNumber)
}