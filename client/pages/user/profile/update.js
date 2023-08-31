import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Modal } from "antd";
import { Avatar } from "antd";
import Link from "next/link";
import { LoadingOutlined, CameraTwoTone } from "@ant-design/icons";
// import {AuthForm} from "../components/forms/AuthForm";\
import { AuthForm } from "../../../components/forms/AuthForm";
import { UserContext } from "../../../context";
import { useRouter } from "next/router";
const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (state && state.user) {
      //console.log('user from state =>',state.user);
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
      setImage(state.user.image);
    }
  }, [state && state.user]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //console.log(name, email, password, secret);
      setLoading(true);
      const { data } = await axios.put(`/profile-update`, {
        name,
        username,
        about,
        email,
        image,
        password,
        secret,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        setState({ ...state, user: data });
        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    //console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData);
      //console.log("uploaded image =>", data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  //if (state && state.token) router.push("/");
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image">
        <div className="col text-center">
          <h1>Profile</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <label className="d-flex justify-content-center h1">
            {image && image.url ? (
              <Avatar size={100} src={image.url} className="mt-1" />
            ) : uploading ? (
              <LoadingOutlined className="mt-2" />
            ) : (
              <CameraTwoTone className="mt-3" />
            )}

            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>
          <AuthForm
            handleSubmit={handleSubmit}
            ProfileUpdate={true}
            name={name}
            setName={setName}
            username={username}
            setUsername={setUsername}
            about={about}
            setAbout={setAbout}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulation..!!"
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Profle Updated successfuly...!!!</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default ProfileUpdate;
