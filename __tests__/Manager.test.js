const Manager = require("../lib/Manager");

describe("Office Number", () => {
    it("test getOfficeNumber", () => {
      const officeTest = "01";
      const emp = new Manager("Honey Hun", "1", "test@test.com",officeTest);
  
      expect(emp.getOfficeNumber()).toBe(officeTest);
    });
  });

  describe("Role", () => {
    it("test getRole", () => {
      const roleTest = "Manager";
      const emp = new Manager("Honey Hun", "1", "test@test.com", "01");
  
      expect(emp.getRole()).toBe(roleTest);
    });
  });