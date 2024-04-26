
const gOptions = {
  belonging1: '--所属1--',
  belonging2: 'xxx所属2xxx',
  date: '\'24/04/27',
  name: '【名前】',
}

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

  const opt = gOptions;

  // Handle Queries
  for (const [key, val] of urlSP) {
    if (key === "blng1") {
      opt.belonging1 = val;
    } else if (key === "blng2") {
      opt.belonging2 = val;
    } else if (key === "name") {
      opt.name = val;
    } else if (key === "date") {
      opt.date = val;
    }
  }

  if(!urlSP.has('date')){
    opt.date = getYYMMDD();
  }

  // Prepare GUI
  prepareDatGUI(opt);

}

function draw() {
  const opt = gOptions;
  opt.belonging1 = HidukeinnOptions.belonging1;
  opt.belonging2 = HidukeinnOptions.belonging2;
  opt.date = HidukeinnOptions.date;
  opt.name = HidukeinnOptions.name;

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
  text(opt.date, width / 2, height / 2);

  // Name
  textSize(60);
  const nameYOffset = height * 0.24;
  text(opt.name, width / 2, height / 2 + nameYOffset);

  // Belonging
  textSize(40);
  const Blg1YOffset = height * 0.33;
  text(opt.belonging1, width / 2, height / 2 - Blg1YOffset);
  const Blg2YOffset = height * 0.2;
  text(opt.belonging2, width / 2, height / 2 - Blg2YOffset);
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
