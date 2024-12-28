import { Database, MongoClient } from "jsr:@db/mongo";

export async function connect(): Promise<Database> {
    const client = new MongoClient();
    await client.connect("mongodb://user:123@127.0.0.1:27017/");
    return client.database("inspections");
}