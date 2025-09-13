import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import { useAuth } from "../context/authContext";
const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/verify-admin"
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner path="/" />;
};
export default AdminRoute;
