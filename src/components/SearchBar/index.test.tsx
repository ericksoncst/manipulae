import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

const mockRouterPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter: () => ({
      push: mockRouterPush,
    }),
  }));

describe('SearchBar component', () => {
  test('renders search input and label', () => {
    render(<SearchBar handleChange={() => {}} value="" />);
    const searchInput = screen.getByPlaceholderText("Buscar músicas");
    expect(searchInput).toBeInTheDocument();
  });

  test('input change triggers handleChange', () => {
    const handleChange = jest.fn();
    render(<SearchBar handleChange={handleChange} value="" />);
    const searchInput = screen.getByTestId("form-input");
    fireEvent.change(searchInput, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  test('form submission triggers route push', () => {
  
    render(<SearchBar handleChange={() => {}} value="Test" />);
    const searchForm = screen.getByTestId('form');
    fireEvent.submit(searchForm);
    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: '/results',
      query: { term: 'Test' },
    }, '/results');
  });
});