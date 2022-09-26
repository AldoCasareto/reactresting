import { screen, render } from '@testing-library/react';
import { server } from '../../mocks/server';
import Users from './Users';
import { rest } from 'msw';

describe('Users', () => {
  it('renders correctly', () => {
    render(<Users />);

    const headingElement = screen.getByRole('heading', { level: 1 });

    expect(headingElement).toBeInTheDocument();

    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  it('renders users', async () => {
    render(<Users />);

    const userList = await screen.findAllByRole('listitem');

    expect(userList).toHaveLength(3);
  });

  //   it('renders errors', async () => {
  //     server.use(
  //       rest.get(
  //         'https://jsonplaceholder.typicode.com/users',
  //         (req, res, ctx) => {
  //           return res(ctx.status(500));
  //         }
  //       )
  //     );
  //     render(<Users />);
  //     const error = await screen.findByText('problem fetching data');

  //     expect(error).toBeInTheDocument();
  //   });
});
