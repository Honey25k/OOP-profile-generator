const Employee = require('../lib/Employee');

describe("Employee Object", () => {
    it("test object", () => {
        const emp = new Employee();

        expect(typeof(emp)).toBe('object');
    });
});

describe("Employee Name", () => {
    it("test getName", () => {
        const nameTest = "Honey Hun";
        const emp = new Employee(nameTest);

        expect(emp.getName()).toBe(nameTest);
    })
});

describe("Employee Id", () => {
    it("test getId", () => {
        const idTest = "1";
        const emp = new Employee("Honey Hun", idTest);

        expect (emp.getId()).toBe(idTest);
    });
});

describe("Employee Email", () => {
    it("test getEmail", () =>{
        const emailTest = "test@test.com";
        const emp = new Employee("Honey Hun", "1", emailTest);

        expect (emp.getEmail()).toBe(emailTest);
    });
});

describe("Employee Role", () => {
    it("test getRole", () => {
        const roleTest = "Employee";
        const emp = new Employee("Honey Hub", "1", "test@test.com");
    
        expect (emp.getRole()).toBe(roleTest);
    });
});