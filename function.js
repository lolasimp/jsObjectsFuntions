//function expressions: name of function is declared in a variable
var a = function(){
    console.log("a", 3);
 };
 
 
 
 //function declarations: name goes after the word function
 function b(){
  console.log("b", 2);
 };
 
 var num = 3;
 function numPrinter(monkeyButt){
   //monkeyButt = num = 3
    console.log("my number : ", monkeyButt);
 }
 
 numPrinter(num);
 numPrinter(3);
 numPrinter(4);
 numPrinter(5);
 numPrinter("turtle");
 
 function cat(){
    return "love them";
 }
 var message = cat();
 console.log("message", message);
 console.log(typeof message);
 
 //This is an array of objects
 var instructorPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: false
    },
    {
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
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
 
 function domStringMaker(animalArray){
    //take pet names and creat dom string
    //call printToDom function
    for (var i=0; i <animalArray.length; i++) {
        //console.log("animalString", animalArray[i].petName)
        var animalString = "";
        if (animalArray[i].isFavorite){
            animalString += "<div class='pet-container isFavorite'>";
        } else {
            animalString += "<div class='pet-container isNotFavorite'>";
        }
            animalString += "<h1>" + animalArray[i].petName + "</h1>";
            animalString += "<h2>Owner Name: " + animalArray[i].instructorName + "</h2>";
            animalString += "<h2>Pet Type: " + animalArray[i].animalType + "</h2>";
            animalString += "</div>";
        printToDom(animalString, "pet-names");
    }
 }
 
 function printToDom(stringToPrint, divId){
     var petDiv = document.getElementById(divId);
     //console.log("petDiv", petDiv);
     petDiv.innerHTML += stringToPrint;
 }
 
 domStringMaker(instructorPets);