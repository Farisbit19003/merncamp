import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import ParallaxBG from "../components/cards/ParallaxBG";
import React from "react";
import axios from "axios";
import Head from "next/head";
import io from "socket.io-client";
import PostPublic from "../components/cards/PostPublic";
const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, { reconnection: true });
const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);
  const [newsFeed, setNewsFeed] = useState([]);
  useEffect(() => {
    // console.log("SOCKETIO ON JOIN", socket);
    socket.on("new-post", (newPost) => {
      setNewsFeed([newPost, ...posts]);
    });
  }, []);

  const head = () => (
    <Head>
      <title>MERNCAMP</title>
      <meta name="description" content="A social Network" />
      <meta property="og:description" content="A Social Network" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MERNCAMP" />
      <meta property="og:url" content="http://merncamp.com" />
      <meta
        property="og:image:secure_url"
        content="http://merncamp.com/images/default.jpg"
      />
    </Head>
  );
  const collection = newsFeed.length > 0 ? newsFeed : posts;
  return (
    <>
      {head()}
      <ParallaxBG url="/images/default.jpg" />
      <div className="container">
        <div className="row pt-4">
          {collection.map((post) => (
            <div key={post._id} className="col-md-4">
              <Link
                href={`/post/view/${post._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <PostPublic key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  return { props: { posts: data } };
}

export default Home;
