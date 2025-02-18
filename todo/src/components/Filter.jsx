import React, { useState } from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import {
  priorityFilter,
  searchFilter,
  statusFilterChange,
} from "../action/action";
import { filterSlice } from "../redux/reducers/FiltersSlice";

const { Search } = Input;
const Filter = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priorities, setPriorities] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(filterSlice.actions.searchFilter(e.target.value));
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    dispatch(filterSlice.actions.statusFilter(e.target.value));
  };

  const handlePriorities = (value) => {
    setPriorities(value);
    dispatch(filterSlice.actions.priorityFilter(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={search}
          onChange={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priorities}
          onChange={handlePriorities}
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
      </Col>
    </Row>
  );
};

export default Filter;
