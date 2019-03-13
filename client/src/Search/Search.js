import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { searchGroup, searchUser } = this.props;

    const search = searchGroup === undefined ? searchUser : searchGroup;

    return (
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search" 
          onChange={(e) => search(e.target.value)}
        />
      </div> 
    );
  }
}

export default Search;
