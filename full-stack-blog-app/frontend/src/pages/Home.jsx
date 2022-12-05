import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);

  return (
    <div className="home">
      <div className="home__posts">
        {posts.map((post) => {
          return (
            <div className="home__post" key={post.id}>
              <div className="home__img-container">
                <img src={post.img} alt="" />
              </div>
              <div className="home__content">
                <Link to={`/post/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p>
                  {post.desc.slice(0, 200)}
                  {post.desc.length > 200 ? "..." : ""}
                </p>
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
