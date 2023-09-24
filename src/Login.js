import React, { useEffect, useCallback, useMemo } from "react";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";

const hankoApi = process.env.REACT_APP_HANKO_API;

export const Login = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  useEffect(() => {
    // register the component
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    navigate("profile");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  return (
    <div className="container">
      <hanko-auth class="login-form" />
    </div>
  );
};
