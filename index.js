class ProductManager {
constructor() {
    this.products = [];
}

getProducts() {
    return this.products;
}

addProduct({ title, description, price, thumbnail, code, stock }) {
    const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
        throw new Error("El código del producto ya está en uso.");
    }

    const id = Math.random().toString(36).substr(2, 9);

    const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };

    this.products.push(newProduct);

    return newProduct;
    }

getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
        throw new Error("Producto no encontrado.");
    }
    return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

const newProduct = productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});
console.log(newProduct);
console.log(productManager.getProducts());

try {
    productManager.addProduct({
    title: "producto repetido",
    description: "Este es otro producto",
    price: 150,
    thumbnail: "Otra imagen",
    code: "abc123",
    stock: 30
    });
} catch (error) {
    console.error(error.message);
}

try {
    const productId = newProduct.id;
    const foundProduct = productManager.getProductById(productId);
    console.log(foundProduct);
} catch (error) {
    console.error(error.message);
}