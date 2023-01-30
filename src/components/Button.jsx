import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = () => {
  return (
    <div>
      <button>
        <NavLink to="/PageOne">стр1</NavLink>
      </button>
      <button>
        <NavLink to="/PageTwo">стр2</NavLink>
      </button>
    </div>
  );
};

export default Button;
