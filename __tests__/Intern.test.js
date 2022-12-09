const Intern = require("../lib/Intern");

describe("Intern School", () => {
    it("test getSchool", () => {
      const schoolTest = "College of Test";
      const emp = new Intern("Honey Hun", "1", "test@tst.com", schoolTest);
  
      expect(emp.getSchool()).toBe(schoolTest);
    });
  });

  describe("Role", () => {
    it("test getRole", () => {
      const roleTest = "Intern";
      const emp = new Intern("Honey Hun", "1", "test@tst.com", "College of Test");
  
      expect(emp.getRole()).toBe(roleTest);
    });
  }); 