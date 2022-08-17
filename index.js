// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  "What is your motivation?, Why did you build this project?,What problems does it solve?, What did you learn?, What makes your project stand out?",
  "Table of Contents (if necessary)",
  "What are the steps required to install this project?",
  "What will it be used for?",
  "Who would you like to credit for this project?",
  "What can/can't other developers use this project for?",
  "List all the features.",
];

inquirer
  .prompt([
    {
      type: "input",
      name: "description",
      message: questions[0],
    },
    {
      type: "input",
      name: "tableOfContents",
      message: questions[1],
    },
    {
      type: "input",
      name: "installation",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "credits",
      message: questions[4],
    },
    {
      type: "input",
      name: "license",
      message: questions[5],
    },
    {
      type: "input",
      name: "features",
      message: questions[6],
    },
  ])
  .then((data) => {
    const fileName = "README.MD";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
