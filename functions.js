document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".table-fill tbody");
  let subtotal = 0;

  products.forEach(product => {
    const amount = product.price * product.quantity;
    subtotal += amount;

    const row = `
      <tr>
        <td><img src="${product.image}"></td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>$${amount.toFixed(2)}</td>
      </tr>
    `;

    table.innerHTML += row;
  });

  const tax = subtotal * 0.10;
  const shipping = 0;
  const grandTotal = subtotal + tax + shipping;

  table.innerHTML += `
    <tr class="totals"><td colspan="4">Subtotal</td><td>$${subtotal.toFixed(2)}</td></tr>
    <tr class="totals"><td colspan="4">Tax</td><td>$${tax.toFixed(2)}</td></tr>
    <tr class="totals"><td colspan="4">Shipping</td><td>$${shipping.toFixed(2)}</td></tr>
    <tr class="totals"><td colspan="4" class="focus">Grand Total</td><td class="focus">$${grandTotal.toFixed(2)}</td></tr>
  `;
});
