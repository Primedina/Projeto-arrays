const list = document.querySelector("ul");
const mostrarTudo = document.querySelector(".show-all");
const descountPercent = document.querySelector(".map-descont");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function myProducts(myArray) {
  let myLi = "";

  myArray.forEach((product) => {
    myLi += `
             <li >
            <img src=${product.src} >
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>

`;
  });

  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: formatCurrency(product.price * 0.9),
  }));

  myProducts(newPrices);
}

function sumAllItens() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
 <li>
 <p> O valor total dos items é de  ${formatCurrency(totalValue)}</p>
 <p>
 </li> `;
}

function filterAllItems() {
  const filterItems = menuOptions.filter((product) => product.vegan);
  myProducts(filterItems);
}

mostrarTudo.addEventListener("click", () => myProducts(menuOptions));
descountPercent.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItens);
filterAll.addEventListener("click", filterAllItems);
