import React from "react";
import Typography from "../Typography";
import Layout from "../Layout";

const Description = ({ obj }) => {
  return (
    <Layout.Col className="gap-2">
      {Object.keys(obj).map((item, index) =>
        typeof obj[item] === "object" ? (
          <details className="ml-2 border bg-gray-100 mix-blend-multiply	 p-2 rounded-md capitalize" key={index}>
            <summary color="blue">{item}</summary>
            <Description obj={obj[item]} key={index} />
          </details>
        ) : (
          <Layout.Row key={index} className="items-center gap-2">
            <Typography className="bg-primary/75 text-white rounded-md p-1 text-xs capitalize">
              {item}
            </Typography>
            <Typography>{obj[item]}</Typography>
          </Layout.Row>
        )
      )}
    </Layout.Col>
  );
};

export default Description;
