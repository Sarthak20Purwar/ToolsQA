const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;


class textbox
{
    async Textbox()
    {

        await Code.elementScroll.scrollIntoView();
        await browser.pause(2000);
        await Code.clickElement.click();
        await browser.pause(2000);
        await Code.textBox.click();
        await browser.pause(2000);
        await expectChai(await Code.username.isDisplayed()).to.equal(true);
        await Code.username.setValue(Data.username);
        await Code.email.setValue(Data.email);
        await Code.curraddress.setValue(Data.curraddress);
        await Code.permaaddress.setValue(Data.peraddress);
        await Code.submit.scrollIntoView();
        await Code.submit.click();
        await browser.pause(2000);
        await expectChai(await Code.output1.isDisplayed()).to.equal(true);

    }
}

module.exports = new textbox();