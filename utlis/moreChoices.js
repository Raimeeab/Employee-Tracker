const { end } = require('./displayArt');
const { prompt } = require('inquirer');

// db connecting to MySQL 
const db = require('../db');

// Display data in table 
require('console.table');

// Bonus choices 
const moreChoices = async () => {
    try {

        const options = [
            "Delete department", "Delete role", "Delete employee", 
            "View employees by manager", "View employees by departments",
            "Go back", 
            "Exit"
        ];
        
        const startQuestions = [{
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: options
        }];
        
        // Import startMenu function to allow user to go back to main menu
        const { startMenu } = require('./main');
        
        const answers = await prompt(startQuestions);
    
        switch(answers.choice) {

            // Switch statment to run appropriate function & go back to main page
            case "Delete department":
                await deleteDepartment();
                startMenu();
                break;
                
            case "Delete role":
                await deleteRole();
                startMenu();
                break;
                    
            case "Delete employee":
                await deleteEmployee();
                startMenu();
                break;
    
            case "View employees by manager":
                await employeeByManager();
                startMenu();
                break;
                        
            case "View employees by departments":
                await employeeByDepartment();
                startMenu();
                break;
                
            case "Go back":
                await startMenu();
                break;
    
            default: 
                // Clear terminal & display end app
                console.clear();
                end();
            return; 
        };
    } catch (err) {
        console.error("An error occurred:", err);
    };

};

// Delete a department
const deleteDepartment = async () => {
    try {

        const departments = await db.viewDepartments();
    
        const departmentChoices = departments[0].map((department) => {
            return {
                name: department.department_name,
                value: department.id
            };
        });
    
        const pickedDepartment = await prompt([
            {
                type: "list",
                name: "departmentId",
                message: "Which department would you like to delete?",
                choices: departmentChoices
            },
        ]);
    
        await db.deleteDepartment(pickedDepartment);
    
        // View departments again to show delete is successful 
        await db.viewDepartments()
        .then(([rows]) => {
            let departments = rows; 
            console.table(departments);
        });
    } catch(err) {
        console.error("An error occurred:", err);
    };
};

// Delete a role
const deleteRole = async () => {
    try {

        const roles = await db.viewRoles();
    
        const roleChoices = roles[0].map((role) => {
            return {
                name: role.title, 
                value: role.id
            }
        });
    
        const pickedRole = await prompt([
            {
                type: "list",
                name: "roleId",
                message: "Which role would you like to delete?",
                choices: roleChoices
            }
        ]);
    
        await db.deleteRole(pickedRole);
    
        await db.viewRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        });
    } catch(err) {
        console.error("An error occurred:", err)
    }

};

// Delete an employee
const deleteEmployee = async () => {
    try {

        const employees = await db.viewEmployees();
    
        const employeeChoices = employees[0].map((employee) => {
            return {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id 
            }
        });
        
        const pickedEmployee = await prompt([
            {
                type: "list",
                name: "employeeId",
                message: "Which employee would you like to delete?",
                choices: employeeChoices
            },
        ]);
    
        await db.deleteEmployee(pickedEmployee);
    
        await db.viewEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees);
        });
    } catch(err) {
        console.error("An error occurred:", err)
    };

};

// Search employees by department name
const employeeByDepartment = async () => {
    try {
        await db.employeeByDepartment()
        .then(([rows]) => {
            let viewEmployeeByDepartment = rows;
            console.table(viewEmployeeByDepartment);
        });
    } catch(err) {
        console.error("An error occurred:", err)
    }
};

//  Search employees by manager
const employeeByManager = async () => {
    try {

        const managerChoices = [];
        
        await db.getManagers()
        .then(([rows]) => {
            let managers = rows;
            managers.forEach((manager) => {
                managerChoices.push({
                    name: manager.first_name + " " + manager.last_name,
                    value: manager.id
                });
            });
        });
    
        const pickedManager = await prompt([
            {
                type: "list",
                name: "managerId",
                message: "Select the manager to see their employees:",
                choices: managerChoices
            },
        ]);
    
        await db.employeeByManager(pickedManager)
        .then(([rows]) => {
            let viewEmployeedByManager = rows;
            console.table(viewEmployeedByManager);
        });
    } catch(err) {
        console.error("An error occurred:", err);
    };
};

module.exports = { moreChoices }