
var favAnimal = {
    name: "lola",
    animal: "dog"
};

console.log("favAnimal", favAnimal.animal);   
// can use favAnimal[animal]

var instructorPets = [
  {
      instructorName: "Zoe",
      petName: "Biff",
      animalType: "cat",
      isFavorite: false
  },
  {
    instructorName: "Zoe",
    petName: "Whiskey",
    animalType: "cat",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false
  }
];

console.log ("instructorPets",instructorPets);

//div id=pet-names
//loop through instructorPets and print petName as h1 tag to that div
var petDiv = document.getElementById("petName");
for(var i=0; i<instructorPets.length; i++){
  console.log("animal",instructorPets[i].petName)
  petDiv.innerHTML += '<h2>'+ instructorPets[i].petName + '</h2>';
}


//    var pet1 = instructorPets[i].petName;
//    var printPetName = document.getElementById("objects");
//    printPetName.innerHTML += '<h1>' + pet1 + '</h1>'
// }
