import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to='/'>Timer</Link>
        </li>
        <li>
          <Link to='/ratios'>Ratios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
