import { HomePageDataContext } from "@/src/providers/HomePageDataProvider";
import React, { useContext } from "react";
import Navbar from "../../sections/Navbar";
import Layout from "../../utils/Layout";
import DataTable from "./DataTable";
import UserDetails from "./UserDetails";
import UserDetailsProvider from "@/src/providers/UserDetailsProvider";
import Page from "../../utils/Page";

const HomePage = () => {
  return (
    <Page title="Home">
      <Navbar />
      <Layout.Container className="px-2 md:px-0">
        <Layout.Grid className="grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <UserDetailsProvider>
            <DataTable />
            <UserDetails />
          </UserDetailsProvider>
        </Layout.Grid>
      </Layout.Container>
    </Page>
  );
};

export default HomePage;
