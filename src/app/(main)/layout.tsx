import Navbar from '@/components/ui/Navbar';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Welcome to Rps Store',
  description: 'We are here to provide the best items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <Navbar />
        {children}
      </Providers>
    </>
  );
}
