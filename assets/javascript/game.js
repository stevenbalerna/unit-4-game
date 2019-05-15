// General Variables

var stones = {
    power:
    {
        name: "power",
        value: 0
    }, 
    reality:
    {
        name: "reality",
        value: 0
    },
    time:
    {
        name: "time",
        value: 0
    },
    soul:
    {
        name: "soul",
        value: 0
    }    

    }


//var random-result;


//for (var i = 0; i < 4; i ++){
   // console.log("hey");

//Infinity Stone Variables


// Score Variables

var currentTotal = 0;
var targetTotal = 0;


// Wins and Losses Variables

var winTotal = 0;
var lostTotal = 0;


// Gameplay Functions

var randomResult = function(min,max){
    return Math.floor(Math.random() * (max-min +1)) +min;

}

var startGame = function(){
    currentTotal = 0;
    targetTotal = randomResult(19, 120);
    stones.power.value = randomResult (1,12);
    stones.reality.value = randomResult (1,12);
    stones.time.value = randomResult (1,12);
    stones.soul.value = randomResult (1,12);


$("#targetTotal").html(targetTotal);
$("#currentTotal").html(currentTotal);
   
}





// Stone Functions

var stoneValues = function(stones){
currentTotal = currentTotal + stones.value;

$("#currentTotal").html(currentTotal);

checkWin();


}

//Possible Outcome Functions

var checkWin = function() {
    if (currentTotal > targetTotal){
        alert ("You lose, Thanos wins!");
        lostTotal ++;
        $("#losses").html(lostTotal);
        startGame();
    }
    else if (currentTotal === targetTotal) {
        alert ("You win, You stopped Thanos!");
        winTotal ++;
        $("#wins").html(winTotal);
        startGame();
    }

}

startGame();

$("#power").click(function() {
    stoneValues(stones.power);
});

$("#reality").click(function() {
    stoneValues(stones.reality);
});

$("#time").click(function() {
    stoneValues(stones.time);
});

$("#soul").click(function() {
    stoneValues(stones.soul);
});