import React from "react";
import Filter from "../components/Filter";
import ListTodo from "../components/ListTodo";
import { Divider } from "antd";

const TodoApp = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "35%",
        boxShadow: "2px 5px 5px 2px #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Filter />
      <Divider />
      <ListTodo />
    </div>
  );
};

export default TodoApp;
