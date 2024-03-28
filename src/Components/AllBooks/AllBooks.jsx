import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section className="p-10 lg:mx-10">
      <h2 className="playfair text-center text-4xl font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
