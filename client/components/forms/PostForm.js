import React from "react";
import {  CameraTwoTone, LoadingOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


export const PostForm = ({ content, setContent, postSubmit, handleImage, uploading, image }) => {
  return (
    <div className="card">
      <div className="card-body pb-3">
        <form className="form-group">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(e) => setContent(e)}
            className="form-control"
            placeholder="write something..."
          />
        </form>
      </div>
      <div className="card-footer d-flex justify-content-between text-muted">
        <button
          disabled={!content}
          onClick={postSubmit}
          className="btn btn-primary btn-sm mt-1"
        >
          Post
        </button>
        <label>
          {image && image.url ?(
            <Avatar size={30} src={image.url} className="mt-1"/>
          ): uploading ?(
            <LoadingOutlined className="mt-2"/>
          ):(<CameraTwoTone className="mt-3 h5"/>)}
          
          <input onChange={handleImage} type="file" accept="images/*" hidden/>
        </label>
      </div>
    </div>
  );
};
