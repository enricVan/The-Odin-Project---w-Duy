const books = new Array();

function Book(title, author, price, quantity) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.quantity = quantity;
}

document.getElementById("addBook").addEventListener("click", function () {
  document.getElementById("addBookForm").style.display = "block";
  document.getElementById("showBooksTable").style.display = "none";
});

document.getElementById("submit").addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

  let book = new Book(title, author, price, quantity);
  books.push(book);

  document.getElementById("addBookForm").style.display = "none";
  document.getElementById("addBookForm").reset();
});

document.getElementById("showBooks").addEventListener("click", function () {
  document.getElementById("showBooksTable").style.display = "block";
  document.getElementById("addBookForm").style.display = "none";

  let tableBody = document.getElementById("showBooksTableBody");
  tableBody.innerHTML = "";

  books.forEach((book) => {
    let row = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.price}</td>
      <td>${book.quantity}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
});
