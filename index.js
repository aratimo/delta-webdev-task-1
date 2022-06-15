let tiles=["tile-1",
        "tile-2",
        "tile-3",
        "tile-4",
        "tile-5",
        "tile-6",
        "tile-7",
        "tile-8",
        "tile-9",
        "tile-10",
        "tile-11",
        "tile-12",
        "tile-13",
        "tile-14",
        "tile-15",
        "tile-16"];

let pattern=[];
let user_pattern=[];

let started=false;
let round=0;

function piano_tiles(){
    round++;
    user_pattern=[];
    random_tile=tiles[Math.floor(Math.random()*16)];
}

function game_over(){
    pattern=[];
    user_pattern=[];
    alert("Game Over");
}