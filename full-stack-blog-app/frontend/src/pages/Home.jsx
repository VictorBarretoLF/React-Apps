import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Tempora doloribus tenetur quasi omnis, cumque accusantium et harum adipisci.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum ullam corrupti animi est asperiores, voluptates nemo modi! ",
      img: "https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png",
    },
    {
      id: 2,
      title:
        "Tempora doloribus tenetur quasi omnis, cumque accusantium et harum adipisci.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum ullam corrupti animi est asperiores, voluptates nemo modi! ",
      img: "https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png",
    },
    {
      id: 3,
      title:
        "Tempora doloribus tenetur quasi omnis, cumque accusantium et harum adipisci.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum ullam corrupti animi est asperiores, voluptates nemo modi! ",
      img: "https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png",
    },
    {
      id: 4,
      title:
        "Tempora doloribus tenetur quasi omnis, cumque accusantium et harum adipisci.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum ullam corrupti animi est asperiores, voluptates nemo modi! ",
      img: "https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png",
    },
    {
      id: 5,
      title:
        "Tempora doloribus tenetur quasi omnis, cumque accusantium et harum adipisci.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum ullam corrupti animi est asperiores, voluptates nemo modi! ",
      img: "https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png",
    },
  ];
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
                <p>{post.desc}</p>
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
