'use client';

import { Provider } from 'jotai';

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return <Provider>{children}</Provider>;
};
