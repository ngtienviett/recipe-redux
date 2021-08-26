export const updateRecipe = (recipe: Recipe, recipeList: Recipe[]) => {
  let index = recipeList.findIndex(item => item.id == recipe.id);
  recipeList[index] = recipe;
  return recipeList;
}
