// dat GUI instance
let gui;

// Setting values for dat GUI
const HidukeinnOptionsDefault = {};
const HidukeinnOptions = new Object();

const utilities = {
  Init: () => {
    initializeSettings();
  },
  Download: () => {
    saveImage();
  },
};

const prepareDatGUI = (opt) => {
  gui = new dat.GUI({ closeOnTop: true });
  const optionFolder = gui.addFolder('Options');

  // Set initial values
  HidukeinnOptionsDefault.width = opt.width;
  HidukeinnOptionsDefault.belonging1 = opt.belonging1;
  HidukeinnOptionsDefault.belonging2 = opt.belonging2;
  HidukeinnOptionsDefault.date = opt.date;
  HidukeinnOptionsDefault.name = opt.name;
  HidukeinnOptionsDefault.fill = opt.fill;
  initializeSettings();

  const step = 1;
  optionFolder.add(HidukeinnOptions, 'belonging1');
  optionFolder.add(HidukeinnOptions, 'belonging2');
  optionFolder.add(HidukeinnOptions, 'date');
  optionFolder.add(HidukeinnOptions, 'name');
  optionFolder.add(HidukeinnOptions, 'fill');
  optionFolder.open();

  //  -- Utilities
  gui.add(utilities, 'Download');
};

// Initialize with default values
const initializeSettings = () => {
  HidukeinnOptions.belonging1 = HidukeinnOptionsDefault.belonging1;
  HidukeinnOptions.belonging2 = HidukeinnOptionsDefault.belonging2;
  HidukeinnOptions.date = HidukeinnOptionsDefault.date;
  HidukeinnOptions.name = HidukeinnOptionsDefault.name;
  HidukeinnOptions.fill = HidukeinnOptionsDefault.fill;
  gui.updateDisplay();
};
