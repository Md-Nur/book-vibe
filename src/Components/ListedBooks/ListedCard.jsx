import { IoMdContacts } from "react-icons/io";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListedCard = ({ book }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-3 border border-gray-300 items-center justify-center">
      <figure className="bg-base-300 h-60 w-60 p-2 m-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="object-scale-down h-56"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title playfair font-bold">{book.bookName}</h2>
        <p className="my-1 font-semibold">By: {book.author}</p>
        <p className="my-1 flex gap-3 flex-wrap items-center">
          <span className="font-bold">Tags: </span>
          {book.tags.map((tag, index) => (
            <span
              className="text-[#23BE0A] bg-[#235a0a0d] rounded-lg text-sm  p-2"
              key={index}
            >
              #{tag}
            </span>
          ))}
          <span className="font-semibold flex items-center gap-1 text-gray-500">
            <IoLocationOutline /> Year of Publication: {book.yearOfPublishing}
          </span>
        </p>
        <p className="my-1 flex gap-3 flex-wrap items-center">
          <span className="font-semibold flex items-center gap-1 text-gray-500">
            <IoMdContacts /> Publications: {book.publisher}
          </span>
          <span className="font-semibold flex items-center gap-1 text-gray-500">
            <MdOutlineRestorePage /> Page: {book.totalPages}
          </span>
        </p>
        <hr />
        <div className="flex gap-1 lg:gap-4 flex-wrap">
          <button className="btn rounded-full btn-info">
            Category: {book.category}
          </button>
          <button className="btn rounded-full btn-warning">
            Rating: {book.rating}
          </button>
          <Link
            to={`/book/${book.bookId}`}
            className="btn rounded-full btn-success"
          >
            Veiew Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
