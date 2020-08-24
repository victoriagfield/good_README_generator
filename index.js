//global variables
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");



//a function with an array of questions for user
function promptUser() {
  return inquirer.prompt([{
    type: "input",
    message: "What is your project title?",
    name: "title"
  }, {
    type: "input",
    message: "Describe your project",
    name: "description"
  }, {
    type: "input",
    message: "How is your application used?",
    name: "usage"
  }, {
    type: "input",
    message: "How did you go about writing the code for this application?",
    name: "installation"
  }, {
    type: "input",
    message: "What is the license",
    name: "license"
  }, {
    type: "input",
    message: "How do you test this application?",
    name: "test"
  }, {
    type: "input",
    message: "Who is the Author?",
    name: "name",
  }, {
    type: "input",
    message: "Author E-mail",
    name: "email",
  }, {
    type: "input",
    message: "Who were the contributors?",
    name: "contributor"
  }, {
    type: "input",
    message: "Enter your GitHub Username",
    name: "github"
  }])
};


// function to write README file
function writeToFile(fileName, data) {
  console.log(fileName, data);

  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// function to initialize program
function init() {
  promptUser().then((answers) => {

    // expected output: "Success!"
    writeToFile("README.md", generateMarkdown(answers));
  });

}

// function call to initialize program
init();