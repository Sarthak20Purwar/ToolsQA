const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;

class broken
{
    async Broken()
    {
        await Code.elementScroll.scrollIntoView();
        await browser.pause(2000);
        await Code.clickElement.click();
        await browser.pause(2000);
        await $("//*[text()='Broken Links - Images']").scrollIntoView();
        await $("//*[text()='Broken Links - Images']").click();
        await browser.pause(2000);
    
        const links = $$('a');
        const urls = links.map(links.getattribute('href'));
        urls.forEach(url=> 
            console.log(url));
    }


}

module.exports = new broken();