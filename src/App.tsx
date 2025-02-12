import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import SearchBar from './components/SearchBar';
import ContinentFilter from './components/ContinentFilter';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [continentFilter, setContinentFilter] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  return (
    <ApolloProvider client={client}>
      <div className="max-w-3xl mx-auto text-center font-sans p-5">
        <h1 className="text-3xl font-bold mb-5 text-left">Country Finder</h1>
        <div className="flex justify-between mb-5 space-x-4">
          <SearchBar search={search} setSearch={setSearch} />
          <ContinentFilter setContinentFilter={setContinentFilter} />
        </div>
        {selectedCountry ? (
          <CountryDetails country={selectedCountry} setSelectedCountry={setSelectedCountry} />
        ) : (
          <CountryList search={search} continentFilter={continentFilter} setSelectedCountry={setSelectedCountry} />
        )}
      </div>
    </ApolloProvider>
  );
};

export default App;
