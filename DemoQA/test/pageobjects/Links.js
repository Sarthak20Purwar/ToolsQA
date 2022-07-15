const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class links
{
    async Links()
    {

        await Code.link.scrollIntoView();
        await Code.link.click();
        await browser.pause(2000);
        await Code.home1.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expectChai(await Code.assert1.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await Code.home2.scrollIntoView();
        await Code.home2.click();
        await browser.pause(2000);
        const handless = await browser.getWindowHandles();
        await browser.switchToWindow(handless[1]);
        await expectChai(await Code.assert2.isDisplayed()).to.equal(true);
        await browser.pause(2000);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await browser.pause(2000);
    

    }

}

module.exports = new links();