class Product {
    #price;
    #stock;
    constructor(name, price, stock, category,) {
      this.name=name;
      this.#price=price;
      this.category=category;
      this.#stock=stock;
      
      
    }
  
    // Setter for price
    setPrice(newPrice) {
      if (!isNaN(newPrice) && newPrice >= 0) {
        this.#price = newPrice;
      } else {
        console.error("Price cannot be negative");
      }
    }
  
     // Getter for price
     getPrice() {
        return this.#price;
      }   
  
  
    // Setter for stock
    setStock(newStock) {
      if (!isNaN(newStock) && newStock >= 0) {
        this.#stock = newStock;
      } else {
        console.error("Stock must be a non-negative integer");
      }
    }
  
    // Getter for stock
    getStock() {
        return this.#stock;
      }
  
      displayDetials(){`Product: ${this.name}, price:$${this.#price}, this.#stock:${this.#stock}`}
  }
  
  
  
  class Electronic extends Product {
    constructor(name, price,stock, warranty,){
      super(name, price, stock, "Electronics") 
      this.warranty=warranty;
    }
    displayDetials(){
      console.log(`${this.name}, price:$${this.getPrice()}, Stock:${this.getStock()}, Warranty:${this.warranty}months`);
      }
  }
  class Clothing extends Product {
    constructor(name, price, stock, size){
      super(name, price, stock, "Clothing") 
      this.size=size;
    }
    displayDetials(){
      console.log(`${this.name}, price:$${this.getPrice()}, Stock:${this.getStock()}, Size:${this.size}`);
      }
  }
  class Furniture extends Product {
    constructor(name, price, stock, dimension){
      super(name, price, stock, "Furniture") 
      this.dimension=dimension;
    }
    displayDetials(){
      console.log(`${this.name}, price:$${this.getPrice()}, Stock:${this.getStock()}, Dimension:${this.dimension}`);
      }
  }
  
  class Productcatalog {
    constructor() {
      this.products=[];
  
      
    }
  
    addproduct(product){
      this.products.push(product);
      console.log(`${product.name} added to catalog`)
    }
  
    removeProduct(productName) {
      let index = this.products.findIndex(product => product.name === productName);
      if (index !== -1) {
        console.log(`${this.products[index].name} removed from catalog`);
        this.products.splice(index, 1);
      } else {
        console.log("Product not found in catalog.");
      }
    }
  
    searchProduct(productName) {
      return this.products.find(product => product.name === productName);
    }
    displayCatalog() {
      this.products.forEach(product => product.displayDetials());
      }
  }
  
  
  let catalog = new Productcatalog();
  
  let Electronics = new Electronic ("iron", 5000, 45, 36 );
  let clothing= new Clothing ( "Chanel",70, 45, "M");
  let furniture = new Furniture ( " chair", 700, 20, "20*45fts");
  
  catalog.addproduct(Electronics);
  catalog.addproduct(clothing);
  catalog.addproduct(furniture);
  
  catalog.displayCatalog()
  give=catalog.searchProduct("Chanel")
  catalog.removeProduct("iron")
  console.log(give)