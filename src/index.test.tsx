import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App test', () => {
  it('should have heading', () => {
    render(<App />);
    expect(screen.getByTestId('heading')).toHaveTextContent('Hello world');
  });

  it('should have heading', () => {
    render(<App />);
    expect(screen.getByTestId('heading')).toHaveTextContent('Hello world');
  });
});
