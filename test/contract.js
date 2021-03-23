const artifacts = require('../build/contracts/GraphLinq.json')
const contract = require('truffle-contract')

const GraphLinq = contract(artifacts);
GraphLinq.setProvider(web3.currentProvider);

const increaseAllowance = async (contract, toContract, amount, acc) => {
    return new Promise(async (cb) => {
        try {
            const res = await contract.increaseAllowance(toContract, amount, {from: acc}) 
            console.log(res)
            cb()
        } catch(e) { console.error(e) }
    })
}

const getDecimalsAmount = (amount) => {
    return amount * (10 ** 18).toFixed()
}

module.exports = async (callback) => {
    let accounts = await web3.eth.getAccounts()
    web3.eth.defaultAccount = accounts[0]
    const deployedContract = await GraphLinq.deployed()
    const amountAllowance = getDecimalsAmount(500).toString()
    console.log(amountAllowance)

    await increaseAllowance(deployedContract, "0x7d4142fAf11F9fdd5760FA868C2503FfD21CF416",
    amountAllowance, accounts[0]);

    callback();
}