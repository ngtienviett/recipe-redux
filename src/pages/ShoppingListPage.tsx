import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import IngredientForm from '../components/shoppingList/IngredientForm';
import IngredientList from '../components/shoppingList/IngredientList';

const ShoppingListPage = () => {
  const match = useRouteMatch();
  return (
    <div className="container">
          <div className="row mt-4">
              <div className="col">
                <Switch>
                 <Route exact path={`${match.path}`} component={IngredientForm}/>
                </Switch>
              </div>
          </div>
          <hr className="py-1"/>
          <div className="row">
            <div className="col">
              <IngredientList />
            </div>
          </div>
        </div>
  )
}

export default ShoppingListPage
