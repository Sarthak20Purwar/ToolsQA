const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class browserwindow
{

    async Browserwindow()
    {

      
        await Code.alertframe.scrollIntoView();
        await Code.alertframe.click();
        await browser.pause(2000);
        await Code.browserWindow.scrollIntoView();
        await Code.browserWindow.click();
        await browser.pause(2000);
        await Code.tabbutton.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expectChai(await Code.asserthead.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await browser.pause(2000);

        await Code.windowButton.scrollIntoView();
        await Code.windowButton.click();
        await browser.pause(2000);
        const handless = await browser.getWindowHandles();
        await browser.switchToWindow(handless[1]);
        await expectChai(await Code.asserthead.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handless[0]);
        await browser.pause(2000);
        await browser.pause(2000);

        await Code.msgWindowButton.scrollIntoView();
        await Code.msgWindowButton.click();
        await browser.pause(2000);
        const handlesss = await browser.getWindowHandles();
        await browser.switchToWindow(handlesss[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handlesss[0]);
        await browser.pause(2000);
        await browser.pause(2000);

    }

}


module.exports = new browserwindow();