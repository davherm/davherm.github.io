window.onload = function () {
  const title = localStorage.getItem("cocktailTitle");
  const description = localStorage.getItem("cocktailTaste");

  if (title, description) {
    document.getElementById("title").innerHTML = title; // Display the title
    addCocktail(title, "images/" + title + ".jpg", title + ".jpg", description);
  }
  else document.getElementById("title").innerHTML = "Something went wrong"; 

}//window.onload

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