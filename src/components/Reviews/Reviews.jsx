import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PNotify from 'pnotify/dist/es/PNotify';
import * as API from '../../services/api';
import Styles from './Reviews.module.css';

export default class Reviews extends Component {
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
    API.getMoviesReviews(id)
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
          {(data.results &&
            data.results.length > 0 &&
            data.results.map(result => (
              <li className={Styles.item} key={result.id}>
                <h5 className={Styles.title}>{result.author}</h5>
                <p className={Styles.text}>{result.content}</p>
              </li>
            ))) || (
            <div className={Styles.text}>
              We do not have any reviews for this movie.
            </div>
          )}
        </ul>
      </>
    );
  }
}
