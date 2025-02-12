import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CountryList from '../components/CountryList';
import { GET_COUNTRIES } from '../graphql/queries';

const mocks = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: [
          {
            code: 'IN',
            name: 'India',
            continent: { name: 'Asia' },
            emoji: '🇮🇳',
          },
          {
            code: 'US',
            name: 'United States',
            continent: { name: 'North America' },
            emoji: '🇺🇸',
          },
        ],
      },
    },
  },
];

describe('CountryList Component', () => {
  test('renders countries and filters based on search', async () => {
    const mockSetSelectedCountry = jest.fn();
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryList search="India" continentFilter="" setSelectedCountry={mockSetSelectedCountry} />
      </MockedProvider>
    );

    const indiaCountry = await screen.findByText('India');
    expect(indiaCountry).toBeInTheDocument();

    fireEvent.click(indiaCountry);

    expect(mockSetSelectedCountry).toHaveBeenCalledWith({
      code: 'IN',
      name: 'India',
      continent: { name: 'Asia' },
      emoji: '🇮🇳',
    });
  });
});
