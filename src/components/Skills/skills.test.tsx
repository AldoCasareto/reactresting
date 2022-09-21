import { Skills } from './Skills';
import { render, screen, logRoles } from '@testing-library/react';

describe('Skills', () => {
  const skills = ['html', 'css', 'js'];
  it('renders correctly', () => {
    render(<Skills skills={skills} />);

    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
  });

  it('renders list of skills', () => {
    render(<Skills skills={skills} />);

    const liElements = screen.getAllByRole('listitem');
    expect(liElements).toHaveLength(skills.length);
  });

  it('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  it('render login not rendered', () => {
    render(<Skills skills={skills} />);
    const learnButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(learnButton).not.toBeInTheDocument();
  });

  it('start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
