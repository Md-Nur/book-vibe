const Links = ({ myClasses }) => {
  return (
    <ul className={myClasses}>
      <li>
        <a className="btn btn-outline btn-success">Home</a>
      </li>

      <li>
        <a className="btn">Listed Books</a>
      </li>
      <li>
        <a className="btn">Pages to read</a>
      </li>
      <li>
        <a className="btn">About Us</a>
      </li>
      <li>
        <a className="btn">Contact Us</a>
      </li>
    </ul>
  );
};

export default Links;
