const API = "http://localhost:3000/ex50/boooks";

// LOAD ALL BOOKS
function loadBooks() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("bookList");
      tbody.innerHTML = "";
      data.forEach(b => {
        tbody.innerHTML += `
          <tr>
            <td>${b.title}</td>
            <td>${b.price}</td>
            <td>${b.description}</td>
            <td><img src="http://localhost:3000/uploads/${b.image}"></td>
            <td>${new Date(b.updatedAt).toLocaleDateString()}</td>
            <td>${b.quantity}</td>
            <td>${b.categoryId}</td>
            <td>${b.publisherId}</td>
            <td>
              <button onclick="editBook(${b.id})">Edit</button>
              <button onclick="viewDetail(${b.id})">Details</button>
              <button onclick="deleteBook(${b.id})">Delete</button>
            </td>
          </tr>`;
      });
    });
}

// CREATE
function showCreate() {
  document.getElementById("formArea").style.display = "block";
  document.getElementById("formTitle").innerText = "Create Book";
  document.getElementById("bookId").value = "";
}

// SAVE (CREATE + UPDATE)
function saveBook() {
  const id = document.getElementById("bookId").value;
  const book = {
    title: title.value,
    price: price.value,
    description: description.value,
    image: image.value,
    quantity: quantity.value,
    categoryId: categoryId.value,
    publisherId: publisherId.value
  };

  const method = id ? "PUT" : "POST";
  const url = id ? `${API}/${id}` : API;

  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  }).then(() => {
    hideForm();
    loadBooks();
  });
}

// EDIT
function editBook(id) {
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(b => {
      showCreate();
      bookId.value = b.id;
      title.value = b.title;
      price.value = b.price;
      description.value = b.description;
      image.value = b.image;
      quantity.value = b.quantity;
      categoryId.value = b.categoryId;
      publisherId.value = b.publisherId;
      formTitle.innerText = "Edit Book";
    });
}

// DETAILS
function viewDetail(id) {
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(b => {
      alert(
        `Tên sách: ${b.title}\nGiá: ${b.price}\nMô tả: ${b.description}\nSố lượng: ${b.quantity}`
      );
    });
}

// DELETE
function deleteBook(id) {
  if (confirm("Bạn có chắc muốn xóa?")) {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then(() => loadBooks());
  }
}

function hideForm() {
  document.getElementById("formArea").style.display = "none";
}

loadBooks();
