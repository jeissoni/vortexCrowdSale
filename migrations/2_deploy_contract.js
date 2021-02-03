const crowdSale = artifacts.require("TressCrowdsale");


module.exports = function (deployer) {
  deployer.deploy(crowdSale);
};
