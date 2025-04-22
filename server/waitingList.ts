'use server';
import { eq } from 'drizzle-orm';
import { db } from '@/db/drizzle';
import { waitingList } from '@/db/schema';

export const addEmail = async (
  email: string,
): Promise<{ status: boolean; message: string }> => {
  const emailExists = await db
    .select()
    .from(waitingList)
    .where(eq(waitingList.email, email));
  if (emailExists.length > 0) {
    return {
      status: false,
      message: 'Email already exists',
    };
  }
  try {
    await db.insert(waitingList).values({
      email,
    });
    return {
      status: true,
      message: 'Email added to waiting list',
    };
  } catch (error) {
    return {
      status: false,
      message: 'Error adding email',
    };
  }
};
