import { Button } from '@/components/Button';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background relative h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <div className="bg-primary/20 absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />

        <div className="bg-primary/10 absolute -right-20 -bottom-20 h-80 w-80 rounded-full blur-3xl" />

        <div
          className="text-card absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-3 px-4">
        <img
          src="https://avatars.githubusercontent.com/u/98476080?v=4"
          alt="Avatar"
          className="h-48 w-48 rounded-full transition-transform duration-700 hover:scale-105"
        />
        <h1 className="text-3xl font-bold tracking-tight">Alisher Askar</h1>
        <h2 className="text-xl font-medium">Front-end developer</h2>

        <p className="text-dimmed max-w-xl text-center leading-relaxed">
          Developer focused on building clean, functional, and responsive user
          interfaces. I enjoy turning complex ideas into simple, usable
          interfaces and continuously sharpening my skills by building
          real-world projects.
        </p>

        <Button onClick={() => navigate('/inner')} className="mt-2">
          Know more
        </Button>
      </div>
    </div>
  );
};
