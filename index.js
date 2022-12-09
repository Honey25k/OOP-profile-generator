
const inquirer = require("inquirer");
const fs = require("fs");

const TemplateHtml = require("./src/TemplateHtml");
// get paths for objects 
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const addNewPersonData = [];
// questions for employee data
const myTeamMembers = async () => {
    const answers = await inquirer.prompt([
        
        {
            type: "list",
            message: "Please select team member's role",
            choices: ["Engineer", "Intern", "Manager"],
            name: "role"
        },
        

        {
            type: "input",
            name: "name",
            message: "Please enter the name of the employee",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {

                console.log("Invalid input. Please provide valid name of employee");

                return false;
              }
            },
          },

       {
            type: "input",
            name: "id",
            message: "Please enter employee ID number",
            validate: (idInput) => {
            if (idInput) {
            return true;
            } else {
                
            console.log("Invalid ID. Please provide a valid employee ID number");

            return false;
        }
      },
    },

    {
        type: "input",
        name: "email",
        message: "Please enter the employee email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Invalid email. Please provide a valid email address");
          }
        },
      },
    
    ]);

    if (answers.role === "Manager") {
        const managerQuestions = await inquirer.prompt([
          {
            type: "input",
            name: "office",
            message: "What is your office number?",
          },
        ]);

        const addManager = new manager(
            answers.name,
            answers.id,
            answers.email,
            managerQuestions.office
          );
          addNewPersonData.push(addManager);

    } else if (answers.role === "Engineer") {
        const engineerQuestions = await inquirer.prompt([
          {
            type: "input",
            name: "github",
            message: "Please enter the member's github username",
          },
        ]);
    
        const addEngineer = new engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerQuestions.github
          );
        
          addNewPersonData.push(addEngineer);
    
        } else if (answers.role === "Intern") {

            const internQuestions = await inquirer.prompt([
                {
                  type: "input",
                  name: "school",
                  message: "Please enter the intern's school name",
                },
              ]);

            const addIntern = new intern(

            answers.name,
            answers.id,
            answers.email,
            internQuestions.school
 
           );

           addNewPersonData.push(addIntern);
        }
    };
    // when user answers all questions, ask if user wants to add another member 
    async function finalQuestions() {
        await myTeamMembers();
      
        const addQuestions = await inquirer.prompt([
          {
            type: 'list',
            name: 'addMember',
            message: 'Do you want to add another member to this team?',
            choices: ['Yes. Add new member', 'No. Team is complete'],
          },
        ]);
         // if user wants to add another member, return questions  
        if (addQuestions.addMember === 'Yes. Add new member') {
          return finalQuestions();
      
        } else {
          return teamComplete();
        };
      };
      finalQuestions();
      // will complete index.html file in dist folder. 
      function teamComplete () {
        console.log("New Team: ", addNewPersonData);
        fs.writeFileSync('./dist/index.html', TemplateHtml(addNewPersonData), "utf-8") 
      }
