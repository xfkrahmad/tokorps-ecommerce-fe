import axios, { AxiosInstance } from 'axios';

export class AuthService {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      timeout: 30000,
      timeoutErrorMessage: 'Request timeout',
    });
  }

  login = async (username: string, password: string) => {
    const res = await this.instance.post(`/auth/login`, {
      username,
      password,
    });
    return res.data;
  };

  currentUser = async () => {
    const res = await this.instance.get(`/auth/current-user`);
    return res.data;
  };
}
