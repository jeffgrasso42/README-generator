// get license badge for license
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla Public License 2.0': 
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'Apache license 2.0': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'The Perl License': 
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(
  // destructure argument
  { 
    title,
    description,
    install,
    usage,
    contribute,
    test,
    license
  }
) {
  return `# ${title}

  ${renderLicenseBadge(license)}

## Description

  ${description}

## Installation

  ${install}

## Usage

  ${usage}

## License

  ${renderLicenseSection(license)} ${renderLicenseLink(license)}

## How to Contribute

  ${contribute}

## Tests

  ${test}

`;
}

module.exports = generateMarkdown;
