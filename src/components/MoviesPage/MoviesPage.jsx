import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import PNotify from 'pnotify/dist/es/PNotify';
import * as API from '../../services/api';
import List from '../List/List';
import Error from '../Error/Error';
import Styles from './MoviesPage.module.css';

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    input: '',
    data: {},
    notFound: false,
  };

  componentDidMount() {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    if (query) {
      API.getMoviesQuery(query)
        .then(({ data }) => this.apiAnswerState(data.results))
        .catch(error => this.apiError(error));
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);

    if (prevProps.location.search !== location.search) {
      API.getMoviesQuery(query)
        .then(({ data }) => this.apiAnswerState(data.results))
        .catch(error => this.apiError(error));
    }
  }

  apiError = error => {
    PNotify.error({
      text: error,
    });
  };

  apiAnswerState = data => {
    if (data.length < 1) {
      this.setState({ notFound: true });
    } else {
      this.setState({ notFound: false });
    }
    this.setState({ data });
  };

  hendleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    const { history } = this.props;

    history.push({
      ...this.props.location,
      search: `?query=${input}`,
    });
  };

  render() {
    const { data, input, notFound } = this.state;
    return (
      <section className={Styles.section}>
        <div className={Styles.Searchbar}>
          <form className={Styles.SearchForm} onSubmit={this.hendleSubmit}>
            <button type="submit" className={Styles['SearchForm-button']}>
              <span className={Styles['SearchForm-button-label']}>Search</span>
            </button>
            <input
              className={Styles['SearchForm-input']}
              onChange={this.hendleInput}
              value={input}
              name="input"
            />
          </form>
        </div>

        {data.length > 0 && <List data={data} />}
        {notFound && <Error>Movie not found!</Error>}
      </section>
    );
  }
}
