﻿
        var catalog = function (params) {
            this.Id = params.id;
            this.Name = params.name;
            this.Price = params.price;
            this.Type = params.type;

            this.getItem = function () {
                console.log(this.Id + ", " + this.Name + "," + this.Price + "," + this.Type);
            }
        }

var item = new catalog({
    id:'999',
    name: 'computer',
    price:30000,
    type: 'electric'
})

var item1 = new catalog({
    id: '888',
    name: 'lapy',
    price: 40000,
    type: 'electric'
})

item.getItem();
item1.getItem();

var catalog1 = function (params) {
    catalog.call(this, params);
}

catalog1.prototype = Object.create(catalog.prototype);
catalog1.prototype.constructor = catalog1;


var item3 = new catalog1({
    id: '777',
    name: 'mobile',
    price: 15000,
    type: 'electric'
})

item3.getItem();
        
       