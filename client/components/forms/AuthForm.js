import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export const AuthForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  handleSubmit,
  loading,
  page,
  about,
  setAbout,
  username,
  setUsername,
  ProfileUpdate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {ProfileUpdate ? (
        <>
          <div className="form-group py-2">
            <label>UserName</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Your User-Name"
            />
          </div>
          <div className="form-group py-2">
            <label>About</label>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Tell us about Yourself"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {page !== "login" && (
        <div className="form-group py-2">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Please Enter your Name"
          />
        </div>
      )}
      <div className="form-group py-2">
        <label>Email</label>
        <input
          value={email}
          disabled={ProfileUpdate}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Please Enter your Email"
        />
      </div>
      {page !== "login" && (
        <div hidden={ProfileUpdate} className="form-group py-2">
          <label>Security Question</label>
          <select className="form-control">
            <option>What is your Favorite Color..?</option>
            <option>What is your BestFriend Name..?</option>
            <option>What is your Favourite Book..?</option>
          </select>
          <label>Answer</label>
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="text"
            className="form-control py-2"
            placeholder="Please Enter your Answer"
          />

          <small>This will be use For Forgetten Password</small>
        </div>
      )}
      <div className="form-group py-2">
        <label hidden={ProfileUpdate}>Password</label>
        <input
          value={password}
          hidden={ProfileUpdate}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control py-2"
          placeholder="Please Enter your Password"
        />
      </div>
      <div className="form-group py-2">
        <button
          disabled={
            ProfileUpdate
              ? loading
              : page !== "login"
              ? !name || !email || !secret || !password || loading
              : !password || !email || loading
          }
          type="submit"
          className="btn btn-primary col-12"
        >
          {loading ? <LoadingOutlined /> : "Submit"}
        </button>
      </div>
    </form>
  );
};
