pragma solidity^0.4.24;

contract Voting{
    //Constructor para inicializar los candidatos
    //votar pro los candidatos
    //Obetner cantidad de votos por cada candidato
    bytes32[] public candidatesList;
    mapping(bytes32 => uint8) public votesReceived; 
    
    
    constructor(bytes32[] candidatesNames) public {
        candidatesList=candidatesNames;
    }
    
    function voteForCandidate(bytes32 candidate) public {
        require(validateCandidate(candidate));
        votesReceived[candidate] += 1;
    }
    
    
    function totalVotesFor(bytes32 candidate) view public returns(uint8){
        require(validateCandidate(candidate));
        return votesReceived[candidate];
    }
    
    function validateCandidate(bytes32 candidate) view public returns(bool){
        for(uint8 i=0;i < candidatesList.length; i++){
            if(candidatesList[i] == candidate){
                return true;
            }
            return false;
        }
    }
    
}