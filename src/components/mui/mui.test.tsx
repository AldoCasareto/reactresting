import { screen, render } from '../../test-utils';
import MuiMode from './Mui-mode';

describe('Mui', () => {
  it('renders text correctly', () => {
    render(<MuiMode />, {});
    const darkMode = screen.getByRole('heading', { level: 1 });

    expect(darkMode).toHaveTextContent('dark mode');
  });
});
