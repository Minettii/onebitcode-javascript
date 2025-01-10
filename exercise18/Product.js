class Product {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.inStock = 0;
	}
	addToStock(quantity) {
		this.inStock += quantity;
	}
	calculateDiscount(percentage) {
		return this.price - percentage * 0.01 * this.price;
		// return this.price * ((100 - percentage) / 100);
	}
}

const produto1 = new Product("Kraken 7.1", "Headset", 500);
console.log(produto1);
console.log(produto1.calculateDiscount(50));
console.log(produto1.calculateDiscount(10));
console.log(produto1.calculateDiscount(0));
console.log(produto1.calculateDiscount(100));
produto1.addToStock(123);
console.log(produto1);
