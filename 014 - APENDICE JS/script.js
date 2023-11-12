// 1 - var, let e const

var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

i = 1000

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'João'
    console.log(name)
}

const name = 'Paulo'

logName()

console.log(name)

//função normal
const sum = function sum(a, b) {
    return a + b
}

//arrow function
const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + "!";
    } else {
        return 'Olá!'
    };
};

console.log(greeting())
console.log(greeting('Ronaldo'))

const testeArrow = () => console.log('testou!')

testeArrow()

//exemplo de this
const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }
}

// user.sayUserName()
// user.sayUserNameArrow()


//filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Cleitin', available: true },
    { name: 'Marquin', available: false },
    { name: 'Ronaldo', available: false },
    { name: 'Roberto', available: true },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)


//map

const products = [
    { name: 'Camisa', price: 999.00, category: 'Roupas'},
    { name: 'Geladeira', price: 999.00, category: 'Eletro'},
    { name: 'Porta', price: 999.00, category: 'Casa'},
    { name: 'Blusa', price: 999.00, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

//templates literals

const userName = 'Madu';
const age = 69;

console.log(`O nome de usuario é ${userName} e ela tem ${age} anos`);

// destructuring
const fruits = ['Maçã', 'Banana', 'Mamão'] //array

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Perifericos",
    color: "Blue",
}

const {name: productName, price, category: categoryName, color,} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${categoryName} e é da cor ${color}`)

//spread

const a1 = [1, 2, 3]
const a2 = [6, 5, 4]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [4, ...a1, 5]

console.log(a4)

const carName = { name: 'Gol'}
const carBrand = { brand: 'VW'}
const otherInfos = {km: 100000, price: 490000.00}

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)

// class

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Gola V', 20)

console.log(shirt.name)

console.log(`${shirt.productWithDiscount(10)} reais`)

const tenis = new Product('Tenis Asics Rosa', 200)

console.log(tenis.name)

console.log(`${tenis.productWithDiscount(10)} reais`)

//herança

class ProductWithAtributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAtributes("Chapeus", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()