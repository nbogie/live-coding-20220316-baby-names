import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Baby Names" somewhere', () => {
  render(<App />);
  const babyNamesHeadingElement = screen.getByText(/Baby Names/i);
  expect(babyNamesHeadingElement).toBeInTheDocument();
});
