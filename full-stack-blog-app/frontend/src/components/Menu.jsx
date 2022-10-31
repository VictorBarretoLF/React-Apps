import React, { Fragment } from "react";

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

const Menu = () => {
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => {
        return (
          <div className="menu__post" key={post.id}>
            <img src={post.img} alt="images" />
            <h2>{post.title.slice(0, 50)}</h2>
            <button>read more</button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
