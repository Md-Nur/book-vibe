import { toast } from "react-toastify";

export const getReading = () => {
  const readingData = localStorage.getItem("readingData");
  const reading = JSON.parse(readingData);
  return reading;
};

export const getWishList = () => {
  const wishListData = localStorage.getItem("wishListData");
  const wishList = JSON.parse(wishListData);
  return wishList;
};

export const addReading = (bookId) => {
  const reading = getReading();
  if (Array.isArray(reading) && reading.find((bId) => bId === bookId)) {
    toast.warn("Already reading this book");
  } else if (Array.isArray(reading)) {
    reading.push(bookId);
    localStorage.setItem("readingData", JSON.stringify(reading));
    toast.success("Book added to reading list");
  } else {
    localStorage.setItem("readingData", JSON.stringify([bookId]));
    toast.success("Book added to reading list");
  }
  const wishList = getWishList();
  if (Array.isArray(wishList) && wishList.find((bId) => bId === bookId)) {
    localStorage.setItem(
      "wishListData",
      JSON.stringify(wishList.filter((b) => b !== bookId))
    );
  }
};

export const addWishList = (bookId) => {
  const reading = getReading();

  if (Array.isArray(reading) && reading.find((bId) => bId === bookId)) {
    toast.warn("Already in reading data");
    return;
  }

  const wishList = getWishList();
  
  if (Array.isArray(wishList) && wishList.find((bId) => bId === bookId)) {
    toast.warn("Already in wishlist");
  } else if (Array.isArray(wishList)) {
    wishList.push(bookId);
    localStorage.setItem("wishListData", JSON.stringify(wishList));
    toast.success("Book added to wishlist");
  } else {
    localStorage.setItem("wishListData", JSON.stringify([bookId]));
    toast.success("Book added to wishlist");
  }
};
