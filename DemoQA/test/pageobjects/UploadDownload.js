const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;


class uploadDownload
{
    async UploadDownload()
    {

        await Code.elementScroll.scrollIntoView();
        await browser.pause(2000);
        await Code.clickElement.click();
        await browser.pause(2000);
        await $("//*[text()='Upload and Download']").scrollIntoView();
        await $("//*[text()='Upload and Download']").click();
        await browser.pause(2000);
        await $("#downloadButton").click();
        await browser.pause(2000);
        // let fileupload = await $("uploadFile");
        // fileupload.setValue("C:\\webdriverio\\1.txt");
        // await browser.pause(10000);

    }
}

module.exports = new uploadDownload();

