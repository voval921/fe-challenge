import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';

interface Country {
  code: string;
  name: string;
  continent: { name: string };
  emoji: string;
}

interface Props {
  search: string;
  continentFilter: string;
  setSelectedCountry: (country: Country) => void;
}

const CountryList: React.FC<Props> = ({ search, continentFilter, setSelectedCountry }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries.</p>;

  const filteredCountries = data.countries.filter((country: Country) =>
    country.name.toLowerCase().includes(search.toLowerCase()) &&
    (continentFilter === '' || country.continent.name === continentFilter)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
      {filteredCountries.map((country: Country) => {
        const flagUrl = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`;

        return (
          <div
            key={country.code}
            className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-xl w-56 cursor-pointer transition-transform duration-200 ease-in-out shadow-md hover:scale-105"
            onClick={() => setSelectedCountry(country)}
          >
            <img
              src={flagUrl}
              alt={`${country.name} flag`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">{country.name}</h3>
              <p className="text-sm text-gray-600">{country.continent.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
