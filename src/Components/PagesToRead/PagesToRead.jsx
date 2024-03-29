import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
//   renderCustomAxisTick,
} from "recharts";
import { getReading } from "../../Utils/readingAndWishlist";
import { useEffect, useState } from "react";
// const data = [
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
// ];

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const readBooksId = getReading();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setReadBooks(data.filter((book) => readBooksId.includes(book.bookId)))
      );
  }, [readBooksId]);
  return (
    <section className="flex w-full justify-center items-center p-5 min-h-screen font-bold">
      <BarChart
        width={1200}
        height={700}
        data={readBooks}
        className="bg-base-200 p-2 md:p-20 rounded-xl"
      >
        <XAxis dataKey="bookName" 
        // tick={renderCustomAxisTick} 
        />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="totalPages" fill="#1a24d8" shape={<TriangleBar />} />
      </BarChart>
    </section>
  );
};

export default PagesToRead;
