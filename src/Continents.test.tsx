import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Continents from './Continents';
import { gql } from '@apollo/client';

const CONTINENTS_QUERY = gql`
  query Continents {
    continents {
      name
    }
  }
`;

const mocks = [
  {
    request: { query: CONTINENTS_QUERY },
    result: { data: { continents: [{ name: 'Europe' }, { name: 'Asia' }] } },  // Corrected 'Continents' to 'continents'
  }
];

it('should display Europe in the list of the Continents', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Continents />
    </MockedProvider>
  );

  const items = await screen.findAllByText('Europe');

  expect(items.length).toBeGreaterThan(0);
  expect(items[0]).toHaveTextContent('Europe');
});
