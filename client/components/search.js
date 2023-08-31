import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import People from "./cards/People";
import {toast} from "react-toastify";
const Search = (e) => {
  const [state,setState] = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [result,setResult]=useState([]);
  const searchUser = async (e) => {
    e.preventDefault();
    //console.log(` Find "${query}" f from db`);
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      //console.log("search user respons =>", data);
        setResult(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFollow = async (user) => {
    //console.log("add to the following", user);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      //console.log("handle follow respons=>",data);
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      setState({ ...state, user: data });
      let filtered = result.filter((p) => p._id !== user._id);
      setResult(filtered);
      newsFeed();
      toast.success(`Following ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnfollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      setState({ ...state, user: data });
      let filtered = result.filter((p) => p._id !== user._id);
      setResult(filtered);
      newsFeed();
      toast.error(`Unfollowed ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form-inline pt-3 mx-auto row" onSubmit={searchUser}>
        <div className="col-8">
          {" "}
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
            }}
            value={query}
            className="form-control "
            type="search"
            placeholder="Search..."
          />
        </div>
        <button className="btn btn-outline-primary btn-sm col-4" type="submit">
          Search
        </button>
      </form>
      {result &&
        result.map((r) => (
          <People
            key={r._id}
            people={result}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
          />
        ))}
    </>
  );
};
export default Search;
