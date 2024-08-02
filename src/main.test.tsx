import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App  ', () => {
  // it('should have heading', () => {
  //   render(<App />);
  //   expect(screen.getByTestId('heading')).toHaveTextContent('Hellworld');
  // });

  it('should have heading', () => {
    render(<App />);
    expect(screen.getByTestId('heading')).toHaveTextContent('Hello world');
  });
});
