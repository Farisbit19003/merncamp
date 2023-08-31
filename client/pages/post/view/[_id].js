import ParallaxBG from "../../../components/cards/ParallaxBG";
import React from "react";
import axios from "axios";
import Head from "next/head";
import PostPublic from "../../../components/cards/PostPublic";

const SinglePost = ({ post }) => {
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
  return (
    <>
      {head()}
      <ParallaxBG url="/images/default.jpg" />
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-8 offset-2">
            <PostPublic key={post._id} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`/post/${ctx.params._id}`);
  return { props: { post: data } };
}

export default SinglePost;
