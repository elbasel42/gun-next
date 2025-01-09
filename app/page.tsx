import { getUserId, setUserId } from './actions/userId';

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
        <button className='border-white/30 border text-white bg-black/80 text-3xl py-4 rounded-3xl'>
          Submit
        </button>
      </form>
    </main>
  );
};

export default HomePage;
