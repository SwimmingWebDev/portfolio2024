import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../context/userProvider.jsx";

const Logout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(userContext);

  setCurrentUser(null);
  navigate(`/`);

  return <></>;
};

export default Logout;
