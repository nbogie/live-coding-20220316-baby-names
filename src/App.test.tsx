import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Baby Names" somewhere', () => {
  render(<App />);
  const linkElement = screen.getByText(/Baby Names/i);
  expect(linkElement).toBeInTheDocument();
});
