import { HomePageDataContext } from "@/src/providers/HomePageDataProvider";
import React, { useContext } from "react";
import Navbar from "../../sections/Navbar";
import Layout from "../../utils/Layout";
import DataTable from "./DataTable";
import UserDetails from "./UserDetails";
import UserDetailsProvider from "@/src/providers/UserDetailsProvider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Layout.Container>
        <Layout.Grid className="grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <UserDetailsProvider>
            <DataTable />
            <UserDetails />
          </UserDetailsProvider>
        </Layout.Grid>
      </Layout.Container>
    </>
  );
};

export default HomePage;
