// Require startMenu & DisplayArt functions
const { startMenu } = require('./utlis/main.js');
const { displayArt } = require('./utlis/displayArt.js');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

const init = () => {
    displayArt();
    startMenu();
}
init();
