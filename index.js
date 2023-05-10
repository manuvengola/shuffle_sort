shuffleCards = () => {
  const ulElement = document.getElementById("card-container");
  const cardItems = ulElement.children;

  for (let itemIndex = 0; itemIndex < cardItems.length; itemIndex++) {
    const randomItemIndex = Math.floor(Math.random() * (itemIndex + 1));
    ulElement.appendChild(cardItems[randomItemIndex]);
  }
};

sortCards = () => {
  const ulElement = document.getElementById("card-container");
  const cardItems = ulElement.children;
  let cardNodes = [];

  for (let itemIndex = 0; itemIndex < cardItems.length; itemIndex++) {
    cardNodes.push({
      value: parseInt(cardItems[itemIndex].textContent),
      element: cardItems[itemIndex],
    });
  }
  cardNodes
    .sort((a, b) => a.value - b.value)
    .forEach((node) => {
      ulElement.appendChild(node.element);
    });
};

(function () {
  const name = prompt("What is your name ?", "User");
  const footerElement = document.getElementById("footer");
  footerElement.innerHTML = footerElement.textContent.replace("{{name}}", name);
})();
