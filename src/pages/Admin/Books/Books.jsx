import React, { useEffect } from "react";
import { AdminLayout } from "../../../pages";
import { BookCard, Header, Unexpected } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { _viewAllBooks } from "../../../Helpers/adminHelper";
import { getAllBooks, loadingState } from "../../../redux/actions/adminAction";
import { loadUser } from "../../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import Lottie from "react-lottie";
import animationData from "../../../annimations/72929-reading-book.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Books() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.admin);
  const { error, allBooks, loading, booksFilteredList } = data;

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllBooks().then((response) => dispatch(getAllBooks(response)));
  }, []);

  return (
    <AdminLayout>
      <Header title={"Books"} filtrationList={allBooks} from={"books Array"} />
      {error != null ? (
        <Unexpected />
      ) : (
        <div>
          {loading ? (
            <div className={`containerCenter spinnerContainer`}>
              <div className="spinner"></div>
            </div>
          ) : (
            <div>
              {allBooks.length > 0 ? (
                <div>
                  {booksFilteredList.length > 0 ? (
                    <div>
                      {booksFilteredList.map((book, index) => (
                        <div key={index}>
                          <BookCard book={book} index={index} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {allBooks.map((book, index) => (
                        <div key={index}>
                          <BookCard book={book} index={index} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="containerColumn fw-bold ">
                  <Lottie options={defaultOptions} height={400} width={"70%"} />
                  <p
                    style={{
                      fontSize: 21,
                    }}
                  >
                    All books will appear hear
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default Books;
