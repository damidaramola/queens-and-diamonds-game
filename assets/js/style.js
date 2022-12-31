//file paths of 4 card images used in the game
const cardObjectDefined = [{
        id: 1,
        imagePath: "assets/images/king-of-clubs.PNG",
    },
    {
        id: 2,
        imagePath: "assets/images/Ace-of-Spades.PNG",
    },
    {
        id: 3,
        imagePath: "assets/images/Jack-of-hearts.PNG",
    },
    {
        id: 4,
        imagePath: "assets/images/Queen-ofDiamonds.PNG",
    }
];

const queenId = 4;
var form = document.getElementById("form");
//Back image of cards
const cardBackImgPath = "assets/images/card-back-Blue.png";

let cards = [];
//reference to start game button in global const
const playGameButtonElem = document.getElementById("playGame");
const cardContainerElem = document.querySelector(".card-placement");

//causes grid of cards to collapse showing only card 1
const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-1";
