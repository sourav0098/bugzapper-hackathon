import { Hanko, register } from "@teamhanko/hanko-elements";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const hankoApi = process.env.REACT_APP_HANKO_API;

  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  useEffect(() => {
    // register the component
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  const logout = () => {
    hanko.user.logout().catch((error) => {
      // handle error
    });
  };

  const redirectAfterLogout = () => {
    // successfully logged out, redirect to a login page in your application
    navigate("/");
  };

  useEffect(
    () =>
      hanko.onUserLoggedOut(() => {
        redirectAfterLogout();
      }),
    [hanko, redirectAfterLogout]
  );

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent:"end"
        }}
      >
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
      <hanko-profile />
    </div>
  );
};
