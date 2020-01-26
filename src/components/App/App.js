import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Styles from './App.module.css';
import routers from '../../routes/routes';

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
                to={routers.HOME_PAGE.path}
                exact
                className={Styles.link}
                activeClassName={Styles.active}
              >
                Home
              </NavLink>
            </li>
            <li className={Styles.item}>
              <NavLink
                to={routers.MOVIES_PAGE.path}
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
              <Route
                exact
                path={routers.HOME_PAGE.path}
                component={routers.HOME_PAGE.component}
              />
              <Route
                path={routers.MOVIE_DETAILS_PAGE.path}
                component={routers.MOVIE_DETAILS_PAGE.component}
              />
              <Route
                path={routers.MOVIES_PAGE.path}
                component={routers.MOVIES_PAGE.component}
              />
              <Redirect to={routers.HOME_PAGE.path} />
            </Switch>
          </Suspense>
        </main>
      </>
    );
  }
}
