module.exports =(managerHTML,engineerHTML,internHTML) => {
    
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">   
   
        <title>Team Profiles</title>
      </head>
      <body>
        <center><h1 class="bg-danger">Profiles of the Team</h1>
        <div class="container">
          <div class="manager row justify-content-center">
            ${managerHTML}
          </div>
          <div class="engineer row justify-content-center">
            ${engineerHTML}
          </div>
          <div class="intern row justify-content-center">
            ${internHTML}
          </div>
        </div>
        </center>
      </body>
    </html>`
}