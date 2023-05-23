import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

const ErrorMsg = () => {
  return (
    <div
      data-testid="error-msg"
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title level={5}>Opps!!! Something went wrong!</Title>
    </div>
  );
};

export default ErrorMsg;
