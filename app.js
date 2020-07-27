//For Race, Generate 3 options (1-3 or 0-2).
//For Origin, each option generates a 2-3 for origin.
//For Class you then generate 1-2 options for each class.
//For Specialisation/Build, each one randomises through 4 choices.



var Race = Math.floor(Math.random() * 3); // generate race from 0-2 (3 is mage)
var Origin;

if (Race != 2) {
    Origin = Math.floor(Math.random() * 2) //if not elf go from 0-1
} else {
    Origin = Math.floor(Math.random() * 3) //if elf go from 0-2
};

//var Class = if(Race == 1 && Origin==2){Math.floor(Math.random() * 1)}else{2}; //if not elf choose 0-1, 0 for warrior, 1 for rogue, if mage 1/2 goes to human 

//var Specialisation = Math.floor(Math.random() * 10);

var CharacterCode = "" + Race + Origin;

console.log(Race);
console.log(Origin);
console.log(CharacterCode);



var RaceName;

if (Race == 1) {
    RaceName = "Human";
} else if (Race == 2) {
    RaceName = "Dwarf";
} else {
    RaceName = "Elf";
}

var OriginName;


var ClassName;
var CharacterROCName;


//Attempt 2 - The Hard Code

var Choice = Math.floor(Math.random() * 12); //0-11

var CharacterROCName2;
var ShortDesc;
var LongStoryDesc;

function WarriorOrRogue(){
    var WORChoice = Math.floor(Math.random() * 2);
    if(WORChoice == 1){
       //Warrior
       }else{
        //Rogue
       }
}

switch (Choice) {
    case 0:
 CharacterROCName2 = 'Human Noble Warrior';
        break;
    case 1:
CharacterROCName2 = 'Human Noble Rogue';
        break;
    case 2:
CharacterROCName2 = 'Human Mage';
        break;
    case 3:
CharacterROCName2 = 'Dwarf Commoner Warrior';
        break;
    case 4:
CharacterROCName2 = 'Dwarf Commoner Rogue';
        break;
    case 5:
CharacterROCName2 = 'Dwarf Noble Warrior';
        break;
    case 6:
CharacterROCName2 = 'Dwarf Noble Rogue';
        break;
    case 7:
CharacterROCName2 = 'City Elf Warrior';
        break;
    case 8:
CharacterROCName2 = 'City Elf Rogue';
        break;
    case 9:
CharacterROCName2 = 'Dalish Elf Warrior';
        break;
    case 10:
CharacterROCName2 = 'Dalish Elf Rogue';
        break;
    case 11:
CharacterROCName2 = 'Elf Mage';
        break;
}

document.getElementById("CharacterName").innerHTML = CharacterROCName2;
