import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ContinentFilter from '../components/ContinentFilter';
import { GET_CONTINENTS } from '../graphql/queries';

const mocks = [
  {
    request: {
      query: GET_CONTINENTS,
    },
    result: {
      data: {
        continents: [
          { name: 'Asia' },
          { name: 'Europe' },
        ],
      },
    },
  },
];

describe('ContinentFilter Component', () => {
  test('renders continent options and selects one', async () => {
    const mockSetContinentFilter = jest.fn();

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ContinentFilter setContinentFilter={mockSetContinentFilter} />
      </MockedProvider>
    );

    await waitFor(() => screen.getByText('Asia')); // Wait for data to load

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Asia' } });

    expect(mockSetContinentFilter).toHaveBeenCalledWith('Asia');
  });
});
