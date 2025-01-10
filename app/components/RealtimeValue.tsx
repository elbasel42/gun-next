'use client';

import { useEffect, useState } from 'react';
// import { getValue } from '../util/db';
// import { gun } from '../db/db';
// import { setValue } from '../util/db';
import { getUserId } from '../actions/userId';

export const RealtimeValue = () => {
  const [value, setRealTimeValue] = useState('');

  const initValue = async () => {
    const userId = await getUserId();
    setRealTimeValue(userId);
    // const reealTimeValue = await listenToUpdate();
    // console.log({ reealTimeValue });
  };
  useEffect(() => {
    setInterval(() => {
      initValue();
    }, 500);
  }, []);

  return (
    <div className='bg-black text-white'>
      <h1>Value: {value ?? 'no value'}</h1>
      {/* <h1>Key {key}</h1> */}
    </div>
  );
};
