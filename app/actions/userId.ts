'use server';

import { revalidatePath } from 'next/cache';
import { getValue, setValue } from '../util/db';

export const setUserId = async (formData: FormData) => {
  const userId = formData.get('userId')?.toString();
  if (!userId) return;
  const setUserIdResult = await setValue('userId', userId);
  console.log({ setUserIdResult });
  revalidatePath('/');
};

export const getUserId = async () => {
  const userId = await getValue('userId');
  return userId;
};
