pragma solidity ^0.5.0;


contract HelloEthSalon {
  string message = "Hello Carlin";
	
	function GetMessage() public view returns (string memory) {
		return message;
	}
}
