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
    pattern.push(random_tile);
    console.log(pattern);
    pattern.forEach(function (random_tile, i) {
        setTimeout(function () {
          document.querySelector("#" + random_tile).classList.add("show");
          setTimeout(function () {
            document.querySelector("#" + random_tile).classList.remove("show");
          }, 500);
        }, i * 500);
      });  
}

function start(){
    round=0;
    started=true;
    pattern=[]
    user_pattern=[];
    piano_tiles();
}

function press_tile(e){
    let pressed_tile=e.target.getAttribute("id");
    console.log(pressed_tile);
    user_pattern.push(pressed_tile);
    console.log(user_pattern);
    if (pattern.includes(user_pattern[(user_pattern.length)-1])){
        if (pattern.length === user_pattern.length){
            setTimeout(function(){
                piano_tiles();
            },600);
        }
    } 
    else{
        game_over();
    }
}

function game_over(){
    alert("Game Over");
    pattern=[];
    user_pattern=[];
    round=0;
}

document
  .querySelector(".start-button")
  .addEventListener("click", start);
document.querySelector("#tile-1").addEventListener("click", press_tile);
document.querySelector("#tile-2").addEventListener("click", press_tile);
document.querySelector("#tile-3").addEventListener("click", press_tile);
document.querySelector("#tile-4").addEventListener("click", press_tile);
document.querySelector("#tile-5").addEventListener("click", press_tile);
document.querySelector("#tile-6").addEventListener("click", press_tile);
document.querySelector("#tile-7").addEventListener("click", press_tile);
document.querySelector("#tile-8").addEventListener("click", press_tile);
document.querySelector("#tile-9").addEventListener("click", press_tile);
document.querySelector("#tile-10").addEventListener("click", press_tile);
document.querySelector("#tile-11").addEventListener("click", press_tile);
document.querySelector("#tile-12").addEventListener("click", press_tile);
document.querySelector("#tile-13").addEventListener("click", press_tile);
document.querySelector("#tile-14").addEventListener("click", press_tile);
document.querySelector("#tile-15").addEventListener("click", press_tile);
document.querySelector("#tile-16").addEventListener("click", press_tile);