import React, { Component } from 'react';
import PNotify from 'pnotify/dist/es/PNotify';
import * as API from '../../services/api';
import List from '../List/List';
import Styles from './HomePage.module.css';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    API.getMoviesTrending()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => {
        PNotify.error({
          text: error,
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <section className={Styles.moviesList}>
        <h1 className={Styles.title}>Trending today</h1>
        <List data={movies} />
      </section>
    );
  }
}
