let myBelong1 = "--所属1--";
let myBelong2 = "xxx所属2xxx";
let myName = "【名前】";

//////////////////////////////////
const canvasSize = 360;
const diameter = canvasSize * 0.9;
const hankoColor = "#d94236";

function setup() {
  createCanvas(canvasSize, canvasSize);
  stroke(hankoColor);
  textFont("Noto Sans JP");
  textAlign(CENTER, CENTER);

  const urlSP = new URLSearchParams(window.location.search);
  // Handle Queries
  for (const [key, val] of urlSP) {
    if (key === "blng1") {
      myBelong1 = val;
    } else if (key === "blng2") {
      myBelong2 = val;
    } else if (key === "name") {
      myName = val;
    }
  }
}

function draw() {
  clear();
  noFill();
  strokeWeight(6);

  circle(width / 2, height / 2, diameter);
  const dateHeight = diameter * 0.25;
  const lineXOffset = diameter * 0.08;
  line(
    lineXOffset,
    height / 2 - dateHeight / 2,
    width - lineXOffset,
    height / 2 - dateHeight / 2
  );
  line(
    lineXOffset,
    height / 2 + dateHeight / 2,
    width - lineXOffset,
    height / 2 + dateHeight / 2
  );

  fill(hankoColor);
  strokeWeight(0);

  // Date
  textSize(50);
  text(getYYMMDD(), width / 2, height / 2);

  // Name
  textSize(60);
  const nameYOffset = height * 0.24;
  text(myName, width / 2, height / 2 + nameYOffset);

  // Belonging
  textSize(40);
  const Blg1YOffset = height * 0.33;
  text(myBelong1, width / 2, height / 2 - Blg1YOffset);
  const Blg2YOffset = height * 0.2;
  text(myBelong2, width / 2, height / 2 - Blg2YOffset);
}

// get Timestamp string
const getYYMMDD = () => {
  const now = new Date();
  let retVal = "'";

  // YYMMDD
  retVal += now.getFullYear().toString().slice(-2) + "/";
  retVal += padZero2Digit(now.getMonth() + 1) + "/";
  retVal += padZero2Digit(now.getDate());

  return retVal;
};
