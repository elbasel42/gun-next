//app/page.tsx

// import { revalidatePath } from 'next/cache';
import { setUserId } from '../actions/userId';
import { RealtimeValue } from '../components/RealtimeValue';
// import { gun } from '../db/db';

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
  // const getUserId = async () => {
  //   return new Promise((resolve) => {
  //     gun
  //       .get('data')
  //       .get('userId')
  //       .once((userId) => {
  //         resolve(userId);
  //       });
  //   });
  // };
  // const userId: string = (await getUserId()) as string;
  // const userId = await getUserId();
  // console.log({ userId });c
  // const res = gun
  // .get('data')
  // .get('userId')
  // .once((userId) => {
  // console.log({ userId });
  // });

  // const userId = await getUserId();
  // const response = await fetch('https://gun-server-zeta.vercel.app/api/server');
  // const reader = response.body?.getReader();
  // const stream = new ReadableStream({
  //   start(controller) {
  //     function push() {
  //       reader?.read().then(({ done, value }) => {
  //         if (done) {
  //           controller.close();
  //           return;
  //         }
  //         controller.enqueue(value);
  //         push();
  //       });
  //     }
  //     push();
  //   },
  // });

  // const data = await new Response(stream, {
  //   headers: { 'Content-Type': 'application/json' },
  // }).text();
  // const lines = data.split('\n').filter((line) => line.trim() !== ''); // Split by lines and remove empty lines
  // const jsonObjects = lines.map((line) => {
  //   const jsonString = line.replace(/^data: /, ''); // Remove 'data: ' prefix
  //   return JSON.parse(jsonString); // Parse the remaining JSON string
  // });

  // console.log(jsonObjects);

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-black'>
      <h1>HomePage</h1>
      <RealtimeValue />
      <form
        action={setUserId}
        className='border bg-white/20 rounded-3xl h-[60vh] w-[70vw] px-4 py-2 flex flex-col gap-8'
      >
        <input
          required
          name='userId'
          type='text'
          // defaultValue={userId}
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
