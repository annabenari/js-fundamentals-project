document
  .getElementById("shoppingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value of the input field
    // Trim gets rid of any whitespace before and after the input
    var newItem = document.getElementById("item").value.trim();

    // If the value does not match empty then it creates a new list
    if (newItem !== "") {
      // Create a new list item
      var li = document.createElement("li");
      li.textContent = newItem;

      // Create a button for moving to the basket list
      var moveButton = document.createElement("button");
      moveButton.textContent = "Move to Basket";
      moveButton.addEventListener("click", function () {
        moveItemToBasket(li);
      });

      // Append the button to the list item
      li.appendChild(moveButton);

      // Append the new item to the shopping list
      document.querySelector(".shoppingList").appendChild(li);

      // Clear the input field
      document.getElementById("item").value = "";
    }
  });

function moveItemToBasket(item) {
  // Remove the move button from the list item
  item.removeChild(item.querySelector("button"));

  // Append the item to the basket list
  document.querySelector(".basketList").appendChild(item);
}
