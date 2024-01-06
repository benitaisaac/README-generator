// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// TODO: create generate README function that is destructured 
const generateREADME = ({ title, description, installation, usage, license, contribution, test, questions }) =>
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
## How to Contribute
    ${contribution}
## Tests
    ${test}
## Questions
    ${questions}`;

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
      choices: ['MIT', 'GNU General Public', 'Creative Commons', 'Mozilla Public'],
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
      name: 'questions',
      message: 'Enter your GitHub username',
    },
    // {
    //   type: 'input',
    //   name: 'questions',
    //   message: 'Enter your email',
    // },
  ];


inquirer
  .prompt(questions)


// TODO: Create a function to write README file
// function writeToFile( 'README.md', data) {}

.then((answers) => {
    // const readme = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );

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
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
//      Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README 
//      entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
