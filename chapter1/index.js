Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abiDefinition = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validateCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidatesList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"candidatesNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
VotingContract = web3.eth.contract(abiDefinition);

contractInstance = VotingContract .at('0x706549f262d39d99da5d8c6a00c4011c14d8d716');
candidates ={"Rama" : "candidate-1","Nick" : "candidate-2","Jose" : "candidate-3"};

function voteForCandidate(candidate){
  candidateName = $("#candidate").val();
  contractInstance.voteForCandidate(candidateName,{from:web3.eth.accounts[0],gas:4700000},
  	function(){
  		let div_id= candidates[candidateName];
  		$("#"+div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  	});
}


$(document).ready(function(){
	candidatesNames = Object.keys(candidates);
	for (var i = 0; i < candidatesNames.length; i++) {
		let name = candidatesNames[i];
		let val = contractInstance.totalVotesFor.call(name).toNumber();
		$("#",candidates[name]).html(val);
	}
});

