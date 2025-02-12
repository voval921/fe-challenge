// @ts-nocheck
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

type ContinenntsComponent = () => JSX.Element;

const Continents: ContinenntsComponent = () => {
  const CONTINENTS = gql`
    query Continents {
      continents {
        name
      }
    }
  `;

  interface ContinentsQuery {
    continents: Array<{
      name: string;
    }>;
  }

  const { loading, error, data } = useQuery<ContinentsQery>(CONTINENTS);

  const bold = 700;

  const isEurope = (c: string) => c === 'Europe';

  return (
    <div>
      <h3 className={`font-${bold}`}>Continents:</h3>
      {data?.continents.map(({ name }) => (
        <div className={isEurope(name) ? 'text-red-800' : ''}>{name}</div>
      ))}
    </div>
  );
};

export default Continents;
