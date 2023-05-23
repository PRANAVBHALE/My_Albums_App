import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

const PageNotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title level={5}>404 Page Not Found!!</Title>
    </div>
  );
};

export default PageNotFound;
