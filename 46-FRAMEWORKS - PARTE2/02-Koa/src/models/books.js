import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

export const BooksModel = mongoose.model(
  'books',
  booksSchema
);