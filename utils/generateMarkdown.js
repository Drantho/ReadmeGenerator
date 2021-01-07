// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `![${license}](${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return `www.${license}.com`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return license;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  -------------------------------------------------------------------------------\n
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
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
  Email me at ${data.email} with any questions. \n
  -------------------------------------------------------------------------------\n
  ## License
  ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)} \n
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
