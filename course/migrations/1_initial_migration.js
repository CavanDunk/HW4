const Migrations = artifacts.require("./Migrations.sol");
const course = artifacts.require("./Courses.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
   deployer.deploy(course);
};
