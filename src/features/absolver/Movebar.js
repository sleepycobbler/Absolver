import React from 'react';

/**
 * This is the representation of the bar at the top of the list of moves.
 * @component
 * @returns A div containing 2 divs
 * @todo Implement this section
 */

const Movebar = () => {
  return (
    <div className="Absolver-movebar">
      <div className='filter'>Filters</div>
      <div className='searchBar'><input type="text" placeholder="Search.." name="search" /></div>
    </div>
  )
}

export default Movebar;