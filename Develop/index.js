// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');


// TODO: Change all the questions to be relevant to project
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      message: 'Include instructions on how to use your application.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['MIT', 'GNU General Public', 'Creative Commons', 'Mozilla Public'],
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Share test instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'Enter your email',
      name: 'questions',
    },
  ];

// TODO: create generate README function that is destructured 

inquirer
  .prompt(questions)


// TODO: Create a function to write README file
// function writeToFile( 'README.md', data) {}

.then((data) => {
    // const readme = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );

    fs.writeFile('README.md', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The data to append was appended to file!');
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
