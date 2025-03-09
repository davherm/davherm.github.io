window.onload = function () {
  document.getElementById("title").innerHTML = "Cocktail Menu"
  addCocktail("Daiquiri", "Plantation Rum");
  addCocktail("Whiskey Sour", "Bourbon / Egg White / Angustura Bitter");
  addCocktail("Margarita", "Tequila / Cointreau / Agave");
  addCocktail("Toreador", "Tequila / Apricot brandy");
  addCocktail("Pinklet", "Gin / Raspberry / Rhubarb");
  addCocktail("Golden Apple", "Winter Apple / Golden Sparkles");
  addCocktail("Hemingway's Special", "Rum / Maraschino / Grape fruit");
  addCocktail("Makarska", "Malibu / Bols Blue / Sprite");
  addCocktail("Gradiška", "Malibu / Midori / Sprite");
  addCocktail("Hips Don't Lie", "Rum / Passion fruit / Pineapple");
  addCocktail("Banana'Rama", "Banana / Peach / Pineapple");
  addCocktail("Zoo Monkey", "Like a zoo monkey :-)");
  addCocktail("Mango Habanero", "Mango & Habanero Liqueur");
  addCocktail("Maraschino Liqueur", "Maraschino Cherriy Liqueur");
  addCocktail("Rakija", "Rakija / Apricot");
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