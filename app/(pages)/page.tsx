//app/page.tsx

import { getUserId, setUserId } from '../actions/userId';

// import { useEffect, useState } from 'react';
// import GUN from 'gun';
// import { DatabaseKeyEnum } from '../types/DatabaseKeyEnum';
// import { gun } from '../db/db';
// import { getUserId } from '../actions/userId';
// import { useUserId } from './atoms/hooks';
// import { DatabaseKeyEnum } from './types/DatabaseKeyEnum';
// import { createServer } from 'http';
// import { gun } from './db/db';
// const gun = GUN(['http://localhost:3001/gun']);

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  const userId = await getUserId();

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-black'>
      <h1>HomePage</h1>
      <form
        action={setUserId}
        className='border bg-white/20 rounded-3xl h-[60vh] w-[70vw] px-4 py-2 flex flex-col gap-8'
      >
        <input
          required
          name='userId'
          type='text'
          defaultValue={userId}
          className='bg-black text-white border border-white/50 text-3xl text-center py-4 rounded-md'
        />
        <button
          type='submit'
          className='border-white border rounded-3xl bg-black/80 text-3xl text-white py-4 px-2'
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default HomePage;
