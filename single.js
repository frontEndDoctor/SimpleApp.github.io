import React from "react";

function SinglePost({ post, viewPost }) {
  const { title, body } = post;

  return (
    <div className="all-posts">
      <h3>{title}</h3>

      <br></br>
    </div>
  );
}

export default SinglePost;
