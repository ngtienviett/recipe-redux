import { combineReducers } from "redux";
import recipeReducer from "./recipe.reducer";
import shoppingListReducer from "./shoppingList.reducer";
const rootReducer = combineReducers({
  recipeReducer,
  shoppingListReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;