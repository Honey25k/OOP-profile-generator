const Engineer = require("../lib/Engineer");

describe("GitHub", () => {
    it("test getGithub", () => {
      const gitTest = "testGit";
      const emp = new Engineer("Honey Hun", "1", "test@test.com", gitTest);
  
      expect(emp.getGithub()).toBe(gitTest);
    });
  });

  describe("Role", () => {
    it("test getRole", () => {
      const roleTest = "Engineer";
      const emp = new Engineer("Honey Hun", "1", "test@test.com", "testGit");
  
      expect(emp.getRole()).toBe(roleTest)
    });
  });
   