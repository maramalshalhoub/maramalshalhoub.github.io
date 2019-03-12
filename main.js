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
    check(currentX, 'X');
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
    check(currentO, 'O');
  }
});

/*
function check(arr) {
  // console.log(arr, "x");
  var temp = arr.sort();
  console.log("X: ", currentX);
  console.log("O: ", currentO);
  // debugger;
  for (var k = 0; k < winArray.length; k++) {
    var arr2 = winArray[k].join();
    for (var i = 0; i <= 3; i++) {
      if (
        (currentX.includes(winArray[i][0]) &&
          currentX.includes(winArray[i][1]) &&
          currentX.includes(winArray[i][2])) ||
        (currentX.includes(winArray[i][2]) &&
          currentX.includes(winArray[i][1]) &&
          currentX.includes(winArray[i][0])) ||
        (currentX.includes(winArray[i][1]) &&
          currentX.includes(winArray[i][0]) &&
          currentX.includes(winArray[i][2])) ||
        (currentX.includes(winArray[i][2]) &&
          currentX.includes(winArray[i][0]) &&
          currentX.includes(winArray[i][1]))
      ) {
            console.log("X: ", currentX);
            console.log("O: ", currentO);

            console.log("Player X won");
            alert("Player X won");
            temp = temp.slice(i, i + 3);
            // temp = temp.join();
            console.log(temp);
            return;
      }
      if (temp == arr2) {
              // += arr[length - 1 - i][i]
              // debugger;
              console.log("Player X won");
              alert("Player X won");
              return;
      } else if (
        (currentO.includes(winArray[i][0]) &&
          currentO.includes(winArray[i][1]) &&
          currentO.includes(winArray[i][2])) ||
        (currentO.includes(winArray[i][2]) &&
          currentO.includes(winArray[i][1]) &&
          currentO.includes(winArray[i][0])) ||
        (currentO.includes(winArray[i][1]) &&
          currentO.includes(winArray[i][0]) &&
          currentO.includes(winArray[i][2])) ||
        (currentO.includes(winArray[i][2]) &&
          currentO.includes(winArray[i][0]) &&
          currentO.includes(winArray[i][1]))
        ) {
          console.log("Player O won");
          alert("Player O won");
          return;
      }
    }
  }
}
*/

function check(arr, winner) {
  // console.log(arr, "x");

  var temp = arr.sort();
  console.log("X: ", currentX);
  console.log("O: ", currentO);
  // debugger;
  for (var k = 0; k < winArray.length; k++) {
    var arr2 = winArray[k].join();
    for (var i = 0; i <= 3; i++) {
      if (
        (arr.includes(winArray[i][0]) &&
          arr.includes(winArray[i][1]) &&
          arr.includes(winArray[i][2])) ||
        (arr.includes(winArray[i][2]) &&
          arr.includes(winArray[i][1]) &&
          arr.includes(winArray[i][0])) ||
        (arr.includes(winArray[i][1]) &&
          arr.includes(winArray[i][0]) &&
          arr.includes(winArray[i][2])) ||
        (arr.includes(winArray[i][2]) &&
          arr.includes(winArray[i][0]) &&
          arr.includes(winArray[i][1]))
      ) {
            console.log("X: ", currentX);
            console.log("O: ", currentO);

            alert(`Player ${winner} won`);
            temp = temp.slice(i, i + 3);
            // temp = temp.join();
            console.log(temp);
            return;
      }
      if (temp == arr2) {
              // += arr[length - 1 - i][i]
              // debugger;
              alert(`Player ${winner} won`);
              return;
      } 
    }
  }
}
