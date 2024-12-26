import { Sort, Field, GetInspections, getInspections, getInspectionDetails } from '../services/inspections.ts'

export async function fetchInspections(_url: string) {
    return await getInspections({
        sort: Sort.desc,
        field: Field.date,
        page: 1,
        limit: 10
    } as GetInspections)
}

export async function fetchInspectionDetails(inspectionNumber: string) {
    return await getInspectionDetails(inspectionNumber)
}