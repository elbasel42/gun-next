import GUN from 'gun';

const gunSingleton = () => {
  return GUN({});
};

declare const globalThis: {
  gunGlobal: ReturnType<typeof gunSingleton>;
} & typeof global;

const gun = globalThis.gunGlobal ?? gunSingleton();

export { gun };

if (process.env.NODE_ENV !== 'production') globalThis.gunGlobal = gun;
