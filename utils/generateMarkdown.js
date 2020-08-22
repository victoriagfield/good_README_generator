// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description: <hr>
   ${data.description}\n

  ## How it's used: <hr>
   ${data.usage}\n

  ## License: <hr>
   ${data.license}\n

   ## Installation: <hr>
   ${data.installation}\n

  ## Creator Name: <hr>
   ${data.name}\n

  ## Creator E-mail: <hr>
   ${data.email}\n

  ## GitHub Name: <hr>
   ${data.github}\n

  ## GitHub URL: <hr>
   ${data.url}\n

  ## Contributors: <hr>
   ${data.contributor}\n

`;}

module.exports = generateMarkdown;
