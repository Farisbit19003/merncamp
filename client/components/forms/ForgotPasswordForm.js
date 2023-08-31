import React from "react";
import {  SyncOutlined } from "@ant-design/icons";
export const ForgotPasswordForm = ({
  email,
  setEmail,
  newPassword,
  setNewPassword,
  secret,
  setSecret,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group py-2">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Please Enter your Email"
        />
      </div>
      <div className="form-group py-2">
        <label>Security Question</label>
        <select className="form-control">
          <option>What is your favorite Color</option>
          <option>What is your BestFriend Name</option>
          <option>What is your Father Name</option>
        </select>
        <label>Answer</label>
        <input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Please Enter your Answer"
        />
      </div>
      <div className="form-group py-2">
        <label> New Password</label>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Please Enter your New Password"
        />
      </div>
      <div className="form-group py-2">
        <button
          disabled={!email || !secret || !newPassword || loading}
          type="submit"
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};
