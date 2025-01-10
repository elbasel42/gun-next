'use server';

// import { revalidatePath } from 'next/cache';
import { getValue, setValue } from '../util/db';
// import { validateNumber } from '../validation/validateNubmer';

export const setUserId = async (formData: FormData) => {
  const userId = formData.get('userId')?.toString();
  if (!userId) return;
  // const isNumber = await validateNumber(userId);
  // if (isNumber === null) return console.error('Invalid userId');
  const setUserIdResult = await setValue('userId', userId);
  console.log({ setUserIdResult });
  // revalidatePath('/');
};

export const getUserId = async () => {
  const userId = await getValue('userId');
  return userId;
};
