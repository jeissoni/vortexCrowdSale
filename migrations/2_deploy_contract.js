const crowdSale = artifacts.require("TressCrowdsale");


module.exports = function (deployer) {



    const duration = {
        seconds:    function (val) { return val; },
        minutes:    function (val) { return val * this.seconds(60); },
        hours:      function (val) { return val * this.minutes(60); },
        days:       function (val) { return val * this.hours(24); },
        weeks:      function (val) { return val * this.days(7); },
        years:      function (val) { return val * this.days(365); },
      };
      

    const latestTime = (new Date).getTime();  

    const _rate             = 400;
    const _wallet           = '0x7fF4cA4CB65b20Eb73868E27FeeD99c5a6d287A4';
    const _openingTime      = latestTime + duration.minutes(2);
    const _closingTime      = _openingTime + duration.hours(1);
    const _token            = '0x7B567c67d4b03920462F8704a4Fb1c881b74B667';


    deployer.deploy(crowdSale,_rate,_wallet,_openingTime,_closingTime,_token );
};
