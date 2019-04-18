var Courses = artifacts.require('./Courses.sol')
contract('Courses', function(accounts) {
  it("should assert true", function(done) {
    var age = 12
    var fname = "Be"
    var lname = "Curvy"
    var course = Courses.deployed();
    course.then(function(contract){ return contract.setInstructor.call();
    }).then(function(result) {
    assert.isTrue(true);
    done();
    })
  });
});
