import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryDetails from '../components/CountryDetails';

describe('CountryDetails Component', () => {
  test('renders country details and triggers go back', () => {
    const mockSetSelectedCountry = jest.fn();
    const country = {
      name: 'India',
      continent: { name: 'Asia' },
      emoji: '🇮🇳',
    };

    render(<CountryDetails country={country} setSelectedCountry={mockSetSelectedCountry} />);

    const countryName = screen.getByText('India');
    const continent = screen.getByText('Continent: Asia');
    const emoji = screen.getByText('🇮🇳');

    expect(countryName).toBeInTheDocument();
    expect(continent).toBeInTheDocument();
    expect(emoji).toBeInTheDocument();

    const goBackButton = screen.getByText('Go Back');
    fireEvent.click(goBackButton);

    expect(mockSetSelectedCountry).toHaveBeenCalledWith(null);
  });
});
