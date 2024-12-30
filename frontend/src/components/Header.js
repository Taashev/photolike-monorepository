import React from 'react';

function Header({ stateMenu, children }) {
  return (
    <header className={ `header ${ stateMenu ? 'header_open' : '' }` }>
      { children }
    </header>
  );
}

export default Header;
