import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addReading, addWishList } from "../../Utils/readingAndWishlist";

const Book = () => {
  const allBooks = useLoaderData();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (allBooks.length && Array.isArray(allBooks)) {
      const newBook = allBooks.find((book) => book.bookId === parseInt(id));
      setBook(newBook);
    } else {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) =>
          setBook(data.find((book) => book.bookId === parseInt(id)))
        );
    }
  }, []);

  if (!book)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row w-full gap-10">
        <figure className="lg:w-1/2 rounded-xl bg-base-300 p-10 flex items-center justify-center">
          <img src={book?.image} alt={book?.image} className="max-h-[600px]" />
        </figure>
        <div className="lg:w-1/2 p-1">
          <h1 className="text-4xl font-bold playfair">{book?.bookName}</h1>
          <p className="my-4">By: {book?.author}</p>
          <hr />
          <p className="my-4 font-semibold">{book.category}</p>
          <hr />
          <p className="py-6">
            <span className="font-bold">Review: </span>
            {book.review}
          </p>
          <p className="my-3">
            <span className="font-bold">Tags: </span>
            {book.tags.map((tag, index) => (
              <span
                className="text-[#23BE0A] bg-[#235a0a0d] rounded-lg text-sm mx-2 p-2"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <span className="my-1 text-gray-600">Number of Pages: </span>
            <span className="my-1 font-bold">{book.totalPages}</span>
            <span className="my-1 text-gray-600">Publisher: </span>
            <span className="my-1 font-bold">{book.publisher}</span>
            <span className="my-1 text-gray-600">Year of Publishing: </span>
            <span className="my-1 font-bold">{book.yearOfPublishing}</span>
            <span className="my-1 text-gray-600">Rating: </span>
            <span className="my-1 font-bold">{book.rating}</span>
          </div>
          <button
            onClick={() => addReading(book.bookId)}
            className="px-5 font-bold mx-2 btn btn-outline"
          >
            Read
          </button>
          <button
            onClick={() => addWishList(book.bookId)}
            className="px-5 text-white font-bold mx-2 btn btn-accent"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
