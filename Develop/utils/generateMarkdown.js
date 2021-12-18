// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](http://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is licensed under ${data.license}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Made with love by ${data.user}. If you have any questions, feel free to reach out to me at ${data.email}. Don't forget to checkout my GitHub profile/projects at https://github.com/${data.github}.
`;
}


module.exports = generateMarkdown;
