import { render, screen } from '@testing-library/react';
import Counter2 from './Counter2';
import user from '@testing-library/user-event';

describe('test2', () => {
  it('renders correctly', () => {
    render(<Counter2 count={0} />);

    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toBeInTheDocument();
  });
  it('handlers are called', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Counter2
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole('button', { name: 'INCREMENT' });
    const decrementButton = screen.getByRole('button', { name: 'DECREMENT' });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
