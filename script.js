// Mapping of items to emojis
const itemEmojis = {
  apple: "🍎",
  banana: "🍌",
  bread: "🍞",
  orange: "🍊",
  grapes: "🍇",
  pinapple: "🍍",
  lemon: "🍍",
  tomato: "🍅",
  chicken: "🍗",
  pizza: "🍕",
  cheese: "🧀",
  lipstick: "💄",
  trousers: "👖",
  hangbag: "👜",
  trainers: "👟",
  shoes: "👡",

  // Add more items and their corresponding emojis as needed
};

// Function to update the total count of items
function updateTotalCount() {
  // Get the total count of items in the shopping list
  var shoppingListCount = document.querySelectorAll(".shoppingList li").length;
  // Get the total count of items in the checked list
  var basketListCount = document.querySelectorAll(".basketList li").length;

  // Display the total counts
  document.getElementById("totalItems").textContent =
    "Total Shopping List Items: " +
    shoppingListCount +
    ", Total Checked List Items: " +
    basketListCount;
}

// Add event listener to the shopping form
document
  .getElementById("shoppingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value of the input field and quantity
    var newItem = document.getElementById("item").value.trim().toLowerCase(); // Convert item name to lowercase for case-insensitivity
    var itemQuantity = parseInt(document.getElementById("quantity").value);

    // If the value is not empty
    if (newItem !== "") {
      // Create a new list item
      var li = document.createElement("li");
      // Add emoji corresponding to the item
      var emoji = document.createTextNode(itemEmojis[newItem] || "🛍️"); // Use shopping bag emoji if item not found in mapping
      li.appendChild(emoji);
      // Add item name and quantity
      li.textContent += " " + itemQuantity + " " + newItem;

      // Create a button for moving to the basket list
      var moveButton = document.createElement("button");
      moveButton.textContent = "Move to Basket";
      moveButton.addEventListener("click", function () {
        moveItemToBasket(li);
      });

      // Create a button for removing the item
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        removeItem(li);
      });

      // Append the buttons to the list item
      li.appendChild(moveButton);
      li.appendChild(removeButton);

      // Append the new item to the shopping list
      document.querySelector(".shoppingList").appendChild(li);

      // Clear the input field after submission
      document.getElementById("item").value = "";

      // Update the total count
      updateTotalCount();
    }
  });

// Function to remove an item from either shopping list or basket
function removeItem(item) {
  // Remove the item from its parent (either shopping list or basket list)
  item.parentNode.removeChild(item);

  // Update the total count
  updateTotalCount();
}

// Function to move an item to the basket list
function moveItemToBasket(item) {
  // Remove the move button from the list item
  item.removeChild(item.querySelector("button"));

  // Create a button for removing the item from the basket
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    removeItem(item);
  });

  // Append the button to the list item
  item.appendChild(removeButton);

  // Append the item to the basket list
  document.querySelector(".basketList").appendChild(item);

  // Update the total count
  updateTotalCount();
}
