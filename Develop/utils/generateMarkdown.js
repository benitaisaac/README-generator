// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// if there is a license, return a string with the link that I need
function renderLicenseBadge(license){ 
switch (license) {
  case 'MIT':
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  
  case 'GPL v3':
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`

  case 'CC0-1.0':
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  
  case 'MPL 2.0':
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/license/mit/`
    
    case 'GPL v3':
      return `https://opensource.org/license/gpl-3-0/`
  
    case 'CC0-1.0':
      return `https://creativecommons.org/publicdomain/zero/1.0/deed.en`
    
    case 'MPL 2.0':
      return `https://opensource.org/license/mpl-1-1/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${renderLicenseBadge(data.license)}
// `;
// }

const generateREADME = ({ title, description, installation, usage, license, contribution, test, questions1, questions2}) =>
// User input project title is the title of the README
// Other user information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// TODO: add link to github profile 
// GitHub username is added to the section of the README entitled Questions, with a link to my GitHub profile
// Email addres is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    `# ${title}
  ${renderLicenseBadge(license)}
    ## Description 
    ${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [How to Contribute](#contributions)
- [Questions](#questions)
## Installation
    ${installation}
## Usage
    ${usage}
## License
    ${license}
    
View the license link here: ${renderLicenseLink(license)}

## Contributions
    ${contribution}
## Tests
    ${test}
## Questions
  Contact me at ${questions2} if you have any other questions. Github: 
[${questions1}](${questions1})
    `;

// This allows us to export this file and import it into index.js
module.exports = {
  generateREADME, 
  renderLicenseBadge,
  renderLicenseLink,
};
