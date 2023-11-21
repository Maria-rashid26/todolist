import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../redux/todoapp/actions/Index";

export const TodoForm = () => {
  const [inputData, setInputdata] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let randomID = new Date().getTime();

    let todoObje = {
      id: randomID,
      todo: inputData,
      completed: false,
    };
    setInputdata("");
    dispatch(addTodo(todoObje));
    console.log(inputData);
  };
  const handledata = (event) => {
    setInputdata(event.target.value);
  };
  return (
    <div className="">
      <h1 className="font-semibold text-gray-600 px-4">Awesome Todo List</h1>
      <div className="flex  pt-3 px-4 items-center space-x-2">
        <div>
          <textarea
            cols="80"
            rows="2"
            className="border-2 rounded-md px-4 pt-4"
            placeholder="What do you need today.?"
            onChange={handledata}
            value={inputData}
            required
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-800 font-semibold rounded-xl px-7 py-4 text-white text-[0.7rem]"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
