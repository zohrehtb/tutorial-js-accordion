function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);



    //  define public methods
    this.init = function() {

        var acc_li , acc_ul , acc_header , acc_body , acc_p;

        acc_ul = this.targetElement.querySelector("ul");

        acc_li = this.targetElement.querySelectorAll("li");
        acc_header = this.targetElement.querySelectorAll("div.header");
        acc_body = this.targetElement.querySelectorAll("div.body");
        acc_p = this.targetElement.querySelectorAll("p");

/*
        console.log(acc_ul);
*/
        
        acc_ul.classList.add("jsacc-list");


        acc_li.forEach(function (elemnet) {
            elemnet.classList.add("jsac-list-item");
        });

        acc_header.forEach(function (elemnet) {
            elemnet.classList.add("jsac-header");
        });

        acc_body.forEach(function (elemnet) {
            elemnet.classList.add("jsac-body");
        });

        acc_p.forEach(function (elemnet) {
            elemnet.classList.add("jsac-p");
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