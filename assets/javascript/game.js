
// COMPUTER RANDOM NUMBER REFRESHED WHEN GAME BEGINS
var compRandom = [19 + Math.floor(Math.random() * 101)];

// THIS IS PLACED HERE SO THE COMP RANDOM NUMBER SHOWS UP BEFORE THE GAME STARTS
$(".comp-number").text(compRandom);

// VARIABLES TO START
var numCounter = 0;
var win = 0;
var lose = 0;


// RANDOMLY GENERATED NUMBER BETWEEN 1-12
var jewelRandom = [Math.floor(Math.random() * 12)];


// FIRST JEWEL WITH ITS RANDOM VALUE
for (var i = 0; i < jewelRandom.length; i++) {

    var imageJewel = $("<img>");

    imageJewel.addClass("jewels");
    imageJewel.attr("src", "assets/images/green-jewel.jpg");
    imageJewel.attr("jewelvalue", jewelRandom[i]);
    $("#images").append(imageJewel);
}

// SECOND JEWEL WITH ITS RANDOM VALUE
var jewelRandom = [Math.floor(Math.random() * 12)];

for (var i = 0; i < jewelRandom.length; i++) {

    var imageJewel = $("<img>");

    imageJewel.addClass("jewels");
    imageJewel.attr("src", "assets/images/orange-jewel.jpg");
    imageJewel.attr("jewelvalue", jewelRandom[i]);
    $("#images").append(imageJewel);
}

// THIRD JEWEL WITH ITS RANDOM VALUE
var jewelRandom = [Math.floor(Math.random() * 12)];

for (var i = 0; i < jewelRandom.length; i++) {

    var imageJewel = $("<img>");

    imageJewel.addClass("jewels");
    imageJewel.attr("src", "assets/images/red-jewel.jpg");
    imageJewel.attr("jewelvalue", jewelRandom[i]);
    $("#images").append(imageJewel);
}

// FOURTH JEWEL WITH ITS RANDOM VALUE
var jewelRandom = [Math.floor(Math.random() * 12)];

for (var i = 0; i < jewelRandom.length; i++) {

    var imageJewel = $("<img>");

    imageJewel.addClass("jewels");
    imageJewel.attr("src", "assets/images/turquoise-jewel.jpg");
    imageJewel.attr("jewelvalue", jewelRandom[i]);
    $("#images").append(imageJewel);
}



// WHEN JEWELS GET CLICKED ON
$(".jewels").on("click", function () {
    var jewelValue = ($(this).attr("jewelvalue"));
    jewelValue = parseInt(jewelValue);


    // EVERY CLICK ADDS TO THE USERS TOTAL NUMBER
    numCounter += jewelValue;



    // WIN/LOSE LOGIC
    if (numCounter == compRandom) {
        win++;
    } else if (numCounter > compRandom) {
        lose++;
    }

    // INPUTTING IN HTML
    $(".score-number").text(numCounter);
    $(".winText").text(win);
    $(".loseText").text(lose);


    // RESTART GAME
    $("button").on("click", function () {
        location.reload();

    })


})    