class Locator {

 
    //textbox
    get elementScroll()
    {
        return $("//*[text()='Elements']");
    }

    get clickElement()
    {
        return  $("//*[@class='category-cards']//div[@class='card mt-4 top-card'][1]");
    }

    get textBox()
    {
        return $("//*[text()='Text Box']");
    }

    get username()
    {
        return $("#userName");
    }

    get email()
    {
        return $("#userEmail");
    }

    get curraddress()
    {
       return $("#currentAddress");
    }

    get permaaddress()
    {
        return $("#permanentAddress");
    }

    get submit()
    {
        return $("#submit");
    }

    get output1()
    {
        return $("#output");
    }
   
    //checkbox
    get checkbox()
    {
        return $("//*[text()='Check Box']");
    }

    get home()
    {
        return $("//button[@title='Toggle']");
    }

    get desktop()
    {
        return $("//*[@for ='tree-node-desktop']//..//descendant::button");
    }

    get notes()
    {
        return $("//label[@for='tree-node-notes']//child::span[1]");
    }

    get documents()
    {
        return  $("//*[@for ='tree-node-documents']//..//descendant::button");
    }

    get workspace()
    {
        return $("//label[@for='tree-node-workspace']//child::span[1]");
    }
    
    get downloads()
    {
        return $("//*[@for ='tree-node-downloads']//..//descendant::button");
    }

    get wordfile()
    {
        return $("//label[@for='tree-node-wordFile']//child::span[1]");
    }

    get result()
    {
        return $("#result");
    }

    //radioButton
    get radioButton()
    {
        return $("//*[text()='Radio Button']");
    }

    get impressiveradio()
    {
        return $("//*[@for = 'impressiveRadio']");
    }

    get success()
    {
        return $(".text-success");
    }

    //table
    get webTables()
    {
        return $("//*[text()='Web Tables']");
    }
    get edit()
    {
        return $("#edit-record-1");
    }

    get firstName()
    {
        return $("#firstName");
    }

    get lastName()
    {
        return $("#lastName");
    }

    get userEmail()
    {
        return $("#userEmail");
    }

    get age()
    {
        return $("#age");
    }
    
    get salary()
    {
        return $("#salary");
    }

    get department()
    {
        return $("#department");
    }

    get submit()
    {
        return $("#submit");
    }

    get addrow()
    {
        return $("#addNewRecordButton");
    }

    //button
    get button()
    {
        return $("//*[text()='Buttons']");

    }

    get doubleClick()
    {
        return $("#doubleClickBtn");
    }

    get doubleclickmsg()
    {
        return $("#doubleClickMessage");
    }

    get rightclick()
    {
        return $("#rightClickBtn");
    }

    get rightClickmsg()
    {
        return $("#rightClickMessage");
    }

    get clickme()
    {
        return $("//button[text()='Click Me']");
    }

    get clickmsg()
    {
        return  $("#dynamicClickMessage");
    }

    //Links

    get link()
    {
        return $("//*[text()='Links']");
    }

    get home1()
    {
        return $("#simpleLink");
    }

    get assert1()
    {
        return $("//a[@href='https://demoqa.com']");
    }


    get home2()
    {
        return $("#dynamicLink");
    }

    get assert2()
    {
        return $("//a[@href='https://demoqa.com']");
    }


    get alertframe()
    {
        return $("//*[@class='category-cards']//div[@class='card mt-4 top-card'][3]");
    }

    get browserWindow()
    {
        return $("//*[text()='Browser Windows']");
    }

    get tabbutton()
    {
        return $("#tabButton");
    }

    get asserthead()
    {
        return $("#sampleHeading");
    }

    get windowButton()
    {
        return $("#windowButton");
    }

    get msgWindowButton()
    {
        return $("#messageWindowButton");
    }


    get form()
    {
        return $("//*[@class='category-cards']//div[@class='card mt-4 top-card'][2]");
    }

    get practiceForm()
    {
        return $("//*[text()='Practice Form']");
    }

    get firstName1()
    {
        return $("#firstName");
    }

    get lastName1()
    {
        return $("#lastName");
    }

    get useremail1()
    {
        return  $("#userEmail");
    }

    get number1()
    {
        return $("#userNumber");
    }

    get subjects()
    {
        return $("#subjectsContainer");
    }

    get hobbies1()
    {
        return $("hobbies-checkbox-1");
    }

    get hobbies2()
    {
        return $("hobbies-checkbox-2");
    }

    get currAddres1()
    {
        return $("#currentAddress");
    }


    get alerts()
    {
        return $("//*[text()='Alerts']");
    }

    get alertbutton()
    {
        return $("#alertButton");
    }

    get timealert()
    {
        return $("#timerAlertButton");
    }

    get confirmBtn()
    {
        return $("#confirmButton");
    }

    get promtButton()
    {
        return $("#promtButton");
    }

    get frames()
    {
        return $("//*[text()='Frames']");
    }

    get frame1()
    {
        return $("#frame1");
    }

    get assertframe1()
    {
        return $("#sampleHeading");
    }

    get frame2()
    {
            return  $("#frame2");
    }

    get picassert()
    {
        return $("//img[@src='/images/Toolsqa.jpg']");
    }



    get hobbiesf()
    {
        return $("//*[@class = 'form-label' and text()='Hobbies']");
    }

    get sports()
    {
        return $("//label[@class = 'custom-control-label' and text()='Sports']");
    }


    get radiof()
    {
        return $(".custom-control-label");
    }

    get dob()
    {
        return $("#dateOfBirth-label");
    }

    get dobcal()
    {
        return $(".react-datepicker-wrapper");
    }

    get month()
    {
        return $(".react-datepicker__month-select");
    }

    get july()
    {
        return $("//option[@value='6']");
    }

    get year()
    {
        return $(".react-datepicker__year-select");
    }

    get yearf()
    {
        return $("//option[@value='1999']");
    }

    get date()
    {
             return $("//*[text()='20']");
    }
    

    get widgets()
    {
        return $("//*[@class='category-cards']//div[@class='card mt-4 top-card'][4]");
    }

    get selectmenu()
    {
        return $("//*[text()='Select Menu']");
    }

    get firstmenu()
    {
        return $("#withOptGroup");
    }

    get firstoption()
    {
        return $("//*[text()='Group 1, option 2']");
    }

    get secondmenu()
    {
        return $("#selectOne");
    }

    get secondoption()
    {
        return $("//*[text()='Mr.']");
    }

    get thirdmenu()
    {
        return $("#oldSelectMenu");
    }

    get thirdoption()
    {
        return $("//*[@value='6']");
    }

    get multimenu()
    {
        return $("//*[text()='Select...']");
    }








    


    















    














}

module.exports= new Locator()