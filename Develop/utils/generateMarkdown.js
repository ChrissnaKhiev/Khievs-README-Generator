// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  - [Badges](#badges)\n
  - [Features](#features)\n
  - [Contribute](#contribute)\n
  - [Tests](#tests)\n
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## Badges
  ![${data.repo}](https://img.shields.io/github/languages/count/${data.user}/${data.repo}?style=plastic)
  ![${data.repo}](https://img.shields.io/github/languages/top/${data.user}/${data.repo}?style=plastic)
  ## Features
  ${data.features}
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
`;
}

module.exports = {generateMarkdown};
