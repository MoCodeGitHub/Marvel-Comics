import React from 'react';

const Search = props => (
  <search onSubmit={props.getComic} >
    <input type="text" />
    <button>Search</button>
  </search>
);

export default Search;
