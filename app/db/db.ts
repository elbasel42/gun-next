import GUN from 'gun';
// import { listenerHandler } from './listener';

const gunSingleton = () => {
  return GUN({
    // web: 'https://gun-server-zeta.vercel.app/gun',
    radisk: false,
    localStorage: true,
    // peers: ['https://gun-server-zeta.vercel.app/api/server/gun'],
    peers: ['https://gun-server-zeta.vercel.app:3005'],
  });
};

declare const globalThis: {
  gunGlobal: ReturnType<typeof gunSingleton>;
} & typeof global;

const gun = globalThis.gunGlobal ?? gunSingleton();
// gun
//   .get('data')
//   .get('userId')
//   .on((value, key, _msg, _ev) => {
//     listenerHandler(value, key, _msg, _ev);
//   });

export { gun };

if (process.env.NODE_ENV !== 'production') globalThis.gunGlobal = gun;
