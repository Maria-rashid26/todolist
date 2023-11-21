import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoapp/actions/Index";
import { handlecheckbox } from "../redux/todoapp/actions/Index";

export const Todolist = () => {
  const todoList = useSelector((state) => state.Operationsreducers);
  console.log(todoList);
  const dispatch = useDispatch();

  return (
    <div>
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between space-y-6 px-7 border-b-2"
        >
          <div className="flex space-x-3 items-center  ">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(handlecheckbox(todo.id))}
            />
            <p
              style={
                todo.completed === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo?.todo}
            </p>
          </div>
          <div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
