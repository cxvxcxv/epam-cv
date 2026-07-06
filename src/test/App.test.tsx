import { render, screen } from '@testing-library/react';
import { App } from '../App';

vi.mock('@/pages/Home', () => ({
  Home: () => <div data-testid="home-page">Home</div>,
}));

vi.mock('@/pages/Inner', () => ({
  Inner: () => <div data-testid="inner-page">Inner</div>,
}));

vi.mock('@/layouts/InnerLayout', () => ({
  InnerLayout: () => (
    <div data-testid="inner-layout">
      <aside>sidebar</aside>
      <main>
        <div data-testid="inner-page">Inner</div>
      </main>
    </div>
  ),
}));

describe('app router shell component', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  test('renders the home page route layout component at the root', () => {
    render(<App />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.queryByTestId('inner-layout')).not.toBeInTheDocument();
  });

  test('renders the inner page view along its parent InnerLayout container wrapper at the root', () => {
    window.history.replaceState({}, '', '/inner');
    render(<App />);

    expect(screen.getByTestId('inner-layout')).toBeInTheDocument();
    expect(screen.getByTestId('inner-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
  });

  test('fallbacks to the home component', () => {
    window.history.replaceState({}, '', '/broken');
    render(<App />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.queryByTestId('inner-layout')).not.toBeInTheDocument();
  });
});
