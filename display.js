// We begin by importing the required modules and dependencies
// axios : for getting data from a specified url
//  useParams from react-router-dom for displaying specified parameters
// the css for the display is also imported

import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./display.css";

// Let's go over to displaying all the posts(20)

export default function DisplayPost() {
  const [posts, SetPosts] = useState([]);
  const [id, setIds] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setIds(request);
      console.log(request.data.result);

      return request;
    }
    getData();
  }, []);

  // // console.log(id);
  // // const [id,setId] = useState(1)
  // const [idButtonClick,setIdButtonClick]= useState(1)
  // const handleClick = () => {
  //     setIdButtonClick(id)
  // // }

  // // },
  // //
  // // )

  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id} align="start">
            <div>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
