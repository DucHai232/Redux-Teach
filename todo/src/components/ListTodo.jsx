import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../action/action";
import { v4 as uuidv4 } from "uuid";
import { todoFilter, todoListSelector } from "../redux/Selectors";
import { todoSlice } from "../redux/reducers/TodoSlice";
const ListTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoFilter);
  const handleAddTodo = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            onChange={(value) => setPriority(value)}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default ListTodo;
