// Sidebar.js
import { Link } from 'react-router-dom';


import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar-container'>
            <aside className="sidebar">
      
      <ul className="links">
        <li>
          <span className="icon">💼</span>
          <Link to="/Products">Get All Products</Link>
        </li>
        <li>
          <span className="icon">📂</span>
          <Link to={'/Products'}>Get All Categories</Link>
        </li>
      </ul>
    </aside>

    </div>
  );
}

export default Sidebar;
