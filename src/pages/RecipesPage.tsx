import React from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import RecipeForm from '../components/recipes/RecipeForm';
import RecipeList from '../components/recipes/RecipeList'
import RecipeDetail from '../components/recipes/RecipeDetail';
import { updateActiveID } from '../state_managenment/actions/action_creators';
const RecipesPage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button type="button" onClick={() => {dispatch(updateActiveID(-1)); history.push(`${match.path}/form`)}} className="btn btn-success my-4">New Recipe</button>
          <hr className="mt-0" />
          <RecipeList />
        </div>
        <div className="col">
        <Switch>
          <Route exact path={match.path}>
            <h2 className="mt-5">Please select a Recipe!</h2>
          </Route>
          <Route exact path={`${match.path}/form`}>
            <RecipeForm />
          </Route>
          <Route path={`${match.path}/form/:id`}>
            <RecipeForm />
          </Route>
          <Route path={`${match.path}/detail/:id`}>
            <RecipeDetail />
          </Route>
        </Switch>
      </div>
      </div>
    </div>
  )
}

export default RecipesPage
