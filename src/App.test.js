import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search page', () => {
  render(<App />);
  const header = screen.getByText("Github Search");
  expect(header).toBeInTheDocument();
});


