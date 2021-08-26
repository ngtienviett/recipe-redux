import { Action_Type } from './../action_types';

interface AddNewRecipe {
  type: Action_Type.ADD_NEW_RECIPE;
  payload: Recipe;
}
interface UpdateRecipe {
  type: Action_Type.UPDATE_RECIPE;
  payload: Recipe;
}
interface DeleteRecipe {
  type: Action_Type.DELETE_RECIPE;
  payload: number;
}
interface AddToShoppingList {
  type: Action_Type.ADD_TO_SHOPPINGLIST;
  payload: Recipe;
}


interface AddNewIngredient {
  type: Action_Type.ADD_NEW_INGREDIENT;
  payload: Ingredient;
}
interface UpdateIngredient {
  type: Action_Type.UPDATE_INGREDEINT;
  payload: Ingredient;
}
interface DeleteIngredient {
  type: Action_Type.DELETE_INGEREDEINT;
  payload: number;
}
interface UpdateMode {
  type : Action_Type.UPDATE_MODE,
  payload: number;
}


interface UpdateActiveID {
  type : Action_Type.UPDATE_ACTIVE_ID,
  payload: number;
}

export type Action_Model = AddNewRecipe | AddToShoppingList | UpdateRecipe | DeleteRecipe | UpdateActiveID | AddNewIngredient | UpdateIngredient | DeleteIngredient | UpdateMode;