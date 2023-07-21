import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('App component', () => {
  it('renders the ThemeModeSwitcher', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    // Ensure that the ThemeModeSwitcher component is rendered
    const themeModeSwitcher = screen.getByTestId('theme-mode-switcher');
    expect(themeModeSwitcher).toBeInTheDocument();
  });

  it('renders the Home component for the root path', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Ensure that the Home component is rendered for the root path
    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
  });

  it('renders the PostDetails component for the /post/:id path', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/post/1']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Ensure that the PostDetails component is rendered for the /post/:id path
    const postDetailsElement = screen.getByText('Posts');
    expect(postDetailsElement).toBeInTheDocument();
  });
});
