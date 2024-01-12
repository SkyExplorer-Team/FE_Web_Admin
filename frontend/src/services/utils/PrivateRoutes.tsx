import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import isTokenValid from "./IsTokenValid";

const PrivateRoutes = () => {
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setTokenValid(false);
      return;
    }

    const checkToken = async () => {
      const isValid = await isTokenValid(token);
      setTokenValid(isValid);
    };

    checkToken(); 
  }, []); 

  if (tokenValid === null) {
    return <div>Loading...</div>;
  }

  return tokenValid ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
