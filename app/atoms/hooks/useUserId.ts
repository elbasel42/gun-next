import { useAtom } from 'jotai';
import { userIdAtom } from '../userIdAtom';

export const useUserId = () => {
  const [userId, setUserId] = useAtom(userIdAtom);
  return [userId, setUserId] as [string, (value: string) => void];
};
