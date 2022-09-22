import { screen, render } from '@testing-library/react';
import Counter from './Counter';

import user from '@testing-library/user-event';

describe('Counter', () => {
  it('renders correctly', () => {
    render(<Counter />);

    const count = screen.getByRole('heading', { level: 1 });
    expect(count).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'increment' });
    expect(button).toBeInTheDocument();
  });
  it('renders an initial value of 0', () => {
    render(<Counter />);

    const count = screen.getByRole('heading');
    expect(count).toHaveTextContent('0');
  });

  it('renders a count of 1 after one click ', async () => {
    user.setup();
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'increment' });

    await user.click(button);

    const countValue = screen.getByRole('heading');
    expect(countValue).toHaveTextContent('1');
  });
  it('renders a count of 1 after one click ', async () => {
    user.setup();
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'increment' });

    await user.click(button);
    await user.click(button);

    const countValue = screen.getByRole('heading');
    expect(countValue).toHaveTextContent('2');
  });

  it('renders an input field', () => {
    render(<Counter />);

    const inputField = screen.getByRole('spinbutton', { name: 'Value' });

    expect(inputField).toBeInTheDocument();
  });

  //   it('renders an initial 0 value', () => {
  //     render(<Counter />);

  //     const inputField = screen.getByRole('spinbutton');
  //     expect(inputField).toHaveValue(0);
  //   });

  it('renders a 10 after clicking setButton', async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', { name: 'Set' });

    await user.click(setButton);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });

  it('elements are focused in the right order', async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    const amountButton = screen.getByRole('button', { name: 'increment' });
    const setButton = screen.getByRole('button', { name: 'Set' });

    await user.tab();
    expect(amountButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
