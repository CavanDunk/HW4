# HW4
course contract
## INFO
This is a contract created in the following tutorial [here](https://coursetro.com/posts/code/102/Solidity-Mappings-&-Structs-Tutorial)
The following contract in the repo is an updated version of the contract in the tutorial
The contract contains the following functions
### setInstructor
This function is used to set a new instructor to an address. The instructor defined buy age, first name and last name
will be saved to the address used when calling the fucntion

### getInstructors
This function will find all the address that have an instructor that belongs to them. The function will return all of the accounts.

### getInstuctor(address _address)
This function takes in an address as a parameter and return the instructors under this address in the format age, firstname, last name

### countInstructors()
This number returns the number of instructors made

The contract was tested in remix
![remix](https://github.com/CavanDunk/HW4/blob/master/test1.png)
