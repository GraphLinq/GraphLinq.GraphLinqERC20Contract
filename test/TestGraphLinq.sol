pragma solidity ^0.7.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/GraphLinq.sol";

contract TestGraphLinqAsset {


  function testInitialBalanceWithNewAsset() public {
    GraphLinq meta = new GraphLinq(msg.sender);

    uint expected = 500000000 * (10 ** 18);
    Assert.equal(meta.balanceOf(msg.sender), expected, "GraphLinq Token deployer should have 500M initially");
  }

}
