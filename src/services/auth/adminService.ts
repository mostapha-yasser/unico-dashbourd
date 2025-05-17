import "server-only";
import { connectToDatabase } from '../../lib/mongodb';
import { Admin } from "@/types/adminTypes";

export async function getAdminByEmail(email: string): Promise<Admin | null> {
  try {
    const { db } = await connectToDatabase();
    return await db.collection<Admin>('admin').findOne({ email });
  } catch (error) {
    console.error('Error fetching admin:', error);
    return null;
  }
}

export async function verifyAdminCredentials(
  email: string,
  password: string
): Promise<Admin | null > {

  const admin = await getAdminByEmail(email);

  const isPasswordValid = password=== admin?.password;
  
  if (!admin || !isPasswordValid) {
    return null;
  }
  
  
  return admin;
}

