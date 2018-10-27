import React, { useState, useEffect } from "react";
import * as S from "./components";
import "./TodoList.css";

const toggleCompletion = (arr, todoIndex) => {
    return arr.map((val, index) => {
        if (todoIndex === index) {
            return {
                todo: val.todo,
                isCompleted: !val.isCompleted
            };
        }
        return val;
    });
};

const Counter = () => {
    const [todos, setTodos] = useState([
        { isCompleted: false, todo: "Learn Hooks" }
    ]);
    const [addTodoInput, changeAddTodoInput] = useState("");

    useEffect(() => {
        document.title = `(${todos.length}) React App`;
    });

    return (
        <div>
            <S.Input
                value={addTodoInput}
                onChange={e => changeAddTodoInput(e.target.value)}
            />
            <S.Button
                onClick={() => {
                    if (addTodoInput !== "") {
                        setTodos([
                            ...todos,
                            { isCompleted: false, todo: addTodoInput }
                        ]);
                    }
                    changeAddTodoInput("");
                }}
            >
                Add Todo
            </S.Button>
            {todos.map(({ isCompleted, todo }, index) => (
                <S.Todo>
                    <S.TodoToggle
                        onClick={() => {
                            setTodos(toggleCompletion(todos, index));
                        }}
                        className={isCompleted ? "inactive" : "active"}
                    />
                    {todo}
                </S.Todo>
            ))}
        </div>
    );
};
export default Counter;
