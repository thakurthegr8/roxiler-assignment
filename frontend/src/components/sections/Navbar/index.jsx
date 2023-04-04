import React from "react";
import Layout from "../../utils/Layout";
import Typography from "../../utils/Typography";

const Navbar = () => {
  return (
    <Layout.Row className="border-b bg-white py-2">
      <Layout.Container className="px-2 md:px-0">
        <Layout.Row>
          <Typography.Subtitle>jsonplaceholder</Typography.Subtitle>
        </Layout.Row>
      </Layout.Container>
    </Layout.Row>
  );
};

export default Navbar;
