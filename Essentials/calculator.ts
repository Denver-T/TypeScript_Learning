function deriveFinalPrice(inputPrice: number) {
  const finalPrice = inputPrice + inputPrice * 0.19;
  const outputEl = document.getElementById("final-pricce")!;
  outputEl.textContent = "Final Price: ";
}
