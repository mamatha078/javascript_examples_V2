﻿
        function Catalog(type) {
            this.Type = type;
        }

Catalog.prototype.gettype = function () {
    return this.Type;
}

//child class
var OsiCatalog = Object.create(Catalog)

//OsiCatalog.prototype.cat_inh

var cat1 = new Catalog("osi");
console.log(cat1.gettype());

var cat2 = new Catalog("osi");
console.log(cat2.gettype())

function getAllOsiItems(type) {
    Catalog.call(this,type);
}
getAllOsiItems.prototype = Object.create(Catalog.prototype);
getAllOsiItems.prototype.constructor = getAllOsiItems;

getAllOsiItems.prototype.gettype = function () {
    return Catalog.prototype.gettype.call(this);
}

var allosi1 = new getAllOsiItems("osi1");
console.log(allosi1.gettype());

var allosi2 = new getAllOsiItems("osi2")
console.log(allosi2.gettype());
