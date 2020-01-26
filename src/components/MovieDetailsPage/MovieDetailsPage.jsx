import React, { Component, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import PNotify from 'pnotify/dist/es/PNotify';
import routers from '../../routes/routes';
import * as API from '../../services/api';
import Styles from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    data: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    API.getMoviesId(id)
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch(error => {
        PNotify.error({
          text: error,
        });
      });
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {data.id && (
          <div className={Styles.section}>
            <button className={Styles.btn} type="button" onClick={this.goBack}>
              go back
            </button>
            <div className={Styles.row}>
              <div className={Styles.col}>
                <img
                  className={Styles.poster}
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt=""
                />
              </div>
              <div className={Styles.col}>
                <h3 className={Styles.title}>{data.original_title}</h3>
                <span className={Styles.score}>
                  User Score: {data.vote_average}
                </span>
                <div className={Styles.overview}>
                  <h4 className={Styles.subTitle}>Overview</h4>
                  <p className={Styles.text}>{data.overview}</p>
                </div>
                <div className={Styles.genres}>
                  <h4 className={Styles.subTitle}>genres</h4>
                  <ul className={Styles.list}>
                    {data.genres &&
                      data.genres.length > 0 &&
                      data.genres.map(i => (
                        <li key={shortId.generate()}>{i.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className={Styles.title}>Aditional information</h4>
              <ul className={Styles.navInfo}>
                <li className={Styles.item}>
                  <NavLink
                    to={`/movies/${data.id}/cast`}
                    replace
                    className={Styles.link}
                    activeClassName={Styles.active}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={Styles.item}>
                  <NavLink
                    to={`/movies/${data.id}/reviews`}
                    replace
                    className={Styles.link}
                    activeClassName={Styles.active}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Suspense fallback={<div>...Loading...</div>}>
                <Switch>
                  <Route
                    path={routers.CAST_PAGE.path}
                    exact
                    component={routers.CAST_PAGE.component}
                  />
                  <Route
                    path={routers.REVIEWS_PAGE.path}
                    exact
                    component={routers.REVIEWS_PAGE.component}
                  />
                </Switch>
              </Suspense>
            </div>
          </div>
        )}
      </>
    );
  }
}
