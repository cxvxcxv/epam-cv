import { Sidebar } from '@/components/Sidebar';
import { Outlet } from 'react-router';

export const InnerLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-8">
        <Outlet />
      </main>
    </div>
  );
};
