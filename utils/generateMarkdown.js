const licenses = require("./licenses");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    const found = licenses.filter(licenseObj => {
      return licenseObj.name === license
    })[0].image;

    return found;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## License \n ${renderLicenseBadge(license)}`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Description\n
  ${data.description}\n
  -------------------------------------------------------------------------------\n
  ## Installation \n
  \n
  ${data.installation}\n
  -------------------------------------------------------------------------------\n
  ## Usage \n
  \n
  ${data.usage} \n
  -------------------------------------------------------------------------------\n
  ## Contributing \n
  \n
  ${data.contributing}\n
  -------------------------------------------------------------------------------\n
  ## Tests \n
  ${data.tests} \n
  -------------------------------------------------------------------------------\n
  ## Questions
  Me on github: https://github.com/${data.username} \n
  Email me at ${data.email} with any questions. \n
  -------------------------------------------------------------------------------\n
  
   ${renderLicenseSection(data.license)} \n

   ------------------------------------------------------------------------------\n
   readme automatically created with Readme Generator \n
   view on github: https://github.com/Drantho/ReadmeGenerator
`
}

module.exports = generateMarkdown;
