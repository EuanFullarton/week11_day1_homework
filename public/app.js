  var CATS_ARRAY = [
  { name: "Archie", fav_food: "Mice", picture_link: "http://kittytonpost.com/wp-content/uploads/2013/09/cute-cat-funny.jpg" }, { name: "Tom", fav_food: "Jerry", picture_link: "https://s-media-cache-ak0.pinimg.com/originals/a7/8c/12/a78c12e2f0f4a2a3cb6914e799bdc15c.jpg"}
  ];


  var createCatContainer = function(){
   var catContainer = document.createElement("ul");
   catContainer.classList.add("cat");
   return catContainer;
 }

 var createCatName = function(name){
  var catName = document.createElement("li");
  catName.innerText = "Name: " + name;
  catName.classList.add("cat");
  return catName;
}

var createCatFood = function(fav_food){
  var catFood = document.createElement("li");
  catFood.innerText = "Favourite food: " + fav_food;
  return catFood;
}

var createCatPic = function(picture_link){
  var catPic = document.createElement("li");
  catPic.innerHTML = "<img width='500' src= " + '"' + picture_link + '"' + "/>";
  return catPic;

}

var appendCatElements = function(cats, catContainer, catName, catFood, catPic){
  catContainer.appendChild(catName);
  catContainer.appendChild(catFood);
  cats.appendChild(catContainer);
}


var addCat = function(name, fav_food, picture_link){
  var catContainer = createCatContainer();
  var catName = createCatName(name);
  var catFood = createCatFood(fav_food);
  var catPic = createCatPic(picture_link);
  var cats = document.getElementById("cats");

  appendCatElements(cats, catName, catFood, catPic);
}


var app = function() {
  for (var cat of CATS_ARRAY){
    addCat(cat.name, cat.fav_food, cat.picture_link);
  }


};

window.onload = app;