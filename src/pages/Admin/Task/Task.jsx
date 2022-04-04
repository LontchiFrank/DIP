import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { AdminLayout } from "../../../pages";
import { BookCard, Header3, Unexpected } from "../../../components";
import { _viewAllTasks } from "../../../Helpers/adminHelper";
import { getAllTasks, loadingState } from "../../../redux/actions/adminAction";
import animationData from "../../../annimations/72929-reading-book.json";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import TaskCard from "../../../components/Admin/TaskCard/TaskCard";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Task() {
  const [holdTask, setHoldTask] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.admin);
  const { error, newTasks, loading, booksFilteredList } = data;

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllTasks().then((response) =>
      //   dispatch(getAllTasks(response), console.log(response))
      setHoldTask(response.form)
    );
  }, []);
  console.log(holdTask);

  return (
    <AdminLayout>
      <Header3 title={"Tasks"} filtrationTask={holdTask} from={"Task Array"} />
      <div className="carryall d-flex" style={{ width: "100%" }}>
        <div className={`btn btn-danger mr-3`}>
          <i
            className="fas fa-trash"
            style={{
              color: "#fff",
            }}
          ></i>
        </div>
        <h3 className="mt-2">Clear All</h3>
      </div>

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
              {holdTask.length > 0 ? (
                <div>
                  {holdTask.map((book, index) => (
                    <div key={index}>
                      <TaskCard book={book} index={index} />
                    </div>
                  ))}
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

export default Task;
