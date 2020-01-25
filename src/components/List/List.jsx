import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './List.module.css';

const List = ({ data }) => {
  return (
    <ul className={Styles.list}>
      {data.map(e => (
        <li key={e.id} className={Styles.item}>
          <NavLink
            to={`/movies/${e.id}`}
            className={Styles.link}
            activeClassName={Styles.active}
          >
            {e.title || e.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default List;
