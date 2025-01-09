/* eslint-disable @typescript-eslint/no-explicit-any */
// import { gun } from './db';
'use server';

import { revalidatePath } from 'next/cache';

// let ev = null;
export const listenerHandler = async (
  value: any,
  key: any,
  _msg: any,
  _ev: any
) => {
  console.log('listenerHandler:', { value, key, _msg, _ev });
  revalidatePath('/');
  //   ev = _ev;
  //...
};
// gun.get('data').get('userId').on(listenerHandler);
// node.get('someValue').put(6); //trigger lisa
