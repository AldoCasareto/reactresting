import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe.skip('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe('Nested', () => {
    test('renders a name', () => {
      render(<Greet name='Percy' />);
      const textElement = screen.getByText('Hello Percy');
      expect(textElement).toBeInTheDocument();
    });
  });
});

// "jest": {
//   "coverageThreshold": {
//     "global": {
//       "branches": 80,
//       "functions": 80,
//       "lines": 80,
//       "statements": -10
//     }
//   }
// }
