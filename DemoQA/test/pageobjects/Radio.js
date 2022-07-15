const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class radio
{

    async Radio()
    {
      

        await Code.radioButton.scrollIntoView();
        await Code.radioButton.click();
        await browser.pause(2000);
        await expectChai(await Code.impressiveradio.isDisplayed()).to.equal(true);
        await Code.impressiveradio.click();
        await browser.pause(2000);
        await expectChai(await Code.success.isDisplayed()).to.equal(true);

    }
}

module.exports = new radio();