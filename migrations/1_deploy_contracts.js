const GraphLinq = artifacts.require("GraphLinq");

module.exports = function(deployer) {
  deployer.deploy(GraphLinq, "0xe87e9c55A720C89257302237B76CD5bA386d3819");
};
