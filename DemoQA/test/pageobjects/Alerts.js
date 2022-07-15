const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class alerts {

   async Alerts()
   {

    await Code.alerts.scrollIntoView();
    await Code.alerts.click();
    await browser.pause(2000);

    await Code.alertbutton.click();
    expectChai(await browser.isAlertOpen()).to.be.true;
    await browser.acceptAlert();
    await browser.pause(2000);

    await Code.timealert.scrollIntoView();
    await Code.timealert.click();
    await browser.pause(6000);
    expectChai(await browser.isAlertOpen()).to.be.true;
    await browser.acceptAlert();

    await Code.confirmBtn.click();
    await browser.pause(2000);
    expectChai(await browser.isAlertOpen()).to.be.true;
    await browser.pause(2000);
    await browser.acceptAlert();

    await Code.promtButton.scrollIntoView();
    await Code.promtButton.click();
    await browser.sendAlertText(Data.name2);
    await browser.acceptAlert();
    await browser.pause(2000);


   }

}


module.exports = new alerts();