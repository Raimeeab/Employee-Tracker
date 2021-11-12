// Require startMenu & DisplayArt functions
const { startMenu } = require('./utlis/query.js');
const { displayArt } = require('./utlis/displayArt.js');

// Set Port environment to variable PORT OR to 3001 if there's nothing there
const PORT = process.env.PORT || 3001;

const init = () => {
    displayArt();
    startMenu();
}
init();

// // Additional funcitons
// moreChoices = () => {
//     inquirer.prompt({
//         type: "list",
//         name: "moreChoice",
//         message: "More choices:",
//         choices: [ "Update employee managers", "View employees by manager",
//                 "View employees by departments", "Delete department, role, or employee",
//                 "View the total utlizied budget of a department", "Go back"]
//     }).then(({moreChoice}) => {
//         // Each choice will lead to a different function 
//         if(moreChoice === "Update employee managers"){

//         } else if (moreChoice === "View employees by manager"){

//         } else if (moreChoice === "View employees by departments"){

//         } else if (moreChoice === "Delete department, role, or employee"){

//         } else {
//             userPrompts();
//         }
//     })
// };
