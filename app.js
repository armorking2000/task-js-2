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

const logo = document.createElement("p");
logo.className = "logo";

const logoStart = document.createElement("span");
logoStart.className = "logo-start";
logoStart.textContent = "mini";

const logoEnd = document.createTextNode("shop");
logo.append(logoStart, logoEnd);

const headerCart = document.createElement("div");
headerCart.className = "header-cart";

const headerCartText = document.createElement("span");
headerCartText.textContent = "My Cart";

const headerCartBadge = document.createElement("span");
headerCartBadge.className = "cart-badge";
headerCartBadge.textContent = "0";
headerCart.append(headerCartText, headerCartBadge);

header.append(logo, headerCart);

// ساخت main
const main = document.createElement("main");
main.id = "main";

const label = document.createElement("p");
label.className = "main-paragh";
label.textContent = "CURATED FOR YOU";

const title = document.createElement("h1");
title.textContent = "shop the collection";

const count = document.createElement("span");
count.id = "product-card";
count.textContent = `${products.length} products`;

const productsEl = document.createElement("section");
productsEl.id = "products";

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

main.append(label, title, count, productsEl, cartSection);
document.body.append(header, main);

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
}

for (const product of products) {
  // کارت محصول
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.productId = product.id;

  const imageWrap = document.createElement("div");
  imageWrap.className = "cardImage";

  const image = document.createElement("img");
  image.className = "image";
  image.src = product.image;
  image.alt = product.name;
  imageWrap.appendChild(image);

  if (product.badge !== "") {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = product.badge;
    imageWrap.appendChild(badge);
  }

  const info = document.createElement("div");
  info.className = "div-column";

  const name = document.createElement("strong");
  name.textContent = product.name;

  const category = document.createElement("p");
  category.textContent = product.category;

  const description = document.createElement("small");
  description.textContent = product.description;

  info.append(name, category, description);

  const row = document.createElement("div");
  row.className = "div-row";

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  const button = document.createElement("button");
  button.textContent = "+ add to cart";

  row.append(price, button);

  card.append(imageWrap, info, row);
  productsEl.appendChild(card);

  const cartRow = document.createElement("div");
  cartRow.className = "cart-row";
  cartRow.hidden = true;

  const cartRowName = document.createElement("span");
  cartRowName.textContent = product.name;

  const cartRowQty = document.createElement("span");

  const cartRowPrice = document.createElement("strong");

  const removeButton = document.createElement("button");
  removeButton.className = "remove-btn";
  removeButton.textContent = "remove";

  cartRow.append(cartRowName, cartRowQty, cartRowPrice, removeButton);
  cartList.appendChild(cartRow);
  product.row = cartRow;
  button.addEventListener("click", () => {
    product.qty++;
    cartRowQty.textContent = `× ${product.qty}`;
    cartRowPrice.textContent = `$${product.qty * product.price}`;
    cartRow.hidden = false;
    updateCart();
  });
  removeButton.addEventListener("click", () => {
    product.qty = 0;
    cartRow.hidden = true;
    updateCart();
  });
}
clearButton.addEventListener("click", () => {
  for (const p of products) {
    p.qty = 0;
    p.row.hidden = true;
  }
  updateCart();
});
