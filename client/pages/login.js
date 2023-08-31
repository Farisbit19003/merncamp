import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
// import {AuthForm} from "../components/forms/AuthForm";
import { AuthForm } from "../components/forms/AuthForm";
import { UserContext } from "../context";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //console.log(name, email, password, secret);
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setState({
          user: data.user,
          token: data.token,
        });
        window.localStorage.setItem("auth", JSON.stringify(data));
        router.push("/user/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  if (state && state.token) router.push("/user/dashboard");
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            page="login"
            loading={loading}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered..? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center text-danger">
            Forgot password..!? please click{" "}
            <Link href="/forgot-password">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
