const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let managerHTML ="";
let engineerHTML = "";
let internHTML = "";

const newEmployee =() => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add a new employee?',
            default: false
        }]).then(function (response){
            console.log(response.confirmNewEmployee)
            if (response.confirmNewEmployee) {
                questions() 
            }
            else {
               var HTML= generatePage(managerHTML, engineerHTML, internHTML)
                console.log(HTML);
                fs.writeFile("index.html", HTML,(err)=>{
                   if (err) throw err;
                })
            }
        })
}
// Questions for user input
const questions = () => {
inquirer.prompt([
    
    {
        type: 'input',
        name: 'newEmployeeName',
        message: `What is the Employee's name?`
    },
    {
        type: 'input',
        name: 'newEmployeeId',
        message: `What is their employee ID?`
    },
    {
        type: 'input',
        name: 'newEmployeeEmail',
        message: `What is their email address?`
    },
    {
        type: 'list',
        name: 'newEmployeeRole',
        message: `What is their role in the company?`,
        choices: ['Manager', 'Engineer', 'Intern']
    }
]).then((answers) => {
    switch (answers.newEmployeeRole) {
        case "Manager":
            addManager(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
            break;
        case 'Engineer':
            addEngineer(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
            break;
        case 'Intern':
            addIntern(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
            break;
    };   
});
};

const addManager = (name, id, email, officeNumber) => {
inquirer.prompt([
    {
        type: 'input',
        name: 'officeNumber',
        message: `Please enter the manager's office number`
    }
])
.then(response => {
    let newManager = new Manager(name, id, email, response.officeNumber);
      managerHTML += `<div class="card col-3">
          <div class="card-title bg-primary">
            <h2>Team Manager</h2>
          </div>
          <div class="card-text">
            <p>Name: ${newManager.name}</p>
            <p>Email:<a href="mailto://${newManager.email}">${newManager.email}</a></p>
            <p>ID: ${newManager.id}</p>
            <p>Office: ${newManager.officeNumber}</p>
          </div>
        </div>
        `;
       newEmployee();


})
};

const addEngineer = (name, id, email, github) => {
inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's github.`
    }
])
.then(response => {
    let newEngineer = new Engineer(name, id, email, response.github);
        engineerHTML += `<div class="card col-3">
        <div class="card-title bg-primary">
          <h2>Engineer</h2>
        </div>
        <div class="card-text">
          <p>Name: ${newEngineer.name}</p>
          <p>Email:<a href="mailto://${newEngineer.email}">${newEngineer.email}</a></p>
          <p>ID: ${newEngineer.id}</p>
          <p>GitHub: ${newEngineer.github}</p>
        </div>
      </div>
      `;
       newEmployee();
})
};

const addIntern = (name, id, email, school) => {
inquirer.prompt([
    {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school`
    }
])
.then(response => {
    let newIntern = new Intern(name, id, email, response.school);
        internHTML += `<div class="card col-3">
          <div class="card-title bg-primary">
            <h2>Intern</h2>
          </div>
          <div class="card-text">
            <p>Name: ${newIntern.name}</p>
            <p>Email:<a href="mailto://${newIntern.email}">${newIntern.email}</a></p>
            <p>ID: ${newIntern.id}</p>
            <p>School: ${newIntern.school}</p>
          </div>
        </div>
        `;
       newEmployee();
})
};

questions();