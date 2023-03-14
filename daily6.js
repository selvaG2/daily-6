class Product{
    constructor(pcode, pname, pstock, pprice){
        this.productCode = pcode;
        this.productName = pname;
        this.stock = pstock;
        this.price = pprice; 
    }

    getStock(){
        return this.stock;
    }


    disp() {
        console.log(`Product Code  : ${this.productCode}`);
        console.log(`Product Name  : ${this.productName}`);
        console.log(`Product Stock : ${this.stock}`);
        console.log(`Product Price : ${this.price}`);
    }
}

class Activity extends Product{

    constructor(pcode, pname, pstock, pprice, cname, sold, amt,) {
        super(pcode, pname, pstock, pprice);
        this.customerName = cname;
        this.soldQuantity = sold;
        this.totalAmount = amt;

    }

    sales(soldQuantity,totalAmount,price) {
        
        this.totalAmount = this.price * this.soldQuantity;
        this.stock = this.stock - this.soldQuantity;

        if(this.stock <0){
            this.stock == 0;
            console.log("The available quantity only sold");
        }else{
            console.log("Thanks for purchasing .");
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

var pro = new Activity(1, "oreo", 25, 5,"Selva",20);
pro.disp();
pro.sales(this.soldQuantity,this.totalAmount,this.price);
pro.display();
console.log(`---------------END---------------------`);
pro.disp();


// pro1.disp();
// pro2.disp();
// pro3.disp();
