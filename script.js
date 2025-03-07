window.onload = function () {
  document.getElementById("title").innerHTML = "Barmeny";
  addCocktail("Daiquiri", "images/Daiquiri.jpg", "Daiquiri.jpg", "Simple rum drink");
  addCocktail("Golden Apple", "images/Golden_Apple.jpg", "Golden_Apple.jpg", "Winter apples with golden sparkles");
  addCocktail("Toreador", "images/Toreador.jpg", "Toreador.jpg", "Tequila & apricot brandy");
  addCocktail("Pinklet", "images/Pinklet.jpg", "Pinklet.jpg", "Berries, gin & rhubarb");
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
  newCocktailTitle.setAttribute("class", "CocktailTitle");
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