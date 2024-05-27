
import { useSelector, useDispatch } from "react-redux";
import { delToDo, setToDos } from "../features/toDo/toDoSlice";
import { useEffect } from "react";

function ToDoLists() {
  const toDos = useSelector(state => state.toDos)
  const dispatch = useDispatch()



  useEffect(() => {
    const localToDo = JSON.parse(localStorage.getItem("localToDo"));

    if (localToDo && localToDo.length > 0) {
      dispatch(setToDos(localToDo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localToDo", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <>
      <div className="text-3xl text-center pt-7 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600">
        To Do Lists
      </div>
      {/* <ul className="list-none">
        {toDos.map((toDo) => (
          <li
            key={toDo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{toDo.text}</div>
            <button
              onClick={() => dispatch(delToDo(toDo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul> */}

      {/* with better ui */}
      <ul className="task-list text-white font-medium w-9/12 mx-auto mt-3">
        {toDos.map((toDo) => (
          <li
            id={toDo.id}
            key={toDo.id}
            className="task-list-item">
              <div>{toDo.text}</div>
            <span
              onClick={() => dispatch(delToDo(toDo.id))}
              className="delete-btn" >
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoLists;