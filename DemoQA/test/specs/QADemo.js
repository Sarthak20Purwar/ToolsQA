const Data = require("../Utility/data");
const Code = require("../Utility/locators");
const expectChai = require('chai').expect;
const SETUP = require("../pageobjects/SetUp");
const TEXTBOX = require("../pageobjects/TextBox");
const CHECKBOX = require("../pageobjects/Checkbox");
const RADIO = require("../pageobjects/Radio");
const TABLE = require("../pageobjects/Table");
const BUTTONCLICK = require("../pageobjects/ButtonClick");
const LINKS = require("../pageobjects/Links");
const BROKEN = require("../pageobjects/BrokenImageLink");
const UPLOAD = require("../pageobjects/UploadDownload");
const BROWSERWINDOW = require("../pageobjects/BrowserWindows");
const FORM = require("../pageobjects/form");
const ALERTS = require("../pageobjects/Alerts");
const FRAMES = require("../pageobjects/frames");
const SELECTMENU = require("../pageobjects/Selectmenu");










describe('QADemo' , async()=>
{
  
    it("Element" , async()=>
    {
        await SETUP.Setup();
        await TEXTBOX.Textbox();
        await CHECKBOX.Checkbox();
        await RADIO.Radio();
        await TABLE.Table();
        await BUTTONCLICK.buttonClick();
        await LINKS.Links();
        //await BROKEN.Broken();
        //await UPLOAD.UploadDownload();
   })

    it("Form" , async()=>
    {
        await SETUP.Setup();
        await FORM.Form();
        
    })

    it("Alert Window" , async()=>
    {
        await SETUP.Setup();
        await BROWSERWINDOW.Browserwindow();
        await ALERTS.Alerts();
        await FRAMES.Frames();

        
    })
    


   it("Widgets" , async()=>
   {

      await SETUP.Setup();
      await SELECTMENU.Selectmenu();

  

    


   })


      



})



 
 












