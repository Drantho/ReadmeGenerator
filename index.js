// TODO: Include packages needed for this application
const readline = require("readline");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// TODO: Create an array of questions for user input
const questions = ["Project name: ", "Github username: ", "Email: ", "Description: ", "Installation: ", "Usage: ", "License: ", "Contributing: ", "Tests: ", "Questions: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
