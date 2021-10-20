// We begin by importing the required modules and dependencies
// axios : for getting data from a specified url
// Routing tools:BrowserRouter,Switch, Link,Route from react-router-dom for linking of pages

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SinglePost from "./single.js";

// """using axios, we get the data from json placeholder"""
// the catch method is called to recived the data from the URL
// in case the data isn't received, the .then method throws an error log

export default function RetrieveData() {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: { _limit: 20 }
      })
      .then((Response) => {
        SetPosts(Response.data);
      })
      .catch((Error) => {
        console.log("Error: $[err]");
      });
  }, []);

  // """To return the content of the post"""

  return (
    <div>
      <h5>Jackocoins </h5>
      <h2>Customers Review</h2>
      <ul className="container">
        {posts.map((post) => {
          return (
            <Router>
              <Link to={`/${post.id}`}>
                <li key={post.id}>
                  <SinglePost post={post} />
                </li>
              </Link>
            </Router>
          );
        })}
      </ul>
    </div>
  );
}
