//This page is a template for the markdown file that is created by answering the questions from the command line
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
  Created by ${data.user}. If you have any questions, feel free to reach out to me at ${data.email}. Don't forget to checkout my GitHub profile/projects at https://github.com/${data.github}.
`;
}


module.exports = generateMarkdown;