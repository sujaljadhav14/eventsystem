import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/authContext";

const UserDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <h3>User Profile</h3>
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      </Layout>
    </>
  );
};

export default UserDashboard;
