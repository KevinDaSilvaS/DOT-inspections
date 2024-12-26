export enum Sort {
    asc = "asc",
    desc = "desc"
}

export enum Field {
    date = "date",
    status = "status",
    inspectionNumber = "report_number",
    vehiclePlate = "license_plate",
    basic = "basic",
    weight = "weight"
}

export interface GetInspections {
    filter?: string,
    page: number,
    limit: number,
    sort: Sort,
    field: Field
}

export async function getInspections(params: GetInspections) {
    await console.log(params)
}

export async function getInspectionDetails(inspectionNumber: string) {
    await console.log(inspectionNumber)
}