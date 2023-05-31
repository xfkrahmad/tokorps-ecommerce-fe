import { AuthRequiredException } from '@/libs/exceptions/auth-required.exception';

interface DashboardProps {}
const fetchData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
};

const DashboardPage = async ({}: DashboardProps) => {
  const data = await fetchData();
  return <div>{JSON.stringify(data)}</div>;
};

export default DashboardPage;
