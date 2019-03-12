//import './HelloEthSalon.sol'
var HelloEthSalon = artifacts.require('./HelloEthSalon.sol');

contract("HelloEthSalon:GetMessage", function(accounts) {
  it("Print a string", function(done) {
    var helloEthSalon =  HelloEthSalon.deployed();
    helloEthSalon.then(function(contract) {
      return contract.GetMessage.call();
    }).then( function(result) {
    assert.isTrue(result === "Hello Carlin");
      done();
  })
});
});