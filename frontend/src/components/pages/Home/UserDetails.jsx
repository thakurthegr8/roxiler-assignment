import React, { useContext, useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import Typography from "../../utils/Typography";
import { UserDetailsContext } from "@/src/providers/UserDetailsProvider";
import jsonplaceholder from "@/src/services/api/jsonplaceholder";
import Description from "../../utils/Description";

const UserDetails = () => {
  const { currentId } = useContext(UserDetailsContext);
  const [data, setData] = useState(null);

  const getUserData = async () => {
    const req = await jsonplaceholder.get(`users/${currentId}`);
    const userData = await req.data;
    setData(userData);
  };

  useEffect(() => {
    if (currentId) {
      getUserData();
    }
  }, [currentId]);

  return (
    <Layout.Col>
      <Layout.Card className="p-4">
        <Typography.Title>User Details</Typography.Title>

        {data ? (
          <Description obj={data} />
        ) : (
          <Typography>No user selected</Typography>
        )}
      </Layout.Card>
    </Layout.Col>
  );
};

export default UserDetails;
