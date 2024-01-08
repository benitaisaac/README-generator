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
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
`;

}

// This allows us to export this file and import it into index.js
module.exports = {
  generateMarkdown, 
  renderLicenseBadge,
  renderLicenseLink,
};
