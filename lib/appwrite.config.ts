import * as sdk from 'node-appwrite';

// Destructuring the env.local keys
export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID, //renaming it to BUCKET_ID
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new sdk.Client()

// client
.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!) // Ensure this is set
.setProject(process.env.PROJECT_ID!) // Ensure this is set
.setKey(process.env.API_KEY!); // Ensure this is set

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
