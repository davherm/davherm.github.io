var amountOfRecipes = 6;


window.onload = function () {
  document.getElementById("title").innerHTML = "Kokbok";

  for (var i=0; i<amountOfRecipes; i++) {
    var test = i;
    addRecipe(test);
  }//recipe loop


}//window.onload



// CREATES RECIPE-DIV AS BELOW
// ---------------------------
// <div class="recipe">
// <h2>Exempeltext</h2>
// <img src="images/exempelbild.jpg" alt="exempelbild"/>
// </div>
function addRecipe (test) {
  // create a new recipe div
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "recipe")

  // add title and image
  const newRecipeTitle = document.createElement("h2");
  newRecipeTitle.setAttribute("class", "recipeTitle");
  newRecipeTitle.innerHTML = test;
  const newRecipeImage = document.createElement("img");
  newRecipeImage.setAttribute("src", "images/exempelbild.jpg");
  newRecipeImage.setAttribute("alt", "images/exempelbild.jpg");
  newRecipeImage.setAttribute("class", "recipeImage");

  // add the text node to the newly created div
  newDiv.appendChild(newRecipeTitle);
  newDiv.appendChild(newRecipeImage);

  // add the newly created element and its content into the DOM
  const lastRecipe = document.getElementById("lastRecipe");
  const recipeList = document.getElementById("recipe_pictures");
  recipeList.insertBefore(newDiv, lastRecipe);
}
