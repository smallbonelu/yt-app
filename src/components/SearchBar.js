import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: make sure the we call callback from parent component
    props.onFormSubmit(term)
  }
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search-bar">Video Search</label>
          <input onChange={onInputChange} id="search-bar" type="text" value={term} />
        </div>
      </form>

    </div>
  )
}

export default SearchBar;