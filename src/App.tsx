import React from 'react';
import Header from './layout/Header';
import RecipesPage from './pages/RecipesPage';
import ShoppingListPage from './pages/ShoppingListPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state_managenment/reducers';

function App() {
  const { recipeList } = useSelector( (state: RootState) => state.recipeReducer);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Redirect exact from="/" to="/recipes"/>
        <Route path="/recipes"
          component={RecipesPage}
        />
        <Route path="/shopping-list"
          component={ShoppingListPage}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;
