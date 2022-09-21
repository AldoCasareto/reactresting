import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('greet renders a name', () => {
  render(<Greet name='Percy' />);
  const textElement = screen.getByText('Hello Percy');
  expect(textElement).toBeInTheDocument();
});
