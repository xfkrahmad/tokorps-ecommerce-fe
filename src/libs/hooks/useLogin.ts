import { AuthService } from '../services/auth.service';

export const useLogin = () => {
  const authService = new AuthService();
  const login = async (username: string, password: string) => {
    const user = await authService.login(username, password);
    if (user) {
      return user;
    }
    return null;
  };
  return { login };
};
