// Product class
class Product {
    constructor(name, description, normalPrice, salePrice, image, company, stock) {
      this.name = name;
      this.description = description;
      this.normalPrice = normalPrice;
      this.salePrice = salePrice;
      this.image = image;
      this.company = company;
      this.stock = stock; // ✅ new property
    }
  }
  
  // Products manager
  class Products {
    constructor() {
      this.categories = {};
    }
  
    addCategory(name, products) {
      this.categories[name] = products;
    }
  
    getCategory(name) {
      return this.categories[name] || [];
    }
  
    // Render all products in a category
    renderCategory(name, containerId) {
      const products = this.getCategory(name);
      const container = document.getElementById(containerId);
  
      container.innerHTML = products.map((p, i) => `
        <div class="catigory2">
          <a href="Product.html?category=${name}&product=${i}">
            <img src="${p.image}" width="300" alt="${p.name}" class="catigory-img-c${i+1}">
          </a>
          <div class="words-c">
            <h2 style="color: red;">${p.salePrice} EGP</h2>
            <p class="w-d">${p.name}</p>
            <p class="w-d">${p.description}</p>
            <p style="color: green">• In stock, ${p.stock} units</p>
            <p style="color: gray;">${p.company}</p>
            <button class="shopbutton" onclick="window.location.href='Product.html?category=${name}&product=${i}'">
              Shop now
            </button>
          </div>
        </div>
      `).join("");
    }
  }
  
  //==============================================
  // Adding products to categories
  //=================================================
  const store = new Products();
  
  // Consoles
store.addCategory("consoles", [
    new Product("PlayStation 5 Slim", "(Disc Edition)", 34000, 34000, "./Images/Console.png", "Sony", 6),
    new Product("PlayStation 5 Pro", "(Disc Edition)", 51000, 51000, "./Images/Screenshot_2025-05-08_140553-removebg-preview.png", "Sony", 8),
    new Product("Xbox Series S", "(512GB SSD Console)", 13000, 13000, "./Images/xbox.png", "Microsoft", 11)
  ]);
  
  // Accessories
  store.addCategory("accessories", [
    new Product("PS5 Controller", "DualSense controller", 3400, 3400, "./Images/Accessories.png", "Sony", 7),
    new Product("Controller Charging Station", "Charge two controllers", 560, 560, "./Images/accessories2 (1).png", "Sony", 4),
    new Product("PS VR2", "Immersive VR headset", 25000, 25000, "./Images/accessories2 (2).png", "Sony", 3)
  ]);
  
  // Games
  store.addCategory("games", [
    new Product("FC 25", "Latest football simulation game", 2500, 2500, "./Images/Games.png", "EA Sports", 15),
    new Product("Rocket League", "Car soccer game", 510, 510, "./Images/game1.png", "Epic Games", 10),
    new Product("Red Dead Redemption 2", "Epic western adventure", 1500, 1500, "./Images/game2.png", "Rockstar Games", 13)
  ]);