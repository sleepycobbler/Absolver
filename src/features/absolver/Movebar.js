import React from 'react';

function Movebar(props) {
  return (
    <div className="Absolver-movebar">
        <div className='filter'>Filters</div>
        <div className='searchBar'><input type="text" placeholder="Search.." name="search"></input></div>
    </div>
  )
}

export default Movebar;