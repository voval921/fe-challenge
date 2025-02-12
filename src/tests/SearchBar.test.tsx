import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  test('renders SearchBar and allows typing', () => {
    const mockSetSearch = jest.fn();
    render(<SearchBar search="" setSearch={mockSetSearch} />);

    const input = screen.getByPlaceholderText('🔍 Search by name');
    
    fireEvent.change(input, { target: { value: 'India' } });

    expect(mockSetSearch).toHaveBeenCalledWith('India');
  });
});
