import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addToShoppingList, deleteRecipe, updateActiveID } from '../../state_managenment/actions/action_creators';
import { RootState } from '../../state_managenment/reducers';

type Params ={
  id: string
}
const RecipeDetail = () => {
  const { recipeList } = useSelector((state: RootState)=> state.recipeReducer);  
  
  const params = useParams<Params>();
  const history = useHistory();
  const dispatch = useDispatch();
  const id = parseInt(params.id);
  const recipe = recipeList.find(item => item.id === id);


  const handleAddToShoppingList = (recipe: Recipe) => {
    dispatch(addToShoppingList(recipe));
    dispatch(updateActiveID(-1));
  }
  const handleDeleteRecipe = (id: number) => {
    dispatch(deleteRecipe(id));
    dispatch(updateActiveID(-1));
  }
  if(recipe === undefined) {
    dispatch(updateActiveID(-1));
    history.push("/recipes")
    return <React.Fragment></React.Fragment>
  }else {
    return (
      <div className="my-4">
            <img src={recipe.imageURL} alt="" />
  
            <h4 className="my-3">{recipe.name}</h4>

            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Recipe
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <Link className="dropdown-item" to="/shopping-list" onClick={() =>handleAddToShoppingList(recipe)}>To Shopping List</Link>
                <Link className="dropdown-item" to={`/recipes/form/${id}`} >Edit Recipe</Link>
                <Link className="dropdown-item" to="/recipes" onClick={() => handleDeleteRecipe(id)}>Delete Recipe</Link>
              </div>
            </div> 
            <p className="mt-3">{recipe.description}</p>
            <ul className="list-group">
              {recipe.ingredients.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    {item.name} - {item.amount}
                  </li>
                );
              })}
            </ul>
          </div>
    )
  }
  
}

export default RecipeDetail
