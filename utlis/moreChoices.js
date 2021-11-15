const inquirer = require('inquirer');
const { prompt } = require('inquirer');

const db = require('../db');
require('console.table');

const moreChoices = async () => {
    const options = [
        "Delete department", "Delete role", "Delete employee", 
        "View employees by manager", "View employees by departments",
        "Update employee managers",
        "View the total utlizied budget of a department", "Go back"
    ];
    
    const startQuestions = [{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: options
    }];
    
    const { startMenu } = require('./main');
    
    const answers = await prompt(startQuestions);

    switch(answers.choice) {
        
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
            // Clear terminal & end function
            console.clear();
            console.log("Goodbye");
        return; 
    };

};

const deleteDepartment = async () => {
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
};

const deleteRole = async () => {
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

};

const deleteEmployee = async () => {
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

};

const employeeByDepartment = async () => {
    await db.employeeByDepartment()
    .then(([rows]) => {
        let viewEmployeeByDepartment = rows;
        console.table(viewEmployeeByDepartment);
    });
};

const employeeByManager = async () => {
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
            name: "manager",
            message: "Select the manager to see their employees:",
            choices: managerChoices
        },
    ]);

    console.log(pickedManager);
    // await db.viewEmployeeByManager()
}

module.exports = { moreChoices }