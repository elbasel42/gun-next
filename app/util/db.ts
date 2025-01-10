'use server';

import { GunMessagePut } from 'gun';
import { gun } from '../db/db';
// import { KeySchema, z } from 'zod';
// const ROOT_DATA_KEY = 'data';
// const appDataKeys = ['userId', 'userName'] as const;
// const keySchema = z.enum(appDataKeys);

type AppData = {
  // [key in (typeof appDataKeys)[number]]: string;
  userId: string;
  userName: string;
};

// type DatabaseData = {

// [ROOT_DATA_KEY]: (typeof keySchema)[];
// ;

// const db = gun.get(ROOT_DATA_KEY);

export const setValue = async (
  key: keyof AppData,
  value: string
): Promise<GunMessagePut> => {
  return new Promise((resolve) => {
    gun
      .get('data')
      .get(key)
      .put(value)
      .once((ack) => {
        resolve(ack);
      });
  });
};

export const getValue = async (key: keyof AppData): Promise<string> => {
  return new Promise((resolve) => {
    gun
      .get('data')
      .get(key)
      .once((data) => {
        resolve(data);
      });
  });
};
