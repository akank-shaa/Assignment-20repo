import React from 'react';

function Navbar(props) {
  return (
    <div class="p-4 md:px-12">
      <img src={props.photo} class="w-24 md:w-36" />
    </div>
  );
}

export default Navbar;