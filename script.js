// Define an array of menu items with categories
const menuItems = [
    // Indian
    { name: 'Butter Chicken', price: 12.99, image: 'butter-chicken.jpg', category: 'indian' },
    { name: 'Paneer Tikka', price: 8.99, image: 'paneer-tikka.jpg', category: 'indian' },
    { name: 'Biryani', price: 10.99, image: 'biryani.jpg', category: 'indian' },
    { name: 'Chicken Tikka', price: 11.99, image: 'chicken-tikka.jpg', category: 'indian' },
    { name: 'Rogan Josh', price: 14.99, image: 'rogan-josh.jpg', category: 'indian' },
    { name: 'Aloo Gobi', price: 8.49, image: 'aloo-gobi.jpg', category: 'indian' },
    { name: 'Tandoori Chicken', price: 13.99, image: 'tandoori-chicken.jpg', category: 'indian' },

    // Chinese
    { name: 'Chowmein', price: 7.99, image: 'chowmein.jpg', category: 'chinese' },
    { name: 'Sweet and Sour Chicken', price: 9.99, image: 'sweet-and-sour-chicken.jpg', category: 'chinese' },
    { name: 'Spring Rolls', price: 4.99, image: 'spring-rolls.jpg', category: 'chinese' },
    { name: 'Dim Sum', price: 6.99, image: 'dim-sum.jpg', category: 'chinese' },
    { name: 'Kung Pao Chicken', price: 8.99, image: 'kung-pao-chicken.jpg', category: 'chinese' },
    { name: 'Fried Rice', price: 6.49, image: 'fried-rice.jpg', category: 'chinese' },
    { name: 'Peking Duck', price: 18.99, image: 'peking-duck.jpg', category: 'chinese' },

    // Starters
    { name: 'Samosa', price: 2.99, image: 'samosa.jpg', category: 'starter' },
    { name: 'French Fries', price: 3.49, image: 'french-fries.jpg', category: 'starter' },
    { name: 'Onion Rings', price: 3.99, image: 'onion-rings.jpg', category: 'starter' },
    { name: 'Garlic Bread', price: 4.49, image: 'garlic-bread.jpg', category: 'starter' },
    { name: 'Stuffed Mushrooms', price: 5.49, image: 'stuffed-mushrooms.jpg', category: 'starter' },
    { name: 'Cheese Sticks', price: 5.99, image: 'cheese-sticks.jpg', category: 'starter' },
    { name: 'Mozzarella Sticks', price: 6.49, image: 'mozzarella-sticks.jpg', category: 'starter' },

    // Beverages
    { name: 'Coke', price: 1.99, image: 'coke.jpg', category: 'beverages' },
    { name: 'Lemonade', price: 2.49, image: 'lemonade.jpg', category: 'beverages' },
    { name: 'Water', price: 0.99, image: 'water.jpg', category: 'beverages' },
    { name: 'Iced Tea', price: 3.49, image: 'iced-tea.jpg', category: 'beverages' },
    { name: 'Coffee', price: 2.99, image: 'coffee.jpg', category: 'beverages' },
    { name: 'Smoothie', price: 4.99, image: 'smoothie.jpg', category: 'beverages' },
    { name: 'Milkshake', price: 5.49, image: 'milkshake.jpg', category: 'beverages' },

    // Mexican
    { name: 'Tacos', price: 6.99, image: 'tacos.jpg', category: 'mexican' },
    { name: 'Burrito', price: 7.99, image: 'burrito.jpg', category: 'mexican' },
    { name: 'Nachos', price: 5.99, image: 'nachos.jpg', category: 'mexican' },
    { name: 'Quesadilla', price: 8.49, image: 'quesadilla.jpg', category: 'mexican' },

    // Desserts
    { name: 'Chocolate Cake', price: 4.99, image: 'chocolate-cake.jpg', category: 'desserts' },
    { name: 'Ice Cream', price: 3.49, image: 'ice-cream.jpg', category: 'desserts' },
    { name: 'Tiramisu', price: 5.99, image: 'tiramisu.jpg', category: 'desserts' },
    { name: 'Pudding', price: 3.49, image: 'pudding.jpg', category: 'desserts' },

    // Salads
    { name: 'Caesar Salad', price: 5.99, image: 'caesar-salad.jpg', category: 'salads' },
    { name: 'Greek Salad', price: 6.49, image: 'greek-salad.jpg', category: 'salads' },
    { name: 'Caprese Salad', price: 6.99, image: 'caprese-salad.jpg', category: 'salads' },
    { name: 'Waldorf Salad', price: 7.49, image: 'waldorf-salad.jpg', category: 'salads' },

    // French
    { name: 'Croissant', price: 2.99, image: 'croissant.jpg', category: 'french' },
    { name: 'Escargots', price: 12.99, image: 'escargots.jpg', category: 'french' },
    { name: 'Quiche Lorraine', price: 9.99, image: 'quiche-lorraine.jpg', category: 'french' },
    { name: 'Baguette', price: 3.49, image: 'baguette.jpg', category: 'french' },
    { name: 'Ratatouille', price: 8.99, image: 'ratatouille.jpg', category: 'french' }
];

let order = [];

// Function to load menu based on selected category
function loadMenu(category = 'all') {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear existing items

    // Filter items based on category
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

    // Loop through the filtered items and display them
    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <p class="menu-item-name">${item.name}</p>
            <p class="menu-item-price">$${item.price.toFixed(2)}</p>
        `;
        
        // Add click event to add item to order
        menuItemDiv.addEventListener('click', () => addToOrder(item.name, item.price, item.image));
        
        menuContainer.appendChild(menuItemDiv);
    });
}

// Function to filter items based on category
function filterCategory(category) {
    loadMenu(category);
}

// Function to add items to the order
function addToOrder(name, price, image) {
    order.push({ name, price, image });
    alert(`${name} added to your order.`);
}

// Handle the checkout button click
document.getElementById('checkoutButton').addEventListener('click', function() {
    if (order.length === 0) {
        alert("Please add items to your order before checking out.");
        return;
    }

    // Save the order data to sessionStorage for the next page
    sessionStorage.setItem('order', JSON.stringify(order));

    // Redirect to the order summary page
    window.location.href = 'orderSummary.html';
});

// Load the menu when the page loads (default: show all items)
window.onload = loadMenu;
