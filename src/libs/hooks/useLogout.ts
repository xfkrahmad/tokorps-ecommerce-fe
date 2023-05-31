import { cookies } from 'next/headers';

export const useLogout = () => {
  const logout = () => {
    const cookiesManager = cookies();
    cookiesManager.delete('access_token');
  };
  return { logout };
};
