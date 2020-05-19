import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';
import Loading from '../Loading';
import Error from '../Error';

import { getUi } from '../../store/selectors';
import { fetchBikes } from '../../store/actions';

import './styles.css';

function App() {
  const { isFetching, error } = useSelector(state => getUi(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  return (
    <div className="app">
      <Header className="app-header" />
      <main className="app-main">
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route
            path="/:filter?"
            render={props => (
              <BikesStore
                {...props}
                className="app-store"
                filtersClassName="app-store-filters"
                listClassName="app-store-list"
              />
            )}
          ></Route>
        </Switch>
      </main>
      {isFetching && <Loading className="app-loading" />}
      {error && <Error className="app-error" error={error} />}
    </div>
  );
}

export default App;
