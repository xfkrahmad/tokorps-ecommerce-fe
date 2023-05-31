import { cookies } from 'next/headers';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState<any | null>(null);
  const cookiesManager = cookies();
  useEffect(() => {
    const fetchUserFromDb = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/current-user`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );
      const res = await data.json();
      if (!res.success) {
        throw new Error(res.message);
      }
      setUser(res);
    };
    fetchUserFromDb().catch(console.error);
  }, []);
  return user;
};
