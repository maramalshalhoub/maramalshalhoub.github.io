//created multidimensional array that holds all possible wins
var winArray = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["1", "5", "9"]
];
//declared 2 variables that holds each players clicks
var currentX = [];
var currentO = [];
var flag = true;
var checkWin = 0;

//on click function that adds classes on each user click
$(".ticTac").one("click", function(event) {
  //flag used to switch between players so it it start with one as X
  //adds class X if player 1 clicks
  if (flag) {
    $(event.target).addClass("x");

    //checks if it has class X then enter and add 1 to check win for player 1.
    //it be helpful to calculate the check wins later
    if ($(this).hasClass("x")) {
      checkWin++;

      //if statement to check the if the player plays more than 3 times then
      // start checking the check function
      if (currentX.length >= 3) {
        check(currentX, winArray);
      }
      //each click user clicks it pushes it to the currentX array that allows the user
      // to later compare

      currentX.push(event.target.id);
    }
    //each player has one option to click
    //once user click pushed to the array it will change the flag value for the O option
    flag = !flag;
    //enters function check with current attribute
    check(currentX, "X");
  }
  //else adds class O if player 2 clicks
  else {
    $(event.target).addClass("o");

    //checks if it has class O then enter and add 1 to check win for player 1.
    //it be helpful to calculate the check wins later
    if ($(this).hasClass("o")) {
      checkWin++;

      //if statement to check the if the player2 plays more than 3 times then
      // start checking the check function
      if (currentO.length >= 3) {
        check(currentO, winArray);
      }
      //each click user clicks it pushes it to the currentO array that allows the user
      // to compare it with main possible winArray array
      currentO.push(event.target.id);
    }
    //once user click pushed to the O array it will change the flag value to 1
    //and switch to player1 again
    flag = true;
    check(currentO, "O");
  }
});

//function created to check the both arrays X and O and compare it to winArray multidimensional array
function check(array, winner) {
  //declare variable Player turn that sorts all possible arrays holds each players clicks
  var playerTurn = array.sort();
  console.log("X: ", currentX);
  console.log("O: ", currentO);
  //first for loop that enters the first array
  for (var k = 0; k < winArray.length; k++) {
    //declare new variable to join
    var arrayJoin = winArray[k].join();
    for (var i = 0; i <= 3; i++) {
      //if statement to compare each clicks (currentX for player1) and (currentO for player2)
      //with the main array win Array (vertical)(horizontal)(diagonal)
      if (
        (array.includes(winArray[i][0]) &&
          array.includes(winArray[i][1]) &&
          array.includes(winArray[i][2])) ||
        (array.includes(winArray[i][2]) &&
          array.includes(winArray[i][1]) &&
          array.includes(winArray[i][0])) ||
        (array.includes(winArray[i][1]) &&
          array.includes(winArray[i][0]) &&
          array.includes(winArray[i][2])) ||
        (array.includes(winArray[i][2]) &&
          array.includes(winArray[i][0]) &&
          array.includes(winArray[i][1]))
      ) {
        console.log("X: ", currentX);
        console.log("O: ", currentO);
        //if compared successfully and user wins alert success message
        // alert(`Player ${winner} won`).delay(1000);
        //Added sweet alert that popup based on the winner
        //and the icon presented is also based on the winner
        swal({
          title: `Player ${winner} won`,
          icon: `img/${winner}_icon.png`,
          background: "URL(img/homePage.jpg)"
        });

        //this variable slices 3 values of the array if it's greater than 3
        playerTurn = playerTurn.slice(i, i + 3);
        // playerTurn = playerTurn.join();
        console.log(playerTurn);
        //end of loop
        //if user wins call function reset to reload the page
        setInterval(reset, 3000);
        return;
      }
      //if statement compares the player turn with the joined array
      if (playerTurn == arrayJoin) {
        // debugger;
        //Added sweet alert that popup based on the winner
        //and the icon presented is also based on the winner
        swal({
          title: `Player ${winner} won`,
          icon: `img/${winner}_icon.png`,
          background: "URL(img/homePage.jpg)"
        });

        // alert(`Player ${winner} won`).delay(1000);
        //call function reset to reload the page
        setInterval(reset, 3000);
        return;
      }
    }
  }
}
//create function that reload the page and become empty so the user can play again
//or if the user wins the reset function is used
function reset() {
  location.reload();
}

//if the image is clicked enter the function add class animation to it
$(".buttonImg").on("click", function() {
  console.log($(this));
  $(this).addClass("animated zoomOutUp");
  //once class animation is clicked I set time out then redirect the user to the game page
  setTimeout(function() {
    window.location.href =
      "file:///Users/maramalshalhoub/Desktop/WDI/Project-1-Prompt/project1/game.html";
  }, 800);
});
// }
