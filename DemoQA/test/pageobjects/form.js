const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class form
{
    async Form()
    {

        await Code.form.scrollIntoView();
        await Code.form.click();
        await browser.pause(2000);
        await Code.practiceForm.click();
        await expectChai(await Code.firstName1.isDisplayed()).to.equal(true);
        await Code.firstName1.setValue(Data.firstname1);
        await Code.lastName1.setValue(Data.lastname1);
        await Code.useremail1.setValue(Data.email1);
        await Code.radiof.click();
        await Code.number1.setValue(Data.mobno);
        await Code.dob.scrollIntoView();
        await Code.dobcal.click();
        await Code.month.click();
        await Code.july.click();
        await Code.year.click();
        await Code.yearf.click();
        await Code.date.click();
        await browser.pause(2000);
        await Code.hobbiesf.scrollIntoView();
        await Code.sports.click();
        await Code.currAddres1.setValue(Data.curraddress1);
        await browser.pause(2000);
   
    }
}

module.exports = new form();