const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class table 
{
    async Table()
    {

        await Code.webTables.scrollIntoView();
        await Code.webTables.click();
        await browser.pause(2000);
        await expectChai(await Code.edit.isDisplayed()).to.equal(true);
        await Code.edit.click();
        await browser.pause(2000);
        await Code.firstName.setValue(Data.firstname);
        await Code.lastName.setValue(Data.lastname);
        await Code.userEmail.setValue(Data.useremail);
        await Code.age.setValue(Data.age);
        await Code.salary.setValue(Data.salary);
        await Code.department.setValue(Data.department);
        await Code.submit.scrollIntoView();
        await browser.pause(2000);
        await Code.submit.click();
        await browser.pause(2000);
        await Code.addrow.click();
        await Code.firstName.setValue(Data.firstname);
        await Code.lastName.setValue(Data.lastname);
        await Code.userEmail.setValue(Data.useremail);
        await Code.age.setValue(Data.age);
        await Code.salary.setValue(Data.salary);
        await Code.department.setValue(Data.department);
        await Code.submit.scrollIntoView();
        await browser.pause(2000);
        await Code.submit.click();
        await browser.pause(2000);
    }
}

module.exports = new table();


