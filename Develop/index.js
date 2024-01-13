// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

const {generateREADME} = require('./utils/generateMarkdown.js');
  
// The array of questions that will be used with inquirer 
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Include instructions on how to use your application.',
      
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['MIT', 'GPL v3', 'CC0-1.0', 'MPL 2.0', 'none'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are your contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Share test instructions',
    },
    {
      type: 'input',
      name: 'questions1',
      message: 'Enter your GitHub username',
    },
    {
      type: 'input',
      name: 'questions2',
      message: 'Enter your email',
    },
  ];


inquirer
  .prompt(questions)


// Function to create the README
.then((answers) => {
    fs.writeFile('README.md', generateREADME(answers), (err) => {
        if (err) throw err;
        console.log('The README was created!');
    })
  });

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();