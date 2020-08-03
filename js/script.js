function Pizza(size, toppings1, toppings2, toppings3, toppings4) {
    this.size = size;
    this.toppings1 = toppings1;
    this.toppings2 = toppings2;
    this.toppings3 = toppings3;
    this.toppings4 = toppings4;
};

Pizza.prototype.price = function () {
    var total = this.toppings1 + this.toppings2 + this.toppings3 + this.toppings4 + this.size;
    return total;
};

