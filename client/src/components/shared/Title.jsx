import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Kura",
  description = "This is the Chat App callrd Kura",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="desciption" content={description} />
    </Helmet>
  );
};

export default Title;
