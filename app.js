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


var Choice = Math.floor(Math.random() * 7); //0-6

var CharacterROCName2;
var ShortDesc;
var LongStoryDesc;

function WarriorOrRogue() {
    var WORChoice = Math.floor(Math.random() * 2);
    if (WORChoice == 1) {
        CharacterROCName2 += " Warrior";
    } else {
        CharacterROCName2 += " Rogue";
    }
}

var MageShort = "Gifted with a power considered dangerous by most, you have spent most of your life secluded in the remote tower of the Circle of Magi to be trained and watched closely by the dreaded Templars. Now your final test is upon you -- succeed and prove your strength or be slain.";
var MageLong = "“The Circle of Magi exists to protect mages from a world that fears them, or so the young apprentices that are brought there are told. In truth, it exists as much to protect the world from the mages themselves. A time once existed when mages ruled the known world, bringing down ruin upon their enemies until at last they were overthrown. Now they are watched carefully by the templars, mage-hunters aligned with the Chantry priests who would not hesitate to strike down any mage at the first sign of corruption.<br/><br/> For the temptations offered to mages are many. Their power draws demons to them from the Fade, demons that will attempt to wrest control of a mage's body and transform her into a vile abomination. What these demons cannot take by force, they will sometimes attempt to take through deceit, offering knowledge of forbidden blood magic that allows a mage to control the minds of others and use the victims' very life force to fuel her power, leading her down a dark and destructive path.<br/><br/> All apprentices are taught to resist these temptations in the Circle of Magi, and the day comes when they must pass their final test, the Harrowing. They are thrown to the wolves, given over to a demon to either summon the willpower needed to defeat it or be possessed and die at templar hands. If the apprentice refuses they are made Tranquil, cut off from all emotion and magic and rendered unable to be possessed – for their own good. There are no other options, save to flee and be branded an apostate and thus hunted by the templars forever.<br/><br/> Welcome to the Circle, and life as a mage in Thedas, where the power to command the forces of magic comes with a price.”";


// <br/>

switch (Choice) {
    case 0:
        CharacterROCName2 = 'Human Noble';
        WarriorOrRogue();
        ShortDesc = "Born to wealth and power second only to royalty, you find your training in both diplomacy and war put to the test when your father's castle is betrayed from within on the very night your elder brother leads the family's forces to war.";
        LongStoryDesc = "“Some lands are ruled by men and women who believe that they have been elevated to their rank by the Maker Himself, but in Ferelden, rulers must earn their place. The nobility is not suffered gladly, as the Orlesian Empire discovered to its dismay when it attempted to occupy the land. <br/><br/> The Couslands have stewarded the lands of Highever for many generations, dating even to before Ferelden's first king was crowned. They have persevered so long because of their reputation for justice and temperance, as well as their willingness to lead men into battle. With the rise of the darkspawn horde in the south, it thus falls on the Teyrn of Highever to send out the call once again: duty demands that an army be sent to King Cailan's aid at once. <br/><br/> As the Couslands will quickly discover, however, the evil horde to the south is not the only darkness in Ferelden; treachery stalks the halls of Castle Cousland as well. <br/><br/> As a young scion of the Cousland family, the duty of carrying its banner will fall to you. Will you live up to your family's proud heritage? Or will you forge your own path, and damn the consequences?”"
        break;
    case 1:
        CharacterROCName2 = 'Human Mage';
        ShortDesc = MageShort;
        LongStoryDesc = MageLong;
        break;
    case 2:
        CharacterROCName2 = 'Dwarf Commoner';
        WarriorOrRogue();
        ShortDesc = "Born casteless in a land where rank is everything, bound as the lackey and thug of a local crime lord, you have spent your life invisible until chance thrusts you into the spotlight, where you can finally prove whether you will be defined by your actions or your birth.";
        LongStoryDesc = "“There was a merchant come by Dust Town the other day, some poor sod who's had his skin burnt by the sun up on the surface lands once too often, I'd say. How he gets let back into Orzammar I can't rightly say… he claims that he has a deal worked out. Who am I to argue when someone has an angle?<br/><br/>Point is, he tells me what them cloudheads think of us dwarves down here. It isn't even just the humans, there's surface dwarves who're born and bred up in the sun who think the same things, don't know any different. He says they say dwarves are smiths. Proud, noble warriors who like nothing better than to mine a vein of ore or forge a decent sword.<br/><br/>Had us a good laugh, we did. What would them humans think if they came to Dust Town and saw how the rest of us really lived? The ones that are casteless, the ones who aren't even considered worthy of being servants in the homes of the wealthy or pure enough to work the forges in the Shaperate? The nobles make sure we casteless get tattooed so they know who we are when they see us. That way they know who to spit on, right? Helps us, too. Makes it easier to figure out whose pockets are worth picking.<br/><br/>That's a joke. Not all of the casteless are criminals. Some of us are beggars, nug-catchers, street sweepers and noble hunters. We do what we can to survive. And let me tell you, when the last defenses of Orzammar finally fall to the darkspawn, it'll be the casteless who survive then. Surviving is all we know how to do. Won't the cloudheads be scratching their heads when that happens?”";
        break;
    case 3:
        CharacterROCName2 = 'Dwarf Noble';
        WarriorOrRogue();
        ShortDesc = "The favored child of the dwarven king, you proudly take up your first military command... only to learn that the deadly intrigues of dwarven politics can pose a greater danger than even that faced on the battlefield.";
        LongStoryDesc = "“When dwarves die, their spirits are said to return to the Stone–not some mythological entity, but rather to the actual stone that surrounds them. It is the roof over their head, the ground under their feet, the very basis from which their statues and architecture all are drawn. Is it any wonder that they would hold the rock in such reverence?<br/><br/>Those dwarves who are strong and who do their duty are said to make the Stone stronger when they return to it. They add to the foundation's strength. Those who are weak, who are unlucky or criminal, weaken the foundation… or are rejected by the Stone altogether. Thus the struggle to prove one's worth is central to dwarven culture. Their noble houses connive and plot to eclipse each other in the Assembly, often resorting to intrigues such as assassination and blackmail to increase their own prestige. So long as the appearance of honor is maintained, the end always justifies the means.<br/><br/>House Aeducan has held a prominent spot since its founding Paragon rose up to lead the defense of Orzammar against the darkspawn horde during the First Blight. With Endrin Aeducan as the current elected King, the House has remained ascendant, watched carefully by the envious and ambitious alike. Endrin is old, however, and the time has come for one of his children to make their move: they will prove their worth in replacing their father, or fall to treachery from within their own family.<br/><br/>The halls of Orzammar run deep, they say, but the blood runs deeper.”";
        break;
    case 4:
        CharacterROCName2 = 'City Elf';
        WarriorOrRogue();
        ShortDesc = "You have always lived under the heavy thumb of your human overlords, but when a local lord claiming his privilege with the bride shatters your wedding day, the simmering racial tensions explode in a rain of vengeance.";
        LongStoryDesc = "“They planted a tree in the middle of the alienage long ago. Today it stands tall, healthy, and green—in sharp contrast to the city around it. For we are the poorest of the poor, the unwanted and the unwelcome huddled on the other side of the wall that separates us from the human part of the city. We are allowed to pass the wall to work on the docks or in the human's taverns and in their homes, but when the dusk comes we must return. Any elf caught outside the alienage at night is likely to be mistaken for a sneak thief or a pickpocket… and let us be honest, the ones that stay out there at night probably are.<br/><br/>Our elder tells us that the tree is called the vhenadahl, which in the ancient elven tongue means “tree of the people.” Its roots are deep and the elder says that as long as the vhenadahl lives, so shall we. But he also says that there was once a time when our people lived in our own lands. He says that we were once ageless and strong, that it was the humans who took all this from us.<br/><br/>Is it true? Have we fallen so far? We are not unhappy. As poor as we are, we have a home. The alienage is no prison—it protects us, just as the vhenadahl shelters us. We dance and sing and make merry, stealing what moments we can to enjoy what little we have… and I believe we appreciate it far more than the humans do. They have everything and appreciate nothing.<br/><br/>And perhaps the day will come when the humans come and try to take the alienage from us, too. If that day comes, I swear they shall regret it.”";
        break;
    case 5:
        CharacterROCName2 = 'Dalish Elf';
        WarriorOrRogue();
        ShortDesc = "Proud of your role as one of the last 'true elves', you have always assumed you would spend your life wandering with your clan... until a chance encounter with a relic of your people's past threatens to tear you away from everything you've known.";
        LongStoryDesc = "“'We are the Dalish: keepers of the lost lore, walkers of the lonely path.<br/>We are the last of the Elvhenan, and never again shall we submit.'<br/><br/>This is the oath the Dalish elves hold close to their hearts. In ancient times, the elves ruled over Thedas alone, ageless and beautiful, until the humans came. Enslaved for a thousand years, the elves lost not only their immortality but their very identity. The Dalish are those elves who refuse to live in human cities, proudly wandering the most remote corners of the wild lands in small clans that rarely meet. Their wagons are welcome nowhere, and more than one tale is told of the Dalish clashing with remote villagers who attempt to drive them away by force.<br/><br/>Much has been lost, but the Dalish will find what has been lost and keep it safe. They will relearn the elven tongue, rediscover the ancient crafts and practice the old magics. They will spurn the human god and instead cleave to the ancient pantheon of the elves, praying that one day their own gods will return and lead their people to a new homeland. There, the Dalish will await the return of those elves who have forgotten what they were, and they will teach them to remember.<br/><br/>Until that day comes, they will stand fast. As long as the landships are seen on the horizon there will be hope, hope that what was long ago shattered by the touch of mortal man may one day yet be restored.”";
        break;
    case 6:
        CharacterROCName2 = 'Elf Mage';
        ShortDesc = MageShort;
        LongStoryDesc = MageLong;
        break;

}

document.getElementById("CharacterName").innerHTML = CharacterROCName2;
document.getElementById("ShortDesc").innerHTML = ShortDesc;
document.getElementById("LongDesc").innerHTML = LongStoryDesc;

var SetDragonFont = document.getElementById("SetDragonFont");

SetDragonFont.addEventListener('click', function () {
    document.getElementById("DragonFontAll").href = "DragonFontAll.css";
    sessionStorage.setItem('DragonFont', true);
});

var DragonFontActivated = sessionStorage.getItem('DragonFont');
if (DragonFontActivated == null) {
    sessionStorage.setItem('DragonFont', false);    
}
if (DragonFontActivated == true){
    document.getElementById("DragonFontAll").href = "DragonFontAll.css";
}
//sessionStorage and localStorage wont make it so the Dragon Font is on if it is true in storage, and i dont know why.
