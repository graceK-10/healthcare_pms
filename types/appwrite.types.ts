import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  height: string;
  weight string;
  address: string;
  province: string;
  occupation: string;
  privacyConsent: boolean;
  ailments: string | undefined;
  authLetterNo: string | undefined;
  expiryDate: Date;
  agentName: string | undefined;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
//   primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}