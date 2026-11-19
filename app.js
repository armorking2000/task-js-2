const products = [
  {
    id: "M958vbecereAYmt5",
    badge: "POPULAR",
    category: "AUDIO",
    name: "Wireless Headphones",
    description: "Rich sound, all-day comfort.",
    price: 50,
    image: "./assets/headphone.jpg",
    qty: 0,
  },
  {
    id: "L76S1JHIezpZ7N06",
    badge: "NEW",
    category: "FOOTWEAR",
    name: "Everyday Sneakers",
    description: "Fresh steps, effortless style.",
    price: 80,
    image: "./assets/sneakers.jpg",
    qty: 0,
  },
  {
    id: "ondMUj83xDoJNdwF",
    badge: "",
    category: "ACCESSORIES",
    name: "Classic Wristwatch",
    description: "Timeless looks for every day.",
    price: 120,
    image: "./assets/classic.jpg",
    qty: 0,
  },
  {
    id: "GQCtGKt2FAqPsXcq",
    badge: "",
    category: "LIFESTYLE",
    name: "Urban Backpack",
    description: "Made for wherever you go.",
    price: 35,
    image: "./assets/backpack.jpg",
    qty: 0,
  },
];

// ساخت header
const header = document.createElement("header");

const logoStart = document.createElement("span");
logoStart.className = "logo-start";
logoStart.textContent = "mini";

const logo = document.createElement("p");
logo.className = "logo";

const logoEnd = document.createElement("span");
logoEnd.textContent = "shop";
logo.append(logoStart, logoEnd);

const headerCart = document.createElement("div");
headerCart.className = "header-cart";

const headerCartText = document.createElement("p");
headerCartText.textContent = "My Cart";

const headerCartBadge = document.createElement("span");
headerCartBadge.className = "cart-badge";
headerCartBadge.textContent = "0";
headerCart.append(headerCartText, headerCartBadge);

header.append(logo, headerCart);

// ساخت main
const main = document.createElement("main");
main.id = "main";

const mainLabel = document.createElement("p");
mainLabel.className = "main-label";
mainLabel.textContent = "CURATED FOR YOU";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "shop the collection";

const productCount = document.createElement("span");
productCount.id = "product-count";
productCount.textContent = `${products.length} products`;

const productsSection = document.createElement("section");
productsSection.id = "products";

// ساخت cart
const cartSection = document.createElement("section");
cartSection.id = "cart";

const cartLabel = document.createElement("p");
cartLabel.className = "cart-label";
cartLabel.textContent = "YOUR PICKS";

const cartTop = document.createElement("div");
cartTop.className = "cart-top";

const cartTitle = document.createElement("h2");
cartTitle.textContent = "Shopping Cart ";
const cartTitleCount = document.createElement("span");
cartTitleCount.textContent = "(0)";
cartTitle.appendChild(cartTitleCount);

const clearButton = document.createElement("button");
clearButton.className = "clear-btn";
clearButton.textContent = "clear all";

cartTop.append(clearButton, cartTitle);

const emptyMessage = document.createElement("p");
emptyMessage.className = "empty-message";
emptyMessage.textContent = "your cart is empty. please choose an item";

const cartList = document.createElement("div");
cartList.className = "cart-list";

const subtotalRow = document.createElement("div");
subtotalRow.className = "subtotal-row";
const subtotalLabel = document.createElement("span");
subtotalLabel.textContent = "subtotal";
const subtotalValue = document.createElement("strong");
subtotalValue.textContent = "$0";
subtotalRow.append(subtotalLabel, subtotalValue);

cartSection.append(cartLabel, cartTop, emptyMessage, cartList, subtotalRow);

main.append(mainLabel, mainTitle, productCount, productsSection, cartSection);
document.body.append(header, main, );

function updateCart() {
  let totalCount = 0;
  let totalPrice = 0;
  for (const p of products) {
    totalCount += p.qty;
    totalPrice += p.qty * p.price;
  }
  headerCartBadge.textContent = totalCount;
  cartTitleCount.textContent = `(${totalCount})`;
  subtotalValue.textContent = `$${totalPrice}`;
  emptyMessage.hidden = totalCount > 0;
  //function ساخت تصویر
}
function createImageWrap(product) {
  // ساخت div برای image
  const imageWrap = document.createElement("div")
  imageWrap.className = "image-wrap"
  const image = document.createElement("img")
  image.className = "image"
  image.src = product.image
  image.alt = product.name
  imageWrap.appendChild(image)
  //استفاده از برچسب (badge)
  if (product.badge !== 0) {
    const badge = document.createElement("span")
    badge.className = "badge"
    badge.textContent = product.badge
    imageWrap.appendChild(badge)
  }
  return imageWrap
 }

 //
function creatCardInfo(params) {
  const info = document.createElement("div")
  info.className = ""
}

function name(params) {
  
}