const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class checkbox
{

   async Checkbox()
   {

    await Code.checkbox.scrollIntoView();
    await Code.checkbox.click();
    await browser.pause(2000);
    await expectChai(await Code.home.isDisplayed()).to.equal(true);
    await Code.home.click();
    await Code.desktop.click();
    await Code.notes.click();
    await browser.pause(2000);
    await Code.documents.click();
    await Code.workspace.click();
    await browser.pause(2000);
    await Code.downloads.scrollIntoView();
    await Code.downloads.click();
    await Code.wordfile.click();
    await browser.pause(2000);
    await expectChai(await Code.result.isDisplayed()).to.equal(true);
   

   }


}


module.exports = new checkbox();


