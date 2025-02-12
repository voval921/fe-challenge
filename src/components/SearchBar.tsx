import React from 'react';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
