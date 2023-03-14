class Product {
  constructor(pcode, pname, pstock, pprice) {
    this.productCode = pcode;
    this.productName = pname;
    this.stock = pstock;
    this.price = pprice;
  }

  getStock() {
    return this.stock;
  }

  disp() {
    console.log(`Product Code  : ${this.productCode}`);
    console.log(`Product Name  : ${this.productName}`);
    console.log(`Product Stock : ${this.stock}`);
    console.log(`Product Price : ${this.price}`);
  }
}

class Activity extends Product {
  constructor(pcode, pname, pstock, pprice, cname, sold, amt) {
    super(pcode, pname, pstock, pprice);
    this.customerName = cname;
    this.soldQuantity = sold;
    this.totalAmount = amt;
  }

  sales() {
    var temp = 0;
    temp = this.stock - this.soldQuantity;

    if (this.stock == 0) {
      console.log("Out of stock.!");
      this.totalAmount=0;
    } else if (temp <= 0) {
      this.totalAmount = this.price * this.stock;
      console.log(`Only few stock is there sorry for inconvinence.`);
      this.stock = 0;
    } else {
      this.totalAmount = this.soldQuantity * this.price;
      console.log(`Thanks for purchasing.`);
    }
  }

  display() {
    console.log(`---------------BILL---------------------`);
    console.log(`Name              : ${this.customerName}`);
    console.log(`Product code      : ${this.productCode}`);
    console.log(`Quantity          : ${this.soldQuantity}`);
    console.log(`Price per product : ${this.price}`);
    console.log(`Total             : ${this.totalAmount}`);
  }
}

var pro = new Activity(1, "oreo", 0, 5, "Selva", 25);
pro.disp();
pro.sales();
pro.display();
console.log(`---------------END---------------------`);
pro.disp();
