'use client';

import { gun } from '../db/db';

export const listenToUpdate = async () => {
  return new Promise((resolve) => {
    gun
      .get('data')
      .get('userId')
      .on((userId) => {
        resolve(userId);
      });
  });
};
