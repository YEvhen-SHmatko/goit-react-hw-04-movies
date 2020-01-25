import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Styles from './App.module.css';

const HomePage = lazy(() =>
  import('../HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('../MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <header className={Styles.header}>
          <div className={Styles.logo}>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                alt="The Movie Database (TMDb)"
                width="40"
                height="36"
              />
            </a>
          </div>
          <ul className={Styles.list}>
            <li className={Styles.item}>
              <NavLink
                to="/"
                exact
                className={Styles.link}
                activeClassName={Styles.active}
              >
                Home
              </NavLink>
            </li>
            <li className={Styles.item}>
              <NavLink
                to="/movies"
                className={Styles.link}
                activeClassName={Styles.active}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </header>
        <main className={Styles.main}>
          <Suspense fallback={<div>...Loading</div>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/movies/:id" component={MovieDetailsPage} />
              <Route path="/movies" component={MoviesPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </main>
      </>
    );
  }
}
