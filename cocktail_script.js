window.onload = function () {
  const title = localStorage.getItem("cocktailTitle");
  const description = localStorage.getItem("cocktailTaste");

  if (title, description) {
    document.getElementById("title").innerHTML = title; // Display the title
    addCocktail(title, "images/" + title + ".jpg", title + ".jpg", description);
  }
  else document.getElementById("title").innerHTML = "Something went wrong"; 

  document.getElementById("title").addEventListener("click", function() {
    window.location.href = "index.html"; // Navigate to cocktail.html
  });

}//window.onload

function addCocktail (title, imagePath, imageName, description) {
  // create a new Cocktail div
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "cocktail")

  const cocktailImage = addCocktailImage(imagePath, imageName);
  newDiv.appendChild(cocktailImage);

  const returnButton = document.createElement("p");
  returnButton.setAttribute("id", "returnButton");
  returnButton.innerHTML = "Return to menu";
  returnButton.addEventListener("click", function() {
    window.location.href = "index.html"; // Navigate to cocktail.html
  });
  newDiv.appendChild(returnButton);

  // add the newly created element and its content into the DOM
  document.getElementById("cocktail_list").appendChild(newDiv);
}

function addCocktailImage(src, alt) {
  // create a new image element
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  newImage.setAttribute("alt", alt);
  newImage.setAttribute("class", "cocktailImage");

  return newImage; // return the created image element
}