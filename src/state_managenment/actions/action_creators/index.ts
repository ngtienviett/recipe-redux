import { Action_Type } from './../action_types';
import { Action_Model } from './../action_models';


export const addRecipe = (recipe: Recipe): Action_Model => ({
  type: Action_Type.ADD_NEW_RECIPE,
  payload: recipe
});


export const updateRecipe = (recipe: Recipe): Action_Model => ({
  type: Action_Type.UPDATE_RECIPE,
  payload: recipe
});
export const deleteRecipe = (id: number): Action_Model => ({
  type: Action_Type.DELETE_RECIPE,
  payload: id
});

export const addToShoppingList = (recipe: Recipe): Action_Model => ({
  type: Action_Type.ADD_TO_SHOPPINGLIST,
  payload: recipe,
});


export const addIngredient = (ingredeient: Ingredient): Action_Model => ({
  type: Action_Type.ADD_NEW_INGREDIENT,
  payload: ingredeient,
});

export const updateIngredient = (ingredeient: Ingredient): Action_Model => ({
  type: Action_Type.UPDATE_INGREDEINT,
  payload: ingredeient,
});

export const deleteIngredient = (id: number): Action_Model => ({
  type: Action_Type.DELETE_INGEREDEINT,
  payload: id,
});

export const updateMode = (id: number): Action_Model => ({
  type: Action_Type.UPDATE_MODE,
  payload: id,
});

export const updateActiveID = (id: number): Action_Model => ({
  type: Action_Type.UPDATE_ACTIVE_ID,
  payload: id,
});