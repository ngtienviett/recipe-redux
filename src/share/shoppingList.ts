export const addNewIngredient = (ingredientList: Ingredient[], ingredient: Ingredient) => {
  let isAdded = false;
  for(let i = 0; i < ingredientList.length; i++){
    if(ingredientList[i].name.toLowerCase().trim().localeCompare(ingredient.name.toLowerCase().trim()) === 0){
      ingredientList[i].amount += ingredient.amount;
      isAdded = true;
      break;
    }
  }
  if(!isAdded) ingredientList.unshift(ingredient);
  return ingredientList;
}

export const addToShoppingList = (ingredientList : Ingredient[], recipe: Recipe) => {
  const { ingredients } = recipe;
  ingredients.forEach(item => {
    addNewIngredient(ingredientList,item)
  })
  return ingredientList;
}


export const updateIngredient = (ingredientList: Ingredient[], ingredient: Ingredient) => {
  let index = ingredientList.findIndex(item => item.id === ingredient.id);
  ingredientList[index] = ingredient;
  return ingredientList;
}