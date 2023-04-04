import { HomePageDataContext } from "@/src/providers/HomePageDataProvider";
import React, { useContext } from "react";
import Table from "../../utils/Table";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import Button from "../../utils/Button";
import Typography from "../../utils/Typography";
import Layout from "../../utils/Layout";
import Input from "../../utils/Form/Input";
import { UserDetailsContext } from "@/src/providers/UserDetailsProvider";

const cols = [
  {
    key: "id",
    placeholder: "Id",
    render: (text, _obj, _target) => (
      <Typography className="text-sm w-full text-center">{text}</Typography>
    ),
    sorter: true,
  },
  {
    key: "title",
    placeholder: "Title",
  },
  {
    key: "completed",
    placeholder: "Status",
    render: (text, _obj, _target) => (
      <Typography
        className={`p-1 my-2 mx-4 text-xs rounded-md text-center ${
          text ? "text-green-600 bg-green-200" : "text-yellow-600 bg-yellow-200"
        }`}
      >
        {text ? "Done" : "Not Done"}
      </Typography>
    ),
  },
  {
    key: "userId",
    placeholder: "Action",
    render: (text, obj, _target) => (
      <Layout.Row className="items-center justify-center gap-2">
        <UserDetailsContext.Consumer>
          {(ctx) => (
            <Button
              className="btn-outlined-primary btn-sm gap-2"
              onClick={() => ctx.setCurrentId(obj[_target])}
            >
              <Typography.Caption className="text-xs">View User</Typography.Caption>
              <Typography.Caption className="p-1 rounded-full bg-primary text-white px-2 text-xs">{text}</Typography.Caption>
            </Button>
          )}
        </UserDetailsContext.Consumer>
      </Layout.Row>
    ),
    target: "userId",
  },
];

const Search = () => {
  const { setCurrentData, data } = useContext(HomePageDataContext);
  const search = (e) => {
    setTimeout(() => {
      const value = e.target.value;
      if (value.length === 0) {
        setCurrentData(data);
      }
      const filteredData = data.filter((item) => {
        for (const obj of cols) {
          const currentItem = item[obj.key].toString();
          const isIncluded =
            value.includes(currentItem) || currentItem.includes(value);
          if (isIncluded) return true;
        }
        return false;
      });
      setCurrentData(filteredData);
    }, 500);
  };
  return (
    <Layout.Row className="group items-center justify-between">
      <Typography.Heading>Todos</Typography.Heading>
      <Layout.Row className="items-center gap-2">
        <Input
          type="search"
          placeholder="Search"
          onChange={search}
          className="text-black"
        />
        <SearchIcon className="w-6 h-6 text-gray-300 group-hover:text-gray-500" />
      </Layout.Row>
    </Layout.Row>
  );
};

const DataTable = () => {
  const { currentData } = useContext(HomePageDataContext);
  return (
    <Layout.Col className="gap-2">
      <Search />
      <Layout.Card className="bg-white">
        <Table cols={cols} dataset={currentData} />
      </Layout.Card>
    </Layout.Col>
  );
};

export default DataTable;
