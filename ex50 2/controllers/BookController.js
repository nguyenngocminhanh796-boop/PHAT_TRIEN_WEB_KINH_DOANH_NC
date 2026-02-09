const fs = require("fs");
const path = require("path");

// GIỮ NGUYÊN boooks.json
const dataPath = path.join(__dirname, "../data/boooks.json");

const readData = () =>
  JSON.parse(fs.readFileSync(dataPath, "utf8"));

const writeData = (data) =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// GET ALL
exports.getAllBooks = (req, res) => {
  res.json(readData());
};

// GET BY ID
exports.getBookById = (req, res) => {
  const books = readData();
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Not found" });
  res.json(book);
};

// CREATE
exports.createBook = (req, res) => {
  const books = readData();
  const newBook = {
    id: Date.now(),
    ...req.body,
    updatedAt: new Date()
  };
  books.push(newBook);
  writeData(books);
  res.status(201).json(newBook);
};

// UPDATE
exports.updateBook = (req, res) => {
  let books = readData();
  books = books.map(b =>
    b.id == req.params.id ? { ...b, ...req.body } : b
  );
  writeData(books);
  res.json({ message: "Updated successfully" });
};

// DELETE
exports.deleteBook = (req, res) => {
  const books = readData().filter(b => b.id != req.params.id);
  writeData(books);
  res.json({ message: "Deleted successfully" });
};
