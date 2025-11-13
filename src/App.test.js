import { render, screen } from '@testing-library/react';
import App from './App';

test('renders happy birthday text', () => {
  render(<App />);
  const el = screen.getByText(/happy birthday/i);
  expect(el).toBeInTheDocument();
});
