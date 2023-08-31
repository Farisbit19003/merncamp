import { Avatar, List } from "antd";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import React from "react";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";
import { toast } from "react-toastify";
const Following = () => {
  const [state, setState] = useContext(UserContext);
  const [people, setPeople] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);
  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");
      console.log("FOLLOWING =>", data);
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };
  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "/images/logo.png";
    }
  };
  const handleUnFollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      setState({ ...state, user: data });
      let filtered = people.filter((p) => p._id !== user._id);
      setPeople(filtered);
    
      toast.error(`Unfollowed ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="row col-md-6 offset-md-3">
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  {user.username}
                  <span
                    onClick={() => handleUnFollow(user)}
                    className="text-primary pointer"
                  >
                    UnFollow
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
      <Link
        href="/user/dashboard"
        className="d-flex justify-content-center p-5"
      >
        <RollbackOutlined className="h3" />
      </Link>
    </div>
  );
};
export default Following;
