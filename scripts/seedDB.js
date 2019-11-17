const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    description:
      "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.<br>",
    image: "https://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72S-q6TP5HCkpoD1wHVtIrI1nR-A0s2g3myVPk0xP0zm0Tu7o2vuEXfqm4c3UVwcC0D8B-zxVMqCcrXMrHHMWcyJfP42uysigdZVufpwIB9-SfHeKtDS0K9Jpv95QxlPszgZNbH&source=gbs_api",
    link: "https://books.google.com/books?id=_oG_iTxP1pIC&hl=&source=gbs_api"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
