import { render, screen } from '@testing-library/react';
import Greet from '../components/Greet/Greet';

describe.skip('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe('Nested', () => {
    it('renders a name', () => {
      render(<Greet name='Percy' />);
      const textElement = screen.getByText('Hello Percy');
      expect(textElement).toBeInTheDocument();
    });
  });
});
