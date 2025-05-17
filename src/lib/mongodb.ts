import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DASHBOARD_MONGODB_DB as string;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Please define the DASHBOARD_MONGODB_DB environment variable');
}

let cachedClient: MongoClient | null = null;
let cachedDashboardDb: Db | null = null;
export async function connectToDatabase() {
  if (!cachedClient) {
    cachedClient = await MongoClient.connect(uri);
  }

    if (!cachedDashboardDb) {
      cachedDashboardDb = cachedClient.db(dbName);
    }
    return { client: cachedClient, db: cachedDashboardDb };

  }