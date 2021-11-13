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
        return this.connection.promise().query("SELECT * FROM employees;");
    };

    createDepartment(department){
        console.log(`About to insert ${department} into department table`);
        let strQuery = `INSERT INTO departments (department_name) 
                            VALUES ("${department}");`;
        return this.connection.promise().query(strQuery);
    };

    createRole(role){
        console.log(`About to insert ${role} into roles table`);
        let strQuery = `INSERT INTO roles (title, salary, department_id) 
                            VALUES ("${role.role}", ${role.salary}, ${role.departmentId});`;
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

    updateEmployeeDb(){
        let strQuery = `UPDATE employees SET role_id=${newRole} WHERE id=${selectedEmployee};`
        return this.connection.promise().query(strQuery);
    };
};

module.exports = new DB(connection);

