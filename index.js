// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  tests,
  questions,
}) => `# ${title}
---
## Description
${description}

## Table of Contents
* Installation
* Usage
* Licenses
* Contributions
* Tests
* Questions 

## Installation
${installation}

## Usage
${usage}

## Licenses
${license}

## Contributions
${contributions}

## Tests
${tests}

## Questions
${questions}`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message:
        'What was your motivation? Why did you build this project? (Note: the answer is not "Because it was a homework assignment.) What problem does it solve? What did you learn? What makes your project stand out?',
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use.Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:```md ![alt text](assets/images/screenshot.png) ```",
    },
    {
      type: "input",
      name: "license",
      message:
        "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)",
    },
    {
      type: "input",
      name: "contributions",
      message:
        "List your collaborators along with any available GitHub profiles.",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide examples on how to run tests here.",
    },
    {
      type: "input",
      name: "questions",
      message: "Any questions along the way?",
    },
  ])
  .then((answers) => {
    const markdownFileContent = generateMarkdown(answers);

    fs.writeFile('READ-ME.MD', markdownFileContent, (err) =>
      err ? console.log(err) : console.log("Successfully created READ-ME.MD file!")
    );
  });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
