import ComponentsPage from '@/components/LoginPage';
import { cookies } from 'next/headers';

export default async function LoginPage() {
  const kuki = cookies();
  const token = kuki.get('access_token');
  console.log(token);
  return (
    <main className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <ComponentsPage />
    </main>
  );
}
