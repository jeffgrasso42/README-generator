// get license badge for license
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla Public License 2.0': 
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    case 'Apache license 2.0': 
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    case 'MIT': 
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    case 'The Perl License': 
      return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
    default:
      return '';
  }
}

// get license link for license
function renderLicenseLink(license) {
  switch (license) {
    case 'Mozilla Public License 2.0': 
      return `(https://opensource.org/licenses/MPL-2.0)`
    case 'Apache license 2.0': 
      return `(https://opensource.org/licenses/Apache-2.0)`
    case 'MIT': 
      return `(https://opensource.org/licenses/MIT)`
    case 'The Perl License': 
      return `(https://opensource.org/licenses/Artistic-2.0)`
    default:
      return '';
  }
}

// get license section content for license
function renderLicenseSection(license) {
  if (license === 'none') return 'N/A';
  else return `This application uses the ${license}`;
}

// markdown for README
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

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation

  ${install}

## Usage

  ${usage}

## License

  ${renderLicenseSection(license)} ${renderLicenseLink(license)}

## Contribute

  ${contribute}

## Tests

  ${test}

`;
}

module.exports = generateMarkdown;
