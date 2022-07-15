
const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class setup
{
    async Setup()
    {

    await browser.url(Data.url);
    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("ToolsQA"); 
    expectChai(await Code.picassert.isDisplayed()).to.equal(true);  
    await browser.pause(2000);
    await browser.fullscreenWindow();
        

    }
}

module.exports = new setup();