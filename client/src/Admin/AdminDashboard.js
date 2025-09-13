import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/authContext";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <h3>Admin Profile</h3>
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      </Layout>
    </>
  );
};

export default AdminDashboard;
