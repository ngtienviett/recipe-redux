import { addNewIngredient, updateIngredient, addToShoppingList } from '../../share/shoppingList';
import { RootState } from './index';
import { Action_Model } from "../actions/action_models";
import { Action_Type } from "../actions/action_types";

interface InitialValues {
  ingredientList: Ingredient[];
  id: number;
}

const initialValues = {
  ingredientList: [],
  id: -1,
};

const shoppingListReduce = (
  state: InitialValues = initialValues,
  action: Action_Model
) => {
  switch(action.type){
    case Action_Type.ADD_TO_SHOPPINGLIST:
      const result = addToShoppingList(state.ingredientList,action.payload);
      return {...state, ingredientList: result}
    case Action_Type.ADD_NEW_INGREDIENT:
      const newIngredient = action.payload;
      const newIngredientList = addNewIngredient(state.ingredientList,newIngredient);
      return {...state, ingredientList: newIngredientList};
    case Action_Type.UPDATE_INGREDEINT:
      const newList = updateIngredient(state.ingredientList,action.payload);
      return {...state, ingredientList: newList};
    case Action_Type.UPDATE_MODE:
      return {...state, id: action.payload};
    case Action_Type.DELETE_INGEREDEINT:
      return {...state, ingredientList : state.ingredientList.filter(item => item.id !== action.payload)}
    default:
      return state; 
  }
}

export default shoppingListReduce