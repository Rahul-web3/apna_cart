import React from 'react';

function Navbar({items}) {
    return (
    	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Apna Cart</a>
        <span class="badge badge-pill badge-warning"><strong>{items}</strong></span>
      </nav>
    );
}
export default Navbar;