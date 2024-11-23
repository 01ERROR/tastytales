// Retrieve the order data from sessionStorage
let order = JSON.parse(sessionStorage.getItem('order'));

if (order && order.length > 0) {
    let orderDetails = document.getElementById('order-details');
    let totalPrice = 0;

    // Loop through each order item and display it
    order.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('order-item');
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="order-item-image">
            <p><strong>${item.name}</strong></p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        
        orderDetails.appendChild(itemDiv);

        // Add the price to the total
        totalPrice += item.price;
    });

    // Display the total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
} else {
    document.getElementById('order-details').innerHTML = "<p>No items in your order.</p>";
}
