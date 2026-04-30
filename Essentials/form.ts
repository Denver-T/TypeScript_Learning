const inputEl = document.getElementById("user-name") as HTMLInputElement | null;
// Importance of checking for null values
// if (!inputEl) {
//   throw new Error("Element not found!");
// }

console.log(inputEl?.value);
