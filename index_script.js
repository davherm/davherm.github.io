window.onload = function () {
  document.getElementById("title").innerHTML = "Bar Menu"
  addCocktail("Daiquiri", "Simple rum drink");
  addCocktail("Whiskey Sour", "Simple whiskey drink");
  addCocktail("Golden Apple", "Winter apples with Golden sparkles");
  addCocktail("Toreador", "Tequila & Apricot brandy");
  addCocktail("Pinklet", "Berries, Gin, & rhubarb");
  addCocktail("Makarska", "Coconut, Orange, & Sprite");
  addCocktail("Gradiška", "Coconut, Melon, & Sprite");
  addCocktail("Hemingway's Special", "Rum, Cherry, & Grape fruit");
  addCocktail("Hips don't Lie", "Rum, Passion fruit, & Pineapple");
  addCocktail("Banana'Rama", "Banana & Peach");
  addCocktail("Orange Collins", "Gin, Orange, & Sprite");
  addCocktail("Zoo Monkey", "Like a zoo monkey :-)");
}//window.onload

function addCocktail (title, description) {
  // create a new Cocktail div
  const cocktailDiv = document.createElement("div");
  cocktailDiv.setAttribute("class", "cocktail")

  const cocktailLink = document.createElement("a");
  cocktailLink.setAttribute("class", "cocktailTitle");
  cocktailLink.setAttribute("href", "cocktail.html");
  cocktailLink.innerHTML = title;

  // Add click event to set localStorage and navigate
  cocktailLink.addEventListener("click", function() {
    localStorage.setItem("cocktailTitle", title); // Store title in localStorage
    localStorage.setItem("cocktailTaste", description); // Store description in localStorage
    window.location.href = "cocktail.html"; // Navigate to cocktail.html
  });

  const cocktailDescription = document.createElement("p");
  cocktailDescription.setAttribute("class", "cocktailDescription");
  cocktailDescription.innerHTML = description;

  // add the text node to the newly created div
  cocktailDiv.appendChild(cocktailLink);
  cocktailDiv.appendChild(cocktailDescription);

  // add the newly created element and its content into the DOM
  document.getElementById("cocktail_list").appendChild(cocktailDiv);
}