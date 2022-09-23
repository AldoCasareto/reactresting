import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('initialCount of zero is rendered', () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });
  it('should accept and render initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
  it('increments counter', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  it('decrements counter', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
