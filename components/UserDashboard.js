import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import useFetchTodos from "../hooks/fetchTodos";

export default function UserDashboard() {
  const { currentUser } = useAuth();
  const [edit, setEdit] = useState(null);
  const [todo, setTodo] = useState("");
  const [edittedValue, setEdittedValue] = useState("");

  const { todos, setTodos, loading, completedTodos, setCompletedTodos } =
    useFetchTodos();

  function handleAddKeyDown(event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  }

  async function handleAddTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    const newTodos = { ...todos, [newKey]: todo };

    setTodos(newTodos);
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: newTodos,
      },
      { merge: true },
    );
    setTodo("");
  }

  async function handleEditTodo() {
    if (!edittedValue) {
      return;
    }
    const newKey = edit;
    const updatedTodos = { ...todos };
    if (updatedTodos[newKey] !== undefined) {
      updatedTodos[newKey] = edittedValue;
    }
    setTodos(updatedTodos);
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: updatedTodos,
      },
      { merge: true },
    );
    setEdit(null);
    setEdittedValue("");
  }

  function handleAddEdit(todoKey) {
    return () => {
      setEdit(todoKey);
      setEdittedValue(todos[todoKey]);
    };
  }

  function handleDelete(todoKey) {
    return async () => {
      const tempObj = { ...todos };

      delete tempObj[todoKey];
      setTodos(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          todos: {
            [todoKey]: deleteField(),
          },
        },
        { merge: true },
      );
    };
  }

  async function handleCompleteTodo(todoKey) {
    const completedTodo = todos[todoKey];
    const newKey =
      Object.keys(completedTodos).length === 0
        ? 1
        : Math.max(...Object.keys(completedTodos)) + 1;
    const newCompletedTodos = {
      ...completedTodos,
      [newKey]: completedTodo,
    };
    setCompletedTodos(newCompletedTodos);
    const updatedTodos = { ...todos };
    delete updatedTodos[todoKey];
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(userRef, {
      todos: updatedTodos,
      completedTodos: newCompletedTodos,
    });
    setTodos(updatedTodos);
  }

  async function handleClearCompleted() {
    const newCompletedTodos = {};
    setCompletedTodos(newCompletedTodos);

    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        completedTodos: deleteField(),
      },
      { merge: true },
    );
  }

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-1 flex-col gap-3 sm:gap-5">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter TODO"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleAddKeyDown}
          className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-semibold text-base duration-300 hover:bg-slate-700"
        >
          ADD
        </button>
      </div>
      <button
        onClick={handleClearCompleted}
        className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-slate-400 font-semibold text-base duration-300 hover:bg-slate-700"
      >
        Clear Completed Todos!
      </button>
      {loading && (
        <div className="flex-1 grid place-items-center">
          <i className="fa-solid fa-spinner fa-spin text-6xl"></i>
        </div>
      )}
      {!loading && Object.keys(todos).length > 0 && (
        <>
          <h2 className="text-lg font-semibold">Todos:</h2>
          {Object.keys(todos)
            .sort((a, b) => b - a)
            .map((todoKey, i) => {
              return (
                <TodoCard
                  handleEditTodo={handleEditTodo}
                  handleAddEdit={handleAddEdit}
                  key={i}
                  edit={edit}
                  todoKey={todoKey}
                  edittedValue={edittedValue}
                  setEdittedValue={setEdittedValue}
                  handleDelete={handleDelete}
                  handleCompleteTodo={() => handleCompleteTodo(todoKey)}
                  isCompletedTodo={false}
                >
                  {todos[todoKey]}
                </TodoCard>
              );
            })}
        </>
      )}

      {!loading && Object.keys(completedTodos).length > 0 && (
        <>
          <h2 className="text-lg font-semibold mt-4">Completed Todos:</h2>
          {Object.keys(completedTodos)
            .sort((a, b) => b - a)
            .map((completedTodoKey, i) => {
              return (
                <TodoCard
                  handleEditTodo={handleEditTodo}
                  handleAddEdit={handleAddEdit}
                  key={i}
                  todoKey={completedTodoKey}
                  handleDelete={handleDelete}
                  handleCompleteTodo={() =>
                    handleCompleteTodo(completedTodoKey)
                  }
                  isCompletedTodo={true}
                >
                  {completedTodos[completedTodoKey]}
                </TodoCard>
              );
            })}
        </>
      )}
    </div>
  );
}
