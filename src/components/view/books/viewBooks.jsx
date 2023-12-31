import React  from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './viewbook.css';
import Navbar from "../../nav/nav";

function ViewBooks() {

  const { id } = useParams();
  console.log("id from ViewBooks :  --->", id);

  const book = useSelector((state) =>
    state.books.books.find((book) => book._id === id)
  );
  console.log("book from ViewBooks:------>", book);

  return (
    <>
    <Navbar/>
      <div className="card text-center view-book">
        <div className="row g-0 card-book">
          <div className="col-md-4">
            <img src={book.bookImage} className="card-img-top p-1" alt="book-Img"/>
          </div>
          <div className="col-md-8">
            <div className="card-body p-5">
              <h3 className="card-title pb-4"><span>Title : </span>{book.bookTitle}</h3>
              <p className="card-text"><span className="fw-semibold">Description : </span>{book.description}</p>
              <p className="card-text"><span className="fw-semibold">Year : </span>{book.publishedYear}</p>
              <p className="card-text"><span className="fw-semibold">NumPages : </span>{book.bookPages}</p>
              <p className="card-text"><span className="fw-semibold">Language : </span>{book.language}</p>
              <p className="card-text"><span className="fw-semibold">Category : </span>{book.category.name}</p>
              <p className="card-text"><span className="fw-semibold">Author : </span>{book.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBooks;
