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
            <div class = "mx-auto text-center items-center justify-center">
                <h1 class="text-md font-semibold mb-2">${title}</h1>
                <p class="text-sm text-gray-400 mb-2">${description}</p>
                <p class="font-semibold text-gray-500 text-center mb-4">Price: $${price}</p>
                <button onclick="AddToCard(${id}, '${title}', ${price})" class="addToCart bg-gray-500 px-6 py-2 font-semibold text-white text-center items-center justify-center mx-auto rounded mb-3">Add to Cart</button>
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

document.getElementById('promoCode').addEventListener('click', function() {
    const promoApply = document.getElementById('promoApply');
    promoApply.classList.remove('hidden')
})



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
    alert('are you sure? you want to Buy This Products!!')
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    
    const invoiceSection = document.getElementById('invoiceSection');
    invoiceSection.classList.remove('hidden');
    
    const invoiceItemsList = document.getElementById('invoiceItemsList');
    invoiceItemsList.innerHTML = '';
    
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach((product, index) => {
        const invoiceItem = document.createElement('li');
        const totalProductPrice = product.price * product.quantity;
        invoiceItem.textContent = `${index + 1}.  ${product.title} - $${product.price} x ${product.quantity} = $${totalProductPrice.toFixed(2)}`;
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

function updateCartDisplay(){
    const cartList = document.getElementById('cartList');
    const itemCount = document.getElementById('itemCount');
    const totalPrice = document.getElementById('totalPrice');

    cartList.innerHTML = '';

    let totalCost = 0
    let totalItems = 0;

    cart.forEach((product, index) => {

        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'items-center', 'justify-between', 'p-4', 'border', 'border-gray-200', 'rounded-lg', 'shadow-sm', 'mb-4', 'bg-white');
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('flex', 'flex-col', 'sm:flex-row', 'items-start', 'sm:items-center'); // Responsive for small devices
        const totalProductPrice = product.price * product.quantity;
        productInfo.innerHTML = `
            <span class="font-semibold mr-2">${index + 1}.</span>
            <span class="font-semibold">${product.title}</span>
            <span class="ml-4 text-gray-500">Price: $${product.price}</span>
            <span class="ml-4 text-gray-500">x ${product.quantity}</span>
            <span class="ml-6 text-gray-500"> = $${totalProductPrice.toFixed(2)}</span>
        `;
        
        const quantityControls = document.createElement('div');
        quantityControls.classList.add('flex', 'items-center');
        
        quantityControls.innerHTML = `
            <button onclick="decreaseQuantity(${index})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
            <span class=" px-3 py-1 border border-blue-200 rounded">${product.quantity}</span>
            <button onclick="increaseQuantity(${index})" class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
            
        `;
        

        const removeButton = document.createElement('button');
        removeButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-red-600');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('onclick', `removeButton(${index})`);
        
        listItem.appendChild(productInfo);
        listItem.appendChild(quantityControls);
        listItem.appendChild(removeButton);
        
        // Append to cart list
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

