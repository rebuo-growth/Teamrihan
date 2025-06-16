document.getElementById("orderForm").addEventListener("input", () => {
  const quantity = document.getElementById("quantity").value;
  const pricePer1000 = 10; // ₹10 per 1000 followers as example
  const amount = (quantity / 1000) * pricePer1000;
  document.getElementById("amount").innerText = "Amount: ₹" + amount.toFixed(2);
});

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const quantity = document.getElementById("quantity").value;

  const response = await fetch("https://smm.binancemagic.in/api/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      key: "46dcdc08952d2622c447a75068ac199d5c9e91c8",
      action: "add",
      service: 1234, // <-- Replace with real SMMBin service ID
      link: "https://instagram.com/yourclient", // <-- Replace dynamically if needed
      quantity: quantity
    })
  });

  const result = await response.json();
  alert("Order Placed! ID: " + result.order);
});
