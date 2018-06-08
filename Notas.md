# FirstDapp

On Mac

brew update
brew install nodejs
mkdir -p ethereum_voting_dapp/chapter1
cd ethereum_voting_dapp/chapter1
npm install ganache-cli web3@0.20.3 solc
node_modules/.bin/ganache-cli


On Windows 
Iniciamos el ganache-cli  en un shell

>ganache-cli


Iniciamos el node en otro shell

> node 

y compilamos

In the node console
> code = fs.readFileSync('Voting.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)





Para deployar le hacemos asi.



Execute this in your node console:
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
> VotingContract = web3.eth.contract(abiDefinition)     < para ganche funciona bien
> VotingContract = new  web3.eth.Contract(abiDefinition)   <--- para geth este fucniono
> byteCode = compiledCode.contracts[':Voting'].bytecode
> deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
'0x0396d2b97871144f75ba9a9c8ae12bf6c019f610' <- Your address will be different	

'0x706549f262d39d99da5d8c6a00c4011c14d8d716'   <-- and it is.  :D



----------------------------------------------------------------------------------
personal.newAccount()

"0x25b782907bc3f167fff250724a6e288089954674"
"0x25b782907bc3f167fff250724a6e288089954674"




Mi primer cuenta :)
│Address: {d330cd1d15902d54055ab3fe91514263b595bcd6}
│Address: {de822a017d797dacffa3cd4436b08eda79f88887}
│Address: {575aa4850d465bc6cf75e79c5e4cad4f43502d45}


// to use the asciiToHex utility function
asciiToHex = Web3.utils.asciiToHex;

// put array of candidates into a variable
candidates = ['Rama', 'Nick', 'Jose'];

// set first test account testrpc created into account variable
web3.eth.getAccounts().then((accounts) => { account = accounts[0] });
web3.eth.getAccounts().then((accounts) => { console.log(accounts[0]) });
web3.eth.accounts.then((accounts) => { account = accounts[0] });
web3.eth.accounts.then((accounts) => { console.log(accounts[0]) });
VotingContract.deploy({data: byteCode, arguments: [candidates.map(asciiToHex)]}).send({from:d330cd1d15902d54055ab3fe91514263b595bcd6 , gas: 4700000}).then((result) => {deployedContract = result});

----------------------------------------------------------------------------------




In your node console:
> deployedContract.totalVotesFor.call('Rama')
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
> deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
'0xdedc7ae544c3dde74ab5a0b07422c5a51b5240603d31074f5b75c0ebc786bf53'
> deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
'0x02c054d238038d68b65d55770fabfca592a5cf6590229ab91bbe7cd72da46de9'
> deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
'0x3da069a09577514f2baaa11bc3015a16edf26aad28dffbcd126bde2e71f2b76f'
> deployedContract.totalVotesFor.call('Rama').toLocaleString()
'3'

////////////////////////////////  notas about truffle 
se cambio truffle.cmd por truf.cmd  para 

>truf compile
>truf migrate  --> TO deploy

Voting.deployed()
truffle(default)> Voting.deployed().then(function(contractInstance) {contractInstance.voteForCandidate('Nick').then(function(v) {console.log(v.toNumber())})})


truffle(default)>Voting.deployed().then(function(contractInstance) {contractInstance.totalVotesFor.call('Nick').then(function(v) {console.log(v.toNumber())})})
truffle(default)> 1



Para iniciar el servidor de aplicaciones.
>npm run dev
y despues 
>webpack-dev-server


