const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      image: "https://example.com/images/headphones.jpg",
      price: 120.99
    },
    {
      id: 2,
      title: "Smartphone",
      description: "Latest model with high-resolution display and fast performance.",
      image: "https://example.com/images/smartphone.jpg",
      price: 799.00
    },
    {
      id: 3,
      title: "4K LED TV",
      description: "55-inch ultra HD TV with stunning picture quality.",
      image: "https://example.com/images/ledtv.jpg",
      price: 450.50
    },
    {
      id: 4,
      title: "Gaming Laptop",
      description: "Powerful gaming laptop with high-end graphics card and fast SSD.",
      image: "https://example.com/images/gaminglaptop.jpg",
      price: 1299.99
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      description: "Portable speaker with excellent sound quality and long battery life.",
      image: "https://example.com/images/speaker.jpg",
      price: 65.00
    }
  ];
  
  console.log(products);


const productCard = document.querySelector('.productCard');
console.log(productCard);
let cart = [];

products.forEach(product => {
    const  {id, title, description, image, price} = product;

    productCard.innerHTML += `
        <div class="justify-center items-center px-6 py-3 border border-b-gray-300 shadow-md shadow-gray-300">
            <div class="productImg">
                <img src="${image}" alt="${title}">
            </div>
            <div>
                <h1 class="productTitle">${title}</h1>
                <p class="productDes">${description}</p>
                <p class="productPrice">Price: $${price}</p>
                <button onclick="AddToCard(${id}, '${title}', ${price})" class="addToCart bg-gray-500 px-6 py-2 font-semibold text-white">Add to Cart</button>
            </div>
        </div>
    `;
    
    console.log(id, title, description, image, price);
});


function AddToCard(id, title, price){
    const existingProduct =cart.find( product => product.id === id);
    if (existingProduct){
        existingProduct.quantity += 1;
    }else{
        const product = {id, title, price, quantity: 1};
        cart.push(product);
        console.log(cart)
    }
    
    updateCartDisplay();
}

let discount = 0; 
const promoCodes = {
    "PROMO10": 10,  
    "PROMO20": 20,  
};

function applyPromoCode(){
    const promoCodeInput = document.getElementById('promoCodeInput').value.trim().toUpperCase();
    const discountPercentage = promoCodes[promoCodeInput];
    
    if(discountPercentage){
        discount = discountPercentage;
        alert(`Promo code applied! You got ${discount}% off.`);
    }else{
        discount = 0;
        alert('Invalid Promo code!');
    }

    updateCartDisplay();
}

document.getElementById('confirmPurchase').addEventListener('click', function() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    
    const invoiceSection = document.getElementById('invoiceSection');
    invoiceSection.classList.remove('hidden');
    
    const invoiceItemsList = document.getElementById('invoiceItemsList');
    invoiceItemsList.innerHTML = '';
    
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(product => {
        const invoiceItem = document.createElement('li');
        invoiceItem.textContent = `${product.title} - ${product.price} x ${product.quantity}`;
        invoiceItemsList.appendChild(invoiceItem);

        totalQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
    });

    document.getElementById('invoiceTotalQuantity').textContent = totalQuantity;
    document.getElementById('invoiceTotalPrice').textContent = totalPrice.toFixed(2);

    document.getElementById('printInvoice').addEventListener('click', function() {
        printInvoiceOnly();
    });
});

function printInvoiceOnly() {
    const originalContent = document.body.innerHTML;
    const invoiceContent = document.getElementById('invoiceSection').innerHTML;

    document.body.innerHTML = invoiceContent;
    window.print();
    document.body.innerHTML = originalContent;
}


// document.getElementById('confirmPurchase').addEventListener('click', function(){
//     const successMessage = document.getElementById('successMessage');
//     successMessage.classList.remove('hidden');

//     if(cart.length > 0){
//         const firstProduct = cart[0];
//         const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

//         const invoiceSection = document.getElementById('invoiceSection');
//         invoiceSection.classList.remove('hidden');

//         document.getElementById('productName').textContent = firstProduct.title;
//         document.getElementById('invoiceQuantity').textContent = firstProduct.quantity;
//         document.getElementById('invoicePrice').textContent = firstProduct.price;
//         document.getElementById('invoiceTotalPrice').textContent = totalPrice.toFixed(2);

//         document.getElementById('printInvoice').addEventListener('click',function(){
//             window.print();
//         })
//     }else{
//         alert('Your Cart is Empty!')
//     }
// });


function updateCartDisplay(){
    const cartList = document.getElementById('cartList');
    const itemCount = document.getElementById('itemCount');
    const totalPrice = document.getElementById('totalPrice');

    cartList.innerHTML = '';

    let totalCost = 0
    let totalItems = 0;

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.style.marginTop = "20px";
        listItem.textContent = `${product.title} - ${product.price} x ${product.quantity}`;
        listItem.innerHTML += `<span class="ml-6 p-1 border border-blue-200 mr-1">${product.quantity}</span><button onclick="increaseQuantity(${index})" class="px-3 py-1 bg-gray-300 text-black mr-1"> + </button> <button onclick="decreaseQuantity(${index})" class="px-3 py-1 bg-gray-300 text-black mr-1"> - </button>`;
        listItem.innerHTML += ` <button onclick="removeButton(${index})" class="addToCart bg-red-500 px-3 py-1 text-white">Remove Item</button>`;
        cartList.appendChild(listItem);
       
        totalItems += product.quantity;
        totalCost += product.price * product.quantity;
    })

    if(discount > 0){
        const discountAmount = (totalCost * discount) / 100;
        totalCost -= discountAmount;
    }

    itemCount.textContent = totalItems;
    totalPrice.textContent = `${totalCost.toFixed(2)}`;
}

function increaseQuantity(index){
    cart[index].quantity += 1;
    updateCartDisplay();
}


function decreaseQuantity(index){
  if(cart[index].quantity > 1){
    cart[index].quantity -= 1;
  }else{
    cart.splice(index, 1)
  }

  updateCartDisplay();
}


function removeButton(index) {
    cart.splice(index, 1); 
    updateCartDisplay();  
}

