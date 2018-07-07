var size = 8;
var linePlace = 1;
var lineNum = 1;
var lastChar = "#";
var line = "";
var fullBoard = "";

while(lineNum < size + 1){ // continue creating lines until you have full board size

  while (linePlace < size + 1){ // create one line
    line = line + lastChar;
    if (lastChar === "#"){ // switch character in line
      lastChar = " ";
    }
    else {
      lastChar = "#";
    }
    linePlace += 1;
  }

  if (lastChar === "#"){ // switch what line starts with
    lastChar = " ";
  }
  else {
    lastChar = "#";
  }

  linePlace = 1;
  fullBoard = fullBoard + line + "\n";
  lineNum += 1;
  line = "";
}
  console.log(fullBoard);
