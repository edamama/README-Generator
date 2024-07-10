// TODO: Include packages needed for this application

const fs = require('fs'); //to write file
const inquirer = require('inquirer'); //get data
const colors = require('colors'); //colors === awesome

// TODO: Create an array of questions for user input
const questions = ["What is the title of this project?" , "Give a short description of the project.", "Create a table of contents, please." ,"Let the user know how to install.", 

    "What are the steps to use this application?", "Don't forget to credit your collaborators!", "Please add the required licenses for your project.", "What is your GitHub username?"
    , "Almost over! What is your email?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
            type: "input",
            message: questions[0],
            name: "title",
            
            },

            {

            type: "input",
            message: questions[1],
            name: "description",

            },

            {
                
            type: "input",
            message: questions[2],
            name: "tableOfContents",
                
            },

            {
            
            type: "input",
            message: questions[3],
            name: "installDirections",
                
            },

            {
            type: "input",
            message: questions[4],
            name: "usageDirections",
                
            },

            {
            type: "input",
            message: questions[5],
            name: "credits",
                
            },

            {
            type: "list",
            message: questions[6],
            name: "licenses",
            choices:[
                "None",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"]
                
            },

            
            {
            type: "input",
            message: questions[7],
            name: "githubUsername",
                        
            }, 
             
            
            {
            type: "input",
            message: questions[8],
            name: "email",
                    
            },


        ])

        //.then((response) =>
            //console.log(colors.yellow("Yay thank you!")));


        }

// Function call to initialize app
init();
