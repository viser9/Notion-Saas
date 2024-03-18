import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../../';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log()
}
