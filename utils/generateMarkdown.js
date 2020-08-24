// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <hr>

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)

  <hr>

  ## Description: 
   ${data.description}\n 

   <hr>

  ## How it's used: 
   ${data.usage}\n

   <hr>

   ## Installation: 
   ${data.installation}\n

   <hr>

   ## License: 
   ${data.license}\n

   <hr>

   ## Test: 
   ${data.test}\n

   <hr>

   ## Contributors: 
   ${data.contributor}\n

   <hr>

## Questions: 
If you have any questions please contact ${data.name} via ${data.email} or on GitHub ${data.github} (https://github.com/${data.github})

`;}

module.exports = generateMarkdown;
