import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          autoFocus
        />
      </div> 
    );  
  }
}

Search.propTypes = {
  searchGroup: PropTypes.func,
  searchUser: PropTypes.func,
};

export default Search;
