import HomePage from "@/src/components/pages/Home";
import HomePageDataProvider from "@/src/providers/HomePageDataProvider";
import jsonplaceholder from "@/src/services/api/jsonplaceholder";
import React from "react";

export default function Home(props) {
  console.log(props.data);
  return (
    <HomePageDataProvider data={props.data}>
      <HomePage />
    </HomePageDataProvider>
  );
}

export const getServerSideProps = async (_ctx) => {
  try {
    const getData = await jsonplaceholder.get("/todos");
    const data = await getData.data;
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
