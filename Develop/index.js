// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

const {renderLicenseBadge} = require('./utils/generateMarkdown.js');

// create generate README function that is destructured 
const generateREADME = ({ title, description, installation, usage, license, contribution, test, questions1, questions2}) =>
// User input project title is the title of the README
// Other user information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// TODO: add link to github profile 
// GitHub username is added to the section of the README entitled Questions, with a link to my GitHub profile
// Email addres is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    `# ${title}
## Description 
    ${description}
## Table of Contents
## Installation
    ${installation}
## Usage
    ${usage}
## License
    ${license}
${renderLicenseBadge(license)}
## How to Contribute
    ${contribution}
## Tests
    ${test}
## Questions
  Contact me at ${questions2} if you have any other questions. Github: 
[${questions1}](${questions1})
    `;
  
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
      choices: ['MIT', 'GPL v3', 'CC0-1.0', 'MPL 2.0'],
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
function init() {}

// Function call to initialize app
init();


//Acceptance Criteria: 
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README 
//      entitled License that explains which license the application is covered under






// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
