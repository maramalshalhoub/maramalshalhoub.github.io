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
var currentX = [];
var currentO = [];
var flag = true;
var checkWin = 0;

$(".ticTac").one("click", function(event) {
  // console.log(event.target.id);

  if (flag) {
    $(event.target).addClass("x");

    if ($(this).hasClass("x")) {
      checkWin++;

      if (currentX.length >= 3) {
        check(currentX, winArray);
      }
      currentX.push(event.target.id);
    }
    flag = !flag;
    check(currentX, "X");
  } else {
    $(event.target).addClass("o");

    if ($(this).hasClass("o")) {
      checkWin++;

      if (currentO.length >= 3) {
        check(currentO, winArray);
      }
      currentO.push(event.target.id);
    }
    flag = true;
    check(currentO, "O");
  }
});

function check(array, winner) {
  // console.log(arr, "x");
  var turn = array.sort();
  console.log("X: ", currentX);
  console.log("O: ", currentO);
  // debugger;
  for (var k = 0; k < winArray.length; k++) {
    var arrayJoin = winArray[k].join();
    for (var i = 0; i <= 3; i++) {
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

        alert(`Player ${winner} won`);
        turn = turn.slice(i, i + 3);
        // turn = turn.join();
        console.log(turn);
        return;
      }
      if (turn == arrayJoin) {
        // debugger;
        alert(`Player ${winner} won`);
        return;
      }
    }
  }
}
