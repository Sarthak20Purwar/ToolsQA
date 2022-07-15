const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class frames
{
    async Frames()
    {

        await Code.frames.scrollIntoView();
        await Code.frames.click();
        await browser.pause(2000);
        await Code.frame1.scrollIntoView();
        await browser.switchToFrame(await Code.frame1);
        await Code.assertframe1.getText();

        await browser.pause(2000);
        await browser.switchToFrame(null);
 
        await Code.frame2.scrollIntoView();
        await browser.switchToFrame(await Code.frame2);
        await Code.assertframe1.getText();
        await browser.pause(2000);
        await browser.switchToFrame(null);

    }
}

module.exports = new frames();