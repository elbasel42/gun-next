//app/page.tsx
'use client';

import { useEffect } from 'react';
import GUN from 'gun';
import { useUserId } from './atoms/hooks';
import { DatabaseKeyEnum } from './types/DatabaseKeyEnum';

// import { getUserId, setUserId } from './actions/userId';

// import { gun } from './db/db';

// export const dynamic = 'force-dynamic';

const gun = GUN();

const HomePage = () => {
  const [userId, setUserId] = useUserId();

  useEffect(() => {
    if (userId === 'default-user-id') return;
    // const gun = GUN();
    gun
      .get('data')
      .get(DatabaseKeyEnum.userId)
      .once((data) => {
        console.log({ data });
        setUserId(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userId === 'default-user-id') return;
    // const gun = GUN({});
    // gun
    //   .get('data')
    //   .get(DatabaseKeyEnum.userId)
    //   .on((value, key, _msg, _ev) => {
    //     console.log({ value, key, _msg, _ev });
    //   })
    //   .once((data) => {
    //     console.log({ data });
    //   });
    gun
      .get('data')
      .get(DatabaseKeyEnum.userId)
      .put(userId)
      .once((gunPutResult) => {
        // setUserId(gunPutResult);
        console.log({ gunPutResult });
      });
  }, [userId]);

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-black'>
      <h1>HomePage</h1>
      <form
        // action={setUserId}
        className='border bg-white/20 rounded-3xl h-[60vh] w-[70vw] px-4 py-2 flex flex-col gap-8'
      >
        <input
          onChange={(event) => setUserId(event.target.value)}
          required
          name='userId'
          type='text'
          defaultValue={userId === 'default-user-id' ? '' : userId}
          className='bg-black text-white border border-white/50 text-3xl text-center py-4 rounded-md'
        />
      </form>
    </main>
  );
};

export default HomePage;
