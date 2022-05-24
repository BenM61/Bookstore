import { Link } from "react-router-dom";

const ItemPreview = (props) => {
  const { book, id } = props
  const path = book.image

  return (
    <div className="item-preview" >
      <Link to={`/books/${id}`} state={{ book }}>
        <img src={path} alt={book.title}>
        </img>
      </Link>
    </div>
  );
}

export default ItemPreview;