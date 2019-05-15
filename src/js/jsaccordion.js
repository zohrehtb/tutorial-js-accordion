function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);



    //  define public methods
    this.init = function() {

        var accordionLi , accordionUl , accordionHeader , accordionBody;

        accordionUl = this.targetElement.querySelector("ul.list");

        accordionLi = this.targetElement.querySelectorAll("li.list-item");
        accordionHeader = this.targetElement.querySelectorAll("div.header");
        accordionBody = this.targetElement.querySelectorAll("div.body");
/*
        console.log(acc_ul);
*/

        accordionUl.classList.add("jsacc-list");


        accordionLi.forEach(function (elemnet) {
            elemnet.classList.add("jsac-list-item");
        });

        accordionHeader.forEach(function (elemnet) {
            elemnet.classList.add("jsac-header");
        });

        accordionBody.forEach(function (elemnet) {
            elemnet.classList.add("jsac-body");
        });

        
    };

    //  start construction operations
    //  if parameter is element selector
    if(typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if(this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if(typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

//  define static property to keep all instances
JSAccordion.instances = [];