import { z } from 'zod';

export const validateNumber = async (userId: string) => {
  const validUserId = z.preprocess((x) => Number(x), z.number()).parse(userId);
  return validUserId;
};
