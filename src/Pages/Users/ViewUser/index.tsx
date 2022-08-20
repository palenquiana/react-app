import React from "react";
import { Layout } from "../../../Components";
import { AddUser } from "../Add";

const ViewUser = () => {
  return (
    <>
      <Layout page="users">
        <AddUser />
      </Layout>
    </>
  );
};

export { ViewUser };
