import { updateRecipe } from './../../share/recipe';
import { Action_Model } from "../actions/action_models";
import { Action_Type } from "../actions/action_types";

interface InitialValues {
  recipeList: Recipe[];
  activeID: number;
}

const initialValues = {
  recipeList: [],
  activeID: -1,
};

const recipeReducer = (
  state: InitialValues = initialValues,
  action: Action_Model
) => {
  switch (action.type) {
    case Action_Type.UPDATE_ACTIVE_ID: 
      return {...state, activeID: action.payload}
    case Action_Type.ADD_NEW_RECIPE:
      const newRecipe = action.payload;
      return { ...state, recipeList: [newRecipe, ...state.recipeList] };
    case Action_Type.UPDATE_RECIPE:
      return {...state, recipeList: updateRecipe(action.payload,state.recipeList)}
    case Action_Type.DELETE_RECIPE: 
      return {...state, recipeList : state.recipeList.filter(item => item.id !== action.payload)};
    default:
      return state;
  }
};

export default recipeReducer;
