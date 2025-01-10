//app/atoms/userIdAtom.ts
import { atomWithStorage } from 'jotai/utils';
import { DatabaseKeyEnum } from '../types/DatabaseKeyEnum';

export const userIdAtom = atomWithStorage<string>(
  DatabaseKeyEnum.userId,
  'default-user-id'
);
