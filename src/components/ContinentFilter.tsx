import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../graphql/queries';

interface Props {
  setContinentFilter: (value: string) => void;
}

const ContinentFilter: React.FC<Props> = ({ setContinentFilter }) => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return null;
  if (error) return <p className="text-red-500">Error loading continents.</p>;

  return (
    <select 
      className="p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setContinentFilter(e.target.value)}
    >
      <option value="">Filter by Continent</option>
      {data.continents.map((continent: { name: string }) => (
        <option key={continent.name} value={continent.name}>{continent.name}</option>
      ))}
    </select>
  );
};

export default ContinentFilter;
