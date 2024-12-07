let basket_json = [
    {
        'img': '../media/media/ice-cream/01.png',
        'name': 'ice-cream',
        'price': 15000,
        'count': 3,
        'total price': 45000,
    },
    {
        'img': '../media/media/chocolate/04.png',
        'name': 'chocolate',
        'price': 12000,
        'count': 1,
        'total price': 12000,
    },
    {
        'img': '../media/media/drink/03.png',
        'name': 'drink',
        'price': 3000,
        'count': 5,
        'total price': 15000,
    },
     {
        'img': '../media/media/chocolate/13.png',
        'name': 'chocolate',
        'price': 20000,
        'count': 1,
        'total price': 20000,
    },
];

let productContainer = document.querySelector('.product');

for (let i = 0; i<basket_json.length; i++) {
    let div = document.createElement('div');
    div.classList.add('product-itemm');

    div.innerHTML = `
        <img src="${basket_json[i].img}" alt="${basket_json[i].name}" class="drinkimg">
        <p class="product-name">name: ${basket_json[i].name}</p>
        <p class="product-price">price: ${basket_json[i].price}</p>
        <p class="count-price">count: ${basket_json[i].count}</p>
        <p class="total-price">total price: ${basket_json[i]['total price']}</p>
        <button class="minus">-</button>
        <button class="delete">delete</button>
    `;

    productContainer.appendChild(div);
}

let price = document.querySelector('.product-price');
let count = document.querySelector('.count-price');

let minusButtons = document.querySelectorAll('.minus');

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Mahsulotning `basket_json` ichidagi ma'lumotini olish
        let product = basket_json[index + 1]; // index + 1 sababli basket_json 1 dan boshlanadi.

        if (product.count > 1) { // Mahsulot soni 1 dan katta bo'lsa
            product.count--; // Mahsulot sonini kamaytirish
            product['total price'] = product.price * product.count; // Yangi narxni hisoblash

            // HTMLni yangilash
            let productItems = document.querySelectorAll('.product-itemm');
            let currentProductItem = productItems[index];

            currentProductItem.querySelector('.count-price').textContent = `count: ${product.count}`;
            currentProductItem.querySelector('.total-price').textContent = `total price: ${product['total price']}`;
        } else {
          
        }
    });
});
let deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // HTML dan tegishli `div`ni o'chirish
        let productItems = document.querySelectorAll('.product-itemm');
        let currentProductItem = productItems[index];

        currentProductItem.remove(); // `div` elementni o'chirish

        // `basket_json` ichidan ham mahsulotni o'chirish
        delete basket_json[index + 1];

    });
});



