import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-300">
      <figure className="m-6 p-8 bg-base-200 rounded-xl">
        <img src={book.image} alt="book" className="h-44" />
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#235a0a0d] px-3 py-1 rounded-2xl text-[#23BE0A] mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title playfair font-bold">{book.bookName}</h2>
        <p className="font-semibold">By: {book.author}</p>
        <hr />
        <div className="card-actions flex justify-between font-semibold">
          <span>{book.category}</span>
          <span className="flex gap-1 items-center">{book.rating} <FaRegStar /></span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
