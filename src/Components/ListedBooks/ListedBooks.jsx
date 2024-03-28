import { useEffect, useState } from "react";
import { getReading, getWishList } from "../../Utils/readingAndWishlist";
import ListedCard from "./ListedCard";

const ListedBooks = () => {
  const [reading, setReading] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const readingIds = getReading();
    const wishListIds = getWishList();

    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setReading(data.filter((book) => readingIds.includes(book.bookId)));
        setWishList(data.filter((book) => wishListIds.includes(book.bookId)));
      });
  }, []);

  return (
    <div className="">
      <h2 className="m-3 lg:my-8 lg:mx-20 bg-base-300 text-center rounded-xl p-5 text-3xl font-bold">
        Books
      </h2>
      <div className="flex items-center justify-center">
        <select className="select select-success bg-success w-24 text-white font-semibold">
          <option disabled selected>
            Sort
          </option>
          <option>Rating</option>
          <option>Number of Pages</option>
          <option>Publish Year</option>
        </select>
      </div>

      <section className="mx-20">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Reading Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {reading.map((read) => (
              <ListedCard key={read.id} book={read} />
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {wishList.map((wish) => (
              <ListedCard key={wish.id} book={wish} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListedBooks;
