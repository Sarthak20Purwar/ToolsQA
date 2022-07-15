const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class selectmenu
{
    async Selectmenu()
    {


        await Code.widgets.scrollIntoView();
        await Code.widgets.click();
        await browser.pause(2000);
        await expectChai(await Code.selectmenu.isDisplayed()).to.equal(true);
        await Code.selectmenu.scrollIntoView();
        await Code.selectmenu.click();
        await browser.pause(2000);
        await Code.firstmenu.click();
        await Code.firstoption.click();
        await Code.secondmenu.click();
        await Code.secondoption.click();
        await browser.pause(2000);
        await Code.thirdmenu.click();
        await Code.thirdoption.click();
        
        await Code.multimenu.scrollIntoView();
        await Code.multimenu.click();
        await browser.keys("\uE007"); 
        await browser.keys("\uE007"); 
        await browser.pause(2000);


    }
}

module.exports = new selectmenu();