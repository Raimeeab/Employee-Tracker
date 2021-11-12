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
        let strQuery = `INSERT INTO departments (department_name) VALUES ("${department}");`;
        return this.connection.promise().query(strQuery);
    };

    createRole(role){
        console.log(`About to insert ${role} into roles table`);
        let strQuery = `INSERT INTO roles ("${role.title}", ${role.salary}, ${role.departmentId});`;
        return this.connection.promise().query(strQuery);
    }

};

module.exports = new DB(connection);

