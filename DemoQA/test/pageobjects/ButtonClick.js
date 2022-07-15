const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class buttonclick
{
    async buttonClick()
    {
        
        await  Code.button.scrollIntoView();
        await Code.button.click()
        await browser.pause(2000);
        await Code.doubleClick.doubleClick();
        await browser.pause(2000);
        await expectChai(await Code.doubleclickmsg.getText()).to.equal(Data.doubleclickmsg);
        Code.rightclick.click({ button: Data.mouseright })
        await browser.pause(2000);
        await expectChai(await Code.rightClickmsg.getText()).to.equal(Data.rightclickmsg);
        await Code.clickme.click();
        await expectChai(await Code.clickmsg.getText()).to.equal(Data.clickmemsg);
        await browser.pause(2000);

    }
}

module.exports = new buttonclick();