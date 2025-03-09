window.onload = function () {
  document.getElementById("title").innerHTML = "Bar menu";
  addCocktail("Daiquiri", "images/Daiquiri.jpg", "Daiquiri.jpg", "Simple rum drink");
  addCocktail("Whiskey Sour", "images/Whiskey_Sour.jpg", "Whiskey_Sour.jpg", "Simple whiskey drink");
  addCocktail("Golden Apple", "images/Golden_Apple.jpg", "Golden_Apple.jpg", "Winter apples with Golden sparkles");
  addCocktail("Toreador", "images/Toreador.jpg", "Toreador.jpg", "Tequila & Apricot brandy");
  addCocktail("Pinklet", "images/Pinklet.jpg", "Pinklet.jpg", "Berries, Gin, & rhubarb");
  addCocktail("Makarska", "images/Makarska.jpg", "Makarska.jpg", "Coconut, Orange, & Sprite");
  addCocktail("Gradiška", "images/Gradiška.jpg", "Gradiška.jpg", "Coconut, Melon, & Sprite");
  addCocktail("Badminton", "images/Badminton.jpg", "Badminton.jpg", "Gin, Melon, & Orange");
  addCocktail("Bubblegum", "images/Bubblegum.jpg", "Bubblegum.jpg", "Watermelon, Vanilla, & Sprite");
  addCocktail("Hemingway's Special", "images/Hemingways_Special.jpg", "Hemingways_Special.jpg", "Rum, Cherry, & Grape fruit");
  addCocktail("Hips don't Lie", "images/Hips_dont_lie.jpg", "Hips_dont_lie.jpg", "Rum, Passion fruit, & Pineapple");
  addCocktail("Banana'Rama", "images/BananaRama.jpg", "BananaRama.jpg", "Banana & Peach");
  addCocktail("Orange Collins", "images/Orange_Collins.jpg", "Orange_Collins.jpg", "Gin, Orange, & Sprite");
  addCocktail("Zoo Monkey", "images/Zoo_Monkey.jpg", "Zoo_Monkey.jpg", "Like a zoo monkey :-)");
}//window.onload

// CREATES Cocktail-DIV AS BELOW
// ---------------------------
// <div class="Cocktail">
// <h2>Exempeltext</h2>
// <img src="images/exempelbild.jpg" alt="exempelbild"/>
// </div>
function addCocktail (title, imagePath, imageName, description) {
  // create a new Cocktail div
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "cocktail")

  // add title and image
  const newCocktailTitle = document.createElement("h2");
  newCocktailTitle.setAttribute("class", "cocktailTitle");
  newCocktailTitle.innerHTML = title;

  const cocktailImage = addCocktailImage(imagePath, imageName);
  newDiv.appendChild(cocktailImage);

  const newCocktailDescription = document.createElement("p");
  newCocktailDescription.setAttribute("class", "cocktailDescription");
  newCocktailDescription.innerHTML = description;

  // add the text node to the newly created div
  newDiv.appendChild(newCocktailTitle);
  newDiv.appendChild(cocktailImage);
  newDiv.appendChild(newCocktailDescription);

  // add the newly created element and its content into the DOM
  document.getElementById("cocktail_pictures").appendChild(newDiv);
}

function addCocktailImage(src, alt) {
  // create a new image element
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  newImage.setAttribute("alt", alt);
  newImage.setAttribute("class", "cocktailImage");

  return newImage; // return the created image element
}