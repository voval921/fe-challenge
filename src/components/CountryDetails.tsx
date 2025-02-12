import React from 'react';

interface Country {
  name: string;
  continent: { name: string };
  emoji: string;
}

interface Props {
  country: Country;
  setSelectedCountry: (country: null) => void;
}

const CountryDetails: React.FC<Props> = ({ country, setSelectedCountry }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 mx-auto">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
        onClick={() => setSelectedCountry(null)}
      >
        Go Back
      </button>
      <h2 className="text-2xl font-bold">{country.name}</h2>
      <p className="text-gray-600">Continent: {country.continent.name}</p>
      <p className="text-4xl mt-2">{country.emoji}</p>
    </div>
  );
};

export default CountryDetails;
