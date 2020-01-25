import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PNotify from 'pnotify/dist/es/PNotify';
import * as API from '../../services/api';
import Styles from './Cast.module.css';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = {
    data: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    API.getMoviesCredits(id)
      .then(({ data }) => this.setState({ data }))
      .catch(error => {
        PNotify.error({
          text: error,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <ul className={Styles.list}>
          {data.cast &&
            data.cast.length > 0 &&
            data.cast.map(actor => (
              <li className={Styles.item} key={actor.cast_id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt=""
                  />
                )}
                <h5 className={Styles.name}>{actor.name}</h5>
                {actor.character.length > 0 && (
                  <span className={Styles.character}>
                    Character:{actor.character}
                  </span>
                )}
              </li>
            ))}
        </ul>
      </>
    );
  }
}
