import React from 'react';

import './search-box.styles.css';

interface SearchBoxProps {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <input 
      type="text" 
      className="search-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default SearchBox;

