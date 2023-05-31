'use client';

interface DashboardProps {
  error: Error;
  reset: () => void;
}

const DashboardPage = ({ error, reset }: DashboardProps) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default DashboardPage;
