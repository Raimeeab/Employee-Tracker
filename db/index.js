const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection
    };

    viewDepartments(){
        return this.connection.promise().query("SELECT * FROM departments;");
    };

    viewRoles(){
        return this.connection.promise().query("SELECT * FROM roles;");
    };

    viewEmployees(){
        let strQuery = `SELECT employees.id, employees.first_name, employees.last_name, roles.title  
                        FROM employees
                        JOIN roles
                        ON employees.role_id = roles.id;`
        return this.connection.promise().query(strQuery);
    };

    createDepartment(department){
        console.log(`About to insert ${department} into department table`);
        let strQuery = `INSERT INTO departments (department_name) 
                            VALUES ("${department}");`;
        return this.connection.promise().query(strQuery);
    };

    createRole(role){
        console.log(`About to insert ${role} into roles table`);
        let strQuery = `INSERT INTO roles (id, title, salary, department_id) 
                            VALUES (${role.id}, "${role.role}", ${role.salary}, ${role.departmentId});`;
        return this.connection.promise().query(strQuery);
    };

    getManagers(){
        let strQuery = `SELECT id, first_name, last_name, role_id 
                            FROM employees WHERE manager_id IS NULL;`
        return this.connection.promise().query(strQuery);
    };

    createEmployee(employee){
        let strQuery = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
                        VALUES ("${employee.first}", "${employee.last}", ${employee.roleId}, ${employee.managerId});`;
        return this.connection.promise().query(strQuery);
    };

    updateEmployeeDb(selectedEmployee, newRole){
        let strQuery = `UPDATE employees SET role_id=${newRole.roleId}
                            WHERE id=${selectedEmployee.employeeId};`
        return this.connection.promise().query(strQuery);
    };
    
    deleteDepartment(){
        console.log("Reached index.js")
        let strQuery = `DELETE FROM departments WHERE id = ${pickedDepartment.departmentId}`
        return this.connection.promise().query(strQuery)
    }

};

module.exports = new DB(connection);

