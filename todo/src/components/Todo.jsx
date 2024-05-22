import React from "react";
import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkedComplete } from "../action/action";
import { todoSlice } from "../redux/reducers/TodoSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
const Todo = ({ id, name, priority, completed }) => {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.checkedComplete(id)); //dung reduxtoolkit thi khong can dung file action
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
};

export default Todo;
