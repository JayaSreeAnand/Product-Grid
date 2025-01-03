// API URL

const API_URL = 'https://fakestoreapi.com/products';

// Fetch products from the API

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Render products in a responsive grid

function renderProducts(products) {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = ''; 
  
  // Clear previous content

  products.forEach(product => {
    const productCard = `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description.slice(0, 80)}...</p>
            <div class="mt-auto fw-bold text-end">$${product.price}</div>
          </div>
        </div>
      </div>
    `;
    productGrid.innerHTML += productCard;
  });
}

// Initialize the app

fetchProducts();