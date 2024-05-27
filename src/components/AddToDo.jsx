import { useState } from "react";
// #2 no suggestions
import { useDispatch } from "react-redux";
import { addToDo } from "../features/toDo/toDoSlice";

function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addToDoHandler}
      className="space-x-3 pt-7 flex justify-center gap-7"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-96"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
        }}
      />
      <button
        type="submit"
        className="text-white bg-indigo-700 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-900 rounded text-base"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddToDo;
