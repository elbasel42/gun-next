'use client';

import { useEffect } from 'react';
import { revalidateHomePage } from '../actions/revalidateHomePage';

export const RevalidateHomePage = () => {
  useEffect(() => {
    setInterval(revalidateHomePage, 1000);
  }, []);
};
